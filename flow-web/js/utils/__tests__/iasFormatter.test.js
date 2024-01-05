import { iasFormatter, formatIASSizes } from '../iasFormatter';

describe('iasFormatter()', () => {
  it('should return correct IAS data', () => {
    const mockAdSlot = {
      getSlotElementId: jest.fn(() => 'mockId'),
      getSizes: jest.fn(() => [
        {
          getWidth: jest.fn(() => 320),
          getHeight: jest.fn(() => 50),
        },
      ]),
      getAdUnitPath: jest.fn(() => 'ad/unit/path/mpu1'),
    };

    expect(iasFormatter(mockAdSlot)).toStrictEqual({
      adSlotId: 'mockId',
      size: [[320, 50]],
      adUnitPath: 'ad/unit/path/mpu1',
    });
  });

  it('should set sizes to [1, 1]', () => {
    const mockAdSlot = {
      getSlotElementId: jest.fn(() => 'mockId'),
      getSizes: jest.fn(() => [{}]),
      getAdUnitPath: jest.fn(() => 'ad/unit/path/mpu1'),
    };

    expect(iasFormatter(mockAdSlot)).toStrictEqual({
      adSlotId: 'mockId',
      size: [[1, 1]],
      adUnitPath: 'ad/unit/path/mpu1',
    });
  });
});

describe('formatIASSizes()', () => {
  it('should return correct IAS sizes data', () => {
    expect(formatIASSizes('320x50')).toBe('320.50');
  });
});
