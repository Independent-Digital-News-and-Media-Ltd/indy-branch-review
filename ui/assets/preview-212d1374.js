var s=Object.defineProperty;var o=(e,t)=>s(e,"name",{value:t,configurable:!0});var d="storybook/highlight",a="storybookHighlight",O=`${d}/add`,g=`${d}/reset`;const{global:E}=__STORYBOOK_MODULE_GLOBAL__,{addons:H}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:T}=__STORYBOOK_MODULE_CORE_EVENTS__;var{document:_}=E,I=o((e="#FF4785",t="dashed")=>`
  outline: 2px ${t} ${e};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`,"highlightStyle"),S=o(e=>({outline:`2px dashed ${e}`,outlineOffset:2,boxShadow:"0 0 0 6px rgba(255,255,255,0.6)"}),"highlightObject"),n=H.getChannel(),p=o(e=>{let t=a;i();let h=Array.from(new Set(e.elements)),l=_.createElement("style");l.setAttribute("id",t),l.innerHTML=h.map(r=>`${r}{
          ${I(e.color,e.style)}
         }`).join(" "),_.head.appendChild(l)},"highlight"),i=o(()=>{var h;let e=a,t=_.getElementById(e);t&&((h=t.parentNode)==null||h.removeChild(t))},"resetHighlight");n.on(T,i);n.on(g,i);n.on(O,p);export{S as highlightObject,I as highlightStyle};
//# sourceMappingURL=preview-212d1374.js.map
