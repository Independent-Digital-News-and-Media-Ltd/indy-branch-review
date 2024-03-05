import {
  CLASS_JS_COLLAPSE,
  CLASS_JS_PRODUCT_ANCHOR,
  CLASS_JS_PRODUCT_LEFT_CARD_SUMMARY,
  CLASS_JS_PRODUCT_BODY_BUY_BUTTON,
  CLASS_JS_PRICE_COMPARISON,
} from '@app/constants/classNames';

import Collapse from './collapse';
import {
  dispatchProductBuyNowClick,
  dispatchPriceComparisonListBuyNowClick,
} from './custom-event-dispatchers';

class Product {
  constructor(el, config = {}) {
    this.el = el;

    this.domCache = {
      anchor: this.el.querySelector(`.${CLASS_JS_PRODUCT_ANCHOR}`),
      collapse: this.el.querySelector(`.${CLASS_JS_COLLAPSE}`),
      summary: this.el.querySelector(`.${CLASS_JS_PRODUCT_LEFT_CARD_SUMMARY}`),
      bodyBuyButton: this.el.querySelector(
        `.${CLASS_JS_PRODUCT_BODY_BUY_BUTTON}`,
      ),
      priceComparisonBuyButton: this.el.querySelector(
        `.${CLASS_JS_PRICE_COMPARISON}`,
      ),
    };

    this.events = {
      bodyBuyLinkClick: this.handleBodyBuyLinkClick.bind(this),
      priceComparisonLinkClick:
        this.handlePriceComparisonBuyLinkClick.bind(this),
    };

    this.collapse = config.initialLinesToShow
      ? new Collapse(el, config)
      : false;
    this.stickySummary = config.stickySummary;
    if (this.stickySummary && this.domCache.summary === null) {
      throw new Error('the product does not contain an element with the class');
    }
  }

  setupListeners() {
    this.domCache.bodyBuyButton?.addEventListener(
      'click',
      this.events.bodyBuyLinkClick,
    );
    this.domCache.priceComparisonBuyButton?.addEventListener(
      'click',
      this.events.priceComparisonLinkClick,
    );
  }

  removeListeners() {
    this.domCache.bodyBuyButton?.removeEventListener(
      'click',
      this.events.bodyBuyLinkClick,
    );
    this.domCache.priceComparisonBuyButton?.removeEventListener(
      'click',
      this.events.priceComparisonLinkClick,
    );
  }

  handleBodyBuyLinkClick() {
    dispatchProductBuyNowClick();
  }

  handlePriceComparisonBuyLinkClick() {
    dispatchPriceComparisonListBuyNowClick();
  }

  get summaryStickyPositionValue() {
    const elHeight = this.domCache.summary.clientHeight;
    const winHeight = window.innerHeight;
    return elHeight > winHeight ? winHeight - elHeight : 0;
  }

  set summaryStickyPosition(value) {
    this.domCache.summary.setAttribute(
      'style',
      `--sticky-position: ${value}px`,
    );
  }

  get targetId() {
    return this.domCache.anchor.getAttribute('name');
  }

  get scrollTarget() {
    return window.scrollY + this.domCache.anchor.getBoundingClientRect().top;
  }

  scrollIntoView() {
    window.scrollTo(0, this.scrollTarget);
  }

  init() {
    this.setupListeners();
    this.collapse && this.collapse.init();
    if (this.stickySummary) {
      this.summaryStickyPosition = this.summaryStickyPositionValue;
    }
    return this;
  }

  cleanup() {
    this.removeListeners();
    this.collapse && this.collapse.cleanup();
  }
}

export default Product;
