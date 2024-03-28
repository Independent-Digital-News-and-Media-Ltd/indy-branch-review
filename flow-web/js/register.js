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
  ID_REGISTER_FORM_WRAPPER,
} from '@app/constants/ids';

import { RegisterForm } from '@app/component/library/Register';

import {
  dispatchRegistrationSuccess,
  dispatchRegistrationFailed,
} from './modules/custom-event-dispatchers';
import {
  getDigitalDataByKeys,
  removeDigitalDataByKeys,
  storeDigitalData,
} from './modules/digital-data/digital-data-session';
import { hasParameter } from './modules/util';
import initCrossDomainLogin from './utils/initCrossDomainLogin';

const offerCheckBox = document.getElementById(ID_FORM_RECEIVE_OFFER);

const trackingData = getDigitalDataByKeys(TRACKING_PAYMENT_KEYS);

initCrossDomainLogin();

const { domain, registerHydrateData } = JSGlobals;
const { regSourceSection, regSourceMethod, isDonation } = registerHydrateData;
const container = document.getElementById(ID_REGISTER_FORM_WRAPPER);

hydrateRoot(
  container,
  <ThemeProvider theme={{ ...themes.default, domain }}>
    <RegisterForm
      alreadyHasAccountMessage="This account already exists.<br /> Please enter your password to log in."
      submitButtonCopy="Create my account"
      regSourceMethod={regSourceMethod}
      regSourceSection={regSourceSection}
      isDonation={isDonation}
    />
  </ThemeProvider>,
);

document.body.addEventListener(CUSTOM_EVENT_REGISTRATION_ERROR, () => {
  window.hj && window.hj('formSubmitFailed');
  removeDigitalDataByKeys(TRACKING_PAYMENT_KEYS);

  dispatchRegistrationFailed();
});

document.body.addEventListener(CUSTOM_EVENT_REGISTRATION_SUCCESS, () => {
  window.hj && window.hj('formSubmitSuccessful');

  dispatchRegistrationSuccess({
    ...trackingData,
    marketing_opt_in: offerCheckBox.checked,
  });

  const isDonation = hasParameter('donations');
  if (isDonation) {
    window.location.href = `/donations`;
    return;
  }

  const isPremium = hasParameter('premium');
  const query = new URLSearchParams();
  isPremium && query.set('premium', '');

  const queryToString = query.toString() ? `?${query.toString()}` : '';
  storeDigitalData({ marketing_opt_in: offerCheckBox.checked });

  window.location.href = `/thank-you${queryToString}`;
});
