import { run as eventBindings } from '../event-bindings';

import compileAnalyticsData from './compile-analytics-data';
import adobeEvents from './custom-event-handlers';
import adobeInit from './init';
import adobePageEvtTriggers from './page-load-event';

export default () => {
  compileAnalyticsData();
  adobeInit();
  adobeEvents();
  eventBindings();
  adobePageEvtTriggers(document.location.pathname);
};
