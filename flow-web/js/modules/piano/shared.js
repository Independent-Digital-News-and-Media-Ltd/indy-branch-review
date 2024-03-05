/* globals JSGlobals */

import { CLASS_PAYMENT_METHODS } from '@app/constants/classNames';
import { LOGIN_BUTTON_ID } from '@app/constants/ids';
import { CONTRIBUTIONS_RSM } from '@app/constants/regSourceMethods';

import { setCookie } from '../cookie';
import { loadJS } from '../util';

/* Callback executed when a user must login */
export const appendTinypassScript = async () => {
  await loadJS(['https://cdn.tinypass.com/api/tinypass.min.js']);
};

export const getPianoGlobal = () => {
  const tp = window.tp || [];
  window.tp = tp;

  return tp;
};

export const sendToPiano = (...args) => {
  getPianoGlobal().push(...args);
};

const doLoginRequiredRedirect = async (params, regQueries) => {
  const redirectUrl = '/register';

  if (params) {
    setCookie('__pianoParams', JSON.stringify(params), { hours: 1 });

    const urlObj = new URL(location.origin);
    urlObj.pathname = '/internal-api/subscription/term';
    urlObj.searchParams.set('__amp_source_origin', location.origin);
    urlObj.searchParams.set('termId', params.termId);

    const response = await fetch(urlObj.toString(), {
      credentials: 'same-origin',
    });
    const data = await response.json();

    // adobe analytics
    setCookie('__pianoTerm', JSON.stringify(data), { hours: 1 });

    regQueries.set('offerId', params.offerId);
    regQueries.set('termId', params.termId);
  }

  location.href = `${redirectUrl}?${regQueries.toString()}`;
};

export const onLoginRequired = (params) => {
  const regQueries = new URLSearchParams();
  const currentUrl = new URL(document.location);

  if (currentUrl.pathname.startsWith('/donations')) {
    regQueries.set('donations', '');
    regQueries.set('regSourceMethod', CONTRIBUTIONS_RSM);
  }

  doLoginRequiredRedirect(params, regQueries);
};

export const onCustomEvent = (event /* , b, c, d */) => {
  switch (event.eventName) {
    case 'openLogin':
      // open amp-sidebar
      document.getElementById(LOGIN_BUTTON_ID).click();
      break;
    case 'set-return-url':
      document.cookie = `ref_url=${location.origin}${location.pathname}; path=/;`;
      break;
    case 'reg-return-url':
      localStorage.setItem('regReturnUrl', location.href);
      break;
  }
};

export function onCheckoutComplete() {
  // scroll up for receipt
  const [parentElement] = document.getElementsByClassName('tp-modal');
  const expires = new Date().toGMTString();

  parentElement.scrollTop = 0;

  document.cookie = `__pianoTerm=null; expires=${expires}; path=/;`;
  document.cookie = `__pianoParams=null; expires=${expires}; path=/;`;
}

export function onCheckoutExternalEvent() {}

export function onCheckoutClose(event = {}) {
  if (event.state !== 'checkoutCompleted') {
    const [paymentMethodsElem] = document.getElementsByClassName(
      CLASS_PAYMENT_METHODS,
    );
    paymentMethodsElem.classList.remove('hide');
  }
}

/* Meter callback */
export function onMeterExpired() {}

/* Meter callback */
export function onMeterActive() {}

/* Callback executed after a tinypassAccounts login */
export function onLoginSuccess(/* params */) {}

/* Callback executed after an experience executed successfully */
export function onExperienceExecute(/* event */) {}

/* Callback executed if experience execution has been failed */
export function onExperienceExecutionFailed(/* event */) {}

export const setCredentials = () => {
  const isDev = JSGlobals.pianoEnvironment === 'development';

  sendToPiano(
    ['setAid', JSGlobals.piano.pianoAppId],
    ...(isDev ? [] : [['setCxenseSiteId', '1134082880659765068']]),
    ['setEndpoint', JSGlobals.piano.pianoEndpoint],
    ['setUseTinypassAccounts', false],
    ['setSandbox', isDev],
    ['setDebug', false],
  );
};
