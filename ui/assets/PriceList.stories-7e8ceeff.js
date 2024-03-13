var X=Object.defineProperty;var s=(e,a)=>X(e,"name",{value:a,configurable:!0});import{j as t}from"./jsx-runtime-91e341d4.js";import{u as i}from"./styled-components.browser.esm-dd68fb2f.js";import{I as T}from"./Icon.hoc-1b9291aa.js";import{e as g,d as W}from"./Symbols.hoc-fb0f215f.js";import{t as E,l as q}from"./devices-f8e8a791.js";import{S as D,j as M,k as V,l as H,m as N,n as U,o as z,p as F,q as R,r as Z}from"./wine-outline-24-82352c2f.js";import{S as $}from"./bed-outline-24-eec1dd7f.js";import{S as G}from"./sun-cream-outline-24-385d833d.js";import"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";import"./index-17b0cd16.js";import"./index-6925154b.js";const J=i.div.withConfig({componentId:"sc-2kkcl-0"})(["padding:","px;background-color:",";"],({theme:e})=>e.spacing.x2,({theme:e})=>e.color.canvas.secondary),K=i.h2.withConfig({componentId:"sc-2kkcl-1"})(["margin:0;font:",";"],({theme:e})=>e.textStyle.body.h2),Q=i.div.withConfig({componentId:"sc-2kkcl-2"})(["margin:","px 0 ","px;font:",";"],({theme:e})=>e.spacing.x0_5,({theme:e})=>e.spacing.x2,({theme:e})=>e.textStyle.priceList.updated),Y=i.ul.withConfig({componentId:"sc-2kkcl-3"})(["--min-column-width:140px;--gap:9px;display:grid;gap:var(--gap);grid-template-columns:repeat(2,1fr);padding:0;margin:0 auto;list-style:none;@media ","{grid-template-columns:repeat(3,1fr);}@media ","{grid-template-columns:repeat( auto-fit,minmax(var(--min-column-width),1fr) );}"],E,q),ee=i.li.withConfig({componentId:"sc-2kkcl-4"})(["display:flex;flex-direction:column;padding:","px;border-radius:6px;background-color:",";"],({theme:e})=>e.spacing.x2,({theme:e})=>e.color.canvas.base),te=i.div.withConfig({componentId:"sc-2kkcl-5"})(["width:","px;height:","px;padding:","px;margin-bottom:","px;border-radius:50%;background-color:",";"],g,g,({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x1,({theme:e})=>e.color.canvas.brand),re=i(T).attrs({size:W}).withConfig({componentId:"sc-2kkcl-6"})([""]),ie=i.div.withConfig({componentId:"sc-2kkcl-7"})(["flex:1;margin-bottom:","px;color:",";font:",";"],({theme:e})=>e.spacing.x1_5,({theme:e})=>e.color.ink.base,({theme:e})=>e.textStyle.priceList.action),oe=i.div.withConfig({componentId:"sc-2kkcl-8"})(["display:flex;width:fit-content;padding:2px 6px;border-radius:6px;background-color:",";color:",";font:",";text-align:center;white-space:nowrap;"],({theme:e})=>e.color.dark.canvas.base,({theme:e})=>e.color.dark.ink.base,({theme:e})=>e.textStyle.priceList.price),ae=s(({price:e})=>t.jsx(oe,{children:e}),"PriceItem"),se=s(()=>t.jsx("strong",{children:"—"}),"Dash"),m=s(({title:e,updated:a,items:o})=>!Array.isArray(o)||!(o!=null&&o.length)?null:t.jsxs(J,{children:[e&&t.jsx(K,{children:e}),a&&t.jsxs(Q,{children:["Prices last updated: ",a]}),t.jsx(Y,{children:o.map(({action:O,price:u,icon:P},B)=>t.jsxs(ee,{children:[t.jsx(te,{children:t.jsx(re,{svg:P})}),t.jsx(ie,{children:O}),u?t.jsx(ae,{price:u}):t.jsx(se,{})]},B))})]}),"PriceList"),ne=m;try{m.displayName="PriceList",m.__docgenInfo={description:"",displayName:"PriceList",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},updated:{defaultValue:null,description:"",name:"updated",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"PriceListItem[]"}}}}}catch{}const r={items:[{icon:D,action:"Taxi (1km)",price:"£1.00"},{icon:M,action:"One-way ticket on local transport",price:"£1.00"},{icon:V,action:"Meal at a restaurant (Medium cost)",price:"£10.00"},{icon:H,action:"Bar - Beer 0.5L",price:"£2.00"},{icon:N,action:"Shop - Bottle of Wine 0.75L",price:"£5.00"},{icon:U,action:"Cafe - Cappuccino",price:"£2.00"},{icon:z,action:"Beach - Sunbed & Umbrella",price:"£5.00"},{icon:G,action:"Shop - Suncream 0.2L",price:"£5.00"},{icon:F,action:"Shop - Water 1L",price:"£1.00"},{icon:R,action:"Petrol 1L",price:"£1.00"},{icon:Z,action:"Shop - Loaf of Bread ",price:"£1.00"},{icon:$,action:"Hotel (Mid-range)",price:"£50.00"}]},ve={title:"Components/Price List",component:ne,argTypes:{items:{description:"Items",control:{type:"object"}}}},n={args:r},c={args:{...r,items:r.items.slice(0,6)}},l={args:{...r,items:r.items.slice(0,5)}},p={args:{...r,items:r.items.slice(0,4)}},d={args:{...r,items:r.items.slice(0,3)}};var f,x,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(S=(x=n.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var h,y,k;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    items: defaultArgs.items.slice(0, 6)
  }
}`,...(k=(y=c.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var v,I,b;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    items: defaultArgs.items.slice(0, 5)
  }
}`,...(b=(I=l.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var L,j,w;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    items: defaultArgs.items.slice(0, 4)
  }
}`,...(w=(j=p.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var A,C,_;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    items: defaultArgs.items.slice(0, 3)
  }
}`,...(_=(C=d.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};const Ie=["Default","X6","X5","X4","X3"];export{n as Default,d as X3,p as X4,l as X5,c as X6,Ie as __namedExportsOrder,ve as default};
//# sourceMappingURL=PriceList.stories-7e8ceeff.js.map