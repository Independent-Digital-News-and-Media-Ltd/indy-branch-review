import { COOKIE_SUBSCRIBER } from '@app/constants/cookies';

import { TRACKING_PAYMENT_KEYS } from '@app/constants/adobeConstants';
import { CHARTBEAT_EVENT_PAYWALL_CANCEL } from '@app/constants/chartbeat';
import {
  STRIPE_ELEMENTS_FRIENDLY_OFFER_ID,
  STRIPE_ELEMENTS_FRIENDLY_TERM_ID,
  STRIPE_ELEMENTS_SUCCESS_TERM_ID,
} from '@app/constants/piano';

import { trackChartbeat } from '../chartbeat';
import { getCookie } from '../modules/cookie';
import { getDigitalDataByKeys } from '../modules/digital-data/digital-data-session';
import { getParametersByNames } from '../modules/util';

import { addPianoHandlers } from './add-piano-handlers';

const [offerId, termId, stripeElementsSuccessTermId] = getParametersByNames([
  STRIPE_ELEMENTS_FRIENDLY_OFFER_ID,
  STRIPE_ELEMENTS_FRIENDLY_TERM_ID,
  STRIPE_ELEMENTS_SUCCESS_TERM_ID,
]).map(({ value }) => value);

const trackingData = getDigitalDataByKeys(TRACKING_PAYMENT_KEYS);
// Stripe Elements automatically reloads page after successful checkout
// we therefore can't show offer immediately under that scenario because
// it messes up the payment confirmation within the Piano iframe and causes an 'internal error'
const shouldSkipOfferRenderOnMount = !!stripeElementsSuccessTermId;

const trackSubscriptionCancelled = () => {
  if (document.visibilityState === 'hidden' && !getCookie(COOKIE_SUBSCRIBER)) {
    trackChartbeat(CHARTBEAT_EVENT_PAYWALL_CANCEL, {
      eventLabel: trackingData.subscription_package,
      eventValue: trackingData.subscription_price,
    });
  }
};

addPianoHandlers(offerId, termId, trackingData, shouldSkipOfferRenderOnMount);

document.addEventListener('visibilitychange', trackSubscriptionCancelled);
