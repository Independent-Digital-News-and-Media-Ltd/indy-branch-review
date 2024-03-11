/**
 * @jest-environment jsdom
 */

import { CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_CANCEL } from '@app/constants/chartbeat';

import { trackChartbeat } from '@app/public/js/chartbeat';

import trackNewsletterCancelled from '../trackNewsletterCancelled';

jest.mock('@app/public/js/chartbeat');

describe('trackNewsletterCancelled()', () => {
  const mockNewsletterChartbeatData = {
    eventLabel: '/newsletters',
  };
  const mockActiveSelectedNewsletter = {
    current: null,
  };
  const visibilitychangeEvent = new Event('visibilitychange');

  afterEach(() => {
    jest.clearAllMocks();
    mockActiveSelectedNewsletter.current = null;
  });

  it('will setup visibilitychange event listener correctly', () => {
    jest.spyOn(document, 'addEventListener');
    trackNewsletterCancelled(
      mockNewsletterChartbeatData,
      mockActiveSelectedNewsletter,
    );
    expect(document.addEventListener).toHaveBeenCalledTimes(1);
    expect(document.addEventListener).toHaveBeenCalledWith(
      'visibilitychange',
      expect.any(Function),
    );
  });

  it("will not track newsletter cancelled event if user hasn't interacted with page", () => {
    trackNewsletterCancelled(
      mockNewsletterChartbeatData,
      mockActiveSelectedNewsletter,
    );
    document.dispatchEvent(visibilitychangeEvent);
    expect(trackChartbeat).not.toHaveBeenCalled();
  });

  it('will track newsletter cancelled event only if user has interacted with page and document is hidden', () => {
    const mockSelectedNewsletter = 'test';
    mockActiveSelectedNewsletter.current = mockSelectedNewsletter;
    trackNewsletterCancelled(
      mockNewsletterChartbeatData,
      mockActiveSelectedNewsletter,
    );
    jest.spyOn(document, 'visibilityState', 'get').mockReturnValue('hidden');
    document.dispatchEvent(visibilitychangeEvent);
    expect(trackChartbeat).toHaveBeenCalled();
    expect(trackChartbeat).toHaveBeenCalledWith(
      CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_CANCEL,
      { ...mockNewsletterChartbeatData, eventValue: mockSelectedNewsletter },
    );
  });
});
