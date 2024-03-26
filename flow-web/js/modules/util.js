/* globals */

export const getParameter = (name, url = null) => {
  const urlInstance = new URL(url || window.location.href);

  return urlInstance.searchParams.get(name);
};

export const getParametersByNames = (names = [], url = null) => {
  const urlInstance = new URL(url || window.location.href);

  return names.map((name) => {
    const paramValue = urlInstance.searchParams.get(name);

    return {
      key: name,
      value: paramValue,
    };
  });
};

export const hasParameter = (name, url = null) => {
  const escapeRegExp = (value) =>
    value.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const re = new RegExp(
    `[\\?|\\&]${escapeRegExp(encodeURIComponent(name))}\\b`,
  );
  return re.test(url || window.location.href);
};

export const getWindowWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const createScriptElement = (
  url,
  { id, async, defer, ok, error, attributes },
) => {
  const elem = document.createElement('script');

  elem.onload = ok;
  elem.onerror = error;

  if (id && id !== 'undefined') {
    elem.id = id;
  }

  if (async && !defer) {
    elem.setAttribute('async', '');
  }

  if (defer) {
    elem.setAttribute('defer', '');
  }

  if (attributes) {
    attributes.forEach(([key, value]) => {
      elem.setAttribute(key, value);
    });
  }

  elem.src = url;

  return elem;
};

export const loadJS = (
  urls,
  {
    async = true,
    defer = document.location.search.includes('___FORCE_DEFER___'),
    parent = document.body,
    attributes,
  } = {},
) => {
  window.JSGlobals = window.JSGlobals || {};
  const loadedJS = (window.JSGlobals.loadedJS = []);

  return new Promise((resolve, reject) => {
    const promises = (urls instanceof Array ? urls : [urls]).map((url) =>
      loadedJS.includes(url)
        ? Promise.resolve()
        : new Promise((ok, error) => {
            const elem = createScriptElement(url, {
              async,
              defer,
              ok,
              error,
              attributes,
            });
            parent.appendChild(elem);
            loadedJS.push(url);
          }),
    );
    return Promise.all(promises).then(resolve, reject);
  });
};

export const loadCSS = (url) =>
  new Promise((resolve, reject) => {
    const elem = document.createElement('link');

    elem.onload = resolve;
    elem.onerror = reject;

    elem.rel = 'stylesheet';
    elem.href = url;

    document.head.insertAdjacentElement('afterbegin', elem);
  });

export const hasSpanishBrowserLanguage = (languages) => {
  for (let i = 1; i < languages.length; i++) {
    if (languages[i].includes('es')) {
      return true;
    }
  }
  return false;
};

/**
 * Locks the body from scrolling when the modal is open
 * @param {boolean} [toggle=true] Flag to control behaviour
 */
export const toggleBodyScroll = (toggle = true) => {
  document.body.classList.toggle('is-scroll-locked', toggle);
};

/**
 * Storing attribute values to prevent code duplication for cookie sync iframes
 */
export const cookieSyncIframeAttributes = {
  title: 'User Sync',
  width: 1,
  height: 1,
  sandbox: 'allow-same-origin allow-scripts',
  frameborder: 0,
};

/**
 * Injects iframe to body
 * @param {object} attributes Object containing iframe attribute values
 */
export const injectIframe = (attributes) => {
  const iframe = document.createElement('iframe');

  Object.entries(attributes).forEach(([attribute, value]) => {
    iframe.setAttribute(attribute, value);
  });

  document.body.appendChild(iframe);
};
