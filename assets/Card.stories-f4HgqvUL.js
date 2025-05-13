import"./index-BB-DdCfE.js";import{c as A}from"./icon-OfanrlKw.js";import{c as W}from"./button-C2MzJa24.js";import{c as h}from"./storybook-helpers-CD2gtCTp.js";/* empty css             */const o=({variant:e="",media:r=!1,icon:i="",title:l="Card title",subtitle:n="",content:_="Lorem ipsum dolor sit amet, consectetur adipiscing elit.",actions:C=[]})=>{const d=document.createElement("div");if(d.classList.add("card"),e&&d.classList.add(`card--${e}`),r){const t=document.createElement("div");t.className="card__media",t.style.backgroundColor="var(--md-sys-color-primary-container)",t.style.height="200px",t.style.display="flex",t.style.alignItems="center",t.style.justifyContent="center",t.style.color="var(--md-sys-color-on-primary-container)",t.textContent="Media",d.appendChild(t)}if(i||l||n){const t=document.createElement("div");if(t.className="card__header",i){const a=A({symbol:i,useMaterial:!0,size:"default"});a.classList.add("card__icon"),t.appendChild(a)}const s=document.createElement("div");if(s.className="card__header-text",l){const a=document.createElement("div");a.className="card__header-title",a.textContent=l,s.appendChild(a)}if(n){const a=document.createElement("div");a.className="card__header-subtitle",a.textContent=n,s.appendChild(a)}t.appendChild(s),d.appendChild(t)}if(_){const t=document.createElement("div");t.className="card__content",t.textContent=_,d.appendChild(t)}if(C.length>0){const t=document.createElement("div");t.className="card__actions",C.forEach(({label:s,onClick:a=()=>{}})=>{const T=W({label:s,variant:"text",onClick:a});t.appendChild(T)}),d.appendChild(t)}return d},D={title:"Components/Card",tags:["autodocs"],render:e=>o(e),parameters:{docs:{description:{component:["Cards are flexible containers for content and actions, following Material Design 3 guidelines.","","**Key Features:**","- Headers with title, subtitle, and optional icons","- Media support (images, videos)","- Action buttons","- Filled, outlined, and elevated variants","","**Available Classes:**","- `.card` – base card component","- `.card--filled` – filled variant with primary container background","- `.card--outlined` – border-only card without shadow","- `.card__media` – image or media block","- `.card__header` – container for icons, titles, and subtitles","- `.card__icon` – circular icon or avatar","- `.card__header-title` – primary heading","- `.card__header-subtitle` – secondary text","- `.card__content` – main body text area","- `.card__actions` – container for action buttons","","**HTML Example:**","","```html",'<div class="card card--filled">','  <div class="card__header">','    <div class="card__icon">','      <span class="material-symbols-outlined">folder</span>',"    </div>",'    <div class="card__header-text">','      <div class="card__header-title">Card Title</div>','      <div class="card__header-subtitle">Card Subtitle</div>',"    </div>","  </div>",'  <div class="card__content">',"    Lorem ipsum dolor sit amet, consectetur adipiscing elit.","  </div>",'  <div class="card__actions">','    <button class="button button--text">Action</button>',"  </div>","</div>","```"].join(`
`)}}},argTypes:{variant:{control:{type:"select"},options:["","filled","outlined"]},icon:{control:{type:"select"},options:["","shopping_bag","image","favorite","person","folder"]},title:{control:"text"},subtitle:{control:"text"},content:{control:"text"},media:{control:"boolean"}},args:{variant:"",icon:"",title:"Card Title",subtitle:"Card Subtitle",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",media:!1}},c=e=>{const r=h(),i=o(e);return r.appendChild(i),r};c.storyName="Live Example";c.parameters={docs:{description:{story:`**Interactive card** with live controls for title, subtitle, icon, and more.

\`\`\`html
<div class="card card--filled">
  <div class="card__header">
    <div class="card__icon">
      <span class="material-symbols-outlined">folder</span>
    </div>
    <div class="card__header-text">
      <div class="card__header-title">Card Title</div>
      <div class="card__header-subtitle">Card Subtitle</div>
    </div>
  </div>
  <div class="card__content">Lorem ipsum dolor sit amet.</div>
</div>
\`\`\``}}};const p=()=>{const e=h();return e.style.display="grid",e.style.gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))",e.style.gap="1.5rem",e.style.padding="1.5rem",[{title:"Basic Card",content:"This is a default elevated card with title and content only."},{variant:"outlined",title:"Outlined Card",subtitle:"No shadow, just a border",content:"Outlined cards emphasize structure."},{variant:"filled",title:"Filled Card",subtitle:"Surface-variant background",content:"Filled cards offer more color contrast."},{mediaSrc:"https://via.placeholder.com/400x200",title:"Card with Media",content:"A card featuring a top image."},{icon:"folder",title:"Card with Icon",subtitle:"Visual identity with `.card__icon`",content:"Icons help represent the card's purpose."}].forEach(i=>{var n;const l=o({...i,actions:((n=i.actions)==null?void 0:n.map(({label:_,onClick:C})=>({label:_,onClick:C})))||[]});e.appendChild(l)}),e};p.parameters={docs:{description:{story:`**Showcase of multiple card configurations**: filled, outlined, with media, icons, and actions.
`}}};const m=()=>{const e=h(),r=o({variant:"filled",title:"Filled Card",subtitle:"Surface-variant background",content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit."});return e.appendChild(r),e};m.parameters={docs:{description:{story:["A card styled with the `filled` variant using `.card--filled`, providing a surface-variant background.","","```html",'<div class="card card--filled">','  <div class="card__header">','    <div class="card__header-text">','      <div class="card__header-title">Filled Card</div>','      <div class="card__header-subtitle">Surface-variant background</div>',"    </div>","  </div>",'  <div class="card__content">',"     Lorem ipsum dolor sit amet, consectetur adipiscing elit.","  </div>","</div>","```"].join(`
`)}}};const u=()=>{const e=h(),r=o({variant:"outlined",title:"Outlined Card",subtitle:"No shadow, just border",content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit."});return e.appendChild(r),e};u.parameters={docs:{description:{story:["A card using the `outlined` variant with `.card--outlined` class to show a border and no elevation.","","```html",'<div class="card card--outlined">','  <div class="card__header">','    <div class="card__header-text">','      <div class="card__header-title">Outlined Card</div>','      <div class="card__header-subtitle">No shadow, just border</div>',"    </div>","  </div>",'  <div class="card__content">',"     Lorem ipsum dolor sit amet, consectetur adipiscing elit.","  </div>","</div>","```"].join(`
`)}}};const v=()=>{const e=h(),r=o({media:!0,title:"Card with Media",subtitle:"Media above content",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."});return e.appendChild(r),e};v.parameters={docs:{description:{story:["A card that includes a media section using the `.card__media` class.","","```html",'<div class="card">','  <div class="card__media">Media</div>','  <div class="card__header">','    <div class="card__header-text">','      <div class="card__header-title">Card with Media</div>','      <div class="card__header-subtitle">Media above content</div>',"    </div>","  </div>",'  <div class="card__content">',"    Lorem ipsum dolor sit amet, consectetur adipiscing elit.","  </div>","</div>","```"].join(`
`)}}};var f,b,g;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const wrapper = createStoryWrapper();
  const card = createCard(args);
  wrapper.appendChild(card);
  return wrapper;
}`,...(g=(b=c.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var w,y,x;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const wrapper = createStoryWrapper();
  wrapper.style.display = 'grid';
  wrapper.style.gridTemplateColumns = 'repeat(auto-fit, minmax(280px, 1fr))';
  wrapper.style.gap = '1.5rem';
  wrapper.style.padding = '1.5rem';
  const examples = [{
    title: 'Basic Card',
    content: 'This is a default elevated card with title and content only.'
  }, {
    variant: 'outlined',
    title: 'Outlined Card',
    subtitle: 'No shadow, just a border',
    content: 'Outlined cards emphasize structure.'
  }, {
    variant: 'filled',
    title: 'Filled Card',
    subtitle: 'Surface-variant background',
    content: 'Filled cards offer more color contrast.'
  }, {
    mediaSrc: 'https://via.placeholder.com/400x200',
    title: 'Card with Media',
    content: 'A card featuring a top image.'
  }, {
    icon: 'folder',
    title: 'Card with Icon',
    subtitle: 'Visual identity with \`.card__icon\`',
    content: 'Icons help represent the card\\'s purpose.'
  }];
  examples.forEach(args => {
    const card = createCard({
      ...args,
      actions: args.actions?.map(({
        label,
        onClick
      }) => ({
        label,
        onClick
      })) || []
    });
    wrapper.appendChild(card);
  });
  return wrapper;
}`,...(x=(y=p.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var S,E,L;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const wrapper = createStoryWrapper();
  const card = createCard({
    variant: 'filled',
    title: 'Filled Card',
    subtitle: 'Surface-variant background',
    content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  });
  wrapper.appendChild(card);
  return wrapper;
}`,...(L=(E=m.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var M,N,k;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const wrapper = createStoryWrapper();
  const card = createCard({
    variant: 'outlined',
    title: 'Outlined Card',
    subtitle: 'No shadow, just border',
    content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  });
  wrapper.appendChild(card);
  return wrapper;
}`,...(k=(N=u.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var F,j,O;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const wrapper = createStoryWrapper();
  const card = createCard({
    media: true,
    title: 'Card with Media',
    subtitle: 'Media above content',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  });
  wrapper.appendChild(card);
  return wrapper;
}`,...(O=(j=v.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};const K=["LiveExample","Showcase","Filled","Outlined","WithMedia"];export{m as Filled,c as LiveExample,u as Outlined,p as Showcase,v as WithMedia,K as __namedExportsOrder,D as default};
