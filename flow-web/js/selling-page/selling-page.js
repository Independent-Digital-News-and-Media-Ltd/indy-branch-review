import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { COOKIE_PLANIT_CLICK_ID } from '@app/constants/cookies';

import { ID_SELLING_PAGE_CONTENT_ROOT } from '@app/constants/ids';

import Wrapper from '@app/component/library/Hydration/IndyClientIslandWrapper';
import SubscriberAccordion from '@app/component/library/StaticPage/PaymentFlow/SellingPage/FAQs/SubscriberAccordion';
import SubscribePageContent from '@app/component/pages/subscribe/SubscribePage/Content';

import { setCookie } from '../modules/cookie';

const searchParams = new URLSearchParams(document.location.search);

hydrateComponent(
  document.getElementById(ID_SELLING_PAGE_CONTENT_ROOT),
  { SubscribePageContent },
  { Wrapper },
);

hydrateComponent(
  document.querySelector('div[data-component=SubscriberAccordion]'),
  { SubscriberAccordion },
  { Wrapper },
);

if (searchParams.has(COOKIE_PLANIT_CLICK_ID)) {
  setCookie(COOKIE_PLANIT_CLICK_ID, searchParams.get(COOKIE_PLANIT_CLICK_ID), {
    days: 30,
  });
}
