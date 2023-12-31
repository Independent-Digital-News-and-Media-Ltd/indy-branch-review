import { COOKIE_LOGGED_IN } from '@app/constants/cookies';

import {
  CLASS_BOOKMARK_BUTTON,
  CLASS_BOOKMARK_NOTIFICATION,
  CLASS_BOOKMARK_NOTIFICATION_CLOSE,
  CLASS_BOOKMARK_NOTIFICATION_SHOW,
  CLASS_BOOKMARK_NOTIFICATION_LOGIN,
} from '@app/constants/classNames';
import { BOOKMARK_OVERLAY_LOGIN_RSM } from '@app/constants/regSourceMethods';

import { InternalApi } from '../utils/internalApi';

import { getCookie } from './cookie';
import { dispatchArticleBookmark } from './custom-event-dispatchers';
import { openLoginDrawer } from './loginDrawer';

const initNotification = () => {
  const notification = document.querySelector(
    `.${CLASS_BOOKMARK_NOTIFICATION}`,
  );
  if (!notification) {
    return;
  }

  const closeNotification = notification.querySelector(
    `.${CLASS_BOOKMARK_NOTIFICATION_CLOSE}`,
  );
  closeNotification.addEventListener('click', () => {
    notification.classList.remove(CLASS_BOOKMARK_NOTIFICATION_SHOW);
  });

  const ignoreCheckbox = notification.querySelector('input');
  ignoreCheckbox.addEventListener('click', () => {
    localStorage.setItem('ignore-bookmark', 'true');
  });
};

const initLightbox = () => {
  const loginBtns = [
    ...document.querySelectorAll(`.${CLASS_BOOKMARK_NOTIFICATION_LOGIN}`),
  ];
  loginBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelector('#bookmark-lightbox .close').click();

      setTimeout(() => {
        openLoginDrawer(BOOKMARK_OVERLAY_LOGIN_RSM);
      }, 400);
    });
  });
};

const showBookmarkNotification = () => {
  const notification = document.querySelector('.bookmark-notification');
  const ignoreNotification = localStorage.getItem('ignore-bookmark');
  if (!notification || ignoreNotification) {
    return;
  }

  notification.classList.add(CLASS_BOOKMARK_NOTIFICATION_SHOW);
  setTimeout(() => {
    notification.classList.remove(CLASS_BOOKMARK_NOTIFICATION_SHOW);
  }, 3000);
};

const addBookmarkLocalStorage = (articleId) => {
  const bookmarks = JSON.parse(localStorage.getItem('premiumBookmarks')) || [];
  bookmarks.push(articleId);
  localStorage.setItem('premiumBookmarks', JSON.stringify(bookmarks));
};

const removeBookmarkLocalStorage = (articleId) => {
  let bookmarks = JSON.parse(localStorage.getItem('premiumBookmarks')) || [];

  bookmarks = bookmarks.filter((a) => a !== articleId);
  localStorage.setItem('premiumBookmarks', JSON.stringify(bookmarks));
};

const submitBookmark = async (articleId, button) => {
  if (button.classList.contains('submitting')) {
    return;
  }
  button.classList.add('submitting');
  const data = { articleId };
  InternalApi.post('bookmarks', data)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then((response) => {
      if (response.saved) {
        [...document.querySelectorAll(`.${CLASS_BOOKMARK_BUTTON}`)].forEach(
          (btn) => btn.classList.add('saved'),
        );
        addBookmarkLocalStorage(articleId);
        showBookmarkNotification();
        dispatchArticleBookmark();
      } else {
        [...document.querySelectorAll(`.${CLASS_BOOKMARK_BUTTON}`)].forEach(
          (btn) => btn.classList.remove('saved'),
        );
        removeBookmarkLocalStorage(articleId);
      }
      button.classList.remove('submitting');
    })
    .catch((error) => {
      button.classList.remove('submitting');
      console.error('Fetch failed: ', error.message);
    });
};

const checkSavedBookmark = (button, articleId) => {
  const bookmarks = JSON.parse(localStorage.getItem('premiumBookmarks')) || [];

  if (bookmarks.indexOf(articleId) > -1) {
    button.classList.add('saved');
  } else {
    button.classList.remove('saved');
  }
};

const initBookmark = async () => {
  const bookmarkBtns = [
    ...document.querySelectorAll(`.${CLASS_BOOKMARK_BUTTON}`),
  ];
  const bookmarkNotification = document.querySelector(
    `.${CLASS_BOOKMARK_NOTIFICATION}`,
  );

  if (!bookmarkNotification) {
    return;
  }

  bookmarkBtns.forEach((btn) => {
    const articleId = btn.dataset.articleId;
    if (getCookie(COOKIE_LOGGED_IN)) {
      checkSavedBookmark(btn, articleId);
    }

    btn.addEventListener('click', () => {
      submitBookmark(articleId, btn);
    });
  });
  initLightbox();
  initNotification();
};

export default initBookmark;
