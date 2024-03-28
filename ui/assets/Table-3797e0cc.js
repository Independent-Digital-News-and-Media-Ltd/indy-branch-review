var h=Object.defineProperty;var n=(e,s)=>h(e,"name",{value:s,configurable:!0});import{j as r}from"./jsx-runtime-91e341d4.js";import"./index-17b0cd16.js";import{r as l}from"./index-b56a0300.js";import{u as t}from"./styled-components.browser.esm-dd68fb2f.js";import{I as b}from"./IconButton-dda0da21.js";import{p as o}from"./index-6925154b.js";const f=n(e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"1fb61e0d3dc0ad8f",viewBox:"0 0 16 16",...e},l.createElement("path",{fill:"currentColor",d:"M6.35 10.35 3.83 7.9l-.84.81 3.36 3.27 7.21-7-.84-.82z"})),"SvgCheckSolid16"),z=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"})),g=n(e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"1fa47470446ad488",fill:"none",viewBox:"0 0 16 16",...e},l.createElement("path",{fill:"currentColor",d:"M11 .67H1.67v10.66H3V2h8zm3.33 2.66h-10v12h10zM13 14H5.67V4.67H13z"})),"SvgCopyOutline16"),E=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"})),w=t(b).withConfig({componentId:"sc-lp6qh9-0"})(["&:disabled{color:"," !important;}"],({theme:e})=>e.color.semiotic.success),x=n(({className:e,value:s,timeout:c=1.5,isCosy:p=!0})=>{const[d,a]=l.useState(!1);async function i(m){return await navigator.clipboard.writeText(m)}n(i,"copyTextToClipboard");const y=n(async()=>{try{await i(s),a(!0),setTimeout(()=>{a(!1)},c*1e3)}catch(m){console.error(m)}},"handleCopyClick");return r.jsx(w,{className:e,svg:d?f:g,size:"small",onClick:y,isDisabled:d,isCosy:p})},"CopyButton");x.propTypes={className:o.string,value:o.string.isRequired,timeout:o.number,isCosy:o.bool};x.__docgenInfo={description:"",methods:[],displayName:"CopyButton",props:{timeout:{defaultValue:{value:"1.5",computed:!1},description:"",type:{name:"number"},required:!1},isCosy:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},className:{description:"",type:{name:"string"},required:!1},value:{description:"",type:{name:"string"},required:!0}}};const u=n(({children:e,className:s,colCount:c=1,colWidth:p=10})=>{const d=100-c*p,a=[];for(let i=0;i<c;i++)a.push(r.jsx("col",{width:`${p}%`},i));return r.jsxs("table",{className:s,children:[r.jsxs("colgroup",{children:[r.jsx("col",{width:`${d}%`}),a]}),e]})},"Table");u.propTypes={children:o.oneOfType([o.node,o.arrayOf(o.node)]).isRequired,className:o.string,colCount:o.number,colWidth:o.number};const C=t.small.withConfig({componentId:"sc-1exqy01-0"})(["color:",";font:12px/16px ",";"],({theme:e})=>e.color.ink.light,e=>e.theme.fontFamily.secondaryFont),F=t.article.withConfig({componentId:"sc-1exqy01-1"})(["--cell-padding:","px ","px;margin:","px 0;"],({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.spacing.x2),N=t.header.withConfig({componentId:"sc-1exqy01-2"})(["padding:var(--cell-padding);","{margin-left:","px;}"],C,({theme:e})=>e.spacing.x1),V=t.h1.withConfig({componentId:"sc-1exqy01-3"})(["margin:0;font:bold 14px/18px ",";"],e=>e.theme.fontFamily.secondaryFont),v=t(u).withConfig({componentId:"sc-1exqy01-4"})(["width:100%;border-collapse:collapse;table-layout:fixed;"]),B=t(v).withConfig({componentId:"sc-1exqy01-5"})(["width:100%;border-collapse:collapse;table-layout:fixed;th{padding:0 ","px;border:1px solid transparent;font:16px/20px ",";}"],({theme:e})=>e.spacing.x1_5,({theme:e})=>e.fontFamily.secondaryFont),_=t.td.withConfig({componentId:"sc-1exqy01-6"})(["padding:var(--cell-padding);border:1px solid ",";text-align:center;&:last-child{border-right:0;}"],({theme:e})=>e.color.divider.light),G=t.div.withConfig({componentId:"sc-1exqy01-7"})(["display:flex;align-items:center;justify-content:center;gap:","px;"],({theme:e})=>e.spacing.x2),M=t(_).attrs({as:"th"}).withConfig({componentId:"sc-1exqy01-8"})(["border-left:0;font:normal 12px/16px monospace;text-align:left;"]);u.__docgenInfo={description:"",methods:[],displayName:"Table",props:{colCount:{defaultValue:{value:"1",computed:!1},description:"",type:{name:"number"},required:!1},colWidth:{defaultValue:{value:"10",computed:!1},description:"",type:{name:"number"},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!0},className:{description:"",type:{name:"string"},required:!1}}};export{_ as C,C as D,F as G,B as H,M as R,z as _,N as a,V as b,v as c,G as d,E as e,x as f};
//# sourceMappingURL=Table-3797e0cc.js.map