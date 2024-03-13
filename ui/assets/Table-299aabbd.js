var y=Object.defineProperty;var n=(e,s)=>y(e,"name",{value:s,configurable:!0});import{j as r}from"./jsx-runtime-91e341d4.js";import"./index-17b0cd16.js";import{r as m}from"./index-b56a0300.js";import{u as t}from"./styled-components.browser.esm-dd68fb2f.js";import{I as h}from"./IconButton-c662f5de.js";import{S as b}from"./check-solid-16-ac63b4a9.js";import{p as o}from"./index-6925154b.js";const f=n(e=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"1fa47470446ad488",fill:"none",viewBox:"0 0 16 16",...e},m.createElement("path",{fill:"currentColor",d:"M11 .67H1.67v10.66H3V2h8zm3.33 2.66h-10v12h10zM13 14H5.67V4.67H13z"})),"SvgCopyOutline16"),O=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"})),C=t(h).withConfig({componentId:"sc-lp6qh9-0"})(["&:disabled{color:"," !important;}"],({theme:e})=>e.color.semiotic.success),g=n(({className:e,value:s,timeout:l=1.5,isCosy:p=!0})=>{const[c,i]=m.useState(!1);async function a(d){return await navigator.clipboard.writeText(d)}n(a,"copyTextToClipboard");const x=n(async()=>{try{await a(s),i(!0),setTimeout(()=>{i(!1)},l*1e3)}catch(d){console.error(d)}},"handleCopyClick");return r.jsx(C,{className:e,svg:c?b:f,size:"small",onClick:x,isDisabled:c,isCosy:p})},"CopyButton");g.propTypes={className:o.string,value:o.string.isRequired,timeout:o.number,isCosy:o.bool};g.__docgenInfo={description:"",methods:[],displayName:"CopyButton",props:{timeout:{defaultValue:{value:"1.5",computed:!1},description:"",type:{name:"number"},required:!1},isCosy:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},className:{description:"",type:{name:"string"},required:!1},value:{description:"",type:{name:"string"},required:!0}}};const u=n(({children:e,className:s,colCount:l=1,colWidth:p=10})=>{const c=100-l*p,i=[];for(let a=0;a<l;a++)i.push(r.jsx("col",{width:`${p}%`},a));return r.jsxs("table",{className:s,children:[r.jsxs("colgroup",{children:[r.jsx("col",{width:`${c}%`}),i]}),e]})},"Table");u.propTypes={children:o.oneOfType([o.node,o.arrayOf(o.node)]).isRequired,className:o.string,colCount:o.number,colWidth:o.number};const w=t.small.withConfig({componentId:"sc-1exqy01-0"})(["color:",";font:12px/16px ",";"],({theme:e})=>e.color.ink.light,e=>e.theme.fontFamily.secondaryFont),V=t.article.withConfig({componentId:"sc-1exqy01-1"})(["--cell-padding:","px ","px;margin:","px 0;"],({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.spacing.x2),z=t.header.withConfig({componentId:"sc-1exqy01-2"})(["padding:var(--cell-padding);","{margin-left:","px;}"],w,({theme:e})=>e.spacing.x1),E=t.h1.withConfig({componentId:"sc-1exqy01-3"})(["margin:0;font:bold 14px/18px ",";"],e=>e.theme.fontFamily.secondaryFont),v=t(u).withConfig({componentId:"sc-1exqy01-4"})(["width:100%;border-collapse:collapse;table-layout:fixed;"]),G=t(v).withConfig({componentId:"sc-1exqy01-5"})(["width:100%;border-collapse:collapse;table-layout:fixed;th{padding:0 ","px;border:1px solid transparent;font:16px/20px ",";}"],({theme:e})=>e.spacing.x1_5,({theme:e})=>e.fontFamily.secondaryFont),q=t.td.withConfig({componentId:"sc-1exqy01-6"})(["padding:var(--cell-padding);border:1px solid ",";text-align:center;&:last-child{border-right:0;}"],({theme:e})=>e.color.divider.light),R=t.div.withConfig({componentId:"sc-1exqy01-7"})(["display:flex;align-items:center;justify-content:center;gap:","px;"],({theme:e})=>e.spacing.x2),k=t(q).attrs({as:"th"}).withConfig({componentId:"sc-1exqy01-8"})(["border-left:0;font:normal 12px/16px monospace;text-align:left;"]);u.__docgenInfo={description:"",methods:[],displayName:"Table",props:{colCount:{defaultValue:{value:"1",computed:!1},description:"",type:{name:"number"},required:!1},colWidth:{defaultValue:{value:"10",computed:!1},description:"",type:{name:"number"},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!0},className:{description:"",type:{name:"string"},required:!1}}};export{q as C,w as D,V as G,G as H,k as R,O as _,z as a,E as b,v as c,R as d,g as e};
//# sourceMappingURL=Table-299aabbd.js.map