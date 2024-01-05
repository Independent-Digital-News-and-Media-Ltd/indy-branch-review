/* globals JSGlobals */

import initBrazePushNotifications from './initBrazePushNotifications';

const initBrazePushNotificationsWithDelay = () => {
  const { brazeSdkDelayAmount = 30000 } = JSGlobals.braze || {};
  window.setTimeout(initBrazePushNotifications, brazeSdkDelayAmount);
};

export default initBrazePushNotificationsWithDelay;
