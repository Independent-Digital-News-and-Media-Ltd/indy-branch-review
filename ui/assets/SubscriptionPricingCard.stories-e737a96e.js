var T=Object.defineProperty;var n=(e,S)=>T(e,"name",{value:S,configurable:!0});import{j as r}from"./jsx-runtime-91e341d4.js";import{u as P}from"./styled-components.browser.esm-062f7c8c.js";import{S as b,a as B}from"./SubscriptionPricingCardWithDetails-b4855c53.js";import"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";import"./Button-7a699c59.js";import"./index-ed86a6de.js";import"./Icon-39e7351f.js";import"./index-17b0cd16.js";import"./index-6925154b.js";import"./Icon.hoc-29693b1a.js";import"./Button.constants-5ef3cdd5.js";import"./devices-d44d55be.js";import"./breakPoints-e2ca7578.js";import"./launch-outline-16-d86d5c2b.js";import"./Capsule-dcd47daf.js";const h=n(e=>r.jsx(b,{...e}),"BaseVariant"),j=P(h).withConfig({componentId:"sc-1ihj1jj-0"})(["padding:","px;"],({theme:e})=>e.spacing.x2),z={title:"Components/Subscription Pricing Card",component:h,argTypes:{children:{description:"Content of the card",options:["Text","Single Element","Multiple Elements"],mapping:{Text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repellat doloremque architecto sit neque? Similique, officia nisi.","Single Element":r.jsx("p",{children:"Single Element"}),"Multiple Elements":[r.jsx("p",{children:"Single Element"},1),r.jsx("p",{children:"Single Element"},2)]}}}},x={children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repellat doloremque architecto sit neque? Similique, officia nisi."},f={...x,badgeText:"Best value"},i={args:x},t={args:f,render:e=>r.jsx(j,{...e})},s={args:{...f,subscriptionLength:"Annual",discountedPrice:"£20 for 1 year",normalPrice:"£99",continuedPrice:"Then £99/year",callToActionText:"Subscribe now"},render:e=>r.jsx(B,{...e})};var a,o,c;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(c=(o=i.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var l,p,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: withBadgeTextArgs,
  render: <T extends BaseProps,>(args: T) => <BaseVariantWithPadding {...args} />
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...withBadgeTextArgs,
    subscriptionLength: 'Annual',
    discountedPrice: '£20 for 1 year',
    normalPrice: '£99',
    continuedPrice: 'Then £99/year',
    callToActionText: 'Subscribe now'
  },
  render: <T extends WithDetailsProps,>(args: T) => <SubscriptionPricingCardWithDetails {...args} />
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const F=["Default","DefaultWithBadge","DefaultWithBadgeAndDetails"];export{i as Default,t as DefaultWithBadge,s as DefaultWithBadgeAndDetails,F as __namedExportsOrder,z as default};
//# sourceMappingURL=SubscriptionPricingCard.stories-e737a96e.js.map
