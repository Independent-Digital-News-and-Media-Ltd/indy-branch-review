var y=Object.defineProperty;var r=(o,t)=>y(o,"name",{value:t,configurable:!0});import{u as a}from"./styled-components.browser.esm-dd68fb2f.js";import{I as z}from"./Icon.hoc-787425e7.js";const d=10,n=12,f=10,m=12,s="above",g="below",c="open";function _(o,t){return o?t===s?`${c} ${s}`:`${c} ${g}`:""}r(_,"calculateTriggerClass");const $=r((o,t,v,w)=>{const R=o.top,T=o.right,I=o.left,O=o.width,h=o.height,B=t.width,x=t.height;let p,l;const e=(B-O)/2,b=I-d,u=v-d-T;let i=e;e>b&&(i=b),e>u&&(i=i+(e-u));const W=w-R-d;return h+n+x>W?(l=s,p=-1*(x+n)):(l=g,p=h+n),[-1*i,p,l]},"calculatePosition"),A={top:0,bottom:0,left:0,right:0,width:0,height:0};function G(o){return o.current!==null?o.current.getBoundingClientRect():A}r(G,"getBB");const N=a(z).withConfig({componentId:"sc-1c81gi0-0"})([""]),P=a.div.withConfig({componentId:"sc-1c81gi0-1"})(["position:relative;--tooltip-color:",";"],({theme:o})=>o.color.dark.canvas.card),S=a.div.withConfig({componentId:"sc-1c81gi0-2"})(["--size:","px;display:flex;position:relative;width:var(--size);height:var(--size);align-items:center;justify-content:space-around;cursor:pointer;&::after{position:absolute;top:50%;left:50%;width:",";height:",";background:transparent;content:'';transform:translate(-50%,-50%);}&::before{position:absolute;left:50%;z-index:101;box-sizing:border-box;border-right:solid ","px transparent;border-left:solid ","px transparent;content:none;transform:translateX(-50%);}&.",",&:hover{color:",";}&.","::before{content:'';}&.","::before{top:calc(100% + ","px - ","px);border-top:solid 0 transparent;border-bottom:solid ","px var(--tooltip-color);}&.","::before{top:-","px;border-top:solid ","px var(--tooltip-color);border-bottom:solid 0 transparent;}"],({theme:o,$size:t})=>o.dimension.icon[t].width,({theme:o})=>o.dimension.minTouchArea,({theme:o})=>o.dimension.minTouchArea,m,m,c,({theme:o})=>o.color.actionBlack.alt,c,g,n,f,f+1,s,n,f),D=a.div.withConfig({componentId:"sc-1c81gi0-3"})(["position:absolute;z-index:100;width:160px;max-width:50vw;box-sizing:border-box;padding:","px;border-radius:6px;background-color:var(--tooltip-color);box-shadow:1px 2px 4px 0px ",";color:",";font:normal 14px / 18px ",";"],({theme:o})=>o.spacing.x1,({theme:o})=>o.color.veil.base,({theme:o})=>o.color.ink.inverted,({theme:o})=>o.fontFamily.secondaryFont);export{D as B,N as S,S as T,P as W,_ as a,$ as c,G as g};
//# sourceMappingURL=PopupTip.styles-270279cc.js.map
