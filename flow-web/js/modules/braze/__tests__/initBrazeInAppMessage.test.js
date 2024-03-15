import showInAppMessage from '../inAppMessage';
import initBrazeInAppMessage from '../initBrazeInAppMessage';
import initBrazeSDK from '../initBrazeSDK';

jest.mock('../inAppMessage');
jest.mock('../initBrazeSDK');

describe('initBrazeInAppMessage()', () => {
  beforeAll(() => {
    global.braze = {
      logCustomEvent: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    delete global.braze;
  });

  it('will initialise the Braze SDK with correct config data and fire the push notifications campaign', async () => {
    initBrazeSDK.mockResolvedValueOnce(true);
    await initBrazeInAppMessage();
    expect(initBrazeSDK).toHaveBeenCalledTimes(1);
    expect(global.braze.logCustomEvent).toHaveBeenCalledTimes(1);
    expect(global.braze.logCustomEvent).toHaveBeenCalledWith('campaign-a');
    expect(showInAppMessage).toHaveBeenCalledTimes(1);
  });
});
