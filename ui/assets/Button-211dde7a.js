var I=Object.defineProperty;var e=(o,t)=>I(o,"name",{value:t,configurable:!0});import{j as u}from"./jsx-runtime-91e341d4.js";import{c as O}from"./index-8d138fa4.js";import{r as U}from"./index-b56a0300.js";import{I as j}from"./Icon.hoc-1b9291aa.js";import{B as w,a as E,b as k,c as p,d,e as L}from"./Button.constants-c6e6f0a7.js";import{a as r,u as P}from"./styled-components.browser.esm-dd68fb2f.js";import{t as V}from"./devices-1d39230d.js";import{S as Y}from"./launch-outline-16-2a071c4c.js";const z=r(["--primary-color:",";--hover-color:",";--disabled-color:",";display:inline-flex;width:",";height:","px;box-sizing:border-box;align-items:center;justify-content:center;gap:","px;padding:0 ","px;border-radius:","px;font:",";text-align:center;text-transform:uppercase;transition:background-color ",";white-space:nowrap;&.is-disabled,&:disabled{&,&:focus,&:hover,&:active{pointer-events:none;}}"],({theme:o})=>o.color.actionBrand.base,({theme:o})=>o.color.actionBrand.alt,({theme:o})=>o.color.actionBrand.disabled,({$size:o})=>o==="large"?"100%":"auto",({theme:o})=>o.dimension.btn.height,({theme:o})=>o.dimension.btn.iconSpacing,({theme:o})=>o.spacing.x2,({theme:o})=>o.dimension.btn.borderRadius,({theme:o})=>o.textStyle.button.base,({theme:o})=>o.transition.base),a=r(["--color:",";background-color:var(--primary-color);color:var(--color);&:focus,&:hover,&:active{background-color:var(--hover-color);color:var(--color);}&.is-disabled,&:disabled{&,&:focus,&:hover,&:active{background-color:var(--disabled-color);}}"],({theme:o})=>o.color.ink.inverted),M=r(["box-shadow:inset 0 0 0 1px;color:var(--primary-color);&:focus,&:hover,&:active{color:var(--hover-color);}&.is-disabled,&:disabled{&,&:focus,&:hover,&:active{color:var(--disabled-color);}}"]),$=r(["color:var(--primary-color);font:",";text-decoration:underline;text-transform:none;&:focus,&:hover,&:active{color:var(--hover-color);}&.is-disabled,&:disabled{&,&:focus,&:hover,&:active{color:var(--disabled-color);}}"],({theme:o})=>o.textStyle.button.medium),C=r([""," font:",";text-transform:none;@media ","{font:",";}"],a,({theme:o})=>o.textStyle.button.large,V,({theme:o})=>o.textStyle.button.xLarge),D=e(({$variant:o})=>{switch(o){case p:return a;case k:return M;case E:return $;case w:return C;default:return a}},"variantStyles"),Z=P.button.withConfig({componentId:"sc-1aus1tj-0"})([""," ",""],z,D),q=u.jsx(j,{size:"small",svg:Y}),s=U.forwardRef(e(function({as:t=d,children:b,forwardedAs:n,className:m,size:v=L,disabled:c=!1,variant:f=p,icon:i,name:x,value:y,type:h=d,onClick:l,href:g,target:_,rel:T,id:B,isExternal:S,...N},A){const R={a:{href:g,target:_,rel:T,icon:i,onClick:l},button:{name:x,value:y,disabled:c,type:h,onClick:l}}[t];return u.jsxs(Z,{as:t,forwardedAs:n,$variant:f,$size:v,id:B,className:O(m,{"is-disabled":c&&(t==="a"||n==="a")}),ref:A,...R,...N,children:[b,i||S&&q]})},"Button2")),to=s;try{s.displayName="Button",s.__docgenInfo={description:"",displayName:"Button",props:{}}}catch{}export{to as B};
//# sourceMappingURL=Button-211dde7a.js.map