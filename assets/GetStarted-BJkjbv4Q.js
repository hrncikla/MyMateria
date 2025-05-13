import{j as e,M as t}from"./index-DbCDgWtb.js";import{useMDXComponents as i}from"./index-D-I21nru.js";import"./iframe-CdrcB45h.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function s(r){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Get Started"}),`
`,e.jsx(n.h1,{id:"get-started-with-my-materia",children:"Get Started with My Materia"}),`
`,e.jsxs(n.p,{children:["Materia is a modern CSS/SCSS framework inspired by Material Design 3.",e.jsx(n.br,{}),`
`,"Here’s a quick guide to start using it in your project."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"1-installation-options",children:"1. Installation options"}),`
`,e.jsx(n.p,{children:"You can use My Materia in three ways depending on your setup:"}),`
`,e.jsx(n.h3,{id:"a-include-raw-css-quickest",children:"a) Include raw CSS (quickest)"}),`
`,e.jsx(n.p,{children:"Simply copy the built CSS into your project and include it in your HTML:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link rel="stylesheet" href="/css/materia.min.css" />
`})}),`
`,e.jsx(n.h3,{id:"b-use-scss-recommended-for-customization",children:"b) Use SCSS (recommended for customization)"}),`
`,e.jsxs(n.p,{children:["Clone or copy the ",e.jsx(n.code,{children:"materia/"})," folder into your project structure:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`src/\r
 ├── scss/\r
 │    ├── materia/\r
 │    │    ├── tokens/\r
 │    │    ├── mixins/\r
 │    │    ├── layout/\r
 │    │    ├── components/\r
 │    │    └── base/\r
 │    └── main.scss
`})}),`
`,e.jsx(n.p,{children:"Then import it in your main SCSS file:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`@use "materia/base";\r
@use "materia/tokens" as tokens;\r
@use "materia/components/button";
`})}),`
`,e.jsx(n.p,{children:"You can override tokens or mixins before importing components."}),`
`,e.jsx(n.h3,{id:"c-integrate-with-storybook--javascript-for-interactive-components",children:"c) Integrate with Storybook + JavaScript (for interactive components)"}),`
`,e.jsx(n.p,{children:"If you're using Storybook to document or prototype, you can:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Include the SCSS entry point in ",e.jsx(n.code,{children:".storybook/preview.js"})," (or via Vite/webpack config)."]}),`
`,e.jsx(n.li,{children:"Add JavaScript enhancements (like ripple effects or floating labels) by importing:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { initMateria } from "../js/materia.js";\r
initMateria();
`})}),`
`,e.jsx(n.p,{children:"You can also document your components with Materia styling directly inside your MDX stories."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"2-customize-tokens",children:"2. Customize tokens"}),`
`,e.jsxs(n.p,{children:["To adapt Materia to your brand, edit files in ",e.jsx(n.code,{children:"materia/tokens/"}),".",e.jsx(n.br,{}),`
`,"These include colors, typography, radius, spacing, etc."]}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$md-sys-color-primary: #7e57c2;\r
$md-sys-shape-corner-medium: 12px;
`})}),`
`,e.jsx(n.hr,{})]})}function h(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{h as default};
