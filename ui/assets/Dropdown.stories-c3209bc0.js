import{j as i}from"./jsx-runtime-91e341d4.js";import{u as _}from"./styled-components.browser.esm-dd68fb2f.js";import{a as B,D as c,B as E,T as l}from"./Dropdown-2f1c0625.js";import"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";import"./index-6925154b.js";const K={title:"Scaffolding/Dropdown",component:B,argTypes:{trigger:{value:"Dropdown title",type:{name:"string",required:!0},control:{type:"text"}},children:{value:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum dolorem corporis suscipit. Ducimus neque necessitatibus veritatis possimus suscipit itaque explicabo dolorum eaque velit ea incidunt, quam deserunt eos atque praesentium",type:{name:"string",required:!0},control:{type:"text"}},size:{control:{type:"radio"}}}},r={args:{trigger:"Default dropdown",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repellat doloremque architecto sit neque? Similique, officia nisi. Quaerat illo placeat nesciunt recusandae, perspiciatis veniam vel pariatur quisquam aperiam, quidem iusto.",isOpen:!1}},t={args:{trigger:"Open dropdown",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quo, reiciendis nobis est facilis iste aliquam esse error cupiditate sapiente eius. Laborum beatae qui voluptates nihil rerum velit nostrum est.",isOpen:!0}},s={args:{trigger:"Closed dropdown",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quo, reiciendis nobis est facilis iste aliquam esse error cupiditate sapiente eius. Laborum beatae qui voluptates nihil rerum velit nostrum est.",isOpen:!1}},a={args:{trigger:"Stateful dropdown",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quo, reiciendis nobis est facilis iste aliquam esse error cupiditate sapiente eius. Laborum beatae qui voluptates nihil rerum velit nostrum est."},argTypes:{isOpen:{table:{disable:!0}}},render:e=>i.jsx(c,{...e})},o={args:{trigger:"Disabled dropdown",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quo, reiciendis nobis est facilis iste aliquam esse error cupiditate sapiente eius. Laborum beatae qui voluptates nihil rerum velit nostrum est.",disabled:!0}},H=_.div.withConfig({componentId:"sc-5vn68a-0"})(["--dropdown-trigger-color:",";"],e=>e.theme.color.semiotic.error),n={args:{trigger:"Custom styled trigger",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quo, reiciendis nobis est facilis iste aliquam esse error cupiditate sapiente eius. Laborum beatae qui voluptates nihil rerum velit nostrum est."},render:e=>i.jsx(H,{children:i.jsx(c,{...e})})},Q=_.div.withConfig({componentId:"sc-5vn68a-1"})(["--dropdown-content-initial-height:2rem;","{display:flex;flex-direction:column;}","{order:2;padding:0.5rem 0;box-shadow:0 0 1rem 0.5rem ",";}& [aria-expanded='true']","{box-shadow:none;}"],E,l,({theme:e})=>e.color.canvas.base,l),u={args:{trigger:"Read more",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quo, reiciendis nobis est facilis iste aliquam esse error cupiditate sapiente eius. Laborum beatae qui voluptates nihil rerum velit nostrum est."},render:e=>i.jsx(Q,{children:i.jsx(c,{...e})})};var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    trigger: 'Default dropdown',
    children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repellat doloremque architecto sit neque? Similique, officia nisi. Quaerat illo placeat nesciunt recusandae, perspiciatis veniam vel pariatur quisquam aperiam, quidem iusto.',
    isOpen: false
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,q,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    trigger: 'Open dropdown',
    children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quo, reiciendis nobis est facilis iste aliquam esse error cupiditate sapiente eius. Laborum beatae qui voluptates nihil rerum velit nostrum est.',
    isOpen: true
  }
}`,...(b=(q=t.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};var f,h,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    trigger: 'Closed dropdown',
    children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quo, reiciendis nobis est facilis iste aliquam esse error cupiditate sapiente eius. Laborum beatae qui voluptates nihil rerum velit nostrum est.',
    isOpen: false
  }
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var L,C,w;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    trigger: 'Stateful dropdown',
    children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quo, reiciendis nobis est facilis iste aliquam esse error cupiditate sapiente eius. Laborum beatae qui voluptates nihil rerum velit nostrum est.'
  },
  argTypes: {
    isOpen: {
      table: {
        disable: true
      }
    }
  },
  render: args => <DropdownStateful {...args} />
}`,...(w=(C=a.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var T,S,D;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    trigger: 'Disabled dropdown',
    children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quo, reiciendis nobis est facilis iste aliquam esse error cupiditate sapiente eius. Laborum beatae qui voluptates nihil rerum velit nostrum est.',
    disabled: true
  }
}`,...(D=(S=o.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var x,O,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    trigger: 'Custom styled trigger',
    children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quo, reiciendis nobis est facilis iste aliquam esse error cupiditate sapiente eius. Laborum beatae qui voluptates nihil rerum velit nostrum est.'
  },
  render: args => <CustomTriggerContainer>
      <DropdownStateful {...args} />
    </CustomTriggerContainer>
}`,...(y=(O=n.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var j,I,R;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    trigger: 'Read more',
    children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quo, reiciendis nobis est facilis iste aliquam esse error cupiditate sapiente eius. Laborum beatae qui voluptates nihil rerum velit nostrum est.'
  },
  render: args => <CustomContainer>
      <DropdownStateful {...args} />
    </CustomContainer>
}`,...(R=(I=u.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const M=["Default","Open","Closed","Stateful","Disabled","CustomTrigger","CustomInitialHeight"];export{s as Closed,u as CustomInitialHeight,n as CustomTrigger,r as Default,o as Disabled,t as Open,a as Stateful,M as __namedExportsOrder,K as default};
//# sourceMappingURL=Dropdown.stories-c3209bc0.js.map
