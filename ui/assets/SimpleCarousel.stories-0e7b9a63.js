var D=Object.defineProperty;var l=(e,t)=>D(e,"name",{value:t,configurable:!0});import{j as n}from"./jsx-runtime-91e341d4.js";import{u as o,a as L}from"./styled-components.browser.esm-dd68fb2f.js";import{I as $}from"./Image-388cf5e5.js";import{r as h}from"./index-b56a0300.js";import{I as q}from"./IconButton-c662f5de.js";import{S as N}from"./ScreenReaderOnly-7e424ac1.js";import{h as z}from"./mixins-19e17390.js";import{S as A}from"./chevron-left-solid-24-93719b9d.js";import{S as M}from"./chevron-right-solid-24-fb4b0b3b.js";import{C as W,c as B}from"./MediaPlusCaption-5d931847.js";import{o as V,l as R,t as Q}from"./devices-f8e8a791.js";import"./_commonjsHelpers-c38d1a10.js";import"./Icon.hoc-1b9291aa.js";import"./Symbols.hoc-fb0f215f.js";import"./index-17b0cd16.js";import"./index-6925154b.js";const F=l(({itemCount:e})=>{const t=Array.from({length:e},()=>h.useRef(null)),i=h.useMemo(()=>t,[t]),[r,a]=h.useState(0);return h.useEffect(()=>{const d=new ResizeObserver(c=>{let s=0;c.map(p=>{const m=p.target.children[0].clientHeight;m>s&&(s=m)}),a(s)});return i.forEach(c=>{const s=c.current;s&&d.observe(s)}),()=>d.disconnect()},[i]),{handleCaptionRef:l(d=>c=>{i[d].current=c},"handleCaptionRef"),captionHeight:r}},"useCaptionHeight"),U=l(({initialIndex:e=0}={})=>{const t=h.useRef(null),[i,r]=h.useState(e),a=t.current;h.useEffect(()=>{if(!a)return;const s=Array.from(a.children),p=l(f=>{f.map(T=>{if(T.isIntersecting){const E=a.scrollLeft,k=a.clientWidth,O=Math.round(E/k);r(O)}})},"handleIntersection"),m=new IntersectionObserver(p,{root:a,threshold:.5});return s.forEach(f=>{m.observe(f)}),()=>m.disconnect()},[a]);const u=h.useCallback(s=>{const p=t.current;if(!p)return;const m=p.clientWidth;p.scrollTo({left:s*m,behavior:"smooth"}),r(s)},[]);return{sliderRef:t,currentIndex:i,handlePrev:l(()=>u(i-1),"handlePrev"),handleNext:l(()=>u(i+1),"handleNext")}},"useSimpleSlider"),G=o.section.withConfig({componentId:"sc-174s69b-0"})(["display:flex;box-sizing:border-box;flex-direction:column;"]),J=o.header.withConfig({componentId:"sc-174s69b-1"})([""]),K=o(N).attrs({as:"header"}).withConfig({componentId:"sc-174s69b-2"})([""]),X=o.h3.withConfig({componentId:"sc-174s69b-3"})([""]),Y=o(N).attrs({as:"p"}).withConfig({componentId:"sc-174s69b-4"})([""]),H=o.ul.withConfig({componentId:"sc-174s69b-5"})(["display:flex;width:100%;padding:0;margin:0 -1px;list-style:none;-webkit-overflow-scrolling:touch;overflow-x:auto;overflow-y:visible;scroll-behavior:smooth;scroll-snap-type:x mandatory;",""],z),Z=o.li.withConfig({componentId:"sc-174s69b-6"})(["width:100%;flex:0 0 auto;padding:0;margin:0;scroll-snap-align:start;"]),y=o.nav.withConfig({componentId:"sc-174s69b-7"})(["display:flex;align-items:center;justify-content:flex-end;"]),P=o.span.withConfig({componentId:"sc-174s69b-8"})([""]),ee=o(q).attrs({size:"large",svg:A}).withConfig({componentId:"sc-174s69b-9"})([""]),te=o(q).attrs({size:"large",svg:M}).withConfig({componentId:"sc-174s69b-10"})([""]),b=l(({handlePrev:e,handleNext:t,itemCount:i,currentIndex:r,contentType:a="Image"})=>{const u=r===0,d=r===i-1;return n.jsxs(y,{"aria-label":"slide controls",children:[n.jsx(P,{children:`${a} ${r+1} of ${i}`}),n.jsx(ee,{"aria-label":"Previous",isDisabled:u,onClick:e,"data-testid":"prev-button"}),n.jsx(te,{"aria-label":"Next",isDisabled:d,onClick:t,"data-testid":"next-button"})]})},"Controls");try{b.displayName="Controls",b.__docgenInfo={description:"",displayName:"Controls",props:{itemCount:{defaultValue:null,description:"",name:"itemCount",required:!0,type:{name:"number"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}},contentType:{defaultValue:{value:"Image"},description:"",name:"contentType",required:!1,type:{name:"string"}},handlePrev:{defaultValue:null,description:"",name:"handlePrev",required:!0,type:{name:"() => void"}},handleNext:{defaultValue:null,description:"",name:"handleNext",required:!0,type:{name:"() => void"}}}}}catch{}const v=l(({title:e,showTitle:t})=>{const i=t?J:K;return n.jsx(i,{children:n.jsx(X,{children:e})})},"Header");try{v.displayName="Header",v.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},showTitle:{defaultValue:null,description:"",name:"showTitle",required:!0,type:{name:"boolean"}}}}}catch{}const S=l(({title:e,showTitle:t=!0,description:i,className:r,children:a})=>n.jsxs(G,{className:r,children:[n.jsx(v,{title:e,showTitle:t}),n.jsx(Y,{children:i}),a]}),"Carousel");try{S.displayName="Carousel",S.__docgenInfo={description:"",displayName:"Carousel",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},showTitle:{defaultValue:{value:"true"},description:"",name:"showTitle",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ie=o(S).withConfig({componentId:"sc-1yccrd8-0"})([""," --gap:","px;--padding:","px;--nav-min-height:","px;--nav-width:205px;gap:var(--gap);padding:var(--padding);background:",";","{margin-right:","px;font:",";}@media ","{--padding:","px ","px ","px;position:relative;","{position:absolute;right:0;bottom:0;width:var(--nav-width);height:var(--caption-height);min-height:var(--nav-min-height);padding-right:","px;padding-bottom:","px;background:",";}}@media ","{--gap:","px;--padding:","px ","px ","px;","{order:2;}","{order:1;}}"],({$captionHeight:e})=>L(["--caption-height:",";"],e?`${e}px`:"auto"),({theme:e})=>e.spacing.x0_5,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.dimension.minTouchArea,({theme:e})=>e.color.canvas.secondary,P,({theme:e})=>e.spacing.x2,({theme:e})=>e.textStyle.media.pagination,V,({theme:e})=>e.spacing.x4,({theme:e})=>e.spacing.x4,({theme:e})=>e.spacing.x2,y,({theme:e})=>e.spacing.x4,({theme:e})=>e.spacing.x2,({theme:e})=>e.color.canvas.secondary,R,({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.spacing.x8,({theme:e})=>e.spacing.x5,H,y),ne=o(B).withConfig({componentId:"sc-1yccrd8-1"})(["","{margin-top:","px;@media ","{margin-top:","px;}@media ","{display:flex;width:calc(100% - (var(--nav-width)));height:var(--caption-height);min-height:var(--nav-min-height);align-items:center;padding-right:","px;}@media ","{line-height:16px;}}"],W,({theme:e})=>e.spacing.x0_5,Q,({theme:e})=>e.spacing.x1,V,({theme:e})=>e.spacing.x2,R),C=h.forwardRef(l(function({items:t,renderSlide:i,currentIndex:r,handleCaptionRef:a},u){const d=t[r];return n.jsx(H,{ref:u,children:t.map((c,s)=>{const p=d===c,m=a(s);return n.jsx(Z,{"aria-hidden":!p,children:i({item:c,captionRef:m})},`item-${s}`)})})},"Slider2"));try{C.displayName="Slider",C.__docgenInfo={description:"",displayName:"Slider",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Item<unknown>[]"}},renderSlide:{defaultValue:null,description:"",name:"renderSlide",required:!0,type:{name:"(props: SimpleRenderSlideProps) => Element"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}},handleCaptionRef:{defaultValue:null,description:"",name:"handleCaptionRef",required:!0,type:{name:"(index: number) => (element: HTMLDivElement | null) => void"}}}}}catch{}const _=l(({title:e,items:t,renderSlide:i})=>{const r=t.length||0,{sliderRef:a,currentIndex:u,handlePrev:d,handleNext:c}=U(),{handleCaptionRef:s,captionHeight:p}=F({itemCount:r});return r===0?null:n.jsxs(ie,{title:e,showTitle:!1,description:"Carousel with one slide shown at a time. Use the Previous and Next buttons to navigate between slides.",$captionHeight:p,children:[n.jsx(C,{items:t,renderSlide:i,currentIndex:u,handleCaptionRef:s,ref:a}),n.jsx(b,{handlePrev:d,handleNext:c,itemCount:r,currentIndex:u})]})},"SimpleCarousel");try{_.displayName="SimpleCarousel",_.__docgenInfo={description:"",displayName:"SimpleCarousel",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Item<unknown>[]"}},renderSlide:{defaultValue:null,description:"",name:"renderSlide",required:!0,type:{name:"(props: SimpleRenderSlideProps) => Element"}}}}}catch{}const x=o($).withConfig({componentId:"sc-1tjf192-0"})(["display:block;aspect-ratio:3 / 2;object-fit:cover;"]),re=l(({item:e,captionRef:t})=>{const i=e.media,r=e.caption;return n.jsx(ne,{caption:r,ref:t,children:i})},"Slide"),Ce={title:"Components/Simple Carousel",component:_},g={args:{title:"Simple Carousel",items:[{id:"1",media:n.jsx(x,{}),caption:"Sed fringilla, turpis in fermentum aliquet"},{id:"2",media:n.jsx(x,{}),caption:"Neque odio sodales felis, nec sollicitudin tortor purus nec enim"},{id:"3",media:n.jsx(x,{}),caption:"Quisque id nisl vel mauris laoreet dapibus et et justo.Vestibulum ante ipsum primis in faucibus orciluctus et ultrices posuere cubilia Curae; Sed eu turpis ultricies, efficitur elit vel, dapibus ipsum. Vestibulum mattis tellus eu ligula pharetra, in aliquam tellus rhoncus"}],renderSlide:e=>n.jsx(re,{...e})}};var I,w,j;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(j=(w=g.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};const _e=["Default"];export{g as Default,_e as __namedExportsOrder,Ce as default};
//# sourceMappingURL=SimpleCarousel.stories-0e7b9a63.js.map
