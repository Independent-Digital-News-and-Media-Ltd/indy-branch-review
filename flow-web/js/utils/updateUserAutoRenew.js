import { InternalApi } from '@app/public/js/utils/internalApi';

export const updateUserAutoRenew = async ({
  subscriptionId,
  autoRenew,
  onSuccessfulRequest = () => {},
} = {}) => {
  try {
    const request = await InternalApi.post('subscription/cancel', {
      autoRenew,
      subscriptionId,
    });

    if (request.ok) {
      onSuccessfulRequest();
      return;
    }

    throw new Error('Network response was not ok.');
  } catch (error) {
    console.error('Fetch failed: ', error.message);
  }
};
