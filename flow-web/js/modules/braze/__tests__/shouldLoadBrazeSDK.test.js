import { PUBLICATION_ES, PUBLICATION_UK } from '@app/constants/publication';

import shouldLoadBrazeSDK from '../shouldLoadBrazeSDK';

describe('shouldLoadBrazeSDK()', () => {
  const mockIsLiveBlogArticle = true;

  it('will not load Braze on espanol domain', () => {
    const result = shouldLoadBrazeSDK(PUBLICATION_ES);
    expect(result).toBe(false);
  });

  it('will not load Braze on espanol live blog article', () => {
    const result = shouldLoadBrazeSDK(PUBLICATION_ES, mockIsLiveBlogArticle);
    expect(result).toBe(false);
  });

  it('will load Braze on non-espanol live blog article', () => {
    const result = shouldLoadBrazeSDK(PUBLICATION_UK, mockIsLiveBlogArticle);
    expect(result).toBe(true);
  });

  it('will load Braze on the selling page', () => {
    const result = shouldLoadBrazeSDK(
      PUBLICATION_UK,
      false,
      '/subscribe?foo=bar',
    );
    expect(result).toBe(true);
  });

  it('will load Braze on the confirmation page', () => {
    const result = shouldLoadBrazeSDK(
      PUBLICATION_UK,
      false,
      '/subscribe/confirmation?foo=bar',
    );
    expect(result).toBe(true);
  });

  it('will not load Braze on any other non-live blog page', () => {
    const result = shouldLoadBrazeSDK(PUBLICATION_UK, false, '/other-path');
    expect(result).toBe(false);
    const subscribeResult = shouldLoadBrazeSDK(
      PUBLICATION_UK,
      false,
      '/subscribe/register?foo=bar',
    );
    expect(subscribeResult).toBe(false);
  });
});
