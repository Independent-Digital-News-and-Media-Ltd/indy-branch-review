import { PUBLICATION_UK, PUBLICATION_US } from '@app/constants/publication';

import * as thisModule from './cross-domain-login';

export const CONST_XDOMAIN_LOGIN_SUCCESS = 'XDOMAIN_LOGIN_SUCCESS';
export const CONST_XDOMAIN_LOGIN_FAIL = 'XDOMAIN_LOGIN_FAIL';
export const CONST_DO_XDOMAIN_LOGIN = 'DO_XDOMAIN_LOGIN';

const topLevelDomains = [PUBLICATION_US, PUBLICATION_UK];

export const doLogin = async (email, password) =>
  await fetch('/api/google-login/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

export const postToParent = (name, origin) =>
  window.parent.postMessage({ name }, origin);

export const isAllowedTopLevelDomain = (fullDomain) =>
  topLevelDomains.some((domain) => fullDomain.endsWith(`.${domain}`));

export const isCorrectMessageName = (name) => name === CONST_DO_XDOMAIN_LOGIN;

export const messageHandler = async ({ origin, data }) => {
  if (!thisModule.isAllowedTopLevelDomain(origin)) {
    return;
  }

  const { name, email, password } = data || {};

  if (!thisModule.isCorrectMessageName(name)) {
    return;
  }

  if (!email || !password) {
    return;
  }

  const res = await thisModule.doLogin(email, password);

  if (res.status === 200) {
    thisModule.postToParent(CONST_XDOMAIN_LOGIN_SUCCESS, origin);
    return;
  }

  thisModule.postToParent(CONST_XDOMAIN_LOGIN_FAIL, origin);
};

// Handle login message from sister site and call login method for the domain on which
// this javascript file is being served from.
window.addEventListener('message', messageHandler, false);
