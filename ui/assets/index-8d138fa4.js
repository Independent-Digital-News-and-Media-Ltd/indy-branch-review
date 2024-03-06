var u=Object.defineProperty;var o=(n,i)=>u(n,"name",{value:i,configurable:!0});var f={},p={get exports(){return f},set exports(n){f=n}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(n){(function(){var i={}.hasOwnProperty;function s(){for(var t="",r=0;r<arguments.length;r++){var e=arguments[r];e&&(t=c(t,a(e)))}return t}o(s,"classNames");function a(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return s.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var r="";for(var e in t)i.call(t,e)&&t[e]&&(r=c(r,e));return r}o(a,"parseValue");function c(t,r){return r?t?t+" "+r:t+r:t}o(c,"appendClass"),n.exports?(s.default=s,n.exports=s):window.classNames=s})()})(p);const m=f;export{m as c};
//# sourceMappingURL=index-8d138fa4.js.map
