var h=Object.defineProperty;var s=(e,i)=>h(e,"name",{value:i,configurable:!0});import{j as t}from"./jsx-runtime-91e341d4.js";import{u as r}from"./styled-components.browser.esm-dd68fb2f.js";import{M as b}from"./MediaPlusCaption-29f1e828.js";import{I as v}from"./Image-388cf5e5.js";import{l as n}from"./devices-1d39230d.js";import"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";import"./breakPoints-89c7d41a.js";const I=r.div.withConfig({componentId:"sc-1032byu-0"})(["margin-bottom:","px;"],({theme:e})=>e.spacing.x3),_=r.ol.withConfig({componentId:"sc-1032byu-1"})(["--gap:","px;--cols:1;--total-gap:calc(var(--gap) * (var(--cols) - 1));--item-width:calc((100% - var(--total-gap)) / var(--cols));display:flex;flex-wrap:wrap;gap:var(--gap);padding:0;margin:","px 0 0;counter-reset:list-counter;list-style:none;@media ","{--cols:3;}> li{--margin-y:","px;--margin-x:","px;--counter-size:32px;position:relative;flex:0 1 var(--item-width);padding:0;margin:0;background-color:",";counter-increment:list-counter;&::before{--counter-color:",";display:flex;position:absolute;top:var(--margin-x);left:var(--margin-x);width:var(--counter-size);height:var(--counter-size);align-items:center;justify-content:center;border:1px solid var(--counter-color);border-radius:50%;color:var(--counter-color);content:counter(list-counter);font:bold 28px ",";}@media ","{--margin-x:","px;}}"],({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x1,n,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.color.canvas.secondary,({theme:e})=>e.color.actionBrand.base,({theme:e})=>e.fontFamily.primaryFont,n,({theme:e})=>e.spacing.x2),M=r.div.withConfig({componentId:"sc-1032byu-2"})(["--line-height:20px;margin:var(--margin-y) var(--margin-x) 0;"]),P=r.h3.withConfig({componentId:"sc-1032byu-3"})(["--margin-bottom:","px;margin:0 0 var(--margin-bottom) calc(var(--margin-y) + var(--counter-size));color:",";font:bold "," / var(--line-height) ",";@media ","{--margin-bottom:","px;display:flex;min-height:calc(var(--line-height) * 2);align-items:center;}"],({theme:e})=>e.spacing.x0_5,({theme:e})=>e.color.ink.base,({theme:e})=>e.fontSize.base,({theme:e})=>e.fontFamily.secondaryFont,n,({theme:e})=>e.spacing.x1),j=r.p.withConfig({componentId:"sc-1032byu-4"})(["margin:0 0 var(--margin-y) calc(var(--margin-x) + var(--counter-size));color:",";font:normal "," / var(--line-height) ",";@media ","{margin-left:0;}"],({theme:e})=>e.color.ink.muted,({theme:e})=>e.fontSize.base,({theme:e})=>e.fontFamily.secondaryFont,n),c=s(({media:e,items:i})=>!e||(i==null?void 0:i.length)!==3?null:t.jsxs(I,{children:[e,t.jsx(_,{children:i.map(({title:x,body:y},f)=>t.jsx("li",{children:t.jsxs(M,{children:[t.jsx(P,{children:x}),t.jsx(j,{dangerouslySetInnerHTML:{__html:y}})]})},f))})]}),"MediaPlusList"),w=c;try{c.displayName="MediaPlusList",c.__docgenInfo={description:"",displayName:"MediaPlusList",props:{media:{defaultValue:null,description:"",name:"media",required:!0,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Item[]"}}}}}catch{}const S=r(v).withConfig({componentId:"sc-1bpqlwy-0"})(["aspect-ratio:3 / 2;object-fit:cover;"]),a=s(()=>t.jsx(b,{caption:"Placeholder Image",children:t.jsx(S,{})}),"Media"),C={media:t.jsx(a,{}),items:[{title:"Porttitor eget dolor morbi non arcu risus",body:"Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor."},{title:"Leo duis ut diam",body:"Integer eget aliquet nibh praesent tristique. Malesuada proin libero nunc consequat interdum varius. Feugiat scelerisque varius morbi enim nunc. Odio tempor orci dapibus ultrices in iaculis nunc sed."},{title:"Facilisis magna etiam",body:"Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Nisl pretium fusce id velit ut tortor pretium."}]},B={title:"Components/Media Plus List",component:w,argTypes:{media:{description:"Media",control:{disable:!0}},items:{description:"Items",control:{type:"object"}}}},o={args:C};var l,d,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`() => <MediaPlusPaddedCaption caption="Placeholder Image">
    <StyledImage />
  </MediaPlusPaddedCaption>`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};a.__docgenInfo={description:"",methods:[],displayName:"Media"};const D=["Media","Default"];export{o as Default,a as Media,D as __namedExportsOrder,B as default};
//# sourceMappingURL=MediaPlusList.stories-c29f9575.js.map
