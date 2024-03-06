var m=Object.defineProperty;var i=(e,n)=>m(e,"name",{value:n,configurable:!0});import{j as s}from"./jsx-runtime-91e341d4.js";import{r as d}from"./index-b56a0300.js";import{u as o}from"./styled-components.browser.esm-dd68fb2f.js";import{B as f}from"./Button-db67599a.js";import{S as l}from"./ScreenReaderOnly-32759149.js";import"./_commonjsHelpers-c38d1a10.js";import"./index-8d138fa4.js";import"./Icon.hoc-1b9291aa.js";import"./Symbols.hoc-fb0f215f.js";import"./index-17b0cd16.js";import"./index-6925154b.js";import"./Button.constants-c6e6f0a7.js";import"./devices-6d2491cf.js";import"./launch-outline-16-2a071c4c.js";import"./mixins-4e89ec3d.js";const x=o.div.withConfig({componentId:"sc-vzcfca-0"})(["display:flex;flex-direction:column;align-items:center;"]),u=o(f).attrs({size:"large"}).withConfig({componentId:"sc-vzcfca-1"})(["margin-bottom:20px;"]),g=o.p.withConfig({componentId:"sc-vzcfca-2"})([""]),V=o(l).attrs({as:"p"}).withConfig({componentId:"sc-vzcfca-3"})([""]),B={title:"Elements /Screen Reader Only",component:l},t=i(()=>{const[e,n]=d.useState(!1),p=e?g:V;return s.jsxs(x,{children:[s.jsx(u,{onClick:()=>n(!e),children:e?"Hide content":"Show content"}),s.jsx(p,{children:"Visually hidden content"})]})},"Default");var r,c,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [isVisible, setIsVisible] = useState(false);
  const Text = isVisible ? VisibleText : ScreenReaderOnlyText;
  return <Wrapper>
      <Toggle onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide content' : 'Show content'}
      </Toggle>
      <Text>Visually hidden content</Text>
    </Wrapper>;
}`,...(a=(c=t.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const D=["Default"];export{t as Default,D as __namedExportsOrder,B as default};
//# sourceMappingURL=ScreenReaderOnly.stories-25b24767.js.map
