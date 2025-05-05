import"./index-BB-DdCfE.js";import{c as W}from"./button-ronwA5hn.js";import{c as b}from"./icon-BkT0aKZH.js";/* empty css             */const q={title:"Components/Button",tags:["autodocs"],render:t=>W(t),parameters:{docs:{description:{component:["Buttons allow users to take actions and make choices with a single tap.","Follows [Material Design 3](https://m3.material.io/components/buttons) guidelines.","","### Button Variants","- **Filled** – Primary action emphasis.","- **Tonal** – Secondary option with softer emphasis.","- **Elevated** – Subtle background shadow for medium emphasis.","- **Outlined** – No fill, border only, for lower emphasis.","- **Text** – Bare button, for inline or toolbar actions.","- **Icon** – Only icon, no label (compact)."].join(`
`)}}},argTypes:{label:{control:"text"},variant:{control:{type:"select"},options:["filled","tonal","elevated","outlined","text","icon"]},size:{control:{type:"select"},options:["small","medium","large"]},icon:{control:"boolean"},disabled:{control:"boolean"}},args:{label:"Tlačítko",variant:"filled",size:"medium",icon:!1,disabled:!1}},a=t=>W(t);a.storyName="Live Example";a.parameters={docs:{description:{story:"Fully interactive button example. You can modify label, icon, color, variant."}}};const s=()=>{const t=document.createElement("div");return t.style.display="flex",t.style.gap="1rem",t.style.flexWrap="wrap",t.style.alignItems="center",["filled","tonal","elevated","outlined","text","icon"].forEach(e=>{const n=document.createElement("button");if(n.className=`button button--${e}`,e==="icon"){const o=b({symbol:"favorite",useMaterial:!0});n.appendChild(o)}else n.textContent=e.charAt(0).toUpperCase()+e.slice(1);t.appendChild(n)}),t};s.parameters={docs:{description:{story:"Visual overview of button types (filled, tonal, elevated, outlined, text, icon)."}},backgrounds:{default:"soft neutral",values:[{name:"soft neutral",value:"#EDEDED"},{name:"light surface",value:"#F4F4F4"},{name:"dark gray",value:"#2E2E2E"}]}};const r={args:{variant:"filled"}};r.parameters={docs:{description:{story:'\n**Filled button** – used for primary actions.\n\n```html\n<button class="button button--filled">Tlačítko</button>\n```\n      '}}};const i={args:{variant:"tonal"}};i.parameters={docs:{description:{story:'\n**Tonal button** – secondary alternative to filled.\n\n```html\n<button class="button button--tonal">Tlačítko</button>\n```\n      '}}};const l={args:{variant:"elevated"}};l.parameters={docs:{description:{story:'\n**Elevated button** – medium emphasis button on low-contrast backgrounds.\n\n```html\n<button class="button button--elevated">Tlačítko</button>\n```\n      '}}};const c={args:{variant:"outlined"}};c.parameters={docs:{description:{story:'\n**Outlined button** – secondary low emphasis action.\n\n```html\n<button class="button button--outlined">Tlačítko</button>\n```\n      '}}};const d={args:{variant:"text"}};d.parameters={docs:{description:{story:'\n**Text button** – minimal emphasis, often inline or in toolbars.\n\n```html\n<button class="button button--text">Tlačítko</button>\n```\n      '}}};const u=()=>{const t=document.createElement("div");t.style.display="flex",t.style.gap="2rem",t.style.alignItems="center";const p=document.createElement("button");p.className="button button--icon";const e=b({symbol:"star",useMaterial:!0});p.appendChild(e);const n=document.createElement("button");n.className="button button--filled";const o=b({symbol:"search",useMaterial:!0});o.classList.add("icon--leading"),o.classList.add("icon--on-primary"),n.appendChild(o),n.appendChild(document.createTextNode("Search"));const m=document.createElement("button");m.className="button button--filled",m.appendChild(document.createTextNode("Upload"));const g=b({symbol:"upload",useMaterial:!0});return g.classList.add("icon--trailing"),g.classList.add("icon--on-primary"),m.appendChild(g),t.appendChild(p),t.appendChild(n),t.appendChild(m),t};u.parameters={docs:{description:{story:`
**Icon Button** – compact button using only an icon, or icon with label (leading/trailing).

\`\`\`html
<button class="button button--icon">
  <span class="material-symbols-outlined icon">star</span>
</button>
<button class="button button--filled">
  <span class="material-symbols-outlined icon icon--leading icon--on-primary">search</span>
  Search
</button>
<button class="button button--filled">
  Upload
  <span class="material-symbols-outlined icon icon--trailing icon--on-primary">upload</span>
</button>
\`\`\`
      `}}};var y,h,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return createButton(args);
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,x,E;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '1rem';
  container.style.flexWrap = 'wrap';
  container.style.alignItems = 'center';
  const variants = ['filled', 'tonal', 'elevated', 'outlined', 'text', 'icon'];
  variants.forEach(variant => {
    const button = document.createElement('button');
    button.className = \`button button--\${variant}\`;
    if (variant === 'icon') {
      const icon = createIcon({
        symbol: 'favorite',
        useMaterial: true
      });
      button.appendChild(icon);
    } else {
      button.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
    }
    container.appendChild(button);
  });
  return container;
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var C,T,S;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'filled'
  }
}`,...(S=(T=r.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var L,w,N;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'tonal'
  }
}`,...(N=(w=i.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var I,k,F;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'elevated'
  }
}`,...(F=(k=l.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var M,B,O;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'outlined'
  }
}`,...(O=(B=c.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var U,D,_;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'text'
  }
}`,...(_=(D=d.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var z,A,V;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '2rem';
  container.style.alignItems = 'center';

  // Standalone icon button
  const standalone = document.createElement('button');
  standalone.className = 'button button--icon';
  const iconStandalone = createIcon({
    symbol: 'star',
    useMaterial: true
  });
  standalone.appendChild(iconStandalone);

  // Leading icon button
  const leading = document.createElement('button');
  leading.className = 'button button--filled';
  const iconLeading = createIcon({
    symbol: 'search',
    useMaterial: true
  });
  iconLeading.classList.add('icon--leading');
  iconLeading.classList.add('icon--on-primary');
  leading.appendChild(iconLeading);
  leading.appendChild(document.createTextNode('Search'));

  // Trailing icon button
  const trailing = document.createElement('button');
  trailing.className = 'button button--filled';
  trailing.appendChild(document.createTextNode('Upload'));
  const iconTrailing = createIcon({
    symbol: 'upload',
    useMaterial: true
  });
  iconTrailing.classList.add('icon--trailing');
  iconTrailing.classList.add('icon--on-primary');
  trailing.appendChild(iconTrailing);
  container.appendChild(standalone);
  container.appendChild(leading);
  container.appendChild(trailing);
  return container;
}`,...(V=(A=u.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};const G=["LiveExample","Showcase","Filled","Tonal","Elevated","Outlined","Text","Icon"];export{l as Elevated,r as Filled,u as Icon,a as LiveExample,c as Outlined,s as Showcase,d as Text,i as Tonal,G as __namedExportsOrder,q as default};
