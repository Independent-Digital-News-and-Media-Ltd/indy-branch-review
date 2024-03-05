var I=Object.defineProperty;var t=(e,o)=>I(e,"name",{value:o,configurable:!0});import{b as c,t as j}from"./themes-d0efcec6.js";import{m as _,t as P,l as C,d as R}from"./viewports-741975bd.js";import{j as r}from"./jsx-runtime-91e341d4.js";import{S as z}from"./Symbols.hoc-fb0f215f.js";import{D as O}from"./chunk-HLWAVYOI-4aaf0b63.js";import{u as l,a as G,d as g,t as b}from"./styled-components.browser.esm-dd68fb2f.js";import{i as u}from"./fontFace-4f1675a0.js";import{R as m}from"./index-b56a0300.js";import"./palette-24f56bdc.js";import"./colors-3e41a0f7.js";import"./dimensions-f12ee5f1.js";import"./breakPoints-89c7d41a.js";import"./spacings-7e4c9257.js";import"./fontWeights-1d7bfb43.js";import"./devices-1d39230d.js";import"./index-17b0cd16.js";import"./index-6925154b.js";import"./iframe-4a1906b9.js";import"../sb-preview/runtime.js";import"./index-f3b00cf2.js";import"./_commonjsHelpers-c38d1a10.js";import"./index-19cb0178.js";import"./inheritsLoose-5ae194f1.js";import"./index-32ac9e7b.js";const y=t(e=>r.jsxs("div",{children:[r.jsx(e,{}),r.jsx(z,{})]}),"withIcons");y.__docgenInfo={description:"Adds icon symbols to stories",methods:[],displayName:"withIcons"};const M=l.header.withConfig({componentId:"sc-oezetd-0"})(["padding:3rem 0;margin:0 0 2rem;border-radius:1rem 1rem 0 0;background:",";color:",";font:bold 4rem/1 ",";line-height:1;text-align:center;"],({theme:e})=>e.color.dark.canvas.base,({theme:e})=>e.color.dark.ink.base,({theme:e})=>e.fontFamily.primaryFont);l.section.withConfig({componentId:"sc-oezetd-1"})(["padding:2rem;margin-bottom:64px;border-radius:0.25rem;background-color:",";"],({theme:e})=>e.color.canvas.secondary);l.h1.withConfig({componentId:"sc-oezetd-2"})(["font:normal 32px/34px ",";text-transform:uppercase;"],({theme:e})=>e.fontFamily.secondaryFont);const x=G(["body{padding:0;margin:0;color:",";font-family:",";-webkit-font-smoothing:antialiased;line-height:1.2;-webkit-print-color-adjust:exact;scroll-padding-top:300px;}h1,h2{font-weight:bold;letter-spacing:0.22px;line-height:normal;}h3{line-height:21px;}p,li{font-size:19px;line-height:1.44em;}a{color:",";text-decoration:none;&:hover{color:",";}}button{overflow:visible;width:auto;padding:0;margin:0;border:none;appearance:none;background:transparent;color:inherit;cursor:pointer;font:inherit;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;line-height:normal;&::-moz-focus-inner{padding:0;border:0;}}html.freeze-body body{overflow:hidden !important;}[hidden]{display:none !important;}"],e=>e.theme.color.ink.base,e=>e.theme.fontFamily.primaryFont,e=>e.theme.color.actionBrand.base,e=>e.theme.color.actionBrand.alt),H=g([""," "," body{font:normal 1rem/1.2rem ",";}h1,h2,h3,h4,h5,h6{font:bold 1rem ",";}p{font:normal 1rem/1.25rem ",";}.sbdocs-title{font:bold 2.75rem/3rem "," !important;}.sb-anchor{p{font:normal 16px/20px ",";}}"],u,x,({theme:e})=>e.fontFamily.primaryFont,({theme:e})=>e.fontFamily.primaryFont,({theme:e})=>e.fontFamily.secondaryFont,({theme:e})=>e.fontFamily.primaryFont,({theme:e})=>e.fontFamily.secondaryFont),$=l(M).withConfig({componentId:"sc-gkr6hy-0"})([""]),A=l.main.withConfig({componentId:"sc-gkr6hy-1"})([""]),v=t(({children:e,context:o})=>{var i,s;const n=o.attachedCSFFile.meta.title.split("/").slice(-1),a=(s=(i=o.attachedCSFFile.meta)==null?void 0:i.tags)==null?void 0:s.includes("stories-mdx");return r.jsx(O,{context:o,children:r.jsxs(b,{theme:c,children:[r.jsx(H,{}),r.jsxs("div",{className:"sb-unstyled",children:[a&&r.jsx($,{children:n}),r.jsx(A,{children:e})]})]})})},"withPreviewStyles"),D=v;v.__docgenInfo={description:"Adds global styles to preview manager",methods:[],displayName:"withPreviewStyles"};const{useParameter:B,addons:N,useEffect:je,useMemo:L}=__STORYBOOK_MODULE_PREVIEW_API__;var Z=Object.defineProperty,K=t((e,o)=>{for(var n in o)Z(e,n,{get:o[n],enumerable:!0})},"D"),Q={};K(Q,{initializeThemeState:()=>E,pluckThemeFromContext:()=>w,useThemeParameters:()=>S});var U="@storybook/addon-styling",V=`${U}/theme-switcher`,W="theming",Y="theme",q={},J={REGISTER_THEMES:`${V}/REGISTER_THEMES`};function w({globals:e}){return e[Y]||""}t(w,"c");function S(){return B(W,q)}t(S,"T");function E(e,o){N.getChannel().emit(J.REGISTER_THEMES,{defaultTheme:o,themes:e})}t(E,"h");var X=t(([e,o])=>o,"H"),ee=t(({Provider:e,GlobalStyles:o,defaultTheme:n,themes:a={}})=>{let i=Object.keys(a),s=n||i[0];return E(i,s),(d,F)=>{let{themeOverride:p}=S(),h=w(F),k=L(()=>{let T=p||h||s,f=Object.entries(a);return f.length===1?X(f[0]):a[T]},[a,h,p]);return e?m.createElement(e,{theme:k},o&&m.createElement(o,null),d()):m.createElement(m.Fragment,null,o&&m.createElement(o,null),d())}},"Q");const oe=g([""," "," body{background:",";}"],u,x,({theme:e})=>e.color.canvas.base),te=ee({themes:j,defaultTheme:"base",Provider:b,GlobalStyles:oe}),_e=[y,te],Pe={options:{storySort:{method:"alphabetical",order:["Introduction","Principles",["Palette","Colours","Typography","Text Styles","Iconography","Spacing"],"Layout","Scaffolding","Elements","Components","Modules","Helpers"],locales:"en-GB"}},actions:{argTypesRegex:"^on[A-Z].*"},controls:{expanded:!0,matchers:{color:/(background|color)$/i,date:/Date$/,bool:/^(is|has)[A-Z]+/}},viewport:{viewports:[_,P,C,R]},backgrounds:{default:"base",values:[{name:"base",value:c.color.canvas.base},{name:"secondary",value:c.color.canvas.secondary}],grid:{disable:!0}},docs:{container:e=>D(e),source:{format:!0,language:"tsx"}}};export{_e as decorators,Pe as parameters};
//# sourceMappingURL=preview-6307607a.js.map
