/**
 * @jest-environment jest-environment-jsdom-global
 */
import * as aps from '../aps';
import * as ias from '../ias';
import * as prebid from '../instreamVideoPrebid';
import * as thatModule from '../jwplayer';
import * as eventHandlers from '../jwplayer/eventHandlers';
import * as log from '../log';

describe('jwplayer module', () => {
  describe('jwplayerSetup()', () => {
    const handlerNames = [
      'onReady',
      'onPlayListItem',
      'onBeforePlay',
      'onRequest',
      'onPlay',
      'onPause',
      'onSeek',
      'onTime',
      'onAdImpression',
      'onAdTime',
      'onAdPlay',
      'onAdClick',
      'onAdsManager',
      'onComplete',
    ];
    const mockOn = jest.fn().mockImplementation(() => {});
    const mockSetup = jest.fn().mockReturnValue({ on: mockOn });

    beforeEach(() => {
      global.jwplayer = () => ({
        setup: mockSetup,
      });

      handlerNames.forEach((handlerName) => {
        jest.spyOn(eventHandlers, handlerName).mockImplementation(() => {});
      });
    });

    afterEach(() => {
      jest.resetAllMocks();
      jest.restoreAllMocks();
      delete global.jwplayer;
    });

    it('should create a player instance and bind event handlers on it', () => {
      const mockArgs = {
        containerId: 'test-container',
        options: {},
        nextUrl: 'test-next-url',
        consent: true,
      };
      thatModule.jwplayerSetup(mockArgs);
      expect(mockSetup).toBeCalledWith(mockArgs.options);
      expect(mockOn).toHaveBeenCalledTimes(handlerNames.length);
      expect(mockOn).toBeCalledWith('ready', eventHandlers.onReady);
      expect(mockOn).toBeCalledWith(
        'playlistItem',
        eventHandlers.onPlayListItem,
      );
      expect(mockOn).toBeCalledWith('beforePlay', eventHandlers.onBeforePlay);
      expect(mockOn).toBeCalledWith('adRequest', eventHandlers.onRequest);
      expect(mockOn).toBeCalledWith('play', eventHandlers.onPlay);
      expect(mockOn).toBeCalledWith('pause', eventHandlers.onPause);
      expect(mockOn).toBeCalledWith('seek', eventHandlers.onSeek);
      expect(mockOn).toBeCalledWith('time', eventHandlers.onTime);
      expect(mockOn).toBeCalledWith(
        'adImpression',
        eventHandlers.onAdImpression,
      );
      expect(mockOn).toBeCalledWith('adTime', eventHandlers.onAdTime);
      expect(mockOn).toBeCalledWith('adPlay', eventHandlers.onAdPlay);
      expect(mockOn).toBeCalledWith('adClick', eventHandlers.onAdClick);
      expect(mockOn).toBeCalledWith('adsManager', eventHandlers.onAdsManager);
    });
  });

  describe('getBidsTargeting()', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });
    it('should return an empty object if no bids are passed', async () => {
      jest.spyOn(ias, 'getTargeting').mockResolvedValue({});
      jest.spyOn(aps, 'getTargeting').mockResolvedValue({});
      jest.spyOn(prebid, 'getTargeting').mockResolvedValue({});
      const result = await thatModule.getBidsTargeting();
      expect(result).toEqual({});
    });
    it('should return an object with ias targeting if ias bids are passed', async () => {
      jest.spyOn(ias, 'getTargeting').mockResolvedValue({ ias: 'test' });
      jest.spyOn(aps, 'getTargeting').mockResolvedValue({});
      jest.spyOn(prebid, 'getTargeting').mockResolvedValue({});
      const result = await thatModule.getBidsTargeting();
      expect(result).toEqual(expect.objectContaining({ ias: 'test' }));
    });
    it('should return an object with aps targeting if aps bids are passed', async () => {
      jest.spyOn(ias, 'getTargeting').mockResolvedValue({});
      jest.spyOn(aps, 'getTargeting').mockResolvedValue({ aps: 'test' });
      jest.spyOn(prebid, 'getTargeting').mockResolvedValue({});
      const result = await thatModule.getBidsTargeting();
      expect(result).toEqual(expect.objectContaining({ aps: 'test' }));
    });
    it('should return an object with prebid targeting if prebid bids are passed', async () => {
      jest.spyOn(ias, 'getTargeting').mockResolvedValue({});
      jest.spyOn(aps, 'getTargeting').mockResolvedValue({});
      jest.spyOn(prebid, 'getTargeting').mockResolvedValue({ prebid: 'test' });
      const result = await thatModule.getBidsTargeting();
      expect(result).toEqual(expect.objectContaining({ prebid: 'test' }));
    });
    it('should return an object with other targeting if one of the requests is rejected', async () => {
      jest.spyOn(ias, 'getTargeting').mockResolvedValue({ ias: 'test' });
      jest.spyOn(aps, 'getTargeting').mockResolvedValue({ aps: 'test' });
      jest.spyOn(prebid, 'getTargeting').mockRejectedValue(new Error());
      jest.spyOn(log, 'warn').mockImplementation();
      const result = await thatModule.getBidsTargeting();
      expect(result).toEqual(expect.objectContaining({ aps: 'test' }));
      expect(log.warn).toHaveBeenCalledWith(new Error());
    });
  });
});
