import kebabCase from 'lodash/kebabCase';

import FEATURE_FLAGS from '@app/config/featureFlag';
import FEATURE_MODES from '@app/config/featureModes';

import {
  COOKIE_FEED,
  COOKIE_LOCALE,
  COOKIE_SUBSCRIBER_ORIGIN,
} from '@app/constants/cookies';

import { setCookie, getCookie, removeCookie } from './modules/cookie';

const form = document.getElementById('settings-form');
const clear = document.getElementById('clear-setting');

if (clear && form) {
  clear.addEventListener('click', () => {
    form.reset();
  });
}

if (form) {
  const addEventListeners = (callback) => {
    form.addEventListener('change', callback);
    form.addEventListener('reset', () => {
      setTimeout(callback, 0);
    });
  };

  /**
   * Bind events to the radio input
   * @param {string} name
   * @param {string} cookie
   */
  const bindRadios = (name, cookie) => {
    form.elements[name].value = getCookie(cookie);
    addEventListeners(() => {
      form.elements[name].value !== ''
        ? setCookie(cookie, form.elements[name].value)
        : removeCookie(cookie);
    });
  };

  /**
   * Bind events to the checkbox input
   * @param {string} name
   * @param {string} cookie
   */
  const bindCheckbox = (name, cookie) => {
    form.elements[name].checked = getCookie(cookie) === 'true';
    addEventListeners(() => {
      form.elements[name].checked
        ? setCookie(cookie, 'true')
        : removeCookie(cookie);
    });
  };

  bindRadios('feed', COOKIE_FEED);
  bindRadios('locale', COOKIE_LOCALE);
  bindRadios('subscriber-origin', COOKIE_SUBSCRIBER_ORIGIN);

  FEATURE_FLAGS.forEach((flag) => {
    bindCheckbox(kebabCase(flag.cookie), flag.cookie);
  });

  FEATURE_MODES.forEach((mode) => {
    bindRadios(kebabCase(mode.cookie), mode.cookie);
  });
}
