var x=Object.defineProperty;var o=(e,r)=>x(e,"name",{value:r,configurable:!0});import{j as n}from"./jsx-runtime-91e341d4.js";import{S as h}from"./warning-solid-24-62e98cc2.js";import{u as s}from"./styled-components.browser.esm-dd68fb2f.js";import{I as b}from"./Icon.hoc-787425e7.js";const y=o(e=>`${e}-hint`,"hintId"),I=o(e=>`${e}-error`,"errorId"),$=o(e=>e.charAt(0).toUpperCase()+e.slice(1),"capitalise"),w={letters:new RegExp("[A-Za-z]","g"),digits:new RegExp("[0-9]","g"),uppercaseLetters:new RegExp("[A-Z]","g"),lowercaseLetters:new RegExp("[a-z]","g")},F=o((e,r)=>{if(!r)return e==null?void 0:e.length;const t=w[r];return(e.match(t)||[]).length},"count"),U=o(e=>typeof e=="string"?e.replace(/\s{2,}/g," ").trim():e||"","parseString"),E=o(async(e,r)=>{const t=e.fields.map(async a=>{const l=await e.validate(a,r[a],r)||[];if(l.length>0)return{[a]:l}});return(await Promise.all(t)).filter(Boolean).reduce((a,l)=>{const[g,f]=Object.entries(l)[0];return{...a,[g]:f}},{})},"getAllErrors"),V=o(e=>async r=>{const t=await E(e,r);return{values:r,errors:t}},"resolver");var i=(e=>(e.DEFAULT="default",e.ERROR="error",e.SUCCESS="success",e.WAITING="waiting",e))(i||{});const m=o((e,r,t)=>({inactive:{[i.DEFAULT]:`1px solid ${e.color.semiotic.inactive};`,[i.ERROR]:`2px solid ${e.color.semiotic.error}`,[i.SUCCESS]:`2px solid ${e.color.semiotic.success}`,[i.WAITING]:`2px solid ${e.color.semiotic.info}`},focused:{[i.DEFAULT]:`2px solid ${e.color.semiotic.info}`,[i.ERROR]:`2px solid ${e.color.semiotic.error}`,[i.SUCCESS]:`2px solid ${e.color.semiotic.info}`,[i.WAITING]:`2px solid ${e.color.semiotic.info}`}})[t][r],"getBorderStyle"),L=s.input.withConfig({componentId:"sc-10zubip-0"})(["display:block;width:100%;height:var(--input-height);box-sizing:border-box;padding-top:","px;padding-right:","px;padding-bottom:","px;padding-left:","px;border:none;border-radius:var(--border-radius);background-color:",";font:",";&:focus,&:focus-visible{border:none;outline:none;}&:disabled{background-color:",";color:",";opacity:1;-webkit-text-fill-color:",";}"],({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x2,({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x2,({theme:e})=>e.color.ink.inverted,({theme:e})=>e.textStyle.formInput.base,({theme:e})=>e.color.semiotic.disabled,({theme:e})=>e.color.ink.inverted,({theme:e})=>e.color.ink.inverted),v=s.div.withConfig({componentId:"sc-10zubip-1"})(["--input-height:","px;--border-radius:4px;align-items:center;margin-bottom:","px;color:",";font:",";"],({theme:e})=>e.dimension.btn.height,({theme:e})=>e.spacing.x1,({theme:e})=>e.color.ink.base,({theme:e})=>e.textStyle.formInput.base),R=s.label.withConfig({componentId:"sc-10zubip-2"})(["margin-bottom:0;font:",";"],({theme:e})=>e.textStyle.formInput.label),S=s.span.withConfig({componentId:"sc-10zubip-3"})(["margin-right:","px;color:",";"],({theme:e})=>e.spacing.x0_25,({theme:e})=>e.color.semiotic.error),C=s.p.withConfig({componentId:"sc-10zubip-4"})(["margin-top:","px;margin-bottom:0;font:",";"],({theme:e})=>e.spacing.x0_25,({theme:e})=>e.textStyle.formInput.helpText),u=s.div.withConfig({componentId:"sc-10zubip-5"})(["position:relative;width:100%;margin-top:","px;border-radius:var(--border-radius);outline:",";&:focus-within{border:none;outline:",";}"],({theme:e})=>e.spacing.x1,({theme:e,$state:r})=>m(e,r,"inactive"),({theme:e,$state:r})=>m(e,r,"focused")),k=s.div.withConfig({componentId:"sc-10zubip-6"})(["margin-top:","px;margin-bottom:","px;"],({theme:e})=>e.spacing.x0_5,({theme:e})=>e.spacing.x2),z=s.div.withConfig({componentId:"sc-10zubip-7"})(["display:flex;gap:","px;color:",";font:",";"],({theme:e})=>e.spacing.x0_5,e=>e.theme.color.semiotic.error,({theme:e})=>e.textStyle.formInput.error),T=s(b).withConfig({componentId:"sc-10zubip-8"})(["flex-shrink:0;"]),O=o(({id:e,label:r,helpText:t,className:c,message:p,state:d,required:a,children:l})=>n.jsxs(v,{className:c,children:[n.jsx(R,{htmlFor:e,children:r}),a&&n.jsx(S,{"aria-hidden":!0,children:"*"}),t&&n.jsx(C,{id:y(e),children:t}),n.jsx(u,{$state:d,children:l}),n.jsx(k,{"aria-live":"assertive",children:d===i.ERROR&&p&&n.jsxs(z,{children:[n.jsx(T,{svg:h,size:"small"}),n.jsx("span",{id:I(e),children:p})]})})]}),"FormInputWrapper");try{u.displayName="InputWrapper",u.__docgenInfo={description:"",displayName:"InputWrapper",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"Style guide: Text fields should always have a label",name:"label",required:!0,type:{name:"string"}},helpText:{defaultValue:null,description:"Style guide: Input constraints can be displayed here e.g. for Expiry Date: MM/YY",name:"helpText",required:!1,type:{name:"string"}},message:{defaultValue:null,description:`When controlled={true}, the message that will display on error
Otherwise, the state must be manually set to InputState.ERROR`,name:"message",required:!1,type:{name:"string"}},state:{defaultValue:null,description:`The state of the input - defines border style, and whether to show
error messages`,name:"state",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"success"'},{value:'"waiting"'}]}},required:{defaultValue:null,description:`Whether to display the asterisk indicating a required field
Note: This is purely a VISUAL indicator, and does not affect validation`,name:"required",required:!1,type:{name:"boolean"}},controlled:{defaultValue:null,description:`Whether the input's validation (errors and state) are controlled by
react-hook-form (requiring use of FormProvider from
@indy /ui/Form)`,name:"controlled",required:!1,type:{name:"boolean"}}}}}catch{}export{L as B,O as F,i as I,$ as a,F as c,I as e,m as g,y as h,U as p,V as r};
//# sourceMappingURL=InputWrapper-a6db9af3.js.map
