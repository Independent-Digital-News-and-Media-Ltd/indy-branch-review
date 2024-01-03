/**
 * @jest-environment jsdom
 */

import { CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_SHOWN } from '@app/constants/chartbeat';
import { EVENT_CHARTBEAT_LOADED } from '@app/constants/customEvents';

import { trackChartbeat } from '@app/public/js/chartbeat';

import trackNewsletterShown from '../trackNewsletterShown';

jest.mock('@app/public/js/chartbeat');

describe('trackNewsletterShown()', () => {
  const mockNewsletterChartbeatData = {
    eventLabel: '/newsletters',
  };
  const mockChartbeatLoadedEvent = new CustomEvent(EVENT_CHARTBEAT_LOADED);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('will attempt to track newsletter shown event immediately in case Chartbeat has already loaded', () => {
    trackNewsletterShown(mockNewsletterChartbeatData);
    expect(trackChartbeat).toHaveBeenCalledTimes(1);
    expect(trackChartbeat).toHaveBeenCalledWith(
      CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_SHOWN,
      mockNewsletterChartbeatData,
    );
  });

  it('will attempt to track newsletter shown event once Chartbeat loaded event is dispatched', () => {
    trackNewsletterShown(mockNewsletterChartbeatData);
    document.dispatchEvent(mockChartbeatLoadedEvent);
    expect(trackChartbeat).toHaveBeenCalled();
    expect(trackChartbeat).toHaveBeenCalledWith(
      CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_SHOWN,
      mockNewsletterChartbeatData,
    );
  });
});
