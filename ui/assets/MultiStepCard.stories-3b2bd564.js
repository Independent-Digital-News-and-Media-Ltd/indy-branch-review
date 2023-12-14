import{j as s}from"./jsx-runtime-91e341d4.js";import{s as f}from"./styled-components.browser.esm-e91624e3.js";import{T as v,a as C,G as T,M as S}from"./MultiStepCard-ab0069c3.js";import"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";import"./index-ed86a6de.js";import"./Button-d6f8d062.js";import"./Icon-685f1285.js";import"./index-17b0cd16.js";import"./index-6925154b.js";import"./Icon.hoc-8a144cc9.js";import"./Button.constants-9d7f672a.js";import"./devices-d44d55be.js";import"./breakPoints-e2ca7578.js";import"./launch-outline-16-d86d5c2b.js";const k=f(S).withConfig({componentId:"sc-a5edjs-0"})(["",",","{opacity:1;}"],v,C),I={title:"Components/MultiStepCard",component:k},o={currentStep:"1/3",title:"Test title",description:"Test description",isCardActive:!1,children:"Child card content"},r={args:o},t={args:{...o,isCardActive:!0}},e={args:{...o,currentStep:"2/3",goBackToPreviousStep:s.jsx(T,{children:"Go back to step 1"})},render:g=>s.jsx(S,{...g})};var a,i,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: defaultArs
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,n,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultArs,
    isCardActive: true
  }
}`,...(d=(n=t.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var m,u,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultArs,
    currentStep: '2/3',
    goBackToPreviousStep: <GoBackToPreviousStep>Go back to step 1</GoBackToPreviousStep>
  },
  render: (args: MultiStepCardProps) => <MultiStepCard {...args} />
}`,...(l=(u=e.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const L=["Default","Active","WithBackToPreviousStep"];export{t as Active,r as Default,e as WithBackToPreviousStep,L as __namedExportsOrder,I as default};
//# sourceMappingURL=MultiStepCard.stories-3b2bd564.js.map
