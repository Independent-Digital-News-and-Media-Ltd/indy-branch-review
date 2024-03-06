import{j as I}from"./jsx-runtime-91e341d4.js";import{I as g,w as l}from"./Icon.hoc-1b9291aa.js";import{a as C,b as f,d as h,f as v}from"./Symbols.hoc-fb0f215f.js";import{S as E}from"./sun-cream-outline-24-385d833d.js";import"./index-b56a0300.js";import"./_commonjsHelpers-c38d1a10.js";import"./styled-components.browser.esm-dd68fb2f.js";import"./index-17b0cd16.js";import"./index-6925154b.js";const u={svg:E},j={title:"Elements/Icon",component:g,argTypes:{size:{control:"radio",options:[C,f,h,v]}}},n={args:u,parameters:{docs:{source:{code:`
          import SunCreamSVG from '#icons/sun-cream-outline-24.svg';

          return <Icon svg={SunCreamSVG} />;
        `}}}},r={args:u,parameters:{docs:{source:{code:`
          import SunCreamSVG from '#icons/sun-cream-outline-24.svg';

          const SunCreamIcon = withIcon(SunCreamSVG);

          return <SunCreamIcon size="large" />;
        `}}},render:({svg:p,size:S})=>{const d=l(p);return I.jsx(d,{size:S})}};var e,o,s;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: defaultArgs,
  parameters: {
    docs: {
      source: {
        code: \`
          import SunCreamSVG from '#icons/sun-cream-outline-24.svg';

          return <Icon svg={SunCreamSVG} />;
        \`
      }
    }
  }
}`,...(s=(o=n.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var t,a,c,m,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: defaultArgs,
  parameters: {
    docs: {
      source: {
        code: \`
          import SunCreamSVG from '#icons/sun-cream-outline-24.svg';

          const SunCreamIcon = withIcon(SunCreamSVG);

          return <SunCreamIcon size="large" />;
        \`
      }
    }
  },
  render: ({
    svg,
    size
  }) => {
    const SunCreamIcon = withIcon(svg);
    return <SunCreamIcon size={size} />;
  }
}`,...(c=(a=r.parameters)==null?void 0:a.docs)==null?void 0:c.source},description:{story:"There is also a higher-order component (HOC) for use with the Icon component",...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.description}}};const O=["Default","WithIcon"];export{n as Default,r as WithIcon,O as __namedExportsOrder,j as default};
//# sourceMappingURL=Icon.stories-b451c54c.js.map
