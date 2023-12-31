import { getCookie } from './cookie';

let showLog;

const isShowLog = () => {
  if (typeof showLog === 'undefined') {
    const params = new URLSearchParams(window?.location?.search);
    showLog = params.has('__DEBUG__');
  }

  return showLog || getCookie('__DEBUG__') === 'true';
};

export const log = (...args) => {
  // eslint-disable-next-line no-console
  isShowLog() && console.log(...args);
};

export const group = (...args) => {
  // eslint-disable-next-line no-console
  isShowLog() && console.group(...args);
};

export const groupEnd = (...args) => {
  // eslint-disable-next-line no-console
  isShowLog() && console.groupEnd(...args);
};

export const warn = (...args) => {
  // eslint-disable-next-line no-console
  isShowLog() && console.warn(...args);
};
