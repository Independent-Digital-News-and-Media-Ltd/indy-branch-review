var k=Object.defineProperty;var s=(e,r)=>k(e,"name",{value:r,configurable:!0});import{j as t}from"./jsx-runtime-91e341d4.js";import{F as T,a as b}from"./FocusReturn-120dc2ee.js";import{c as R,M as _,T as E,L as B}from"./createSelectedItems-1d683106.js";import{P as S,a as j,b as M}from"./ProductCarousel-7a5b38e5.js";import{P as N}from"./Overlay-1ecdb49a.js";import{I as F}from"./Image-388cf5e5.js";import{P as x}from"./ProductBuilder-c2755f71.js";import{R as q,a as L,C as O,M as D,b as A,S as V,c as U}from"./ProductCarouselCard-ba6aadf4.js";import{u as i}from"./styled-components.browser.esm-dd68fb2f.js";import{B as f}from"./Button-6cc3cb4d.js";import{a as $}from"./Button.constants-c6e6f0a7.js";import{t as w,l as W}from"./devices-1d39230d.js";import"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";import"./viewports-741975bd.js";import"./breakPoints-89c7d41a.js";import"./SuccessConfirmationModal-be26a501.js";import"./inheritsLoose-5ae194f1.js";import"./IconButton-dda0da21.js";import"./Icon.hoc-787425e7.js";import"./Icon.constants-f71a83c2.js";import"./Symbols.hoc-d0e330fb.js";import"./index-17b0cd16.js";import"./index-6925154b.js";import"./mixins-0d98ffaa.js";import"./close-solid-24-1a6c3203.js";import"./StarRating-0835c329.js";import"./star-solid-24-6b31e071.js";import"./currency-e70b3aaa.js";import"./clampLines-1aa52b19.js";import"./Carousel-ea38a729.js";import"./chevron-left-solid-24-93719b9d.js";import"./chevron-right-solid-24-fb4b0b3b.js";import"./index-8d138fa4.js";import"./Checkbox-968264e4.js";import"./check-solid-16-ac63b4a9.js";import"./LoadingEllipsis-859301b8.js";import"./spacings-dc016d25.js";import"./launch-outline-16-2a071c4c.js";const Y="product-comparison-reset",H=i.div.withConfig({componentId:"sc-h0xl5q-0"})(["--gap:","px;display:flex;flex-wrap:nowrap;justify-content:space-between;gap:var(--gap);padding:0 ","px ","px;background:",";"],({theme:e})=>e.spacing.x2,({theme:e})=>e.spacing.x2,({theme:e})=>e.spacing.x2,({theme:e})=>e.color.canvas.secondary),X=i.div.withConfig({componentId:"sc-h0xl5q-1"})(["--border-radius:8px;display:none;flex-grow:1;gap:var(--gap);@media ","{display:flex;}"],w),z=i.div.withConfig({componentId:"sc-h0xl5q-2"})(["display:grid;width:calc(50% - (var(--gap) / 2));align-items:center;grid-template-columns:auto 1fr;border-radius:var(--border-radius);background:",";"],({theme:e})=>e.color.canvas.card),G=i.div.withConfig({componentId:"sc-h0xl5q-3"})(["overflow:hidden;height:44px;aspect-ratio:3/2;border-bottom-left-radius:var(--border-radius);border-top-left-radius:var(--border-radius);img{display:block;width:100%;height:100%;object-fit:contain;}"]),J=i.div.withConfig({componentId:"sc-h0xl5q-4"})(["--line-height:16px;display:-webkit-box;overflow:hidden;padding:0 ","px;-webkit-box-orient:vertical;font:normal 14px / var(--line-height) ",";-webkit-line-clamp:2;line-height:var(--line-height);text-overflow:initial;white-space:initial;"],({theme:e})=>e.spacing.x1,({theme:e})=>e.fontFamily.secondaryFont),K=i.div.withConfig({componentId:"sc-h0xl5q-5"})(["display:flex;align-items:center;"]),Q=i.div.withConfig({componentId:"sc-h0xl5q-6"})(["display:flex;width:100%;flex-wrap:nowrap;justify-content:space-between;gap:var(--gap);@media ","{width:auto;}@media ","{width:auto;}"],w,W),Z=i(f).withConfig({componentId:"sc-h0xl5q-7"})(["gap:2px;"]),ee=i(f).attrs({variant:$,type:"reset"}).withConfig({componentId:"sc-h0xl5q-8"})(["white-space:nowrap;"]),te=i.var.withConfig({componentId:"sc-h0xl5q-9"})(["width:3em;font-style:inherit;"]),u=s(({clearItems:e,items:r,onCompareClick:o})=>t.jsxs(H,{children:[t.jsx(X,{children:r.map(n=>t.jsxs(z,{children:[t.jsx(G,{children:n.image}),t.jsx(K,{children:t.jsx(J,{children:n.title})})]},n.id))}),t.jsxs(Q,{children:[t.jsx(ee,{id:Y,"data-testid":q,disabled:r.length===0,onClick:e,children:L}),t.jsxs(Z,{"data-testid":O,disabled:r.length<D,onClick:o,children:[A,t.jsxs(te,{"data-testid":V,children:["(",r.length,"/",U,")"]})]})]})]}),"ControlBar");try{u.displayName="ControlBar",u.__docgenInfo={description:"",displayName:"ControlBar",props:{clearItems:{defaultValue:null,description:"",name:"clearItems",required:!0,type:{name:"() => void"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Item[]"}},onCompareClick:{defaultValue:null,description:"",name:"onCompareClick",required:!0,type:{name:"() => void"}}}}}catch{}const d=s(e=>{const{livePrices:r,products:o,returnFocus:n,selectedItemIDs:y,dispatchers:l,showModal:P,onBuyNowClick:v,onReadReviewClick:I}=e,p=R(y,o);return t.jsxs(t.Fragment,{children:[t.jsx(u,{items:p,clearItems:l.clearProductSelection,onCompareClick:l.showProductModal}),t.jsx(_,{livePrices:r,items:p,isHidden:!P,returnFocus:n,hideProductModal:l.hideProductModal,onBuyNowClick:v,onReadReviewClick:I,children:t.jsx(E,{livePrices:r,items:p})})]})},"ProductComparison");try{d.displayName="ProductComparison",d.__docgenInfo={description:"",displayName:"ProductComparison",props:{products:{defaultValue:null,description:"",name:"products",required:!0,type:{name:"Product[]"}},returnFocus:{defaultValue:null,description:"",name:"returnFocus",required:!0,type:{name:"string"}},selectedItemIDs:{defaultValue:null,description:"",name:"selectedItemIDs",required:!0,type:{name:"string[]"}},showModal:{defaultValue:null,description:"",name:"showModal",required:!0,type:{name:"boolean"}},dispatchers:{defaultValue:null,description:"",name:"dispatchers",required:!0,type:{name:"Dispatchers"}},livePrices:{defaultValue:null,description:"",name:"livePrices",required:!0,type:{name:"LivePrice[]"}},onBuyNowClick:{defaultValue:null,description:"",name:"onBuyNowClick",required:!0,type:{name:"(id: string, name: string, price: string) => void"}},onReadReviewClick:{defaultValue:null,description:"",name:"onReadReviewClick",required:!0,type:{name:"(id: string, name: string, price: string) => void"}}}}}catch{}const Xe={title:"Modules/Product Comparison",component:d,parameters:{layout:"fullscreen"},decorators:[T,N,B,S]},re=s(({children:e})=>t.jsx(t.Fragment,{children:e}),"ComparisonContainer"),oe={},a=s(e=>new x().anchorHref(`#product-${e}-id`).anchorId(`product-${e}-id`).bestForPrefixed("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ").bestFor("Lorem ipsum dolor").id(`${512345+e}`).image(t.jsx(F,{})).prettyPrice("£123.99").rating(2.5).title("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ").vendorLink("http://foo.com").isExternal(!0).isAvailable(!0).productSpec([{key:"Wireless",value:"Yes"},{key:"Form factor",value:"Closed design"},{key:"Type",value:"Earbuds"},{key:"Noise Cancellation",value:"Yes"},{key:"Weight",value:"53g (case, earbud weight not specified)"}]).build(),"item"),ie=new x().id("product-2").productSpec([{key:"apple",value:"rosey"},{key:"banana",value:"bent"},{key:"carrot",value:"cake"}]).prettyPrice("£44.44").title("lorem ipsum").bestFor("Product 2").bestForPrefixed("Lorem ipsum").rating(4.5).isAvailable(!0).build(),m=[a(1),ie,a(3),a(4),a(5),a(6),a(7),a(8),a(9)],ae=s(()=>new Promise(e=>{setTimeout(()=>{e([{merchant:"Merchant",price:`£${Math.random()*100}`,link:"http://foo.com"}])},Math.random()*3e3)}),"getPrices"),se=s(e=>async r=>{e.setProductPricesIsLoading(r);try{const o=await ae();e.setProductPrices(r,o)}catch{}finally{e.productPriceFetchError(r)}},"fetchPriceFactory"),c={...oe,render:()=>t.jsx(re,{children:t.jsx(j.Consumer,{children:({productComparison:e,productPrices:r,dispatchers:o})=>t.jsxs(t.Fragment,{children:[t.jsx(M,{fetchPrice:se(o),initialIndex:0,isComparison:!0,livePrices:r,products:m,selectedItemIDs:e.selectedItems,title:"Our top pics",onToggleSelectedProduct:o.toggleSelectedProduct,onBuyNowClick:o.clickProductCarouselBuyNow,onReadReviewClick:o.clickProductCarouselReadReview}),t.jsx(d,{products:m,selectedItemIDs:e.selectedItems,showModal:e.showModal,returnFocus:b,livePrices:r,dispatchers:o,onBuyNowClick:o.clickProductComparisonBuyNow,onReadReviewClick:o.clickProductComparisonReadReview})]})})})};var h,C,g;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template,
  render: () => {
    return <ComparisonContainer>
        <PageContext.Consumer>
          {({
          productComparison,
          productPrices,
          dispatchers
        }) => <>
              <ProductCarousel fetchPrice={fetchPriceFactory(dispatchers)} initialIndex={0} isComparison={true} livePrices={productPrices} products={products} selectedItemIDs={productComparison.selectedItems} title="Our top pics" onToggleSelectedProduct={dispatchers.toggleSelectedProduct} onBuyNowClick={dispatchers.clickProductCarouselBuyNow} onReadReviewClick={dispatchers.clickProductCarouselReadReview} />

              <ProductComparison products={products} selectedItemIDs={productComparison.selectedItems} showModal={productComparison.showModal} returnFocus={FOCUS_SELECTOR} livePrices={productPrices} dispatchers={dispatchers} onBuyNowClick={dispatchers.clickProductComparisonBuyNow} onReadReviewClick={dispatchers.clickProductComparisonReadReview} />
            </>}
        </PageContext.Consumer>
      </ComparisonContainer>;
  }
}`,...(g=(C=c.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const ze=["Base"];export{c as Base,ze as __namedExportsOrder,Xe as default};
//# sourceMappingURL=ProductComparison.stories-bb24f2da.js.map
