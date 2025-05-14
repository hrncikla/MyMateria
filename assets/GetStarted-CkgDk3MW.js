import{j as s,M as t}from"./index-1XxwKQxj.js";import{useMDXComponents as o}from"./index-CNorC1eZ.js";import"./iframe-CFCxgPGT.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function r(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(t,{title:"Get Started"}),`
`,s.jsx(n.h1,{id:"get-started",children:"Get Started"}),`
`,s.jsx(n.p,{children:"You can use My Materia in two main ways:"}),`
`,s.jsx(n.h3,{id:"a-include-raw-css-quickest",children:"a) Include raw CSS (quickest)"}),`
`,s.jsx(n.p,{children:"Simply copy the built CSS into your project and include it in your HTML:"}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-html",children:`<link rel="stylesheet" href="/css/materia.min.css" />
`})}),`
`,s.jsx(n.h3,{id:"b-use-scss-recommended-for-customization",children:"b) Use SCSS (recommended for customization)"}),`
`,s.jsx(n.p,{children:"You have two main options, depending on how much control you want over your project structure:"}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"Option 1: Full Material Folder"}),s.jsx(n.br,{}),`
`,"For full integration with Storybook and all components, clone or copy the entire ",s.jsx(n.code,{children:"materia/"})," folder:"]}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-bash",children:`CSS-Materia/\r
├── .storybook/      \r
├── build/           \r
├── public/                    \r
├── src/\r
│  └── ...\r
│  └── scss/\r
│     └── main.scss\r
├── ...
`})}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"Option 2: Just SCSS Folder"}),s.jsx(n.br,{}),`
`,"If you only need the core styles, you can copy just the ",s.jsx(n.code,{children:"scss/"})," directory:"]}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-bash",children:`src/\r
 ├── scss/\r
 │    ├── tokens/\r
 │    ├── mixins/\r
 │    ├── layout/\r
 │    ├── components/\r
 │    └── base/\r
 │    └── main.scss
`})}),`
`,s.jsx(n.p,{children:"Then import it in your main SCSS file:"}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-scss",children:`@use "materia/base";\r
@use "materia/tokens" as tokens;\r
@use "materia/components/button";
`})}),`
`,s.jsx(n.p,{children:"You can override tokens or mixins before importing components."}),`
`,s.jsx(n.h2,{id:"3-customize-tokens",children:"3. Customize Tokens"}),`
`,s.jsxs(n.p,{children:["To adapt Materia to your brand, edit file ",s.jsx(n.code,{children:"src/scss/tokens/user-tokens.scss"}),".",s.jsx(n.br,{}),`
`,"It includes colors, typography, radius, spacing, etc."]}),`
`,s.jsx(n.h2,{id:"4-build--storybook",children:"4. Build & Storybook"}),`
`,s.jsxs(n.p,{children:["Before you can start Storybook, you ",s.jsx(n.strong,{children:"must"})," build your CSS. Use the following scripts from your ",s.jsx(n.code,{children:"package.json"}),":"]}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-json",children:`"scripts": {\r
  "storybook": "npm run build:css && storybook dev -p 6006",\r
  "build-storybook": "storybook build",\r
  "build:css": "sass src/scss/main.scss build/css/materia.min.css --style compressed --no-source-map",\r
  "watch:css": "sass --watch src/scss:build/css"\r
}
`})}),`
`,s.jsx(n.h3,{id:"important",children:"Important:"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Build CSS first"}),": Run ",s.jsx(n.code,{children:"npm run build:css"})," before starting Storybook."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Rebuild after changes"}),": Run ",s.jsx(n.code,{children:"npm run build:css"})," again whenever you update your SCSS files to reflect changes in Storybook."]}),`
`]}),`
`,s.jsx(n.hr,{})]})}function u(e={}){const{wrapper:n}={...o(),...e.components};return n?s.jsx(n,{...e,children:s.jsx(r,{...e})}):r(e)}export{u as default};
