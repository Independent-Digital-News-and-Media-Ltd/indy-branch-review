var b=Object.defineProperty;var N=(e,i,r)=>i in e?b(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r;var c=(e,i)=>b(e,"name",{value:i,configurable:!0});var w=(e,i,r)=>(N(e,typeof i!="symbol"?i+"":i,r),r);import{j as t}from"./jsx-runtime-91e341d4.js";import{u as n}from"./styled-components.browser.esm-dd68fb2f.js";import{l as E}from"./viewports-741975bd.js";import{M as P}from"./SuccessConfirmationModal-32d55de0.js";import{B as C}from"./Button-6cc3cb4d.js";import{f as _}from"./Button.constants-c6e6f0a7.js";import{I as V}from"./IconButton-dda0da21.js";import{t as u,l as R}from"./devices-1d39230d.js";import{c as q}from"./mixins-e8622e63.js";import{S as A}from"./close-solid-24-1a6c3203.js";import{r as H}from"./index-b56a0300.js";import{a as M}from"./Icon.constants-f71a83c2.js";import{S as O}from"./StarRating-0835c329.js";import{g as F}from"./currency-e70b3aaa.js";import{c as z}from"./clampLines-1aa52b19.js";import{I as U}from"./Image-388cf5e5.js";const W=n.div.withConfig({componentId:"sc-1288i4r-0"})([".sb-main-fullscreen &{min-height:",";}"],E.styles.height),k=c(e=>t.jsx(W,{children:t.jsx(e,{})}),"Laptop");try{k.displayName="Laptop",k.__docgenInfo={description:"",displayName:"Laptop",props:{}}}catch{}const G="Buy now",K="Read review",L=n.div.withConfig({componentId:"sc-tj6uka-0"})(["--padding-x:","px;display:grid;grid-template-columns:1fr 1fr;column-gap:","px;padding-right:var(--padding-x);padding-left:var(--padding-x);@media ","{--padding-x:","px;}@media ","{--padding-x:","px;}"],e=>e.theme.spacing.x2,({theme:e})=>e.spacing.x2,u,({theme:e})=>e.spacing.x2,R,({theme:e})=>e.spacing.x4),$=n(L).withConfig({componentId:"sc-sfm4lv-0"})(["padding-top:","px;padding-bottom:","px;"],({theme:e})=>e.spacing.x3,({theme:e})=>e.spacing.x3),X=n.div.withConfig({componentId:"sc-sfm4lv-1"})(["display:flex;flex-direction:column;gap:","px;"],({theme:e})=>e.spacing.x2),D=c((e,i)=>{var o,a;const r=i.find(s=>s.id===e);return((a=(o=r==null?void 0:r.prices)==null?void 0:o.at(0))==null?void 0:a.link)||""},"getUpdatedLink"),y=c(e=>{const{items:i=[],livePrices:r,onReadReviewClick:o,onBuyNowClick:a}=e;return t.jsx($,{children:i.map(({id:s,title:d,price:p,buyNow:l,readReview:m})=>t.jsxs(X,{children:[t.jsx(C,{as:_,variant:"secondary",href:D(s,r)||(l==null?void 0:l.vendorLink),target:"_blank",isExternal:l.isExternal,onClick:()=>a(s,d,p),children:G}),t.jsx(C,{as:_,variant:"tertiary",href:m.anchorHref,target:"_blank",onClick:()=>o(s,d,p),children:K})]},s))})},"CTAs");try{y.displayName="CTAs",y.__docgenInfo={description:"",displayName:"CTAs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Item[]"}},livePrices:{defaultValue:null,description:"",name:"livePrices",required:!0,type:{name:"LivePrice[]"}},onBuyNowClick:{defaultValue:null,description:"",name:"onBuyNowClick",required:!0,type:{name:"BuyNowClickHandler"}},onReadReviewClick:{defaultValue:null,description:"",name:"onReadReviewClick",required:!0,type:{name:"ReadReviewClickHandler"}}}}}catch{}const I="Close",Y=n.div.withConfig({componentId:"sc-iwoaif-0"})(["--width:100vw;--height:100vh;--border:1px solid ",";--border-radius:",";--modal-padding-x:","px;display:flex;position:relative;width:var(--width);height:var(--height);flex-flow:column;align-items:stretch;justify-content:flex-start;margin:0 auto;border-radius:0;background-color:",";@media ","{--modal-padding-x:","px;--width:80vw;--height:90vh;border-radius:var(--border-radius);margin-block:calc((100vh - var(--height)) / 2);}@media ","{--width:755px;}"],({theme:e})=>e.color.divider.light,({theme:e})=>e.dimension.outerArea.borderRadius,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.color.canvas.card,u,({theme:e})=>e.spacing.x3,R),Z=n.div.withConfig({componentId:"sc-iwoaif-1"})(["display:flex;position:sticky;top:0;z-index:1;flex:0 0 auto;align-items:center;justify-content:flex-end;padding:","px;background:",";@media ","{border-radius:var(--border-radius) var(--border-radius) 0 0;}"],({theme:e})=>e.spacing.x1,({theme:e})=>e.color.canvas.secondary,u),J=n(V).attrs({svg:A,size:"base",isCosy:!0}).withConfig({componentId:"sc-iwoaif-2"})([""]),Q=n.div.withConfig({componentId:"sc-iwoaif-3"})(["height:100%;overflow-x:clip;overflow-y:auto;",""],q),ee=n.div.withConfig({componentId:"sc-iwoaif-4"})(["display:flex;position:relative;box-sizing:border-box;justify-content:center;padding:","px 0 ","px;border-bottom:var(--border);background:",";font:",";@media ","{font:",";}"],({theme:e})=>e.spacing.x1_5,({theme:e})=>e.spacing.x2,({theme:e})=>e.color.canvas.secondary,({theme:e})=>e.textStyle.productComparison.modal.title.base,u,({theme:e})=>e.textStyle.productComparison.modal.title.large),ie=n.footer.withConfig({componentId:"sc-iwoaif-5"})(["border-top:var(--border);background:",";@media ","{border-radius:0 0 var(--border-radius) var(--border-radius);border-top:var(--border);}"],({theme:e})=>e.color.canvas.secondary,u),j=c(({children:e,className:i,isHidden:r,items:o,returnFocus:a,livePrices:s,hideProductModal:d,onBuyNowClick:p,onReadReviewClick:l})=>{const m="Compare Models";return t.jsx(P,{className:i,isHidden:r,onBackgroundClick:d,onEscapeKeyPress:d,returnFocus:a,role:"dialog",children:t.jsxs(Y,{children:[t.jsx(Z,{children:t.jsx(J,{title:I,"aria-label":I,onClick:d})}),t.jsxs(Q,{children:[t.jsx(ee,{children:m}),e,t.jsx(ie,{children:t.jsx(y,{livePrices:s,items:o,onBuyNowClick:p,onReadReviewClick:(g,f,B)=>{l(g,f,B),d()}})})]})]})})},"Modal");try{j.displayName="Modal",j.__docgenInfo={description:"",displayName:"Modal",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!1,type:{name:"boolean"}},returnFocus:{defaultValue:null,description:"",name:"returnFocus",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Item[]"}},livePrices:{defaultValue:null,description:"",name:"livePrices",required:!0,type:{name:"LivePrice[]"}},hideProductModal:{defaultValue:null,description:"",name:"hideProductModal",required:!0,type:{name:"() => void"}},onBuyNowClick:{defaultValue:null,description:"",name:"onBuyNowClick",required:!0,type:{name:"BuyNowClickHandler"}},onReadReviewClick:{defaultValue:null,description:"",name:"onReadReviewClick",required:!0,type:{name:"ReadReviewClickHandler"}}}}}catch{}const te=5,re=n(L).withConfig({componentId:"sc-1fhia16-0"})(["--table-rows:",";grid-template-rows:[hero] repeat(2,min-content) [specs] repeat(var(--table-rows),min-content);"],({$rows:e})=>e),ne=n.header.withConfig({componentId:"sc-1fhia16-1"})(["grid-template-rows:subgrid;grid-row:hero / span 2;margin:0;"]),oe=n.div.withConfig({componentId:"sc-1fhia16-2"})(["aspect-ratio:3/2;img{display:block;width:100%;height:100%;object-fit:contain;}"]),ae=n.h2.withConfig({componentId:"sc-1fhia16-3"})(["--line-height:20px;padding:","px ","px;margin:0;color:",";font:",";text-align:center;"],({theme:e})=>e.spacing.x1_5,({theme:e})=>e.spacing.x1,({theme:e})=>e.color.ink.base,({theme:e})=>e.textStyle.productComparison.table.font),se=n.div.withConfig({componentId:"sc-1fhia16-4"})(["",";"],z(2,"--line-height")),ce=n.dl.withConfig({componentId:"sc-1fhia16-5"})(["display:grid;grid-template-rows:subgrid;grid-row:specs / span var(--table-rows);margin-block-start:0;"]),h=n.div.withConfig({componentId:"sc-1fhia16-6"})(["display:flex;flex-direction:column;align-items:center;gap:","px;padding:","px ","px;border-bottom:1px solid ",";background-color:",";text-align:center;&:first-child{border-top:1px solid ",";}"],({theme:e})=>e.spacing.x0_5,({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.color.divider.light,({theme:e})=>e.color.canvas.secondary,({theme:e})=>e.color.divider.light),x=n.dt.withConfig({componentId:"sc-1fhia16-7"})(["color:",";font:",";"],({theme:e})=>e.color.ink.base,({theme:e})=>e.textStyle.productComparison.spec.heading),v=n.dd.withConfig({componentId:"sc-1fhia16-8"})(["margin:0;color:",";font:",";&:empty{&::before{content:'—';}}"],({theme:e})=>e.color.ink.base,({theme:e})=>e.textStyle.productComparison.spec.value),de=n.dd.withConfig({componentId:"sc-1fhia16-9"})(["margin:0;color:",";font:",";"],({theme:e})=>e.color.ink.base,({theme:e})=>e.textStyle.productComparison.spec.heading),le=c((e,i)=>{var r;return((r=e[0])==null?void 0:r.productSpecs.length)+i},"calculateSpecLength"),pe=c((e,i)=>{var o,a;const r=i.find(s=>s.id===e);return((a=(o=r==null?void 0:r.prices)==null?void 0:o.at(0))==null?void 0:a.price)||""},"getLivePrice"),me=3,S=c(({items:e,livePrices:i})=>{const r=le(e,me);return t.jsx(re,{$columns:e.length,$rows:r,children:e.map(({id:o,image:a,title:s,productSpecs:d,price:p,best:l,rating:m})=>t.jsxs(H.Fragment,{children:[t.jsxs(ne,{children:[t.jsx(oe,{children:a}),t.jsx(ae,{children:t.jsx(se,{children:s})})]}),t.jsxs(ce,{children:[t.jsxs(h,{children:[t.jsx(x,{children:"Best"}),t.jsx(v,{children:l})]},"best"),t.jsxs(h,{children:[t.jsx(x,{children:"Rating"}),t.jsx(v,{children:t.jsx(O,{size:M,value:m,total:te})})]},"rating"),t.jsx(h,{children:t.jsx(de,{children:F(pe(o,i)||p)})},"price"),d.map(({key:g,value:f})=>t.jsxs(h,{children:[t.jsx(x,{children:g}),t.jsx(v,{children:f})]},g))]})]},o))})},"Table");try{S.displayName="Table",S.__docgenInfo={description:"",displayName:"Table",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Item[]"}},livePrices:{defaultValue:null,description:"",name:"livePrices",required:!0,type:{name:"LivePrice[]"}}}}}catch{}const ue=c(e=>{const i=[];return e.forEach(r=>{r.productSpecs.forEach(a=>{i.includes(a.key)||i.push(a.key)})}),i},"collectProductSpecKeys"),ge=c((e,i)=>i.map(r=>{const o={key:r,value:null},a=e.find(s=>s.key===r);return a&&(o.value=a.value),o}),"normaliseProductSpecs");class T{constructor(){w(this,"item",{best:"",buyNow:{vendorLink:"",isExternal:!0,isAvailable:!0},id:"",image:t.jsx(U,{}),price:"",productSpecs:[],rating:0,readReview:{anchorHref:"",anchorId:""},title:""})}best(i){return this.item.best=i,this}buyNow(i){return this.item.buyNow=i,this}id(i){return this.item.id=i,this}image(i){return this.item.image=i,this}price(i){return this.item.price=i,this}productSpecs(i){return this.item.productSpecs=i,this}rating(i){return this.item.rating=i,this}readReview(i){return this.item.readReview=i,this}title(i){return this.item.title=i,this}build(){return this.item}}c(T,"ItemBuilder");const he=c(e=>e.map(i=>new T().best(i.bestFor).buyNow({vendorLink:i.vendorLink,isExternal:i.isExternal,isAvailable:i.isAvailable}).id(i.id).image(i.image).price(i.prettyPrice).rating(i.rating).readReview({anchorHref:i.anchorHref,anchorId:i.anchorId}).title(i.title).productSpecs(i.productSpec).build()),"productsToItems");function Ee(e,i){const o=he(i).filter(s=>e.includes(s.id)),a=ue(o);return o.map(s=>({...s,productSpecs:ge(s.productSpecs,a)}))}c(Ee,"createSelectedItems");export{k as L,j as M,S as T,Ee as c};
//# sourceMappingURL=createSelectedItems-48641260.js.map
