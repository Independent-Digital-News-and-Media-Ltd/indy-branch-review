var it=Object.defineProperty;var x=(e,i)=>it(e,"name",{value:i,configurable:!0});import{c as R,r as pt,a as st,b as _,d,e as b,o as L,g as K,f as S,h as ct,i as A,j as q,y as xt,k as dt,t as M,l as f,m as bt,n as ut,q as mt,w as $t,s as ft,v as gt,u as ht,x as yt,z as _t,A as w,B as St,C as E,D as vt,E as G,F as Q,G as kt,H as v,I as J,J as Y,K as Bt,L as jt,M as W}from"./palette-1a021665.js";import{h as U}from"./colors-3e41a0f7.js";import{b as Ot}from"./base-63caefee.js";import{x as Pt,s as Tt}from"./spacings-dc016d25.js";import{f as Dt}from"./fontWeights-1d7bfb43.js";import{a as s}from"./styled-components.browser.esm-dd68fb2f.js";import{t as D,l as F}from"./devices-1d39230d.js";function Ft(e,i){for(var a=0;a<i.length;a++){const r=i[a];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const n=Object.getOwnPropertyDescriptor(r,l);n&&Object.defineProperty(e,l,n.get?n:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}x(Ft,"_mergeNamespaces");const It={bookmark:{base:M,alt:f},twitter:{base:bt},facebook:{base:ut,alt:mt},whatsapp:{base:$t,alt:ft},vk:{base:gt},telegram:{base:ht},x:{base:yt,alt:_t}},Z={success:"#157F1F",error:"#A20021",disabled:"#BBBBBB",inactive:"#BBBBBB",info:"#276FBF",live:xt,offer:dt},m={primary:{base:R,light:pt,muted:st,dark:_},actionBrand:{base:R,alt:_,disabled:Z.disabled},actionWhite:{base:d,alt:_},actionBlack:{base:b,alt:_},actionSubtleLight:{base:d,alt:L},actionSubtleDark:{base:b,alt:K},actionBold:{base:d,alt:S},actionInvert:{base:S,alt:d},actionTransparent:{base:"transparent",alt:S},canvas:{base:d,secondary:L,brand:ct,card:d},ink:{base:b,light:A,muted:K,inverted:d},divider:{light:q,dark:A,black:b,brand:q},table:{border:L},veil:{base:U("#000000",.5)},videoStandby:{base:"#000000"},shadow:{base:U("#000000",.5)},dark:{canvas:{base:b,secondary:S,card:b},ink:{base:d}}},Lt={primary:{base:M,light:w,muted:St,dark:f},actionBrand:{base:M,alt:f,disabled:E},actionWhite:{alt:f},actionBlack:{alt:f},canvas:{brand:w,card:w},divider:{brand:E},dark:{canvas:{card:vt}}},wt={primary:{base:G,light:Q,muted:kt,dark:v},actionBrand:{base:G,alt:v},actionWhite:{alt:v},actionBlack:{alt:v},canvas:{brand:Q}},Wt={primary:{base:J,light:Y,muted:Bt,dark:jt},actionBrand:{base:J,alt:W},actionWhite:{alt:W},actionBlack:{alt:W},canvas:{brand:Y}},Ct={actionBrand:{base:m.actionSubtleDark.base,alt:m.actionSubtleDark.alt},actionWhite:{alt:m.actionSubtleDark.alt},actionBlack:{alt:m.actionSubtleDark.alt},canvas:{brand:m.canvas.secondary}},Mt={marginY:Pt},Ht=Object.freeze(Object.defineProperty({__proto__:null,paragraph:Mt},Symbol.toStringTag,{value:"Module"})),zt={...Ot},Rt={...Ht},o="'Indy Serif', 'Indy Serif Fallback', serif",t="'Indy Sans', 'Indy Sans Fallback', sans-serif",Kt="'Indy Sans CAPS', 'Indy Sans CAPS Fallback', sans-serif",At="'Indy-Serif-Medium', serif",qt="'Indy-Serif-Light', serif",Et="'Indy-Serif-Light-Italic', serif",Gt="'Indy-Serif-Regular', serif",Qt="'Indy Hairline'",Jt="'Indy-Sans-Light', sans-serif",Yt="'Indy Sans Heavy', sans-serif",Ut="'Indy-Sans-Bold', sans-serif",Xt="'Indy-Serif-Bold', serif",Zt=Object.freeze(Object.defineProperty({__proto__:null,editionHairlineFont:Qt,editionLightFont:qt,editionLightItalicFont:Et,editionMediumFont:At,editionRegularFont:Gt,editionSansBoldFont:Ut,editionSansHeavyFont:Yt,editionSansLightFont:Jt,editionSerifBoldFont:Xt,primaryFont:o,secondaryFont:t,secondaryFontCaps:Kt},Symbol.toStringTag,{value:"Module"})),Vt="11px",g="12px",Nt="13px",V="15px",h="16px",j="17px",I="19px",O="24px",y="32px",te="1.44em",ee="13px",oe="14px",ne="14px",ae="15px",N="14px",re={input:h,label:g,error:g},le=Object.freeze(Object.defineProperty({__proto__:null,base:h,body:te,btn:N,formField:re,large:O,list:ne,medium:j,menu:ee,small:g,small13:Nt,small15:V,submenu:oe,submenu15:ae,xLarge:y,xMedium:I,xSmall:Vt},Symbol.toStringTag,{value:"Module"})),ie=s(["font-weight:bold;letter-spacing:0.22px;line-height:normal;"]),pe=s([""]),se=s(["line-height:21px;"]),ce=s([""]),xe=s([""]),de=s([""]),be=s(["font:normal "," / 1.44em ",";"],I,o),ue=s(["color:",";text-decoration:none;&:hover{color:",";}"],({theme:e})=>e.color.actionBrand.base,({theme:e})=>e.color.actionBrand.alt),me={base:{mobile:`bold 32px/36px ${o}`,tablet:`bold 44px/48px ${o}`,laptop:`bold 54px/58px ${o}`},voices:{mobile:`bold italic 32px/36px ${o}`,tablet:`bold italic 44px/48px ${o}`,laptop:`bold italic 54px/58px ${o}`},infact:`bold 30px/34px ${o}`},$e={base:{mobile:`normal 16px/20px ${t}`,tablet:`normal 18px/22px ${t}`,laptop:`normal 20px/24px ${t}`}},fe="bold 3.5em Georgia",ge={small:{base:{font:`bold 14px/18px ${t}`,textTransform:"uppercase"},expanded:{font:`bold 14px/18px ${t}`,letterSpacing:"2.5px",textTransform:"uppercase"}},base:{base:{font:`bold 16px/20px ${t}`,textTransform:"uppercase"},expanded:{font:`bold 16px/20px ${t}`,letterSpacing:"2.5px",textTransform:"uppercase"}},large:{base:{font:`bold 18px/22px ${t}`,textTransform:"uppercase"},expanded:{font:`bold 18px/22px ${t}`,letterSpacing:"2.5px",textTransform:"uppercase"}}},he={relatedLinks:{carousel:{font:`bold 12px/12px ${t}`,"text-transform":"uppercase"}}},ye={font:`bold 18px/22px ${o}`,letterSpacing:"-0.0156em"},_e={base:`bold ${N}/18px ${t}`,medium:`bold ${h}/20px ${t}`,large:`bold 18px/22px ${t}`,xLarge:`bold 20px/24px ${t}`},Se={base:`bold 14px/16px ${t}`},ve={small:`normal 14px/18px ${t}`,base:`normal 16px/20px ${t}`,large:`normal 18px/22px ${t}`},ke={h2:`bold 24px/28px ${o}`,h3:`bold 20px/24px ${o}`,list:`bold 16px/20px ${o}`},Be={title:`bold 20px/24px ${o}`},je={base:`normal 14px/18px ${t}`},Oe={caption:`normal 14px/18px ${t}`,pagination:`italic 12px/16px ${o}`},Pe={quoteText:{mobile:`bold italic 20px/24px ${o}`,tablet:`bold italic 24px/28px ${o}`,laptop:`bold italic 28px/32px ${o}`},title:`bold 18px/22px ${t}`,citation:`normal 16px/20px ${t}`},Te={base:`bold 12px/16px ${t}`},De={base:`bold 14px/18px ${o}`},Fe={base:`bold 12px/16px ${o}`},Ie={updated:`normal 16px/20px ${t}`,action:`normal 18px/22px ${t}`,price:`bold 16px/20px ${t}`},Le=`bold ${V}/1.4 ${o}`,we={product:{name:`bold ${j}/21px ${t}`},spec:{heading:`bold 16px/20px ${t}`,value:`normal 14px/16px ${t}`},modal:{title:{base:`bold 23px/27px ${o}`,large:`bold ${y}/36px ${o}`},body:`normal ${j}/21px ${t}`},table:{font:`bold 16px/20px ${o}`}},We={small:`normal ${g}/14px ${t}`,base:`normal ${h}/20px ${t}`,large:`normal 18px/22px ${t}`,title:`bold ${O}/28px ${t}`,price:{font:`bold ${y}/36px ${o}`,letterSpacing:"-0.5px"},noPrice:{font:`bold 18px/20px ${o}`,letterSpacing:"-0.5px"},card:{xSmall:`normal 10px/14px ${t}`,small:`medium 14px/18px ${t}`,base:`bold ${h}/20px ${t}`,large:`bold ${O}/24px ${t}`,price:{font:`bold 18px/22px ${o}`,letterSpacing:"-0.0278em"}}},Ce={small:`normal ${j}/21px ${t}`,base:`normal ${I}/1.44 ${t}`},Me=s(["font:bold "," / 27px ",";"],I,t),He={mobile:{font:`bold ${y}/normal ${o}`,letterSpacing:"-0.5px"},tablet:{font:`bold ${O}/normal ${o}`,letterSpacing:"-0.5px"},laptop:{font:`bold ${y}/normal ${o}`,letterSpacing:"-0.5px"}},ze={mobile:{font:`bold 14px / 18px ${t}`,lineHeight:"18px"},tablet:{font:`bold 16px / 20px ${t}`,lineHeight:"20px"},laptop:{font:`bold 18px / 22px ${t}`,lineHeight:"22px"}},Re={mobile:{font:`bold 16px / 20px ${o}`,lineHeight:"20px"},tablet:{font:`bold 18px / 22px ${o}`,lineHeight:"22px"},laptop:{font:`bold 20px / 24px ${o}`,lineHeight:"24px"}},Ke={font:`bold 18px / 22px ${t}`,lineHeight:"22px"},Ae={base:`normal 16px/20px ${t}`,label:`bold 16px/20px ${t}`,helpText:`normal 14px/18px ${t}`,error:`normal 14px/18px ${t}`},qe={variantThree:{title:{mobile:`bold 16px/20px ${t}`,tablet:`bold 18px/22px ${t}`},subTitle:{mobile:`bold 16px/20px ${t}`,tablet:`bold 18px/22px ${t}`,laptop:`bold 20px/24px ${t}`},cardTerms:`normal 12px/16px ${t}`}},Ee={pricingDetails:{subscriptionLength:`bold 22px/26px ${o}`,normalDiscountedPricing:`bold 16px/20px ${t}`,continuedPrice:`bold 12px/16px ${t}`},radioButtonVariant:{pricingDetails:{subscriptionLength:{font:`bold 14px/18px ${t}`,letterSpacing:"2.5px"},normalDiscountedPricing:{font:`bold 24px/28px ${o}`,letterSpacing:"-0.0208em"},continuedPrice:`bold 14px/18px ${t}`}}},Ge={onboardingTitle:{font:`bold 20px/24px ${o}`,letterSpacing:"-0.025em"},onboardingBreadcrumb:`normal 10px/14px ${t}`,cardTwoStepSubBeforeReg:`bold 16px/20px ${t}`,completeYourProfileForm:{title:`bold 20px/24px ${t}`,terms:`normal 14px/18px ${t}`}},Qe={title:`bold 24px/28px ${o}`,small:`bold ${g}/16px ${t}`,base:`bold 18px/22px ${t}`,large:`bold 28px/32px ${t}`,offerLength:`bold 28px/24px ${o}`,terms:`normal 12px/16px ${t}`},Je={quoteText:{mobile:{font:`normal italic 28px/34px ${o}`},tablet:{font:`normal italic 30px/36px ${o}`},laptop:{font:`normal italic 34px/40px ${o}`}},citation:`bold 16px/20px ${t}`},Ye={text:`normal 18px/24px ${t}`,headline:`bold 30px/34px ${t}`,subheadline:`bold 18px/22px ${t}`,crosshead:{font:`bold 18px/22px ${t}`,textTransform:"uppercase"}},Ue=Object.freeze(Object.defineProperty({__proto__:null,ImageTile:Be,a:ue,blockQuote:Je,blockQuoteQuote:fe,body:ke,booking:We,button:_e,buttonGroup:Se,capsule:Te,checkbox:ve,continueReading:Me,controlImage:Le,formInput:Ae,h1:ie,h2:pe,h3:se,h4:ce,h5:xe,h6:de,headline:me,infoBox:Ye,media:Oe,p:be,premiumBadge:Fe,priceList:Ie,productCarouselCardBestFor:ze,productCarouselCardPrice:Ke,productCarouselCardTitle:Re,productComparison:we,productTitle:He,quote:Pe,recommendedLinks:ye,relatedStoriesHeadline:De,sellingPage:qe,specsList:Ce,storyCard:he,subheadline:$e,subscriberOffer:Qe,subscriptionConfirmationPage:Ge,subscriptionPricingCard:Ee,tag:ge,tooltip:je},Symbol.toStringTag,{value:"Module"})),Xe=s(["font:bold 28px/32px ",";@media ","{font:bold 30px/34px ",";}@media ","{font:bold 32px/36px ",";}"],o,D,o,F,o),Ze=s(["font:bold 24px/28px ",";@media ","{font:bold 26px/30px ",";}@media ","{font:bold 28px/32px ",";}"],o,D,o,F,o),Ve=s(["font:bold 28px/32px ",";@media ","{font:bold 30px/34px ",";}@media ","{font:bold 32px/36px ",";}"],t,D,t,F,t),Ne=s(["font:bold 24px/28px ",";@media ","{font:bold 26px/30px ",";}@media ","{font:bold 28px/32px ",";}"],t,D,t,F,t),to=s(["font:bold 16px/20px ",";text-transform:uppercase;"],t),eo=s(["font:normal 19px/27px ",";"],o),oo=s(["color:",";text-decoration:underline;&:hover{color:",";}"],({theme:e})=>e.color.actionBrand.base,({theme:e})=>e.color.actionBrand.alt),no=Object.freeze(Object.defineProperty({__proto__:null,a:oo,h2:Xe,h3:Ze,h4:Ve,h5:Ne,h6:to,p:eo},Symbol.toStringTag,{value:"Module"})),ao={...Ue},ro={...no},P="150ms",lo="ease-out",T="ease-in-out",H=`${P} ${lo}`,tt=`color ${H}`,io=`${tt}, background ${H}`,po=`max-height ${P} ${T}`,so=`opacity ${P} ${T}, height 0ms ${T} ${P}`,co=`600ms ${T}`,xo=Object.freeze(Object.defineProperty({__proto__:null,base:H,button:io,dropdown:po,link:tt,onboardingJourneyWrapper:co,readMoreTrigger:so},Symbol.toStringTag,{value:"Module"})),et=2147483647,bo=1001,uo=et-2,mo=et-3,$o=Object.freeze(Object.defineProperty({__proto__:null,header:bo,modal:uo,modalBackground:mo},Symbol.toStringTag,{value:"Module"}));function fo(e){return e!=null&&typeof e=="object"&&e["@@functional/placeholder"]===!0}x(fo,"_isPlaceholder$3");var z=fo,go=z;function ho(e){return x(function i(a){return arguments.length===0||go(a)?i:e.apply(this,arguments)},"f1")}x(ho,"_curry1$2");var ot=ho,C=ot,$=z;function yo(e){return x(function i(a,r){switch(arguments.length){case 0:return i;case 1:return $(a)?i:C(function(l){return e(a,l)});default:return $(a)&&$(r)?i:$(a)?C(function(l){return e(l,r)}):$(r)?C(function(l){return e(a,l)}):e(a,r)}},"f2")}x(yo,"_curry2$2");var nt=yo,k=ot,u=nt,p=z;function _o(e){return x(function i(a,r,l){switch(arguments.length){case 0:return i;case 1:return p(a)?i:u(function(n,c){return e(a,n,c)});case 2:return p(a)&&p(r)?i:p(a)?u(function(n,c){return e(n,r,c)}):p(r)?u(function(n,c){return e(a,n,c)}):k(function(n){return e(a,r,n)});default:return p(a)&&p(r)&&p(l)?i:p(a)&&p(r)?u(function(n,c){return e(n,c,l)}):p(a)&&p(l)?u(function(n,c){return e(n,r,c)}):p(r)&&p(l)?u(function(n,c){return e(a,n,c)}):p(a)?k(function(n){return e(n,r,l)}):p(r)?k(function(n){return e(a,n,l)}):p(l)?k(function(n){return e(a,r,n)}):e(a,r,l)}},"f3")}x(_o,"_curry3$2");var at=_o;function So(e){return Object.prototype.toString.call(e)==="[object Object]"}x(So,"_isObject$1");var vo=So;function ko(e,i){return Object.prototype.hasOwnProperty.call(i,e)}x(ko,"_has$1");var Bo=ko,jo=at,B=Bo,Oo=jo(x(function(i,a,r){var l={},n;a=a||{},r=r||{};for(n in a)B(n,a)&&(l[n]=B(n,r)?i(n,a[n],r[n]):a[n]);for(n in r)B(n,r)&&!B(n,l)&&(l[n]=r[n]);return l},"mergeWithKey")),Po=Oo,To=at,X=vo,Do=Po,Fo=To(x(function e(i,a,r){return Do(function(l,n,c){return X(n)&&X(c)?e(i,n,c):i(l,n,c)},a,r)},"mergeDeepWithKey")),Io=Fo,Lo=nt,wo=Io,Wo=Lo(x(function(i,a){return wo(function(r,l,n){return n},i,a)},"mergeDeepRight")),rt=Wo;const lt=rt,Co=Ft({__proto__:null,default:lt},[rt]),Mo=lt||Co;function Ho(e,i="base"){const a=e[i];if(!a)throw new Error(`No default theme found. Expected: ${i}. Received: ${Object.keys(e).join(", ")}.`);return Object.entries(e).filter(([r])=>r!==i).reduce((r,[l,n])=>({...r,[l]:{...Mo(a,n),name:l}}),{[i]:{...a,name:i}})}x(Ho,"buildThemes");const zo=Ho({base:{color:{...m,semiotic:Z,social:It},dimension:zt,fontFamily:Zt,fontSize:le,fontWeight:Dt,spacing:Tt,textStyle:ao,transition:xo,zIndex:$o},premium:{color:Lt},climate:{color:wt},sgi:{color:Wt},luxury:{color:Ct,textStyle:ro,dimension:Rt}}),{base:Ro,premium:Ko,climate:Ao,sgi:qo,luxury:Eo}=zo,No=Object.freeze(Object.defineProperty({__proto__:null,base:Ro,climate:Ao,luxury:Eo,premium:Ko,sgi:qo},Symbol.toStringTag,{value:"Module"}));export{Ro as b,No as t};
//# sourceMappingURL=themes-6bf9eec7.js.map
