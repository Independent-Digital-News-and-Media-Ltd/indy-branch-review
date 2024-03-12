/* globals JSGlobals braze  */
import { EVENT_BRAZE_LOADED } from '@app/constants/customEvents';

import { checkVendorConsent } from '@app/public/js/modules/cmp';
import { loadJS } from '@app/public/js/modules/util';

const SP_VENDOR_ID = '5ed8c49c4b8ce4571c7ad801';

/**
 * Initialize braze sdk
 * @returns {Promise<boolean>} - true if braze sdk is initialized
 */
const initBrazeSDK = async () => {
  if (!(await checkVendorConsent(SP_VENDOR_ID, 'braze'))) {
    return false;
  }

  const { userUid, braze: { sdkAPIKey, sdkEndpoint } = {} } = JSGlobals || {};

  await loadJS(['https://js.appboycdn.com/web-sdk/4.8/braze.min.js']);

  braze.initialize(sdkAPIKey, {
    baseUrl: sdkEndpoint,
    manageServiceWorkerExternally: true,
    requireExplicitInAppMessageDismissal: true,
    ...(process.env.NODE_ENV === 'development' && { enableLogging: true }),
  });

  if (userUid) {
    braze.changeUser(userUid);
  }

  braze.openSession();
  document.dispatchEvent(new CustomEvent(EVENT_BRAZE_LOADED));

  return true;
};

export default initBrazeSDK;
