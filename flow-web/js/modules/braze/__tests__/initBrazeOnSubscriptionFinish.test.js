/* globals braze */

import * as thatModule from '../initBrazeOnSubscriptionFinish';
import initBrazeSDK from '../initBrazeSDK';

jest.mock('../initBrazeSDK');

describe('initBrazeOnSubscriptionFinish()', () => {
  beforeAll(() => {
    global.braze = {
      logCustomEvent: jest.fn(),
    };
    jest.spyOn(console, 'error').mockImplementation();
    jest.spyOn(thatModule, 'initBrazeOnSubscriptionFinish');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    delete global.braze;
    jest.restoreAllMocks();
  });

  it('will correctly init Braze with config and submit subscription start event', async () => {
    initBrazeSDK.mockResolvedValueOnce(true);
    await thatModule.initBrazeOnSubscriptionFinish();
    expect(initBrazeSDK).toHaveBeenCalledTimes(1);
    expect(braze.logCustomEvent).toHaveBeenCalledTimes(1);
    expect(braze.logCustomEvent).toHaveBeenCalledWith('subscription_finish');
    expect(console.error).not.toHaveBeenCalled();
  });

  it('will recover and print error message to console if fails to log custom event via Braze', async () => {
    const mockErrorMessage = 'test error';
    initBrazeSDK.mockImplementationOnce(() => {
      throw new Error(mockErrorMessage);
    });
    await thatModule.initBrazeOnSubscriptionFinish();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(
      'Error logging subscription_finish Braze event:',
      mockErrorMessage,
    );
    expect(thatModule.initBrazeOnSubscriptionFinish).not.toThrow();
  });
});
