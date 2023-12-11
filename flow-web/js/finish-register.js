import { LOCAL_STORAGE_SUCCESSFULLY_REGISTRATION } from '@app/constants/registerPage';

import {
  dispatchRegistrationSuccess,
  dispatchRegistrationFailed,
} from './modules/custom-event-dispatchers';

const form = document.querySelector('#reg-form');
const submit = form.querySelector('.form-submit');
const shadowBg = document.querySelector('#reg-form ~ .shadow');
const offerCheckBox = document.getElementById('form-receive-offer');

submit.addEventListener('click', () => {
  if (form.checkValidity()) {
    shadowBg.classList.add('show');
    const waitResponse = setInterval(() => {
      if (form.classList.contains('amp-form-submit-success')) {
        dispatchRegistrationSuccess({
          marketing_opt_in: offerCheckBox.checked,
        });
        form.dispatchEvent(new CustomEvent('registrationSuccess'));
        shadowBg.classList.remove('show');
        clearInterval(waitResponse);
      } else if (
        form.classList.contains('user-invalid') ||
        form.classList.contains('amp-form-submit-error')
      ) {
        form.dispatchEvent(new Event('registrationError'));
        window.recentCaptcha = false;
        shadowBg.classList.remove('show');
        clearInterval(waitResponse);
      }
    }, 300);
  } else {
    const registrationForm = document.getElementById('reg-form');

    if (registrationForm) {
      const textInputs = registrationForm.querySelectorAll('input, select');
      textInputs.forEach((textInput) => {
        textInput.classList.add('form-submitted');
      });
    }
  }
});

form.addEventListener('registrationError', function () {
  window.hj && window.hj('formSubmitFailed');

  dispatchRegistrationFailed();
});

form.addEventListener('registrationSuccess', function () {
  window.hj && window.hj('formSubmitSuccessful');

  let params = new URLSearchParams(window.location.search);
  let cb = params.get('cb');

  if (cb) {
    window.location.replace(decodeURIComponent(cb));
  } else {
    localStorage.setItem(LOCAL_STORAGE_SUCCESSFULLY_REGISTRATION, 'true');
    window.location.href = '/';
  }
});
