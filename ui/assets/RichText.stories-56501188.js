var m=Object.defineProperty;var t=(e,r)=>m(e,"name",{value:r,configurable:!0});import{j as n}from"./jsx-runtime-91e341d4.js";import{C as h}from"./Content-f44f62ef.js";import{M as x}from"./MockContent-10e2b766.js";import{M as C}from"./MockCopy-f6059a14.js";import{u as l}from"./styled-components.browser.esm-dd68fb2f.js";import"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";import"./devices-1d39230d.js";import"./breakPoints-89c7d41a.js";const g=l.div.withConfig({componentId:"sc-1e0vnug-0"})(["& >{p,ul > li,ol > li{",";&,& > span{> a{",";}}}ul,ol{> li{margin:0 0 ","px;}}ul,ol,p{margin:0 0 ","px;}h2,h3,h4,h5{margin:0 0 ","px;}h2{",";}h3{",";}h4{",";}h5{",";}h6{",";margin:0 0 ","px;}}"],({theme:e})=>e.textStyle.p,({theme:e})=>e.textStyle.a,({theme:e})=>e.spacing.x1,({theme:e})=>e.dimension.paragraph.marginY,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.textStyle.h2,({theme:e})=>e.textStyle.h3,({theme:e})=>e.textStyle.h4,({theme:e})=>e.textStyle.h5,({theme:e})=>e.textStyle.h6,({theme:e})=>e.spacing.x0_5),u=l.div.withConfig({componentId:"sc-1e0vnug-1"})(["margin-bottom:","px;clear:both;"],({theme:e})=>e.dimension.paragraph.marginY),o=t(({children:e})=>n.jsx(g,{children:e}),"RichText"),y=o;try{o.displayName="RichText",o.__docgenInfo={description:`This component is used for styling and laying out long-form content such as
that found in the body of an article or blog post.

It is exported along with an InlineContainer component which can be used to
wrap other components and ensure that they adhere to the flow of the document`,displayName:"RichText",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}function a(e){return t(function(d){return n.jsx(u,{children:n.jsx(e,{...d})})},"WrappedWithInlineContainer")}t(a,"withInlineContainer");try{a.displayName="withInlineContainer",a.__docgenInfo={description:"Wraps a given component in an InlineContainer for use in RichText content",displayName:"withInlineContainer",props:{}}}catch{}const v={title:"Components/Rich Text",component:y,argTypes:{children:{control:{disable:!0}}}},i={args:{children:n.jsxs(n.Fragment,{children:[n.jsx(C,{}),n.jsx(u,{children:n.jsx(x,{label:"Inline Container"})}),n.jsx("p",{children:"Anim reprehenderit aute qui. Deserunt deserunt duis ex elit aute dolore reprehenderit voluptate aliquip sit non ullamco reprehenderit quis. Eu aliquip ad ad cupidatat. Consectetur ipsum qui id aute laboris sit."})]})},decorators:[h],parameters:{docs:{source:{code:`
          const MyInlineComponent = withInlineContainer(MyComponent);

          return (
            <RichText>
              <p>Aliquip exercitation excepteur commodo ex eiusmod cillum enim do duis ex mollit voluptate eiusmod commodo ea.
              <p>Ipsum incididunt anim deserunt est.</p>
              <MyInlineComponent />
              <p>Duis ea irure reprehenderit exercitation in sit.</p>
              <p>Qui est id consectetur cillum tempor ipsum ipsum sint deserunt ea excepteur.</p>
              <InlineContainer>
                <MyComponent />
              </InlineContainer>
            </RichText>
          );
        `}}}};var s,p,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: <>
        <MockCopy />
        <InlineContainer>
          <MockContent label="Inline Container" />
        </InlineContainer>
        <p>
          Anim reprehenderit aute qui. Deserunt deserunt duis ex elit aute
          dolore reprehenderit voluptate aliquip sit non ullamco reprehenderit
          quis. Eu aliquip ad ad cupidatat. Consectetur ipsum qui id aute
          laboris sit.
        </p>
      </>
  },
  decorators: [Content],
  parameters: {
    docs: {
      source: {
        code: \`
          const MyInlineComponent = withInlineContainer(MyComponent);

          return (
            <RichText>
              <p>Aliquip exercitation excepteur commodo ex eiusmod cillum enim do duis ex mollit voluptate eiusmod commodo ea.
              <p>Ipsum incididunt anim deserunt est.</p>
              <MyInlineComponent />
              <p>Duis ea irure reprehenderit exercitation in sit.</p>
              <p>Qui est id consectetur cillum tempor ipsum ipsum sint deserunt ea excepteur.</p>
              <InlineContainer>
                <MyComponent />
              </InlineContainer>
            </RichText>
          );
        \`
      }
    }
  }
}`,...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const S=["Default"];export{i as Default,S as __namedExportsOrder,v as default};
//# sourceMappingURL=RichText.stories-56501188.js.map
