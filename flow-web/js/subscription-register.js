/* global JSGlobals */

import { hydrateRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { themes } from '@app/config/theme/Styles';

import { TRACKING_PAYMENT_KEYS } from '@app/constants/adobeConstants';
import {
  CUSTOM_EVENT_REGISTRATION_ERROR,
  CUSTOM_EVENT_REGISTRATION_SUCCESS,
} from '@app/constants/customEvents';
import {
  ID_FORM_RECEIVE_OFFER,
  SUBSCRIBE_REGISTER_FORM_ID,
} from '@app/constants/ids';

import { RegisterForm } from '@app/component/library/Register';

import { dispatchRegistrationFailed } from './modules/custom-event-dispatchers';
import {
  getDigitalDataByKeys,
  storeDigitalData,
} from './modules/digital-data/digital-data-session';
import { getParametersByNames } from './modules/util';
import initCrossDomainLogin from './utils/initCrossDomainLogin';

const offerCheckBox = document.getElementById(ID_FORM_RECEIVE_OFFER);

const trackingData = getDigitalDataByKeys(TRACKING_PAYMENT_KEYS);

initCrossDomainLogin();

const { domain, subscriptionRegisterHydrateData } = JSGlobals;
const { regSourceMethod, regSourceSection, offerId, termId } =
  subscriptionRegisterHydrateData;

hydrateRoot(
  document.getElementById(SUBSCRIBE_REGISTER_FORM_ID),
  <ThemeProvider theme={{ ...themes.default, domain }}>
    <RegisterForm
      className="subscription-register-reg-form"
      alreadyHasAccountMessage="This account already exists.<br /> Please log in to proceed to payment."
      isPremium={true}
      offerId={offerId}
      termId={termId}
      submitButtonCopy="Confirm details"
      regSourceMethod={regSourceMethod}
      regSourceSection={regSourceSection}
    />
  </ThemeProvider>,
);

document.body.addEventListener(CUSTOM_EVENT_REGISTRATION_ERROR, () => {
  window.hj && window.hj('formSubmitFailed');

  dispatchRegistrationFailed();
});

document.body.addEventListener(CUSTOM_EVENT_REGISTRATION_SUCCESS, () => {
  window.hj && window.hj('formSubmitSuccessful');

  const params = getParametersByNames(['offerId', 'termId']);
  const query = new URLSearchParams();

  params.forEach(({ key, value }) => query.set(key, value));

  storeDigitalData({
    ...trackingData,
    marketing_opt_in: offerCheckBox.checked,
  });

  window.location.href = `/subscribe/payment?${query.toString()}`;
});
