/**
 * @jest-environment jsdom
 */

import getPpid from '../getPpid';

describe('getPpid', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(),
      },
      writable: true,
    });
  });

  it('should return an empty string if permutive-id is not stored', () => {
    window.localStorage.getItem.mockReturnValueOnce(null);

    const ppid = getPpid();

    expect(ppid).toBeFalsy();
  });

  it('should return parsed alphanumeric permutive-id', () => {
    const storedId = 'test-123';

    window.localStorage.getItem.mockReturnValueOnce(storedId);

    const ppid = getPpid();

    expect(ppid).toBe('test123');
  });
});
