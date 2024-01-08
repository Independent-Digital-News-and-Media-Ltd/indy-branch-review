/* globals JSGlobals,, __iasPET */
import iasDFPUtilities from '../utils/iasDFPUtilities';

import { log } from './log';
import { loadJS } from './util';

const iasCustomParams = {};

const PUB_ID = '931398';

/**
 * This data definition is from the example in the documentation in below link, Login is required for reading it. Please contact Ads team for the login.
 * @see {@link https://integralplatform.com/help/pubOpt/home.html}
 * @example
 * {
 *   brandSafety: {
 *     adt: "veryLow",
 *     dlm: "low",
 *     drg: "veryLow",
 *     alc: "high",
 *     hat: "veryLow",
 *     vio: "veryLow",
 *     off: "veryLow",
 *   },
 *   custom: {
 *     "ias-kw": ["IAS_12345_123_KW", "IAS_23456_234_KW"],
 *   },
 *   fr: false,
 *   slots: {
 *     "slot-09": {
 *       vw: ["40", "50", "60", "70"],
 *       id: "5848565c-4dd4-11e6-9f0b-0025904ea2be",
 *     },
 *     "slot-321": {
 *       vw: ["40", "50", "60"],
 *       id: "1248565c-4dd4-11e6-9f0b-0025904ea2bf",
 *     },
 *   },
 * };
 * @typedef {{[key: string], (Array|string)}} IasSlotData
 * @typedef {object} IasData
 * @property {{[key: string], string}} brandSafety brand safety targeting key-value pairs
 * @property {{[key: string], Array}} custom custom key words key-value pairs
 * @property {boolean} fr invalid traffic indicator
 * @property {{[key: string], IasSlotData}} slots viewability targeting key-value pairs for each slot
 */

/**
 * Global cache for the IAS data retrieved
 * @type {IasSlotData}
 */
let adSlotDataCache;

/**
 * @param {IasData} adSlotData the data object provided from dataHandler
 * @param {string} slotId ad slot id
 * @return {{[key: string], (Array|string)}} targeting key value pairs
 */
const getSlotTargetingFromData = (adSlotData, slotId) => {
  const pageTargeting = { fr: adSlotData.fr, ...adSlotData.brandSafety };
  const slotTargeting = adSlotData.slots[slotId] || {};
  return { ...pageTargeting, ...slotTargeting };
};

/**
 * Get targeting key value pairs for the given slot
 * @param {string} adSlotId the slot element id
 * @param {string} adUnitPath ad unit path
 * @return {{[key: string], (Array|string)}} targeting key value pairs
 */
export const getTargeting = (adSlotId, adUnitPath) => {
  if (adSlotDataCache?.slots?.[adSlotId]) {
    const targeting = getSlotTargetingFromData(adSlotDataCache, adSlotId);
    return targeting;
  }
  return new Promise((resolve) => {
    const iasPET = __iasPET || {};
    iasPET.queue = __iasPET.queue || [];
    iasPET.pubId = PUB_ID;

    const iasPETSlots = [];
    iasPETSlots.push({
      adSlotId,
      size: [1, 1],
      adUnitPath,
      type: 'video',
    });

    iasPET.queue.push({
      adSlots: iasPETSlots,
      dataHandler: (adSlotData) => {
        adSlotDataCache = JSON.parse(adSlotData);
        const targeting = getSlotTargetingFromData(adSlotDataCache, adSlotId);
        resolve(targeting);
      },
    });
  });
};

export const getParams = (adSlotId) => iasCustomParams[adSlotId] || '';

/**
 * @deprecated
 */
export const prepareParams = (adSlotId) => {
  const iasDataHandler = (adSlotData) => {
    iasDFPUtilities.parseIASResponseData(adSlotData);
    const globalParams = iasDFPUtilities.getIASPageTargetingAsQueryString();
    const slotParamsMap = iasDFPUtilities.getIASSlotTargetingAsQueryString();
    iasCustomParams[adSlotId] = `${globalParams}&${slotParamsMap[adSlotId]}`;
    log(`ias [${adSlotId}]: ${iasCustomParams[adSlotId]}`);
  };

  const iasPET = __iasPET || {};
  iasPET.queue = __iasPET.queue || [];
  iasPET.pubId = PUB_ID;
  const iasPETSlots = [];
  iasPETSlots.push({
    adSlotId,
    size: [1, 1],
    adUnitPath: JSGlobals.videoAdUnitPath,
    type: 'video',
  });
  iasPET.queue.push({
    adSlots: iasPETSlots,
    dataHandler: iasDataHandler,
  });
};

export const init = () => loadJS(['//static.adsafeprotected.com/iasPET.1.js']);

export default init;
