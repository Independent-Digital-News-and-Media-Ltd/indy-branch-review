var w=Object.defineProperty;var O=(e,n,r)=>n in e?w(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;var a=(e,n)=>w(e,"name",{value:n,configurable:!0});var u=(e,n,r)=>(O(e,typeof n!="symbol"?n+"":n,r),r);import{j as i}from"./jsx-runtime-91e341d4.js";import{r as V}from"./index-b56a0300.js";import{B as L}from"./Button-12c95ded.js";import{g as W}from"./Button.constants-c6e6f0a7.js";import{a as q}from"./Dropdown-2f1c0625.js";import{I as F}from"./Icon.hoc-1b9291aa.js";import{I as H}from"./IconButton-c662f5de.js";import"./ControlledPopupTip-8bebca14.js";import{P as M}from"./PopupTip-22424923.js";import{S as E,f as N,g as z,h as G,i as $,j as X}from"./spa-solid-24-53d9963f.js";import{u as t}from"./styled-components.browser.esm-dd68fb2f.js";import{t as s}from"./devices-f8e8a791.js";import"./_commonjsHelpers-c38d1a10.js";import"./index-8d138fa4.js";import"./launch-outline-16-2a071c4c.js";import"./index-6925154b.js";import"./Symbols.hoc-fb0f215f.js";import"./index-17b0cd16.js";import"./PopupTip.styles-7c6e4c14.js";import"./info-outline-16-a4f0c259.js";const Y="Hotel Amenities",Z="Check availability for dates and prices",J="Rooms available from",K="per night",Q="Check availability",ee="Rates provided by Booking.com",ne=a(e=>`Read our full review of ${e} here`,"readReviewButtonLabel"),ie={internet:E,services:N,foodDrink:z,parking:G,health:$};class p{constructor(){u(this,"amenity",{ref:"",name:"",items:[],showTooltip:!1})}name(n){return this.amenity.name=n,this}items(n){return this.amenity.items=n,this}showTooltip(n){return this.amenity.showTooltip=n,this}ref(n){return this.amenity.ref=n,this}build(){return this.amenity}}a(p,"AmenityBuilder");class m{constructor(){u(this,"booking",{id:"",name:"",price:"",reviewUrl:"",isExternalUrl:!1,url:"",amenities:[]})}id(n){return this.booking.id=n,this}name(n){return this.booking.name=n,this}url(n){return this.booking.url=n,this}price(n){return this.booking.price=n,this}reviewUrl(n){return this.booking.reviewUrl=n,this}isExternalUrl(n){return this.booking.isExternalUrl=n,this}amenities(n){return this.booking.amenities=n,this}build(){return this.booking}}a(m,"BookingBuilder");const te=t.div.withConfig({componentId:"sc-1dl239n-0"})(["--border:1px solid ",";--spacing-y:","x;--spacing-x:","x;--light-color:",";--primary-font:",";--secondary-font:",";font-family:var(--secondary-font);font-weight:normal;"],({theme:e})=>e.color.divider.light,({theme:e})=>e.spacing.x3,({theme:e})=>e.spacing.x4,e=>e.theme.color.ink.muted,e=>e.theme.fontFamily.primaryFont,e=>e.theme.fontFamily.secondaryFont),re=t.div.withConfig({componentId:"sc-1dl239n-1"})(["padding:","px 0;border-top:var(--border);border-bottom:var(--border);@media ","{display:grid;grid-template-columns:1fr 40%;padding:","px 0;grid-gap:","px;}"],({theme:e})=>e.spacing.x3,s,({theme:e})=>e.spacing.x2,({theme:e})=>e.spacing.x4),oe=t.p.withConfig({componentId:"sc-1dl239n-2"})(["margin-top:0;margin-bottom:","px;@media ","{margin:0;}"],({theme:e})=>e.spacing.x3,s),ae=t.div.withConfig({componentId:"sc-1dl239n-3"})(["transform:rotate(",");transition:transform 0.2s linear;"],({$isOpen:e})=>e?"180deg":"0deg"),se=t.span.withConfig({componentId:"sc-1dl239n-4"})(["display:block;margin-bottom:","px;color:var(--light-color);font:18px/22px var(--secondary-font);@media ","{margin-bottom:","px;}"],({theme:e})=>e.spacing.x0_5,s,({theme:e})=>e.spacing.x1),ce=t.span.withConfig({componentId:"sc-1dl239n-5"})(["font:bold 32px/36px var(--primary-font);letter-spacing:-0.5px;"]),le=t.span.withConfig({componentId:"sc-1dl239n-6"})(["display:inline-block;margin-left:","px;font:16px/22px var(--secondary-font);"],({theme:e})=>e.spacing.x0_5),de=t.span.withConfig({componentId:"sc-1dl239n-7"})(["font:bold 18px/20px var(--primary-font);letter-spacing:-0.5px;"]),pe=t.p.withConfig({componentId:"sc-1dl239n-8"})(["margin:","px 0 0;color:var(--light-color);font:16px/22px var(--secondary-font);text-align:center;"],({theme:e})=>e.spacing.x1),me=t.div.withConfig({componentId:"sc-1dl239n-9"})(["display:flex;flex-wrap:nowrap;align-items:center;gap:","px;padding:","px 0;border-bottom:var(--border);color:",";font:18px/22px var(--secondary-font);"],({theme:e})=>e.spacing.x0_5,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.color.ink.base),ge=t.div.withConfig({componentId:"sc-1dl239n-10"})(["--spacing-v:","px;padding:var(--spacing-v) 0;@media ","{--spacing-v:","px;}"],({theme:e})=>e.spacing.x3,s,({theme:e})=>e.spacing.x4),ue=t.ul.withConfig({componentId:"sc-1dl239n-11"})(["display:grid;row-gap:","px;padding:0;margin:0;list-style:none;@media ","{grid-template-columns:1fr 1fr;}"],({theme:e})=>e.spacing.x4,s),he=t.li.withConfig({componentId:"sc-1dl239n-12"})([""]),xe=t.h2.withConfig({componentId:"sc-1dl239n-13"})(["display:flex;align-items:center;gap:","px;padding:10px 0;margin:0;margin-bottom:","px;font:bold 24px/28px var(--secondary-font);"],({theme:e})=>e.spacing.x1_5,({theme:e})=>e.spacing.x1_5),fe=t.ul.withConfig({componentId:"sc-1dl239n-14"})(["padding:0;padding-left:36px;margin:0;list-style:none;"]),be=t.li.withConfig({componentId:"sc-1dl239n-15"})(["margin-bottom:","px;color:",";font:18px/22px var(--secondary-font);"],({theme:e})=>e.spacing.x1,({theme:e})=>e.color.ink.base),ve=t.div.withConfig({componentId:"sc-1dl239n-16"})(["padding:","px;border-bottom:var(--border);text-align:center;"],({theme:e})=>e.spacing.x1_5),we=t(L).withConfig({componentId:"sc-1dl239n-17"})(["white-space:normal;svg{flex-shrink:0;}"]),ye="Please check hotel for more information on amenities",h=a(({id:e,name:n,url:r,isExternalUrl:T,reviewUrl:f,price:g,amenities:P})=>{const[b,U]=V.useState(!1);function D(){U(o=>!o)}return a(D,"onDropdownInteract"),i.jsxs(te,{children:[i.jsxs(re,{children:[i.jsxs(oe,{children:[i.jsx(se,{children:J}),g&&i.jsxs(i.Fragment,{children:[i.jsx(ce,{"data-testid":"price",children:g}),i.jsx(le,{children:K})]}),!g&&i.jsx(de,{"data-testid":"price-availability",children:Z})]}),i.jsxs("div",{children:[i.jsx(L,{as:"a",target:"_blank",rel:"noreferrer",size:W,variant:"primary",href:r,children:Q}),i.jsx(pe,{children:ee})]})]}),f&&i.jsx(ve,{children:i.jsx(we,{"data-testid":"read-more-button",forwardedAs:"a",href:f,variant:"tertiary",size:"small",...T&&{target:"_blank",rel:"noreferrer"},children:ne(n)})}),i.jsx(q,{id:e,isOpen:b,onInteract:D,trigger:i.jsxs(me,{children:[Y,i.jsx(ae,{$isOpen:b,children:i.jsx(H,{isCosy:!0,svg:X,isDisabled:!1})})]}),children:i.jsx(ge,{children:i.jsx(ue,{children:P.map(o=>i.jsxs(he,{children:[i.jsxs(xe,{children:[i.jsx(F,{svg:ie[o.ref]||E}),o.name,o.showTooltip&&i.jsx(M,{size:"base",children:ye})]}),i.jsx(fe,{children:o.items.map(v=>i.jsx(be,{children:v},v))})]},o.name))})})})]})},"Booking"),R=h;try{h.displayName="Booking",h.__docgenInfo={description:"",displayName:"Booking",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"string"}},reviewUrl:{defaultValue:null,description:"",name:"reviewUrl",required:!0,type:{name:"string"}},isExternalUrl:{defaultValue:null,description:"",name:"isExternalUrl",required:!0,type:{name:"boolean"}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},amenities:{defaultValue:null,description:"",name:"amenities",required:!0,type:{name:"Amenity[]"}}}}}catch{}const Ge={title:"Components/Booking",component:R},x=[new p().name("Internet").ref("internet").items(["alpha","beta","gamma"]).build(),new p().name("Health & Wellbeing").ref("health").showTooltip(!0).items(["apple","banana","carrot"]).build(),new p().name("Parking").ref("parking").items(["a","b"]).build()],Ie=new m().name("Star Hotel").price("£13.14").url("url").amenities(x).build(),c={render:R,args:Ie},ke=new m().name("Star Hotel").price("£13.14").url("url").reviewUrl("review-url").amenities(x).build(),l={args:ke},Ce=new m().name("Star Hotel").url("url").amenities(x).build(),d={args:Ce};var y,I,k;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: Booking,
  args: data
}`,...(k=(I=c.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var C,_,S;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: withReviewData
}`,...(S=(_=l.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var j,A,B;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: withoutPriceData
}`,...(B=(A=d.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const $e=["BookingWidget","WithReview","WithoutPrice"];export{c as BookingWidget,l as WithReview,d as WithoutPrice,$e as __namedExportsOrder,Ge as default};
//# sourceMappingURL=Booking.stories-37acf5d9.js.map
