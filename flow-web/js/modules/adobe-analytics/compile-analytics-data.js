import addDigitalDataFromBrowser from './digital-data/digital-data-browser';
import getDigitalDataFromServer from './digital-data/digital-data-server';
import addDigitalDataFromSession from './digital-data/digital-data-session';

const pipeFN = (...args) => args.reduce((acc, fn) => fn(acc), null);

export default () => {
  window.digitalData = pipeFN(
    getDigitalDataFromServer,
    addDigitalDataFromBrowser,
    addDigitalDataFromSession,
  );
};
