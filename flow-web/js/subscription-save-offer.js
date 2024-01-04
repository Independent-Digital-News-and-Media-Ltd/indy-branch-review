import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { ID_SUBSCRIPTION_SAVE_OFFER_PAGE } from '@app/constants/ids';

import Wrapper from '@app/component/library/Hydration/IndyClientIslandWrapper';
import ErrorBanner from '@app/component/pages/subscribe/SaveOfferPage/Content/ErrorBanner';

const subscriptionSaveOffer = () => {
  const root = document.getElementById(ID_SUBSCRIPTION_SAVE_OFFER_PAGE);
  hydrateComponent(root, { ErrorBanner }, { Wrapper });
};

subscriptionSaveOffer();

export default subscriptionSaveOffer;
