import{I as c}from"./InputWrapper-9c7d1173.js";import{T as g}from"./TextInput-146ae76c.js";import"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";import"./jsx-runtime-91e341d4.js";import"./warning-solid-24-62e98cc2.js";import"./styled-components.browser.esm-dd68fb2f.js";import"./Icon.hoc-1b9291aa.js";import"./Symbols.hoc-fb0f215f.js";import"./index-17b0cd16.js";import"./index-6925154b.js";import"./LoadingEllipsis-859301b8.js";const a={id:"name",label:"First name",helpText:"We will use this to address you",required:void 0,type:"text",state:"default",message:"There was an error",controlled:!1,pattern:{value:"^[A-Za-z0-9]+$",message:"Only letters and numbers are allowed"}},w={title:"Modules/Form/Base/Text Input",component:g,argTypes:{controlled:{table:{disable:!0}}}},e={args:a},r={args:{...a,disabled:!0,value:"I'm disabled"}},t={args:{...a,state:c.WAITING}};var s,o,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(d=(o=e.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var l,i,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true,
    value: "I'm disabled"
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,n,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    state: InputState.WAITING
  }
}`,...(u=(n=t.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};const _=["Default","Disabled","Waiting"];export{e as Default,r as Disabled,t as Waiting,_ as __namedExportsOrder,w as default};
//# sourceMappingURL=TextInput.stories-54f3c874.js.map