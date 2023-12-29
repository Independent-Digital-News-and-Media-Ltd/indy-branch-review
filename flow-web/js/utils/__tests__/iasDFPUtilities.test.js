import iasDFPUtilities from '../iasDFPUtilities';

describe('iasDFPUtilities()', () => {
  const mockAdSlotData =
    '{"fr":0.1,"brandSafety":{"bs1":0.1,"bs2":0.2},"slots":{"slot1":{"fr":0.1,"bs1":0.1,"bs2":0.2},"slot2":{"fr":0.1,"bs1":0.1,"bs2":0.2}},"sizes":{"slot1":[[300,250],[300,600]],"slot2":[[300,250],[300,600]]},"adUnitPath":{"slot1":"/123456789/flow-web/flow-web-homepage","slot2":"/123456789/flow-web/flow-web-homepage"}}';
  const MOCK_SLOT = 'fr=0.1&bs1=0.1&bs2=0.2';

  describe('parseIASResponseData()', () => {
    it('should return page level targeting as query string', () => {
      iasDFPUtilities.parseIASResponseData(mockAdSlotData);
      const pageTargeting = iasDFPUtilities.getIASPageTargetingAsQueryString();
      expect(pageTargeting).toEqual(MOCK_SLOT);
    });
  });

  describe('getIASSlotTargetingAsQueryString()', () => {
    it('should return slot level targeting as query string', () => {
      iasDFPUtilities.parseIASResponseData(mockAdSlotData);
      const slotTargeting = iasDFPUtilities.getIASSlotTargetingAsQueryString();
      expect(slotTargeting).toEqual({
        slot1: MOCK_SLOT,
        slot2: MOCK_SLOT,
      });
    });
  });
});
