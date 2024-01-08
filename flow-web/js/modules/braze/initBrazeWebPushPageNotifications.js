/* globals braze */

import { CLASS_WEBPUSH_SIGNUP_BUTTON } from '@app/constants/classNames';

import initBrazeSDK from './initBrazeSDK';

export default () => {
  initBrazeSDK();

  braze.requestPushPermission();

  document
    .querySelector(`.${CLASS_WEBPUSH_SIGNUP_BUTTON}`)
    .addEventListener('click', () => {
      braze.requestPushPermission();
    });
};
