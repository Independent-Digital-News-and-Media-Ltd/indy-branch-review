/* globals JSGlobals */

import * as breakPoints from '@indy/ui/breakPoints';

import { adConfig as adTypes } from '@app/config/ads';

import gpt from '@app/public/js/modules/gpt';

import executeParallelApsAlongsidePrebid from './apsAlongsidePrebid';
import setPublisherId from './setPublisherId';
import {
  addArticleTargeting,
  addAutoRefreshTargeting,
  addCampaignOverrideTargeting,
  addCommercialTargeting,
  addGDPRTargeting,
  addLiveBlogTargeting,
  addMantisTargeting,
  addPageTypeTargeting,
  addPermutiveTargeting,
  addReferrerTargeting,
  addRegGateStatusTargeting,
  addTopicsTargeting,
} from './targeting';

export default ({ refresh, hasRegGate, ...props }) => {
  const permutiveId = localStorage.getItem('permutive-id');

  setPublisherId(permutiveId);

  gpt({
    ...props,
    adConfig: {
      types: adTypes,
      ...JSGlobals.adConfig,
    },
    breakPoints,
    adLoadingBehaviourSettings: JSGlobals.adConfig || {},
    setTargeting: () => {
      addPageTypeTargeting();
      addArticleTargeting();
      addMantisTargeting(JSGlobals?.mantis_channels, JSGlobals?.mantis_context);
      addRegGateStatusTargeting(hasRegGate);
      addPermutiveTargeting(permutiveId);
      addAutoRefreshTargeting(refresh);
      addGDPRTargeting();
      addTopicsTargeting();
      addCampaignOverrideTargeting();
      addLiveBlogTargeting(JSGlobals?.isLiveBlog);
      addCommercialTargeting(JSGlobals?.isCommercial);
      addReferrerTargeting();
    },
    beforeSlotsDisplay: async ({ slotElems }) => {
      if (props.prebidEnabled) {
        await executeParallelApsAlongsidePrebid(slotElems);
      }
    },
    beforeSlotRefresh: async ({ slotElem, slot }) => {
      if (props.prebidEnabled) {
        await executeParallelApsAlongsidePrebid([slotElem]);
      }

      slot.setTargeting('sovrn-reload', 'True');
    },
    enableOutOfPageAd: false,
  });
};
