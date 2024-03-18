import { run as eventBindings } from '../event-bindings';

import adobeEvents from './custom-event-handlers';
import adobeInit from './init';
import adobePageEvtTriggers from './page-load-event';

export default () => {
  adobeInit();
  adobeEvents();
  eventBindings();
  adobePageEvtTriggers(document.location.pathname);
};
