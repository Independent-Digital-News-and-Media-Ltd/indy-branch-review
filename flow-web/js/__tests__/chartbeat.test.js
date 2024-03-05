import * as chartBeat from '../chartbeat';
import { error } from '../modules/log';

jest.mock('../modules/log');

describe('Chartbeat Public', () => {
  describe('trackChartbeat()', () => {
    const mockEventKey = 'mockEventKey';

    beforeEach(() => {
      jest.spyOn(chartBeat, 'previousChartbeatEventCacheReference');
      jest.spyOn(console, 'error').mockImplementation();
      chartBeat.previousChartbeatEventCacheReference.mockReturnValue({
        current: null,
      });
    });

    afterEach(() => {
      jest.resetAllMocks();
      jest.restoreAllMocks();
    });

    it('will not throw error if chartbeat has not loaded and not update cache', () => {
      jest.spyOn(chartBeat, 'trackChartbeat');
      chartBeat.trackChartbeat(mockEventKey);
      expect(chartBeat.trackChartbeat).not.toThrow();
      // 1st time is caught native error
      expect(error).toHaveBeenCalledTimes(2);
      expect(error).toHaveBeenNthCalledWith(
        2,
        'Error: Failed to track chartbeat event,',
        expect.any(String),
      );
      expect(chartBeat.previousChartbeatEventCacheReference().current).toEqual(
        null,
      );
    });

    it('will call chartbeat with correct event key and options if chartbeat has loaded and update event key cache', () => {
      global.chartbeat = jest.fn();
      const mockOptions = { testOption: 'testOptionValue' };
      chartBeat.trackChartbeat(mockEventKey, mockOptions);
      expect(global.chartbeat).toHaveBeenCalledTimes(1);
      expect(global.chartbeat).toHaveBeenCalledWith(mockEventKey, mockOptions);
      expect(error).not.toHaveBeenCalled();
      expect(chartBeat.previousChartbeatEventCacheReference().current).toEqual(
        mockEventKey,
      );
      delete global.chartBeat;
    });

    it('will not track the same chartbeat event twice if already stored within cache', () => {
      global.chartbeat = jest.fn();
      chartBeat.previousChartbeatEventCacheReference().current = mockEventKey;
      chartBeat.trackChartbeat(mockEventKey);
      expect(global.chartbeat).not.toHaveBeenCalled();
    });
  });

  describe('determineChartbeatData()', () => {
    it('will return an empty object if called server side', () => {
      const result = chartBeat.determineChartbeatData();
      expect(result).toEqual({});
    });

    it('will return event value and label object if called client side', () => {
      const mockPathname = 'mockPathname';
      global.window = {
        location: { pathname: mockPathname },
      };
      const mockEventValue = 'mockEventValue';
      const result = chartBeat.determineChartbeatData(mockEventValue);
      expect(result).toEqual({
        eventLabel: mockPathname,
        eventValue: mockEventValue,
      });
      delete global.window;
    });
  });
});
