/* globals JSGlobals braze */

const initBrazeSDK = () => {
  const { userUid, braze: { sdkAPIKey, sdkEndpoint } = {} } = JSGlobals || {};

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
};

export default initBrazeSDK;
