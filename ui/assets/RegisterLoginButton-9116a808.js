var T=Object.defineProperty;var h=(e,a)=>T(e,"name",{value:a,configurable:!0});import{j as r}from"./jsx-runtime-91e341d4.js";import{u as t,a as g,t as w}from"./styled-components.browser.esm-dd68fb2f.js";import{p as I}from"./themes-9bfd5a12.js";import{I as q}from"./Icon.hoc-787425e7.js";import{t as V}from"./mixins-e8622e63.js";import{S as A}from"./user-solid-24-2052e0db.js";const s=t.a.withConfig({componentId:"sc-i9z1xm-0"})(["display:flex;align-items:center;padding:0 ","px;border-radius:0;background-color:",";color:",";transition:",";",";&:hover,&:active{background:",";color:",";}"],({theme:e})=>e.spacing.x1_5,({theme:e})=>e.color.actionBrand.base,({theme:e})=>e.color.ink.inverted,({theme:e})=>e.transition.button,({theme:e})=>e.textStyle.registerLoginButton.base,({theme:e})=>e.color.actionBrand.alt,({theme:e})=>e.color.ink.inverted),n=t.a.withConfig({componentId:"sc-i9z1xm-1"})(["display:flex;min-width:0;box-sizing:border-box;flex:1 1 100%;align-items:center;gap:","px;padding:0 ","px;background-color:",";color:",";transition:",";"," &:hover,&:active{background-color:",";color:",";}"],({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.color.actionTransparent.base,({theme:e})=>e.color.actionInvert.base,({theme:e})=>e.transition.button,({theme:e})=>e.textStyle.registerLoginButton.base,({theme:e})=>e.color.actionTransparent.alt,({theme:e})=>e.color.actionInvert.alt),l=t.div.withConfig({componentId:"sc-i9z1xm-2"})(["display:flex;height:100%;align-items:stretch;"," ",""],({$isRegistered:e,$isSubscriber:a})=>e||a?g(["","{text-transform:capitalize;}"],n):"",({theme:e,$isSubscriber:a})=>a?g(["","{color:",";&:hover,&:active{color:",";}}","{background-color:",";color:",";",";&:hover,&:active{background:",";color:",";}}"],n,e.color.actionBrandInvert.base,e.color.actionBrandInvert.alt,s,e.color.canvas.base,e.color.actionBrand.base,e.textStyle.registerLoginButton.link,e.color.canvas.base,e.color.actionBrand.alt):""),d=t(q).attrs({svg:A,size:"base"}).withConfig({componentId:"sc-i9z1xm-3"})(["flex-grow:0;flex-shrink:0;"]),c=t.div.withConfig({componentId:"sc-i9z1xm-4"})(["--width:","px;display:flex;width:var(--width);height:var(--width);flex:0 0 var(--width);align-items:center;justify-content:center;"],({theme:e})=>e.dimension.icon.large),_=t.span.withConfig({componentId:"sc-i9z1xm-5"})(["display:block;",""],V),u=t(_).withConfig({componentId:"sc-i9z1xm-6"})([""]),p=t(_).attrs({as:"small"}).withConfig({componentId:"sc-i9z1xm-7"})(["position:relative;top:-2px;",""],({theme:e})=>e.textStyle.registerLoginButton.status);try{s.displayName="CTA",s.__docgenInfo={description:"The call to action button which sits alongside the main button",displayName:"CTA",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{n.displayName="Button",n.__docgenInfo={description:"The main button which displays the users current status",displayName:"Button",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="Wrapper",l.__docgenInfo={description:"",displayName:"Wrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{d.displayName="UserIcon",d.__docgenInfo={description:"",displayName:"UserIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="IconWrapper",c.__docgenInfo={description:"",displayName:"IconWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{u.displayName="Label",u.__docgenInfo={description:"",displayName:"Label",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{p.displayName="Status",p.__docgenInfo={description:"",displayName:"Status",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const y=h(({id:e,href:a,status:m,isSubscriber:o=!1,isRegistered:i=!1,cta:b,children:x,...v})=>{const f=r.jsxs(l,{...v,$isRegistered:i,$isSubscriber:o,children:[r.jsxs(n,{id:e,href:a,children:[r.jsx(c,{children:r.jsx(d,{})}),r.jsxs(u,{children:[x,m&&r.jsx(p,{children:m})]})]}),(o||i)&&b]});return o||i?r.jsx(w,{theme:{...I},children:f}):f},"RegisterLoginButton");try{y.displayName="RegisterLoginButton",y.__docgenInfo={description:`A button which can be used to both prompt the user to log in and also display
their status once they are.`,displayName:"RegisterLoginButton",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The main text of the button",name:"children",required:!0,type:{name:"Children"}},status:{defaultValue:null,description:"A subtext to the main button label",name:"status",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"A href for the button to follow",name:"href",required:!0,type:{name:"string"}},isRegistered:{defaultValue:{value:"false"},description:"Whether the button is representing a user that is a registered",name:"isRegistered",required:!1,type:{name:"boolean"}},isSubscriber:{defaultValue:{value:"false"},description:"Whether the button is representing a user that is a subscriber",name:"isSubscriber",required:!1,type:{name:"boolean"}},cta:{defaultValue:null,description:"An optional `<CTA />` to sit alongside the main button.",name:"cta",required:!1,type:{name:'ReactElement<IStyledComponent<"web", FastOmit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, never>>, string | JSXElementConstructor<...>>'}}}}}catch{}export{s as C,y as R};
//# sourceMappingURL=RegisterLoginButton-9116a808.js.map