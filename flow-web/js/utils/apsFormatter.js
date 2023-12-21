import { adsList } from '@app/config/vendors/prebid';

import {
  BANNED_AD_SLOTS_FOR_APS,
  BANNED_SIZES_FOR_APS,
} from '@app/constants/aps';

export default (adsToAuction) =>
  adsToAuction
    .filter((adToAuction) => !BANNED_AD_SLOTS_FOR_APS.includes(adToAuction.id))
    .map((adSlot) => ({
      slotID: adSlot.id,
      sizes: [
        ...new Set(
          adsList
            .find((ad) => ad.id === adSlot.id)
            .sizes.flatMap((size) => size.supportedSizes)
            .filter(
              (supportedSize) =>
                !BANNED_SIZES_FOR_APS.includes(supportedSize.join(',')),
            ),
        ),
      ],
      slotName: adSlot.getAttribute('data-ad-unit-path'),
    }));
