var _=Object.defineProperty;var n=(e,o)=>_(e,"name",{value:o,configurable:!0});import{j as r}from"./jsx-runtime-91e341d4.js";import{r as v}from"./index-b56a0300.js";import{g as T,I as i,B as q,b as S,d as V}from"./InputWrapper-683e2266.js";import{u as d}from"./styled-components.browser.esm-dd68fb2f.js";import{L as A}from"./LoadingEllipsis-859301b8.js";const C=d(q).withConfig({componentId:"sc-1vpezd8-0"})(["",""],({theme:e,$hasButton:o})=>o?`padding-right: ${e.dimension.btn.height}px`:""),D=d.div.withConfig({componentId:"sc-1vpezd8-1"})(["position:absolute;top:0;right:0;border-radius:var(--border-radius);outline:none;&:focus-within{outline:",";}"],({theme:e})=>T(e,i.DEFAULT,"focused")),h={Enter:"Enter",Space:" ",Tab:"Tab"},B={Left:0},u=n(e=>({onMouseDown:n(t=>{t.preventDefault(),t.button===B.Left&&e()},"onMouseDown"),onKeyDown:n(t=>{(t.key===h.Enter||t.key===h.Space)&&(t.preventDefault(),e())},"onKeyDown")}),"useInputButton");try{u.displayName="useInputButton",u.__docgenInfo={description:"",displayName:"useInputButton",props:{}}}catch{}const F=d.div.withConfig({componentId:"sc-1lpmueu-0"})(["position:absolute;top:50%;right:","px;transform:translateY(-50%);"],({theme:e})=>e.spacing.x2),l=n(({id:e,label:o,helpText:p,className:t,message:y,type:g="text",state:s,button:a,buttonAction:c,controlled:m=!0,required:b=!1,...I})=>{const f=S();if(m&&!f)throw new Error("FormInputs should be wrapped by a FormProvider from @indy/ui/Form, unless the controlled={false} prop is set");const x=m?f.register(e):{},E=u(n(()=>{c&&c()},"onAction")),w=n(()=>a?v.cloneElement(a,E):null,"createInputButton");return r.jsxs(V,{id:e,label:o,helpText:p,required:b,state:s,message:y,className:t,children:[r.jsx(C,{id:e,type:g,$hasButton:!!a,...I,...x}),s===i.WAITING&&r.jsx(F,{children:r.jsx(A,{})}),a&&s!==i.WAITING&&r.jsx(D,{children:w()})]})},"TextInput"),O=l;try{l.displayName="TextInput",l.__docgenInfo={description:"",displayName:"TextInput",props:{button:{defaultValue:null,description:`A button that renders inside of the input. This button should not include
an onClick event - the action should be passed as a buttonAction instead`,name:"button",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},buttonAction:{defaultValue:null,description:`An action that is to be performed onClick or on Space/Enter keypress
and will be optimised for accessibility`,name:"buttonAction",required:!1,type:{name:"VoidFunction"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"Style guide: Text fields should always have a label",name:"label",required:!0,type:{name:"string"}},helpText:{defaultValue:null,description:"Style guide: Input constraints can be displayed here e.g. for Expiry Date: MM/YY",name:"helpText",required:!1,type:{name:"string"}},message:{defaultValue:null,description:`When controlled={true}, the message that will display on error
Otherwise, the state must be manually set to InputState.ERROR`,name:"message",required:!1,type:{name:"string"}},state:{defaultValue:null,description:`The state of the input - defines border style, and whether to show
error messages`,name:"state",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"success"'},{value:'"waiting"'}]}},required:{defaultValue:{value:"false"},description:`Whether to display the asterisk indicating a required field
Note: This is purely a VISUAL indicator, and does not affect validation`,name:"required",required:!1,type:{name:"boolean"}},controlled:{defaultValue:{value:"true"},description:`Whether the input's validation (errors and state) are controlled by
react-hook-form (requiring use of FormProvider from
@indy /ui/Form)`,name:"controlled",required:!1,type:{name:"boolean"}}}}}catch{}export{O as T};
//# sourceMappingURL=TextInput-0f4245e0.js.map
