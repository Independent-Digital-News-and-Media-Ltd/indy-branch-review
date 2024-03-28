var v=Object.defineProperty;var d=(a,i)=>v(a,"name",{value:i,configurable:!0});import{j as t}from"./jsx-runtime-91e341d4.js";import{c as h}from"./index-8d138fa4.js";import{r as y}from"./index-b56a0300.js";import{u as e}from"./styled-components.browser.esm-dd68fb2f.js";import{B as C}from"./Button-6cc3cb4d.js";import{a as S}from"./Button.constants-c6e6f0a7.js";import{S as _}from"./StepCard-4a405f48.js";import{t as r,l as k,a as I}from"./devices-1d39230d.js";const o="is-active",n=e.span.attrs({"aria-current":"step"}).withConfig({componentId:"sc-1ibkg6r-0"})(["display:block;margin-bottom:var(--spacing);color:",";font:bold 14px / var(--card-step-lh) ",";letter-spacing:2px;text-transform:uppercase;."," &{color:",";}@media ","{font-size:16px;line-height:20px;}@media ","{font-size:18px;line-height:22px;}"],({theme:a})=>a.color.ink.muted,({theme:a})=>a.fontFamily.secondaryFont,o,({theme:a})=>a.color.ink.base,r,k),p=e.h2.withConfig({componentId:"sc-1ibkg6r-1"})(["margin:0 0 var(--spacing);font:bold 20px/24px ",";@media ","{font-size:22px;line-height:26px;}"],({theme:a})=>a.fontFamily.secondaryFont,r),w=e(_).withConfig({componentId:"sc-1ibkg6r-2"})(["--active-border-color:",";--active-border:2px solid var(--active-border-color);--box-shadow:0px -4px 18px 0px ",";position:relative;pointer-events:none;transition:max-height var( --card-transition,"," );",",","{opacity:0;}&.","{border-top:var(--active-border);box-shadow:var(--box-shadow);pointer-events:all;",",","{opacity:1;}@media ","{border-right:var(--active-border);border-left:var(--active-border);}}"],({theme:a})=>a.color.primary.base,({theme:a})=>a.color.shadow.dark,({theme:a})=>a.transition.onboardingJourneyWrapper,p,n,o,p,n,r),T=e.div.withConfig({componentId:"sc-1ibkg6r-3"})(["padding:","px ","px ","px;@media ","{padding-right:","px;padding-left:","px;}"],({theme:a})=>a.spacing.x2,({theme:a})=>a.spacing.x1_5,({theme:a})=>a.spacing.x3,I,({theme:a})=>a.spacing.x2,({theme:a})=>a.spacing.x2),j=e.div.withConfig({componentId:"sc-1ibkg6r-4"})(["--spacing:","px;margin-bottom:","px;text-align:center;"],({theme:a})=>a.spacing.x1,({theme:a})=>a.spacing.x3+a.spacing.x0_5),A=e.p.withConfig({componentId:"sc-1ibkg6r-5"})(["margin:0;font:normal 16px/20px ",";"],({theme:a})=>a.fontFamily.secondaryFont),W=e(C).attrs({variant:S}).withConfig({componentId:"sc-1ibkg6r-6"})(["--top-padding:","px;display:block;position:absolute;top:calc( var(--card-top-padding,","px) - var( --top-padding ) );left:50%;color:",";pointer-events:all;text-transform:capitalize;transform:translateX(-50%);white-space:nowrap;&:hover{color:",";}."," &{display:none;}@media ","{margin-top:var(--additional-inactive-card-padding-y);}"],({theme:a})=>a.spacing.x1_5,({theme:a})=>a.spacing.x2,({theme:a})=>a.color.primary.base,({theme:a})=>a.color.actionBrand.alt,o,r),l=y.forwardRef(d(function({goBackToPreviousStep:i,currentStep:s,title:m,description:c,children:g,className:x,isCardActive:u,...f},b){return t.jsx(w,{className:h(x,{[o]:u}),ref:b,...f,children:t.jsxs(T,{children:[i,t.jsxs(j,{children:[s&&t.jsx(n,{children:s}),t.jsx(p,{dangerouslySetInnerHTML:{__html:m}}),c&&t.jsx(A,{children:c})]}),g]})})},"MultiStepCard2"));try{l.displayName="MultiStepCard",l.__docgenInfo={description:"",displayName:"MultiStepCard",props:{currentStep:{defaultValue:null,description:"",name:"currentStep",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},goBackToPreviousStep:{defaultValue:null,description:"",name:"goBackToPreviousStep",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isCardActive:{defaultValue:null,description:"",name:"isCardActive",required:!1,type:{name:"boolean"}}}}}catch{}export{W as G,T as I,l as M,j as S,n as T,p as a};
//# sourceMappingURL=MultiStepCard-69689f2c.js.map
