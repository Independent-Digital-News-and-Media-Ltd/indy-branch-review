/* globals braze */

import showInAppMessage from './inAppMessage';
import initBrazeSDK from './initBrazeSDK';

/**
 * @see {@link https://www.braze.com/docs/developer_guide/platform_integration_guides/web/in-app_messaging/in-app_message_delivery/}
 */
export default async () => {
  const init = await initBrazeSDK();
  if (init) {
    braze.logCustomEvent('campaign-a');
    showInAppMessage();
  }
};
