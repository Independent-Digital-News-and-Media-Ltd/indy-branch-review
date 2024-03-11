import { TRACKING_PAYMENT_KEYS } from '@app/constants/adobeConstants';
import {
  CLASS_FORM_SUBMIT,
  CLASS_OPT_OUT_POLICY_CONTAINER,
  CLASS_OPT_OUT_POLICY_LABEL,
  CLASS_REG_LOGIN_FORM_WRAPPER,
} from '@app/constants/classNames';
import {
  ID_CREATE_NEW_ACCOUNT_BTN,
  ID_FORM_RECEIVE_OFFER,
  ID_REG_FORM,
  ID_REG_FORM_EMAIL,
  ID_REG_LOGIN_EMAIL,
  ID_REG_LOGIN_PASSWORD,
} from '@app/constants/ids';

import {
  dispatchFocusOnSubsRegField,
  dispatchMarketingOpt,
} from './custom-event-dispatchers';
import { getDigitalDataByKeys } from './digital-data/digital-data-session';
import { hasParameter } from './util';

function setCursorAfterPosition(element, position) {
  if (element) {
    const currentPosition = position || element.value.length;

    element.focus();
    element.selectionStart = currentPosition;
    element.selectionEnd = currentPosition;
  }
}

export default () => {
  const registrationForm = document.getElementById(ID_REG_FORM);
  const regFormEmail = registrationForm?.querySelector(`#${ID_REG_FORM_EMAIL}`);
  const offerCheckbox = registrationForm?.querySelector(
    `#${ID_FORM_RECEIVE_OFFER}`,
  );
  const regFormFields = registrationForm?.querySelectorAll(
    '[data-tracking-name]',
  );

  const regLoginFormWrapper = document.querySelector(
    `.${CLASS_REG_LOGIN_FORM_WRAPPER}`,
  );
  const regLoginEmail = document.getElementById(ID_REG_LOGIN_EMAIL);
  const regLoginPassword = document.getElementById(ID_REG_LOGIN_PASSWORD);
  const regLoginSubmitBtn = regLoginFormWrapper?.querySelector(
    `.${CLASS_FORM_SUBMIT}`,
  );

  const createNewAccountBtn = document.getElementById(
    `${ID_CREATE_NEW_ACCOUNT_BTN}`,
  );

  const storedTrackingData = getDigitalDataByKeys(TRACKING_PAYMENT_KEYS);
  const isPremium = hasParameter('premium');
  const isHasTracking =
    Object.values(storedTrackingData).filter(Boolean).length && isPremium;

  isHasTracking &&
    regFormFields?.forEach((field) =>
      field.addEventListener('focus', ({ target }) => {
        const formDataName = target.dataset.trackingName;

        dispatchFocusOnSubsRegField({
          ...storedTrackingData,
          name_form_field: `Subscription Funnel|Form Field details|${formDataName}`,
        });
      }),
    );

  if (registrationForm) {
    const optOutPolicyToggle = registrationForm.querySelector(
      `.${CLASS_OPT_OUT_POLICY_LABEL}`,
    );
    const optOutPolicyContainer = registrationForm.querySelector(
      `.${CLASS_OPT_OUT_POLICY_CONTAINER}`,
    );

    optOutPolicyToggle.addEventListener('click', () => {
      optOutPolicyContainer.classList.toggle('open');
    });

    offerCheckbox?.addEventListener('change', ({ target: { checked } }) => {
      dispatchMarketingOpt({
        ...storedTrackingData,
        marketing_opt_in: checked,
      });
    });
  }

  const showRegForm = () => {
    registrationForm?.classList.remove('hide');
    regLoginFormWrapper?.classList.add('hide');
  };

  createNewAccountBtn?.addEventListener('click', showRegForm);

  regLoginEmail?.addEventListener(
    'input',
    ({ target: { value, selectionStart } }) => {
      regFormEmail.value = value;
      showRegForm();
      setCursorAfterPosition(regFormEmail, selectionStart);
    },
  );
  regLoginPassword?.addEventListener('input', ({ target: { value } }) => {
    regLoginSubmitBtn.disabled = !value && !regLoginEmail?.value;
  });
};
