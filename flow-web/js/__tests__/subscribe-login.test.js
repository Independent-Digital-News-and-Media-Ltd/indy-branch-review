/**
 * @jest-environment jsdom
 */

import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { ID_SUBSCRIPTION_LOGIN_PAGE } from '@app/constants/ids';

import Wrapper from '@app/component/library/Hydration/IndyClientIslandWrapper';
import SubscribeLoginContent from '@app/component/pages/SubscriptionLogin/SubscribeLoginContent';

import subscribeLogin from '../subscribe-login';

jest.mock('@indy/archipelago/bootstrap');
jest.mock('@app/component/library/Hydration/IndyClientIslandWrapper', () => ({
  __esModule: true,
  default: 'Wrapper',
}));
jest.mock(
  '@app/component/pages/SubscriptionLogin/SubscribeLoginContent',
  () => ({
    __esModule: true,
    default: 'SubscribeLoginContent',
  }),
);

describe('subscribeLogin()', () => {
  it('will hydrate the subscribe login page correctly', () => {
    jest.spyOn(document, 'getElementById').mockReturnValue('hydrate-root');
    subscribeLogin();
    expect(document.getElementById).toHaveBeenCalledWith(
      ID_SUBSCRIPTION_LOGIN_PAGE,
    );
    expect(hydrateComponent).toHaveBeenCalledWith(
      'hydrate-root',
      { SubscribeLoginContent },
      { Wrapper },
    );
  });
});
