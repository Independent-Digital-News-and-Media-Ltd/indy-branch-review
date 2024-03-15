var D=Object.defineProperty;var l=(e,t)=>D(e,"name",{value:t,configurable:!0});import{j as r}from"./jsx-runtime-91e341d4.js";import{u as o,a as L}from"./styled-components.browser.esm-dd68fb2f.js";import{I as $}from"./Image-388cf5e5.js";import{r as u}from"./index-b56a0300.js";import{I as q}from"./IconButton-dda0da21.js";import{S as N}from"./ScreenReaderOnly-61d613bc.js";import{h as z}from"./mixins-0d98ffaa.js";import{S as A}from"./chevron-left-solid-24-93719b9d.js";import{S as M}from"./chevron-right-solid-24-fb4b0b3b.js";import{C as W,c as B}from"./MediaPlusCaption-29f1e828.js";import{o as V,l as R,t as Q}from"./devices-1d39230d.js";import"./_commonjsHelpers-c38d1a10.js";import"./Icon.hoc-787425e7.js";import"./Icon.constants-f71a83c2.js";import"./Symbols.hoc-d0e330fb.js";import"./index-17b0cd16.js";import"./index-6925154b.js";import"./breakPoints-89c7d41a.js";const F=l(({itemCount:e})=>{const t=Array.from({length:e},()=>u.useRef(null)),i=u.useMemo(()=>t,[t]),[a,d]=u.useState(0);return u.useEffect(()=>{const c=new ResizeObserver(n=>{let s=0;n.map(p=>{const h=p.target.children[0].clientHeight;h>s&&(s=h)}),d(s)});return i.forEach(n=>{const s=n.current;s&&c.observe(s)}),()=>c.disconnect()},[i]),{handleCaptionRef:l(c=>n=>{i[c].current=n},"handleCaptionRef"),captionHeight:a}},"useCaptionHeight"),U=l(({initialIndex:e=0}={})=>{const t=u.useRef(null),[i,a]=u.useState(e);u.useEffect(()=>{const n=t.current;if(!n)return;const s=Array.from(n.children),p=l(f=>{f.map(T=>{if(T.isIntersecting){const E=n.scrollLeft,k=n.clientWidth,O=Math.round(E/k);a(O)}})},"handleIntersection"),h=new IntersectionObserver(p,{root:n,threshold:.5});return s.forEach(f=>{h.observe(f)}),()=>h.disconnect()},[]);const d=u.useCallback(n=>{const s=t.current;if(!s)return;const p=s.clientWidth;s.scrollTo({left:n*p,behavior:"smooth"}),a(n)},[]);return{sliderRef:t,currentIndex:i,handlePrev:l(()=>d(i-1),"handlePrev"),handleNext:l(()=>d(i+1),"handleNext")}},"useSimpleSlider"),G=o.section.withConfig({componentId:"sc-174s69b-0"})(["display:flex;box-sizing:border-box;flex-direction:column;"]),J=o.header.withConfig({componentId:"sc-174s69b-1"})([""]),K=o(N).attrs({as:"header"}).withConfig({componentId:"sc-174s69b-2"})([""]),X=o.h3.withConfig({componentId:"sc-174s69b-3"})([""]),Y=o(N).attrs({as:"p"}).withConfig({componentId:"sc-174s69b-4"})([""]),H=o.ul.withConfig({componentId:"sc-174s69b-5"})(["display:flex;width:100%;padding:0;margin:0 -1px;list-style:none;-webkit-overflow-scrolling:touch;overflow-x:auto;overflow-y:visible;scroll-behavior:smooth;scroll-snap-type:x mandatory;",""],z),Z=o.li.withConfig({componentId:"sc-174s69b-6"})(["width:100%;flex:0 0 auto;padding:0;margin:0;scroll-snap-align:start;"]),y=o.nav.withConfig({componentId:"sc-174s69b-7"})(["display:flex;align-items:center;justify-content:flex-end;"]),P=o.span.withConfig({componentId:"sc-174s69b-8"})([""]),ee=o(q).attrs({size:"large",svg:A}).withConfig({componentId:"sc-174s69b-9"})([""]),te=o(q).attrs({size:"large",svg:M}).withConfig({componentId:"sc-174s69b-10"})([""]),b=l(({handlePrev:e,handleNext:t,itemCount:i,currentIndex:a,contentType:d="Image"})=>{const m=a===0,c=a===i-1;return r.jsxs(y,{"aria-label":"slide controls",children:[r.jsx(P,{children:`${d} ${a+1} of ${i}`}),r.jsx(ee,{"aria-label":"Previous",isDisabled:m,onClick:e,"data-testid":"prev-button"}),r.jsx(te,{"aria-label":"Next",isDisabled:c,onClick:t,"data-testid":"next-button"})]})},"Controls");try{b.displayName="Controls",b.__docgenInfo={description:"",displayName:"Controls",props:{itemCount:{defaultValue:null,description:"",name:"itemCount",required:!0,type:{name:"number"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}},contentType:{defaultValue:{value:"Image"},description:"",name:"contentType",required:!1,type:{name:"string"}},handlePrev:{defaultValue:null,description:"",name:"handlePrev",required:!0,type:{name:"() => void"}},handleNext:{defaultValue:null,description:"",name:"handleNext",required:!0,type:{name:"() => void"}}}}}catch{}const v=l(({title:e,showTitle:t})=>{const i=t?J:K;return r.jsx(i,{children:r.jsx(X,{children:e})})},"Header");try{v.displayName="Header",v.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},showTitle:{defaultValue:null,description:"",name:"showTitle",required:!0,type:{name:"boolean"}}}}}catch{}const S=l(({title:e,showTitle:t=!0,description:i,className:a,children:d})=>r.jsxs(G,{className:a,children:[r.jsx(v,{title:e,showTitle:t}),r.jsx(Y,{children:i}),d]}),"Carousel");try{S.displayName="Carousel",S.__docgenInfo={description:"",displayName:"Carousel",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},showTitle:{defaultValue:{value:"true"},description:"",name:"showTitle",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ie=o(S).withConfig({componentId:"sc-1yccrd8-0"})([""," --gap:","px;--padding:","px;--nav-min-height:","px;--nav-width:205px;gap:var(--gap);padding:var(--padding);background:",";","{margin-right:","px;font:",";}@media ","{--padding:","px ","px ","px;position:relative;","{position:absolute;right:0;bottom:0;width:var(--nav-width);height:var(--caption-height);min-height:var(--nav-min-height);padding-right:","px;padding-bottom:","px;background:",";}}@media ","{--gap:","px;--padding:","px ","px ","px;","{order:2;}","{order:1;}}"],({$captionHeight:e})=>L(["--caption-height:",";"],e?`${e}px`:"auto"),({theme:e})=>e.spacing.x0_5,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.dimension.minTouchArea,({theme:e})=>e.color.canvas.secondary,P,({theme:e})=>e.spacing.x2,({theme:e})=>e.textStyle.media.pagination,V,({theme:e})=>e.spacing.x4,({theme:e})=>e.spacing.x4,({theme:e})=>e.spacing.x2,y,({theme:e})=>e.spacing.x4,({theme:e})=>e.spacing.x2,({theme:e})=>e.color.canvas.secondary,R,({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.spacing.x8,({theme:e})=>e.spacing.x5,H,y),ne=o(B).withConfig({componentId:"sc-1yccrd8-1"})(["","{margin-top:","px;@media ","{margin-top:","px;}@media ","{display:flex;width:calc(100% - (var(--nav-width)));height:var(--caption-height);min-height:var(--nav-min-height);align-items:center;padding-right:","px;}@media ","{line-height:16px;}}"],W,({theme:e})=>e.spacing.x0_5,Q,({theme:e})=>e.spacing.x1,V,({theme:e})=>e.spacing.x2,R),C=u.forwardRef(l(function({items:t,renderSlide:i,currentIndex:a,handleCaptionRef:d},m){const c=t[a];return r.jsx(H,{ref:m,children:t.map((n,s)=>{const p=c===n,h=d(s);return r.jsx(Z,{"aria-hidden":!p,children:i({item:n,captionRef:h})},`item-${s}`)})})},"Slider2"));try{C.displayName="Slider",C.__docgenInfo={description:"",displayName:"Slider",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Item<unknown>[]"}},renderSlide:{defaultValue:null,description:"",name:"renderSlide",required:!0,type:{name:"(props: SimpleRenderSlideProps) => Element"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}},handleCaptionRef:{defaultValue:null,description:"",name:"handleCaptionRef",required:!0,type:{name:"(index: number) => (element: HTMLDivElement | null) => void"}}}}}catch{}const _=l(({title:e,items:t,renderSlide:i})=>{const a=t.length||0,{sliderRef:d,currentIndex:m,handlePrev:c,handleNext:n}=U(),{handleCaptionRef:s,captionHeight:p}=F({itemCount:a});return a===0?null:r.jsxs(ie,{title:e,showTitle:!1,description:"Carousel with one slide shown at a time. Use the Previous and Next buttons to navigate between slides.",$captionHeight:p,children:[r.jsx(C,{items:t,renderSlide:i,currentIndex:m,handleCaptionRef:s,ref:d}),r.jsx(b,{handlePrev:c,handleNext:n,itemCount:a,currentIndex:m})]})},"SimpleCarousel");try{_.displayName="SimpleCarousel",_.__docgenInfo={description:"",displayName:"SimpleCarousel",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Item<unknown>[]"}},renderSlide:{defaultValue:null,description:"",name:"renderSlide",required:!0,type:{name:"(props: SimpleRenderSlideProps) => Element"}}}}}catch{}const x=o($).withConfig({componentId:"sc-1tjf192-0"})(["display:block;aspect-ratio:3 / 2;object-fit:cover;"]),re=l(({item:e,captionRef:t})=>{const i=e.media,a=e.caption;return r.jsx(ne,{caption:a,ref:t,children:i})},"Slide"),Ie={title:"Components/Simple Carousel",component:_},g={args:{title:"Simple Carousel",items:[{id:"1",media:r.jsx(x,{}),caption:"Sed fringilla, turpis in fermentum aliquet"},{id:"2",media:r.jsx(x,{}),caption:"Neque odio sodales felis, nec sollicitudin tortor purus nec enim"},{id:"3",media:r.jsx(x,{}),caption:"Quisque id nisl vel mauris laoreet dapibus et et justo.Vestibulum ante ipsum primis in faucibus orciluctus et ultrices posuere cubilia Curae; Sed eu turpis ultricies, efficitur elit vel, dapibus ipsum. Vestibulum mattis tellus eu ligula pharetra, in aliquam tellus rhoncus"}],renderSlide:e=>r.jsx(re,{...e})}};var I,w,j;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Simple Carousel',
    items: [{
      id: '1',
      media: <StyledImage />,
      caption: 'Sed fringilla, turpis in fermentum aliquet'
    }, {
      id: '2',
      media: <StyledImage />,
      caption: 'Neque odio sodales felis, nec sollicitudin tortor purus nec enim'
    }, {
      id: '3',
      media: <StyledImage />,
      caption: 'Quisque id nisl vel mauris laoreet dapibus et et justo.Vestibulum ante ipsum primis in faucibus orciluctus et ultrices posuere cubilia Curae; Sed eu turpis ultricies, efficitur elit vel, dapibus ipsum. Vestibulum mattis tellus eu ligula pharetra, in aliquam tellus rhoncus'
    }],
    renderSlide: (props: SimpleRenderSlideProps) => <Slide {...props} />
  }
}`,...(j=(w=g.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};const we=["Default"];export{g as Default,we as __namedExportsOrder,Ie as default};
//# sourceMappingURL=SimpleCarousel.stories-0a538134.js.map
