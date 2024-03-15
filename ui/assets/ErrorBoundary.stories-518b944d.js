var i=Object.defineProperty;var f=(e,o,n)=>o in e?i(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n;var t=(e,o)=>i(e,"name",{value:o,configurable:!0});var m=(e,o,n)=>(f(e,typeof o!="symbol"?o+"":o,n),n);import{j as r}from"./jsx-runtime-91e341d4.js";import{r as w}from"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";class c extends w.Component{constructor(){super(...arguments);m(this,"state",{hasError:!1})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(n,S){console.error(n,S.componentStack)}render(){return this.state.hasError?r.jsx(r.Fragment,{children:"There was an error rendering this component"}):this.props.children}}t(c,"ErrorBoundary");const d=c;try{c.displayName="ErrorBoundary",c.__docgenInfo={description:"",displayName:"ErrorBoundary",props:{}}}catch{}const v={title:"Elements/Error Boundary",component:d,decorators:[e=>r.jsx("div",{style:{paddingLeft:"50px"},children:r.jsx(e,{})})]},_=t(()=>{throw new Error("Something went horribly wrong!")},"ExceptionThrowingComponent"),C=t(()=>r.jsx(r.Fragment,{children:"Happy component"}),"HappyComponent"),s={render:()=>r.jsx(d,{children:r.jsx(_,{})})},a={render:()=>r.jsx(d,{children:r.jsx(C,{})})},p={render:()=>r.jsx(d,{children:r.jsx(_,{})})};var u,y,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <ErrorBoundary>
      <ExceptionThrowingComponent />
    </ErrorBoundary>
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var l,E,x;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <ErrorBoundary>
      <HappyComponent />
    </ErrorBoundary>
}`,...(x=(E=a.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var g,j,B;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <ErrorBoundary>
      <ExceptionThrowingComponent />
    </ErrorBoundary>
}`,...(B=(j=p.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const N=["Default","HappyStory","UnhappyStory"];export{s as Default,a as HappyStory,p as UnhappyStory,N as __namedExportsOrder,v as default};
//# sourceMappingURL=ErrorBoundary.stories-518b944d.js.map
