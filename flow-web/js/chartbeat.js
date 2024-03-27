/* global chartbeat */

import * as thisModule from './chartbeat';
import { error } from './modules/log';

const previousChartbeatEventCache = { current: null };

// for mocking in unit tests
export const previousChartbeatEventCacheReference = () =>
  previousChartbeatEventCache;

export const trackChartbeat = (eventKey, options = {}) => {
  if (thisModule.previousChartbeatEventCacheReference().current === eventKey) {
    return;
  }

  try {
    chartbeat(eventKey, options);
    // only update cache if chartbeat call succeeds
    thisModule.previousChartbeatEventCacheReference().current = eventKey;
  } catch (e) {
    error('Error: Failed to track chartbeat event,', e.message);
  }
};

export const determineChartbeatData = (eventValue) => {
  try {
    return {
      eventLabel: window.location.pathname,
      eventValue,
    };
  } catch (error) {
    // server side
    return {};
  }
};
