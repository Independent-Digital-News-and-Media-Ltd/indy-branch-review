var j=Object.defineProperty;var i=(e,n)=>j(e,"name",{value:n,configurable:!0});import{C as k}from"./Content-c3fe7b33.js";import{j as t}from"./jsx-runtime-91e341d4.js";import{s as o}from"./styled-components.browser.esm-e91624e3.js";import{l as p}from"./viewports-7862a02b.js";import{a as v}from"./Button.constants-5ef3cdd5.js";import{B as E}from"./Button-49da2ebb.js";import{U as S}from"./Image-b19e3239.js";import{m as D,l as N}from"./devices-d44d55be.js";import{l as A}from"./dimensions-56a1099f.js";import{c as r,d as I,a as R,e as L,b as B,x as M}from"./spacings-c87bab45.js";import"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";import"./breakPoints-e2ca7578.js";import"./index-ed86a6de.js";import"./Icon-685f1285.js";import"./index-17b0cd16.js";import"./index-6925154b.js";import"./Icon.hoc-8a144cc9.js";import"./launch-outline-16-d86d5c2b.js";const V=o.div.withConfig({componentId:"sc-hbk5z5-0"})(["width:",";height:",";"],p.styles.width,p.styles.height),q=i(e=>t.jsx(V,{children:t.jsx(e,{})}),"ContentDecorator");try{Desktop.displayName="Desktop",Desktop.__docgenInfo={description:"",displayName:"Desktop",props:{}}}catch{}const b=3,U="selectedItems",$="status",z=o.div.withConfig({componentId:"sc-1xbxdej-0"})(["display:flex;position:fixed;right:0;bottom:0;left:0;border-top:1px solid ",";background:",";"],({theme:e})=>e.color.divider.light,({theme:e})=>e.color.canvas.secondary),P=o.div.withConfig({componentId:"sc-1xbxdej-1"})(["display:flex;width:100%;max-width:","px;box-sizing:border-box;gap:","px;padding:","px ","px;margin:0 auto;"],A,r,r,r),O=o.span.withConfig({componentId:"sc-1xbxdej-2"})(["display:flex;flex-wrap:nowrap;align-items:center;gap:",";margin:auto;@media ","{gap:",";}"],I,D,R),X=o.var.withConfig({componentId:"sc-1xbxdej-3"})(["margin-left:",";font-style:normal;"],I),W=o.ul.withConfig({componentId:"sc-1xbxdej-4"})(["display:none;flex-wrap:nowrap;align-items:stretch;gap:","px;padding:0;margin:0;@media ","{display:flex;flex:1;}"],L,N),Y=o.li.withConfig({componentId:"sc-1xbxdej-5"})(["--item-width:165px;--gap:","px;display:flex;max-width:var(--item-width);box-sizing:border-box;flex-direction:column;gap:var(--gap);padding:","px;border-radius:","px;background-color:",";list-style:none;"],B,M,({theme:e})=>e.dimension.btn.borderRadius,({theme:e})=>e.color.canvas.base),F=o.h4.withConfig({componentId:"sc-1xbxdej-6"})(["overflow:hidden;margin:0;font:",";text-overflow:ellipsis;white-space:nowrap;"],({theme:e})=>e.textStyle.controlImage),G=o(S).withConfig({componentId:"sc-1xbxdej-7"})(["height:auto;margin:0 auto;aspect-ratio:1.33 / 1;background:",";"],({theme:e})=>e.color.inverted),l=o(E).withConfig({componentId:"sc-1xbxdej-8"})(["gap:0;"]),m=i(e=>{const{selectedItems:n=[],max:d=b,onReset:C,onCompare:y}=e,a=n.slice(0,d);return t.jsx(z,{children:t.jsxs(P,{children:[t.jsx(W,{"data-testid":U,children:a.map(({title:_,image:w},T)=>t.jsxs(Y,{children:[t.jsx(F,{children:_}),t.jsx(G,{src:w,alt:"Product image"})]},T))}),t.jsxs(O,{children:[t.jsx(l,{variant:v,type:"reset",disabled:a.length<1,onClick:C,children:"Clear"}),t.jsxs(l,{disabled:a.length<2,onClick:y,children:["Compare",t.jsxs(X,{"data-testid":$,children:["(",a.length,"/",d,")"]})]})]})]})})},"Controls");try{m.displayName="Controls",m.__docgenInfo={description:"",displayName:"Controls",props:{selectedItems:{defaultValue:null,description:"The items to be compared",name:"selectedItems",required:!0,type:{name:"Item[]"}},max:{defaultValue:null,description:"The maximum number of items that can be selected",name:"max",required:!1,type:{name:"enum",value:[{value:"2"},{value:"3"}]}},onReset:{defaultValue:null,description:"The callback to be called when the reset button is clicked",name:"onReset",required:!1,type:{name:"(() => unknown)"}},onCompare:{defaultValue:null,description:"The callback to be called when the compare button is clicked",name:"onCompare",required:!1,type:{name:"(() => unknown)"}}}}}catch{}const ge={title:"Components/Product Comparison/Controls",component:m},c=[{id:"1",title:"Complete product 1 lorem ipsum dolor sit amet consectetur adipisicing elit"},{id:"2",title:"Complete product 2"},{id:"3",title:"Complete product 3"}],H={decorators:[q,k]},s={...H,argTypes:{selectedItems:{control:"check",options:c.map(e=>e.title),mapping:c.reduce((e,n)=>({...e,[n.title]:n}),{})},max:{control:{type:"range",min:2,max:3}}},args:{selectedItems:c,max:b}};var x,u,h,g,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Template,
  argTypes: {
    selectedItems: {
      control: 'check',
      options: mockItems.map(item => item.title),
      mapping: mockItems.reduce<{
        [key: string]: Item;
      }>((acc, item: Item) => ({
        ...acc,
        [item.title]: item
      }), {})
    },
    max: {
      control: {
        type: 'range',
        min: 2,
        max: 3
      }
    }
  },
  args: {
    selectedItems: mockItems,
    max: INITIAL_MAX_SELECTED_ITEMS
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:`The component is for use in the [ProductComparison](/docs/components-product-comparison--docs) component.

It does not control the state of the selected items, but rather
receives the selected items and the max number of items as props.

**Note:** Not intended to be used in isolation.`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.description}}};const fe=["Default"];export{s as Default,fe as __namedExportsOrder,ge as default};
//# sourceMappingURL=Controls.stories-89be0f22.js.map
