/**
 * @deprecated
 * This file is not really suit the needs of our project, it should be replaced by the custom code in ias.js later. It is now in progress
 */

/**
 * This file is just a copy from the docs
 * @see https://integralplatform.com/help/pubOpt/home.html#google-ad-manager
 */

let adSlotDataObj;

const parseIASResponseData = function (adSlotData) {
  adSlotDataObj = JSON.parse(adSlotData);
};

const getIASPageTargetingAsQueryString = function () {
  const keyValuePairs = [];

  keyValuePairs.push(['fr', adSlotDataObj.fr]);
  for (const k in adSlotDataObj.brandSafety) {
    keyValuePairs.push([k, adSlotDataObj.brandSafety[k]]);
  }
  const params = new URLSearchParams(keyValuePairs);
  return params.toString();
};

const getIASSlotTargetingAsQueryString = () => {
  const iasSlotTargeting = {};

  for (const slotId in adSlotDataObj.slots) {
    const slotIdValues = adSlotDataObj.slots[slotId];
    const keyValuePairs = [];
    for (const key in slotIdValues) {
      const segments = slotIdValues[key];
      keyValuePairs.push([
        key,
        Array.isArray(segments) ? segments.join(',') : segments,
      ]);
    }
    const params = new URLSearchParams(keyValuePairs);
    iasSlotTargeting[slotId] = params.toString();
  }
  return iasSlotTargeting;
};

const iasDFPUtilities = {
  parseIASResponseData,
  getIASPageTargetingAsQueryString,
  getIASSlotTargetingAsQueryString,
};

export default iasDFPUtilities;
