/**
 * @jest-environment jsdom
 */

import apsFormatter from '../apsFormatter';
describe('apsFormatter()', () => {
  it('should return correct APS adslots data', () => {
    const mockAdSlot = document.createElement('div');
    mockAdSlot.id = 'mpu1';
    mockAdSlot.setAttribute('data-ad-unit-path', 'test/path');

    const mockAdsToAuction = [mockAdSlot];

    expect(apsFormatter(mockAdsToAuction)).toStrictEqual([
      {
        sizes: [
          [300, 250],
          [300, 600],
        ],
        slotID: 'mpu1',
        slotName: 'test/path',
      },
    ]);
  });

  it('should filter banned adSlots', () => {
    const mockAdSlot1 = document.createElement('div');
    mockAdSlot1.id = 'thirdparty01';

    const mockAdSlot2 = document.createElement('div');
    mockAdSlot2.id = 'thirdparty02';

    const mockAdsToAuction = [mockAdSlot1, mockAdSlot2];

    expect(apsFormatter(mockAdsToAuction).length).toBe(0);
  });
});
