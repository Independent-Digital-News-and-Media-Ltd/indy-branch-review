var b=Object.defineProperty;var p=(o,i)=>b(o,"name",{value:i,configurable:!0});import{M as C}from"./chunk-HLWAVYOI-aa050551.js";import{f}from"./fontFace-4f1675a0.js";import{j as t}from"./jsx-runtime-91e341d4.js";import"./index-17b0cd16.js";import{u as s}from"./styled-components.browser.esm-dd68fb2f.js";import{p as a}from"./index-6925154b.js";import{u as y}from"./index-54ad57ef.js";import"./iframe-8a4a29b9.js";import"../sb-preview/runtime.js";import"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";import"./index-f3b00cf2.js";import"./index-19cb0178.js";import"./inheritsLoose-5ae194f1.js";import"./index-32ac9e7b.js";import"./fontWeights-1d7bfb43.js";const r="The quick brown fox jumps over the lazy dog",S=s.section.withConfig({componentId:"sc-1g61vf3-0"})(["margin-top:3rem;&:first-child{margin-top:0;}"]),v=s.h1.withConfig({componentId:"sc-1g61vf3-1"})(["margin:0 0 20px;"]),I=s.h2.withConfig({componentId:"sc-1g61vf3-2"})(["margin:0 0 20px;font-size:20px;"]),F=s.span.withConfig({componentId:"sc-1g61vf3-3"})(["position:absolute;top:-45px;right:0;color:",";font-size:18px;"],({theme:o})=>o.color.ink.base),u=p(({className:o,label:i,children:e,style:n})=>t.jsxs("p",{className:o,children:[t.jsx(F,{children:i}),t.jsx("span",{style:n,children:e})]}),"TestStringComponent");u.propTypes={className:a.string,label:a.string,children:a.node,style:a.object};const d=s(u).withConfig({componentId:"sc-1g61vf3-4"})(["position:relative;padding:20px;border-radius:5px;background:",";font-size:60px;line-height:60px;"],({theme:o})=>o.color.canvas.base),T=s(d).withConfig({componentId:"sc-1g61vf3-5"})(["color:",";"],({theme:o})=>o.color.semiotic.success),_=s(d).withConfig({componentId:"sc-1g61vf3-6"})(["position:absolute;top:0;left:0;margin:0;background:transparent;color:",";opacity:0.7;"],({theme:o})=>o.color.primary.base),w=s.div.withConfig({componentId:"sc-1g61vf3-7"})(["position:relative;"]);s.dd.withConfig({componentId:"sc-1g61vf3-8"})(["font:18px/26px ",";"],o=>o.theme.fontFamily.secondaryFont);const l=p(({title:o,variants:i,caps:e})=>t.jsxs(S,{children:[t.jsx(v,{children:o}),i.map(({weight:n,style:c,src:g,fallback:j})=>{const x=n==="bold",h=c==="italic";return t.jsxs("div",{children:[t.jsxs(I,{children:[x&&h?"bold italic":x?"bold":h?"italic":"default","- ",g]}),t.jsx(d,{label:"original",style:{fontFamily:o,fontWeight:n,fontStyle:c},children:e?r.toUpperCase():r}),j&&t.jsxs(t.Fragment,{children:[t.jsx(d,{label:"fallback",style:{fontFamily:`${o} Fallback`,fontWeight:n,fontStyle:c},children:e?r.toUpperCase():r}),t.jsxs(w,{children:[t.jsx(T,{label:"comparison",style:{fontFamily:o,fontWeight:n,fontStyle:c},children:e?r.toUpperCase():r}),t.jsx(_,{style:{fontFamily:`${o} Fallback`,fontWeight:n,fontStyle:c},children:e?r.toUpperCase():r})]})]})]},g)})]}),"FontFace");a.string.isRequired;l.propTypes={title:a.string.isRequired,variants:a.array.isRequired,caps:a.bool};l.__docgenInfo={description:"",methods:[],displayName:"FontFace",props:{title:{description:"",type:{name:"string"},required:!0},variants:{description:"",type:{name:"array"},required:!0},caps:{description:"",type:{name:"bool"},required:!1}}};function k(o={}){const{wrapper:i}=Object.assign({},y(),o.components);return i?t.jsx(i,{...o,children:t.jsx(e,{})}):e();function e(){const n=Object.assign({h2:"h2",p:"p",code:"code"},y(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(C,{title:"Principles/Typography"}),`
`,t.jsx(n.h2,{id:"font-family",children:"Font-family"}),`
`,t.jsx(l,{title:"Indy Serif",variants:f["Indy Serif"]}),`
`,t.jsx(l,{title:"Indy Sans",variants:f["Indy Sans"]}),`
`,t.jsx(l,{title:"Indy Sans CAPS",caps:!0,variants:f["Indy Sans CAPS"]}),`
`,t.jsx(n.h2,{id:"text-styles",children:"Text Styles"}),`
`,t.jsx(n.p,{children:t.jsx(n.code,{children:"#theme/textStyles"})})]})}}p(k,"MDXContent");const q=p(()=>{throw new Error("Docs-only story")},"__page");q.parameters={docsOnly:!0};const m={title:"Principles/Typography",tags:["stories-mdx"],includeStories:["__page"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:k};const J=["__page"];export{J as __namedExportsOrder,q as __page,m as default};
//# sourceMappingURL=Typography.stories-140d0452.js.map
