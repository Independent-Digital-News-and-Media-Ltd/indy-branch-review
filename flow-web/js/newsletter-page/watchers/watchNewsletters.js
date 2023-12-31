import {
  CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_CANCEL,
  CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_START,
} from '@app/constants/chartbeat';

import { trackChartbeat } from '../../chartbeat';

export const NEWSLETTER_CHECKBOX_SELECTOR = '.newsletter-page-select-checkbox';

export const watchNewsletters = (
  state,
  newsletterChartbeatData,
  activeSelectedNewsletter,
) => {
  /*
   *  DOM elements
   */

  const checkboxes = document.querySelectorAll(NEWSLETTER_CHECKBOX_SELECTOR);

  function selectNewsletter(event) {
    const eventTargetName = event.target.name;
    const eventTargetChecked = event.target.checked;
    state.updateSelectedNewsletters(eventTargetName, eventTargetChecked);
    const chartbeatEvent = eventTargetChecked
      ? CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_START
      : CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_CANCEL;
    trackChartbeat(chartbeatEvent, {
      ...newsletterChartbeatData,
      eventValue: eventTargetName,
    });
    activeSelectedNewsletter.current = eventTargetName;
  }

  /*
   *  Bind this here as we need `selectedNewsletter` to be in scope for removeEventListener()
   */

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', selectNewsletter);
  });

  /*
   *  Watchers
   */

  /*
   *  The UI is 'optimistically' updated - that is to say, we show cards to be in the subscribed state
   *  even before the server has confirmed a successful subscription. If the server throws an error, then
   *  we will rollback.
   */

  state.watch(
    (data) => data.newsletters.intransit,
    (tempSubscribedNewsletters) => {
      tempSubscribedNewsletters.forEach((card) => {
        const cardEl = document.getElementById(card);

        if (cardEl) {
          cardEl.classList.add('subscribed');

          const checkbox = cardEl.querySelector(NEWSLETTER_CHECKBOX_SELECTOR);

          //  deactivate checkbox
          if (checkbox) {
            checkbox.removeEventListener('change', selectNewsletter);
          }
        }
      });
    },
  );

  /*
   *  To handle rolling back after a server error, when we move a newsletter from the `tempSubscribed` array back into the
   *  `selected array`, we remove the `subscribed` class name from it.
   *  (Obviously, newsletters being added to this array in the other direction - after being
   *  selected - will not have this class anyway.)
   */

  state.watch(
    (data) => data.newsletters.selected,
    (selectedNewsletters) => {
      selectedNewsletters.forEach((card) => {
        const cardEl = document.getElementById(card);

        if (cardEl) {
          cardEl.classList.remove('subscribed');

          const checkbox = cardEl.querySelector(NEWSLETTER_CHECKBOX_SELECTOR);

          // reactivate checkbox
          if (checkbox) {
            checkbox.addEventListener('change', selectNewsletter);
          }
        }
      });
    },
  );
};
