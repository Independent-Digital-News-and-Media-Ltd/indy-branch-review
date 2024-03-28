/**
 * @jest-environment jsdom
 */
import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { initBrazeOnSubscriptionFinish } from '../modules/braze/initBrazeOnSubscriptionFinish';
import { subscriptionConfirmation } from '../subscription-confirmation';

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
});
