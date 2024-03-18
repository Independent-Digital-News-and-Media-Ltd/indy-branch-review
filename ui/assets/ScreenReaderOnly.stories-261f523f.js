var m=Object.defineProperty;var s=(e,i)=>m(e,"name",{value:i,configurable:!0});import{j as n}from"./jsx-runtime-91e341d4.js";import{r as d}from"./index-b56a0300.js";import{u as o}from"./styled-components.browser.esm-dd68fb2f.js";import{B as f}from"./Button-6cc3cb4d.js";import{S as l}from"./ScreenReaderOnly-61d613bc.js";import"./_commonjsHelpers-c38d1a10.js";import"./index-8d138fa4.js";import"./Icon.hoc-787425e7.js";import"./Icon.constants-f71a83c2.js";import"./Symbols.hoc-d0e330fb.js";import"./index-17b0cd16.js";import"./index-6925154b.js";import"./Button.constants-c6e6f0a7.js";import"./devices-1d39230d.js";import"./breakPoints-89c7d41a.js";import"./launch-outline-16-2a071c4c.js";import"./mixins-0d98ffaa.js";const x=o.div.withConfig({componentId:"sc-vzcfca-0"})(["display:flex;flex-direction:column;align-items:center;"]),u=o(f).attrs({size:"large"}).withConfig({componentId:"sc-vzcfca-1"})(["margin-bottom:20px;"]),g=o.p.withConfig({componentId:"sc-vzcfca-2"})([""]),V=o(l).attrs({as:"p"}).withConfig({componentId:"sc-vzcfca-3"})([""]),H={title:"Elements /Screen Reader Only",component:l},t=s(()=>{const[e,i]=d.useState(!1),p=e?g:V;return n.jsxs(x,{children:[n.jsx(u,{onClick:()=>i(!e),children:e?"Hide content":"Show content"}),n.jsx(p,{children:"Visually hidden content"})]})},"Default");var r,c,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [isVisible, setIsVisible] = useState(false);
  const Text = isVisible ? VisibleText : ScreenReaderOnlyText;
  return <Wrapper>
      <Toggle onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide content' : 'Show content'}
      </Toggle>
      <Text>Visually hidden content</Text>
    </Wrapper>;
}`,...(a=(c=t.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const _=["Default"];export{t as Default,_ as __namedExportsOrder,H as default};
//# sourceMappingURL=ScreenReaderOnly.stories-261f523f.js.map
