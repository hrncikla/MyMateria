import{f as C}from"./index-BB-DdCfE.js";/* empty css             */import{c as I}from"./icon-BkT0aKZH.js";import{c as W}from"./button-ronwA5hn.js";import{c as v}from"./storybook-helpers-CD2gtCTp.js";const o=({variant:e="",mediaSrc:t="",icon:n="",title:l="Card title",subtitle:c="",content:_="Lorem ipsum dolor sit amet, consectetur adipiscing elit.",actions:f=[]})=>{const i=document.createElement("div");if(i.classList.add("card"),e&&i.classList.add(`card--${e}`),t){const a=document.createElement("img");a.src=t,a.alt="",a.className="card__media",i.appendChild(a)}if(n||l||c){const a=document.createElement("div");if(a.className="card__header",n){const r=I({symbol:n,useMaterial:!0,size:"default"});r.classList.add("card__icon"),a.appendChild(r)}const d=document.createElement("div");if(d.className="card__header-text",l){const r=document.createElement("div");r.className="card__header-title",r.textContent=l,d.appendChild(r)}if(c){const r=document.createElement("div");r.className="card__header-subtitle",r.textContent=c,d.appendChild(r)}a.appendChild(d),i.appendChild(a)}if(_){const a=document.createElement("div");a.className="card__content",a.textContent=_,i.appendChild(a)}if(f.length>0){const a=document.createElement("div");a.className="card__actions",f.forEach(({label:d,onClick:r=()=>{}})=>{const j=W({label:d,variant:"text",onClick:r});a.appendChild(j)}),i.appendChild(a)}return i},D={title:"Components/Card",tags:["autodocs"],render:e=>o(e),parameters:{docs:{description:{component:["Cards are surfaces that display content and actions on a single topic. They follow Material Design 3 guidelines and come in several layout variants.","","### Card Features","- **Header section** with title, subtitle and optional icon/avatar","- **Media support** (image, video, etc.)","- **Main content** block","- **Action buttons** for interaction","- **Variants**: filled, outlined, default (elevated)","","The `icon` field uses the custom `createIcon` function to render Material Symbols in the card header.","","### Available Classes","- `.card` – base card component","- `.card--filled` – filled variant with surface-variant background","- `.card--outlined` – border-only card with no shadow","- `.card__media` – image/media block","- `.card__header` – container for icon and title/subtitle","- `.card__icon` – circular icon/avatar","- `.card__header-title` – primary heading","- `.card__header-subtitle` – secondary text","- `.card__content` – body text area","- `.card__actions` – container for action buttons"].join(`
`)}}},argTypes:{variant:{control:{type:"select"},options:["","filled","outlined"]},mediaSrc:{control:"text"},icon:{control:{type:"select"},options:["","shopping_bag","image","favorite","person"]},title:{control:"text"},subtitle:{control:"text"},content:{control:"text"}},args:{variant:"",mediaSrc:"",icon:"",title:"Card title",subtitle:"",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}},s=e=>{const t=v(),n=o(e);return t.appendChild(n),t};s.storyName="Live Example";s.parameters={docs:{description:{story:"An interactive card with editable content, media, icon, and actions."}}};const p=()=>{const e=v();return e.style.display="flex",e.style.flexWrap="wrap",e.style.gap="1.5rem",e.style.backgroundColor="#F4F4F4",e.style.padding="1rem",[{title:"Basic Card",content:"This is a default elevated card with title and content only."},{variant:"outlined",title:"Outlined Card",subtitle:"No shadow, just a border",content:"Outlined cards emphasize structure."},{variant:"filled",title:"Filled Card",subtitle:"Surface-variant background",content:"Filled cards offer more color contrast."},{mediaSrc:"https://via.placeholder.com/400x160",title:"Card with Media",content:"A card featuring a top image."},{icon:"shopping_bag",title:"Card with Icon",subtitle:"Visual identity with `.card__icon`",content:"Icons help represent the card's purpose."},{title:"Card with Actions",content:"This card uses your framework buttons.",actions:[{label:"OK",onClick:C()},{label:"Cancel",onClick:C()}]},{mediaSrc:"https://via.placeholder.com/400x160",variant:"outlined",icon:"image",title:"All Features",subtitle:"Full header + media + actions",content:"This card demonstrates all features together.",actions:[{label:"OK",onClick:C()},{label:"Cancel",onClick:C()}]}].forEach(n=>{var c;const l=o({...n,actions:((c=n.actions)==null?void 0:c.map(({label:_,onClick:f})=>W({label:_,variant:"text",onClick:f})))||[]});e.appendChild(l)}),e};p.parameters={docs:{description:{story:"Showcase of multiple card configurations combining media, headers, icons, and actions."}}};const u=()=>{const e=v(),t=o({variant:"filled",title:"Filled Card",subtitle:"Surface-variant background",content:"This card uses the `.card--filled` class and primary container color."});return e.appendChild(t),e};u.parameters={docs:{description:{story:["A card styled with the `filled` variant using `.card--filled`, providing a surface-variant background.","","**HTML Example:**","```html",'<div class="card card--filled">','  <div class="card__header">','    <div class="card__header-text">','      <div class="card__header-title">Filled Card</div>','      <div class="card__header-subtitle">Surface-variant background</div>',"    </div>","  </div>",'  <div class="card__content">',"    This card uses the `.card--filled` class and primary container color.","  </div>","</div>","```"].join(`
`)}}};const m=()=>{const e=v(),t=o({variant:"outlined",title:"Outlined Card",subtitle:"No shadow, just border",content:"This card uses the `.card--outlined` class for a low emphasis layout."});return e.appendChild(t),e};m.parameters={docs:{description:{story:["A card using the `outlined` variant with `.card--outlined` class to show a border and no elevation.","","**HTML Example:**","```html",'<div class="card card--outlined">','  <div class="card__header">','    <div class="card__header-text">','      <div class="card__header-title">Outlined Card</div>','      <div class="card__header-subtitle">No shadow, just border</div>',"    </div>","  </div>",'  <div class="card__content">',"    This card uses the `.card--outlined` class for a low emphasis layout.","  </div>","</div>","```"].join(`
`)}}};const h=()=>{const e=v(),t=o({mediaSrc:"https://via.placeholder.com/400x200",title:"Card with Media",subtitle:"Media above content",content:"A card that includes a media section using the `.card__media` class."});return e.appendChild(t),e};h.parameters={docs:{description:{story:["A card that includes a media section using the `.card__media` class.","","**HTML Example:**","```html",'<div class="card">','  <img src="..." class="card__media" alt="">','  <div class="card__header">','    <div class="card__header-text">','      <div class="card__header-title">Card with Media</div>','      <div class="card__header-subtitle">Media above content</div>',"    </div>","  </div>",'  <div class="card__content">',"    A card that includes a media section using the `.card__media` class.","  </div>","</div>","```"].join(`
`)}}};var b,w,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const wrapper = createStoryWrapper();
  const card = createCard(args);
  wrapper.appendChild(card);
  return wrapper;
}`,...(g=(w=s.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var y,x,S;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const wrapper = createStoryWrapper();
  wrapper.style.display = 'flex';
  wrapper.style.flexWrap = 'wrap';
  wrapper.style.gap = '1.5rem';
  wrapper.style.backgroundColor = '#F4F4F4';
  wrapper.style.padding = '1rem';
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
    mediaSrc: 'https://via.placeholder.com/400x160',
    title: 'Card with Media',
    content: 'A card featuring a top image.'
  }, {
    icon: 'shopping_bag',
    title: 'Card with Icon',
    subtitle: 'Visual identity with \`.card__icon\`',
    content: 'Icons help represent the card\\'s purpose.'
  }, {
    title: 'Card with Actions',
    content: 'This card uses your framework buttons.',
    actions: [{
      label: 'OK',
      onClick: fn()
    }, {
      label: 'Cancel',
      onClick: fn()
    }]
  }, {
    mediaSrc: 'https://via.placeholder.com/400x160',
    variant: 'outlined',
    icon: 'image',
    title: 'All Features',
    subtitle: 'Full header + media + actions',
    content: 'This card demonstrates all features together.',
    actions: [{
      label: 'OK',
      onClick: fn()
    }, {
      label: 'Cancel',
      onClick: fn()
    }]
  }];
  examples.forEach(args => {
    const card = createCard({
      ...args,
      actions: args.actions?.map(({
        label,
        onClick
      }) => createButton({
        label,
        variant: 'text',
        onClick
      })) || []
    });
    wrapper.appendChild(card);
  });
  return wrapper;
}`,...(S=(x=p.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var k,E,F;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const wrapper = createStoryWrapper();
  const card = createCard({
    variant: 'filled',
    title: 'Filled Card',
    subtitle: 'Surface-variant background',
    content: 'This card uses the \`.card--filled\` class and primary container color.'
  });
  wrapper.appendChild(card);
  return wrapper;
}`,...(F=(E=u.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var T,M,A;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const wrapper = createStoryWrapper();
  const card = createCard({
    variant: 'outlined',
    title: 'Outlined Card',
    subtitle: 'No shadow, just border',
    content: 'This card uses the \`.card--outlined\` class for a low emphasis layout.'
  });
  wrapper.appendChild(card);
  return wrapper;
}`,...(A=(M=m.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var O,N,L;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const wrapper = createStoryWrapper();
  const card = createCard({
    mediaSrc: 'https://via.placeholder.com/400x200',
    title: 'Card with Media',
    subtitle: 'Media above content',
    content: 'A card that includes a media section using the \`.card__media\` class.'
  });
  wrapper.appendChild(card);
  return wrapper;
}`,...(L=(N=h.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};const $=["LiveExample","Showcase","Filled","Outlined","WithMedia"];export{u as Filled,s as LiveExample,m as Outlined,p as Showcase,h as WithMedia,$ as __namedExportsOrder,D as default};
