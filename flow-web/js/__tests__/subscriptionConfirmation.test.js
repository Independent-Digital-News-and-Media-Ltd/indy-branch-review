/**
 * @jest-environment jsdom
 */
import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { TRACKING_PAYMENT_KEYS } from '@app/constants/adobeConstants';
import { CHARTBEAT_EVENT_PAYWALL_COMPLETE } from '@app/constants/chartbeat';
import { EVENT_CHARTBEAT_LOADED } from '@app/constants/customEvents';

import { trackChartbeat } from '../chartbeat';
import { initBrazeOnSubscriptionFinish } from '../modules/braze/initBrazeOnSubscriptionFinish';
import {
  getDigitalDataByKeys,
  removeDigitalDataByKeys,
} from '../modules/digital-data/digital-data-session';
import { subscriptionConfirmation } from '../subscription-confirmation';

jest.mock('../chartbeat');
jest.mock('@indy/archipelago/bootstrap');
jest.mock('../modules/digital-data/digital-data-session');
jest.mock('../modules/taboola');
jest.mock('../utils/internalApi');
jest.mock(
  '@app/component/library/StaticPage/PaymentFlow/Confirmation/OnboardingJourney',
  () => ({
    HeaderWithMultiStepForm: 'HeaderWithMultiStepForm',
  }),
);
jest.mock('@app/component/library/StaticPage/PaymentFlow/Confirmation', () => ({
  NewsletterOptions: 'NewsletterOptions',
}));
jest.mock('@app/component/library/Hydration/IndyClientIslandWrapper', () => ({
  default: 'HydrationWrapper',
  __esModule: true,
}));
jest.mock('../modules/braze/initBrazeOnSubscriptionFinish');

describe('Subscription Confirmation', () => {
  const mockDigitalData = {
    subscription_package: 'package',
    subscription_price: 'price',
  };

  beforeAll(() => {
    window.JSGlobals = {};
  });

  beforeEach(() => {
    window.JSGlobals.featureFlags = {};
    jest.spyOn(document, 'addEventListener');
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
    delete window.chartbeat;
  });

  afterAll(() => {
    delete window.JSGlobals;
  });

  it('will hydrate the onboarding confirmation page', async () => {
    await subscriptionConfirmation();
    // once on file load, once on test
    expect(hydrateComponent).toHaveBeenCalledTimes(2);
    expect(initBrazeOnSubscriptionFinish).toHaveBeenCalled();
    expect(hydrateComponent.mock.calls[0]).toMatchInlineSnapshot(`
      [
        null,
        {
          "HeaderWithMultiStepForm": "HeaderWithMultiStepForm",
        },
        {
          "Wrapper": "HydrationWrapper",
        },
      ]
    `);
  });

  it('will immediately track paywall complete event if Chartbeat has already loaded', async () => {
    getDigitalDataByKeys.mockReturnValue(mockDigitalData);
    window.chartbeat = jest.fn();
    await subscriptionConfirmation();
    expect(getDigitalDataByKeys).toHaveBeenCalled();
    expect(getDigitalDataByKeys).toHaveBeenCalledWith(TRACKING_PAYMENT_KEYS);
    expect(trackChartbeat).toHaveBeenCalledTimes(1);
    expect(trackChartbeat).toHaveBeenCalledWith(
      CHARTBEAT_EVENT_PAYWALL_COMPLETE,
      {
        eventLabel: mockDigitalData.subscription_package,
        eventValue: mockDigitalData.subscription_price,
      },
    );
    expect(removeDigitalDataByKeys).toHaveBeenCalledTimes(1);
    expect(removeDigitalDataByKeys).toHaveBeenCalledWith(TRACKING_PAYMENT_KEYS);
    expect(document.addEventListener).not.toHaveBeenCalled();
  });

  it('will track paywall complete event on Chartbeat loaded event if Chartbeat has not loaded on initial execution', async () => {
    getDigitalDataByKeys.mockReturnValue(mockDigitalData);
    await subscriptionConfirmation();
    expect(document.addEventListener).toHaveBeenCalledTimes(1);
    expect(document.addEventListener).toHaveBeenCalledWith(
      EVENT_CHARTBEAT_LOADED,
      expect.any(Function),
    );

    document.dispatchEvent(new CustomEvent(EVENT_CHARTBEAT_LOADED));

    expect(trackChartbeat).toHaveBeenCalled();
    expect(trackChartbeat).toHaveBeenCalledWith(
      CHARTBEAT_EVENT_PAYWALL_COMPLETE,
      {
        eventLabel: mockDigitalData.subscription_package,
        eventValue: mockDigitalData.subscription_price,
      },
    );
    expect(removeDigitalDataByKeys).toHaveBeenCalled();
    expect(removeDigitalDataByKeys).toHaveBeenCalledWith(TRACKING_PAYMENT_KEYS);
  });

  it('will not track Chartbeat data is digital data is not defined', async () => {
    window.chartbeat = jest.fn();
    getDigitalDataByKeys.mockReturnValue({
      subscription_package: undefined,
      subscription_price: undefined,
    });
    await subscriptionConfirmation();
    expect(trackChartbeat).not.toHaveBeenCalled();
  });
});
