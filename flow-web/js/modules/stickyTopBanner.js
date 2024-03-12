import * as breakPoints from '@app/constants/breakpoints';

import { ID_TOP_BANNER_WRAPPER } from '@app/constants/ids';

import { getWindowWidth } from './util';

const topBannerId = 'top_banner';
const stickyClass = 'sticky';
const stickyTimeout = 3000;

let hasRunOnce = false;

export const onRendered = ({ slot }) => {
  const slotId = slot.getSlotElementId();

  if (slotId !== topBannerId) {
    return;
  }

  const topBanner = document.getElementById(topBannerId);
  const topBannerWrapper = document.getElementById(ID_TOP_BANNER_WRAPPER);
  const isVideo = topBanner.dataset.isVideo === 'true';

  if (hasRunOnce) {
    return;
  } else {
    hasRunOnce = true;
  }

  if (isVideo || !topBanner || getWindowWidth() < breakPoints.tablet) {
    return;
  }

  topBannerWrapper.classList.add(stickyClass);
};

export const onLoaded = ({ slot }) => {
  const slotId = slot.getSlotElementId();

  if (slotId !== topBannerId) {
    return;
  }

  const topBannerWrapper = document.getElementById(ID_TOP_BANNER_WRAPPER);

  setTimeout(() => {
    topBannerWrapper.classList.remove(stickyClass);
  }, stickyTimeout);
};
