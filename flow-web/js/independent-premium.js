import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { COOKIE_SUBSCRIBER } from '@app/constants/cookies';

import { CLASS_PREMIUM_MENU } from '@app/constants/classNames';

import Wrapper from '@app/component/library/Hydration/IndyClientIslandWrapper';
import NewsletterGroups from '@app/component/library/StaticPage/Premium/NewsletterGroups';
import PremiumMenuDropdown from '@app/component/library/StaticPage/Premium/PremiumMenuDropdown';

import { getCookie } from './modules/cookie';
import { InternalApi } from './utils/internalApi';

hydrateComponent(
  document.querySelector('[data-component=PremiumMenuDropdown]'),
  { PremiumMenuDropdown },
  { Wrapper },
);

hydrateComponent(
  document.querySelector('[data-component=NewsletterGroups]'),
  { NewsletterGroups },
  { Wrapper },
);

const bookmarkWrapper = document.querySelector('section[data-tab="bookmarks"]');

const imgObserver = new IntersectionObserver(
  (items) => {
    const intersectingItems = items.filter((item) => item.isIntersecting);
    intersectingItems.forEach((img) => {
      const lazyImage = img.target;
      lazyImage.src = lazyImage.dataset.src;
      imgObserver.unobserve(lazyImage);
    });
  },
  { rootMargin: '150px' },
);

const imgs = document.querySelectorAll('img[data-src]');
imgs.forEach((img) => imgObserver.observe(img));

const removeBookmarkLocalStorage = (articleId) => {
  let bookmarks = JSON.parse(localStorage.getItem('premiumBookmarks')) || [];
  bookmarks = bookmarks.filter((a) => a !== articleId);
  localStorage.setItem('premiumBookmarks', JSON.stringify(bookmarks));
};

const deleteBookmark = (button) => {
  if (button.disabled) {
    return;
  }
  button.disabled = true;
  const articleId = button.dataset.id;
  InternalApi.delete(`bookmarks/${articleId}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(() => {
      removeBookmarkLocalStorage(articleId);
      button.closest('.bookmark-template').remove();
    })
    .catch((error) => {
      button.disabled = false;
      console.error('Fetch failed: ', error.message);
    });
};

const createBookmarkItem = (bookmark) => {
  const bookmarkTemplate = bookmarkWrapper
    .querySelector('.bookmark-template')
    .cloneNode(true);
  const links = bookmarkTemplate.querySelectorAll('.link');
  const thumbnail = bookmarkTemplate.querySelector('.poster img');
  const title = bookmarkTemplate.querySelector('.title');
  const lead = bookmarkTemplate.querySelector('.lead');
  const published = bookmarkTemplate.querySelector('.published');
  const authors = bookmarkTemplate.querySelector('.authors');
  const section = bookmarkTemplate.querySelector('.section');
  const remove = bookmarkTemplate.querySelector('.remove');

  links.forEach((link) => (link.href = bookmark.url));
  thumbnail.src = bookmark.image || '/img/placeholder.png';
  title.innerText = bookmark.title;
  lead.innerHTML = bookmark.lead;
  published.innerText = bookmark.publishDate;
  section.innerText = bookmark.section;
  authors.innerHTML = bookmark.authors;
  remove.dataset.id = bookmark.sourceId;

  bookmarkTemplate.classList.remove('hidden');

  remove.addEventListener('click', () => {
    deleteBookmark(remove);
  });

  return bookmarkTemplate;
};

const insertBookmarks = (arr) => {
  const { bookmarks } = arr;
  const subscriber = getCookie(COOKIE_SUBSCRIBER) === 'true';

  if (!(bookmarks && bookmarks.length > 0)) {
    if (subscriber) {
      bookmarkWrapper
        .querySelector('.bookmarks-empty')
        .classList.remove('hidden');
    } else {
      bookmarkWrapper
        .querySelector('.bookmarks-require-subscription')
        .classList.remove('hidden');
    }
    return;
  }

  if (!subscriber) {
    bookmarkWrapper
      .querySelector('.bookmarks-expired-subscription')
      .classList.remove('hidden');
    return;
  }

  const bookmarksList = bookmarkWrapper.querySelector('.list');

  bookmarks.forEach((bm) => {
    const bookmarkItem = createBookmarkItem(bm);
    bookmarksList.appendChild(bookmarkItem);
  });
};

const clearList = async (tabWrapper) => {
  const listWrapper = tabWrapper.querySelector('.list');
  while (listWrapper.firstChild) {
    listWrapper.removeChild(listWrapper.firstChild);
  }
};

const setBookmarkLocalStorage = (bookmarks) => {
  const articleIds = bookmarks.map((b) => b.sourceId);
  localStorage.setItem('premiumBookmarks', JSON.stringify(articleIds));
};

const fetchBookmarks = () => {
  clearList(bookmarkWrapper);
  bookmarkWrapper.querySelector('.loading').classList.remove('hidden');
  InternalApi.get('bookmarks')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then((response) => {
      bookmarkWrapper.querySelector('.loading').classList.add('hidden');
      insertBookmarks(response);
      setBookmarkLocalStorage(response.bookmarks);
    })
    .catch((error) => {
      console.error('Fetch failed: ', error.message);
    });
};

const toggleActive = (items, match, isMenu) => {
  items.forEach((item) => {
    if (match === item.dataset.tab) {
      return item.classList.add('active');
    }
    const isEvent = match.startsWith('event') && item.dataset.tab === 'events';
    const isEbook = match.startsWith('ebook') && item.dataset.tab === 'ebooks';
    if (isMenu && (isEvent || isEbook)) {
      return item.classList.add('active');
    }
    item.classList.remove('active');
  });
};

const showHashPage = () => {
  const hash = location.hash.substring(1);
  const menuBtns = document.querySelectorAll(
    `.${CLASS_PREMIUM_MENU} [data-tab]`,
  );
  const pages = document.querySelectorAll('.premium-wrapper [data-tab]');
  if (hash === 'bookmarks') {
    fetchBookmarks();
  }

  toggleActive(pages, hash);
  toggleActive(menuBtns, hash, true);
};

showHashPage();

window.addEventListener('hashchange', showHashPage, false);
