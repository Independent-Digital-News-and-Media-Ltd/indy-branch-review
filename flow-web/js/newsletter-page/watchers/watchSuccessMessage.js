import { CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_COMPLETE } from '@app/constants/chartbeat';

import { trackChartbeat } from '../../chartbeat';
import { SUCCESS_POPUP_ID } from '../constants';
import { animateIn, animateOut } from '../utils/animation';

const SUCCESS_POPUP_TEXT_SELECTOR = '.text';

export const watchSuccessMessage = (
  state,
  newsletterChartbeatData,
  activeSelectedNewsletter,
) => {
  state.watch(
    (data) => data.successMessage,
    (successMessage, previousValue) => {
      const successPopup = document.getElementById(SUCCESS_POPUP_ID);

      if (successPopup) {
        if (successMessage) {
          successPopup.querySelector(SUCCESS_POPUP_TEXT_SELECTOR).textContent =
            successMessage;

          animateIn(successPopup);
          trackChartbeat(CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_COMPLETE, {
            ...newsletterChartbeatData,
            eventValue: activeSelectedNewsletter.current,
          });
        } else {
          previousValue && animateOut(successPopup);
        }
      }
    },
  );
};
