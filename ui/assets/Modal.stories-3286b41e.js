var m=Object.defineProperty;var r=(e,n)=>m(e,"name",{value:n,configurable:!0});import{j as o}from"./jsx-runtime-91e341d4.js";import{M as p,L as c,c as d,T as u}from"./createSelectedItems-f1ec26ef.js";import{P as y}from"./Overlay-5ca25e11.js";import{P as l}from"./ProductBuilder-1c4c7d7e.js";import"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";import"./styled-components.browser.esm-e91624e3.js";import"./viewports-7862a02b.js";import"./breakPoints-e2ca7578.js";import"./Icon-685f1285.js";import"./index-17b0cd16.js";import"./index-6925154b.js";import"./Icon.hoc-8a144cc9.js";import"./SuccessConfirmationModal-c47bfff0.js";import"./inheritsLoose-5ae194f1.js";import"./Button-49da2ebb.js";import"./index-ed86a6de.js";import"./Button.constants-5ef3cdd5.js";import"./devices-d44d55be.js";import"./launch-outline-16-d86d5c2b.js";import"./dimensions-0dadfeb5.js";import"./spacings-05c088e8.js";import"./close-solid-24-ed40c83c.js";import"./formatPrice-c665c98d.js";import"./StarRating-613817b3.js";import"./star-solid-24-b796f633.js";import"./clampLines-3ce23727.js";import"./Image-7c09a9b2.js";const $={title:"Components/ProductComparisonModal",component:p,parameters:{layout:"fullscreen"},decorators:[y,c]},v={},k=[{key:"Wireless",value:"Yes"},{key:"Form factor",value:"Closed design"},{key:"banana",value:"Cavendish"},{key:"Noise Cancellation",value:"Yes"},{key:"carrot",value:null},{key:"Weight",value:"53g (case, earbud weight not specified)"},{key:"apple",value:null}],b=[{key:"apple",value:"rosey"},{key:"banana",value:"bent"},{key:"carrot",value:"cake"},{key:"Noise Cancellation",value:null},{key:"Type",value:"Earbuds"},{key:"Wireless",value:"Yes"},{key:"Form factor",value:"Closed design"}],f=new l().id("product-1").bestFor("Full-featured earbuds").prettyPrice("£13.14").title("very, very, very long title of a product that spans to many lines").productSpec(k).build(),P=new l().id("product-2").bestFor("budget earbyds").prettyPrice("£23.99").title("title of product").productSpec(b).build(),g=[f,P],M=r(()=>{},"hideProductModal"),h=["product-1","product-2"],C=d(h,g),t={...v,args:{hideProductModal:M,isHidden:!1,items:C,returnFocus:"",livePrices:[]},render:e=>o.jsx(p,{...e,items:e.items,children:o.jsx(u,{livePrices:[],items:e.items})})};var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ee=["Base"];export{t as Base,ee as __namedExportsOrder,$ as default};
//# sourceMappingURL=Modal.stories-3286b41e.js.map
