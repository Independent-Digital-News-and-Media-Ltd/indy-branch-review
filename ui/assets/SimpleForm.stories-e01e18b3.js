import{j as r}from"./jsx-runtime-91e341d4.js";import{F as p}from"./Form-a1df12a8.js";import{T as d,S as o}from"./TestableForm-03424573.js";import{T as n}from"./TextInput-a4e27216.js";import{P as l}from"./PasswordInput-57644bf7.js";import{S as c}from"./SelectInput-282eef3d.js";import{C as u}from"./Checkbox-d8c394ba.js";import"./CheckboxWithDropdown-02a548b3.js";import"./ValidationHint-0b9d255c.js";import"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";import"./InputWrapper-a6db9af3.js";import"./warning-solid-24-62e98cc2.js";import"./styled-components.browser.esm-dd68fb2f.js";import"./Icon.hoc-787425e7.js";import"./Icon.constants-f71a83c2.js";import"./Symbols.hoc-d0e330fb.js";import"./index-17b0cd16.js";import"./index-6925154b.js";import"./Button-6cc3cb4d.js";import"./index-8d138fa4.js";import"./Button.constants-c6e6f0a7.js";import"./devices-1d39230d.js";import"./breakPoints-89c7d41a.js";import"./launch-outline-16-2a071c4c.js";import"./index.esm-d17145de.js";import"./LoadingEllipsis-859301b8.js";import"./IconButton-dda0da21.js";import"./eye-visible-solid-24-51ef0235.js";import"./chevron-down-solid-16-ecd33624.js";import"./tick-solid-16-20e5c3c2.js";import"./tick-solid-32-8cd2f25a.js";import"./ScreenReaderOnly-03556af7.js";import"./mixins-e8622e63.js";import"./Dropdown-2f1c0625.js";import"./tick-round-solid-12-8c368b0e.js";const h={onSubmit:i=>alert(`Submitted: ${JSON.stringify(i)}`),schema:new o({email:o.add("Email address").string().isEmail().required(),password:o.add("Password").string().hasMin(1,"digits").hasMin(6,"letters").required(),birthYear:o.add("Birth year").number().required(),terms:o.add("Privacy opt in").boolean().required()})},W={title:"Modules/Form",component:p,render:i=>r.jsx(d,{...i,children:({registerControlledInput:e})=>r.jsxs(r.Fragment,{children:[r.jsx(n,{type:"email",label:"Email address",helpText:"Add an email address",...e("email")}),r.jsx(l,{label:"Password",helpText:"Make it a good one",...e("password")}),r.jsx(c,{label:"Birth year",options:[{value:"1970",label:"1970"},{value:"1980",label:"1980"},{value:"1990",label:"1990"}],...e("birthYear")}),r.jsx(u,{label:"I accept the terms and conditions",...e("terms")})]})}),parameters:{docs:{description:{component:`This is a simple form, composed of the following components
and making use of the useIndyForm hook:
FormProvider, Form, TextInput, PasswordInput, SelectInput, Checkbox`}}}},t={args:h};var m,a,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const X=["Default"];export{t as Default,X as __namedExportsOrder,W as default};
//# sourceMappingURL=SimpleForm.stories-e01e18b3.js.map
