import { hydrateComponent } from '@indy/archipelago/bootstrap';

import {
  COOKIE_FEAT_SUBS_ONBOARDING_JOURNEY,
  COOKIE_PLANIT_CLICK_ID,
} from '@app/constants/cookies';

import { TRACKING_PAYMENT_KEYS } from '@app/constants/adobeConstants';
import { CHARTBEAT_EVENT_PAYWALL_COMPLETE } from '@app/constants/chartbeat';
import { EVENT_CHARTBEAT_LOADED } from '@app/constants/customEvents';
import { ID_SUBSCRIBE_CONFIRMATION_NEWSLETTERS } from '@app/constants/ids';

import Wrapper from '@app/component/library/Hydration/IndyClientIslandWrapper';
import { NewsletterOptions } from '@app/component/library/StaticPage/PaymentFlow/Confirmation';
import { HeaderWithMultiStepForm } from '@app/component/library/StaticPage/PaymentFlow/Confirmation/OnboardingJourney';

import { trackChartbeat } from './chartbeat';
import {
  getDigitalDataByKeys,
  removeDigitalDataByKeys,
} from './modules/adobe-analytics/digital-data/digital-data-session';
import { initBrazeOnSubscriptionFinish } from './modules/braze/initBrazeOnSubscriptionFinish';
import { getCookie } from './modules/cookie';
import { trackSubscriptionCause } from './modules/taboola';
import { InternalApi } from './utils/internalApi';

export const subscriptionConfirmation = () => {
  const isSubsOnboardingJourneyEnabled =
    window.JSGlobals?.featureFlags?.[COOKIE_FEAT_SUBS_ONBOARDING_JOURNEY];
  const hydratableComponent = isSubsOnboardingJourneyEnabled
    ? { HeaderWithMultiStepForm }
    : { NewsletterOptions };
  const planitClickIdCookie = getCookie(COOKIE_PLANIT_CLICK_ID);
  const root = document.getElementById(ID_SUBSCRIBE_CONFIRMATION_NEWSLETTERS);
  const trackingData = getDigitalDataByKeys(TRACKING_PAYMENT_KEYS);
  const trackPaywallComplete = () => {
    const { subscription_package, subscription_price } = trackingData || {};
    if (!subscription_package && !subscription_price) {
      return;
    }

    trackChartbeat(CHARTBEAT_EVENT_PAYWALL_COMPLETE, {
      eventLabel: trackingData?.subscription_package,
      eventValue: trackingData?.subscription_price,
    });
    removeDigitalDataByKeys(TRACKING_PAYMENT_KEYS);
  };

  hydrateComponent(root, hydratableComponent, { Wrapper });

  if (planitClickIdCookie) {
    InternalApi.post('subscription/planit')
      .then((response) => console.warn('success', response))
      .catch((error) => console.error('error', error));
  }

  trackSubscriptionCause();

  // in case Chartbeat has already loaded
  if (window.chartbeat) {
    trackPaywallComplete();
  } else {
    document.addEventListener(EVENT_CHARTBEAT_LOADED, trackPaywallComplete);
  }

  initBrazeOnSubscriptionFinish();
};

subscriptionConfirmation();
