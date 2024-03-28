var j=Object.defineProperty;var C=(t,e,s)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var i=(t,e)=>j(t,"name",{value:e,configurable:!0});var h=(t,e,s)=>(C(t,typeof e!="symbol"?e+"":e,s),s);import{j as m}from"./jsx-runtime-91e341d4.js";import{F as O}from"./Form-92228da3.js";import{p,c as R,a as S,r as D,e as W,h as Z,I as y}from"./InputWrapper-a6db9af3.js";import{T as q}from"./TextInput-a4e27216.js";import{P as U}from"./PasswordInput-57644bf7.js";import{S as Y}from"./SelectInput-282eef3d.js";import{C as J}from"./Checkbox-d8c394ba.js";import"./CheckboxWithDropdown-02a548b3.js";import"./ValidationHint-0b9d255c.js";import{u as z}from"./styled-components.browser.esm-dd68fb2f.js";import{B as G}from"./Button-6cc3cb4d.js";import{a as K,F as Q}from"./index.esm-d17145de.js";import{r as X}from"./index-b56a0300.js";import"./warning-solid-24-62e98cc2.js";import"./Icon.hoc-787425e7.js";import"./Icon.constants-f71a83c2.js";import"./Symbols.hoc-d0e330fb.js";import"./index-17b0cd16.js";import"./index-6925154b.js";import"./LoadingEllipsis-859301b8.js";import"./IconButton-dda0da21.js";import"./eye-visible-solid-24-51ef0235.js";import"./chevron-down-solid-16-ecd33624.js";import"./tick-solid-16-20e5c3c2.js";import"./tick-solid-32-8cd2f25a.js";import"./ScreenReaderOnly-03556af7.js";import"./mixins-e8622e63.js";import"./devices-1d39230d.js";import"./breakPoints-89c7d41a.js";import"./Dropdown-2f1c0625.js";import"./tick-round-solid-12-8c368b0e.js";import"./index-8d138fa4.js";import"./Button.constants-c6e6f0a7.js";import"./launch-outline-16-2a071c4c.js";import"./_commonjsHelpers-c38d1a10.js";const l=i(({type:t,condition:e,message:s,messageBuilder:r})=>e?null:{type:t,message:s,messageBuilder:r},"handler"),L=i(()=>({validate:t=>{const s=typeof p(t)=="string";return l({type:"isString",condition:s,message:"Field must be text only",messageBuilder:r=>`${r} must be text only`})}}),"isString"),ee=i(()=>({validate:t=>{const e=!isNaN(t);return l({type:"isNumber",condition:e,message:"Field must be a number",messageBuilder:s=>`${s} must be a number`})}}),"isNumber"),P=i(()=>({validate:t=>l({type:"isBoolean",condition:typeof t=="boolean",message:"Field must be true or false",messageBuilder:s=>`${s} must be true or false`})}),"isBoolean"),te=i((t="string")=>({validate:e=>{if(t==="boolean")return P().validate(e,{});const r=p(e).length>0;return l({type:"required",condition:r,message:"Field is required",messageBuilder:a=>`${a} is required`})}}),"isNotEmpty"),se=i(()=>({validate:t=>{const e=p(t),r=new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).test(e);return l({type:"isEmail",condition:r,message:"Please enter a valid email address",messageBuilder:()=>"Please enter a valid email address"})}}),"isEmail"),re=i(t=>({validate:(e,s)=>{const a=p(e)===s[t];return l({type:"doesMatch",condition:a,message:"Fields must match",messageBuilder:n=>`${n} fields must match`})}}),"doesMatch"),ie=i((t,e)=>({validate:s=>{const r=p(s),a=R(r,e),n={type:`hasMin${S(e||"")}`,condition:a>=t};return l(e?{...n,message:`Must contain minimum ${t} ${e}`,messageBuilder:()=>`Must contain minimum ${t} ${e}`}:{...n,message:`Minimum length is ${t} characters`,messageBuilder:()=>`Minimum length is ${t} characters`})}}),"hasMin"),ae=i((t,e)=>({validate:s=>{const r=p(s),a=R(r,e),n={type:`hasMax${S(e||"")}`,condition:a<=t};return l(e?{...n,message:`Must contain maximum ${t} ${e}`,messageBuilder:()=>`Must contain maximum ${t} ${e}`}:{...n,message:`Maximum length is ${t} characters`,messageBuilder:()=>`Maximum length is ${t} characters`})}}),"hasMax"),oe=i((t,e,s)=>({validate:r=>{const a=Number(r),n={type:`hasRange${S(s||"")}`,condition:a>=t&&a<=e};return l(s?{...n,message:`Must contain a minimum value of ${t} ${s} and a maximum value of ${e} ${s}`,messageBuilder:()=>`Must contain a minimum value of ${t} ${s} and a maximum value of ${e} ${s}`}:{...n,message:`Minimum value is ${t} characters and maximum value is ${e} characters`,messageBuilder:()=>`Minimum value is ${t} characters and maximum value is ${e} characters`})}}),"hasRange"),ne=i(()=>({validate:t=>{const s={type:"containsNoSpaces",condition:!p(t).includes(" ")};return l({...s,message:"Must not contain any spaces",messageBuilder:()=>"Must not contain any spaces"})}}),"containsNoSpaces"),le=i(t=>({validate:e=>{const s=p(e),r={type:"matchesRegex",condition:t.test(s)};return l({...r,message:"Field does not match the required format",messageBuilder:()=>"Field does not match the required format"})}}),"matchesRegex"),de=i(t=>({validate:async e=>{const s=p(e),r={type:"hasCustomValidation",condition:await(async()=>{try{return await t(s)}catch{return!1}})()};return l({...r,message:"Field does not pass the custom validation",messageBuilder:()=>"Field does not pass the custom validation"})}}),"hasCustomValidation"),V=[];class A{constructor(e){h(this,"name");h(this,"primitiveType","string");h(this,"isRequired",!1);h(this,"validators",[]);this.name=e}initialise(e,s){this.primitiveType=e,this.validators=s}checkValid(){if(!this.validators.length)throw new Error("No validators set")}string(){return this.initialise("string",[[L,V]]),this}number(){return this.initialise("number",[[ee,V]]),this}boolean(){return this.initialise("boolean",[[P,V]]),this}required(){return this.isRequired=!0,this}isEmail(...e){return this.checkValid(),this.validators.push([se,e]),this}doesMatch(...e){return this.checkValid(),this.validators.push([re,e]),this}hasMin(...e){return this.checkValid(),this.validators.push([ie,e]),this}hasMax(...e){return this.checkValid(),this.validators.push([ae,e]),this}hasRange(...e){return this.checkValid(),this.validators.push([oe,e]),this}containsNoSpaces(...e){return this.checkValid(),this.validators.push([ne,e]),this}matchesRegex(...e){return this.checkValid(),this.validators.push([le,e]),this}hasCustomValidation(...e){return this.checkValid(),this.validators.push([de,e]),this}}i(A,"SchemaEntry");class f{constructor(e){h(this,"self");h(this,"fields");h(this,"names");h(this,"errors",{});h(this,"validationHints");return this.self=e,this.fields=Object.keys(e),this.names=Object.entries(e).reduce((s,[r,a])=>({...s,[r]:a.name}),{}),this.validationHints={},this.initValidationHints(),this}static add(e){return new A(e)}get(e){return this.self[e]}getErrors(e){return this.errors[e]}setErrors(e,s){!s||s.length===0?delete this.errors[e]:this.errors[e]=s}getValidationHints(e){return this.validationHints[e]}setValidationHints(e,s,r,a){this.validationHints[e]={...this.validationHints[e],[s]:{passes:r,hint:a}}}initValidationHint(e){this.get(e).validators.forEach(r=>{const[,a]=r,[n,u,g]=a;g&&this.setValidationHints(e,[n,u].join("."),!1,g)})}initValidationHints(){this.fields.forEach(e=>{this.initValidationHint(e)})}resetValidationHints(e){this.validationHints[e]&&Object.keys(this.validationHints[e]).forEach(s=>{this.validationHints[e][s].passes=!1})}async validate(e,s,r){const a=this.get(e);if(!a)return;const n=a.isRequired,u=await te(a.primitiveType).validate(s,r);if(n&&u)return this.setErrors(e,[u]),this.resetValidationHints(e),this.getErrors(e);const M=(await Promise.all(a.validators.map(async b=>{const[w,F]=b,[B,H,o]=F,d=await w(...F).validate(s,r);return o&&this.setValidationHints(e,[B,H].join("."),!d&&s!=="",o),d}))).filter(b=>b);return this.setErrors(e,M),this.getErrors(e)}}i(f,"Schema");const T=z.div.withConfig({componentId:"sc-1l9mewf-0"})(["width:400px;padding:","px;"],({theme:t})=>t.spacing.x2),me=i((t,e={})=>{if(!t)throw new Error("No schema provided! Please provide a schema to useIndyForm");const s=K({mode:"onTouched",resolver:D(t),...e}),{formState:r,getValues:a,setError:n}=s;X.useEffect(()=>{const o=t.fields,c=Object.keys(a()),d=o.filter(v=>!c.includes(v));if(d.length>0)throw new Error(`Fields ["${d.join('", "')}"] are included in the schema but missing or inaccessible by React Hook Form`)},[a,t.fields]);const u=i(o=>{const d=r.errors[o];if(d)return d[0].messageBuilder(t.names[o])},"getTextInputError"),g=i(o=>{const c=!!r.errors.root,d=!!r.errors[o],v=r.dirtyFields[o]&&!d;return d||c?y.ERROR:v?y.SUCCESS:y.DEFAULT},"getTextInputState");return{registerControlledInput:i(o=>{var N;const c=((N=t.get(o))==null?void 0:N.isRequired)||!1,d=u(o),v=g(o);return{id:o,state:v,message:d,required:c,"aria-required":c,"aria-invalid":d==="error","aria-describedby":`${W(o)} ${Z(o)}`}},"registerControlledInput"),methods:{...s,setFormError:i(o=>{n("root",{message:o})},"setFormError"),setFieldError:i((o,c)=>{n(o,{message:c},{shouldFocus:!0})},"setFieldError"),getFormError:i(()=>u("root"),"getFormError"),getFieldErrors:i(()=>t.fields.map(u).filter(Boolean),"getFieldErrors"),getFieldValidationHints:i(o=>t.validationHints[o],"getFieldValidationHints")},formState:{...r,errors:r.errors}}},"useIndyForm"),x=i(({onSubmit:t,schema:e,children:s})=>{const{methods:r,registerControlledInput:a}=me(e),{handleSubmit:n,formState:u}=r;return m.jsx(T,{children:m.jsx(Q,{...r,children:m.jsxs(O,{children:[s({registerControlledInput:a}),m.jsx(G,{type:"submit",disabled:!u.isValid,onClick:n(t),children:"Submit"})]})})})},"TestableFormWrapper");try{x.displayName="TestableFormWrapper",x.__docgenInfo={description:`This wrapper exists to make testing easier by setting up a simple form
and accepting input elements as children to be tested.

This should not be used in production, but may be helpful reference`,displayName:"TestableFormWrapper",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"SubmitHandler<FormData>"}},schema:{defaultValue:null,description:"",name:"schema",required:!0,type:{name:"Schema<FormData>"}}}}}catch{}const ue=new f({fullName:f.add("Full name").string(),email:f.add("Email address").string().isEmail().required(),password:f.add("Password").string().hasMin(1,"digits").hasMin(6,"letters").required(),birthYear:f.add("Birth year").number().required(),terms:f.add("Privacy opt in").boolean().required()}),$=i(({onSubmit:t})=>m.jsx(T,{children:m.jsx(x,{schema:ue,onSubmit:t,children:({registerControlledInput:e})=>m.jsxs(m.Fragment,{children:[m.jsx(q,{label:"Name",...e("fullName")}),m.jsx(q,{type:"email",label:"Email address",helpText:"Add an email address",...e("email")}),m.jsx(U,{label:"Password",helpText:"Make it a good one",...e("password")}),m.jsx(Y,{label:"Birth year",options:[{value:"1970",label:"1970"},{value:"1980",label:"1980"},{value:"1990",label:"1990"}],...e("birthYear")}),m.jsx(J,{label:"I accept the terms and conditions",...e("terms")})]})})}),"TestableForm"),ce=$;try{$.displayName="TestableForm",$.__docgenInfo={description:`This form exists to demonstrate how to use the useIndyForm hook
alongside the Form, TextInput and PasswordInput components

It us also used for testing functionality in a form context
with full validation and error handling, and providing a
component in storybook for visual testing`,displayName:"TestableForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"SubmitHandler<Record<string, unknown>>"}}}}}catch{}const he={onSubmit:t=>alert(`Submitted: ${JSON.stringify(t)}`)},Ke={title:"Modules/Form",component:ce},E={args:he};var I,_,k;E.parameters={...E.parameters,docs:{...(I=E.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(k=(_=E.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const Qe=["Default"];export{E as Default,Qe as __namedExportsOrder,Ke as default};
//# sourceMappingURL=TestableForm.stories-f5388827.js.map
