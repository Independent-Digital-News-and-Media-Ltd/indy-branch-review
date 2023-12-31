/* globals braze */

import initBrazeSDK from './initBrazeSDK';

export const initBrazeOnSubscriptionFinish = () => {
  try {
    initBrazeSDK();
    braze.logCustomEvent('subscription_finish');
  } catch (error) {
    console.error(
      'Error logging subscription_finish Braze event:',
      error.message,
    );
  }
};
