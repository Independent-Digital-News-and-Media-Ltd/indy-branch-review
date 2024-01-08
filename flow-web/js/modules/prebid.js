/* globals JSGlobals, pbjs */

import {
  adsList,
  priceGranularity,
  bidders,
  videoAdsGenerator,
} from '@app/config/vendors/prebid';

import { COOKIE_SUBSCRIBER_ORIGIN } from '@app/constants/cookies';

import {
  SUBSCRIBER_ORIGIN_UK,
  SUBSCRIBER_ORIGIN_EU,
} from '@app/constants/subscriberOrigin';

import { getCookie } from './cookie';
import { log } from './log';

const geoLocation = getCookie(COOKIE_SUBSCRIBER_ORIGIN) ?? SUBSCRIBER_ORIGIN_UK;

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

const prebidInit = () =>
  new Promise((resolve) => {
    if (prebidInitialised) {
      resolve();
      return;
    }
    prebidInitialised = true;

    pbjs.que.push(function () {
      pbjs.setConfig({
        appnexusAuctionKeywords: {
          perid: localStorage.getItem('cohort_ids')
            ? JSON.parse(localStorage.getItem('cohort_ids'))
            : [],
        },
        useBidCache: true,
        realTimeData: {
          auctionDelay: 200, // optional auction delay
          dataProviders: [
            {
              name: 'permutive',
              waitForIt: true, // should be true if there's an `auctionDelay`
              params: {
                acBidders: ['appnexus', 'pubmatic'],
              },
            },
            {
              name: 'jwplayer',
              waitForIt: true,
              params: {
                mediaIDs: [JSGlobals.article?.heroMediaId],
              },
            },
            {
              name: 'brandmetrics',
              waitForIt: true,
              params: {
                bidders: ['ozone'],
              },
            },
          ],
        },
        consentManagement: {
          usp: {
            cmpApi: 'iab',
            timeout: 0,
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

      const units = prebidAdConfig(adsList, bidders);

      pbjs.addAdUnits(units);

      resolve();
    });
  });

export default prebidInit;
