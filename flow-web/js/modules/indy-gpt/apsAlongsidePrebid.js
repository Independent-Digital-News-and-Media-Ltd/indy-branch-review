/* globals pbjs, googletag, apstag, __iasPET */
import { adsList } from '@app/config/vendors/prebid';

import * as device from '@app/constants/devices';

import { log } from '@app/public/js/modules/log';
import { LABEL_DESKTOP, LABEL_MOBILE } from '@app/public/js/modules/prebid';
import apsFormatter from '@app/public/js/utils/apsFormatter';
import { iasFormatter } from '@app/public/js/utils/iasFormatter';

const PREBID_TIMEOUT = 1500;
const FAILSAFE_TIMEOUT = 2000;

export const filterAdsToAuction = (ads, slots) =>
  slots?.filter((slot) => ads.find((ad) => ad.id === slot.id));

export default async (gptSlots) => {
  apstag.init({
    pubID: '3579',
    adServer: 'googletag',
    deals: true,
  });

  const adsToAuction = filterAdsToAuction(adsList, gptSlots);

  // ensuring adsToAuction array is not empty as it leads to ads loading with no slots attached to them
  if (!adsToAuction.length) {
    return;
  }

  // APS request
  const apsRequest = new Promise((resolve) => {
    const formattedApsSlots = apsFormatter(adsToAuction);

    apstag.fetchBids({ slots: formattedApsSlots }, (bids) => {
      log('APS bids:', bids);
      googletag.cmd.push(() => {
        apstag.setDisplayBids();
        resolve();
      });
    });
  });

  // put prebid request here
  const prebidRequest = new Promise((resolve) => {
    const adUnitCodes = adsToAuction.map((ad) => ad.id);

    if (!window.pbjs) {
      console.warn('pbjs not defined, skipping');
      resolve();
      return;
    }

    const screenLabel = window.matchMedia(device.mobileL).matches
      ? LABEL_DESKTOP
      : LABEL_MOBILE;

    pbjs.que.push(() => {
      pbjs.requestBids({
        labels: [screenLabel],
        timeout: PREBID_TIMEOUT,
        adUnitCodes,
        bidsBackHandler: () => {
          adsToAuction.forEach((ad) => {
            pbjs.setTargetingForGPTAsync([ad.id]);
          });
          resolve();
        },
      });
    });
  });

  // IAS Optimisation
  const iasRequest = new Promise((resolve) => {
    const iasPET = __iasPET || {};
    iasPET.queue = __iasPET.queue || [];
    iasPET.pubId = '931398';
    googletag.cmd.push(() => {
      // read the currently defined GPT ad slots for sending to the PET endpoint
      // defined all GPT ad slots before calling PET
      const iasPETSlots = googletag.pubads().getSlots().map(iasFormatter);

      // make the request to PET. if your page makes multiple ad requests to DFP
      // (for example, lazily loaded ads, infinite scrolling pages, etc.), make
      // a request to PET before every request to DFP
      iasPET.queue.push({
        adSlots: iasPETSlots,
        dataHandler: iasPET.setTargetingForGPT,
      });
      resolve();
    });
  });

  // initiate bid request with timeout
  await Promise.race([
    Promise.all([prebidRequest, apsRequest, iasRequest]),
    new Promise((resolve) => setTimeout(resolve, FAILSAFE_TIMEOUT)),
  ]);
};
