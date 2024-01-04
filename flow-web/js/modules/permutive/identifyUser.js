/* globals permutive */

import { COOKIE_PUID, COOKIE_HASHED_EMAIL } from '@app/constants/cookies';

import { getCookie } from '../cookie';

export function identifyUser() {
  const pianoId = getCookie(COOKIE_PUID);
  const hashed_email = getCookie(COOKIE_HASHED_EMAIL);
  const permutiveGeneratedId = permutive.context?.user_id;
  const permutiveIds = [];

  if (pianoId) {
    permutiveIds.push(
      { id: hashed_email, tag: 'user_email', priority: 0 },
      { id: hashed_email, tag: 'email_sha256', priority: 1 },
      { id: pianoId, tag: 'piano_id', priority: 2 },
    );
  }

  if (permutiveGeneratedId) {
    permutiveIds.push({
      id: permutiveGeneratedId,
      tag: 'permutive_id',
      priority: 3,
    });
  }

  if (permutiveIds.length) {
    permutive.identify(permutiveIds);
  }
}
