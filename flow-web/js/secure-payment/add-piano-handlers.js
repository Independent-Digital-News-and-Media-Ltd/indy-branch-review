import { COOKIE_SUBSCRIBER } from '@app/constants/cookies';

import { TRACKING_PAYMENT_KEYS } from '@app/constants/adobeConstants';
import {
  CLASS_PAYMENT_METHODS,
  CLASS_CHOOSE_PAYMENT_METHOD_BUTTON,
} from '@app/constants/classNames';

import { removeDigitalDataByKeys } from '../modules/adobe-analytics/digital-data';
import { setCookie } from '../modules/cookie';
import { showPianoOffer } from '../modules/piano';
import { redirect } from '../utils/redirect';

const IS_PAYMENT_FLOW = true;
const EXPIRE_DAYS = 3650; // 10 years

export const addPianoHandlers = (offerId, termId, trackingData) => {
  const [chooseButton] = document.getElementsByClassName(
    CLASS_CHOOSE_PAYMENT_METHOD_BUTTON,
  );

  const startCheckout = () => {
    showPianoOffer(offerId, termId, trackingData, IS_PAYMENT_FLOW);
  };

  chooseButton?.addEventListener('click', () => {
    startCheckout();

    const [paymentMethodsElem] = document.getElementsByClassName(
      CLASS_PAYMENT_METHODS,
    );

    paymentMethodsElem.classList.add('hide');
  });

  window.tp = window.tp || [];
  startCheckout();

  window.tp.push([
    'addHandler',
    'checkoutComplete',
    () => {
      setCookie(COOKIE_SUBSCRIBER, true, { days: EXPIRE_DAYS });

      // set timeout to make the redirection happens in the next execution cycle.
      // it's to make sure other `checkoutComplete` handler will be triggered before redirection
      setTimeout(() => {
        redirect('/subscribe/confirmation');
      });
    },
  ]);

  window.tp.push([
    'addHandler',
    'customEvent',
    ({ eventName }) => {
      if (eventName === 'close-has-access') {
        removeDigitalDataByKeys(TRACKING_PAYMENT_KEYS);

        redirect('/subscribe');
      }
    },
  ]);
};
