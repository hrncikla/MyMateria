import{j as e,M as o}from"./index-1XxwKQxj.js";import{useMDXComponents as r}from"./index-CNorC1eZ.js";import"./iframe-CFCxgPGT.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Recommendations"}),`
`,e.jsx(n.h1,{id:"recommendations",children:"Recommendations"}),`
`,e.jsx(n.p,{children:"Here are some best practices and suggestions for working with My Materia framework."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"1-use-scss-for-full-flexibility",children:"1. Use SCSS for full flexibility"}),`
`,e.jsx(n.p,{children:"While you can use precompiled CSS, SCSS gives you access to:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Design tokens (colors, spacing, typography)"}),`
`,e.jsx(n.li,{children:"Customizable mixins"}),`
`,e.jsx(n.li,{children:"Per-component configuration"}),`
`]}),`
`,e.jsxs(n.p,{children:["We recommend setting up SCSS with ",e.jsx(n.code,{children:"@use"})," and defining your own override tokens before importing components."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"2-structure-your-scss-by-features",children:"2. Structure your SCSS by features"}),`
`,e.jsx(n.p,{children:"Keep your styles modular. Example structure:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`scss/\r
 ├── tokens/        # Design tokens (colors, spacing, typography)\r
 ├── mixins/        # Reusable SCSS mixins (e.g. palette, typography)\r
 ├── layout/        # Flex/grid utilities and spacing helpers\r
 ├── components/    # Styles for buttons, cards, inputs, etc.\r
 └── base/          # Reset, global element styles, and typography
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"3-stick-to-material-design-3-guidelines",children:"3. Stick to Material Design 3 guidelines"}),`
`,e.jsxs(n.p,{children:[`My Materia follows MD3 principles.\r
For consistency, refer to `,e.jsx(n.a,{href:"https://m3.material.io/",rel:"nofollow",children:"Material Design 3"})," when making design decisions."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"4-use-design-tokens-consistently",children:"4. Use design tokens consistently"}),`
`,e.jsxs(n.p,{children:["Avoid hardcoding values like ",e.jsx(n.code,{children:"#ccc"})," or ",e.jsx(n.code,{children:"12px"}),`.\r
Instead, use system tokens:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`color: var(--md-sys-color-outline);\r
padding: var(--md-sys-spacing-medium);
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"5-document-your-design-decisions",children:"5. Document your design decisions"}),`
`,e.jsx(n.p,{children:"If you're building on top of Materia, keep track of your:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Token overrides"}),`
`,e.jsx(n.li,{children:"Custom mixins or layout rules"}),`
`,e.jsx(n.li,{children:"Accessibility decisions"}),`
`]}),`
`,e.jsx(n.p,{children:"This helps future devs (or your future self) understand and reuse your setup."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"6-dont-override-components-directly",children:"6. Don't override components directly"}),`
`,e.jsx(n.p,{children:"Prefer to:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Adjust via tokens"}),`
`,e.jsx(n.li,{children:"Extend using your own wrapper classes"}),`
`,e.jsx(n.li,{children:"Avoid editing base component files directly"}),`
`]}),`
`,e.jsx(n.p,{children:"This makes upgrades and refactoring much easier."})]})}function h(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{h as default};
