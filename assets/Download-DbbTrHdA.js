import{j as n,M as o}from"./index-DbCDgWtb.js";import{useMDXComponents as s}from"./index-D-I21nru.js";import"./iframe-CdrcB45h.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function i(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Download & Setup"}),`
`,n.jsx(e.h1,{id:"download--setup",children:"Download & Setup"}),`
`,n.jsx(e.p,{children:"You can get started with My Materia by downloading the source files manually or by cloning the repo."}),`
`,n.jsx(e.h2,{id:"1-download-options",children:"1. Download options"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Download ZIP"}),": ",n.jsx(e.a,{href:"https://example.com/materia.zip",rel:"nofollow",children:"Download latest release"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Clone via Git"}),":"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`git clone https://github.com/your-org/my-materia.git
`})}),`
`,n.jsxs(e.p,{children:["Then copy the ",n.jsx(e.code,{children:"/materia"})," folder (or ",n.jsx(e.code,{children:"scss/materia"}),") into your project."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"2-vite-scss-setup-optional",children:"2. Vite SCSS setup (optional)"}),`
`,n.jsxs(e.p,{children:["If you're using Vite, you can auto-import variables and mixins in all components by configuring ",n.jsx(e.code,{children:"vite.config.js"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// vite.config.js\r
import { defineConfig } from 'vite';\r
import path from 'path';\r
\r
export default defineConfig({\r
  css: {\r
    preprocessorOptions: {\r
      scss: {\r
        additionalData: \`@use "@/scss/materia/tokens" as *;\`\r
      }\r
    }\r
  },\r
  resolve: {\r
    alias: {\r
      '@': path.resolve(__dirname, './src'),\r
    }\r
  }\r
});
`})}),`
`,n.jsxs(e.p,{children:["This automatically injects your tokens into all ",n.jsx(e.code,{children:".scss"})," files, so you don't have to manually import them everywhere."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"3-tip",children:"3. Tip"}),`
`,n.jsx(e.p,{children:"You can combine the SCSS setup with JavaScript init for interactivity:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { initMateria } from "../js/materia.js";\r
initMateria();
`})}),`
`,n.jsx(e.p,{children:"Useful for ripple effects, animated inputs, etc."})]})}function h(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{h as default};
