/* globals JSGlobals */
import { EVENT_SOURCEPOINT_ERROR } from '@app/constants/customEvents';
import { ID_SOURCEPOINT_SCRIPT_TAG } from '@app/constants/ids';

export const checkConsent = () =>
  new Promise((resolve) => {
    if (!JSGlobals.cmp.enabled) {
      resolve(true);
      return;
    }

    const cmpScriptTag = document.getElementById(ID_SOURCEPOINT_SCRIPT_TAG);
    if (cmpScriptTag.error) {
      resolve(false);
    }
    window.addEventListener(EVENT_SOURCEPOINT_ERROR, () => {
      resolve(false);
    });

    const apiCallback = (tcData, success) => {
      if (!success) {
        return;
      }

      if (!['useractioncomplete', 'tcloaded'].includes(tcData.eventStatus)) {
        return;
      }

      window.__tcfapi('removeEventListener', 2, () => {}, tcData.listenerId);

      if (!tcData.gdprApplies) {
        resolve(true);
        return;
      }

      if (tcData.publisher?.consents?.['1']) {
        resolve(true);
        return;
      }

      resolve(false);
    };

    window.__tcfapi('addEventListener', 2, apiCallback);
  });
