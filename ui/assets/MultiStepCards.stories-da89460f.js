var q=Object.defineProperty;var l=(e,i)=>q(e,"name",{value:i,configurable:!0});import{j as a}from"./jsx-runtime-91e341d4.js";import{u as g}from"./styled-components.browser.esm-dd68fb2f.js";import{I as j,S as I,M as w,T as N,a as A}from"./MultiStepCard-69689f2c.js";import{r as t}from"./index-b56a0300.js";import{t as R}from"./devices-1d39230d.js";import"./index-8d138fa4.js";import"./Button-6cc3cb4d.js";import"./Icon.hoc-787425e7.js";import"./Icon.constants-f71a83c2.js";import"./Symbols.hoc-d0e330fb.js";import"./index-17b0cd16.js";import"./index-6925154b.js";import"./Button.constants-c6e6f0a7.js";import"./launch-outline-16-2a071c4c.js";import"./StepCard-4a405f48.js";import"./_commonjsHelpers-c38d1a10.js";import"./breakPoints-89c7d41a.js";g(w).withConfig({componentId:"sc-1c7yn31-0"})(["","{padding-right:","px;padding-left:","px;}","{margin-bottom:","px;}"],j,({theme:e})=>e.spacing.x2,({theme:e})=>e.spacing.x2,I,({theme:e})=>e.spacing.x3);try{MultiStepCardWithExtraSpacing.displayName="MultiStepCardWithExtraSpacing",MultiStepCardWithExtraSpacing.__docgenInfo={description:"",displayName:"MultiStepCardWithExtraSpacing",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const n=t.forwardRef(l(function({totalSteps:i,myStep:p,isCardActive:r},d){return a.jsx(w,{ref:d,currentStep:`${p}/${i}`,title:"Test title",description:"Test description",isCardActive:r,children:"Child card content"})},"MultiStepCardWithData2"));try{n.displayName="MultiStepCardWithData",n.__docgenInfo={description:"",displayName:"MultiStepCardWithData",props:{totalSteps:{defaultValue:null,description:"",name:"totalSteps",required:!1,type:{name:"number"}},currentStep:{defaultValue:null,description:"",name:"currentStep",required:!1,type:{name:"string"}},myStep:{defaultValue:null,description:"",name:"myStep",required:!1,type:{name:"number"}},isCardActive:{defaultValue:null,description:"",name:"isCardActive",required:!1,type:{name:"boolean"}},handleCurrentStepUpdate:{defaultValue:null,description:"",name:"handleCurrentStepUpdate",required:!1,type:{name:"((targetStep: number) => unknown)"}}}}}catch{}const f=l((e,i)=>{const p=e.current,r=i.current;p&&r.length&&r.forEach((d,s)=>{p.style.setProperty(`--card-${s+1}-height`,`${d.scrollHeight}px`)})},"updateChildCardHeights"),$=g.div.withConfig({componentId:"sc-eq47xq-0"})(["--card-inactive-top-position:calc( (var(--card-top-padding) * 2) + var(--card-step-lh) );--card-top-padding:","px;--card-step-lh:18px;--card-transition:",";position:relative;overflow:hidden;max-width:","px;box-sizing:border-box;margin:0 auto;@media ","{--additional-inactive-card-padding-y:","px;--card-inactive-top-position:calc( (var(--card-top-padding) * 2) + (var(--additional-inactive-card-padding-y) * 2) + var(--card-step-lh) );padding:0 ","px 0;}"],({theme:e})=>e.spacing.x2,({theme:e})=>e.transition.onboardingJourneyWrapper,({theme:e})=>e.dimension.pageWidth.laptop-e.spacing.x4,R,({theme:e})=>e.spacing.x0_5,({theme:e})=>e.spacing.x1_5),S=l(({initialStepOverride:e=1,children:i,className:p})=>{const[r,d]=t.useState(e),s=t.useRef(null),o=t.useRef([]),E=t.useCallback(m=>d(m),[]),C=t.useMemo(()=>i.filter(Boolean),[i]);return t.useEffect(()=>(window.addEventListener("resize",()=>f(s,o)),()=>{window.removeEventListener("resize",()=>f(s,o))}),[]),t.useEffect(()=>{window.scrollTo(0,0),f(s,o)},[r]),a.jsx($,{ref:s,className:p,children:t.Children.map(C,(m,x)=>{const h=x+1;return t.cloneElement(m,{ref:T=>{o.current[x]=T},totalSteps:C.length,currentStep:r,myStep:h,myTabIndex:h===r?0:-1,isCardActive:r===h,handleCurrentStepUpdate:E})})})},"MultiStepCards"),D=S;try{S.displayName="MultiStepCards",S.__docgenInfo={description:"",displayName:"MultiStepCards",props:{initialStepOverride:{defaultValue:{value:"1"},description:"",name:"initialStepOverride",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const re={title:"Components/Multi-step Cards",component:D},V=g(D).withConfig({componentId:"sc-1ex4p9-0"})(["max-height:unset;",",","{opacity:1;}"],N,A),c={render:()=>a.jsxs(V,{children:[a.jsx(n,{}),a.jsx(n,{})]})},u={render:()=>a.jsxs(V,{children:[a.jsx(n,{}),a.jsx(n,{}),a.jsx(n,{})]})};var y,_,M;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <MultiStepCardsWithVisibleDetails>
      <MultiStepCardWithData />
      <MultiStepCardWithData />
    </MultiStepCardsWithVisibleDetails>
}`,...(M=(_=c.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var W,v,b;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <MultiStepCardsWithVisibleDetails>
      <MultiStepCardWithData />
      <MultiStepCardWithData />
      <MultiStepCardWithData />
    </MultiStepCardsWithVisibleDetails>
}`,...(b=(v=u.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const ae=["Default","ThreeCards"];export{c as Default,u as ThreeCards,ae as __namedExportsOrder,re as default};
//# sourceMappingURL=MultiStepCards.stories-da89460f.js.map