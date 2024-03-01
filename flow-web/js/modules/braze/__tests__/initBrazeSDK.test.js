/**
 * @jest-environment jsdom
 */
/* globals braze */

import { EVENT_BRAZE_LOADED } from '@app/constants/customEvents';

import { loadJS } from '@app/public/js/modules/util';

import initBrazeSDK from '../initBrazeSDK';

jest.mock('@app/public/js/modules/util', () => ({
  ...jest.requireActual('@app/public/js/modules/util'),
  loadJS: jest.fn(),
}));

describe('initBrazeSDK()', () => {
  const OLD_ENV = process.env;

  beforeAll(() => {
    global.braze = {
      initialize: jest.fn(),
      openSession: jest.fn(),
    };
    global.JSGlobals = {
      braze: {
        sdkAPIKey: '123',
        sdkEndpoint: 'https://sdk-endpoint.com',
      },
    };
  });

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  afterAll(() => {
    process.env = OLD_ENV;
    delete global.braze;
  });

  it('will initialise Braze with correct arguments and open session', async () => {
    jest.spyOn(document, 'dispatchEvent');
    await initBrazeSDK();
    expect(loadJS).toHaveBeenCalledTimes(1);
    expect(loadJS).toHaveBeenCalledWith(
      expect.arrayContaining([
        'https://js.appboycdn.com/web-sdk/4.8/braze.min.js',
      ]),
    );
    expect(braze.initialize).toHaveBeenCalledTimes(1);
    expect(braze.initialize.mock.calls[0]).toMatchInlineSnapshot(`
      [
        "123",
        {
          "baseUrl": "https://sdk-endpoint.com",
          "manageServiceWorkerExternally": true,
          "requireExplicitInAppMessageDismissal": true,
        },
      ]
    `);
    expect(braze.openSession).toHaveBeenCalledTimes(1);
    expect(document.dispatchEvent).toHaveBeenCalledTimes(1);
    expect(document.dispatchEvent).toHaveBeenCalledWith(
      new CustomEvent(EVENT_BRAZE_LOADED),
    );
  });

  it('will add logging functionality if executed within development env', async () => {
    process.env.NODE_ENV = 'development';
    await initBrazeSDK();
    expect(braze.initialize.mock.calls[0][1]).toEqual(
      expect.objectContaining({
        enableLogging: true,
      }),
    );
  });
});
