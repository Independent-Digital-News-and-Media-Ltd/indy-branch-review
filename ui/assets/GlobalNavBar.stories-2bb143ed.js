var N=Object.defineProperty;var l=(e,o)=>N(e,"name",{value:o,configurable:!0});import{j as n}from"./jsx-runtime-91e341d4.js";import{u as r,t as w}from"./styled-components.browser.esm-dd68fb2f.js";import{R as _}from"./RegisterLoginButton-fab70e2f.js";import{p as W}from"./themes-429a52d8.js";import{d as M}from"./devices-1d39230d.js";import"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";import"./Icon.hoc-787425e7.js";import"./Icon.constants-f71a83c2.js";import"./Symbols.hoc-d0e330fb.js";import"./index-17b0cd16.js";import"./index-6925154b.js";import"./mixins-e8622e63.js";import"./user-solid-24-2052e0db.js";import"./palette-6bcc864c.js";import"./colors-3e41a0f7.js";import"./base-725567d4.js";import"./breakPoints-89c7d41a.js";import"./spacings-dc016d25.js";import"./fontWeights-1d7bfb43.js";const c=r.div.withConfig({componentId:"sc-5vp3lo-0"})(["display:flex;position:relative;height:100%;align-items:center;justify-content:center;padding:0 ","px;background-color:",";font:"," 16px/22px ",";"],({theme:e})=>e.spacing.x0_5,({theme:e})=>e.color.canvas.secondary,({theme:e})=>e.fontWeight.bold,({theme:e})=>e.fontFamily.secondaryFont),t=l(({label:e,as:o})=>n.jsx(c,{as:o,children:e}),"MockText");try{c.displayName="Wrapper",c.__docgenInfo={description:"",displayName:"Wrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{t.displayName="MockText",t.__docgenInfo={description:"",displayName:"MockText",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"string"}}}}}catch{}const E=r.div.withConfig({componentId:"sc-1ca6zfp-0"})(["--border:1px solid ",";border-bottom:var(--border);background:",";"],({theme:e})=>e.color.divider.light,({theme:e})=>e.color.canvas.secondary),G=r.div.withConfig({componentId:"sc-1ca6zfp-1"})(["display:flex;max-width:","px;height:","px;align-items:center;justify-content:end;margin:0 auto;@media ","{max-width:","px;}"],({theme:e})=>e.dimension.pageWidth.laptop,({theme:e})=>e.spacing.x4,M,({theme:e})=>e.dimension.pageWidth.desktop),R=r.div.withConfig({componentId:"sc-1ca6zfp-2"})(["height:100%;border-right:var(--border);border-left:var(--border);"]),q=r(R).withConfig({componentId:"sc-1ca6zfp-3"})(["margin-right:auto;border:0;"]),V=r(R).withConfig({componentId:"sc-1ca6zfp-4"})(["display:flex;"]),h=r.a.withConfig({componentId:"sc-1ca6zfp-5"})(["display:flex;height:100%;align-items:center;padding:0 ","px;border-right:var(--border);background:",";color:",";transition:",";",";&:hover,&:active{background:",";color:",";}"],({theme:e})=>e.spacing.x1_5,({theme:e})=>e.color.actionTransparent.base,({theme:e})=>e.color.ink.base,({theme:e})=>e.transition.button,({theme:e})=>e.textStyle.globalNavBarLink,({theme:e})=>e.color.actionTransparent.alt,({theme:e})=>e.color.ink.inverted),j=r(h).withConfig({componentId:"sc-1ca6zfp-6"})(["background:",";color:",";&:hover,&:active{background:",";color:",";}"],({theme:e})=>e.color.actionBrand.base,({theme:e})=>e.color.ink.inverted,({theme:e})=>e.color.actionBrand.alt,({theme:e})=>e.color.ink.inverted),d=l(({leftBlock:e,rightBlock:o,className:I})=>n.jsx(E,{className:I,children:n.jsxs(G,{children:[n.jsx(q,{children:e}),n.jsx(V,{children:o})]})}),"GlobalNavBar");try{d.displayName="GlobalNavBar",d.__docgenInfo={description:`Currently used as the very top bar in the Masthead.

It is a full-width bar with two blocks, one on the left and one on the right.

The inner content is centred and never exceeds the width of the page`,displayName:"GlobalNavBar",props:{className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}},leftBlock:{defaultValue:null,description:"The elements to be left aligned",name:"leftBlock",required:!0,type:{name:"Children"}},rightBlock:{defaultValue:null,description:"The elements to be right aligned",name:"rightBlock",required:!0,type:{name:"Children"}}}}}catch{}const ae={title:"Modules/Header/Global Nav Bar",component:d,argTypes:{leftBlock:{control:!1},rightBlock:{control:!1}}},i={args:{leftBlock:n.jsx(t,{label:"Left block"}),rightBlock:n.jsx(t,{label:"Right block"})}},a={name:"With links and CTAs",args:{leftBlock:n.jsx(t,{label:"Editions"}),rightBlock:n.jsxs(n.Fragment,{children:[n.jsx(h,{href:"#",children:"This is a link"}),n.jsx(j,{href:"#",children:"This is a CTA"}),n.jsx(_,{href:"#",children:"Log In / Register"})]})},parameters:{docs:{source:{code:`
          <GlobalNavBar
            leftBlock={
              <MockText label="Editions" />
            }
            rightBlock={
              <>
                <Link href="#">This is a link</Link>
                <CTA href="#">This is a CTA</CTA>
                <RegisterLoginButton href="#">Log In / Register</RegisterLoginButton>
              </>
            }
          />
        `}}}},s={name:"With themed CTA",args:{leftBlock:n.jsx(t,{label:"Editions"}),rightBlock:n.jsxs(n.Fragment,{children:[n.jsxs(w,{theme:W,children:[n.jsx(h,{href:"#",children:"This is a link"}),n.jsx(j,{href:"#",children:"This is a CTA"})]}),n.jsx(_,{href:"#",children:"Log In / Register"})]})},parameters:{docs:{source:{code:`
          <GlobalNavBar
            leftBlock={
              <MockText label="Editions" />
            }
            rightBlock={
              <>
                <ThemeProvider theme={premium}>
                  <Link href="#">This is a link</Link>
                  <CTA href="#">This is a CTA</CTA>
                </ThemeProvider>
                <RegisterLoginButton href="#">Log In / Register</RegisterLoginButton>
              </>
            }
          />
        `}}}};var p,m,g,f,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    leftBlock: <MockText label="Left block" />,
    rightBlock: <MockText label="Right block" />
  }
}`,...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source},description:{story:"The `<GlobalNavBar />` exists at the very top of the page and and is used to\nhouse site-wide actions and links.",...(u=(f=i.parameters)==null?void 0:f.docs)==null?void 0:u.description}}};var k,T,b,B,x;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'With links and CTAs',
  args: {
    leftBlock: <MockText label="Editions" />,
    rightBlock: <>
        <Link href="#">This is a link</Link>
        <CTA href="#">This is a CTA</CTA>
        <RegisterLoginButton href="#">Log In / Register</RegisterLoginButton>
      </>
  },
  parameters: {
    docs: {
      source: {
        code: \`
          <GlobalNavBar
            leftBlock={
              <MockText label="Editions" />
            }
            rightBlock={
              <>
                <Link href="#">This is a link</Link>
                <CTA href="#">This is a CTA</CTA>
                <RegisterLoginButton href="#">Log In / Register</RegisterLoginButton>
              </>
            }
          />
        \`
      }
    }
  }
}`,...(b=(T=a.parameters)==null?void 0:T.docs)==null?void 0:b.source},description:{story:"`<Links />` and `<CTAs />` can be used to add custom links.",...(x=(B=a.parameters)==null?void 0:B.docs)==null?void 0:x.description}}};var C,L,v,y,A;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'With themed CTA',
  args: {
    leftBlock: <MockText label="Editions" />,
    rightBlock: <>
        <ThemeProvider theme={premium}>
          <Link href="#">This is a link</Link>
          <CTA href="#">This is a CTA</CTA>
        </ThemeProvider>
        <RegisterLoginButton href="#">Log In / Register</RegisterLoginButton>
      </>
  },
  parameters: {
    docs: {
      source: {
        code: \`
          <GlobalNavBar
            leftBlock={
              <MockText label="Editions" />
            }
            rightBlock={
              <>
                <ThemeProvider theme={premium}>
                  <Link href="#">This is a link</Link>
                  <CTA href="#">This is a CTA</CTA>
                </ThemeProvider>
                <RegisterLoginButton href="#">Log In / Register</RegisterLoginButton>
              </>
            }
          />
        \`
      }
    }
  }
}`,...(v=(L=s.parameters)==null?void 0:L.docs)==null?void 0:v.source},description:{story:"`<Links />` and `<CTAs />` can be themed.",...(A=(y=s.parameters)==null?void 0:y.docs)==null?void 0:A.description}}};const se=["Default","WithLinksCTA","WithThemedCTA"];export{i as Default,a as WithLinksCTA,s as WithThemedCTA,se as __namedExportsOrder,ae as default};
//# sourceMappingURL=GlobalNavBar.stories-2bb143ed.js.map
