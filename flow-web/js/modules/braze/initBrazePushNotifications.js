/* globals braze */

import showInAppMessage from './inAppMessage';
import initBrazeSDK from './initBrazeSDK';

export default () => {
  initBrazeSDK();
  braze.logCustomEvent('campaign-a');
  showInAppMessage();
};
