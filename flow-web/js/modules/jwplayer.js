/* globals jwplayer, JSGlobals, permutive */
/* cSpell:enableCompoundWords */
/* cSpell:ignore addtl */

import { isSubscriber } from '../utils/isSubscriber';

import { getTargeting as apsGetTargeting } from './aps';
import { trackVideo } from './chartbeat';
import { getTargeting as iasGetTargeting } from './ias';
import { getTargeting as prebidGetTargeting } from './instreamVideoPrebid';
import {
  onReady,
  onPlayListItem,
  onBeforePlay,
  onRequest,
  onPlay,
  onPause,
  onSeek,
  onTime,
  onAdImpression,
  onAdTime,
  onAdPlay,
  onAdClick,
  onAdsManager,
  onComplete,
} from './jwplayer/eventHandlers';
import { createAdTag, permutiveEnabled } from './jwplayer/utils';
import { warn } from './log';
import { initPermutiveReadyWithTimeout } from './permutive';
import * as timer from './timer';
import { loadJS } from './util';
import getPpid from './videoPlayer/getPpid';
import { sharedOptions } from './videoPlayer/sharedOptions';
import setVideoCookieDeprecationLabel from './videoTargeting';

export const jwplayerSetup = ({ containerId, options, nextUrl, consent }) => {
  timer.start('JWPlayerSetup');

  const playerInstance = jwplayer(containerId).setup(options);

  trackVideo(jwplayer);

  playerInstance.nextUrl = nextUrl;
  playerInstance.isFullscreen = false;
  playerInstance.consent = consent || false;
  playerInstance.playerNow = new Date();

  playerInstance.on('ready', onReady);

  playerInstance.on('playlistItem', onPlayListItem);

  playerInstance.on('beforePlay', onBeforePlay);

  playerInstance.on('adRequest', onRequest);

  playerInstance.on('play', onPlay);

  playerInstance.on('pause', onPause);

  playerInstance.on('seek', onSeek);

  playerInstance.on('time', onTime);

  playerInstance.on('adImpression', onAdImpression);

  playerInstance.on('adTime', onAdTime);

  playerInstance.on('adPlay', onAdPlay);

  playerInstance.on('adClick', onAdClick);

  playerInstance.on('adsManager', onAdsManager);

  playerInstance.on('complete', onComplete);

  timer.end('JWPlayerSetup');
};

const jwplayerSetupWithPermutive = (args) => {
  const { consent } = args;
  // Player initialisation, inside the Permutive readyWithTimeout function, to start the player when Permutive segments are available
  if (permutiveEnabled(consent)) {
    permutive.readyWithTimeout(
      jwplayerSetup.bind(this, args),
      'realtime',
      2500,
    );
  } else {
    jwplayerSetup(args);
  }
};

/**
 * Get the targeting key-value pairs from ad bidding services
 * @param {string} containerId
 * @param {string} mediaId
 * @param {string} adUnitCode
 * @param {string} adUnitPath
 * @returns {{[key: string], string}} targeting key-value pairs
 */
export const getBidsTargeting = async (
  containerId,
  mediaId,
  adUnitCode,
  adUnitPath,
) => {
  const requests = [
    iasGetTargeting(containerId, adUnitPath),
    apsGetTargeting(adUnitCode),
    prebidGetTargeting(mediaId, containerId, adUnitCode, [640, 480]),
  ];

  const targetingArr = await Promise.allSettled(requests);
  const targeting = targetingArr.reduce((acc, curr) => {
    if (curr.status === 'fulfilled') {
      return { ...acc, ...curr.value };
    } else {
      warn(curr.reason);
    }
    return acc;
  }, {});

  return targeting;
};

const init = async (consent) => {
  const cookieDeprecationLabel = await setVideoCookieDeprecationLabel();
  const elements = document.querySelectorAll('[data-jwplayer]');
  elements.forEach(async (element) => {
    const containerId = element.id;
    const playerType = element.dataset.jwplayerPlayerType;
    const data = JSON.parse(element.dataset.jwplayerData);
    const nextUrl = element.dataset.jwplayerNextUrl;
    const adUnitCode = element.dataset.adUnitCode;
    const adUnitPath = JSGlobals.videoAdUnitPath;
    const mediaId = JSGlobals.article.heroMediaId;
    const ppid = getPpid();

    const adTag = createAdTag();
    adTag.custParams.set('playerType', playerType);

    // @see {@link https://support.google.com/admanager/answer/7320899?hl=en#vpa}
    const isAutoplay = jwplayer(containerId).getConfig().autostart;
    adTag.custParams.set('vpa', isAutoplay ? 'auto' : 'click');

    if (cookieDeprecationLabel.length) {
      adTag.custParams.set(
        'chrome_facilitated_testing',
        cookieDeprecationLabel,
      );
    }

    const hasAd = !isSubscriber();

    if (ppid) {
      adTag.custParams.set('ppid', ppid);
    }

    if (hasAd) {
      const bidsTargeting = await getBidsTargeting(
        containerId,
        mediaId,
        adUnitCode,
        adUnitPath,
      );
      Object.entries(bidsTargeting).forEach(([key, value]) => {
        adTag.custParams.set(key, value);
      });
    }

    // This advertising object will override the ad schedule set from the jwplayer.
    // jwplayer doesn't provide API to modify the ad tag from the config option on the fly if we use the ad schedule
    // so we set ad tag in `advertising.tag` and do all the modification and start ad play in `beforePlay` handler
    const advertising = {
      client: 'googima',
      outstream: false,
      tag: adTag.toString(),
      autoplayadsmuted: true,
    };

    jwplayerSetupWithPermutive({
      containerId,
      playerType,
      options: {
        ...data,
        ...sharedOptions(),
        ...(hasAd && { advertising }),
      },
      nextUrl,
      consent,
    });
  });

  // @see INDY-716
  // adapter scripts must be included after the IMA SDK <script> tag for the integration to work
  loadJS(['https://static.adsafeprotected.com/vans-adapter-google-ima.js']);
};

export default async (consent) => {
  permutiveEnabled(consent) && initPermutiveReadyWithTimeout();

  if (typeof jwplayer === 'function') {
    // jwplayer already loaded, therefore event has already fired; too late to set up a listener
    // get set-up parameters from data attributes on jwplayer script tag
    await init(consent);
  } else {
    // jwplayer not loaded yet, set up a listener for the event that will be dispatched once it loads
    // get set-up parameters from event
    document.addEventListener('jwplayerLoaded', async () => {
      await init(consent);
    });
  }
};
