import {
  CLASS_PAYMENT_METHODS,
  CLASS_CHOOSE_PAYMENT_METHOD_BUTTON,
} from '@app/constants/classNames';

import {
  showPianoOffer,
  handleAlreadyHasAccessForSubscriptions,
  handleCheckoutCompleteForSubscriptions,
} from '../piano';

const IS_PAYMENT_FLOW = true;

export const addPianoHandlers = (
  offerId,
  termId,
  trackingData,
  shouldSkipOfferRenderOnMount = false,
) => {
  const [chooseButton] = document.getElementsByClassName(
    CLASS_CHOOSE_PAYMENT_METHOD_BUTTON,
  );

  const startCheckout = () => {
    showPianoOffer({
      offerId,
      termId,
      trackingData,
      isPaymentFlow: IS_PAYMENT_FLOW,
    });
  };

  chooseButton?.addEventListener('click', () => {
    startCheckout();

    const [paymentMethodsElem] = document.getElementsByClassName(
      CLASS_PAYMENT_METHODS,
    );

    paymentMethodsElem.classList.add('hide');
  });

  window.tp = window.tp || [];
  handleCheckoutCompleteForSubscriptions();
  handleAlreadyHasAccessForSubscriptions();

  if (shouldSkipOfferRenderOnMount) {
    return;
  }
  startCheckout();
};
