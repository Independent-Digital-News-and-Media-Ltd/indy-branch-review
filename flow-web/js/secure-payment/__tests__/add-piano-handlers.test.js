/**
 * @jest-environment jsdom
 */

import { COOKIE_SUBSCRIBER } from '@app/constants/cookies';

import { TRACKING_PAYMENT_KEYS } from '@app/constants/adobeConstants';
import {
  CLASS_PAYMENT_METHODS,
  CLASS_CHOOSE_PAYMENT_METHOD_BUTTON,
} from '@app/constants/classNames';

import { removeDigitalDataByKeys } from '@app/public/js/modules/adobe-analytics/digital-data';
import { setCookie } from '@app/public/js/modules/cookie';
import { showPianoOffer } from '@app/public/js/modules/piano';
import { InternalApi } from '@app/public/js/utils/internalApi';
import { redirect } from '@app/public/js/utils/redirect';

import { addPianoHandlers } from '../add-piano-handlers';

jest.mock('@app/public/js/modules/cookie');
jest.mock('@app/public/js/modules/adobe-analytics/digital-data');
jest.mock('@app/public/js/modules/piano');
jest.mock('@app/public/js/utils/internalApi');
jest.mock('@app/public/js/utils/redirect');

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
    jest.useFakeTimers();
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
    jest.useRealTimers();
  });

  it('should show selected offer details on payment page', () => {
    addPianoHandlers(offerId, termId, trackingData);

    expect(showPianoOffer).toHaveBeenCalledTimes(1);
    expect(showPianoOffer).toHaveBeenCalledWith(
      offerId,
      termId,
      trackingData,
      true,
    );
  });

  it('should hide the payment methods after user chooses one', () => {
    jest.spyOn(chooseButton[0], 'addEventListener');
    addPianoHandlers(offerId, termId, trackingData);

    chooseButton[0].click();
    expect(chooseButton[0].addEventListener).toHaveBeenCalledTimes(1);
    expect(paymentMethodsElem[0].classList.contains('hide')).toBe(true);
    expect(showPianoOffer).toHaveBeenCalledTimes(2);
    expect(showPianoOffer).toHaveBeenCalledWith(
      offerId,
      termId,
      trackingData,
      true,
    );
  });

  it('window.tp should have a length greater than zero if chooseButton is not found', () => {
    document.body.innerHTML = '<div class=${CLASS_PAYMENT_METHODS}></div>';

    addPianoHandlers(offerId, termId, trackingData);

    expect(window.tp.length).toBeGreaterThan(0);
  });

  it('should populate the window.tp property', () => {
    addPianoHandlers(offerId, termId, trackingData);

    expect(window.tp).toMatchInlineSnapshot(`
      [
        [
          "addHandler",
          "checkoutComplete",
          [Function],
        ],
        [
          "addHandler",
          "customEvent",
          [Function],
        ],
      ]
    `);
  });

  it('should set a cookie that keeps user logged in after checkout is complete', async () => {
    addPianoHandlers(offerId, termId, trackingData);
    const checkoutCompleteHandle = window.tp[0][2];

    await checkoutCompleteHandle();

    expect(setCookie).toHaveBeenCalledTimes(1);
    expect(setCookie).toHaveBeenCalledWith(COOKIE_SUBSCRIBER, true, {
      days: 3650,
    });
  });

  it('should redirect user to the confirmation page after newsletter sign up', async () => {
    InternalApi.post.mockResolvedValue({ ok: true });
    addPianoHandlers(offerId, termId, trackingData);
    const checkoutCompleteHandle = window.tp[0][2];

    await checkoutCompleteHandle();
    jest.advanceTimersByTime(100);
    expect(redirect).toHaveBeenCalledTimes(1);
    expect(redirect).toHaveBeenCalledWith('/subscribe/confirmation');
  });

  it('should remove payment tracking data and redirect user to the subscribe page after user clicks on the "No thanks" button', () => {
    addPianoHandlers(offerId, termId, trackingData);
    const customEventHandle = window.tp[1][2];

    customEventHandle({ eventName: 'close-has-access' });

    expect(removeDigitalDataByKeys).toHaveBeenCalledTimes(1);
    expect(removeDigitalDataByKeys).toHaveBeenCalledWith(TRACKING_PAYMENT_KEYS);
    expect(redirect).toHaveBeenCalledTimes(1);
    expect(redirect).toHaveBeenCalledWith('/subscribe');
  });
});
