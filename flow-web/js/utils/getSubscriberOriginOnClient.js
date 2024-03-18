import { COOKIE_SUBSCRIBER_ORIGIN } from '@app/constants/cookies';

import { SUBSCRIBER_ORIGIN_UK } from '@app/constants/subscriberOrigin';

import { getCookie } from '@app/public/js/modules/cookie';

let subscriberOrigin;

export const getSubscriberOriginOnClient = () => {
  if (subscriberOrigin) {
    return subscriberOrigin;
  }

  subscriberOrigin =
    getCookie(COOKIE_SUBSCRIBER_ORIGIN) ?? SUBSCRIBER_ORIGIN_UK;

  return subscriberOrigin;
};
