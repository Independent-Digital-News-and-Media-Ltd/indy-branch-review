import{j as s}from"./jsx-runtime-91e341d4.js";import{u as C}from"./styled-components.browser.esm-dd68fb2f.js";import{T as f,a as v,G as T,M as S}from"./MultiStepCard-69689f2c.js";import"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";import"./index-8d138fa4.js";import"./Button-6cc3cb4d.js";import"./Icon.hoc-787425e7.js";import"./Icon.constants-f71a83c2.js";import"./Symbols.hoc-d0e330fb.js";import"./index-17b0cd16.js";import"./index-6925154b.js";import"./Button.constants-c6e6f0a7.js";import"./devices-1d39230d.js";import"./breakPoints-89c7d41a.js";import"./launch-outline-16-2a071c4c.js";import"./StepCard-4a405f48.js";const k=C(S).withConfig({componentId:"sc-a5edjs-0"})(["",",","{opacity:1;}"],f,v),O={title:"Components/Multi-step Cards/Card",component:k},o={currentStep:"1/3",title:"Test title",description:"Test description",isCardActive:!1,children:"Child card content"},r={args:o},t={args:{...o,isCardActive:!0}},e={args:{...o,currentStep:"2/3",goBackToPreviousStep:s.jsx(T,{children:"Go back to step 1"})},render:g=>s.jsx(S,{...g})};var a,i,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: defaultArs
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,n,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultArs,
    isCardActive: true
  }
}`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var u,d,l;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...defaultArs,
    currentStep: '2/3',
    goBackToPreviousStep: <GoBackToPreviousStep>Go back to step 1</GoBackToPreviousStep>
  },
  render: (args: MultiStepCardProps) => <MultiStepCard {...args} />
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const R=["Default","Active","WithBackToPreviousStep"];export{t as Active,r as Default,e as WithBackToPreviousStep,R as __namedExportsOrder,O as default};
//# sourceMappingURL=MultiStepCard.stories-6314de51.js.map
