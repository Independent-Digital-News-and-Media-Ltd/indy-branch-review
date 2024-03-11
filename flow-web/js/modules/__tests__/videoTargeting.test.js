import setVideoCookieDeprecationLabel from '../videoTargeting';

const mockCookieDeprecationLabel = (value) => {
  Object.defineProperty(navigator, 'cookieDeprecationLabel', {
    value: { getValue: jest.fn().mockResolvedValue(value) },
    configurable: true,
  });
};

describe('setVideoCookieDeprecationLabel', () => {
  beforeEach(() => {
    global.navigator = {
      cookieDeprecationLabel: {
        getValue: jest.fn(),
      },
    };
  });

  it('should return an empty string when cookieDeprecationLabel is not in navigator', async () => {
    delete navigator.cookieDeprecationLabel;

    const result = await setVideoCookieDeprecationLabel();

    expect(result).toBe('');
  });

  it('should return an empty string when cookieDeprecationLabel is present but returns null', async () => {
    mockCookieDeprecationLabel(null);

    const result = await setVideoCookieDeprecationLabel();

    expect(result).toBe('');
  });

  it('should return the correct query string when cookieDeprecationLabel is present and returns a value', async () => {
    const testLabel = 'testLabel';

    mockCookieDeprecationLabel(testLabel);

    const result = await setVideoCookieDeprecationLabel();

    expect(result).toBe(testLabel);
  });
});
