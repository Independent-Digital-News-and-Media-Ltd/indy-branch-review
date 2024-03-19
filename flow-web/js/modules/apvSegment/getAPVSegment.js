import dayjs from 'dayjs';

import { COOKIE_PUID } from '@app/constants/cookies';

import { getCookie } from '../cookie';
import { permutiveReady } from '../permutive';

export const DEFAULT_SEGMENT = 'flybys';

export const clearAPVCache = () => {
  localStorage.removeItem('apv-segment');
  localStorage.removeItem('apv-segment-date');
};

const getAPVSegmentFromRemote = async () => {
  const { apvConfig } = window.JSGlobals;

  if (!apvConfig?.url) {
    console.error('APV config is incorrect. url is required.');
    return DEFAULT_SEGMENT;
  }

  let id = getCookie(COOKIE_PUID);
  let type = 'piano';

  if (!id) {
    try {
      id = await permutiveReady();
    } catch (error) {
      return DEFAULT_SEGMENT;
    }
    type = 'permutive';
  }

  let resp;

  try {
    const query = new URLSearchParams();
    query.set('type', type);
    query.set('id', id);
    resp = await fetch(`${apvConfig.url}?${query.toString()}`, {});
  } catch {
    return DEFAULT_SEGMENT;
  }

  if (resp.status === 200) {
    return await resp.text();
  }

  return DEFAULT_SEGMENT;
};

export const helpers = {
  getAPVSegmentFromRemote,
  updateAPVSegment: async () => {
    localStorage.setItem(
      'apv-segment',
      await helpers.getAPVSegmentFromRemote(),
    );
  },
  getTodayDate: () => dayjs().format('DD-MM-YYYY'),
};

export default () => {
  const segment = localStorage.getItem('apv-segment') || DEFAULT_SEGMENT;
  const lastRefreshDate = localStorage.getItem('apv-segment-date');
  const todayDate = helpers.getTodayDate();

  // if we have not checked apv segment today - check
  if (lastRefreshDate !== todayDate) {
    localStorage.setItem('apv-segment-date', todayDate);

    // call with set timeout so we don't slow execution of following scripts
    setTimeout(helpers.updateAPVSegment, 0);
  }

  return segment;
};
