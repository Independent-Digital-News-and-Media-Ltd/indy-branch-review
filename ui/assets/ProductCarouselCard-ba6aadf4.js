var I=Object.defineProperty;var r=(e,i)=>I(e,"name",{value:i,configurable:!0});import{j as t}from"./jsx-runtime-91e341d4.js";import{C as k}from"./Checkbox-968264e4.js";import{L}from"./LoadingEllipsis-859301b8.js";import{b as R}from"./spacings-dc016d25.js";import{u as o}from"./styled-components.browser.esm-dd68fb2f.js";import{B as u}from"./Button-6cc3cb4d.js";import{a as A,b as j}from"./Button.constants-c6e6f0a7.js";import{S as q}from"./StarRating-0835c329.js";import{t as s,l as c}from"./devices-1d39230d.js";import{c as m}from"./clampLines-1aa52b19.js";const N=2,pe=2,ue="status",me="Clear All",ge="Compare",he="reset-button",Ce="compared-button",P=R,O=140,V=156,H=190,D="Unavailable",U="Buy now",F=o.article.withConfig({componentId:"sc-54m75q-0"})(["--tile-width:","px;--spacing:","px;--border:1px solid ",";--border-radius:",";--padding-x:","px;width:var(--tile-width);height:100%;box-sizing:border-box;border-radius:var(--border-radius);background-color:",";text-align:center;@media ","{--padding-x:","px;--tile-width:","px;}@media ","{--padding-x:","px;--spacing:","px;--tile-width:","px;}"],O,e=>e.theme.spacing.x1,e=>e.theme.color.divider.dark,e=>e.theme.dimension.outerArea.borderRadius,({theme:e})=>e.spacing.x1,({theme:e})=>e.color.canvas.base,s,({theme:e})=>e.spacing.x2,V,c,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.spacing.x1_5,H),M=o.div.withConfig({componentId:"sc-54m75q-1"})(["overflow:hidden;border-radius:var(--border-radius) var(--border-radius) 0 0;aspect-ratio:3 / 2;img{display:block;width:100%;height:100%;object-fit:contain;}"]),W=o.div.withConfig({componentId:"sc-54m75q-2"})(["padding-right:var(--padding-x);padding-left:var(--padding-x);"]),Y=o.a.withConfig({componentId:"sc-54m75q-3"})(["--height:54px;--line-height:",";display:block;height:var(--height);padding-top:","px;color:",";font:",";transition:",";&:hover,&:focus,&:active{color:",";}@media ","{--height:60px;--line-height:",";font:",";}@media ","{--height:66px;--line-height:",";font:",";}",""],({theme:e})=>e.textStyle.productCarouselCardBestFor.mobile.lineHeight,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.color.actionBlack.base,({theme:e})=>e.textStyle.productCarouselCardBestFor.mobile.font,({theme:e})=>e.transition.link,({theme:e})=>e.color.actionBlack.alt,s,({theme:e})=>e.textStyle.productCarouselCardBestFor.tablet.lineHeight,({theme:e})=>e.textStyle.productCarouselCardBestFor.tablet.font,c,({theme:e})=>e.textStyle.productCarouselCardBestFor.laptop.lineHeight,({theme:e})=>e.textStyle.productCarouselCardBestFor.laptop.font,m(3,"--line-height")),z=o(q).withConfig({componentId:"sc-54m75q-4"})(["justify-content:center;padding:","px 0;"],({theme:e})=>e.spacing.x1),G=o.span.withConfig({componentId:"sc-54m75q-5"})(["display:block;padding:var(--spacing) var(--padding-x) 0 0;margin:0 calc(var(--padding-x) * -1) var(--spacing) 0;",""],m(3,"--line-height")),X=o.strong.withConfig({componentId:"sc-54m75q-6"})(["--line-height:",";display:block;border-top:var(--border);border-bottom:var(--border);font:",";@media ","{--line-height:",";font:",";}@media ","{--line-height:",";font:",";}"],({theme:e})=>e.textStyle.productCarouselCardTitle.mobile.lineHeight,({theme:e})=>e.textStyle.productCarouselCardTitle.mobile.font,s,({theme:e})=>e.textStyle.productCarouselCardTitle.tablet.lineHeight,({theme:e})=>e.textStyle.productCarouselCardTitle.tablet.font,c,({theme:e})=>e.textStyle.productCarouselCardTitle.laptop.lineHeight,({theme:e})=>e.textStyle.productCarouselCardTitle.laptop.font),$=o(u).attrs({forwardedAs:"a",size:"large",variant:A}).withConfig({componentId:"sc-54m75q-7"})([""]),J=o.div.withConfig({componentId:"sc-54m75q-8"})(["display:flex;width:100%;height:38px;min-height:",";flex-flow:row nowrap;align-items:center;justify-content:center;border-top:var(--border);border-bottom:var(--border);font:",";"],({theme:e})=>e.textStyle.productCarouselCardPrice.lineHeight,({theme:e})=>e.textStyle.productCarouselCardPrice.font),K=o.div.withConfig({componentId:"sc-54m75q-9"})(["display:flex;flex-direction:column;padding:","px 0;"],P),Q=o(u).attrs({forwardedAs:"a",variant:j}).withConfig({componentId:"sc-54m75q-10"})(["&:last-child{margin-bottom:0;}"]),Z=o.div.withConfig({componentId:"sc-54m75q-11"})(["display:flex;justify-content:center;padding-bottom:","px;"],({theme:e})=>e.spacing.x1_5),l=r(({product:{id:e,anchorHref:i,bestForPrefixed:g,image:h,title:n,rating:C,isAvailable:p},isComparison:x,isLoading:f=!1,price:a,vendorLink:b,selectedItemIDs:d,onToggleSelectedProduct:T,onBuyNowClick:y,onReadReviewClick:_})=>{const v=!d.includes(e)&&d.length>=N,w=r(()=>_(e,n,a),"handleReadReviewClick"),B=r(()=>y(e,n,a),"handleBuyNowClick"),E=r(S=>T(e,n,a,S.currentTarget.checked),"handleChange");return t.jsxs(F,{children:[t.jsx(M,{children:h}),t.jsxs(W,{children:[t.jsx(Y,{href:i,children:g}),t.jsx(z,{value:C}),t.jsx(X,{children:t.jsx(G,{children:n})}),t.jsx($,{href:i,onClick:w,children:"Read review"}),t.jsx(J,{children:f?t.jsx(L,{}):t.jsx("strong",{children:a})}),t.jsx(K,{children:t.jsx(Q,{href:b,target:"_blank",rel:"noreferrer",disabled:!p,isExternal:!0,onClick:B,children:p?U:D})}),x&&t.jsx(Z,{children:t.jsx(k,{id:e,checked:d.includes(e),disabled:v,onChange:E,children:"Compare"})})]})]})},"ProductCarouselCard"),xe=l;try{l.displayName="ProductCarouselCard",l.__docgenInfo={description:"",displayName:"ProductCarouselCard",props:{isComparison:{defaultValue:null,description:"",name:"isComparison",required:!0,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"string"}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"Product"}},selectedItemIDs:{defaultValue:null,description:"",name:"selectedItemIDs",required:!0,type:{name:"string[]"}},vendorLink:{defaultValue:null,description:"",name:"vendorLink",required:!0,type:{name:"string"}},onToggleSelectedProduct:{defaultValue:null,description:"",name:"onToggleSelectedProduct",required:!0,type:{name:"(id: string, name: string, price: string, isChecked: boolean) => void"}},onBuyNowClick:{defaultValue:null,description:"",name:"onBuyNowClick",required:!0,type:{name:"BuyNowClickHandler"}},onReadReviewClick:{defaultValue:null,description:"",name:"onReadReviewClick",required:!0,type:{name:"ReadReviewClickHandler"}}}}}catch{}export{Ce as C,pe as M,xe as P,he as R,ue as S,me as a,ge as b,N as c};
//# sourceMappingURL=ProductCarouselCard-ba6aadf4.js.map
