var F=Object.defineProperty;var r=(t,e)=>F(t,"name",{value:e,configurable:!0});import{j as b}from"./jsx-runtime-91e341d4.js";import{r as i}from"./index-b56a0300.js";import{u as k}from"./styled-components.browser.esm-dd68fb2f.js";import{h as _}from"./mixins-e8622e63.js";import"./index-17b0cd16.js";import{p as w}from"./index-6925154b.js";const G=r((t,e)=>{const n=!Array.isArray(t),c=typeof e!="number",s=e<=0||e%1!==0;if(n)throw new Error("`items` should be an array");if(c)throw new Error("`n` should be a number");if(s)throw new Error("`n` should be a positive integer");const u=[],d=Math.ceil(t.length/e);for(let l=0;l<d;l++)u.push(t.slice(l*e,(l+1)*e));return u},"chunk"),M=r((t,e,n)=>Math.min(Math.max(n,t),e),"clamp"),O=0,W=1,z=k.div.withConfig({componentId:"sc-1lk1nlv-0"})([""]),D=k.ul.withConfig({componentId:"sc-1lk1nlv-1"})(["display:flex;width:100%;gap:var(--carousel-gap,0);padding:0;margin:0;list-style:none;-webkit-overflow-scrolling:touch;overflow-x:auto;overflow-y:visible;scroll-behavior:smooth;scroll-snap-type:x mandatory;",""],_),X=k.nav.withConfig({componentId:"sc-1lk1nlv-2"})([""]),H=k.li.withConfig({componentId:"sc-1lk1nlv-3"})(["display:flex;scroll-snap-align:start;"]),J={children:w.node,className:w.string,initialIndex:w.number,ButtonNext:w.elementType,ButtonPrev:w.elementType};function K(t){const{target:e}=t;if(e){const n=e.type;if(n&&n==="checkbox")return!0}return!1}r(K,"isCheckbox");function Q(t,e,n){var c;(c=document.activeElement)==null||c.scrollIntoView({behavior:t,block:e,inline:n})}r(Q,"scrollActiveElIntoView");const U=r(({root:t,behavior:e="smooth",block:n="nearest",inline:c="center"})=>i.useEffect(()=>{const s=t.current;function u(d){if(K(d))return;(s==null?void 0:s.contains(document.activeElement))&&Q(e,n,c)}return r(u,"handleFocused"),s==null||s.addEventListener("focusin",u),()=>{s==null||s.removeEventListener("focusin",u)}},[t,e,n,c]),"useScrollToFocusedElement"),Y=r(({nodes:t,root:e})=>{const n=i.useRef(null),[c,s]=i.useState(t.map(()=>!1)),[u,d]=i.useState(!0),[l,R]=i.useState(!0);return i.useEffect(()=>{const A=r(o=>o.forEach(a=>{const{target:T,isIntersecting:v,intersectionRatio:f}=a,m=t.findIndex(I=>I===T),E=v&&f>.9,C=v&&f>.1,S=m===0,y=m===t.length-1;s(I=>{const N=[...I];return N[m]=C,N}),S&&d(E),y&&R(E)}),"handleIntersect");return n.current=new IntersectionObserver(A,{threshold:[.1,.5,.9],root:e.current,rootMargin:"-1px"}),t.forEach(o=>{var a;(a=n.current)==null||a.observe(o)}),()=>{var o;return(o=n.current)==null?void 0:o.disconnect()}},[e,t]),[c,u,l]},"useVisibleIndexes"),V=r(({className:t,items:e,ButtonNext:n,ButtonPrev:c,renderSlide:s,...u})=>{const{initialIndex:d=O,increment:l=W}=u,A=G(e,l),o=i.useRef(),a=i.useRef([]),T=i.useRef([]),v=0,f=e.length-1,[m,E,C]=Y({nodes:a.current,root:o}),S=!(E&&C),y=i.useCallback((g=0)=>{var q,B,L;const p=M(v,f,g),h=0,x=(B=(q=a==null?void 0:a.current)==null?void 0:q.at(p))==null?void 0:B.offsetLeft,j="smooth";(L=o==null?void 0:o.current)==null||L.scrollTo({top:h,left:x,behavior:j})},[o,v,f]);i.useEffect(()=>{y(d)},[d,y]),U({root:o,behavior:"smooth",block:"nearest",inline:"center"});const I=i.useCallback(g=>{const p=m.findIndex(x=>x),h=M(v,f,p+g);y(h)},[m,f,y]),N=r(()=>I(-1),"handlePrevClick"),P=r(()=>I(1),"handleNextClick");return b.jsxs(z,{className:t,children:[b.jsx(D,{ref:o,children:A.map((g,p)=>b.jsx(H,{ref:h=>a.current[p]=h,children:g.map((h,x)=>s({slideIndex:x,itemIndex:p*l+x,item:h,isVisible:!!m[p],ref:j=>{T.current[x]=j}}))},p))}),S&&b.jsxs(X,{children:[b.jsx(c,{disabled:E,onClick:N}),b.jsx(n,{disabled:C,onClick:P})]})]})},"Carousel");V.displayName="Carousel";V.propTypes=J;V.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{children:{description:"",type:{name:"node"},required:!1},className:{description:"",type:{name:"string"},required:!1},initialIndex:{description:"",type:{name:"number"},required:!1},ButtonNext:{description:"",type:{name:"elementType"},required:!1},ButtonPrev:{description:"",type:{name:"elementType"},required:!1}}};export{V as C,H as G,O as I,X as N,D as S};
//# sourceMappingURL=Carousel-f2ad34e7.js.map
