/**
 * @jest-environment jsdom
 */

import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { ID_SUBSCRIPTION_SAVE_OFFER_PAGE } from '@app/constants/ids';

import subscriptionSaveOffer from '../subscription-save-offer';

jest.mock('@indy/archipelago/bootstrap');
jest.mock('@app/component/library/Hydration/IndyClientIslandWrapper', () => ({
  __esModule: true,
  default: 'HydrateIslandWrapper',
}));
jest.mock(
  '@app/component/pages/subscribe/SaveOfferPage/Content/ErrorBanner',
  () => ({
    __esModule: true,
    default: 'ErrorBanner',
  }),
);

describe('subscription-save-offer', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('will immediately hydrate correct error banner component', () => {
    jest.spyOn(document, 'getElementById').mockReturnValue('hydrate-root');
    subscriptionSaveOffer();
    expect(document.getElementById).toHaveBeenCalledWith(
      ID_SUBSCRIPTION_SAVE_OFFER_PAGE,
    );
    expect(hydrateComponent).toHaveBeenCalledWith(
      'hydrate-root',
      { ErrorBanner: 'ErrorBanner' },
      { Wrapper: 'HydrateIslandWrapper' },
    );
  });
});
