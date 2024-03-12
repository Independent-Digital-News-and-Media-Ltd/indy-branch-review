/* globals JSGlobals */

import initBrazeInAppMessage from './initBrazeInAppMessage';

const initBrazeInAppMessageWithDelay = () => {
  const { brazeSdkDelayAmount = 30000 } = JSGlobals.braze || {};
  setTimeout(initBrazeInAppMessage, brazeSdkDelayAmount);
};

export default initBrazeInAppMessageWithDelay;
