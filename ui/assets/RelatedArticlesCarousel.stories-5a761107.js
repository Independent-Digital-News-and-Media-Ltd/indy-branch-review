var R=Object.defineProperty;var i=(e,r)=>R(e,"name",{value:r,configurable:!0});import{j as t}from"./jsx-runtime-91e341d4.js";import{C as I}from"./Content-f44f62ef.js";import{I as o}from"./Image-388cf5e5.js";import{r as w}from"./index-b56a0300.js";import{I as b}from"./IconButton-dda0da21.js";import{B as A,R as N}from"./RelatedContent-54add841.js";import{u as s}from"./styled-components.browser.esm-dd68fb2f.js";import{S as V,N as h,G as D,C as E}from"./Carousel-f2ad34e7.js";import{S as B}from"./chevron-left-solid-32-01a6063d.js";import{S as T}from"./chevron-right-solid-32-015b314c.js";import"./devices-1d39230d.js";import"./breakPoints-89c7d41a.js";import"./_commonjsHelpers-c38d1a10.js";import"./Icon.hoc-787425e7.js";import"./Icon.constants-f71a83c2.js";import"./Symbols.hoc-d0e330fb.js";import"./index-17b0cd16.js";import"./index-6925154b.js";import"./Tag-346e3175.js";import"./base-6bdd90db.js";import"./spacings-dc016d25.js";import"./mixins-e8622e63.js";const k=126,W=s.a.withConfig({componentId:"sc-neq4w9-0"})(["display:flex;width:","px;flex-direction:column;row-gap:","px;color:",";&:hover,&:active,&:focus{color:",";}"],k,({theme:e})=>e.spacing.x1,({theme:e})=>e.color.actionBrand.base,({theme:e})=>e.color.actionBrand.alt),F=s.div.withConfig({componentId:"sc-neq4w9-1"})(["img{display:block;object-fit:cover;}"]),L=s.p.withConfig({componentId:"sc-neq4w9-2"})(["margin:0;color:inherit;font:",";"],({theme:e})=>e.textStyle.relatedStoriesHeadline.base),P=s.span.withConfig({componentId:"sc-neq4w9-3"})(["display:block;margin-bottom:","px;",";"],({theme:e})=>e.spacing.x0_25,({theme:e})=>e.textStyle.storyCard.relatedLinks.carousel),z=w.forwardRef(i(function({href:r,title:a,image:d,isSponsored:c=!1,...m},p){return t.jsxs(W,{...m,ref:p,href:r,children:[t.jsx(F,{children:d}),t.jsxs(L,{children:[c&&t.jsx(P,{children:"sponsored"}),a]})]})},"RelatedArticlesCarouselItem2"));try{Item.displayName="Item",Item.__docgenInfo={description:"",displayName:"Item",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"ReactNode"}},isSponsored:{defaultValue:{value:"false"},description:'whether this item is sponsored and will receive a "sponsored" tag',name:"isSponsored",required:!1,type:{name:"boolean"}}}}}catch{}const u=s(E).withConfig({componentId:"sc-lfolxg-0"})(["","{gap:","px;}","{display:flex;position:absolute;top:0;right:0;width:var(--nav-width);height:var(--button-width);}@media ","{margin-inline:calc(var(--bleed) * -1);","{scroll-margin:0 var(--bleed);&:first-child{padding-left:var(--bleed);}&:last-child{padding-right:var(--bleed);}}","{right:var(--bleed);}}"],V,({theme:e})=>e.spacing.x2,h,A,D,h);try{u.displayName="StyledCarousel",u.__docgenInfo={description:"",displayName:"StyledCarousel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const G=i(({disabled:e,onClick:r,...a})=>t.jsx(b,{...a,size:"large",svg:B,isDisabled:e,onClick:r}),"ButtonPrev"),H=i(({disabled:e,onClick:r,...a})=>t.jsx(b,{...a,size:"large",svg:T,isDisabled:e,onClick:r}),"ButtonNext"),O=i((e,r)=>e[r].scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"}),"navigateCarousel"),f=i(({className:e,items:r,title:a,renderSlide:d,...c})=>{const m=i(({itemIndex:p,ref:q,item:j})=>w.createElement(z,{...j,key:p,ref:q}),"defaultRenderSlide");return t.jsx(N,{className:e,title:a,children:t.jsx(u,{className:"",...c,onNavigate:O,ButtonPrev:G,ButtonNext:H,items:r,renderSlide:d||m})})},"RelatedArticlesCarousel"),K=f;try{f.displayName="RelatedArticlesCarousel",f.__docgenInfo={description:"",displayName:"RelatedArticlesCarousel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ItemProps[]"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},renderSlide:{defaultValue:null,description:"",name:"renderSlide",required:!0,type:{name:"DefaultRenderSlideCallback"}}}}}catch{}const ge={title:"Components/Related Articles Carousel",component:K},g={title:"Related articles",items:[{title:"Fugiat irure incididunt nulla dolor quis culpa sunt",image:t.jsx(o,{}),href:"#"},{title:"Fugiat occaecat",image:t.jsx(o,{}),href:"#"},{title:"Commodo irure Lorem commodo ad",image:t.jsx(o,{}),href:"#",isSponsored:!0},{title:"Excepteur ex elit non ad quis Lorem sit do. Duis occaecat tempor proident. Sint aliquip sit minim aute",image:t.jsx(o,{}),href:"#"},{title:"Elit veniam",image:t.jsx(o,{}),href:"#"},{title:"Duis occaecat tempor proident.",image:t.jsx(o,{}),href:"#"},{title:"Sint aliquip sit minim aute",image:t.jsx(o,{}),href:"#"}]},l={args:g,decorators:[I]},n={args:{...g,items:g.items.slice(0,3)},decorators:[I]};var x,y,C;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: defaultArgs,
  decorators: [Content]
}`,...(C=(y=l.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var _,v,S;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    items: defaultArgs.items.slice(0, 3)
  },
  decorators: [Content]
}`,...(S=(v=n.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const he=["Default","FewItems"];export{l as Default,n as FewItems,he as __namedExportsOrder,ge as default};
//# sourceMappingURL=RelatedArticlesCarousel.stories-5a761107.js.map