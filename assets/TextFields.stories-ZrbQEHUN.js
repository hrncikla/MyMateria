import{f as G}from"./index-BB-DdCfE.js";/* empty css             */import{c as E}from"./icon-BkT0aKZH.js";const x=({label:e="Textové pole",placeholder:b="Zadejte text",value:u="",variant:h="filled",icon:g="",trailingIcon:v="",helper:y="",error:K=!1,disabled:_=!1,onInput:P=()=>{}})=>{const l=document.createElement("div");l.className=`text-field text-field--${h}`,K&&l.classList.add("text-field--error"),_&&l.classList.add("text-field--disabled");const f=document.createElement("label");f.className="text-field__label",f.textContent=e,l.appendChild(f);const r=document.createElement("div");if(r.className="text-field__input-wrapper",g){const a=E(g);a.classList.add("text-field__icon"),r.appendChild(a)}const t=document.createElement("input");if(t.className="text-field__input",t.type="text",t.placeholder=b,t.value=u,t.disabled=_,t.addEventListener("input",a=>P(a.target.value)),r.appendChild(t),v){const a=E(v);a.classList.add("text-field__trailing-icon"),r.appendChild(a)}if(l.appendChild(r),y){const a=document.createElement("div");a.className="text-field__helper",a.textContent=y,l.appendChild(a)}return l},Y={title:"Components/Text Field",tags:["autodocs"],render:e=>x(e),parameters:{docs:{description:{component:["Text Field is a Material Design 3 input component for entering and editing text.","","### Text Field Features","- Filled and Outlined variants","- Leading and trailing icons","- Helper text and error message","- Disabled state","- Optional multiline textarea variant","","### Available Classes","- `.text-field` – base wrapper","- `.text-field--filled` / `.text-field--outlined` – style variants","- `.text-field--error` – error state","- `.text-field--disabled` – disabled state","- `.text-field__label` – label element","- `.text-field__input-wrapper` – contains input and icons","- `.text-field__input` – input field","- `.text-field__icon` – leading icon","- `.text-field__trailing-icon` – trailing icon","- `.text-field__helper` – helper or error message","","### HTML Example","```html",'<div class="text-field text-field--outlined">','  <label class="text-field__label">Name</label>','  <div class="text-field__input-wrapper">','    <span class="text-field__icon">','      <span class="material-symbols-outlined icon">folder</span>',"    </span>",'    <input class="text-field__input" placeholder="Enter name" />','    <span class="text-field__trailing-icon">','      <span class="material-symbols-outlined icon icon--primary">search</span>',"    </span>","  </div>",'  <div class="text-field__helper">Required field</div>',"</div>","```"].join(`
`)}}},argTypes:{label:{control:"text"},placeholder:{control:"text"},value:{control:"text"},variant:{control:{type:"select"},options:["filled","outlined"]},icon:{control:"text"},trailingIcon:{control:"text"},helper:{control:"text"},error:{control:"boolean"},disabled:{control:"boolean"},multiline:{control:"boolean"},onInput:{action:"input changed"}},args:{label:"Name",placeholder:"Enter your name",value:"",variant:"filled",icon:"",trailingIcon:"",helper:"",error:!1,disabled:!1,multiline:!1,onInput:G()}},n=e=>x({...e,icon:"",trailingIcon:""});n.storyName="Live Example";n.parameters={docs:{description:{story:"Fully interactive text field. Use controls to change value, variant, icon, state, and more."}}};const i=()=>{const e=document.createElement("div");return e.className="my-wrapper",e.style.display="grid",e.style.gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))",e.style.gap="1.5rem",e.style.padding="1.5rem",e.style.backgroundColor="#F4F4F4",[{label:"Filled",placeholder:"Type something...",helper:"This is a filled field"},{label:"Outlined",variant:"outlined",placeholder:"Outlined input",helper:"This uses an outline"},{label:"With Icons",icon:'<span class="material-symbols-outlined icon">search</span>',trailingIcon:'<span class="material-symbols-outlined icon icon--primary">close</span>',placeholder:"Search..."},{label:"Error State",error:!0,helper:"This field is required",value:"Wrong value"},{label:"Disabled",disabled:!0,value:"Not editable",helper:"Field is disabled"},{label:"Multiline Textarea",multiline:!0,placeholder:"Enter multiple lines...",helper:"Use shift+enter for new line"},{label:"Label only"},{label:"",placeholder:"No label",helper:"Just placeholder and helper"}].forEach(u=>{const h=x({...u,onInput:G()});e.appendChild(h)}),e};i.parameters={docs:{description:{story:"Showcase of all text field variants: filled, outlined, with icons, error, disabled, and multiline."}}};const s={args:{label:"First Name",placeholder:"Enter first name",variant:"filled",helper:"Example of filled variant"}};s.parameters={docs:{description:{story:'**Filled text field** with subtle background and rounded edges.\n\n```html\n<div class="text-field text-field--filled">...</div>\n```'}}};const o={args:{label:"Last Name",variant:"outlined",placeholder:"Enter last name",helper:"Example of outlined variant"}};o.parameters={docs:{description:{story:'**Outlined text field** with border instead of background.\n\n```html\n<div class="text-field text-field--outlined">...</div>\n```'}}};const d={args:{label:"Search",icon:"🔍",trailingIcon:'<span class="material-symbols-outlined list__icon">search</span>',placeholder:"Type to search..."}};d.parameters={docs:{description:{story:'**Text field with both leading and trailing icons.**\n\n```html\n<span class="material-symbols-outlined list__icon">search</span>\n<input ...>\n<span class="material-symbols-outlined list__icon">star</span>\n```'}}};const c={args:{label:"Email",error:!0,helper:"Invalid email address",value:"invalid@"}};c.parameters={docs:{description:{story:'**Error state** with red outline and helper message.\n\n```html\n<div class="text-field text-field--error">...</div>\n```'}}};const p={args:{label:"Username",disabled:!0,value:"readonly_user",helper:"This field is disabled"}};p.parameters={docs:{description:{story:'**Disabled text field** with muted styling and no interaction.\n\n```html\n<div class="text-field text-field--disabled">...</div>\n```'}}};const m={args:{label:"Message",placeholder:"Write your message here...",multiline:!0,helper:"Use Enter for line break"}};m.parameters={docs:{description:{story:'**Multiline variant** using a `<textarea>` field instead of input.\n\n```html\n<textarea class="text-field__input"></textarea>\n```'}}};var T,F,S;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  return createTextField({
    ...args,
    icon: '',
    trailingIcon: ''
  });
}`,...(S=(F=n.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var w,I,N;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
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
}`,...(N=(I=i.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var C,L,D;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    placeholder: 'Enter first name',
    variant: 'filled',
    helper: 'Example of filled variant'
  }
}`,...(D=(L=s.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var W,O,M;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Last Name',
    variant: 'outlined',
    placeholder: 'Enter last name',
    helper: 'Example of outlined variant'
  }
}`,...(M=(O=o.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var U,k,q;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    icon: '🔍',
    trailingIcon: '<span class="material-symbols-outlined list__icon">search</span>',
    placeholder: 'Type to search...'
  }
}`,...(q=(k=d.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var j,H,J;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(B=(z=m.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const ee=["LiveExample","Showcase","Filled","Outlined","WithIcons","ErrorState","Disabled","WithTextarea"];export{p as Disabled,c as ErrorState,s as Filled,n as LiveExample,o as Outlined,i as Showcase,d as WithIcons,m as WithTextarea,ee as __namedExportsOrder,Y as default};
