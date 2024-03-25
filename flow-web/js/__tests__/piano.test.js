/**
 * @jest-environment jsdom
 */

import { COOKIE_SUBSCRIBER } from '@app/constants/cookies';

import { TRACKING_PAYMENT_KEYS } from '@app/constants/adobeConstants';

jest.mock('../utils/redirect');
jest.mock('../modules/cookie');
jest.mock('../modules/digital-data/digital-data-session');
jest.mock('../modules/custom-event-dispatchers');
jest.mock('../modules/taboola');
jest.mock('../utils/internalApi');

import {
  handleAlreadyHasAccessForSubscriptions,
  handleCheckoutCompleteForSubscriptions,
} from '@app/public/js/piano';

import { setCookie } from '../modules/cookie';
import { removeDigitalDataByKeys } from '../modules/digital-data/digital-data-session';
import * as thatModule from '../piano';
import { redirect } from '../utils/redirect';

describe('Piano public JS methods', () => {
  beforeEach(() => {
    window.tp = [];
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  afterAll(() => {
    delete window.tp;
    jest.restoreAllMocks();
  });

  describe('handleCheckoutCompleteForSubscriptions()', () => {
    it('should expose correct checkout complete event handler to Piano SDK which sets subscriber cookie and redirects to confirmation page', async () => {
      handleCheckoutCompleteForSubscriptions();
      expect(window.tp).toMatchInlineSnapshot(`
        [
          [
            "addHandler",
            "checkoutComplete",
            [Function],
          ],
        ]
      `);
      const checkoutCompleteHandle = window.tp[0][2];
      await checkoutCompleteHandle();
      expect(setCookie).toHaveBeenCalledTimes(1);
      expect(setCookie).toHaveBeenCalledWith(COOKIE_SUBSCRIBER, true, {
        days: 3650, // 10 years
      });
      jest.advanceTimersByTime(100);
      expect(redirect).toHaveBeenCalledTimes(1);
      expect(redirect).toHaveBeenCalledWith('/subscribe/confirmation');
    });
  });

  describe('handleAlreadyHasAccessForSubscriptions()', () => {
    it('will expose correct custom event handler to Piano SDK which removes relevant digital data and redirects to subscribe page on has access close event', () => {
      handleAlreadyHasAccessForSubscriptions();
      expect(window.tp).toMatchInlineSnapshot(`
        [
          [
            "addHandler",
            "customEvent",
            [Function],
          ],
        ]
      `);
      const customEventHandler = window.tp[0][2];
      customEventHandler({ eventName: 'close-has-access' });
      expect(redirect).toHaveBeenCalledTimes(1);
      expect(redirect).toHaveBeenCalledWith('/subscribe');
      expect(removeDigitalDataByKeys).toHaveBeenCalledTimes(1);
      expect(removeDigitalDataByKeys).toHaveBeenCalledWith(
        TRACKING_PAYMENT_KEYS,
      );
    });

    it('will do nothing if a different event is emitted to that of already has access', () => {
      handleAlreadyHasAccessForSubscriptions();
      const customEventHandler = window.tp[0][2];
      customEventHandler({ eventName: 'some-other-event' });
      expect(redirect).not.toHaveBeenCalled();
      expect(removeDigitalDataByKeys).not.toHaveBeenCalled();
    });
  });

  describe('handleCheckoutComplete()', () => {
    it('will expose correct checkout complete callback to Piano SDK', () => {
      thatModule.handleCheckoutComplete();
      expect(window.tp).toMatchInlineSnapshot(`
        [
          [
            "addHandler",
            "checkoutComplete",
            [Function],
          ],
        ]
      `);
      const [[, , callback]] = window.tp;
      callback();
      jest.advanceTimersByTime(100);
      expect(redirect).toHaveBeenCalledTimes(1);
      expect(redirect).toHaveBeenCalledWith(
        '/subscribe/confirmation?save_offer=true',
      );
    });
  });

  describe('showPianoOffer()', () => {
    beforeEach(() => {
      window.tp.offer = {
        show: jest.fn(),
      };
      jest.spyOn(thatModule, 'addHandlers').mockImplementation();
    });

    it('will add handlers to Piano SDK and expose correct show offer callback to be called once initialised', () => {
      thatModule.showPianoOffer({
        offerId: 'offerId',
        termId: 'termId',
        trackingData: 'trackingData',
        promoCode: 'promoCode',
        showCloseButton: false,
      });
      expect(window.tp).toMatchSnapshot();
      const [[, callback]] = window.tp;
      callback();
      expect(window.tp.offer.show).toHaveBeenCalledTimes(1);
      expect(window.tp.offer.show).toHaveBeenCalledWith({
        offerId: 'offerId',
        termId: 'termId',
        showCloseButton: false,
        promoCode: 'promoCode',
      });
    });
  });
});
