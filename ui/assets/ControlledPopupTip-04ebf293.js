var b=Object.defineProperty;var n=(a,e)=>b(a,"name",{value:e,configurable:!0});import{j as o}from"./jsx-runtime-91e341d4.js";import{r as t}from"./index-b56a0300.js";import{i as E}from"./dimensions-f12ee5f1.js";import{b as j}from"./Symbols.hoc-fb0f215f.js";import{g as u,c as C,W as I,T as P,G as q,A,a as H,S as N,B as V,b as B}from"./PopupTip.styles-02574b22.js";import{S as $}from"./info-outline-16-a4f0c259.js";const c=n(({children:a,isOpen:e,svg:p=$,id:d,size:r=j,className:m})=>{const[s,f]=t.useState({left:0,top:0}),[g,y]=t.useState("below"),i=t.useRef(null),l=t.useRef(null),h=E[r].width;t.useLayoutEffect(()=>{if(e){const R=u(i),_=u(l),x=document.documentElement.clientWidth,w=document.documentElement.clientHeight,[S,T,W]=C(R,_,x,w);f({left:S,top:T}),y(W)}},[e]);const v=B(e,g);return o.jsxs(I,{className:m,children:[o.jsx(P,{className:v,ref:i,$gap:q,$triggerwidth:h,$arrowheight:A,$arrowwidth:H,children:o.jsx(N,{svg:p,size:r})}),e&&o.jsx(V,{id:d,ref:l,style:{left:s.left,top:s.top},children:a})]})},"ControlledPopupTip");try{c.displayName="ControlledPopupTip",c.__docgenInfo={description:"",displayName:"ControlledPopupTip",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},svg:{defaultValue:null,description:"",name:"svg",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"base"'},{value:'"large"'},{value:'"x-small"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{c as C};
//# sourceMappingURL=ControlledPopupTip-04ebf293.js.map