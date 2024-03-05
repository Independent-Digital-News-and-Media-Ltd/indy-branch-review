import {
  SUBSCRIBER_ORIGIN_UK,
  SUBSCRIBER_ORIGIN_US,
} from '@app/constants/subscriberOrigin';

import { getSubscriberOriginOnClient } from '@app/public/js/utils/getSubscriberOriginOnClient';
import { InternalApi } from '@app/public/js/utils/internalApi';
import { buildSubscriptionRedirectUrl } from '@app/util/buildSubscriptionRedirectUrl';

export const redirectStudentToSelectedSubscription = async () => {
  const windowLocation = window.location;

  try {
    const subscriberOrigin = getSubscriberOriginOnClient();
    const savedRedirectURL = window.localStorage.getItem('studentRedirectUrl');

    if (savedRedirectURL) {
      windowLocation.href = savedRedirectURL;
    } else if (
      [SUBSCRIBER_ORIGIN_UK, SUBSCRIBER_ORIGIN_US].includes(subscriberOrigin)
    ) {
      // visiting from Student Beans directly
      const res = await InternalApi.get(
        'subscription/student-template-mappings',
      );

      const studentFields = await res.json();
      if (!res.ok) {
        throw new Error(studentFields.message);
      }

      const redirectURL = buildSubscriptionRedirectUrl({
        offerId: studentFields.offerid,
        termId: studentFields['tide-annual-term-id'],
      });

      windowLocation.href = redirectURL;
    } else {
      throw new Error('Unsupported region.');
    }
  } catch (error) {
    console.error(error);
    windowLocation.pathname = '/subscribe';
  }
};

redirectStudentToSelectedSubscription();
