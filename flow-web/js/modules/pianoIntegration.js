import { COOKIE_AUTH } from '@app/constants/cookies';

import { getCookie } from './cookie';
import * as prodMethods from './piano/prod';
import * as sandboxMethods from './piano/sandbox';
import {
  appendTinypassScript,
  getPianoGlobal,
  onCheckoutCancel,
  onCheckoutClose,
  onCheckoutComplete,
  onCheckoutError,
  onCheckoutExternalEvent,
  onCustomEvent,
  onExperienceExecute,
  onExperienceExecutionFailed,
  onLoginRequired,
  onLoginSuccess,
  onMeterActive,
  onMeterExpired,
  sendToPiano,
  setCredentials,
} from './piano/shared';

export const init = async (isSandbox = false) => {
  const envSpecificMethods = isSandbox ? sandboxMethods : prodMethods;
  const { onTemplateShow } = envSpecificMethods;

  setCredentials();

  sendToPiano(
    /* checkout related events */
    ['addHandler', 'checkoutComplete', onCheckoutComplete],
    ['addHandler', 'checkoutClose', onCheckoutClose],
    ['addHandler', 'checkoutCustomEvent', onCheckoutExternalEvent],
    ['addHandler', 'checkoutCancel', onCheckoutCancel],
    ['addHandler', 'checkoutError', onCheckoutError],

    /* user login events */
    ['addHandler', 'loginRequired', onLoginRequired],
    ['addHandler', 'loginSuccess', onLoginSuccess],

    /* meter related */
    ['addHandler', 'meterExpired', onMeterExpired],
    ['addHandler', 'meterActive', onMeterActive],

    /* experience related */
    ['addHandler', 'experienceExecute', onExperienceExecute],
    ['addHandler', 'experienceExecutionFailed', onExperienceExecutionFailed],

    /* template related */
    ['addHandler', 'showTemplate', onTemplateShow],

    // custom event
    ['addHandler', 'customEvent', onCustomEvent],

    // Piano ID
    ['setUseTinypassAccounts', false],
    ['setUsePianoIdUserProvider', false],
    ['setUsePianoIdLiteUserProvider', true],
    ['setExternalJWT', getCookie(COOKIE_AUTH)],
  );

  await appendTinypassScript();
};

export const triggerExperiencesOnPianoInit = () => {
  sendToPiano([
    'init',
    () => {
      const pianoGlobal = getPianoGlobal();
      pianoGlobal.enableGACrossDomainLinking();
      pianoGlobal.experience.init();
    },
  ]);
};
