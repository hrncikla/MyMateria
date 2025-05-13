import{f as P}from"./index-BB-DdCfE.js";/* empty css             */import{c as E}from"./icon-OfanrlKw.js";const x=({label:e="Textové pole",placeholder:b="Zadejte text",value:u="",variant:f="filled",icon:v="",trailingIcon:_="",helper:g="",error:G=!1,disabled:y=!1,onInput:K=()=>{}})=>{const a=document.createElement("div");a.className=`text-field text-field--${f}`,G&&a.classList.add("text-field--error"),y&&a.classList.add("text-field--disabled");const h=document.createElement("label");h.className="text-field__label",h.textContent=e,a.appendChild(h);const i=document.createElement("div");if(i.className="text-field__input-wrapper",v){const l=E(v);l.classList.add("text-field__icon"),i.appendChild(l)}const t=document.createElement("input");if(t.className="text-field__input",t.type="text",t.placeholder=b,t.value=u,t.disabled=y,t.addEventListener("input",l=>K(l.target.value)),i.appendChild(t),_){const l=E(_);l.classList.add("text-field__trailing-icon"),i.appendChild(l)}if(a.appendChild(i),g){const l=document.createElement("div");l.className="text-field__helper",l.textContent=g,a.appendChild(l)}return a},Y={title:"Components/Text Field",tags:["autodocs"],render:e=>x(e),parameters:{docs:{description:{component:["Text Field is a Material Design 3 input component for entering and editing text.","","### Text Field Features","- Filled and Outlined variants","- Leading and trailing icons","- Helper text and error message","- Disabled state","- Optional multiline textarea variant","","### Available Classes","- `.text-field` – base wrapper","- `.text-field--filled` / `.text-field--outlined` – style variants","- `.text-field--error` – error state","- `.text-field--disabled` – disabled state","- `.text-field__label` – label element","- `.text-field__input-wrapper` – contains input and icons","- `.text-field__input` – input field","- `.text-field__icon` – leading icon","- `.text-field__trailing-icon` – trailing icon","- `.text-field__helper` – helper or error message","","### HTML Example","```html",'<div class="text-field text-field--outlined">','  <label class="text-field__label">Name</label>','  <div class="text-field__input-wrapper">','    <span class="text-field__icon">','      <span class="material-symbols-outlined icon">folder</span>',"    </span>",'    <input class="text-field__input" placeholder="Enter name" />','    <span class="text-field__trailing-icon">','      <span class="material-symbols-outlined icon icon--primary">search</span>',"    </span>","  </div>",'  <div class="text-field__helper">Required field</div>',"</div>","```"].join(`
`)}}},argTypes:{label:{control:"text"},placeholder:{control:"text"},value:{control:"text"},variant:{control:{type:"select"},options:["filled","outlined"]},helper:{control:"text"},disabled:{control:"boolean"}},args:{label:"Name",placeholder:"Enter your name",value:"",variant:"filled",helper:"This is a helper message",disabled:!1}},n=e=>x({...e,icon:"",trailingIcon:""});n.storyName="Live Example";n.parameters={docs:{description:{story:"Fully interactive text field. Use controls to change value, variant, icon, state, and more."}}};const r=()=>{const e=document.createElement("div");return e.className="my-wrapper",e.style.display="grid",e.style.gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))",e.style.gap="1.5rem",e.style.padding="1.5rem",e.style.backgroundColor="#F4F4F4",[{label:"Filled",placeholder:"Type something...",helper:"This is a filled field"},{label:"Outlined",variant:"outlined",placeholder:"Outlined input",helper:"This uses an outline"},{label:"With Icons",icon:'<span class="material-symbols-outlined icon">search</span>',trailingIcon:'<span class="material-symbols-outlined icon icon--primary">close</span>',placeholder:"Search..."},{label:"Error State",error:!0,helper:"This field is required",value:"Wrong value"},{label:"Disabled",disabled:!0,value:"Not editable",helper:"Field is disabled"},{label:"Multiline Textarea",multiline:!0,placeholder:"Enter multiple lines...",helper:"Use shift+enter for new line"},{label:"Label only"},{label:"",placeholder:"No label",helper:"Just placeholder and helper"}].forEach(u=>{const f=x({...u,onInput:P()});e.appendChild(f)}),e};r.parameters={docs:{description:{story:"Showcase of all text field variants: filled, outlined, with icons, error, disabled, and multiline."}}};const s={args:{label:"First Name",placeholder:"Enter first name",variant:"filled",helper:"Example of filled variant"}};s.parameters={docs:{description:{story:`**Filled text field** with subtle background and rounded edges.

\`\`\`html
<div class="text-field text-field--filled">
  <label class="text-field__label">First Name</label>
  <div class="text-field__input-wrapper">
    <input class="text-field__input" placeholder="Enter first name">
  </div>
  <div class="text-field__helper">Example of filled variant</div>
</div>
\`\`\``}}};const d={args:{label:"Last Name",variant:"outlined",placeholder:"Enter last name",helper:"Example of outlined variant"}};d.parameters={docs:{description:{story:`**Outlined text field** with border instead of background.

\`\`\`html
<div class="text-field text-field--outlined">
  <label class="text-field__label">Last Name</label>
  <div class="text-field__input-wrapper">
    <input class="text-field__input" placeholder="Enter last name">
  </div>
  <div class="text-field__helper">Example of outlined variant</div>
</div>
\`\`\``}}};const o={args:{label:"Search",icon:'<span class="material-symbols-outlined">search</span>',trailingIcon:'<span class="material-symbols-outlined icon--primary">star</span>',placeholder:"Type to search..."}};o.parameters={docs:{description:{story:`**Text field with both leading and trailing icons.**

\`\`\`html
<div class="text-field text-field--filled">
  <label class="text-field__label">Search</label>
  <div class="text-field__input-wrapper">
    <span class="text-field__icon">
      <span class="material-symbols-outlined">star</span>
    </span>
    <input class="text-field__input" placeholder="Type to search...">
    <span class="text-field__trailing-icon">
      <span class="material-symbols-outlined">star</span>
    </span>
  </div>
</div>
\`\`\``}}};const c={args:{label:"Email",error:!0,helper:"Invalid email address",value:"invalid@"}};c.parameters={docs:{description:{story:`**Error state** with red outline and helper message.

\`\`\`html
<div class="text-field text-field--error">
  <label class="text-field__label">Email</label>
  <div class="text-field__input-wrapper">
    <input class="text-field__input" placeholder="Enter your email" value="invalid@">
  </div>
  <div class="text-field__helper">Invalid email address</div>
</div>
\`\`\``}}};const p={args:{label:"Username",disabled:!0,value:"readonly_user",helper:"This field is disabled"}};p.parameters={docs:{description:{story:`**Disabled text field** with muted styling and no interaction.

\`\`\`html
<div class="text-field text-field--disabled">
  <label class="text-field__label">Username</label>
  <div class="text-field__input-wrapper">
    <input class="text-field__input" placeholder="readonly_user" disabled>
  </div>
  <div class="text-field__helper">This field is disabled</div>
</div>
\`\`\``}}};const m={args:{label:"Message",placeholder:"Write your message here...",multiline:!0,helper:"Use Enter for line break"}};m.parameters={docs:{description:{story:`**Multiline variant** using a \`<textarea>\` field instead of input.

\`\`\`html
<div class="text-field text-field--filled">
  <label class="text-field__label">Message</label>
  <div class="text-field__input-wrapper">
    <textarea class="text-field__input" placeholder="Write your message here..."></textarea>
  </div>
  <div class="text-field__helper">Use Enter for line break</div>
</div>
\`\`\``}}};var T,F,w;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  return createTextField({
    ...args,
    icon: '',
    trailingIcon: ''
  });
}`,...(w=(F=n.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var N,S,C;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.className = 'my-wrapper';
  container.style.display = 'grid';
  container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(280px, 1fr))';
  container.style.gap = '1.5rem';
  container.style.padding = '1.5rem';
  container.style.backgroundColor = '#F4F4F4';
  const examples = [{
    label: 'Filled',
    placeholder: 'Type something...',
    helper: 'This is a filled field'
  }, {
    label: 'Outlined',
    variant: 'outlined',
    placeholder: 'Outlined input',
    helper: 'This uses an outline'
  }, {
    label: 'With Icons',
    icon: '<span class="material-symbols-outlined icon">search</span>',
    trailingIcon: '<span class="material-symbols-outlined icon icon--primary">close</span>',
    placeholder: 'Search...'
  }, {
    label: 'Error State',
    error: true,
    helper: 'This field is required',
    value: 'Wrong value'
  }, {
    label: 'Disabled',
    disabled: true,
    value: 'Not editable',
    helper: 'Field is disabled'
  }, {
    label: 'Multiline Textarea',
    multiline: true,
    placeholder: 'Enter multiple lines...',
    helper: 'Use shift+enter for new line'
  }, {
    label: 'Label only'
  }, {
    label: '',
    placeholder: 'No label',
    helper: 'Just placeholder and helper'
  }];
  examples.forEach(args => {
    const field = createTextField({
      ...args,
      onInput: fn()
    });
    container.appendChild(field);
  });
  return container;
}`,...(C=(S=r.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var I,L,W;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    placeholder: 'Enter first name',
    variant: 'filled',
    helper: 'Example of filled variant'
  }
}`,...(W=(L=s.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var O,U,M;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Last Name',
    variant: 'outlined',
    placeholder: 'Enter last name',
    helper: 'Example of outlined variant'
  }
}`,...(M=(U=d.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var k,D,q;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    icon: '<span class="material-symbols-outlined">search</span>',
    trailingIcon: '<span class="material-symbols-outlined icon--primary">star</span>',
    placeholder: 'Type to search...'
  }
}`,...(q=(D=o.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var j,H,J;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    error: true,
    helper: 'Invalid email address',
    value: 'invalid@'
  }
}`,...(J=(H=c.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var A,R,Z;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    disabled: true,
    value: 'readonly_user',
    helper: 'This field is disabled'
  }
}`,...(Z=(R=p.parameters)==null?void 0:R.docs)==null?void 0:Z.source}}};var $,z,B;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    placeholder: 'Write your message here...',
    multiline: true,
    helper: 'Use Enter for line break'
  }
}`,...(B=(z=m.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const ee=["LiveExample","Showcase","Filled","Outlined","WithIcons","ErrorState","Disabled","WithTextarea"];export{p as Disabled,c as ErrorState,s as Filled,n as LiveExample,d as Outlined,r as Showcase,o as WithIcons,m as WithTextarea,ee as __namedExportsOrder,Y as default};
