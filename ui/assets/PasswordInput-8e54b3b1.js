var i=Object.defineProperty;var a=(t,e)=>i(t,"name",{value:e,configurable:!0});import{j as s}from"./jsx-runtime-91e341d4.js";import{r as d}from"./index-b56a0300.js";import{I as u}from"./IconButton-dda0da21.js";import{S as p,b as m}from"./eye-visible-solid-24-51ef0235.js";import{T as c}from"./TextInput-7432ede3.js";const r=a(t=>{const[e,o]=d.useState(!1),n=a(()=>{o(l=>!l)},"toggleShowPassword");return s.jsx(c,{type:e?"text":"password",buttonAction:n,button:s.jsx(u,{svg:e?p:m,"aria-label":e?"Hide password":"Show password"}),...t})},"PasswordInput"),S=r;try{r.displayName="PasswordInput",r.__docgenInfo={description:"",displayName:"PasswordInput",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"Style guide: Text fields should always have a label",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:null,description:`Whether to display the asterisk indicating a required field
Note: This is purely a VISUAL indicator, and does not affect validation`,name:"required",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:`The state of the input - defines border style, and whether to show
error messages`,name:"state",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"success"'},{value:'"waiting"'}]}},helpText:{defaultValue:null,description:"Style guide: Input constraints can be displayed here e.g. for Expiry Date: MM/YY",name:"helpText",required:!1,type:{name:"string"}},message:{defaultValue:null,description:`When controlled={true}, the message that will display on error
Otherwise, the state must be manually set to InputState.ERROR`,name:"message",required:!1,type:{name:"string"}},controlled:{defaultValue:null,description:`Whether the input's validation (errors and state) are controlled by
react-hook-form (requiring use of FormProvider from
@indy /ui/Form)`,name:"controlled",required:!1,type:{name:"boolean"}}}}}catch{}export{S as P};
//# sourceMappingURL=PasswordInput-8e54b3b1.js.map
