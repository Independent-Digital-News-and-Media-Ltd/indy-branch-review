/**
 * @jest-environment jsdom
 */
/* globals braze */

import initBrazeSDK from '../initBrazeSDK';

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
  });

  afterAll(() => {
    process.env = OLD_ENV;
    delete global.braze;
  });

  it('will initialise Braze with correct arguments and open session', async () => {
    initBrazeSDK();
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
  });

  it('will add logging functionality if executed within development env', async () => {
    process.env.NODE_ENV = 'development';
    (await import('../initBrazeSDK')).default();
    expect(braze.initialize.mock.calls[0][1]).toEqual(
      expect.objectContaining({
        enableLogging: true,
      }),
    );
  });
});
