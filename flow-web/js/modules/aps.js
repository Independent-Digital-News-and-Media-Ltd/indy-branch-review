/**
 * @typedef {object} APSBid
 * @param {string} slotID The div ID of the slot that will render the creative
 * @param {string} mediaType The media type of the bid
 * @param {Array<string, string>} targeting The targeting key-value pairs for the bid
 */

/**
 * Get bids data from Amazon Publish Service bids request
 * @param {string} adUnitCode the ad unit code
 * @returns {Promise<Array<APSBid>>}
 * @see {@link https://ams.amazon.com/webpublisher/uam/docs/web-integration-documentation/integration-guide/javascript-guide/api-reference.html#apstagfetchbids}
 */
export const requestBids = (adUnitCode) => {
  const APS_TIMEOUT = 5000;
  // Directly added window to prevent AMP error
  const apstag = window.apstag;

  apstag.init({
    pubID: '3579',
    deals: true,
    // included adServer prop to prevent errors
    adServer: 'googletag',
    videoAdServer: 'DFP',
  });

  const bidConfig = {
    slots: [
      {
        slotID: adUnitCode,
        mediaType: 'video',
      },
    ],
    timeout: APS_TIMEOUT,
  };

  return new Promise(function (resolve) {
    /**
     * Callback function required by apstag.fetchBids
     * @param {Array<APSBid>} bids
     */
    const callback = (bids) => {
      resolve(bids);
    };

    apstag.fetchBids(bidConfig, callback);
  });
};

/**
 * Get targeting key-value pairs from Amazon Publish Service bids request
 * @param {string} adUnitCode The ad unit code used as slot ID in the request
 * @returns {Array} targeting key-value pairs
 */
export const getTargeting = async (adUnitCode) => {
  const bids = await requestBids(adUnitCode);
  const bid = bids.filter((bid) => bid.slotID === adUnitCode)[0];
  return bid?.targeting || [];
};
