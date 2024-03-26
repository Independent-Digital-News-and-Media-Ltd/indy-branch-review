import { hydrateComponent } from '@indy/archipelago/bootstrap';

import Wrapper from '@app/component/library/Hydration/IndyClientIslandWrapper';
import FaqAccordion from '@app/component/pages/subscribe/Donation/FAQs/FaqAccordion';

import {
  dispatchDonation,
  dispatchDonationApplePay,
  dispatchPaymentDetailsFailed,
  dispatchPaymentDetailsSuccess,
  dispatchPaymentFormLoaded,
} from './modules/custom-event-dispatchers';
import { storeDigitalData } from './modules/digital-data/digital-data-session';
import { showPianoOffer } from './piano';

const frequencyOptions = document.querySelectorAll('.frequency-options');
const amountOptions = document.querySelectorAll('.amount-options');
const termOptions = [...frequencyOptions, ...amountOptions];
const purchaseButtons = document.querySelectorAll('.donation-purchase-btn');
const donationForm = document.querySelector('#donation-form');
const donateBar = document.querySelector('#donate-bar');
const donateOptionsBar = document.getElementById('donate-options-bar');
const donateBarButton = donateBar.querySelector('button');
const hideOptionsElem = document.getElementById('hide-options');

const dispatchTracking = (targetElem, type) => {
  const formElem = targetElem.closest('.formRoot');
  const buttonElem = formElem.getElementsByTagName('button')[0];

  const {
    trackingPrice,
    trackingLength,
    trackingName,
    initialSelectedPackage,
  } = buttonElem.dataset;

  const trackingData = {
    subscription_length: trackingLength,
    subscription_price: trackingPrice,
    subscription_package: trackingName,
    initial_selected_package: initialSelectedPackage,
  };

  storeDigitalData(trackingData);

  switch (type) {
    case 'donation':
      dispatchDonation({ ...trackingData });
      break;

    case 'donation_apple_pay':
      dispatchDonationApplePay({ ...trackingData });
      break;

    case 'payment_form_loaded':
      dispatchPaymentFormLoaded({ ...trackingData });
      break;

    case 'payment_details_success':
      dispatchPaymentDetailsSuccess({ ...trackingData });
      break;

    case 'payment_details_failed':
      dispatchPaymentDetailsFailed({ ...trackingData });
      break;
  }
};

purchaseButtons.forEach((purchaseBtn) => {
  purchaseBtn?.addEventListener('click', (evt) => {
    dispatchTracking(evt.target, 'donation');
    const { offerId, termId } = evt.target.dataset;
    showPianoOffer({ offerId, termId });
  });
});

donateBarButton.addEventListener('click', () => {
  donateOptionsBar.classList.toggle('hidden');
  setTimeout(() => {
    donateOptionsBar.classList.toggle('closed');
    donateOptionsBar.style.zIndex = '5';
    donateBar.classList.toggle('hidden');
  }, 100);
});

hideOptionsElem.addEventListener('click', () => {
  donateOptionsBar.classList.toggle('closed');
  donateOptionsBar.style.zIndex = '4';
  donateBar.classList.toggle('hidden');
  setTimeout(() => {
    donateOptionsBar.classList.toggle('hidden');
  }, 500);
});

const isVerified = (elem) => {
  const formRoot = elem.closest('.formRoot');
  return ![...formRoot.querySelectorAll('input[name=verification]')].some(
    (box) => !box.checked,
  );
};

const initVerifications = () => {
  document.querySelectorAll('input[name=verification]').forEach((checkbox) => {
    checkbox.addEventListener('change', (evt) => {
      const formRoot = evt.target.closest('.formRoot');
      formRoot.querySelector('button[data-offer=donations]').disabled =
        !isVerified(formRoot);
    });
  });
};

termOptions.forEach((option) => {
  option.addEventListener('change', (e) => {
    const formRoot = e.target.closest('.formRoot');

    const purchaseBtn = formRoot.querySelector('.donation-purchase-btn');
    const selectedFrequencyElem = formRoot.querySelector(
      '.frequency-options :checked',
    );
    const selectedPriceElem = formRoot.querySelector(
      '.amount-options :checked',
    );
    const { value: selectedFrequency, dataset } = selectedFrequencyElem;
    const { trackingLength, trackingName } = dataset;

    purchaseBtn.dataset.termId = selectedPriceElem.dataset[selectedFrequency];

    purchaseBtn.dataset.trackingPrice =
      selectedPriceElem.dataset.currencyName +
      Number(selectedPriceElem.dataset[`${selectedFrequency}Price`]).toFixed(2);

    purchaseBtn.dataset.trackingLength = trackingLength;
    purchaseBtn.dataset.trackingName = trackingName;
  });
});

frequencyOptions.forEach((option) => {
  option.addEventListener('change', () => {
    const parentElem = option.parentElement;
    const length = parentElem.querySelector('.frequency-options :checked');
    const inputs = parentElem.querySelectorAll('.amount-options input');
    inputs.forEach(({ id, dataset }) => {
      const label = parentElem.querySelector(`label[for=${id}]`);
      const price = dataset[`${length.value}Price`];
      label.innerHTML = `${dataset.currencySymbol}${price}`;
    });
  });
});

const initGalleries = () => {
  const sections = document.querySelectorAll('.gallery-donation-section');
  const galleryFramesLength = 3;
  let index = 0;

  setInterval(() => {
    const oldIndex = index;
    index = index === galleryFramesLength - 1 ? 0 : index + 1;

    sections.forEach(({ classList }) =>
      classList.replace(
        `gallery-image-${oldIndex + 1}`,
        `gallery-image-${index + 1}`,
      ),
    );
  }, 4000);
};

const setFormVisibility = () => {
  const docElem = document.documentElement;
  const { scrollWidth, scrollTop } = docElem;
  if (scrollWidth >= 985) {
    let ratio = 2.4;
    if (scrollWidth >= 1440) {
      ratio = 1.7;
    } else if (scrollWidth >= 1280) {
      ratio = 1.8;
    }

    donationForm.classList[scrollTop / scrollWidth > ratio ? 'add' : 'remove'](
      'hidden',
    );
  }
};

// Hide Donation Form for FAQ section
// Set Donation Form Wrapper position to fixed after a certain scrollTop
const initPage = async () => {
  initGalleries();

  setFormVisibility();

  window.addEventListener('resize', setFormVisibility);
  window.addEventListener('scroll', setFormVisibility);
};

const checkDocumentReady = () => {
  if (document.readyState === 'complete') {
    initPage();
  } else {
    setTimeout(checkDocumentReady, 100);
  }
};

checkDocumentReady();
initVerifications();

hydrateComponent(
  document.querySelector('div[data-component=FaqAccordion]'),
  { FaqAccordion },
  { Wrapper },
);
