var T=Object.defineProperty;var x=(e,t)=>T(e,"name",{value:t,configurable:!0});import{n as f,W as _,T as L,F as X,I as z,g as B}from"./chunk-HLWAVYOI-aed7063f.js";import{r as u,R as p}from"./index-b56a0300.js";import{t as G,Z as V,H as W,u as F,c as g}from"./throttle-5a254606.js";import"./iframe-1c590e36.js";import"../sb-preview/runtime.js";import"./index-f3b00cf2.js";import"./_commonjsHelpers-c38d1a10.js";import"./index-19cb0178.js";import"./inheritsLoose-5ae194f1.js";import"./index-32ac9e7b.js";var M=f.div({position:"relative",maxWidth:250}),N=f(_)({position:"absolute",zIndex:1,top:4,left:4}),A=f.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),j=f(L)(({theme:e})=>({fontFamily:e.typography.fonts.base})),Z=f.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),q=f.div(({theme:e,active:t})=>({width:16,height:16,boxShadow:t?`${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`:`${e.appBorderColor} 0 0 0 1px inset`,borderRadius:e.appBorderRadius})),D=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,v=x(({value:e,active:t,onClick:s,style:i,...a})=>{let o=`linear-gradient(${e}, ${e}), ${D}, linear-gradient(#fff, #fff)`;return p.createElement(q,{...a,active:t,onClick:s,style:{...i,backgroundImage:o}})},"Swatch"),J=f(X.Input)(({theme:e})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.typography.fonts.base})),K=f(z)(({theme:e})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.input.color})),P=(e=>(e.RGB="rgb",e.HSL="hsl",e.HEX="hex",e))(P||{}),y=Object.values(P),Q=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,U=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,Y=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,C=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,ee=/^\s*#?([0-9a-f]{3})\s*$/i,te={hex:V,rgb:W,hsl:F},E={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},R=x(e=>{let t=e==null?void 0:e.match(Q);if(!t)return[0,0,0,1];let[,s,i,a,o=1]=t;return[s,i,a,o].map(Number)},"stringToArgs"),$=x(e=>{if(!e)return;let t=!0;if(U.test(e)){let[n,r,d,b]=R(e),[m,h,l]=g.rgb.hsl([n,r,d])||[0,0,0];return{valid:t,value:e,keyword:g.rgb.keyword([n,r,d]),colorSpace:"rgb",rgb:e,hsl:`hsla(${m}, ${h}%, ${l}%, ${b})`,hex:`#${g.rgb.hex([n,r,d]).toLowerCase()}`}}if(Y.test(e)){let[n,r,d,b]=R(e),[m,h,l]=g.hsl.rgb([n,r,d])||[0,0,0];return{valid:t,value:e,keyword:g.hsl.keyword([n,r,d]),colorSpace:"hsl",rgb:`rgba(${m}, ${h}, ${l}, ${b})`,hsl:e,hex:`#${g.hsl.hex([n,r,d]).toLowerCase()}`}}let s=e.replace("#",""),i=g.keyword.rgb(s)||g.hex.rgb(s),a=g.rgb.hsl(i),o=e;if(/[^#a-f0-9]/i.test(e)?o=s:C.test(e)&&(o=`#${s}`),o.startsWith("#"))t=C.test(o);else try{g.keyword.hex(o)}catch{t=!1}return{valid:t,value:o,keyword:g.rgb.keyword(i),colorSpace:"hex",rgb:`rgba(${i[0]}, ${i[1]}, ${i[2]}, 1)`,hsl:`hsla(${a[0]}, ${a[1]}%, ${a[2]}%, 1)`,hex:o}},"parseValue"),ae=x((e,t,s)=>{if(!e||!(t!=null&&t.valid))return E[s];if(s!=="hex")return(t==null?void 0:t[s])||E[s];if(!t.hex.startsWith("#"))try{return`#${g.keyword.hex(t.hex)}`}catch{return E.hex}let i=t.hex.match(ee);if(!i)return C.test(t.hex)?t.hex:E.hex;let[a,o,n]=i[1].split("");return`#${a}${a}${o}${o}${n}${n}`},"getRealValue"),re=x((e,t)=>{let[s,i]=u.useState(e||""),[a,o]=u.useState(()=>$(s)),[n,r]=u.useState((a==null?void 0:a.colorSpace)||"hex");u.useEffect(()=>{let h=e||"",l=$(h);i(h),o(l),r((l==null?void 0:l.colorSpace)||"hex")},[e]);let d=u.useMemo(()=>ae(s,a,n).toLowerCase(),[s,a,n]),b=u.useCallback(h=>{let l=$(h),w=(l==null?void 0:l.value)||h||"";i(w),w===""&&(o(void 0),t(void 0)),l&&(o(l),r(l.colorSpace),t(l.value))},[t]),m=u.useCallback(()=>{let h=y.indexOf(n)+1;h>=y.length&&(h=0),r(y[h]);let l=(a==null?void 0:a[y[h]])||"";i(l),t(l)},[a,n,t]);return{value:s,realValue:d,updateValue:b,color:a,colorSpace:n,cycleColorSpace:m}},"useColorInput"),k=x(e=>e.replace(/\s*/,"").toLowerCase(),"id"),se=x((e,t,s)=>{let[i,a]=u.useState(t!=null&&t.valid?[t]:[]);u.useEffect(()=>{t===void 0&&a([])},[t]);let o=u.useMemo(()=>(e||[]).map(r=>typeof r=="string"?$(r):r.title?{...$(r.color),keyword:r.title}:$(r.color)).concat(i).filter(Boolean).slice(-27),[e,i]),n=u.useCallback(r=>{r!=null&&r.valid&&(o.some(d=>k(d[s])===k(r[s]))||a(d=>d.concat(r)))},[s,o]);return{presets:o,addPreset:n}},"usePresets"),le=x(({name:e,value:t,onChange:s,onFocus:i,onBlur:a,presetColors:o,startOpen:n=!1})=>{let r=u.useCallback(G(s,200),[s]),{value:d,realValue:b,updateValue:m,color:h,colorSpace:l,cycleColorSpace:w}=re(t,r),{presets:S,addPreset:H}=se(o,h,l),I=te[l];return p.createElement(M,null,p.createElement(N,{startOpen:n,closeOnOutsideClick:!0,onVisibleChange:()=>H(h),tooltip:p.createElement(A,null,p.createElement(I,{color:b==="transparent"?"#000000":b,onChange:m,onFocus:i,onBlur:a}),S.length>0&&p.createElement(Z,null,S.map((c,O)=>p.createElement(_,{key:`${c.value}-${O}`,hasChrome:!1,tooltip:p.createElement(j,{note:c.keyword||c.value})},p.createElement(v,{value:c[l],active:h&&k(c[l])===k(h[l]),onClick:()=>m(c.value)})))))},p.createElement(v,{value:b,style:{margin:4}})),p.createElement(J,{id:B(e),value:d,onChange:c=>m(c.target.value),onFocus:c=>c.target.select(),placeholder:"Choose color..."}),d?p.createElement(K,{icon:"markup",onClick:w}):null)},"ColorControl"),xe=le;export{le as ColorControl,xe as default};
//# sourceMappingURL=Color-6VNJS4EI-69039dfe.js.map
