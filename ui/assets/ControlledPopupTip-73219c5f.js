var j=Object.defineProperty;var i=(o,e)=>j(o,"name",{value:e,configurable:!0});import{j as a}from"./jsx-runtime-91e341d4.js";import{r as t}from"./index-b56a0300.js";import{a as C}from"./Icon.constants-f71a83c2.js";import{g as u,c as E,W as q,T as N,S as P,B as V,a as B}from"./PopupTip.styles-270279cc.js";import{S as I}from"./info-outline-16-a4f0c259.js";const c=i(({children:o,isOpen:e,svg:p=I,id:d,size:s=C,className:m})=>{const[l,f]=t.useState({left:0,top:0}),[g,y]=t.useState("below"),r=t.useRef(null),n=t.useRef(null);t.useLayoutEffect(()=>{if(e){const h=u(r),x=u(n),_=document.documentElement.clientWidth,S=document.documentElement.clientHeight,[R,T,b]=E(h,x,_,S);f({left:R,top:T}),y(b)}},[e]);const v=B(e,g);return a.jsxs(q,{className:m,children:[a.jsx(N,{className:v,ref:r,$size:s,children:a.jsx(P,{svg:p,size:s})}),e&&a.jsx(V,{id:d,ref:n,style:{left:l.left,top:l.top},children:o})]})},"ControlledPopupTip");try{c.displayName="ControlledPopupTip",c.__docgenInfo={description:"",displayName:"ControlledPopupTip",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},svg:{defaultValue:null,description:"",name:"svg",required:!1,type:{name:"any"}},size:{defaultValue:{value:"small"},description:"The size of the icon to be used",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"base"'},{value:'"large"'},{value:'"x-small"'}]}}}}}catch{}export{c as C};
//# sourceMappingURL=ControlledPopupTip-73219c5f.js.map
