var Te=Object.defineProperty;var n=(e,a)=>Te(e,"name",{value:a,configurable:!0});import{j as r}from"./jsx-runtime-91e341d4.js";import{I as Ie}from"./Image-388cf5e5.js";import{u as t}from"./styled-components.browser.esm-dd68fb2f.js";import{t as i}from"./devices-f8e8a791.js";import"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";const F=t.div.withConfig({componentId:"sc-14x5m26-0"})([""]),w=t.div.withConfig({componentId:"sc-14x5m26-1"})([""]),C=t.div.withConfig({componentId:"sc-14x5m26-2"})([""]),P=t.p.withConfig({componentId:"sc-14x5m26-3"})([""]),S=t.span.withConfig({componentId:"sc-14x5m26-4"})([""]),j=n(({biography:e,image:a,children:o})=>r.jsxs(w,{children:[a&&r.jsx(C,{children:a}),r.jsxs(P,{children:[o,e&&r.jsx(S,{children:e})]})]}),"Card");try{j.displayName="Card",j.__docgenInfo={description:"",displayName:"Card",props:{biography:{defaultValue:null,description:"",name:"biography",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ReactNode"}}}}}catch{}const T=t.strong.withConfig({componentId:"sc-iqwb23-0"})([""]),N=n(({biography:e,author:{name:a,path:o},image:s})=>r.jsx("a",{href:o,children:r.jsx(j,{biography:e,image:s,children:r.jsx(T,{children:a})})}),"Author");try{T.displayName="CardTextAuthor",T.__docgenInfo={description:"",displayName:"CardTextAuthor",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{N.displayName="Author",N.__docgenInfo={description:"",displayName:"Author",props:{author:{defaultValue:null,description:"",name:"author",required:!0,type:{name:"Author"}},biography:{defaultValue:null,description:"",name:"biography",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ReactNode"}}}}}catch{}const I=t.strong.withConfig({componentId:"sc-1q1nplg-0"})(["color:",";"],({theme:e})=>e.color.actionBrand.base),H=n(({authors:e})=>r.jsx(I,{children:e==null?void 0:e.map((a,o)=>{const{name:s,path:q}=a,ve=e.length-1===o,je=e.length-2===o;return r.jsx("span",{children:je?r.jsxs(r.Fragment,{children:[r.jsx("a",{href:q,children:s})," "]}):ve?r.jsxs(r.Fragment,{children:["& ",r.jsx("a",{href:q,children:s})]}):r.jsxs(r.Fragment,{children:[r.jsx("a",{href:q,children:s}),","," "]})},o)})}),"Authors");try{I.displayName="CardTextAuthors",I.__docgenInfo={description:"",displayName:"CardTextAuthors",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{H.displayName="Authors",H.__docgenInfo={description:"",displayName:"Authors",props:{authors:{defaultValue:null,description:"",name:"authors",required:!0,type:{name:"Author[]"}},biography:{defaultValue:null,description:"",name:"biography",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ReactNode"}}}}}catch{}const W=n(({biography:e,authors:a,image:o,className:s})=>(a==null?void 0:a.length)===1?r.jsx(F,{className:s,children:r.jsx(N,{biography:e,author:a[0],image:o})}):r.jsx(F,{className:s,children:r.jsx(j,{biography:e,children:r.jsx(H,{authors:a})})}),"AuthorHighlight"),D=W;try{W.displayName="AuthorHighlight",W.__docgenInfo={description:"",displayName:"AuthorHighlight",props:{authors:{defaultValue:null,description:"",name:"authors",required:!0,type:{name:"Author[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},biography:{defaultValue:null,description:"",name:"biography",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ReactNode"}}}}}catch{}const He=t(D).withConfig({componentId:"sc-1wv2o2h-0"})(["","{--padding-right:82px;--border-top:8px solid ",";display:flex;flex-wrap:wrap;justify-content:center;@media ","{flex-wrap:nowrap;justify-content:space-between;padding-top:","px;padding-right:var(--padding-right);border-top:var(--border-top);}}","{--image-size:140px;overflow:hidden;width:var(--image-size);height:var(--image-size);flex-shrink:0;margin-bottom:10px;border-radius:50%;background-color:",";box-shadow:0 1px 3px 0 ",";img{aspect-ratio:1;object-fit:cover;}@media ","{order:2;}}","{display:flex;flex-wrap:wrap;justify-content:center;margin:0 10px ","px;color:",";@media ","{align-content:flex-start;justify-content:left;order:1;margin-left:0;}}","{padding-top:5px;margin-bottom:10px;border-top:var(--border-top);color:",";font:bold "," ",";letter-spacing:-0.0208em;@media ","{padding-top:0;border:none;font-size:",";}}","{padding-top:5px;margin-bottom:10px;border-top:var(--border-top);color:",";font:bold "," ",";letter-spacing:-0.0208em;a{color:",";}@media ","{padding-top:0;border:none;font-size:",";}}","{width:100%;font:normal "," ",";text-align:center;@media ","{text-align:left;}}"],w,({theme:e})=>e.color.primary.muted,i,({theme:e})=>e.spacing.x2,C,({theme:e})=>e.color.canvas.brand,({theme:e})=>e.color.shadow.dark,i,P,({theme:e})=>e.spacing.x2,({theme:e})=>e.color.ink.base,i,T,({theme:e})=>e.color.ink.base,({theme:e})=>e.fontSize.large,e=>e.theme.fontFamily.primaryFont,i,({theme:e})=>e.fontSize.xLarge,I,({theme:e})=>e.color.ink.base,({theme:e})=>e.fontSize.large,e=>e.theme.fontFamily.primaryFont,({theme:e})=>e.color.ink.base,i,({theme:e})=>e.fontSize.xLarge,S,({theme:e})=>e.fontSize.base,e=>e.theme.fontFamily.secondaryFont,i),d=n(e=>r.jsx(He,{...e}),"AuthorHighlightDefault");try{d.displayName="AuthorHighlightDefault",d.__docgenInfo={description:"",displayName:"AuthorHighlightDefault",props:{authors:{defaultValue:null,description:"",name:"authors",required:!0,type:{name:"Author[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},biography:{defaultValue:null,description:"",name:"biography",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ReactNode"}}}}}catch{}const qe=t(D).withConfig({componentId:"sc-16xl78b-0"})(["--margin-x:-","px;--margin-bottom:","px;--padding:","px;margin:0 var(--margin-x) var(--margin-bottom);background-color:",";@media ","{--margin-x:0;}","{display:flex;align-items:center;gap:var(--padding);padding:var(--padding);}","{--image-size:100px;overflow:hidden;width:var(--image-size);height:var(--image-size);flex-shrink:0;border-radius:50%;background-color:",";img{aspect-ratio:1;object-fit:cover;}@media ","{--image-size:75px;}}","{margin:0;font:normal 16px/20px ",";@media ","{font-size:20px;line-height:24px;}}","{color:",";&::before{color:",";content:' | ';}}"],({theme:e})=>e.spacing.x1_5,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.spacing.x2,({theme:e})=>e.color.canvas.secondary,i,w,C,({theme:e})=>e.color.canvas.brand,i,P,({theme:e})=>e.fontFamily.secondaryFont,i,S,({theme:e})=>e.color.ink.muted,({theme:e})=>e.color.actionBrand.base),c=n(e=>r.jsx(qe,{...e}),"AuthorHighlightTravel");try{c.displayName="AuthorHighlightTravel",c.__docgenInfo={description:"",displayName:"AuthorHighlightTravel",props:{authors:{defaultValue:null,description:"",name:"authors",required:!0,type:{name:"Author[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},biography:{defaultValue:null,description:"",name:"biography",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ReactNode"}}}}}catch{}const xe=t.div.withConfig({componentId:"sc-1h64l3r-0"})([""]),Ae=t.p.withConfig({componentId:"sc-1h64l3r-1"})(["--margin-x:","px;--margin-bottom:","px;margin:0 var(--margin-x) var(--margin-bottom);font:normal 16px/20px ",";text-align:center;@media ","{--margin-x:","px;font-size:20px;line-height:24px;}"],({theme:e})=>e.spacing.x2,({theme:e})=>e.spacing.x3,({theme:e})=>e.fontFamily.secondaryFont,i,({theme:e})=>e.spacing.x1_5),_e=t.span.withConfig({componentId:"sc-1h64l3r-2"})(["color:",";"],({theme:e})=>e.color.ink.muted),V=n(({biography:e,author:{name:a,path:o}})=>r.jsx(xe,{children:r.jsx("a",{href:o,children:r.jsxs(Ae,{children:[r.jsx(_e,{children:e})," ",r.jsx("strong",{children:a})]})})}),"AuthorPrimary");try{V.displayName="AuthorPrimary",V.__docgenInfo={description:"",displayName:"AuthorPrimary",props:{author:{defaultValue:null,description:"",name:"author",required:!0,type:{name:"Author"}},biography:{defaultValue:null,description:"",name:"biography",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ReactNode"}}}}}catch{}const u=n(({biography:e,authors:a})=>(a==null?void 0:a.length)===1?r.jsx(V,{biography:e,author:a[0]}):r.jsx(xe,{children:r.jsxs(Ae,{children:[e&&r.jsx(_e,{children:`${e} `}),r.jsx(H,{authors:a})]})}),"AuthorHighlightTravelPrimary");try{u.displayName="AuthorHighlightTravelPrimary",u.__docgenInfo={description:"",displayName:"AuthorHighlightTravelPrimary",props:{authors:{defaultValue:null,description:"",name:"authors",required:!0,type:{name:"Author[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},biography:{defaultValue:null,description:"",name:"biography",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ReactNode"}}}}}catch{}const l={biography:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",authors:[{name:"Author A",path:"/author/author-a"}],image:r.jsx(Ie,{})},be={...l,authors:[{name:"Author A",path:"/author/author-a"}],image:void 0},z={...l,biography:"",authors:[{name:"Author A",path:"/author/author-a"}],image:void 0},B={...l,authors:[...l.authors,{name:"Author B",path:"/author/author-b"},{name:"Author C",path:"/author/author-c"}],image:void 0},De={title:"Components/AuthorHighlight",component:D,argTypes:{biography:{description:"Biography"},authors:{description:"Authors",control:{disable:!0}},image:{description:"Image",control:{disable:!0}}}},p={args:l,render:e=>r.jsx(d,{...e})},g={args:be,render:e=>r.jsx(d,{...e})},h={args:z,render:e=>r.jsx(d,{...e})},m={args:B,render:e=>r.jsx(d,{...e})},f={args:{...l},render:e=>r.jsx(c,{...e})},y={args:be,render:e=>r.jsx(c,{...e})},x={args:z,render:e=>r.jsx(c,{...e})},A={args:B,render:e=>r.jsx(c,{...e})},_={args:l,render:e=>r.jsx(u,{...e})},b={args:z,render:e=>r.jsx(u,{...e})},v={args:B,render:e=>r.jsx(u,{...e})};var k,M,O;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: defaultArgs,
  render: (args: AuthorHighlightProps) => <AuthorHighlightDefault {...args} />
}`,...(O=(M=p.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var R,L,$;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: defaultArgsWithoutImage,
  render: (args: AuthorHighlightProps) => <AuthorHighlightDefault {...args} />
}`,...($=(L=g.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var E,G,J;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: defaultArgsWithoutImageOrBio,
  render: (args: AuthorHighlightProps) => <AuthorHighlightDefault {...args} />
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: defaultArgsWithMultipleAuthors,
  render: (args: AuthorHighlightProps) => <AuthorHighlightDefault {...args} />
}`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  },
  render: (args: AuthorHighlightProps) => <AuthorHighlightTravel {...args} />
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ae;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: defaultArgsWithoutImage,
  render: (args: AuthorHighlightProps) => <AuthorHighlightTravel {...args} />
}`,...(ae=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,oe,ie;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: defaultArgsWithoutImageOrBio,
  render: (args: AuthorHighlightProps) => <AuthorHighlightTravel {...args} />
}`,...(ie=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ne,se,le;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: defaultArgsWithMultipleAuthors,
  render: (args: AuthorHighlightProps) => <AuthorHighlightTravel {...args} />
}`,...(le=(se=A.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var de,ce,ue;_.parameters={..._.parameters,docs:{...(de=_.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: defaultArgs,
  render: (args: AuthorHighlightProps) => <AuthorHighlightTravelPrimary {...args} />
}`,...(ue=(ce=_.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var pe,ge,he;b.parameters={...b.parameters,docs:{...(pe=b.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: defaultArgsWithoutImageOrBio,
  render: (args: AuthorHighlightProps) => <AuthorHighlightTravelPrimary {...args} />
}`,...(he=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var me,fe,ye;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: defaultArgsWithMultipleAuthors,
  render: (args: AuthorHighlightProps) => <AuthorHighlightTravelPrimary {...args} />
}`,...(ye=(fe=v.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};const ze=["Default","DefaultWithoutImage","DefaultWithoutImageOrBio","DefaultWithMultipleAuthors","Travel","TravelWithoutImage","TravelWithoutImageOrBio","TravelWithMultipleAuthors","TravelPrimary","TravelPrimaryWithoutBio","TravelPrimaryWithMultipleAuthors"];export{p as Default,m as DefaultWithMultipleAuthors,g as DefaultWithoutImage,h as DefaultWithoutImageOrBio,f as Travel,_ as TravelPrimary,v as TravelPrimaryWithMultipleAuthors,b as TravelPrimaryWithoutBio,A as TravelWithMultipleAuthors,y as TravelWithoutImage,x as TravelWithoutImageOrBio,ze as __namedExportsOrder,De as default};
//# sourceMappingURL=AuthorHighlight.stories-05751d05.js.map
