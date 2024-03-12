/* globals JSGlobals, pbjs */

import {
  adsList,
  priceGranularity,
  bidders,
  videoAdsGenerator,
} from '@app/config/vendors/prebid';

import { COOKIE_SUBSCRIBER_ORIGIN } from '@app/constants/cookies';

import { SECTION_PATH_LIFESTYLE } from '@app/constants/sectionPaths';
import {
  SUBSCRIBER_ORIGIN_UK,
  SUBSCRIBER_ORIGIN_EU,
} from '@app/constants/subscriberOrigin';

import { getCookie } from './cookie';
import { log } from './log';

const geoLocation = getCookie(COOKIE_SUBSCRIBER_ORIGIN) ?? SUBSCRIBER_ORIGIN_UK;
const isLifestyle = window.location.href.includes(SECTION_PATH_LIFESTYLE);

const formatSizes = (sizeObj) =>
  sizeObj.map((item) => ({
    minViewPort: [item.from, 0],
    sizes: item.supportedSizes,
  }));

export const LABEL_DESKTOP = 'display';
export const LABEL_MOBILE = 'phone';

export const formatBids = ({ id, bidders }) => {
  return bidders
    .map((bidder) => (bidder.params ? bidder.params({ id }) : null))
    .filter((bidder) => bidder)
    .reduce(
      (acc, val) => (Array.isArray(val) ? [...acc, ...val] : [...acc, val]),
      [],
    );
};

export const prebidAdConfig = (ads, bidders) => {
  const prebidData = ads.map(({ id, sizes, video }) => {
    let mediaTypes = {};

    // appends video and banner to mediaTypes obj for thirdparty01/thirdparty02 ad units
    if (['thirdparty01', 'thirdparty02'].includes(id) && video) {
      mediaTypes = {
        video,
        banner: {
          sizeConfig: formatSizes(sizes),
        },
      };
    } else {
      mediaTypes = video
        ? { video }
        : { banner: { sizeConfig: formatSizes(sizes) } };
    }

    const bids = formatBids({ id, bidders });
    return {
      code: id,
      mediaTypes,
      bids,
    };
  });

  log('prebidAdConfig: ', prebidData);
  return prebidData;
};

export const prebidVideoAdConfig = (id, playerSize) => {
  const bids = bidders
    .filter((bidder) => bidder.instreamVideoParams)
    .map((bidder) => bidder.instreamVideoParams());
  const videoAds = videoAdsGenerator(id, playerSize);
  return {
    ...videoAds,
    bids,
  };
};

let prebidInitialised = false;

const getDataProviders = () => {
  const dataProviders = [
    {
      name: 'permutive',
      waitForIt: true, // should be true if there's an `auctionDelay`
      params: {
        acBidders: ['appnexus', 'pubmatic'],
      },
    },
    {
      name: 'brandmetrics',
      waitForIt: true,
      params: {
        bidders: ['ozone'],
      },
    },
  ];

  if (JSGlobals.article?.heroMediaId) {
    dataProviders.push({
      name: 'jwplayer',
      waitForIt: true,
      params: {
        mediaIDs: [JSGlobals.article.heroMediaId],
      },
    });
  }

  return dataProviders;
};

const prebidInit = () =>
  new Promise((resolve) => {
    if (prebidInitialised) {
      resolve();
      return;
    }
    prebidInitialised = true;

    const removePrebidBidCaching = JSGlobals.prebid?.removeBidCaching;

    pbjs.que.push(function () {
      pbjs.setConfig({
        appnexusAuctionKeywords: {
          perid: localStorage.getItem('cohort_ids')
            ? JSON.parse(localStorage.getItem('cohort_ids'))
            : [],
        },
        useBidCache: isLifestyle && removePrebidBidCaching ? false : true,
        realTimeData: {
          auctionDelay: 200, // optional auction delay
          dataProviders: getDataProviders(),
        },
        consentManagement: {
          usp: {
            cmpApi: 'iab',
            timeout: 50,
          },
          // gdpr config will only run in the UK/EU
          ...([SUBSCRIBER_ORIGIN_UK, SUBSCRIBER_ORIGIN_EU].includes(
            geoLocation,
          ) && {
            gdpr: {
              cmpApi: 'iab',
              defaultGdprScope: true,
              timeout: 6000,
            },
          }),
          rules: [
            {
              purpose: 'storage',
              enforcePurpose: true,
              enforceVendor: true,
              vendorExceptions: ['permutive'],
            },
            {
              purpose: 'basicAds',
              enforcePurpose: true,
              enforceVendor: true,
              vendorExceptions: [],
            },
          ],
        },
        currency: {
          adServerCurrency: 'USD',
          granularityMultiplier: 1,
        },
        priceGranularity,
        userSync: {
          userIds: [
            {
              name: 'teadsId',
              params: {
                pubId: 5668, // publisher id from Teads
              },
            },
          ],
          filterSettings: {
            iframe: {
              bidders: bidders.map((bidder) => bidder.bidderName),
              filter: 'include',
            },
          },
        },
      });

      pbjs.setBidderConfig(
        {
          bidders: ['appnexus'],
          config: {
            ortb2: {
              user: {
                keywords: localStorage.getItem('cohort_ids')
                  ? JSON.parse(localStorage.getItem('cohort_ids'))
                      .map((x) => `perid=${x}`)
                      .join(', ')
                  : [],
              },
            },
          },
        },
        true,
      );

      pbjs.setBidderConfig(
        {
          bidders: ['criteo', 'smartadserver'],
          config: {
            ortb2: {
              user: {
                data: [
                  {
                    name: 'anonymised.io',
                    ext: {
                      segtax: 1000,
                    },
                    segment: localStorage.getItem('cohort_ids')
                      ? JSON.parse(localStorage.getItem('cohort_ids')).map(
                          (x) => ({ id: x }),
                        )
                      : [],
                  },
                ],
              },
            },
          },
        },
        true,
      );

      pbjs.bidderSettings = {
        ...pbjs.bidderSettings,
        grid: {
          bidCpmAdjustment(bidCpm, bid) {
            // adjust the bid in real time before the auction takes place
            // eslint-disable-next-line no-console
            console.log(`Bidder is: ${bid.bidderCode}`);
            return bidCpm * 0.7;
          },
        },
        improvedigital: {
          bidCpmAdjustment(bidCpm, bid) {
            // adjust the bid in real time before the auction takes place
            // eslint-disable-next-line no-console
            console.log(`Bidder is: ${bid.bidderCode}`);
            return bidCpm * 0.85;
          },
        },
      };

      const units = prebidAdConfig(adsList, bidders);

      pbjs.addAdUnits(units);

      resolve();
    });
  });

export default prebidInit;
