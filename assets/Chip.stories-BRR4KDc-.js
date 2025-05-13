import{f as a}from"./index-BB-DdCfE.js";/* empty css             */const t=({label:e="Chip",selected:h=!1,disabled:p=!1,icon:d="",trailingIcon:m="",onClick:L=()=>{},onRemove:F=()=>{}})=>{const n=document.createElement("div");if(n.classList.add("chip"),h&&n.classList.add("chip--selected"),p&&n.classList.add("chip--disabled"),d){const i=document.createElement("span");i.className="chip__icon",i.textContent=d,n.appendChild(i)}const w=document.createTextNode(e);if(n.appendChild(w),m){const i=document.createElement("span");i.className="chip__trailing",i.textContent=m,i.addEventListener("click",R=>{R.stopPropagation(),F()}),n.appendChild(i)}return n.addEventListener("click",()=>{p||L()}),n},j={title:"Components/Chip",tags:["autodocs"],render:e=>t(e),parameters:{docs:{description:{component:["Chips are compact elements that represent an input, attribute, or action. They follow Material Design 3 guidelines and support optional icons, selection state, and dismissal.","","### Chip Features","- **Label** text (required)","- **Optional leading icon**","- **Optional trailing icon** (e.g., for removal)","- **Selectable** state (visually highlighted)","- **Disabled** state (non-interactive)","","### Available Classes","- `.chip` - base chip element","- `.chip--selected` - selected state (uses `--md-sys-color-secondary-container`)","- `.chip--disabled` - reduced opacity and no pointer events","- `.chip__icon` - leading icon (left of label)","- `.chip__trailing` - trailing icon, often used to remove the chip","","### HTML Example","```html","<!-- Selected Chip -->",'<div class="chip chip--selected">','  <span class="chip__icon">✓</span>',"  Selected Chip",'  <span class="chip__trailing">×</span>',"</div>","","<!-- Disabled Chip -->",'<div class="chip chip--disabled">',"  Disabled Chip","</div>","","<!-- Basic Chip -->",'<div class="chip">',"  Basic Chip","</div>","```"].join(`
`)}}},argTypes:{label:{control:"text"},selected:{control:"boolean"},disabled:{control:"boolean"},icon:{control:"text"},trailingIcon:{control:"text"},onClick:{action:"clicked"},onRemove:{action:"removed"}},args:{label:"Chip",selected:!1,disabled:!1,icon:"",trailingIcon:"",onClick:a(),onRemove:a()}},c=e=>t({...e,onClick:()=>{a("Chip clicked")()},onRemove:()=>{a("Chip removed")()}});c.storyName="Live Example";c.args={label:"Example Chip",selected:!1,disabled:!1,icon:"",trailingIcon:""};c.parameters={docs:{description:{story:"An interactive chip with editable label, state, and icons."}}};const s=()=>{const e=document.createElement("div");return e.style.display="flex",e.style.flexWrap="wrap",e.style.gap="1rem",e.style.padding="1rem",e.style.backgroundColor="#F4F4F4",[{label:"Základní chip"},{label:"Vybraný chip",selected:!0},{label:"Zakázaný chip",disabled:!0},{label:"S ikonou",icon:"✓"},{label:"S mazáním",trailingIcon:"×"},{label:"Kompletní",icon:"★",trailingIcon:"×",selected:!0}].forEach(p=>{const d=t({...p,onClick:()=>a("clicked")(),onRemove:()=>a("removed")()});e.appendChild(d)}),e};s.parameters={docs:{description:{story:"Ukázka různých kombinací chipů – základní, vybrané, zakázané, s ikonami, a s mazáním."}}};const o=()=>t({label:"Selected",selected:!0});o.parameters={docs:{description:{story:["A chip in a selected state using the class `.chip--selected`.","","```html",'<div class="chip chip--selected">Selected</div>',"```"].join(`
`)}}};const l=()=>t({label:"Disabled",disabled:!0});l.parameters={docs:{description:{story:["A non-interactive chip with reduced opacity using `.chip--disabled`.","","```html",'<div class="chip chip--disabled">Disabled</div>',"```"].join(`
`)}}};const r=()=>t({label:"Iconic",icon:"★",trailingIcon:"×"});r.parameters={docs:{description:{story:["A chip with both a leading and trailing icon, using `.chip__icon` and `.chip__trailing`.","","```html",'<div class="chip">','  <span class="chip__icon">★</span>',"  Iconic",'  <span class="chip__trailing">×</span>',"</div>","```"].join(`
`)}}};var u,b,g;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
}`,...(g=(b=c.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var v,C,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
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
}`,...(f=(C=s.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var x,y,k;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const chip = createChip({
    label: 'Selected',
    selected: true
  });
  return chip;
}`,...(k=(y=o.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var _,E,S;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const chip = createChip({
    label: 'Disabled',
    disabled: true
  });
  return chip;
}`,...(S=(E=l.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var D,I,z;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const chip = createChip({
    label: 'Iconic',
    icon: '★',
    trailingIcon: '×'
  });
  return chip;
}`,...(z=(I=r.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};const T=["LiveExample","Showcase","Selected","Disabled","WithIcons"];export{l as Disabled,c as LiveExample,o as Selected,s as Showcase,r as WithIcons,T as __namedExportsOrder,j as default};
