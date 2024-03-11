/**
 * @jest-environment jsdom
 */

import { COOKIE_PUID } from '@app/constants/cookies';

import { getCookie } from '../../cookie';
import { permutiveReady } from '../../permutive';
import getAPVSegment, {
  helpers,
  DEFAULT_SEGMENT,
  clearAPVCache,
} from '../getAPVSegment';

jest.mock('../../cookie');
jest.mock('../../permutive');

const APV_URL = 'test-url';

describe('apvSegment', () => {
  describe('clearAPVCache()', () => {
    const removeItemMock = jest.fn();

    beforeEach(() => {
      global.Storage.prototype.removeItem = removeItemMock;
    });

    it('will reset the local storage', () => {
      clearAPVCache();

      expect(removeItemMock).toBeCalledTimes(2);
      expect(removeItemMock).toBeCalledWith('apv-segment');
      expect(removeItemMock).toHaveBeenCalledWith('apv-segment-date');
    });
  });

  describe('helpers.getAPVSegmentFromRemote()', () => {
    let __JSGlobals;
    let __fetch;

    beforeEach(() => {
      __JSGlobals = window.JSGlobals;
      __fetch = window.fetch;

      global.JSGlobals = {
        apvConfig: {
          url: APV_URL,
        },
      };

      global.fetch = () => {
        return Promise.resolve({
          status: 200,
          text: () => Promise.resolve('test'),
        });
      };

      permutiveReady.mockImplementation(() => Promise.resolve('permutive-id'));
    });

    afterEach(() => {
      global.JSGlobals = __JSGlobals;
      global.fetch = __fetch;
    });

    describe('when GUID is NOT in cookie', () => {
      let mockFetch;

      beforeEach(() => {
        mockFetch = jest.fn();
        mockFetch.mockReturnValueOnce(
          Promise.resolve({
            status: 200,
            text: () => Promise.resolve('permutive-segment'),
          }),
        );

        global.fetch = mockFetch;

        getCookie.mockImplementation((name) => {
          return {
            [COOKIE_PUID]: '',
          }[name];
        });
      });

      it('should call fetch with Permutive URL', async () => {
        await helpers.getAPVSegmentFromRemote();
        expect(mockFetch.mock.calls[0][0]).toBe(
          `${APV_URL}?type=permutive&id=permutive-id`,
        );
      });

      it('should return segment from API', async () => {
        const segment = await helpers.getAPVSegmentFromRemote();
        expect(segment).toBe('permutive-segment');
      });
    });

    describe('when GUID is in cookie', () => {
      let mockFetch;

      beforeEach(() => {
        mockFetch = jest.fn();
        mockFetch.mockReturnValueOnce(
          Promise.resolve({
            status: 200,
            text: () => Promise.resolve('guid-segment'),
          }),
        );

        global.fetch = mockFetch;

        getCookie.mockImplementation((name) => {
          return {
            [COOKIE_PUID]: 'guid',
          }[name];
        });
      });

      it('should call fetch with piano URL', async () => {
        await helpers.getAPVSegmentFromRemote();
        expect(mockFetch.mock.calls[0][0]).toBe(
          `${APV_URL}?type=piano&id=guid`,
        );
      });

      it('should return segment from API', async () => {
        const segment = await helpers.getAPVSegmentFromRemote();
        expect(segment).toBe('guid-segment');
      });
    });

    describe('when fetch returns status code other than 200', () => {
      beforeEach(() => {
        global.fetch = () => {
          return Promise.resolve({
            status: 500,
            text: () => Promise.resolve('test'),
          });
        };
      });

      it('should return default segment', async () => {
        const segment = await helpers.getAPVSegmentFromRemote();
        expect(segment).toBe(DEFAULT_SEGMENT);
      });
    });

    describe('when fetch throws', () => {
      beforeEach(() => {
        global.fetch = () => {
          throw Error();
        };
      });

      it('should return default segment', async () => {
        const segment = await helpers.getAPVSegmentFromRemote();
        expect(segment).toBe(DEFAULT_SEGMENT);
      });
    });

    describe('when apvConfig.url is NOT set', () => {
      beforeEach(() => {
        global.JSGlobals = {
          apvConfig: {
            url: '',
          },
        };
      });

      it('should return default segment', async () => {
        const segment = await helpers.getAPVSegmentFromRemote();
        expect(segment).toBe(DEFAULT_SEGMENT);
      });
    });
  });

  describe('helpers.updateAPVSegment()', () => {
    const setItemMock = jest.fn();
    let getAPVSegmentFromRemoteSpy;

    beforeEach(() => {
      getAPVSegmentFromRemoteSpy = jest.spyOn(
        helpers,
        'getAPVSegmentFromRemote',
      );

      getAPVSegmentFromRemoteSpy.mockResolvedValue('super-dupa-fly');

      global.Storage.prototype.setItem = setItemMock;
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it("will set localStorage value with response from 'getAPVSegmentFromRemote'", (done) => {
      helpers.updateAPVSegment().then(() => {
        expect(getAPVSegmentFromRemoteSpy).toBeCalledTimes(1);
        expect(setItemMock).toBeCalledTimes(1);
        expect(setItemMock).toBeCalledWith('apv-segment', 'super-dupa-fly');
        done();
      });
    });
  });

  describe('getAPVSegment()', () => {
    const getItemMock = jest.fn();
    const setItemMock = jest.fn();
    const updateAPVSegmentSpy = jest.spyOn(helpers, 'updateAPVSegment');
    const getTodayDateSpy = jest.spyOn(helpers, 'getTodayDate');

    beforeEach(() => {
      getTodayDateSpy.mockReturnValue('15-12-2021');
      updateAPVSegmentSpy.mockImplementation(() => {});

      global.Storage.prototype.getItem = getItemMock;
      global.Storage.prototype.setItem = setItemMock;
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it('will return default segment & update stored segment if no update date is found', (done) => {
      expect(getAPVSegment()).toBe(DEFAULT_SEGMENT);

      expect(getItemMock).toBeCalledTimes(2);
      expect(getItemMock).toBeCalledWith('apv-segment');
      expect(getItemMock).toBeCalledWith('apv-segment-date');

      expect(setItemMock).toBeCalledTimes(1);
      expect(setItemMock).toBeCalledWith('apv-segment-date', '15-12-2021');
      expect(updateAPVSegmentSpy).toBeCalledTimes(0);

      setTimeout(() => {
        expect(updateAPVSegmentSpy).toBeCalledTimes(1);
        done();
      }, 0);
    });

    it('will return default & update stored segment if APV is not today', (done) => {
      getItemMock.mockImplementation((key) => {
        if (key === 'apv-segment-date') {
          return '14-12-2021';
        }
      });

      expect(getAPVSegment()).toBe(DEFAULT_SEGMENT);

      expect(getItemMock).toBeCalledTimes(2);
      expect(getItemMock).toBeCalledWith('apv-segment');
      expect(getItemMock).toBeCalledWith('apv-segment-date');

      expect(setItemMock).toBeCalledTimes(1);
      expect(setItemMock).toBeCalledWith('apv-segment-date', '15-12-2021');
      expect(updateAPVSegmentSpy).toBeCalledTimes(0);

      setTimeout(() => {
        expect(updateAPVSegmentSpy).toBeCalledTimes(1);
        done();
      }, 0);
    });

    it('will return stored value if it exists & update stored segment if APV is not today', (done) => {
      getItemMock.mockImplementation((key) => {
        if (key === 'apv-segment-date') {
          return '14-12-2021';
        }

        if (key === 'apv-segment') {
          return 'super-fly';
        }
      });

      expect(getAPVSegment()).toBe('super-fly');

      expect(getItemMock).toBeCalledTimes(2);
      expect(getItemMock).toBeCalledWith('apv-segment');
      expect(getItemMock).toBeCalledWith('apv-segment-date');

      expect(setItemMock).toBeCalledTimes(1);
      expect(setItemMock).toBeCalledWith('apv-segment-date', '15-12-2021');
      expect(updateAPVSegmentSpy).toBeCalledTimes(0);

      setTimeout(() => {
        expect(updateAPVSegmentSpy).toBeCalledTimes(1);
        done();
      }, 0);
    });

    it('will return stored value if it exists & not update if stored date is today', (done) => {
      getItemMock.mockImplementation((key) => {
        if (key === 'apv-segment-date') {
          return '15-12-2021';
        }

        if (key === 'apv-segment') {
          return 'super-fly';
        }
      });

      expect(getAPVSegment()).toBe('super-fly');

      expect(getItemMock).toBeCalledTimes(2);
      expect(getItemMock).toBeCalledWith('apv-segment');
      expect(getItemMock).toBeCalledWith('apv-segment-date');

      expect(setItemMock).toBeCalledTimes(0);
      expect(updateAPVSegmentSpy).toBeCalledTimes(0);

      setTimeout(() => {
        expect(updateAPVSegmentSpy).toBeCalledTimes(0);
        done();
      }, 0);
    });
  });
});
