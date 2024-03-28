import{I as c}from"./InputWrapper-a6db9af3.js";import{T as g}from"./TextInput-a4e27216.js";import"./jsx-runtime-91e341d4.js";import"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";import"./warning-solid-24-62e98cc2.js";import"./styled-components.browser.esm-dd68fb2f.js";import"./Icon.hoc-787425e7.js";import"./Icon.constants-f71a83c2.js";import"./Symbols.hoc-d0e330fb.js";import"./index-17b0cd16.js";import"./index-6925154b.js";import"./index.esm-d17145de.js";import"./LoadingEllipsis-859301b8.js";const a={id:"name",label:"First name",helpText:"We will use this to address you",required:void 0,type:"text",state:"default",message:"There was an error",controlled:!1,pattern:{value:"^[A-Za-z0-9]+$",message:"Only letters and numbers are allowed"}},F={title:"Modules/Form/Inputs/Text Input",component:g,argTypes:{controlled:{table:{disable:!0}}}},e={args:a},r={args:{...a,disabled:!0,value:"I'm disabled"}},t={args:{...a,state:c.WAITING}};var s,o,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var p,d,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true,
    value: "I'm disabled"
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,n,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    state: InputState.WAITING
  }
}`,...(u=(n=t.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};const G=["Default","Disabled","Waiting"];export{e as Default,r as Disabled,t as Waiting,G as __namedExportsOrder,F as default};
//# sourceMappingURL=TextInput.stories-b94abf06.js.map
