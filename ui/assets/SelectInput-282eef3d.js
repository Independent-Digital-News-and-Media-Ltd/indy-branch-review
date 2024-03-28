var I=Object.defineProperty;var u=(e,r)=>I(e,"name",{value:r,configurable:!0});import{j as t}from"./jsx-runtime-91e341d4.js";import{u as S}from"./index.esm-d17145de.js";import{B as x,F as b,I as w}from"./InputWrapper-a6db9af3.js";import{u as n}from"./styled-components.browser.esm-dd68fb2f.js";import{I as q}from"./Icon.hoc-787425e7.js";import{a as V}from"./Icon.constants-f71a83c2.js";import{S as F}from"./chevron-down-solid-16-ecd33624.js";const j=n(x).attrs({as:"select"}).withConfig({componentId:"sc-d2tt85-0"})(["appearance:none;"]),_=n(q).attrs({size:V}).withConfig({componentId:"sc-d2tt85-1"})(["flex-shrink:0;color:",";"],({theme:e})=>e.color.actionSubtleDark.base),D=n.div.withConfig({componentId:"sc-d2tt85-2"})(["display:flex;position:absolute;top:0;right:0;height:var(--input-height);align-items:center;justify-content:center;padding-right:","px;pointer-events:none;"],({theme:e})=>e.spacing.x2),a=u(({id:e,label:r,helpText:d,className:p,message:c,state:m=w.DEFAULT,required:f=!1,controlled:o=!0,options:h,defaultValue:i,...g})=>{const s=S();if(o&&!s)throw new Error("FormInput components should have FormProvider & Form from @indy/ui/Form as parents, unless the controlled={false} prop is set");const y=i!==void 0,v=o?s.register(e):{};return t.jsxs(b,{id:e,label:r,helpText:d,required:f,state:m,message:c,className:p,children:[t.jsxs(j,{id:e,defaultValue:i||"",...g,...v,children:[!y&&t.jsx("option",{value:"",disabled:!0,children:"Select"}),h.map(l=>t.jsx("option",{children:l.label},l.value))]}),t.jsx(D,{children:t.jsx(_,{svg:F})})]})},"SelectInput"),M=a;try{a.displayName="SelectInput",a.__docgenInfo={description:"",displayName:"SelectInput",props:{options:{defaultValue:null,description:"A list of options to display in the select",name:"options",required:!0,type:{name:"SelectOption[]"}},defaultValue:{defaultValue:null,description:`Style guide: If it is likely that pre-selecting an option will
save the majority of users time, then we should pre-select the
default option`,name:"defaultValue",required:!1,type:{name:"string | number"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"Style guide: Text fields should always have a label",name:"label",required:!0,type:{name:"string"}},helpText:{defaultValue:null,description:"Style guide: Input constraints can be displayed here e.g. for Expiry Date: MM/YY",name:"helpText",required:!1,type:{name:"string"}},message:{defaultValue:null,description:`When controlled={true}, the message that will display on error
Otherwise, the state must be manually set to InputState.ERROR`,name:"message",required:!1,type:{name:"string"}},state:{defaultValue:{value:"InputState.DEFAULT"},description:`The state of the input - defines border style, and whether to show
error messages`,name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"success"'},{value:'"waiting"'}]}},required:{defaultValue:{value:"false"},description:`Whether to display the asterisk indicating a required field
Note: This is purely a VISUAL indicator, and does not affect validation`,name:"required",required:!1,type:{name:"boolean"}},controlled:{defaultValue:{value:"true"},description:`Whether the input's validation (errors and state) are controlled by
react-hook-form (requiring use of FormProvider from
@indy /ui/Form)`,name:"controlled",required:!1,type:{name:"boolean"}}}}}catch{}export{M as S};
//# sourceMappingURL=SelectInput-282eef3d.js.map
