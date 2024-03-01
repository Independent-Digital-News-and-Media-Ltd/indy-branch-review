/* global _taboola */
import { SUBSCRIPTION_CAUSE } from '@app/constants/localStorage';

import * as thisModule from './taboola';
import { loadJS } from './util';

const TYPE_HOMEPAGE = 'homepage';
const TYPE_CATEGORY = 'category';

const taboolaUnits = [
  {
    mode: 'thumbnails-d1',
    container: 'taboola-below-article-1',
    placement: 'Below Article Thumbnails',
    target_type: 'mix',
  },
  {
    mode: 'alternating-thumbnails-d1',
    container: 'taboola-carousel-thumbnails',
    placement: 'Mid Article Thumbnails',
    target_type: 'mix',
  },
  {
    mode: 'thumbnails-k1',
    container: 'taboola-right-rail',
    placement: 'Right Rail Thumbnails',
    target_type: 'mix',
  },
  {
    mode: 'organic-thumbs-feed-01',
    container: 'taboola-below-indy-best-feed',
    placement: 'Below Indy Best Feed',
    target_type: 'mix',
  },
  {
    mode: 'rbox-tracking',
    container: 'taboola-newsroom',
    placement: 'Newsroom',
  },
  {
    mode: 'thumbs-feed-hero-1sc-6sc-esi-inde',
    container: 'taboola-ms-hero',
    placement: 'MS Hero',
    target_type: 'mix',
  },
  {
    mode: 'thumbnails-mid-a',
    container: 'taboola-mid-article-thumbnails-live-blogs',
    placement: 'Mid Article Thumbnails Live Blogs',
    target_type: 'mix',
  },
  {
    mode: 'thumbnails-stream-1x4-a_sc',
    container: 'taboola-mid-article-thumbnails-crime',
    placement: 'Mid Article Thumbnails Crime',
    target_type: 'mix',
  },
  {
    mode: 'thumbnails-a-sc',
    container: 'taboola-below-article-thumbnails-crime',
    placement: 'Below Article Thumbnails Crime',
    target_type: 'mix',
  },
  {
    mode: 'thumbnails-rr-sc',
    container: 'taboola-right-rail-thumbnails-crime',
    placement: 'Right Rail Thumbnails Crime',
    target_type: 'mix',
  },
];

const belowSectionUnits = [
  {
    mode: 'thumbs-feed-01',
    container: 'taboola-below-section-front-feed',
    placement: 'Below Section Front Feed',
    target_type: 'mix',
  },
  {
    mode: 'thumbs-feed-01',
    container: 'taboola-mobile-below-section-front-feed',
    placement: 'Mobile Below Section Front Feed',
    target_type: 'mix',
  },
];

const relatedArticleUnits = [
  {
    mode: 'alternating-thumbnails-stream-1x4',
    container: 'taboola-mid-article-thumbnails-ii',
    placement: 'Mid Article Thumbnails II',
    target_type: 'mix',
  },
  {
    mode: 'alternating-thumbnails-stream-1x4-a',
    container: 'taboola-mid-article-thumbnails-iii',
    placement: 'Mid Article Thumbnails III',
    target_type: 'mix',
  },
];

const userStatusToTaboolaUserType = (status) => {
  return (
    {
      premium: 'subscriber',
      registered: 'registered',
      anonymous: 'guest',
    }[status] || 'other'
  );
};

const pushPaywallTracking = (article) => {
  const { user_status: userStatus, uid: userId } = window.digitalData;

  window._taboola.push({
    unified_id: userId,
    user_type: userStatusToTaboolaUserType(userStatus),
    paywall: article.premium && userStatus !== 'premium',
  });
};

const pushUnit = (unit) => {
  const container = document.getElementById(unit.container);
  if (container) {
    const display = window
      .getComputedStyle(container)
      .getPropertyValue('display');
    if (display !== 'none') {
      _taboola.push(unit);
    }
  }
};

export const getPageUrl = () => {
  const { host, pathname } = window.location;
  return `//${host}${pathname}`;
};

const pushConfig = () => {
  window._taboola = window._taboola || [];

  const { article, sectionName } = window.JSGlobals;
  const { pageType, sectionValues } = window.JSGlobals.taboola;

  if (article) {
    _taboola.push({
      article: 'auto',
      url: thisModule.getPageUrl(),
    });

    const footerPrompt = document.getElementById('stickyFooterContainer');
    _taboola.push({
      listenTo: 'visible',
      handler: (e) => {
        if (e.detail.placement.includes('Below Article Thumbnails | Card 19')) {
          footerPrompt.style.display = 'none';
        }
      },
    });

    pushPaywallTracking(article);

    if (article.premium) {
      _taboola.push({ premium: true });
    }
  }

  if (pageType === 'section') {
    const type = sectionName === 'News' ? TYPE_HOMEPAGE : TYPE_CATEGORY;
    _taboola.push({ [type]: 'auto' });
    sectionValues.forEach((unit) => {
      delete unit.category;
      if (
        (type === TYPE_HOMEPAGE && unit.pageType === TYPE_HOMEPAGE) ||
        (type === TYPE_CATEGORY && unit.pageType === TYPE_CATEGORY)
      ) {
        pushUnit(unit);
      }
    });
    // For section page
    belowSectionUnits.forEach((unit) => pushUnit(unit));
  }

  if (pageType === 'article') {
    relatedArticleUnits.forEach((unit) => pushUnit(unit));
  }

  if (pageType !== 'section') {
    taboolaUnits.forEach((unit) => pushUnit(unit));
  }

  _taboola.push({ flush: true });
};

const getPublishId = () => {
  const { publisherId, publisherIdIndyBest } = window.JSGlobals.taboola;

  return window.location.pathname?.includes('indybest')
    ? publisherIdIndyBest
    : publisherId;
};

const fetchLoader = async () => {
  const publisherId = getPublishId();

  await loadJS([`//cdn.taboola.com/libtrc/${publisherId}/loader.js`]);
  window?.performance?.mark?.('tbl_ic');
};

const initTaboola = async () => {
  await fetchLoader();
  pushConfig();
};

const saveSubscriptionCause = () => {
  const pageUrl = thisModule.getPageUrl();
  localStorage.setItem(SUBSCRIPTION_CAUSE, pageUrl);
};

export function trackSubscriptionCause() {
  const pageUrl = localStorage.getItem(SUBSCRIPTION_CAUSE);
  if (pageUrl) {
    window._tfa = window._tfa = [];
    window._tfa.push({
      notify: 'subscription',
      name: 'subscription-completed',
      sourceurl: pageUrl,
    });
    loadJS(['//cdn.taboola.com/libtrc/unip/1018671/tfa.js']);
  }
}

export default async () => {
  if (!window.JSGlobals.taboola) {
    return;
  }

  const taboolaContainers = taboolaUnits.map((unit) =>
    document.getElementById(unit.container),
  );

  if (!taboolaContainers.length) {
    return;
  }

  // we're saving the latest article to send it when subscription happens
  saveSubscriptionCause();

  await initTaboola();
};
