var u=Object.defineProperty;var s=(r,o)=>u(r,"name",{value:o,configurable:!0});import{j as p}from"./jsx-runtime-91e341d4.js";import{b as d,P as l,a as P}from"./ProductCarousel-d94798c9.js";import{P as C}from"./ProductBuilder-c2755f71.js";import"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";import"./Carousel-f2ad34e7.js";import"./styled-components.browser.esm-dd68fb2f.js";import"./mixins-e8622e63.js";import"./devices-1d39230d.js";import"./breakPoints-89c7d41a.js";import"./index-17b0cd16.js";import"./index-6925154b.js";import"./ProductCarouselCard-58f432ca.js";import"./Form-92228da3.js";import"./TextInput-a4e27216.js";import"./index.esm-d17145de.js";import"./LoadingEllipsis-859301b8.js";import"./InputWrapper-a6db9af3.js";import"./warning-solid-24-62e98cc2.js";import"./Icon.hoc-787425e7.js";import"./Icon.constants-f71a83c2.js";import"./Symbols.hoc-d0e330fb.js";import"./PasswordInput-57644bf7.js";import"./IconButton-dda0da21.js";import"./eye-visible-solid-24-51ef0235.js";import"./SelectInput-282eef3d.js";import"./chevron-down-solid-16-ecd33624.js";import"./Checkbox-d8c394ba.js";import"./tick-solid-16-20e5c3c2.js";import"./tick-solid-32-8cd2f25a.js";import"./ScreenReaderOnly-03556af7.js";import"./CheckboxWithDropdown-e92dd6be.js";import"./Dropdown-2f1c0625.js";import"./ValidationHint-0b9d255c.js";import"./tick-round-solid-12-8c368b0e.js";import"./spacings-dc016d25.js";import"./Button-6cc3cb4d.js";import"./index-8d138fa4.js";import"./Button.constants-c6e6f0a7.js";import"./launch-outline-16-2a071c4c.js";import"./StarRating-0835c329.js";import"./star-solid-24-6b31e071.js";import"./clampLines-1aa52b19.js";import"./currency-e70b3aaa.js";import"./chevron-left-solid-24-93719b9d.js";import"./chevron-right-solid-24-fb4b0b3b.js";import"./Image-388cf5e5.js";const Pt={title:"Modules/Product Carousel",component:d,decorators:[l]},t=s(r=>new C().bestForPrefixed("Lorem ipsum dolor sit amet, consectetur").id(`12345${r}`).prettyPrice("£123.99").rating(2.4).title("Lorem ipsum dolor sit amet, consectetur adipiscing elit").vendorLink("http://foo.com").build(),"createProduct"),g=[t(1),t(2),t(3),t(4),t(5),t(6),t(7),t(8),t(9),t(10),t(11),t(12),t(13),t(14),t(15),t(16)],f=s(()=>new Promise(r=>{setTimeout(()=>{r([{merchant:"Merchant",price:`£${Math.random()*100}`,link:"http://foo.com"}])},Math.random()*3e3)}),"getPrices"),x=s(r=>async o=>{r.setProductPricesIsLoading(o);try{const e=await f();r.setProductPrices(o,e)}catch{}finally{r.productPriceFetchError(o)}},"fetchPriceFactory"),h={initialIndex:0,isComparison:!1,products:g,title:"Our top picks"},c={args:h,render:r=>p.jsx(P.Consumer,{children:({productComparison:o,productPrices:e,dispatchers:i})=>p.jsx(d,{fetchPrice:x(i),initialIndex:r.initialIndex,isComparison:r.isComparison,livePrices:e,products:r.products,selectedItemIDs:o.selectedItems,title:r.title,onToggleSelectedProduct:i.toggleSelectedProduct,onBuyNowClick:i.clickProductCarouselBuyNow,onReadReviewClick:i.clickProductCarouselReadReview})})};var m,n,a;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: defaultArgs,
  render: (props: ProductCarouselProps) => {
    return <PageContext.Consumer>
        {({
        productComparison,
        productPrices,
        dispatchers
      }) => <ProductCarousel fetchPrice={fetchPriceFactory(dispatchers)} initialIndex={props.initialIndex} isComparison={props.isComparison} livePrices={productPrices} products={props.products} selectedItemIDs={productComparison.selectedItems} title={props.title} onToggleSelectedProduct={dispatchers.toggleSelectedProduct} onBuyNowClick={dispatchers.clickProductCarouselBuyNow} onReadReviewClick={dispatchers.clickProductCarouselReadReview} />}
      </PageContext.Consumer>;
  }
}`,...(a=(n=c.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const Ct=["Default"];export{c as Default,Ct as __namedExportsOrder,Pt as default};
//# sourceMappingURL=ProductCarousel.stories-81bf5390.js.map
