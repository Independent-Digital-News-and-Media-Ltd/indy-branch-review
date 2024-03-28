var V=Object.defineProperty;var r=(t,o)=>V(t,"name",{value:o,configurable:!0});import{j as e}from"./jsx-runtime-91e341d4.js";import{M as i}from"./MockContent-58dddf9c.js";import{O as S}from"./OneColumn-1c86960f.js";import{S as L}from"./Layout.styles-ff2a908e.js";import{T as l}from"./TwoColumn-05b39934.js";import"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";import"./styled-components.browser.esm-dd68fb2f.js";import"./Layout-989deed1.js";const R=r(({children:t,...o})=>e.jsx(L,{...o,children:t}),"Stacked");try{StackedLayout.displayName="StackedLayout",StackedLayout.__docgenInfo={description:"",displayName:"StackedLayout",props:{}}}catch{}const d=r(({topLeft:t,topRight:o,middle:h,bottomLeft:g,bottomRight:A,topAsideVisibleAtWidth:y,bottomAsideVisibleAtWidth:x,..._})=>e.jsxs(R,{..._,children:[e.jsx(l,{main:t,aside:o,asideVisibleAtWidth:y}),e.jsx(S,{children:h}),e.jsx(l,{main:g,aside:A,asideVisibleAtWidth:x})]}),"TwoColumnStacked");try{d.displayName="TwoColumnStacked",d.__docgenInfo={description:"",displayName:"TwoColumnStacked",props:{topLeft:{defaultValue:null,description:"",name:"topLeft",required:!0,type:{name:"ReactNode"}},topRight:{defaultValue:null,description:"",name:"topRight",required:!0,type:{name:"NullableReactElement"}},middle:{defaultValue:null,description:"",name:"middle",required:!0,type:{name:"ReactNode"}},bottomLeft:{defaultValue:null,description:"",name:"bottomLeft",required:!0,type:{name:"ReactNode"}},bottomRight:{defaultValue:null,description:"",name:"bottomRight",required:!0,type:{name:"NullableReactElement"}},topAsideVisibleAtWidth:{defaultValue:null,description:"",name:"topAsideVisibleAtWidth",required:!1,type:{name:"string"}},bottomAsideVisibleAtWidth:{defaultValue:null,description:"",name:"bottomAsideVisibleAtWidth",required:!1,type:{name:"string"}}}}}catch{}const f={topLeft:e.jsx(i,{label:"Content"}),topRight:e.jsx(i,{as:"aside",label:"Sidebar"}),middle:e.jsx(i,{label:"Content"}),bottomLeft:e.jsx(i,{label:"Content"}),bottomRight:e.jsx(i,{as:"aside",label:"Sidebar"})},M={title:"Layout/Two Columns Stacked",component:d,parameters:{controls:{exclude:["topLeft","topRight","middle","bottomLeft","bottomRight"]}}},a={args:{...f}},s={args:{...f,topAsideVisibleAtWidth:"(min-width: 768px)",bottomAsideVisibleAtWidth:"(min-width: 768px)"}};var n,m,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,u,b;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    topAsideVisibleAtWidth: '(min-width: 768px)',
    bottomAsideVisibleAtWidth: '(min-width: 768px)'
  }
}`,...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const D=["Default","HideAsidesOnMobile"];export{a as Default,s as HideAsidesOnMobile,D as __namedExportsOrder,M as default};
//# sourceMappingURL=TwoColumnStacked.stories-19640e21.js.map