import { COOKIE_OPT_IN_LANGUAGE } from '@app/constants/cookies';

import { setCookie, hasCookie } from './cookie';

const addEditionClickEventListeners = () => {
  const dataEditionNodeList = document.querySelectorAll('[data-edition]');
  [...dataEditionNodeList].forEach((el) => {
    el.addEventListener('click', ({ currentTarget: link }) => {
      const locale = link.getAttribute('data-edition');
      if (locale) {
        setCookie('Locale', locale, { hours: 1 });
      }
      if (hasCookie(COOKIE_OPT_IN_LANGUAGE)) {
        setCookie(COOKIE_OPT_IN_LANGUAGE, 'English', { hours: 1 });
      }
    });
  });
};

export default () => {
  addEditionClickEventListeners();
};
