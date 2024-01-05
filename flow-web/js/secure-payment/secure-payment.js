import { COOKIE_SUBSCRIBER } from '@app/constants/cookies';

import { TRACKING_PAYMENT_KEYS } from '@app/constants/adobeConstants';
import { CHARTBEAT_EVENT_PAYWALL_CANCEL } from '@app/constants/chartbeat';

import { trackChartbeat } from '../chartbeat';
import { getDigitalDataByKeys } from '../modules/adobe-analytics/digital-data/digital-data-session';
import { getCookie } from '../modules/cookie';
import { getParametersByNames } from '../modules/util';

import { addPianoHandlers } from './add-piano-handlers';

const [offerId, termId] = getParametersByNames(['offerId', 'termId']).map(
  ({ value }) => value,
);

const trackingData = getDigitalDataByKeys(TRACKING_PAYMENT_KEYS);

const trackSubscriptionCancelled = () => {
  if (document.visibilityState === 'hidden' && !getCookie(COOKIE_SUBSCRIBER)) {
    trackChartbeat(CHARTBEAT_EVENT_PAYWALL_CANCEL, {
      eventLabel: trackingData.subscription_package,
      eventValue: trackingData.subscription_price,
    });
  }
};

addPianoHandlers(offerId, termId, trackingData);

document.addEventListener('visibilitychange', trackSubscriptionCancelled);
