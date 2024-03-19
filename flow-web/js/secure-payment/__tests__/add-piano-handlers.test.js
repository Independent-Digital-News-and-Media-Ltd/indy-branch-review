/**
 * @jest-environment jsdom
 */
import {
  CLASS_PAYMENT_METHODS,
  CLASS_CHOOSE_PAYMENT_METHOD_BUTTON,
} from '@app/constants/classNames';

import {
  showPianoOffer,
  handleAlreadyHasAccessForSubscriptions,
  handleCheckoutCompleteForSubscriptions,
} from '@app/public/js/piano';

import { addPianoHandlers } from '../add-piano-handlers';

jest.mock('@app/public/js/piano');

describe('addPianoHandlers()', () => {
  const trackingData = {
    subscription_package: 'test-package',
    subscription_price: 'test-price',
  };
  const offerId = 'offerId';
  const termId = 'termId';
  const chooseButton = document.getElementsByClassName(
    CLASS_CHOOSE_PAYMENT_METHOD_BUTTON,
  );
  const paymentMethodsElem = document.getElementsByClassName(
    CLASS_PAYMENT_METHODS,
  );

  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});

    document.body.innerHTML = `
      <button class=${CLASS_CHOOSE_PAYMENT_METHOD_BUTTON}>Choose</button>
      <div class=${CLASS_PAYMENT_METHODS}></div>
    `;
  });

  afterEach(() => {
    window.tp = [];
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  it('should show selected offer details on payment page', () => {
    addPianoHandlers(offerId, termId, trackingData);

    expect(showPianoOffer).toHaveBeenCalledTimes(1);
    expect(showPianoOffer).toHaveBeenCalledWith({
      isPaymentFlow: true,
      offerId: 'offerId',
      termId: 'termId',
      trackingData: {
        subscription_package: 'test-package',
        subscription_price: 'test-price',
      },
    });
  });

  it('should hide the payment methods after user chooses one', () => {
    jest.spyOn(chooseButton[0], 'addEventListener');
    addPianoHandlers(offerId, termId, trackingData);

    chooseButton[0].click();
    expect(chooseButton[0].addEventListener).toHaveBeenCalledTimes(1);
    expect(paymentMethodsElem[0].classList.contains('hide')).toBe(true);
    expect(showPianoOffer).toHaveBeenCalledTimes(2);
    expect(showPianoOffer).toHaveBeenCalledWith({
      isPaymentFlow: true,
      offerId: 'offerId',
      termId: 'termId',
      trackingData: {
        subscription_package: 'test-package',
        subscription_price: 'test-price',
      },
    });
  });

  it('window.tp should be setup correctly with Piano event handlers even if chooseButton is not found', () => {
    document.body.innerHTML = '<div class="some-other-class"></div>';
    addPianoHandlers(offerId, termId, trackingData);
    expect(window.tp).toBeDefined();
    expect(handleCheckoutCompleteForSubscriptions).toHaveBeenCalledTimes(1);
    expect(handleAlreadyHasAccessForSubscriptions).toHaveBeenCalledTimes(1);
  });

  it('should not render Piano offer on load if shouldSkipOfferRenderOnMount is true', () => {
    const mockShouldSkipOfferRenderOnMount = true;
    addPianoHandlers(
      offerId,
      termId,
      trackingData,
      mockShouldSkipOfferRenderOnMount,
    );
    expect(showPianoOffer).not.toHaveBeenCalled();
  });
});
