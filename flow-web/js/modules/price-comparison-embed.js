/* globals JSGlobals */

import { warn } from '@app/public/js/modules/log';
import { getEmbedTargetClass } from '@app/util/priceComparison';

import { loadJS } from './util';

export default async () => {
  const { provider, lib } = JSGlobals?.priceComparisonEmbed || {};
  const targets = document.getElementsByClassName(
    getEmbedTargetClass(provider),
  );

  if (!provider || !lib || targets.length === 0) {
    return;
  }

  try {
    await loadJS([lib]);
  } catch (err) {
    warn('Price comparison embed libSrc failed', err);
  }
};
