/* globals braze */

const showInAppMessage = () => {
  braze.subscribeToInAppMessage((inAppMessage) => {
    // key-value pairs defined in the Braze dashboard
    const keyValuePairs = inAppMessage.extras || {};
    const allowNotificationsBtn = inAppMessage.buttons[1];

    if (keyValuePairs['campaign'] === 'push-notification-prompt') {
      // We don't want to display the soft push prompt to users on browsers that don't support push or if the user has already granted/blocked permission
      if (
        !braze.isPushSupported() ||
        braze.isPushPermissionGranted() ||
        braze.isPushBlocked()
      ) {
        return;
      }

      if (allowNotificationsBtn) {
        allowNotificationsBtn.subscribeToClickedEvent();
      }
    }

    braze.showInAppMessage(inAppMessage);
  });
};

export default showInAppMessage;
