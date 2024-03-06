var _=Object.defineProperty;var A=(r,e,s)=>e in r?_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s;var i=(r,e)=>_(r,"name",{value:e,configurable:!0});var c=(r,e,s)=>(A(r,typeof e!="symbol"?e+"":e,s),s);import{j as m}from"./jsx-runtime-91e341d4.js";import{B as C}from"./Button-db67599a.js";import{p as g,c as j,a as M,u as O,r as D,e as H,h as Z,I as F,F as U}from"./InputWrapper-7902d41f.js";import{T as w}from"./TextInput-49deb6b1.js";import{P as Y}from"./PasswordInput-f511b761.js";import{S as J}from"./SelectInput-bef2d4c7.js";import{u as T}from"./styled-components.browser.esm-dd68fb2f.js";import{r as W}from"./index-b56a0300.js";import"./index-8d138fa4.js";import"./Icon.hoc-1b9291aa.js";import"./Symbols.hoc-fb0f215f.js";import"./index-17b0cd16.js";import"./index-6925154b.js";import"./Button.constants-c6e6f0a7.js";import"./devices-6d2491cf.js";import"./launch-outline-16-2a071c4c.js";import"./warning-solid-24-62e98cc2.js";import"./IconButton-c662f5de.js";import"./eye-visible-solid-24-51ef0235.js";import"./chevron-down-solid-16-ecd33624.js";import"./_commonjsHelpers-c38d1a10.js";const $=i(({children:r,...e})=>{const t=i(a=>{a.preventDefault()},"preventSubmission");return m.jsx("form",{noValidate:!0,onSubmit:t,...e,children:r})},"Form$1");try{$.displayName="Form",$.__docgenInfo={description:"",displayName:"Form",props:{}}}catch{}const d=i(({type:r,condition:e,message:s,messageBuilder:t})=>e?null:{type:r,message:s,messageBuilder:t},"handler"),z=i(()=>({validate:r=>{const s=g(r).length>0;return d({type:"required",condition:s,message:"Field is required",messageBuilder:t=>`${t} is required`})}}),"isNotEmpty"),G=i(()=>({validate:r=>{const s=typeof g(r)=="string";return d({type:"isString",condition:s,message:"Field must be text only",messageBuilder:t=>`${t} must be text only`})}}),"isString"),K=i(()=>({validate:r=>{const e=!isNaN(r);return d({type:"isNumber",condition:e,message:"Field must be a number",messageBuilder:s=>`${s} must be a number`})}}),"isNumber"),Q=i(()=>({validate:r=>{const e=g(r),t=new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).test(e);return d({type:"isEmail",condition:t,message:"Please enter a valid email address",messageBuilder:()=>"Please enter a valid email address"})}}),"isEmail"),X=i(r=>({validate:(e,s)=>{const a=g(e)===s[r];return d({type:"doesMatch",condition:a,message:"Fields must match",messageBuilder:n=>`${n} fields must match`})}}),"doesMatch"),L=i((r,e)=>({validate:s=>{const t=g(s),a=j(t,e),n={type:`hasMin${M(e||"")}`,condition:a>=r};return d(e?{...n,message:`Must contain minimum ${r} ${e}`,messageBuilder:()=>`Must contain minimum ${r} ${e}`}:{...n,message:`Minimum length is ${r} characters`,messageBuilder:()=>`Minimum length is ${r} characters`})}}),"hasMin"),ee=i((r,e)=>({validate:s=>{const t=g(s),a=j(t,e),n={type:`hasMax${M(e||"")}`,condition:a<=r};return d(e?{...n,message:`Must contain maximum ${r} ${e}`,messageBuilder:()=>`Must contain maximum ${r} ${e}`}:{...n,message:`Maximum length is ${r} characters`,messageBuilder:()=>`Maximum length is ${r} characters`})}}),"hasMax"),re=i((r,e,s)=>({validate:t=>{const a=Number(t),n={type:`hasRange${M(s||"")}`,condition:a>=r&&a<=e};return d(s?{...n,message:`Must contain a minimum value of ${r} ${s} and a maximum value of ${e} ${s}`,messageBuilder:()=>`Must contain a minimum value of ${r} ${s} and a maximum value of ${e} ${s}`}:{...n,message:`Minimum value is ${r} characters and maximum value is ${e} characters`,messageBuilder:()=>`Minimum value is ${r} characters and maximum value is ${e} characters`})}}),"hasRange"),N=[];class k{constructor(e){c(this,"name");c(this,"isRequired",!1);c(this,"validators",[]);this.name=e}initialise(e){this.validators=e}checkValid(){if(!this.validators.length)throw new Error("No validators set")}string(){return this.initialise([[G,N]]),this}number(){return this.initialise([[K,N]]),this}required(){return this.isRequired=!0,this}isEmail(...e){return this.checkValid(),this.validators.push([Q,e]),this}doesMatch(...e){return this.checkValid(),this.validators.push([X,e]),this}hasMin(...e){return this.checkValid(),this.validators.push([L,e]),this}hasMax(...e){return this.checkValid(),this.validators.push([ee,e]),this}hasRange(...e){return this.checkValid(),this.validators.push([re,e]),this}}i(k,"SchemaEntry");class p{constructor(e){c(this,"self");c(this,"fields");c(this,"names");c(this,"errors",{});return this.self=e,this.fields=Object.keys(e),this.names=Object.entries(e).reduce((s,[t,a])=>({...s,[t]:a.name}),{}),this}static add(e){return new k(e)}get(e){return this.self[e]}getErrors(e){return this.errors[e]}setErrors(e,s){!s||s.length===0?delete this.errors[e]:this.errors[e]=s}validate(e,s,t){const a=this.get(e);if(!a)return;const n=a.isRequired,h=z().validate(s,t);if(n&&h)return this.setErrors(e,[h]),this.getErrors(e);const v=a.validators.reduce((b,S)=>{const[y,I]=S,o=y(...I).validate(s,t);return o?[...b,o]:b},[]);return this.setErrors(e,v),this.getErrors(e)}}i(p,"Schema");const se=T.div.withConfig({componentId:"sc-1l9mewf-0"})(["width:500px;padding:","px;"],({theme:r})=>r.spacing.x2),te=i((r,e={})=>{if(!r)throw new Error("No schema provided! Please provide a schema to useIndyForm");const s=O({mode:"onTouched",resolver:D(r),...e}),{formState:t,getValues:a,setError:n}=s;W.useEffect(()=>{const o=r.fields,u=Object.keys(a()),l=o.filter(f=>!u.includes(f));if(l.length>0)throw new Error(`Fields ["${l.join('", "')}"] are included in the schema but missing or inaccessible by React Hook Form`)},[a,r.fields]);const h=i(o=>{const l=t.errors[o];if(l)return l[0].messageBuilder(r.names[o])},"getTextInputError"),v=i(o=>{const u=!!t.errors.root,l=!!t.errors[o],f=t.dirtyFields[o]&&!l;return l||u?F.ERROR:f?F.SUCCESS:F.DEFAULT},"getTextInputState");return{registerControlledInput:i(o=>{var V;const u=((V=r.get(o))==null?void 0:V.isRequired)||!1,l=h(o),f=v(o);return{id:o,state:f,message:l,required:u,"aria-required":u,"aria-invalid":l==="error","aria-describedby":`${H(o)} ${Z(o)}`}},"registerControlledInput"),methods:{...s,setFormError:i(o=>{n("root",{message:o})},"setFormError"),setFieldError:i((o,u)=>{n(o,{message:u},{shouldFocus:!0})},"setFieldError"),getFormError:i(()=>h("root"),"getFormError"),getFieldErrors:i(()=>r.fields.map(h).filter(Boolean),"getFieldErrors")},formState:{...t,errors:t.errors}}},"useIndyForm"),ie=new p({fullName:p.add("Full name").string(),email:p.add("Email address").string().isEmail().required(),password:p.add("Password").string().hasMin(1,"digits").hasMin(6,"letters").required(),birthYear:p.add("Birth year").number().required()}),x=i(({onSubmit:r})=>{const{methods:e,registerControlledInput:s}=te(ie),{handleSubmit:t,formState:a}=e;return m.jsx(se,{children:m.jsx(U,{...e,children:m.jsxs($,{children:[m.jsx(w,{label:"Name",...s("fullName")}),m.jsx(w,{type:"email",label:"Email address",helpText:"Add an email address",...s("email")}),m.jsx(Y,{label:"Password",helpText:"Make it a good one",...s("password")}),m.jsx(J,{label:"Birth year",options:[{value:"1970",label:"1970"},{value:"1980",label:"1980"},{value:"1990",label:"1990"}],...s("birthYear")}),m.jsx(C,{type:"submit",disabled:!a.isValid,onClick:t(r),children:"Sign up"})]})})})},"TestableForm"),ae=x;try{x.displayName="TestableForm",x.__docgenInfo={description:`This form exists to demonstrate how to use the useIndyForm hook
alongside the Form, TextInput and PasswordInput components

It us also used for testing functionality in a form context
with full validation and error handling, and providing a
component in storybook for visual testing`,displayName:"TestableForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"SubmitHandler<ExampleFormData>"}}}}}catch{}const oe={onSubmit:r=>alert(`Submitted: ${JSON.stringify(r)}`)},we={title:"Modules/Form",component:ae},E={args:oe};var B,q,R;E.parameters={...E.parameters,docs:{...(B=E.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(R=(q=E.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};const Ne=["Default"];export{E as Default,Ne as __namedExportsOrder,we as default};
//# sourceMappingURL=TestableForm.stories-f28c7380.js.map
