var O=Object.defineProperty;var t=(o,a)=>O(o,"name",{value:a,configurable:!0});import{P as q}from"./Overlay-1ecdb49a.js";import{l as z}from"./loremIpsum-b722570b.js";import{j as e}from"./jsx-runtime-91e341d4.js";import{u as r}from"./styled-components.browser.esm-dd68fb2f.js";import{I as k}from"./Icon.hoc-787425e7.js";import{t as u,l as P}from"./devices-1d39230d.js";import{S as j,c as V,d as D}from"./close-solid-16-2099f563.js";import{M as E}from"./SuccessConfirmationModal-be26a501.js";import"./index-8d138fa4.js";import"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";import"./Icon.constants-f71a83c2.js";import"./Symbols.hoc-d0e330fb.js";import"./index-17b0cd16.js";import"./index-6925154b.js";import"./breakPoints-89c7d41a.js";import"./inheritsLoose-5ae194f1.js";const K=r.div.attrs({role:"alert"}).withConfig({componentId:"sc-wqlfdh-0"})(["--padding:","px;--alert-width:100%;display:flex;position:fixed;top:0;right:0;z-index:",";width:var(--alert-width);box-sizing:border-box;align-items:flex-start;justify-content:space-between;padding:6px 6px var(--padding) var(--padding);background-color:",";box-shadow:0px 4px 4px ",";color:",";@media ","{--alert-width:400px;top:24px;right:22px;left:auto;}"],({theme:o})=>o.spacing.x1_5,({theme:o})=>o.zIndex.header,({theme:o})=>o.color.veil.base,({theme:o})=>o.color.shadow.dark,({theme:o})=>o.color.dark.ink.base,u),R=r.button.withConfig({componentId:"sc-wqlfdh-1"})([""]),$=r(k).withConfig({componentId:"sc-wqlfdh-2"})(["max-width:14px;padding:0 6px;color:",";"],({theme:o})=>o.color.dark.ink.base),l=t(({closeAlert:o,children:a})=>e.jsxs(K,{children:[a,e.jsx(R,{"aria-label":"Close",onClick:o,children:e.jsx($,{svg:j})})]}),"BookmarkAlert");try{l.displayName="BookmarkAlert",l.__docgenInfo={description:"",displayName:"BookmarkAlert",props:{closeAlert:{defaultValue:null,description:"",name:"closeAlert",required:!0,type:{name:"() => unknown"}}}}}catch{}const g="bookmark-button",S=r.button.withConfig({componentId:"sc-17yxc4y-0"})(["color:",";"],({theme:o})=>o.color.primary.base),A=r(k).withConfig({componentId:"sc-17yxc4y-1"})([""]),c=t(({handleClick:o})=>e.jsx(S,{id:g,onClick:o,"aria-label":"Bookmark this page",children:e.jsx(A,{svg:V,size:"large"})}),"BookmarkButton");try{c.displayName="BookmarkButton",c.__docgenInfo={description:"",displayName:"BookmarkButton",props:{handleClick:{defaultValue:null,description:"",name:"handleClick",required:!0,type:{name:"() => unknown"}}}}}catch{}const L=r(E).withConfig({componentId:"sc-1a3iv5w-0"})([""]),T=r.div.withConfig({componentId:"sc-1a3iv5w-1"})(["--margin-x:","px;--modal-width:calc(100% - (var(--margin-x) * 2));--modal-max-width:351px;--padding:60px 16px 42px;--line-height:1.25;position:fixed;top:50%;left:50%;overflow:auto;width:var(--modal-width);max-width:var(--modal-max-width);max-height:100vh;box-sizing:border-box;padding:var(--padding);background-color:",";box-shadow:0 1px 1px ",";line-height:var(--line-height);text-align:center;transform:translate(-50%,-50%);@media ","{--modal-width:600px;--modal-max-width:none;--padding:72px 80px 64px;--line-height:1.2;}@media ","{--modal-width:635px;}"],({theme:o})=>o.spacing.x1_5,({theme:o})=>o.color.canvas.brand,({theme:o})=>o.color.veil.base,u,P),F=r.button.withConfig({componentId:"sc-1a3iv5w-2"})(["--close-button-margin:15px;position:absolute;top:var(--close-button-margin);right:var(--close-button-margin);padding:10px;@media ","{--close-button-margin:24px;}"],u),H=r(k).withConfig({componentId:"sc-1a3iv5w-3"})([""]),p=t(({isModalOpen:o,closeModal:a,children:N})=>e.jsx(L,{isHidden:!o,returnFocus:`#${g}`,onEscapeKeyPress:a,children:e.jsxs(T,{children:[e.jsx(F,{"aria-label":"Close",onClick:a,children:e.jsx(H,{svg:j})}),N]})}),"BookmarkModal");try{p.displayName="BookmarkModal",p.__docgenInfo={description:"",displayName:"BookmarkModal",props:{isModalOpen:{defaultValue:null,description:"",name:"isModalOpen",required:!0,type:{name:"boolean"}},closeModal:{defaultValue:null,description:"",name:"closeModal",required:!0,type:{name:"() => unknown"}}}}}catch{}const m=t(({handleClick:o})=>e.jsx(S,{id:g,onClick:o,"aria-label":"Remove bookmark from this page",children:e.jsx(A,{svg:D,size:"large"})}),"BookmarkedButton");try{m.displayName="BookmarkedButton",m.__docgenInfo={description:"",displayName:"BookmarkedButton",props:{handleClick:{defaultValue:null,description:"",name:"handleClick",required:!0,type:{name:"() => unknown"}}}}}catch{}const po={title:"Components/Bookmark"},n={render:c,args:{}},i={render:m,args:{}},s={render:p,args:{isModalOpen:!0,children:"Modal content"},decorators:[q,z(23)]},d={render:l,args:{children:"Bookmark alert"}};var x,h,B;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: BookmarkButton,
  args: {}
}`,...(B=(h=n.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var f,w,_;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: BookmarkedButton,
  args: {}
}`,...(_=(w=i.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var b,y,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: BookmarkModal,
  args: {
    isModalOpen: true,
    children: 'Modal content'
  },
  decorators: [PreventBodyLock, loremIpsum(23)]
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var C,I,M;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: BookmarkAlert,
  args: {
    children: 'Bookmark alert'
  }
}`,...(M=(I=d.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const mo=["Default","Bookmarked","Modal","Alert"];export{d as Alert,i as Bookmarked,n as Default,s as Modal,mo as __namedExportsOrder,po as default};
//# sourceMappingURL=Bookmark.stories-08347212.js.map
