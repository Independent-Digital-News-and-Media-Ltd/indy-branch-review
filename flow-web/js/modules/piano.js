import { ID_MY_ACCOUNT } from '@app/constants/ids';

import { InternalApi } from '../utils/internalApi';
import { redirect } from '../utils/redirect';

import { removeDigitalDataByKeys } from './adobe-analytics/digital-data/digital-data-session';
import {
  dispatchPaymentFormLoaded,
  dispatchPaymentDetailsSuccess,
  dispatchPaymentDetailsFailed,
} from './custom-event-dispatchers';
import * as thisModule from './piano';
import { trackSubscriptionCause } from './taboola';

const addHandlers = (trackingData = {}, isPaymentFlow) => {
  const trackingDataKeys = Object.keys(trackingData);

  window.tp = window.tp || [];

  window.tp.push([
    'addHandler',
    'startCheckout',
    () => dispatchPaymentFormLoaded(trackingData),
  ]);

  !isPaymentFlow &&
    window.tp.push([
      'addHandler',
      'checkoutComplete',
      () => {
        dispatchPaymentDetailsSuccess(trackingData);
        trackSubscriptionCause();
        removeDigitalDataByKeys(trackingDataKeys);
      },
    ]);

  window.tp.push([
    'addHandler',
    'checkoutError',
    () => {
      removeDigitalDataByKeys(trackingDataKeys);
      dispatchPaymentDetailsFailed(trackingData);
    },
  ]);
};

export const showPianoOffer = (
  offerId,
  termId,
  trackingData,
  isPaymentFlow,
  promoCode = '',
) => {
  addHandlers(trackingData, isPaymentFlow);

  window.tp = window.tp || [];
  window.tp.push([
    'init',
    () => {
      window.tp.offer.show({
        offerId,
        termId,
        ...(promoCode && { promoCode }),
      });
    },
  ]);
};

export const showMyAccount = () => {
  window.tp = window.tp || [];
  window.tp.push([
    'init',
    () => {
      window.tp.myaccount.show({
        displayMode: 'inline',
        containerSelector: `#${ID_MY_ACCOUNT}`,
      });
    },
  ]);
};

export const updateDefaultPaymentMethodOnEvent = () => {
  window.tp = window.tp || [];
  window.tp.push([
    'addHandler',
    'customEvent',
    async ({ eventName, params }) => {
      if (eventName === 'default-payment-method') {
        const desiredPaymentMethodId = params.method;
        const res = await InternalApi.post(
          'profile/set-default-payment-method',
          { desiredPaymentMethodId },
        );

        if (res.ok) {
          // re-mount Piano experience to showcase updated ui
          thisModule.showMyAccount();
          return;
        }

        console.warn('Warning: failed to update default payment method.');
      }
    },
  ]);
};

export const handleCheckoutComplete = () => {
  window.tp = window.tp || [];
  window.tp.push([
    'addHandler',
    'checkoutComplete',
    () => {
      // set timeout to make the redirection happens in the next execution cycle.
      // it's to make sure other `checkoutComplete` handler will be triggered before redirection
      setTimeout(() => {
        redirect('/subscribe/confirmation?save_offer=true');
      });
    },
  ]);
};
