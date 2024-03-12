import{j as s}from"./jsx-runtime-91e341d4.js";import{u as C}from"./styled-components.browser.esm-dd68fb2f.js";import{T as f,a as v,G as T,M as S}from"./MultiStepCard-912090ac.js";import"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";import"./index-8d138fa4.js";import"./Button-12c95ded.js";import"./Icon.hoc-1b9291aa.js";import"./Symbols.hoc-fb0f215f.js";import"./index-17b0cd16.js";import"./index-6925154b.js";import"./Button.constants-c6e6f0a7.js";import"./devices-f8e8a791.js";import"./launch-outline-16-2a071c4c.js";import"./StepCard-18611ab6.js";const k=C(S).withConfig({componentId:"sc-a5edjs-0"})(["",",","{opacity:1;}"],f,v),I={title:"Components/Multi-step Cards/Card",component:k},o={currentStep:"1/3",title:"Test title",description:"Test description",isCardActive:!1,children:"Child card content"},r={args:o},t={args:{...o,isCardActive:!0}},e={args:{...o,currentStep:"2/3",goBackToPreviousStep:s.jsx(T,{children:"Go back to step 1"})},render:g=>s.jsx(S,{...g})};var a,i,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: defaultArs
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,n,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultArs,
    isCardActive: true
  }
}`,...(u=(n=t.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};var d,m,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...defaultArs,
    currentStep: '2/3',
    goBackToPreviousStep: <GoBackToPreviousStep>Go back to step 1</GoBackToPreviousStep>
  },
  render: (args: MultiStepCardProps) => <MultiStepCard {...args} />
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const L=["Default","Active","WithBackToPreviousStep"];export{t as Active,r as Default,e as WithBackToPreviousStep,L as __namedExportsOrder,I as default};
//# sourceMappingURL=MultiStepCard.stories-6cf6f164.js.map
