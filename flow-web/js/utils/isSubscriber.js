import { COOKIE_SUBSCRIBER } from '@app/constants/cookies';

import { getCookie } from '../modules/cookie';

export const isSubscriber = () => getCookie(COOKIE_SUBSCRIBER) === 'true';
