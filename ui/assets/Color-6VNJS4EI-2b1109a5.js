var T=Object.defineProperty;var c=(e,t)=>T(e,"name",{value:t,configurable:!0});import{r as g,R as d}from"./index-b56a0300.js";import{t as L,Z as X,H as z,u as B,c as m}from"./throttle-5a254606.js";import{n as f,W as _,T as G,F as V,I as W}from"./preview-dbd8dd28.js";import"./_commonjsHelpers-c38d1a10.js";import"./index-f3b00cf2.js";import"./Grid.constants-8a58daa3.js";import"./breakPoints-89c7d41a.js";import"./devices-1d39230d.js";import"./themes-3fdfbe38.js";import"./palette-6bcc864c.js";import"./colors-3e41a0f7.js";import"./base-5a9e6c57.js";import"./Icon.constants-f71a83c2.js";import"./spacings-dc016d25.js";import"./fontWeights-1d7bfb43.js";import"./styled-components.browser.esm-dd68fb2f.js";import"./viewports-741975bd.js";import"./jsx-runtime-91e341d4.js";import"./Symbols.hoc-d0e330fb.js";import"./index-17b0cd16.js";import"./index-6925154b.js";import"./chunk-HLWAVYOI-91021595.js";import"./iframe-dd7063b1.js";import"../sb-preview/runtime.js";import"./index-19cb0178.js";import"./inheritsLoose-5ae194f1.js";import"./index-32ac9e7b.js";import"./fontFace-4f1675a0.js";var F=c(e=>`control-${e.replace(/\s+/g,"-")}`,"getControlId"),M=f.div({position:"relative",maxWidth:250}),N=f(_)({position:"absolute",zIndex:1,top:4,left:4}),A=f.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),j=f(G)(({theme:e})=>({fontFamily:e.typography.fonts.base})),Z=f.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),q=f.div(({theme:e,active:t})=>({width:16,height:16,boxShadow:t?`${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`:`${e.appBorderColor} 0 0 0 1px inset`,borderRadius:e.appBorderRadius})),D=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,v=c(({value:e,active:t,onClick:o,style:i,...r})=>{let s=`linear-gradient(${e}, ${e}), ${D}, linear-gradient(#fff, #fff)`;return d.createElement(q,{...r,active:t,onClick:o,style:{...i,backgroundImage:s}})},"Swatch"),J=f(V.Input)(({theme:e})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.typography.fonts.base})),K=f(W)(({theme:e})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.input.color})),P=(e=>(e.RGB="rgb",e.HSL="hsl",e.HEX="hex",e))(P||{}),y=Object.values(P),Q=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,U=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,Y=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,C=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,ee=/^\s*#?([0-9a-f]{3})\s*$/i,te={hex:X,rgb:z,hsl:B},E={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},R=c(e=>{let t=e==null?void 0:e.match(Q);if(!t)return[0,0,0,1];let[,o,i,r,s=1]=t;return[o,i,r,s].map(Number)},"stringToArgs"),$=c(e=>{if(!e)return;let t=!0;if(U.test(e)){let[p,a,h,b]=R(e),[x,n,l]=m.rgb.hsl([p,a,h])||[0,0,0];return{valid:t,value:e,keyword:m.rgb.keyword([p,a,h]),colorSpace:"rgb",rgb:e,hsl:`hsla(${x}, ${n}%, ${l}%, ${b})`,hex:`#${m.rgb.hex([p,a,h]).toLowerCase()}`}}if(Y.test(e)){let[p,a,h,b]=R(e),[x,n,l]=m.hsl.rgb([p,a,h])||[0,0,0];return{valid:t,value:e,keyword:m.hsl.keyword([p,a,h]),colorSpace:"hsl",rgb:`rgba(${x}, ${n}, ${l}, ${b})`,hsl:e,hex:`#${m.hsl.hex([p,a,h]).toLowerCase()}`}}let o=e.replace("#",""),i=m.keyword.rgb(o)||m.hex.rgb(o),r=m.rgb.hsl(i),s=e;if(/[^#a-f0-9]/i.test(e)?s=o:C.test(e)&&(s=`#${o}`),s.startsWith("#"))t=C.test(s);else try{m.keyword.hex(s)}catch{t=!1}return{valid:t,value:s,keyword:m.rgb.keyword(i),colorSpace:"hex",rgb:`rgba(${i[0]}, ${i[1]}, ${i[2]}, 1)`,hsl:`hsla(${r[0]}, ${r[1]}%, ${r[2]}%, 1)`,hex:s}},"parseValue"),re=c((e,t,o)=>{if(!e||!(t!=null&&t.valid))return E[o];if(o!=="hex")return(t==null?void 0:t[o])||E[o];if(!t.hex.startsWith("#"))try{return`#${m.keyword.hex(t.hex)}`}catch{return E.hex}let i=t.hex.match(ee);if(!i)return C.test(t.hex)?t.hex:E.hex;let[r,s,p]=i[1].split("");return`#${r}${r}${s}${s}${p}${p}`},"getRealValue"),ae=c((e,t)=>{let[o,i]=g.useState(e||""),[r,s]=g.useState(()=>$(o)),[p,a]=g.useState((r==null?void 0:r.colorSpace)||"hex");g.useEffect(()=>{let n=e||"",l=$(n);i(n),s(l),a((l==null?void 0:l.colorSpace)||"hex")},[e]);let h=g.useMemo(()=>re(o,r,p).toLowerCase(),[o,r,p]),b=g.useCallback(n=>{let l=$(n),w=(l==null?void 0:l.value)||n||"";i(w),w===""&&(s(void 0),t(void 0)),l&&(s(l),a(l.colorSpace),t(l.value))},[t]),x=g.useCallback(()=>{let n=y.indexOf(p)+1;n>=y.length&&(n=0),a(y[n]);let l=(r==null?void 0:r[y[n]])||"";i(l),t(l)},[r,p,t]);return{value:o,realValue:h,updateValue:b,color:r,colorSpace:p,cycleColorSpace:x}},"useColorInput"),k=c(e=>e.replace(/\s*/,"").toLowerCase(),"id"),oe=c((e,t,o)=>{let[i,r]=g.useState(t!=null&&t.valid?[t]:[]);g.useEffect(()=>{t===void 0&&r([])},[t]);let s=g.useMemo(()=>(e||[]).map(a=>typeof a=="string"?$(a):a.title?{...$(a.color),keyword:a.title}:$(a.color)).concat(i).filter(Boolean).slice(-27),[e,i]),p=g.useCallback(a=>{a!=null&&a.valid&&(s.some(h=>k(h[o])===k(a[o]))||r(h=>h.concat(a)))},[o,s]);return{presets:s,addPreset:p}},"usePresets"),le=c(({name:e,value:t,onChange:o,onFocus:i,onBlur:r,presetColors:s,startOpen:p=!1})=>{let a=g.useCallback(L(o,200),[o]),{value:h,realValue:b,updateValue:x,color:n,colorSpace:l,cycleColorSpace:w}=ae(t,a),{presets:S,addPreset:H}=oe(s,n,l),I=te[l];return d.createElement(M,null,d.createElement(N,{startOpen:p,closeOnOutsideClick:!0,onVisibleChange:()=>H(n),tooltip:d.createElement(A,null,d.createElement(I,{color:b==="transparent"?"#000000":b,onChange:x,onFocus:i,onBlur:r}),S.length>0&&d.createElement(Z,null,S.map((u,O)=>d.createElement(_,{key:`${u.value}-${O}`,hasChrome:!1,tooltip:d.createElement(j,{note:u.keyword||u.value})},d.createElement(v,{value:u[l],active:n&&k(u[l])===k(n[l]),onClick:()=>x(u.value)})))))},d.createElement(v,{value:b,style:{margin:4}})),d.createElement(J,{id:F(e),value:h,onChange:u=>x(u.target.value),onFocus:u=>u.target.select(),placeholder:"Choose color..."}),h?d.createElement(K,{icon:"markup",onClick:w}):null)},"ColorControl"),Xe=le;export{le as ColorControl,Xe as default};
//# sourceMappingURL=Color-6VNJS4EI-2b1109a5.js.map
