var s=Object.defineProperty;var a=(t,r)=>s(t,"name",{value:r,configurable:!0});import{a as e}from"./styled-components.browser.esm-dd68fb2f.js";function o(t){return typeof t=="string"&&t.startsWith("--")?`var(${t})`:t}a(o,"sanitiseCssVar");function l(t=3,r="1em",i=!0){const n=i===!0?`calc(${o(t)} * ${o(r)});`:typeof i=="string"&&i.startsWith("--")?`var(${i})`:"auto";return e(["display:-webkit-box;overflow:hidden;height:",";-webkit-box-orient:vertical;-webkit-line-clamp:",";text-overflow:initial;white-space:initial;"],n,o(t))}a(l,"clampLines");export{l as c};
//# sourceMappingURL=clampLines-1aa52b19.js.map