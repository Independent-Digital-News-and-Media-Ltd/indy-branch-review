var f=Object.defineProperty;var r=(o,c)=>f(o,"name",{value:c,configurable:!0});import{j as e}from"./jsx-runtime-91e341d4.js";import{M as i}from"./MockContent-58dddf9c.js";import{G as h,R as g,C as _,O as p}from"./Grid.styles-bb884c74.js";import{M as C}from"./Layout.styles-ff2a908e.js";import"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";import"./styled-components.browser.esm-dd68fb2f.js";import"./InlineContainer.hoc-68bd8047.js";import"./Grid.constants-ded29c48.js";import"./breakPoints-89c7d41a.js";import"./devices-1d39230d.js";const n=r(({children:o})=>e.jsx(h,{children:e.jsx(g,{children:e.jsx(_,{span:{mobile:4,tablet:6,laptop:10},offset:{tablet:1},children:e.jsx(C,{children:o})})})}),"OneColumnNarrow"),s=r(({children:o})=>e.jsx(p,{children:o}),"FullBleedContainer"),a=r(({children:o})=>e.jsx(p,{align:"left",span:{tablet:3,laptop:4},children:o}),"InsetLeftContainer"),l=r(({children:o})=>e.jsx(p,{align:"right",span:{tablet:3,laptop:4},children:o}),"InsetRightContainer");try{n.displayName="OneColumnNarrow",n.__docgenInfo={description:`OneColumnNarrow is a layout component that provides a single column layout
that does not account for any sidebar.`,displayName:"OneColumnNarrow",props:{}}}catch{}try{s.displayName="FullBleedContainer",s.__docgenInfo={description:"FullBleed containers will stretch from edge to edge of a <Grid>",displayName:"FullBleedContainer",props:{}}}catch{}try{a.displayName="InsetLeftContainer",a.__docgenInfo={description:"InsetLeft containers will stretch from the left edge of a <Grid> to the middle of the column",displayName:"InsetLeftContainer",props:{}}}catch{}try{l.displayName="InsetRightContainer",l.__docgenInfo={description:"InsetRight containers will stretch from the middle of a column to the right edge of a <Grid>",displayName:"InsetRightContainer",props:{}}}catch{}const F={title:"Layout/One Column Narrow",component:n,parameters:{layout:"fullscreen"}},t={args:{},render:o=>e.jsxs(n,{...o,children:[e.jsx(s,{children:e.jsx(i,{label:"Full Bleed"})}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure beatae impedit tempore temporibus dolorum alias quod dolore porro? Tenetur illo perferendis saepe neque nostrum iste eos animi repellendus porro!"}),e.jsx(a,{children:e.jsx(i,{label:"Inset Left"})}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure beatae impedit tempore temporibus dolorum alias quod dolore porro? Tenetur illo perferendis saepe neque nostrum iste eos animi repellendus porro!"}),e.jsx(l,{children:e.jsx(i,{label:"Inset Right"})}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure beatae impedit tempore temporibus dolorum alias quod dolore porro? Tenetur illo perferendis saepe neque nostrum iste eos animi repellendus porro!"})]})};var d,m,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: props => <OneColumnNarrow {...props}>
      <FullBleedContainer>
        <MockContent label="Full Bleed" />
      </FullBleedContainer>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure
        beatae impedit tempore temporibus dolorum alias quod dolore porro?
        Tenetur illo perferendis saepe neque nostrum iste eos animi repellendus
        porro!
      </p>
      <InsetLeftContainer>
        <MockContent label="Inset Left" />
      </InsetLeftContainer>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure
        beatae impedit tempore temporibus dolorum alias quod dolore porro?
        Tenetur illo perferendis saepe neque nostrum iste eos animi repellendus
        porro!
      </p>
      <InsetRightContainer>
        <MockContent label="Inset Right" />
      </InsetRightContainer>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure
        beatae impedit tempore temporibus dolorum alias quod dolore porro?
        Tenetur illo perferendis saepe neque nostrum iste eos animi repellendus
        porro!
      </p>
    </OneColumnNarrow>
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const M=["Default"];export{t as Default,M as __namedExportsOrder,F as default};
//# sourceMappingURL=OneColumnNarrow.stories-2e89691d.js.map
