/**
 * @jest-environment jsdom
 */

import renderInAppMessage from '../inAppMessage';

describe('showInAppMessage', () => {
  const mockLogCustomEvent = jest.fn();
  const mockSubscribeToInAppMessage = jest.fn();
  const mockIsPushSupported = jest.fn();
  const mockIsPushPermissionGranted = jest.fn();
  const mockIsPushBlocked = jest.fn();
  const mockShowInAppMessage = jest.fn();

  beforeEach(() => {
    global.braze = {
      logCustomEvent: mockLogCustomEvent,
      subscribeToInAppMessage: mockSubscribeToInAppMessage,
      isPushSupported: mockIsPushSupported,
      isPushPermissionGranted: mockIsPushPermissionGranted,
      isPushBlocked: mockIsPushBlocked,
      showInAppMessage: mockShowInAppMessage,
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  it.each([
    [
      { campaign: 'push-notification-prompt', 'mock-key': 'mock-value' },
      false,
      false,
      true,
      'do-not-display',
    ],
    [
      { campaign: 'push-notification-prompt', 'mock-key': 'mock-value' },
      true,
      false,
      false,
      'display',
    ],
  ])(
    'handles in-app messages with key-value pairs %p',
    (
      keyValuePairs,
      pushSupported,
      pushPermissionGranted,
      pushBlocked,
      shouldDisplay,
    ) => {
      mockIsPushSupported.mockReturnValue(pushSupported);
      mockIsPushPermissionGranted.mockReturnValue(pushPermissionGranted);
      mockIsPushBlocked.mockReturnValue(pushBlocked);

      const inAppMessage = {
        extras: keyValuePairs,
        buttons: [{}, { subscribeToClickedEvent: jest.fn() }],
      };

      mockSubscribeToInAppMessage.mockImplementation((callback) =>
        callback(inAppMessage),
      );

      renderInAppMessage();

      if (shouldDisplay === 'display') {
        expect(
          inAppMessage.buttons[1].subscribeToClickedEvent,
        ).toHaveBeenCalled();

        expect(mockShowInAppMessage).toHaveBeenCalledWith(inAppMessage);
      }
    },
  );
});
