import { PUBLICATION_ES, PUBLICATION_UK } from '@app/constants/publication';

export default (
  domain = PUBLICATION_UK,
  isLiveBlogArticle = false,
  originalUrl,
) => {
  if (domain === PUBLICATION_ES) {
    return false;
  }
  if (isLiveBlogArticle) {
    return true;
  }
  const pagePathWithoutQuery = originalUrl.split('?')[0];
  if (
    pagePathWithoutQuery === '/subscribe' ||
    pagePathWithoutQuery === '/subscribe/confirmation'
  ) {
    return true;
  }
  return false;
};
