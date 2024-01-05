import { CLASS_JS_HIDE_SHOW_PASSWORD } from '@app/constants/classNames';

import { passwordHide } from '../../img/icons/password-hide';
import { passwordShow } from '../../img/icons/password-show';

export default () => {
  const passwordEls = document.getElementsByClassName(
    CLASS_JS_HIDE_SHOW_PASSWORD,
  );
  [...passwordEls].forEach((input, index) => {
    // Why a hyperlink and not a button? Because buttons seem to trigger
    // JavaScript events elsewhere in the code, and we don't want that here.
    const button = document.createElement('a');
    const styles = {
      cursor: 'pointer',
      height: '24px',
      position: 'absolute',
      display: 'inline-block',
      right: '13px',
      top: '15px',
      width: '24px',
    };

    Object.assign(button.style, styles);

    button.innerHTML = passwordShow(`a-${index}`);
    input.parentElement.append(button);

    button.addEventListener('click', () => {
      if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'input');
        button.innerHTML = passwordHide(`a-${index}`);
      } else {
        input.setAttribute('type', 'password');
        button.innerHTML = passwordShow(`a-${index}`);
      }
    });
  });
};
