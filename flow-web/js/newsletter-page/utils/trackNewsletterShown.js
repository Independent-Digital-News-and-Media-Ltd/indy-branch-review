import { CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_SHOWN } from '@app/constants/chartbeat';
import { EVENT_CHARTBEAT_LOADED } from '@app/constants/customEvents';

import { trackChartbeat } from '../../chartbeat';

export default (newsletterChartbeatData) => {
  const trackNewsletterShown = () =>
    trackChartbeat(
      CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_SHOWN,
      newsletterChartbeatData,
    );

  trackNewsletterShown(); // in case chartbeat is already loaded
  document.addEventListener(EVENT_CHARTBEAT_LOADED, trackNewsletterShown);
};
