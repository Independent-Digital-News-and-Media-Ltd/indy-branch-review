var j=Object.defineProperty;var o=(e,a)=>j(e,"name",{value:a,configurable:!0});import{j as s}from"./jsx-runtime-91e341d4.js";import{u as r}from"./styled-components.browser.esm-dd68fb2f.js";import{c as C}from"./index-8d138fa4.js";import{r as x}from"./index-b56a0300.js";import{I as w}from"./Icon.hoc-787425e7.js";import{t as R,l as P}from"./devices-1d39230d.js";import{S as W}from"./tick-round-solid-24-05feb303.js";import{S as k}from"./warning-solid-24-62e98cc2.js";import"./_commonjsHelpers-c38d1a10.js";import"./Icon.constants-f71a83c2.js";import"./Symbols.hoc-d0e330fb.js";import"./index-17b0cd16.js";import"./index-6925154b.js";import"./breakPoints-89c7d41a.js";const B="is-active",d="info",t="success",n="error",z={[d]:null,[n]:k,[t]:W},L=r.header.attrs({role:"alert"}).withConfig({componentId:"sc-1strae-0"})(["--transition:300ms ease-in-out;--variant-color:",";display:flex;position:fixed;top:0;left:0;z-index:",";width:100%;min-height:56px;box-sizing:border-box;align-items:center;justify-content:flex-start;gap:10px;padding:","px ","px;border-bottom:4px solid var(--variant-color);background-color:",";box-shadow:0px 4px 4px ",";color:var(--variant-color);font:bold 16px/20px ",";opacity:0;transform:translateY(-100%);transition:transform var(--transition),opacity var(--transition);@media ","{justify-content:center;}@media ","{min-height:72px;font-size:20px;line-height:24px;}&.","{opacity:1;transform:translateY(0%);}"],({theme:e,$variant:a})=>e.color.semiotic[a],({theme:e})=>e.zIndex.header,({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.color.canvas.base,({theme:e})=>e.color.shadow.dark,({theme:e})=>e.fontFamily.secondaryFont,R,P,B),D=r(w).attrs(({$variant:e})=>({svg:z[e]})).withConfig({componentId:"sc-1strae-1"})(["flex-shrink:0;color:var(--variant-color);"]),g=o(({children:e,messageTimeout:a=8e3,className:N,variant:p=d,...M})=>{const[q,v]=x.useState(!1);return x.useEffect(()=>{v(!0);const V=setTimeout(()=>v(!1),a);return()=>clearTimeout(V)},[a]),s.jsxs(L,{...M,className:C(N,{[B]:q}),$variant:p,children:[[n,t].includes(p)&&s.jsx(D,{$variant:p}),e]})},"MessageBannerBase"),m=o(({children:e,...a})=>s.jsx(g,{variant:n,...a,children:e}),"MessageBannerError"),u=o(({children:e,...a})=>s.jsx(g,{variant:t,...a,children:e}),"MessageBannerSuccess");try{MessageBanner.displayName="MessageBanner",MessageBanner.__docgenInfo={description:"",displayName:"MessageBanner",props:{messageTimeout:{defaultValue:{value:"8000"},description:"",name:"messageTimeout",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"info"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"error"'}]}}}}}catch{}try{m.displayName="MessageBannerError",m.__docgenInfo={description:"",displayName:"MessageBannerError",props:{messageTimeout:{defaultValue:{value:"8000"},description:"",name:"messageTimeout",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"info"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"error"'}]}}}}}catch{}try{u.displayName="MessageBannerSuccess",u.__docgenInfo={description:"",displayName:"MessageBannerSuccess",props:{messageTimeout:{defaultValue:{value:"8000"},description:"",name:"messageTimeout",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"info"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"error"'}]}}}}}catch{}const F=r(g).withConfig({componentId:"sc-1d0bai8-0"})(["position:static;"]),O=r(u).withConfig({componentId:"sc-1d0bai8-1"})(["position:static;"]),U=r(m).withConfig({componentId:"sc-1d0bai8-2"})(["position:static;"]),ce={title:"Components/Message Banner",component:F,argTypes:{messageTimeout:{description:"Time in milliseconds before the banner disappears",control:{type:"number"}},children:{description:"Content of the banner",options:["Text","Single Element","Multiple Elements"],mapping:{Text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repellat doloremque architecto sit neque? Similique, officia nisi.","Single Element":s.jsx("p",{children:"Single Element"}),"Multiple Elements":[s.jsx("p",{children:"Single Element"},1),s.jsx("p",{children:"Single Element"},2)]}},className:{description:"Additional class names to add to the component",control:{type:"text"}},variant:{description:"Variant of the message banner",options:[t,n,d],control:{type:"select"}}}},f={children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repellat doloremque architecto sit neque? Similique, officia nisi."},Y={...f,variant:t},$={...f,variant:n},i={args:f},c={args:Y,render:e=>s.jsx(O,{...e})},l={args:$,render:e=>s.jsx(U,{...e})};var S,h,y;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var _,E,b;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: successArgs,
  render: (args: BaseProps) => <SuccessWithStaticPositioning {...args} />
}`,...(b=(E=c.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var I,A,T;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: errorArgs,
  render: (args: BaseProps) => <ErrorWithStaticPositioning {...args} />
}`,...(T=(A=l.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};const le=["Default","Success","Error"];export{i as Default,l as Error,c as Success,le as __namedExportsOrder,ce as default};
//# sourceMappingURL=MessageBanner.stories-2c3cad08.js.map
