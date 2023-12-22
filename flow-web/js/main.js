/* globals JSGlobals */
import * as Throttle from 'promise-parallel-throttle';

import {
  COOKIE_SUBSCRIBER_ORIGIN,
  COOKIE_FEAT_NO_AMP,
  COOKIE_FEAT_PRIORITISE_VIDEO_LOADING,
  COOKIE_FEAT_ANONYMISED,
  COOKIE_FEAT_PUBX_INTEGRATION,
} from '@app/constants/cookies';

import { PUBLICATION_ES, PUBLICATION_UK } from '@app/constants/publication';
import {
  SUBSCRIBER_ORIGIN_UK,
  SUBSCRIBER_ORIGIN_EU,
} from '@app/constants/subscriberOrigin';

import './modules/adobe-analytics/mock-object';

import adobeBootstrap from './modules/adobe-analytics/bootstrap';
import anonymised from './modules/anonymised';
import { getApvSegment } from './modules/apvSegment';
import initBookmark from './modules/bookmark';
import initBrazePushNotificationsWithDelay from './modules/braze/initBrazePushNotificationsWithDelay';
import initBrazeWebPushPageNotifications from './modules/braze/initBrazeWebPushPageNotifications';
import chartbeat from './modules/chartbeat';
import checkAdBlocker from './modules/checkAdBlocker';
import { checkConsent } from './modules/cmp';
import initComments from './modules/comments';
import initCompetition from './modules/competition';
import { getCookie } from './modules/cookie';
import dotmetrics from './modules/dotmetrics';
import facebookSDK from './modules/facebookSDK';
import form from './modules/form';
import initGoogleSearch from './modules/googleSearch';
import googleSignIn from './modules/googleSignIn';
import gtm from './modules/gtm';
import hardRefresh from './modules/hardRefresh';
import hideShowPassword from './modules/hideShowPassword';
import ias from './modules/ias';
import gpt from './modules/indy-gpt';
import initServiceWorker from './modules/initServiceWorker';
import inputDetection from './modules/inputDetection';
import instagramEmbed from './modules/instagramEmbed';
import JWPlayer from './modules/jwplayer';
import locale from './modules/locale';
import { group, groupEnd } from './modules/log';
import login from './modules/login';
import delayMenuHoverState from './modules/menu';
import navbarScroll from './modules/navbarScroll';
import parallax from './modules/parallax';
import {
  initPermutive,
  passConsentToPermutive,
} from './modules/permutive/initPermutive';
import permutiveCookieSync from './modules/permutive/permutiveCookieSync';
import persistentPlayer from './modules/persistentPlayer';
import PixelsPlayer from './modules/pixelsplayer';
import polar from './modules/polar';
import { populatePermutiveId } from './modules/populatePermutiveId';
import prebid from './modules/prebid';
import priceComparisonEmbed from './modules/price-comparison-embed';
import pubX from './modules/pubX';
import pubmatic from './modules/pubmatic';
import recaptcha from './modules/recaptcha';
import regGate from './modules/reg-gate';
import register from './modules/register';
import registerWall from './modules/registerWall';
import scoreboard from './modules/scoreboard';
import * as slotCallBack from './modules/slotCallBack';
import sticky from './modules/sticky';
import stickyFooter from './modules/stickyFooter';
import taboola from './modules/taboola';
import tiktokEmbed from './modules/tiktokEmbed';
import * as timer from './modules/timer';
import trackonomics from './modules/trackonomics';
import twitterWidgets from './modules/twitterWidgets';
import userStatus from './modules/userStatus';
import { loadJS } from './modules/util';
import visibleNav from './modules/visibleNav';
import trackonomicsAffiliateLinks from './trackonomicsAffiliateLinks';
import { isFeatureFlagEnabled } from './utils/featureFlag';
import isAnonymisedCallbackPageLoad from './utils/isAnonymisedCallbackPageLoad';

timer.init();
timer.start('first ad load');

window.JSGlobals = window.JSGlobals || {
  mode: 'development',
};

const isAnonymisedPageLoad = isAnonymisedCallbackPageLoad();

const geoLocation = getCookie(COOKIE_SUBSCRIBER_ORIGIN) ?? SUBSCRIBER_ORIGIN_UK;
const isUK = geoLocation === SUBSCRIBER_ORIGIN_UK;
const isUKDomain = JSGlobals.domain === PUBLICATION_UK;
const refresh = JSGlobals.isSection;
const inCMSView = location.search.includes('live-browse');
const shouldLoadAds =
  !inCMSView &&
  window.digitalData?.user_status !== 'premium' &&
  (JSGlobals.article || JSGlobals.isSection) &&
  !JSGlobals.article?.premium &&
  JSGlobals.article?.sensitive !== true;
const prebidEnabled =
  (!!getCookie(COOKIE_SUBSCRIBER_ORIGIN) ||
    window.JSGlobals.mode === 'development') &&
  shouldLoadAds &&
  window.JSGlobals.prebidEnabled;
let hasRegGate = false;
let hasAdBlocker = false;
let consent;
let apvSegment;

const gptInit = async (consent, hasRegGate = false) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
    gpt({
      refresh,
      slotRenderedCallback: slotCallBack.onRendered,
      slotLoadedCallback: slotCallBack.onLoaded,
      consent,
      prebidEnabled,
      hasRegGate,
      firstAdLoaded: () => {
        timer.end('first ad load');
      },
      allFirstScreenAdsLoaded: () => {
        resolve();
      },
    });
  });
};

if (!isAnonymisedPageLoad) {
  // don't let analytics error kill page
  try {
    // Adobe tracking pre-requisites must load immediately and synchronously
    adobeBootstrap();
  } catch (err) {
    console.error('Analytics error caught: ', err);
  }
}

const initialisers = [
  {
    ...(isFeatureFlagEnabled(COOKIE_FEAT_NO_AMP) && initServiceWorker()),
  },
  {
    ...(JSGlobals.domain !== PUBLICATION_ES &&
      JSGlobals.isLiveBlog &&
      initBrazePushNotificationsWithDelay()),
  },
  {
    ...(JSGlobals.domain !== PUBLICATION_ES &&
      window.location.pathname === '/web-push' &&
      initBrazeWebPushPageNotifications()),
  },
  {
    checkAdBlocker: async () => {
      hasAdBlocker = await checkAdBlocker();
    },
  },
  {
    getApvSegment: () => {
      apvSegment = getApvSegment();
    },
    dotmetrics: !isAnonymisedPageLoad && dotmetrics,
    gtm: async () => {
      if (!hasAdBlocker && !inCMSView) {
        await gtm();
      }
    },
    chartbeat: !isAnonymisedPageLoad && chartbeat,
    permutive: !isAnonymisedPageLoad && initPermutive,
    consent: {
      method: async () => {
        // we only check for consent on UK and EU
        // for other regions we assign true to consent to bypass it
        consent = [SUBSCRIBER_ORIGIN_UK, SUBSCRIBER_ORIGIN_EU].includes(
          geoLocation,
        )
          ? await checkConsent()
          : true;
      },
      dependents: {
        permutive:
          !isAnonymisedPageLoad &&
          (async () => {
            if (!hasAdBlocker) {
              await passConsentToPermutive(
                consent,
                getCookie('euconsent-v2', 'none'),
              );
            }
          }),
        anonymised: isFeatureFlagEnabled(COOKIE_FEAT_ANONYMISED) && anonymised,
        pubX: () => {
          consent &&
            isFeatureFlagEnabled(COOKIE_FEAT_PUBX_INTEGRATION) &&
            pubX();
        },
        prebid: async () => {
          if (prebidEnabled && !hasAdBlocker) {
            await loadJS([
              JSGlobals.manifest[isUK ? 'prebid.js' : 'prebid_non_uk.js'],
              '/js/third-party/aps.js',
            ]);

            await prebid();
          }
        },
        ias,
        permutiveCookieSync: !isAnonymisedPageLoad && permutiveCookieSync,
        pubmatic,
        trackonomics: () => {
          consent && trackonomics();
        },
      },
    },
  },
  {
    gpt:
      !hasAdBlocker &&
      shouldLoadAds &&
      (async () => {
        await gptInit(consent, hasRegGate);
      }),
    ...(isFeatureFlagEnabled(COOKIE_FEAT_PRIORITISE_VIDEO_LOADING) && {
      JWPlayer: async () => {
        await JWPlayer(consent);
      },
      PixelsPlayer: async () => {
        await PixelsPlayer(consent, prebidEnabled);
      },
    }),
  },
  {
    registerWall,
    /**
     * This script must be initialised before the userStatus.js.
     * Otherwise, the RegisterWall will appear without the register script
     * and user won't be able to submit the form until it won't be loaded
     */
    userStatus: async () => {
      if (JSGlobals.userLogin) {
        await userStatus(apvSegment);
      }
    },
    regGate:
      !inCMSView &&
      JSGlobals.article &&
      isUKDomain &&
      (async () => {
        if (!hasAdBlocker) {
          hasRegGate = await regGate();
        }
      }),
  },
  {
    initComments: JSGlobals.userComments && JSGlobals.article && initComments,

    ...(!isFeatureFlagEnabled(COOKIE_FEAT_PRIORITISE_VIDEO_LOADING) && {
      JWPlayer: async () => {
        await JWPlayer(consent);
      },
      PixelsPlayer: async () => {
        await PixelsPlayer(consent, prebidEnabled);
      },
    }),
    initBookmark: isUKDomain && JSGlobals.article && initBookmark,
    initCompetition:
      JSGlobals.userLogin && JSGlobals.article && initCompetition,
    form,
    register,
    recaptcha,
    delayMenuHoverState,
    persistentPlayer,
    hardRefresh: refresh && hardRefresh,
    hideShowPassword,
    login,
    googleSignIn,
    sticky,
    navbarScroll,
    scoreboard,
    stickyFooter,
    locale: isUKDomain && locale,
    populatePermutiveId: !permutiveCookieSync && populatePermutiveId,
    visibleNav,
    priceComparisonEmbed,
    inputDetection,
    twitterWidgets,
    facebookSDK,
    instagramEmbed,
    tiktokEmbed,
    parallax,
    trackonomicsAffiliateLinks,
  },
  {
    googleSearch: async () => {
      if (JSGlobals.cseId) {
        await initGoogleSearch(JSGlobals.cseId);
      }
    },
    taboola: JSGlobals.article?.sensitive !== true && taboola,
  },
  {
    polar: JSGlobals.article && polar,
  },
  {
    ready: () => {
      document.documentElement.classList.add('indy-ready');
    },
  },
];

const initPromises = (inits) =>
  Object.keys(inits).map((key) => async () => {
    const initFunc = inits[key];

    if (!initFunc) {
      return;
    }

    timer.start(key);

    try {
      if (initFunc.method) {
        await initFunc.method();
        timer.end(key);
        if (initFunc.dependents) {
          const groupName = `${key} deps`;
          group(groupName);
          await Throttle.all(initPromises(initFunc.dependents));
          groupEnd(groupName);
        }
      } else {
        await initFunc();
        timer.end(key);
      }
    } catch (e) {
      console.warn(`Error caught in ${key}()`);
      console.error(e);
    }
  });

const initialiseModules = async () => {
  for (let i = 0; i < initialisers.length; i++) {
    const groupName = `group ${i + 1}`;
    group(groupName);
    await Throttle.all(initPromises(initialisers[i]));
    groupEnd(groupName);
  }
};

initialiseModules();
