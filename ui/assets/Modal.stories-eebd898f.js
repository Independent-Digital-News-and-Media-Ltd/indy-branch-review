var c=Object.defineProperty;var r=(e,n)=>c(e,"name",{value:n,configurable:!0});import{j as o}from"./jsx-runtime-91e341d4.js";import{M as l,L as m,c as d,T as u}from"./createSelectedItems-4cd60466.js";import{P as y}from"./Overlay-1ecdb49a.js";import{P as p}from"./ProductBuilder-c2755f71.js";import"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";import"./styled-components.browser.esm-dd68fb2f.js";import"./viewports-dcde50e7.js";import"./devices-f8e8a791.js";import"./SuccessConfirmationModal-be26a501.js";import"./inheritsLoose-5ae194f1.js";import"./Button-12c95ded.js";import"./index-8d138fa4.js";import"./Icon.hoc-1b9291aa.js";import"./Symbols.hoc-fb0f215f.js";import"./index-17b0cd16.js";import"./index-6925154b.js";import"./Button.constants-c6e6f0a7.js";import"./launch-outline-16-2a071c4c.js";import"./IconButton-c662f5de.js";import"./mixins-19e17390.js";import"./close-solid-24-1a6c3203.js";import"./StarRating-7fba4fb1.js";import"./star-solid-24-6b31e071.js";import"./currency-e70b3aaa.js";import"./clampLines-1aa52b19.js";import"./Image-388cf5e5.js";const Z={title:"Modules/Product Comparison/Modal",component:l,parameters:{layout:"fullscreen"},decorators:[y,m]},v={},k=[{key:"Wireless",value:"Yes"},{key:"Form factor",value:"Closed design"},{key:"banana",value:"Cavendish"},{key:"Noise Cancellation",value:"Yes"},{key:"carrot",value:null},{key:"Weight",value:"53g (case, earbud weight not specified)"},{key:"apple",value:null}],P=[{key:"apple",value:"rosey"},{key:"banana",value:"bent"},{key:"carrot",value:"cake"},{key:"Noise Cancellation",value:null},{key:"Type",value:"Earbuds"},{key:"Wireless",value:"Yes"},{key:"Form factor",value:"Closed design"}],b=new p().id("product-1").bestFor("Full-featured earbuds").prettyPrice("£13.14").title("Very, very, very long title of a Product that spans to many lines").productSpec(k).build(),f=new p().id("product-2").bestFor("budget earbyds").prettyPrice("£23.99").title("Title of Product").productSpec(P).build(),g=[b,f],M=r(()=>{},"hideProductModal"),h=["product-1","product-2"],F=d(h,g),t={...v,args:{hideProductModal:M,isHidden:!1,items:F,returnFocus:"",livePrices:[]},render:e=>o.jsx(l,{...e,items:e.items,children:o.jsx(u,{livePrices:[],items:e.items})})};var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Template,
  args: {
    hideProductModal,
    isHidden: false,
    items: selectedItems,
    returnFocus: '',
    livePrices: []
  },
  render: (props: ModalProps) => {
    return <Modal {...props} items={props.items}>
        <Table livePrices={[]} items={props.items} />
      </Modal>;
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const $=["Base"];export{t as Base,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=Modal.stories-eebd898f.js.map