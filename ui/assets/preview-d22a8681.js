var T=Object.defineProperty;var o=(t,e)=>T(t,"name",{value:e,configurable:!0});import{_ as N}from"./iframe-1c590e36.js";import"../sb-preview/runtime.js";var n="storybook/a11y",U=`${n}/result`,w=`${n}/request`,y=`${n}/running`,L=`${n}/error`,d=`${n}/manual`,a={RESULT:U,REQUEST:w,RUNNING:y,ERROR:L,MANUAL:d};const{global:f}=__STORYBOOK_MODULE_GLOBAL__,{addons:g}=__STORYBOOK_MODULE_PREVIEW_API__;var{document:p,window:A}=f,r=g.getChannel(),i=!1,l,h=o(async t=>{let{manual:e}=await O(t);e||await R(t)},"handleRequest"),R=o(async t=>{l=t;try{let e=await O(t);if(!i){i=!0,r.emit(a.RUNNING);let _=(await N(()=>import("./axe-8362fa62.js").then(S=>S.a),["./axe-8362fa62.js","./_commonjsHelpers-c38d1a10.js"],import.meta.url)).default,{element:m="#storybook-root",config:u,options:c={}}=e,E=p.querySelector(m);if(!E)return;_.reset(),u&&_.configure(u);let s=await _.run(E,c);l===t?r.emit(a.RESULT,s):(i=!1,R(l))}}catch(e){r.emit(a.ERROR,e)}finally{i=!1}},"run"),O=o(async t=>{let{parameters:e}=await A.__STORYBOOK_STORY_STORE__.loadStory({storyId:t})||{};return e.a11y||{config:{},options:{}}},"getParams");r.on(a.REQUEST,h);r.on(a.MANUAL,R);
//# sourceMappingURL=preview-d22a8681.js.map
