var N=Object.defineProperty;var l=(e,t)=>N(e,"name",{value:t,configurable:!0});import{j as n}from"./jsx-runtime-91e341d4.js";import{u as o,t as w}from"./styled-components.browser.esm-dd68fb2f.js";import{p as W}from"./themes-c3ddd44f.js";import{d as M}from"./devices-1d39230d.js";import"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";import"./palette-6bcc864c.js";import"./colors-3e41a0f7.js";import"./base-6bdd90db.js";import"./Icon.constants-f71a83c2.js";import"./breakPoints-89c7d41a.js";import"./spacings-dc016d25.js";import"./fontWeights-1d7bfb43.js";const c=o.div.withConfig({componentId:"sc-5vp3lo-0"})(["display:flex;position:relative;height:100%;align-items:center;justify-content:center;padding:0 ","px;background-color:",";font:"," 16px/22px ",";"],({theme:e})=>e.spacing.x0_5,({theme:e})=>e.color.canvas.secondary,({theme:e})=>e.fontWeight.bold,({theme:e})=>e.fontFamily.secondaryFont),r=l(({label:e,as:t})=>n.jsx(c,{as:t,children:e}),"MockText");try{c.displayName="Wrapper",c.__docgenInfo={description:"",displayName:"Wrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{r.displayName="MockText",r.__docgenInfo={description:"",displayName:"MockText",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"string"}}}}}catch{}const R=o.div.withConfig({componentId:"sc-1ca6zfp-0"})(["--border:1px solid ",";border-bottom:var(--border);background:",";"],({theme:e})=>e.color.divider.light,({theme:e})=>e.color.canvas.secondary),E=o.div.withConfig({componentId:"sc-1ca6zfp-1"})(["display:flex;max-width:","px;height:","px;align-items:center;justify-content:end;margin:0 auto;@media ","{max-width:","px;}"],({theme:e})=>e.dimension.pageWidth.laptop,({theme:e})=>e.spacing.x4,M,({theme:e})=>e.dimension.pageWidth.desktop),_=o.div.withConfig({componentId:"sc-1ca6zfp-2"})(["height:100%;border-right:var(--border);border-left:var(--border);"]),G=o(_).withConfig({componentId:"sc-1ca6zfp-3"})(["margin-right:auto;border:0;"]),q=o(_).withConfig({componentId:"sc-1ca6zfp-4"})(["display:flex;"]),p=o.a.withConfig({componentId:"sc-1ca6zfp-5"})(["display:flex;height:100%;align-items:center;padding:0 ","px;border-right:var(--border);background:",";color:",";transition:",";",";&:hover,&:active{background:",";color:",";}"],({theme:e})=>e.spacing.x1_5,({theme:e})=>e.color.actionTransparent.base,({theme:e})=>e.color.ink.base,({theme:e})=>e.transition.button,({theme:e})=>e.textStyle.globalNavBarLink,({theme:e})=>e.color.actionTransparent.alt,({theme:e})=>e.color.ink.inverted),j=o(p).withConfig({componentId:"sc-1ca6zfp-6"})(["background:",";color:",";&:hover,&:active{background:",";color:",";}"],({theme:e})=>e.color.actionBrand.base,({theme:e})=>e.color.ink.inverted,({theme:e})=>e.color.actionBrand.alt,({theme:e})=>e.color.ink.inverted),d=l(({leftBlock:e,rightBlock:t,className:I})=>n.jsx(R,{className:I,children:n.jsxs(E,{children:[n.jsx(G,{children:e}),n.jsx(q,{children:t})]})}),"GlobalNavBar");try{d.displayName="GlobalNavBar",d.__docgenInfo={description:`Currently used as the very top bar in the Masthead.

It is a full-width bar with two blocks, one on the left and one on the right.

The inner content is centred and never exceeds the width of the page`,displayName:"GlobalNavBar",props:{className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}},leftBlock:{defaultValue:null,description:"The elements to be left aligned",name:"leftBlock",required:!0,type:{name:"Children"}},rightBlock:{defaultValue:null,description:"The elements to be right aligned",name:"rightBlock",required:!0,type:{name:"Children"}}}}}catch{}const Y={title:"Modules/Header/Global Nav Bar",component:d,argTypes:{leftBlock:{control:!1},rightBlock:{control:!1}}},a={args:{leftBlock:n.jsx(r,{label:"Left block"}),rightBlock:n.jsx(r,{label:"Right block"})}},i={name:"With links and CTAs",args:{leftBlock:n.jsx(r,{label:"Editions"}),rightBlock:n.jsxs(n.Fragment,{children:[n.jsx(p,{href:"#",children:"This is a link"}),n.jsx(j,{href:"#",children:"This is a CTA"}),n.jsx(r,{label:"Log In / Register"})]})},parameters:{docs:{source:{code:`
          <GlobalNavBar
            leftBlock={
              <MockText label="Editions" />
            }
            rightBlock={
              <>
                <Link href="#">This is a link</Link>
                <CTA href="#">This is a CTA</CTA>
                <span>Log In / Register</span>
              </>
            }
          />
        `}}}},s={name:"With themed CTA",args:{leftBlock:n.jsx(r,{label:"Editions"}),rightBlock:n.jsxs(n.Fragment,{children:[n.jsxs(w,{theme:W,children:[n.jsx(p,{href:"#",children:"This is a link"}),n.jsx(j,{href:"#",children:"This is a CTA"})]}),n.jsx(r,{label:"Log In / Register"})]})},parameters:{docs:{source:{code:`
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
                <span>Log In / Register</span>
              </>
            }
          />
        `}}}};var h,m,g,f,k;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    leftBlock: <MockText label="Left block" />,
    rightBlock: <MockText label="Right block" />
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source},description:{story:"The `<GlobalNavBar />` exists at the very top of the page and and is used to\nhouse site-wide actions and links.",...(k=(f=a.parameters)==null?void 0:f.docs)==null?void 0:k.description}}};var u,T,b,x,C;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'With links and CTAs',
  args: {
    leftBlock: <MockText label="Editions" />,
    rightBlock: <>
        <Link href="#">This is a link</Link>
        <CTA href="#">This is a CTA</CTA>
        <MockText label="Log In / Register" />
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
                <span>Log In / Register</span>
              </>
            }
          />
        \`
      }
    }
  }
}`,...(b=(T=i.parameters)==null?void 0:T.docs)==null?void 0:b.source},description:{story:"`<Links />` and `<CTAs />` can be used to add custom links.",...(C=(x=i.parameters)==null?void 0:x.docs)==null?void 0:C.description}}};var v,B,y,A,L;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'With themed CTA',
  args: {
    leftBlock: <MockText label="Editions" />,
    rightBlock: <>
        <ThemeProvider theme={premium}>
          <Link href="#">This is a link</Link>
          <CTA href="#">This is a CTA</CTA>
        </ThemeProvider>
        <MockText label="Log In / Register" />
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
                <span>Log In / Register</span>
              </>
            }
          />
        \`
      }
    }
  }
}`,...(y=(B=s.parameters)==null?void 0:B.docs)==null?void 0:y.source},description:{story:"`<Links />` and `<CTAs />` can be themed.",...(L=(A=s.parameters)==null?void 0:A.docs)==null?void 0:L.description}}};const Z=["Default","WithLinksCTA","WithThemedCTA"];export{a as Default,i as WithLinksCTA,s as WithThemedCTA,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=GlobalNavBar.stories-4e093d3c.js.map
