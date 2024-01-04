var b=Object.defineProperty;var a=(e,t)=>b(e,"name",{value:t,configurable:!0});import{j as d}from"./jsx-runtime-91e341d4.js";import{r as u}from"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";const g=a(e=>{const t=Math.floor(e/60),r=Math.floor(t/60);return{daysAgo:Math.floor(r/24),hoursAgo:r,minutesAgo:t}},"getTimeUnits"),l=a(e=>{if(e===0)return"";const{daysAgo:t,hoursAgo:r,minutesAgo:s}=g(e);return s===0?`${e} second${e>1?"s":""} ago`:r===0?`${s} minute${s>1?"s":""} ago`:t===0?`${r} hour${r>1?"s":""} ago`:`${t} day${t>1?"s":""} ago`},"getFormattedTimeAgoEn"),_=a(e=>{if(e===0)return"";const{daysAgo:t,hoursAgo:r,minutesAgo:s}=g(e);return s===0?`Hace ${e} segundo${e>1?"s":""}`:r===0?`Hace ${s} minuto${s>1?"s":""}`:t===0&&r===1?`${r} hora antes`:t===0?`Hace ${r} hora${r>1?"s":""}`:`Hace ${t} día${t>1?"s":""}`},"getFormattedTimeAgoEs"),f=a(({lang:e,timestamp:t})=>{const[r,s]=u.useState(0);u.useEffect(()=>{s(Math.floor(Date.now()/1e3)-t);const q=setInterval(()=>{s(V=>V+1)},1e3);return()=>clearInterval(q)},[t]);const U=u.useMemo(()=>e==="es"?_(r):l(r),[e,r]);return d.jsx(d.Fragment,{children:U})},"TimeAgo"),L=f;try{g.displayName="getTimeUnits",g.__docgenInfo={description:"",displayName:"getTimeUnits",props:{}}}catch{}try{l.displayName="getFormattedTimeAgoEn",l.__docgenInfo={description:"",displayName:"getFormattedTimeAgoEn",props:{}}}catch{}try{_.displayName="getFormattedTimeAgoEs",_.__docgenInfo={description:"",displayName:"getFormattedTimeAgoEs",props:{}}}catch{}try{f.displayName="TimeAgo",f.__docgenInfo={description:"",displayName:"TimeAgo",props:{lang:{defaultValue:null,description:"",name:"lang",required:!0,type:{name:"string"}},timestamp:{defaultValue:null,description:"",name:"timestamp",required:!0,type:{name:"number"}}}}}catch{}const P={title:"Elements/TimeAgo",component:L,decorators:[e=>d.jsx("div",{style:{paddingLeft:"50px"},children:d.jsx(e,{})})]},v=60,w=v*60,O=w*24,o=Math.floor(Date.now()/1e3),R=o-5,k=o-v*5,z=o-w*5,B=o-O*5,n={args:{timestamp:o}},m={args:{timestamp:R}},i={args:{timestamp:k}},c={args:{timestamp:z}},p={args:{timestamp:B}};var y,A,h;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    timestamp: timestampNow
  }
}`,...(h=(A=n.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};var $,T,S;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    timestamp: timestamp5Secs
  }
}`,...(S=(T=m.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var E,M,N;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    timestamp: timestamp5Mins
  }
}`,...(N=(M=i.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var x,D,H;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    timestamp: timestamp5Hrs
  }
}`,...(H=(D=c.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var F,I,j;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    timestamp: timestamp5Days
  }
}`,...(j=(I=p.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};const Q=["Default","Ago5Secs","Ago5Mins","Ago5Hrs","Ago5Days"];export{p as Ago5Days,c as Ago5Hrs,i as Ago5Mins,m as Ago5Secs,n as Default,Q as __namedExportsOrder,P as default};
//# sourceMappingURL=TimeAgo.stories-21dfbc39.js.map
