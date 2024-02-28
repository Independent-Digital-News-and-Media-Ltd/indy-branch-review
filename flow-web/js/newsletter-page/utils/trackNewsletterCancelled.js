import { CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_CANCEL } from '@app/constants/chartbeat';

import { trackChartbeat } from '@app/public/js/chartbeat';

export default (newsletterChartbeatData, activeSelectedNewsletter) => {
  document.addEventListener('visibilitychange', () => {
    const hasUserInteractedWithPage = activeSelectedNewsletter.current !== null;

    if (hasUserInteractedWithPage && document.visibilityState === 'hidden') {
      trackChartbeat(CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_CANCEL, {
        ...newsletterChartbeatData,
        eventValue: activeSelectedNewsletter.current,
      });
    }
  });
};
