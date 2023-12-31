import * as breakPoints from '@indy/ui/breakPoints';

import { COOKIE_LOGGED_IN } from '@app/constants/cookies';

import { TRACKING_PAYMENT_KEYS } from '@app/constants/adobeConstants';
import {
  CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_CANCEL,
  CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_COMPLETE,
  CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_SHOWN,
  CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_START,
  CHARTBEAT_EVENT_PAYWALL_START,
  CHARTBEAT_EVENT_REG_CANCEL,
  CHARTBEAT_EVENT_REG_COMPLETE,
  CHARTBEAT_EVENT_REG_SHOWN,
  CHARTBEAT_EVENT_REG_START,
} from '@app/constants/chartbeat';
import {
  CLASS_PREMIUM_MENU,
  CLASS_KEY_POINTS,
  CLASS_MOST_COMMENTED_LINK,
  CLASS_INDY100_TRENDING,
  CLASS_DRAWER_MENU_NAVLIST,
  CLASS_DRAWER_TEMP_LINK,
  CLASS_HEADER_TEMP_LINK,
  CLASS_PRIMARY_ITEM,
  CLASS_RELATED,
  CLASS_RELATED_ITEM,
  CLASS_JS_PRODUCT_COMPARISON_REVIEW_BUTTON,
  CLASS_JS_PRODUCT_COMPARISON,
  CLASS_JS_PRODUCT_BUY,
  CLASS_JS_PRODUCT_COMPARISON_CHECKBOX,
  CLASS_JS_PRODUCT_COMPARE_BUTTON,
  CLASS_WEBPUSH_SIGNUP_BUTTON,
} from '@app/constants/classNames';
import {
  EVENT_CHARTBEAT_LOADED,
  EVENT_PIANO_READY,
} from '@app/constants/customEvents';
import {
  ID_DRAWER,
  ID_VOUCHER_TICKER,
  ID_MEGAMENU_BUTTON,
  ID_PRODUCT_COMPARISON_CAROUSEL,
  ID_PRODUCT_COMPARISON_TABLE,
  ID_MAIN_CONTENT_WRAPPER,
} from '@app/constants/ids';

import { trackChartbeat } from '../chartbeat';
import { dispatchCustomEvent } from '../utils/dispatchCustomEvent';
import {
  getDrawerLinkCategory,
  getVisibleMenuLinkCategory,
} from '../utils/getLinkCategory';

import {
  getDigitalDataByKeys,
  storeDigitalData,
} from './adobe-analytics/digital-data/digital-data-session';
import { getCookie } from './cookie';
import {
  dispatchGalleryView,
  dispatchAutoGalleryView,
  dispatchArticleShare,
  dispatchSearch,
  dispatchMegaMenuLinkClick,
  dispatchMainNavLinkClick,
  dispatchMostPopularLinkClick,
  dispatchPopularVideosLinkClick,
  dispatchSponsoredFeaturesLinkClick,
  dispatchIndy100TrendingLinkClick,
  dispatchTaboolaFeedLinkClick,
  dispatchRelatedArticlesLinkClick,
  dispatchIpTabClick,
  dispatchIpEBookClick,
  dispatchIpEventClick,
  dispatchDonationArticleBottom,
  dispatchLiveBlogBulletedListClick,
  dispatchArticleBulletedListClick,
  dispatchBlogPostArticleLinkClick,
  dispatchShowCommentsClick,
  dispatchMostWatchedLoad,
  dispatchMostWatchedClick,
  dispatchContextualInlineClick,
  dispatchContextualInlineTopicClick,
  dispatchContextualInlineNonTopicClick,
  dispatchAndCacheSubscriptionButtonClick,
  dispatchAndCacheChangeSubscriptionPackage,
  dispatchChangePaymentMethod,
  dispatchLiveBlogKeyPointsClick,
  dispatchMostCommentedSectionClick,
  dispatchPremiumArticleCTAPremiumClick,
  dispatchPremiumArticleCTATideClick,
  dispatchUpdateComponentsList,
  dispatchTopicListItemClick,
  dispatchExpandablePromptCTAPremiumClick,
  dispatchExpandablePromptCTATideClick,
  dispatchExperienceExecuted,
  dispatchVoucherTickerLinkClick,
  dispatchVoucherTickerArrowClick,
  dispatchBurgerMenuClick,
  dispatchEditionLinkClick,
  dispatchTempLinkClick,
  dispatchAffiliateLinkClick,
  dispatchComparisonCarouselReadReviewLinkClick,
  dispatchComparisonCarouselCheckboxClick,
  dispatchCompareModalPopup,
  dispatchComparisonCarouselBuyLinkClick,
  dispatchCompareModalBuyLinkClick,
  dispatchWebpushSignupClick,
} from './custom-event-dispatchers';
import * as thisModule from './event-bindings.js';
import { showPianoOffer } from './piano';

export const addPassiveEventListener = (
  target,
  type,
  listener,
  options,
  useCapture,
) => {
  target?.addEventListener(
    type,
    listener,
    { passive: true, ...options },
    useCapture,
  );
};

export const getPageName = (href) => {
  const hrefArray = href.split('/');
  const articleId = hrefArray[hrefArray.length - 1].replace(/\D/g, '');
  hrefArray.pop();
  hrefArray.shift();
  return `${hrefArray.join('/')}/article${articleId}`;
};

export const eventGalleryView = () => {
  [...document.querySelectorAll('.gallery-btn')].forEach((el) => {
    el.addEventListener('click', dispatchGalleryView);
  });
};

export const eventAutoGalleryView = () => {
  [...document.querySelectorAll('.inline-gallery-btn')].forEach((el) => {
    el.addEventListener('click', dispatchAutoGalleryView);
  });
};

export const eventAutoRenewalOff = () => {
  document.addEventListener(EVENT_PIANO_READY, () => {
    window.tp = window.tp || [];
    window.tp.push([
      'addHandler',
      'customEvent',
      (event) => {
        if (event.eventName === 'auto-renewal') {
          // @todo
        }
      },
    ]);
  });
};

export const eventOpenLogin = () => {
  document.addEventListener(EVENT_PIANO_READY, () => {
    window.tp = window.tp || [];
    window.tp.push([
      'addHandler',
      'customEvent',
      (event) => {
        if (event.eventName === 'openLogin') {
          document
            .querySelector(`header button[on="tap:${ID_DRAWER}.open"]`)
            .click();
        }
      },
    ]);
  });
};

export const eventJoinToReadRegistrationWall = () => {
  document.addEventListener(EVENT_PIANO_READY, () => {
    window.tp = window.tp || [];

    window.tp.push([
      'addHandler',
      'customEvent',
      ({ eventName }) => {
        if (eventName === 'join-to-read-click-register') {
          localStorage.setItem('returnUrl', window.location.href);
        }
      },
    ]);
  });
};

export const eventContributeClick = () => {
  document.addEventListener(EVENT_PIANO_READY, () => {
    window.tp = window.tp || [];
    window.tp.push([
      'addHandler',
      'customEvent',
      (event) => {
        if (event.eventName === 'donation-prompt') {
          dispatchDonationArticleBottom();
          window.location.href = event.params?.url;
        }
      },
    ]);
  });
};

export const trackSubAndRegStartEventsViaChartbeat = () => {
  document.addEventListener(EVENT_PIANO_READY, () => {
    window.tp = window.tp || [];
    window.tp.push([
      'addHandler',
      'customEvent',
      (event) => {
        const params = event.params;
        if (!params) {
          return;
        }
        const [, experienceType] =
          Object.entries(params).find(([key]) => key === 'chartbeat') || [];
        if (!experienceType) {
          return;
        }
        const chartbeatEvent =
          experienceType === 'register'
            ? CHARTBEAT_EVENT_REG_START
            : CHARTBEAT_EVENT_PAYWALL_START;
        trackChartbeat(chartbeatEvent, {
          eventLabel: window.location.pathname,
          eventValue: 'Piano experience',
        });
      },
    ]);
  });
};

export const trackAmpNscEventsViaChartbeat = () => {
  const nscFormSelector = '#reg-lite-form';
  const nscForm = document.querySelector(nscFormSelector);
  const loggedIn = getCookie(COOKIE_LOGGED_IN);
  const isReactNscForm = nscForm?.tagName === 'DIV'; // prevents analytics firing twice

  if (loggedIn || !nscForm || isReactNscForm) {
    return;
  }

  const emailInput = document.querySelector('#reg-lite--form-email');
  const successMessage = document.querySelector(
    `${nscFormSelector} div[submit-success="true"]`,
  );
  const registrationChartbeatData = {
    eventLabel: window.location.pathname,
    eventValue: 'Nsc',
  };
  const newsletterChartbeatData = {
    ...registrationChartbeatData,
    eventValue: document.querySelector(
      `${nscFormSelector} input[name="regSourceNewsletter"]`,
    )?.value,
  };
  const onFocus = () => {
    trackChartbeat(CHARTBEAT_EVENT_REG_START, registrationChartbeatData);
    trackChartbeat(
      CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_START,
      newsletterChartbeatData,
    );
    emailInput.removeEventListener('focus', onFocus);
  };
  const trackChartbeatCancelledEvents = () => {
    if (document.visibilityState === 'hidden') {
      trackChartbeat(CHARTBEAT_EVENT_REG_CANCEL, registrationChartbeatData);
      trackChartbeat(
        CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_CANCEL,
        newsletterChartbeatData,
      );
    }
  };

  emailInput.addEventListener('focus', onFocus);
  document.addEventListener(EVENT_CHARTBEAT_LOADED, () => {
    trackChartbeat(CHARTBEAT_EVENT_REG_SHOWN, registrationChartbeatData);
    trackChartbeat(
      CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_SHOWN,
      newsletterChartbeatData,
    );
  });
  document.addEventListener('visibilitychange', trackChartbeatCancelledEvents);

  const observer = new MutationObserver(() => {
    const successMessageStyle = window.getComputedStyle(successMessage);
    if (successMessageStyle.display === 'block') {
      trackChartbeat(CHARTBEAT_EVENT_REG_COMPLETE, registrationChartbeatData);
      trackChartbeat(
        CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_COMPLETE,
        newsletterChartbeatData,
      );
      document.removeEventListener(
        'visibilitychange',
        trackChartbeatCancelledEvents,
      );
      observer.disconnect();
    }
  });

  observer.observe(successMessage, {
    attributes: true,
  });
};

export const eventArticleShare = () => {
  const buttons = document.querySelectorAll(
    '.social-share amp-social-share, .social-share button[type]',
  );
  buttons.forEach((btn) => {
    thisModule.addPassiveEventListener(btn, 'click', (event) => {
      const type = event.currentTarget.getAttribute('type');
      if (type !== 'bookmark') {
        dispatchArticleShare({
          share_provider: type,
        });
      }
    });
  });
};

/**
 * @see {@link https://developers.google.com/custom-search/docs/element#results-rendered}
 */
export const eventSearch = () => {
  window.__gcse || (window.__gcse = {});
  window.__gcse.searchCallbacks = {
    web: {
      rendered: (name, q, promos, results) => {
        const info = results[0]
          ?.closest('.gsc-results-wrapper-visible')
          ?.querySelector('.gsc-result-info')?.innerText;

        // get number of result from the info string
        // example: "About 91,200 results (0.26 seconds)"
        const matches = info?.match(/([\d,]+).*\(.+\)/);
        dispatchSearch({
          search_term: q,
          // remove comma from captured string
          // add whole info string if matches[1] not found for debug.
          search_results_count: matches ? matches[1].replace(',', '') : info,
        });
      },
    },
  };
};

export const eventMegaMenulinkClick = () => {
  const addListeners = () => {
    const links = document.querySelectorAll(`.${CLASS_DRAWER_MENU_NAVLIST} a`);
    links.forEach((link) => {
      thisModule.addPassiveEventListener(link, 'click', (event) => {
        const text = event.target.innerText;
        const category = getDrawerLinkCategory(event);
        dispatchMegaMenuLinkClick({
          mega_menu_link_text: text,
          mega_menu_link_category: category,
        });
      });
    });
  };

  const megaMenuButton = document.getElementById('MegaMenuButton');
  megaMenuButton?.addEventListener('click', () => {
    setTimeout(addListeners, 500);
  });
};

export const eventMainNavLinkClick = () => {
  const links = document.querySelectorAll(
    `.menu-navbar-item a, .${CLASS_PRIMARY_ITEM} a`,
  );
  links.forEach((link) => {
    thisModule.addPassiveEventListener(link, 'click', (event) => {
      const ulElement = event.target.closest('ul');
      const liElement = event.target.closest('li');
      const index = [...ulElement.childNodes].findIndex(
        (item) => item === liElement,
      );
      const text = event.target.innerText;
      const category = getVisibleMenuLinkCategory(event, text);

      dispatchMainNavLinkClick({
        main_nav_link_text: text,
        main_nav_link_category: category,
        main_nav_link_position: index + 1,
      });
    });
  });
};

export const eventMostPopularLinkClick = () => {
  const widgets = document.querySelectorAll('.most-popular');
  widgets.forEach((widget) => {
    thisModule.addPassiveEventListener(widget, 'click', (event) => {
      event.stopPropagation();
      const item = event.target.closest('[role="listitem"]');
      if (item) {
        const text = item?.children[1]?.innerText;
        const articleId = item.dataset?.articleId;
        const position = item.dataset?.position;
        dispatchMostPopularLinkClick({
          most_popular_link_text: text,
          most_popular_link_position: position,
          most_popular_link_article_id: articleId,
        });
      }
    });
  });
};

export const eventPopularVideosLinkClick = () => {
  const widgets = document.querySelectorAll('.popular-videos');
  widgets.forEach((widget) => {
    thisModule.addPassiveEventListener(widget, 'click', (event) => {
      event.stopPropagation();
      const item = event.target.closest('[role="listitem"]');
      if (item) {
        const text = item?.children[1]?.innerText;
        const articleId = item.dataset?.articleId;
        const position = item.dataset?.position;
        dispatchPopularVideosLinkClick({
          popular_videos_link_text: text,
          popular_videos_link_position: position,
          popular_videos_link_article_id: articleId,
        });
      }
    });
  });
};

export const eventSponsoredFeaturesLinkClick = () => {
  const widgets = document.querySelectorAll('.sponsored-features');
  widgets.forEach((widget) => {
    thisModule.addPassiveEventListener(widget, 'click', (event) => {
      event.stopPropagation();
      const item = event.target.closest('[role="listitem"]');
      if (item) {
        const text = item?.children[1]?.innerText;
        const articleId = item.dataset?.articleId;
        const position = item.dataset?.position;
        dispatchSponsoredFeaturesLinkClick({
          sponsored_features_link_text: text,
          sponsored_features_link_position: position,
          sponsored_features_link_article_id: articleId,
        });
      }
    });
  });
};

export const eventIndy100TrendingLinkClick = () => {
  const widgets = document.querySelectorAll(`.${CLASS_INDY100_TRENDING}`);
  widgets.forEach((widget) => {
    thisModule.addPassiveEventListener(widget, 'click', (event) => {
      event.stopPropagation();
      const item = event.target.closest('[role="listitem"]');
      if (item) {
        const text = item?.children[1]?.innerText;
        const articleId = item?.dataset?.articleId;
        const position = item?.dataset?.position;
        dispatchIndy100TrendingLinkClick({
          indy100_trending_link_text: text,
          indy100_trending_link_position: position,
          indy100_trending_link_article_id: articleId,
        });
      }
    });
  });
};

export const eventTaboolaFeedLinkClick = () => {
  const widgets = document.querySelectorAll('.taboola-below-article');
  widgets.forEach((widget) => {
    thisModule.addPassiveEventListener(widget, 'click', (event) => {
      event.stopPropagation();
      const text =
        event.target.closest('[data-item-title]')?.dataset?.itemTitle;
      const position =
        event.target.closest('.tbl-feed-card')?.dataset?.cardIndex;
      dispatchTaboolaFeedLinkClick({
        taboola_feed_link_text: text,
        taboola_feed_link_position: position,
      });
    });
  });
};

export const eventRelatedArticlesLinkClick = () => {
  const widgets = document.querySelectorAll(`.${CLASS_RELATED}`);
  const allRelatedItems = document.querySelectorAll(`.${CLASS_RELATED_ITEM}`);

  allRelatedItems.forEach((relatedItem) => {
    thisModule.addPassiveEventListener(relatedItem, 'click', (e) => {
      const {
        autoLink,
        topicLink,
        algorithm,
        text,
        position: itemPosition,
      } = relatedItem.dataset;
      const thisWidget = relatedItem.closest(`.${CLASS_RELATED}`);
      const widgetIndex = Array.prototype.indexOf.call(widgets, thisWidget) + 1;
      const widgetPosition = widgetIndex + 1;

      dispatchRelatedArticlesLinkClick({
        related_articles_link_text: text,
        related_articles_autolink: autoLink,
        related_articles_topiclink: topicLink,
        related_articles_algorithm: algorithm,
        related_articles_link_position: itemPosition,
        related_embed_position: widgetPosition,
      });

      e.stopPropagation();
    });
  });
};

export const eventIPTabClick = () => {
  const tabs = document.querySelectorAll(`.${CLASS_PREMIUM_MENU} [data-tab]`);
  tabs.forEach((tab) => {
    thisModule.addPassiveEventListener(tab, 'click', () => {
      const url = document.location.href;
      const name = tab.dataset.tab;
      dispatchIpTabClick({
        tab_url: url,
        tab_name: name,
      });
    });
  });
};

export const eventIpEBookClick = () => {
  const ebooks = document.querySelectorAll(
    'section [data-tab="ebooks"] [id^="ebook"]',
  );
  ebooks.forEach((ebook) => {
    thisModule.addPassiveEventListener(ebook, 'click', () => {
      const url = ebook.href;
      const title = ebook.dataset?.title;
      dispatchIpEBookClick({
        ebook_url: url,
        ebook_title: title,
      });
    });
  });
};

export const eventIpEventClick = () => {
  const events = document.querySelectorAll(
    'section [data-tab="events"] [href^="#event"]',
  );
  events.forEach((event) => {
    thisModule.addPassiveEventListener(event, 'click', () => {
      const name = event.dataset?.title;
      dispatchIpEventClick({
        event_name: name,
      });
    });
  });
};

export const eventAllArticleBulletedListClick = () => {
  const bulletedLists = document.querySelectorAll(
    // Not an ideal solution but it works - need to find a way to add a classname to the bulleted lists in future
    `.main-wrapper #${ID_MAIN_CONTENT_WRAPPER} > div > ul li a`,
  );
  const isLiveblog = document.querySelectorAll('.article-liveblog').length > 0;
  const dispatchEvent = isLiveblog
    ? dispatchLiveBlogBulletedListClick
    : dispatchArticleBulletedListClick;
  bulletedLists.forEach((bulletedList) => {
    thisModule.addPassiveEventListener(bulletedList, 'click', (event) => {
      const ulElement = event.target.closest('ul');
      const liElement = event.target.closest('li');
      const index = [...ulElement.childNodes].findIndex(
        (item) => item === liElement,
      );
      const text = event.target.innerText;
      const url = event.target.href;
      dispatchEvent({
        bulleted_list_text: text,
        bulleted_list_url: url,
        bulleted_list_position: index + 1,
      });
    });
  });
};

export const eventBlogPostArticleLinkClick = () => {
  const articleLinks = document.querySelectorAll('.amp-live-list-item h3 a');
  articleLinks.forEach((articleLink, index) => {
    thisModule.addPassiveEventListener(articleLink, 'click', (event) => {
      const text = event.target.innerText;
      const url = articleLink.href;
      dispatchBlogPostArticleLinkClick({
        article_link_text: text,
        article_link_url: url,
        article_link_position: index + 1,
      });
    });
  });
};

export const eventShowCommentsClick = () => {
  const showComments = [
    {
      element: '.comment-count',
      text: 'Comment Counts',
      position: 'top',
    },
    {
      element: '.js-comment-message',
      text: 'View Comments',
      position: 'bottom',
    },
  ];

  showComments.forEach((event) => {
    const { element, text, position } = event;
    thisModule.addPassiveEventListener(
      document.querySelector(element),
      'click',
      () => {
        dispatchShowCommentsClick({
          show_comments_link_text: text,
          show_comments_link_position: position,
        });
      },
    );
  });
};

export const eventNewsletterPrefsCheckboxToggle = () => {
  document
    .querySelectorAll(
      '[data-component=NewsletterGroups] input[type="checkbox"]',
    )
    .forEach((checkbox) => {
      checkbox.addEventListener('change', (evt) => {
        // dispatches 'newsletter_prefs_subscribe' or 'newsletter_prefs_unsubscribe'
        // depending on the checked status
        dispatchCustomEvent(
          `newsletter_prefs_${evt.target.checked ? '' : 'un'}subscribe`,
          { newsletter: evt.target.name },
        );
      });
    });

  document
    .querySelectorAll('#reg-lite-form input[type="checkbox"]')
    .forEach((checkbox) => {
      checkbox.addEventListener('change', (event) => {
        const newsletter = event.target
          .closest('form')
          ?.querySelector('input[name=regSourceNewsletter]')?.value;

        dispatchCustomEvent(
          `newsletter_prefs_${event.target.checked ? '' : 'un'}subscribe`,
          { newsletter },
        );
      });
    });
};

export const eventNewsletterLiteRegSignUp = () => {
  document
    .querySelectorAll('.newsletter-component')
    .forEach((newsletterComponentElem) => {
      const submitButton =
        newsletterComponentElem.querySelector('button.form-submit');

      submitButton.addEventListener('click', (evt) => {
        if (evt.target.disabled) {
          return;
        }

        dispatchCustomEvent('newsletter_lite_reg_signup', {
          newsletter: newsletterComponentElem.dataset.newsletterKey,
        });
      });
    });
};

export const eventMostWatched = () => {
  document.addEventListener('watchMoreLoaded', (event) => {
    const mostWatchedComp = document.querySelector(
      '[id^="playinc-article-component"]',
    );
    if (mostWatchedComp) {
      const paragraphCount = mostWatchedComp.id.replace(
        'playinc-article-component-',
        '',
      );
      const trackingData = {
        mostWatched_url: event.detail.url,
        mostWatched_algorithm: event.detail.algorithm,
        mostWatched_paragraph_number: paragraphCount,
      };
      storeDigitalData(trackingData);
      dispatchMostWatchedLoad({ trackingData });

      mostWatchedComp.addEventListener('click', () => {
        dispatchMostWatchedClick({
          mostWatched_link_text: 'Most Watched',
        });
      });
    }
  });
};

export const eventContextualInlineClick = () => {
  const links = document.querySelectorAll(`#${ID_MAIN_CONTENT_WRAPPER} p a`);
  links.forEach((link) => {
    const matches = link.href?.startsWith(document.location.origin);
    if (matches) {
      thisModule.addPassiveEventListener(link, 'click', () =>
        dispatchContextualInlineClick(),
      );
    }
  });
};

export const eventContextualInlineTopicClick = () => {
  const links = document.querySelectorAll(`#${ID_MAIN_CONTENT_WRAPPER} p a`);
  links.forEach((link) => {
    const regex = new RegExp(`^${document.location.origin}/topic/.*$`);
    const match = regex.test(link.href);
    if (match) {
      thisModule.addPassiveEventListener(link, 'click', () =>
        dispatchContextualInlineTopicClick(),
      );
    }
  });
};

export const eventContextualInlineNonTopicClick = () => {
  const links = document.querySelectorAll(`#${ID_MAIN_CONTENT_WRAPPER} p a`);
  links.forEach((link) => {
    const regex = new RegExp(`^${document.location.origin}/(?!topic/).*$`);
    const match = regex.test(link.href);
    if (match) {
      thisModule.addPassiveEventListener(link, 'click', () =>
        dispatchContextualInlineNonTopicClick(),
      );
    }
  });
};

export const eventChangeSubscriptionOnSellingPage = () => {
  document.addEventListener(EVENT_PIANO_READY, () => {
    window.addEventListener('message', (event) => {
      if (event.data.type === 'changing-subscription') {
        const { data } = event.data;

        window.tp = window.tp || [];
        window.tp.push([
          'init',
          () => {
            const trackingData = {
              subscription_length: data.trackingLength,
              subscription_price: data.trackingPrice,
              subscription_package: data.trackingName,
            };

            dispatchAndCacheChangeSubscriptionPackage(trackingData);
          },
        ]);
      }
    });
  });
};

export const eventPremiumArticleGateCTAPremiumClick = () => {
  window.addEventListener('message', (event) => {
    if (event.data.type === 'premium-article-cta-premium') {
      dispatchPremiumArticleCTAPremiumClick({});
    }
  });
};

export const eventPremiumArticleGateCTATideClick = () => {
  window.addEventListener('message', (event) => {
    if (event.data.type === 'premium-article-cta-tide') {
      dispatchPremiumArticleCTATideClick({});
    }
  });
};

export const eventExpandablePromptCTAPremiumClick = () => {
  window.addEventListener('message', (event) => {
    if (event.data.type === 'expandable-prompt-cta-premium') {
      dispatchExpandablePromptCTAPremiumClick({});
    }
  });
};

export const eventExpandablePromptCTATideClick = () => {
  window.addEventListener('message', (event) => {
    if (event.data.type === 'expandable-prompt-cta-tide') {
      dispatchExpandablePromptCTATideClick({});
    }
  });
};

export const eventSubscribeOnSellingPage = () => {
  window.addEventListener('message', (event) => {
    if (event.data && event.data.sellingPageData) {
      const {
        sellingPageData: { offerId, termId, ...sellingPageData },
      } = event.data;

      const trackingData = {
        subscription_length: sellingPageData.trackingLength,
        subscription_price: sellingPageData.trackingPrice,
        subscription_package: sellingPageData.trackingName,
        initial_selected_package: sellingPageData.initialSelectedPackage,
      };

      dispatchAndCacheSubscriptionButtonClick({
        subscribe_button_version: sellingPageData.trackingCta,
        ...trackingData,
      });

      const query = new URLSearchParams();
      query.set('offerId', offerId);
      query.set('termId', termId);

      if (getCookie(COOKIE_LOGGED_IN)) {
        window.location.href = `/subscribe/payment?${query.toString()}`;
      }

      showPianoOffer(offerId, termId, trackingData);
    }
  });
};

export const eventSelectPaymentFields = () => {
  document.addEventListener(EVENT_PIANO_READY, () => {
    const getPaymentMethodByName = (name) => {
      switch (name) {
        case 'credit':
        case 'stripe':
          return 'Credit Card';
        case 'paypalbt':
          return 'Paypal';
        case 'applepaybt':
          return 'Apple Pay';
        case 'gocardless_drop_in':
          return 'Direct Debit via GoCardless';
      }
    };

    window.tp = window.tp || [];
    window.tp.push([
      'addHandler',
      'customEvent',
      ({ eventName, params }) => {
        if (eventName === 'payment-option-pp') {
          const trackingData = getDigitalDataByKeys(TRACKING_PAYMENT_KEYS);
          const paymentMethod = `Subscription Funnel|Payment Method Selected|${getPaymentMethodByName(
            params.method,
          )}`;

          dispatchChangePaymentMethod({
            ...trackingData,
            name_form_field: paymentMethod,
          });
        }
      },
    ]);
  });
};

export const eventClickOnConfirmSubscriptionBtn = () => {
  document.addEventListener(EVENT_PIANO_READY, () => {
    window.tp = window.tp || [];
    window.tp.push([
      'addHandler',
      'customEvent',
      ({ eventName }) => {
        if (eventName === 'click-confirm-subscription') {
          window.scrollTo(0, 0);
        }
      },
    ]);
  });
};

export const eventLiveBlogKeyPointsClick = () => {
  const links = document.querySelectorAll(`.${CLASS_KEY_POINTS} a`);
  links.forEach((link) => {
    thisModule.addPassiveEventListener(link, 'click', (event) => {
      const ulElement = event.target.closest('ul');
      const liElement = event.target.closest('li');
      const position = [...ulElement.childNodes].findIndex(
        (item) => item === liElement,
      );
      dispatchLiveBlogKeyPointsClick({
        liveblog_key_points_text: event.target.innerText,
        liveblog_key_points_destination: event.target.href,
        liveblog_key_points_position: position + 1,
      });
    });
  });
};

export const eventMostCommentedSectionClick = () => {
  const links = document.querySelectorAll(`.${CLASS_MOST_COMMENTED_LINK}`);
  links.forEach((link) => {
    thisModule.addPassiveEventListener(link, 'click', (event) => {
      const sectionElement = event.target.closest('.section-body');
      const articleElement = event.target.closest('.article-default');
      const position = [...sectionElement.childNodes].findIndex(
        (item) => item === articleElement,
      );
      dispatchMostCommentedSectionClick({
        most_commented_section_link_pagename: getPageName(
          link.getAttribute('href'),
        ),
        most_commented_section_link_position: position + 1,
      });
    });
  });
};

export const eventUpdateComponentsList = () => {
  let desktopResizeHasOccurred = window.innerWidth >= breakPoints.laptop;
  let mobileResizeHasOccurred = window.innerWidth < breakPoints.laptop;
  window.addEventListener('resize', () => {
    if (window.innerWidth >= breakPoints.laptop && !desktopResizeHasOccurred) {
      desktopResizeHasOccurred = true;
      dispatchUpdateComponentsList({
        components_list: window.digitalData.desktop_components_list,
      });
    } else if (
      window.innerWidth < breakPoints.laptop &&
      !mobileResizeHasOccurred
    ) {
      mobileResizeHasOccurred = true;
      dispatchUpdateComponentsList({
        components_list: window.digitalData.mobile_components_list,
      });
    }
  });
};

export const eventTopicListItemClick = () => {
  document.querySelectorAll('nav.topics > div > a').forEach((element) => {
    element.addEventListener('click', (evt) => {
      dispatchTopicListItemClick({
        tag: evt.target.innerHTML,
      });
    });
  });
};

export const experienceExecuted = () => {
  window.analytics = window.analytics || {};

  window.analytics.experienceExecuted = (experience_name, variant) => {
    dispatchExperienceExecuted({ experience_name, variant });
  };
};

export const eventVoucherTickerLinkClick = () => {
  const voucherTickerCTA = document.querySelectorAll(`#${ID_VOUCHER_TICKER} a`);
  voucherTickerCTA.forEach((link) => {
    thisModule.addPassiveEventListener(link, 'click', (event) => {
      const text =
        event.target.innerText === 'All Deals'
          ? 'All Deals'
          : event.target.parentNode.previousElementSibling.innerText;
      dispatchVoucherTickerLinkClick({
        voucher_ticker_text: text,
      });
    });
  });
};

export const eventVoucherTickerArrowClick = () => {
  const voucherTickerArrow = document.querySelectorAll(
    `#${ID_VOUCHER_TICKER} amp-base-carousel .carousel-prev,
      #${ID_VOUCHER_TICKER} amp-base-carousel .carousel-next`,
  );
  voucherTickerArrow.forEach((btn) => {
    thisModule.addPassiveEventListener(btn, 'click', (event) => {
      const text = event.target.ariaLabel;
      dispatchVoucherTickerArrowClick({
        voucher_ticker_arrow_text: text,
      });
    });
  });
};

export const eventBurgerMenuClick = () => {
  const button = document.getElementById(ID_MEGAMENU_BUTTON);
  thisModule.addPassiveEventListener(button, 'click', dispatchBurgerMenuClick);
};

export const eventEditionLinkClick = () => {
  const buttons = document.querySelectorAll('[data-edition]');
  buttons.forEach((button) => {
    thisModule.addPassiveEventListener(button, 'click', (event) => {
      dispatchEditionLinkClick({
        edition_link_text: event.target.innerText,
      });
    });
  });
};

export const eventTempLinkClick = () => {
  const links = document.querySelectorAll(
    `.${CLASS_DRAWER_TEMP_LINK}, .${CLASS_HEADER_TEMP_LINK}`,
  );
  links.forEach((link) => {
    const wrapper = link.classList.contains(CLASS_DRAWER_TEMP_LINK)
      ? 'Burger'
      : 'Visible';
    thisModule.addPassiveEventListener(link, 'click', (event) => {
      dispatchTempLinkClick({
        temp_link_text: `${event.target.innerText} - ${wrapper}`,
      });
    });
  });
};

export const eventAffiliateLinkClick = () => {
  const affiliateLinks = document.querySelectorAll('a[data-affiliate="true"]');
  affiliateLinks.forEach((link) => {
    thisModule.addPassiveEventListener(link, 'click', (event) => {
      const text = event.target.innerHTML;
      dispatchAffiliateLinkClick({
        affiliate_link_click_text: text,
      });
    });
  });
};

export const eventWebpushSignupClick = () => {
  const buttons = document.querySelectorAll(`.${CLASS_WEBPUSH_SIGNUP_BUTTON}`);
  buttons.forEach((button) => {
    thisModule.addPassiveEventListener(button, 'click', () => {
      dispatchWebpushSignupClick();
    });
  });
};

// product comparison carousel tracking

export const eventComparisonCarouselReadReviewLinkClick = () => {
  dispatchComparisonCarouselReadReviewLinkClick({
    comparison_carousel_read_review_link_label:
      'Comparison Carousel/Modal - Read Review Link Click',
  });
};

export const eventComparisonCarouselCheckboxClick = () => {
  dispatchComparisonCarouselCheckboxClick({
    comparison_carousel_checkbox_label:
      'Comparison Carousel - Compare Checkbox Selected',
  });
};

export const eventCompareModalPopup = () => {
  dispatchCompareModalPopup({
    compare_modal_label: 'Compare Table Pop-up',
  });
};

export const eventComparisonCarouselBuyLinkClick = () => {
  dispatchComparisonCarouselBuyLinkClick({
    comparison_carousel_buy_link_label: 'Comparison Carousel - Buy Link Click',
  });
};

export const eventCompareModalBuyLinkClick = () => {
  dispatchCompareModalBuyLinkClick({
    compare_modal_buy_link_label: 'Compare Modal - Buy Link Click',
  });
};

export const eventComparisonCarouselLoad = () => {
  const productComparison = document.querySelector(
    `.${CLASS_JS_PRODUCT_COMPARISON}`,
  );
  productComparison?.addEventListener('click', (event) => {
    if (event.target.closest(`.${CLASS_JS_PRODUCT_COMPARISON_REVIEW_BUTTON}`)) {
      eventComparisonCarouselReadReviewLinkClick();
    } else if (
      event.target.closest(`.${CLASS_JS_PRODUCT_COMPARISON_CHECKBOX}`)
    ) {
      eventComparisonCarouselCheckboxClick();
    } else if (event.target.closest(`.${CLASS_JS_PRODUCT_COMPARE_BUTTON}`)) {
      eventCompareModalPopup();
    } else if (
      event.target.closest(
        `#${ID_PRODUCT_COMPARISON_CAROUSEL} .${CLASS_JS_PRODUCT_BUY}`,
      )
    ) {
      eventComparisonCarouselBuyLinkClick();
    } else if (
      event.target.closest(
        `#${ID_PRODUCT_COMPARISON_TABLE} .${CLASS_JS_PRODUCT_BUY}`,
      )
    ) {
      eventCompareModalBuyLinkClick();
    }
  });
};

export const run = () => {
  thisModule.eventGalleryView();
  thisModule.eventAutoGalleryView();
  thisModule.eventAutoRenewalOff();
  thisModule.eventOpenLogin();
  thisModule.eventArticleShare();
  thisModule.eventSearch();
  thisModule.eventMegaMenulinkClick();
  thisModule.eventMainNavLinkClick();
  thisModule.eventMostPopularLinkClick();
  thisModule.eventPopularVideosLinkClick();
  thisModule.eventSponsoredFeaturesLinkClick();
  thisModule.eventIndy100TrendingLinkClick();
  thisModule.eventTaboolaFeedLinkClick();
  thisModule.eventRelatedArticlesLinkClick();
  thisModule.eventIPTabClick();
  thisModule.eventIpEBookClick();
  thisModule.eventIpEventClick();
  thisModule.eventContributeClick();
  thisModule.eventAllArticleBulletedListClick();
  thisModule.eventBlogPostArticleLinkClick();
  thisModule.eventJoinToReadRegistrationWall();
  thisModule.eventShowCommentsClick();
  thisModule.eventNewsletterPrefsCheckboxToggle();
  thisModule.eventNewsletterLiteRegSignUp();
  thisModule.eventMostWatched();
  thisModule.eventContextualInlineClick();
  thisModule.eventContextualInlineTopicClick();
  thisModule.eventContextualInlineNonTopicClick();
  thisModule.eventChangeSubscriptionOnSellingPage();
  thisModule.eventPremiumArticleGateCTAPremiumClick();
  thisModule.eventSubscribeOnSellingPage();
  thisModule.eventSelectPaymentFields();
  thisModule.eventClickOnConfirmSubscriptionBtn();
  thisModule.eventLiveBlogKeyPointsClick();
  thisModule.eventMostCommentedSectionClick();
  thisModule.eventPremiumArticleGateCTATideClick();
  thisModule.eventUpdateComponentsList();
  thisModule.eventTopicListItemClick();
  thisModule.eventExpandablePromptCTAPremiumClick();
  thisModule.eventExpandablePromptCTATideClick();
  thisModule.experienceExecuted();
  thisModule.eventVoucherTickerLinkClick();
  thisModule.eventVoucherTickerArrowClick();
  thisModule.eventBurgerMenuClick();
  thisModule.eventEditionLinkClick();
  thisModule.eventTempLinkClick();
  thisModule.eventAffiliateLinkClick();
  thisModule.eventComparisonCarouselLoad();
  thisModule.trackSubAndRegStartEventsViaChartbeat();
  thisModule.trackAmpNscEventsViaChartbeat();
  thisModule.eventWebpushSignupClick();
};
