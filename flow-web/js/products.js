/* globals JSGlobals */

import { CLASS_JS_PRODUCT } from '@app/constants/classNames';

import Product from './modules/product';

(function () {
  const config = JSGlobals.products;

  [...document.getElementsByClassName(CLASS_JS_PRODUCT)]
    .map((product) => new Product(product, config))
    .map((product) => product.init())
    .reduce((acc, product) => {
      acc[product.targetId] = product;
      return acc;
    }, {});
})();
