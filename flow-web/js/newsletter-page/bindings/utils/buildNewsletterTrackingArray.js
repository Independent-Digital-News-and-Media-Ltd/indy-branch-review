export const buildNewsletterTrackingArray = (newsletterKeys) =>
  newsletterKeys.filter((item) => !!item).join(',');
