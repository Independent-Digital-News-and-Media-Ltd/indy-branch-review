var E=Object.defineProperty;var e=(o,r)=>E(o,"name",{value:r,configurable:!0});import{j as n}from"./jsx-runtime-91e341d4.js";import{r as t}from"./index-b56a0300.js";import{b as P}from"./Symbols.hoc-fb0f215f.js";import{i as j}from"./base-63caefee.js";import{g as p,c as A,W as B,T as H,G as $,A as G,a as L,S as M,B as N,b as q}from"./PopupTip.styles-02574b22.js";import{S as C}from"./info-outline-16-a4f0c259.js";const f=e(({children:o,svg:r=C,size:i=P})=>{const[s,a]=t.useState(!1),[l,m]=t.useState({left:0,top:0}),[d,g]=t.useState("below"),c=t.useRef(null),u=t.useRef(null),h=j[i].width;t.useLayoutEffect(()=>{if(s){const S=p(c),w=p(u),I=document.documentElement.clientWidth,O=document.documentElement.clientHeight,[T,W,b]=A(S,w,I,O);m({left:T,top:W}),g(b)}},[s]);const y=q(s,d);function v(){a(!0)}e(v,"onFocus");function R(){a(!1)}e(R,"onBlur");function _(){a(!0)}e(_,"onMouseOver");function x(){a(!1)}return e(x,"onMouseOut"),n.jsxs(B,{children:[n.jsx(H,{className:y,tabIndex:0,ref:c,$gap:$,$triggerwidth:h,$arrowheight:G,$arrowwidth:L,onFocus:v,onMouseOver:_,onMouseOut:x,onBlur:R,children:n.jsx(M,{svg:r,size:i})}),s&&n.jsx(N,{ref:u,style:{left:l.left,top:l.top},children:o})]})},"PopupTip");try{f.displayName="PopupTip",f.__docgenInfo={description:"",displayName:"PopupTip",props:{svg:{defaultValue:null,description:"",name:"svg",required:!1,type:{name:"any"}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"base"'},{value:'"large"'},{value:'"x-small"'}]}}}}}catch{}export{f as P};
//# sourceMappingURL=PopupTip-a63cb3e1.js.map