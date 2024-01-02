/**
 * @jest-environment jsdom
 */

import initBrazePushNotifications from '../initBrazePushNotifications';
import initBrazePushNotificationsWithDelay from '../initBrazePushNotificationsWithDelay';

jest.mock('../initBrazePushNotifications');

describe('initBrazePushNotificationsWithDelay()', () => {
  beforeEach(() => {
    global.JSGlobals = {};
    jest.useFakeTimers();
    jest.spyOn(window, 'setTimeout');
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
    delete global.JSGlobals;
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('will init Braze SDK after 30 seconds if no custom delay is defined in js globals', () => {
    const thirtySeconds = 30000;
    initBrazePushNotificationsWithDelay();
    expect(window.setTimeout).toHaveBeenCalledTimes(1);
    expect(window.setTimeout).toHaveBeenCalledWith(
      expect.any(Function),
      thirtySeconds,
    );
    jest.advanceTimersByTime(thirtySeconds - 1);
    expect(initBrazePushNotifications).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1);
    expect(initBrazePushNotifications).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(thirtySeconds);
    expect(initBrazePushNotifications).toHaveBeenCalledTimes(1);
  });

  it('will init Braze SDK after custom delay amount if defined', () => {
    const mockCustomDelay = 10000;
    global.JSGlobals.braze = { brazeSdkDelayAmount: mockCustomDelay };
    initBrazePushNotificationsWithDelay();
    jest.advanceTimersByTime(mockCustomDelay);
    expect(initBrazePushNotifications).toHaveBeenCalledTimes(1);
  });
});
