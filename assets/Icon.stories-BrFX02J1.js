import{c as l}from"./icon-OfanrlKw.js";/* empty css             */const O={title:"Components/Icon",tags:["autodocs"],render:e=>l(e),parameters:{docs:{description:{component:["Icons visually represent actions, content types, or states.","This implementation primarily uses [Material Symbols Outlined](https://fonts.google.com/icons?icon.set=Material+Symbols+Outlined), part of Material Design 3 guidelines.","","Material Symbols are provided by Google Fonts and used under the terms of the [Material Symbols License](https://developers.google.com/fonts/docs/material_symbols).","","> **Note:** To correctly display Material Symbols, make sure you include the font in your HTML head:","","```html",'<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">',"```","","Icons support:","- Different sizes: small, default, large","- Semantic colors: primary, secondary, tertiary, error, disabled","- Optional container for circular background","","```html",'<span class="material-symbols-outlined icon">star</span>','<span class="material-symbols-outlined icon icon--primary">lock</span>','<div class="icon-container">','  <span class="material-symbols-outlined icon">notifications</span>',"</div>",'<span class="icon">⭐</span>',"```","","## ℹ️ Usage Guidelines for Icons","Icons visually support actions, content types, or UI states.","In this framework, you can use **two types of icons**:","","### 1. Material Symbols Outlined","- **Recommended** for consistency with Material Design 3.","- Automatically loads from Google Fonts.","- Supports semantic color classes (primary, secondary, error, etc.).","- Can be sized using `.icon--small`, `.icon--large`.","","```html",'<span class="material-symbols-outlined icon">star</span>',"```","","**With Container:**","","```html",'<div class="icon-container">','  <span class="material-symbols-outlined icon">notifications</span>',"</div>","```","","### 2. Custom Icons","- Use for quick fallback (e.g., ⭐, ⚡, 🔒).","- No dependency on external fonts.","- Suitable for simple demos or alternative designs.","","```html",'<span class="icon">⭐</span>',"```","","🔹 Best Practices","- Prefer **Material Symbols** for production UI.","- Use **Custom icons** only for fast prototypes.","- Always use `.icon-container` for proper spacing in buttons, chips, or badges."].join(`
`)}}},argTypes:{symbol:{control:{type:"select"},options:["star","lock","notifications","warning","⭐"],description:"Choose from predefined symbols."},size:{control:{type:"select"},options:["default","small","large"]},color:{control:{type:"select"},options:["","primary","secondary","tertiary","error","disabled"]},container:{control:"boolean"}},args:{symbol:"star",size:"default",color:"",container:!1}},s=e=>l(e);s.storyName="Live Example";s.parameters={docs:{description:{story:"Interactive icon example. Choose icon, size, color and optional container."}},options:{showPanel:!1},story:{disable:!0}};const o=()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="2rem",e.style.flexWrap="wrap",e.style.alignItems="center",[{symbol:"star",useMaterial:!0,size:"small"},{symbol:"star",useMaterial:!0},{symbol:"star",useMaterial:!0,size:"large"},{symbol:"warning",useMaterial:!0,color:"error"},{symbol:"lock",useMaterial:!0,color:"primary"},{symbol:"notifications",useMaterial:!0,container:!0},{symbol:"⭐",useMaterial:!1}].forEach(i=>{const c=l(i);e.appendChild(c)}),e};o.parameters={docs:{description:{story:"Examples of icons."}},backgrounds:{default:"soft neutral",values:[{name:"soft neutral",value:"#EDEDED"},{name:"light surface",value:"#F4F4F4"},{name:"dark gray",value:"#2E2E2E"}]}};const a={args:{symbol:"notifications",container:!0,useMaterial:!0}};a.parameters={docs:{description:{story:["**Icon inside a container** — Useful for icon buttons or floating actions.","","```html",'<div class="icon-container">','  <span class="material-symbols-outlined icon">notifications</span>',"</div>","```"].join(`
`)}}};const n={args:{symbol:"lock",color:"error",useMaterial:!0}};n.parameters={docs:{description:{story:["**Colored icon** — Change the icon color using theme tokens and state classes.","","**Available Colors and Required Classes:**","- class `.icon--primary` → color `--md-sys-color-primary`","- class `.icon--on-primary` → color `--md-sys-color-on-primary`","- class `.icon--secondary` → color `--md-sys-color-secondary`","- class `.icon--on-secondary` → color `--md-sys-color-on-secondary`","- class `.icon--tertiary` → color `--md-sys-color-tertiary`","- class `.icon--on-tertiary` → color `--md-sys-color-on-tertiary`","- class `.icon--error` → color `--md-sys-color-error`","- class `.icon--on-error` → color `--md-sys-color-on-error`","- class `.icon--disabled` → color `--md-sys-color-on-surface` with `opacity: 0.38`","","```html","<!-- Colored error icon -->",'<span class="material-symbols-outlined icon icon--error">',"  lock","</span>","","<!-- Disabled icon -->",'<span class="material-symbols-outlined icon icon--disabled">',"  lock","</span>","```"].join(`
`)}}};const r=()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="2rem",e.style.flexWrap="wrap",e.style.alignItems="center",[{symbol:"star",size:"small",useMaterial:!0},{symbol:"star",size:"default",useMaterial:!0},{symbol:"star",size:"large",useMaterial:!0}].forEach(i=>{const c=l(i);e.appendChild(c)}),e};r.storyName="Sizes";r.parameters={docs:{description:{story:["**Size Variants** — Icons can be displayed in different preset sizes.","","**Available Sizes:**","- `.icon--small` → 1.25rem","- `.icon` (default) → 1.5rem","- `.icon--large` → 2rem","","```html",'<span class="material-symbols-outlined icon icon--small">star</span>','<span class="material-symbols-outlined icon">star</span>','<span class="material-symbols-outlined icon icon--large">star</span>',"```",""].join(`
`)}}};const t={args:{symbol:"⭐",useMaterial:!1}};t.parameters={docs:{description:{story:["**Custom Icon** — Displays a custom symbol without relying on Material Symbols.","","```html",'<span class="icon">⭐</span>',"```","","**Note:**","- If you want the custom icon inside a circular background (e.g., for a button or badge), wrap it in `.icon-container`.","","**Example with container:**","","```html",'<div class="icon-container">','  <span class="icon">⭐</span>',"</div>","```"].join(`
`)}}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return createIcon(args);
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,y,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.gap = '2rem';
  wrapper.style.flexWrap = 'wrap';
  wrapper.style.alignItems = 'center';
  const examples = [{
    symbol: 'star',
    useMaterial: true,
    size: 'small'
  }, {
    symbol: 'star',
    useMaterial: true
  }, {
    symbol: 'star',
    useMaterial: true,
    size: 'large'
  }, {
    symbol: 'warning',
    useMaterial: true,
    color: 'error'
  }, {
    symbol: 'lock',
    useMaterial: true,
    color: 'primary'
  }, {
    symbol: 'notifications',
    useMaterial: true,
    container: true
  }, {
    symbol: '⭐',
    useMaterial: false
  } // Vlastní symbol
  ];
  examples.forEach(args => {
    const icon = createIcon(args);
    wrapper.appendChild(icon);
  });
  return wrapper;
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,g,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    symbol: 'notifications',
    container: true,
    useMaterial: true
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var M,w,v;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    symbol: 'lock',
    color: 'error',
    useMaterial: true
  }
}`,...(v=(w=n.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var z,I,S;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.gap = '2rem';
  wrapper.style.flexWrap = 'wrap';
  wrapper.style.alignItems = 'center';
  const sizes = [{
    symbol: 'star',
    size: 'small',
    useMaterial: true
  }, {
    symbol: 'star',
    size: 'default',
    useMaterial: true
  }, {
    symbol: 'star',
    size: 'large',
    useMaterial: true
  }];
  sizes.forEach(args => {
    const icon = createIcon(args);
    wrapper.appendChild(icon);
  });
  return wrapper;
}`,...(S=(I=r.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var C,x,E;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    symbol: '⭐',
    useMaterial: false
  }
}`,...(E=(x=t.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const U=["LiveExample","Showcase","WithContainer","Colored","SizeVariants","CustomIcon"];export{n as Colored,t as CustomIcon,s as LiveExample,o as Showcase,r as SizeVariants,a as WithContainer,U as __namedExportsOrder,O as default};
