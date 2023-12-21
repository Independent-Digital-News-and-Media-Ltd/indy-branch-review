import { run as eventBindings } from '../event-bindings';

import adobeEvents from './custom-event-handlers';
import digitalData from './digital-data';
import adobeInit from './init';
import adobePageEvtTriggers from './page-load-event';

export default () => {
  digitalData();
  adobeInit();
  adobeEvents();
  eventBindings();
  adobePageEvtTriggers(document.location.pathname);
};
