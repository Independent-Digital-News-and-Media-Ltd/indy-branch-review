import{B as R}from"./Button-6cc3cb4d.js";import{c as A,b as _,a as b,B as N,d as g,f as y,e as B,g as U}from"./Button.constants-c6e6f0a7.js";import"./jsx-runtime-91e341d4.js";import"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";import"./index-8d138fa4.js";import"./Icon.hoc-787425e7.js";import"./Icon.constants-f71a83c2.js";import"./styled-components.browser.esm-dd68fb2f.js";import"./Symbols.hoc-d0e330fb.js";import"./index-17b0cd16.js";import"./index-6925154b.js";import"./devices-1d39230d.js";import"./breakPoints-89c7d41a.js";import"./launch-outline-16-2a071c4c.js";const L={title:"Elements/Button",component:R,argTypes:{props:{table:{disable:!0}},children:{description:"Content of the button",defaultValue:"Button",type:{name:"string",required:!0},control:{type:"text"}},variant:{description:"Style of the button",control:"radio",options:[A,_,b,N]},as:{description:"Base element of the button",control:"inline-radio",options:[g,y]},size:{description:"Whether the width is dictated by the content or full width",control:"inline-radio",options:[B,U]},disabled:{description:"Whether or not the button is disabled",control:"boolean"},isExternal:{if:{arg:"as",neq:"button"},description:"Whether or not the button links to an external target",control:"boolean"},href:{if:{arg:"as",neq:"button"},description:"Whether or not the button links to an external target",control:"string"},type:{if:{arg:"as",eq:"button"},description:"Whether or not the button links to an external target",control:"radio",options:["button","submit","reset"]}}},t={args:{children:"Primary button",variant:A}},r={args:{children:"Secondary button",variant:_}},e={args:{children:"Tertiary button",variant:b}},o={args:{children:"Uncapitalised button",variant:N}};var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: 'Primary button',
    variant: BUTTON_VARIANT_PRIMARY
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var s,c,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: 'Secondary button',
    variant: BUTTON_VARIANT_SECONDARY
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,l,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Tertiary button',
    variant: BUTTON_VARIANT_TERTIARY
  }
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,T,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Uncapitalised button',
    variant: BUTTON_VARIANT_PRIMARY_UNCAP
  }
}`,...(h=(T=o.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};const w=["Primary","Secondary","Tertiary","PrimaryUncapitalised"];export{t as Primary,o as PrimaryUncapitalised,r as Secondary,e as Tertiary,w as __namedExportsOrder,L as default};
//# sourceMappingURL=Button.stories-351fcb71.js.map
