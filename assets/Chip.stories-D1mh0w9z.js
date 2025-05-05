import{f as c}from"./index-BB-DdCfE.js";/* empty css             */const t=({label:e="Chip",selected:h=!1,disabled:p=!1,icon:d="",trailingIcon:m="",onClick:z=()=>{},onRemove:F=()=>{}})=>{const n=document.createElement("div");if(n.classList.add("chip"),h&&n.classList.add("chip--selected"),p&&n.classList.add("chip--disabled"),d){const i=document.createElement("span");i.className="chip__icon",i.textContent=d,n.appendChild(i)}const w=document.createTextNode(e);if(n.appendChild(w),m){const i=document.createElement("span");i.className="chip__trailing",i.textContent=m,i.addEventListener("click",T=>{T.stopPropagation(),F()}),n.appendChild(i)}return n.addEventListener("click",()=>{p||z()}),n},M={title:"Components/Chip",tags:["autodocs"],render:e=>t(e),parameters:{docs:{description:{component:["Chips are compact elements that represent an input, attribute, or action. They follow Material Design 3 guidelines and support optional icons, selection state, and dismissal.","","### Chip Features","- **Label** text (required)","- **Optional leading icon**","- **Optional trailing icon** (e.g., for removal)","- **Selectable** state (visually highlighted)","- **Disabled** state (non-interactive)","","### Available Classes","- `.chip` - base chip element","- `.chip--selected` - selected state (uses `--md-sys-color-secondary-container`)","- `.chip--disabled` - reduced opacity and no pointer events","- `.chip__icon` - leading icon (left of label)","- `.chip__trailing` - trailing icon, often used to remove the chip","","### HTML Example","```html","<!-- Selected Chip -->",'<div class="chip chip--selected">','  <span class="chip__icon">✓</span>',"  Selected Chip",'  <span class="chip__trailing">×</span>',"</div>","","<!-- Disabled Chip -->",'<div class="chip chip--disabled">',"  Disabled Chip","</div>","","<!-- Basic Chip -->",'<div class="chip">',"  Basic Chip","</div>","```"].join(`
`)}}},argTypes:{label:{control:"text"},selected:{control:"boolean"},disabled:{control:"boolean"},icon:{control:"text"},trailingIcon:{control:"text"},onClick:{action:"clicked"},onRemove:{action:"removed"}},args:{label:"Chip",selected:!1,disabled:!1,icon:"",trailingIcon:"",onClick:c(),onRemove:c()}},a=e=>t({...e,onClick:()=>{c("Chip clicked")()},onRemove:()=>{c("Chip removed")()}});a.storyName="Live Example";a.args={label:"Example Chip",selected:!1,disabled:!1,icon:"",trailingIcon:""};a.parameters={docs:{description:{story:"An interactive chip with editable label, state, and icons."}}};const s=()=>{const e=document.createElement("div");return e.style.display="flex",e.style.flexWrap="wrap",e.style.gap="1rem",e.style.padding="1rem",e.style.backgroundColor="#F4F4F4",[{label:"Základní chip"},{label:"Vybraný chip",selected:!0},{label:"Zakázaný chip",disabled:!0},{label:"S ikonou",icon:"✓"},{label:"S mazáním",trailingIcon:"×"},{label:"Kompletní",icon:"★",trailingIcon:"×",selected:!0}].forEach(p=>{const d=t({...p,onClick:()=>c("clicked")(),onRemove:()=>c("removed")()});e.appendChild(d)}),e};s.parameters={docs:{description:{story:"Ukázka různých kombinací chipů – základní, vybrané, zakázané, s ikonami, a s mazáním."}}};const o=()=>t({label:"Selected",selected:!0});o.parameters={docs:{description:{story:["A chip in a selected state using the class `.chip--selected`.","","**HTML Example:**","```html",'<div class="chip chip--selected">Selected</div>',"```"].join(`
`)}}};const l=()=>t({label:"Disabled",disabled:!0});l.parameters={docs:{description:{story:["A non-interactive chip with reduced opacity using `.chip--disabled`.","","**HTML Example:**","```html",'<div class="chip chip--disabled">Disabled</div>',"```"].join(`
`)}}};const r=()=>t({label:"Iconic",icon:"★",trailingIcon:"×"});r.parameters={docs:{description:{story:["A chip with both a leading and trailing icon, using `.chip__icon` and `.chip__trailing`.","","**HTML Example:**","```html",'<div class="chip">','  <span class="chip__icon">★</span>',"  Iconic",'  <span class="chip__trailing">×</span>',"</div>","```"].join(`
`)}}};var u,b,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const chip = createChip({
    ...args,
    onClick: () => {
      fn('Chip clicked')();
    },
    onRemove: () => {
      fn('Chip removed')();
    }
  });
  return chip;
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var v,C,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexWrap = 'wrap';
  container.style.gap = '1rem';
  container.style.padding = '1rem';
  container.style.backgroundColor = '#F4F4F4';
  const chips = [{
    label: 'Základní chip'
  }, {
    label: 'Vybraný chip',
    selected: true
  }, {
    label: 'Zakázaný chip',
    disabled: true
  }, {
    label: 'S ikonou',
    icon: '✓'
  }, {
    label: 'S mazáním',
    trailingIcon: '×'
  }, {
    label: 'Kompletní',
    icon: '★',
    trailingIcon: '×',
    selected: true
  }];
  chips.forEach(args => {
    const chip = createChip({
      ...args,
      onClick: () => fn('clicked')(),
      onRemove: () => fn('removed')()
    });
    container.appendChild(chip);
  });
  return container;
}`,...(x=(C=s.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var f,y,k;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const chip = createChip({
    label: 'Selected',
    selected: true
  });
  return chip;
}`,...(k=(y=o.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var E,_,S;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const chip = createChip({
    label: 'Disabled',
    disabled: true
  });
  return chip;
}`,...(S=(_=l.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var D,I,L;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const chip = createChip({
    label: 'Iconic',
    icon: '★',
    trailingIcon: '×'
  });
  return chip;
}`,...(L=(I=r.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const N=["LiveExample","Showcase","Selected","Disabled","WithIcons"];export{l as Disabled,a as LiveExample,o as Selected,s as Showcase,r as WithIcons,N as __namedExportsOrder,M as default};
