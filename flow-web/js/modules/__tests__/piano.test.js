/**
 * @jest-environment jsdom
 */

import { redirect } from '../../utils/redirect';
import { handleCheckoutComplete } from '../piano';

jest.mock('../../utils/redirect');

describe('Piano public js modules', () => {
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
  });

  describe('handleCheckoutComplete()', () => {
    it('will expose correct checkout complete callback to Piano SDK', () => {
      handleCheckoutComplete();
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
});
