/* empty css             */import{c as v}from"./icon-OfanrlKw.js";const i=({label:e="Souhlasím",checked:p=!1,disabled:l=!1,onChange:n=()=>{}})=>{const c=document.createElement("label");c.className="checkbox",l&&c.classList.add("checkbox--disabled");const s=document.createElement("input");s.type="checkbox",s.checked=p,s.disabled=l;const d=document.createElement("span");d.className="checkbox__box";const b=v({symbol:"check",size:"small",useMaterial:!0,color:"on-primary"});return b.classList.add("checkbox__check"),d.appendChild(b),c.appendChild(s),c.appendChild(d),c.appendChild(document.createTextNode(e)),s.addEventListener("change",E=>{n(E.target.checked)}),c},I={title:"Components/Checkbox",tags:["autodocs"],render:e=>i(e),parameters:{docs:{description:{component:["Checkbox allows users to select one or multiple items from a set.","","### Features","- **Checked** and **Unchecked** states","- **Disabled** state","- **Label support**","- **Animated checkmark** using Material Symbols","","### CSS classes overview:","- `.checkbox` — Wrapper around the checkbox","- `.checkbox__box` — Square container for visual checkbox","- `.checkbox__check` — Icon rendered inside checkbox","- `.checkbox--disabled` — Grays out and disables pointer events","","### Example Markup","```html",'<label class="checkbox">','  <input type="checkbox" />','  <span class="checkbox__box">','    <span class="material-symbols-outlined checkbox__check">check</span>',"  </span>","  Agree to terms","</label>","```","","> The checkmark is a real Material Symbol (`check`) automatically created using the `createIcon` function!"].join(`
`)}}},argTypes:{label:{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"}},args:{label:"I agree with terms",checked:!1,disabled:!1}},a=e=>i(e);a.storyName="Live Example";a.parameters={docs:{description:{story:"Fully interactive Checkbox — toggle label, checked state, and disabled mode."}},options:{showPanel:!1},story:{disable:!0}};const r=()=>{const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="1rem",[{label:"Unchecked",checked:!1,disabled:!1},{label:"Checked",checked:!0,disabled:!1},{label:"Disabled unchecked",checked:!1,disabled:!0},{label:"Disabled checked",checked:!0,disabled:!0}].forEach(l=>{const n=i(l);e.appendChild(n)}),e};r.parameters={docs:{description:{story:"Various checkbox states: checked, unchecked, disabled."}}};const o={args:{checked:!0}};o.parameters={docs:{description:{story:["**Checked State** — Checkbox is initially selected.","","```html",'<label class="checkbox">','  <input type="checkbox" checked>','  <span class="checkbox__box">','    <span class="material-symbols-outlined checkbox__check">check</span>',"  </span>","  Agree","</label>","```"].join(`
`)}}};const t={args:{disabled:!0}};t.parameters={docs:{description:{story:["**Disabled State** — Checkbox is disabled and unclickable.","","Use class `.checkbox--disabled` to style it.","","```html",'<label class="checkbox checkbox--disabled">','  <input type="checkbox" disabled>','  <span class="checkbox__box">','    <span class="material-symbols-outlined checkbox__check">check</span>',"  </span>","  Disabled Option","</label>","```"].join(`
`)}}};var h,k,m;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return createCheckbox(args);
}`,...(m=(k=a.parameters)==null?void 0:k.docs)==null?void 0:m.source}}};var u,x,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '1rem';
  const examples = [{
    label: 'Unchecked',
    checked: false,
    disabled: false
  }, {
    label: 'Checked',
    checked: true,
    disabled: false
  }, {
    label: 'Disabled unchecked',
    checked: false,
    disabled: true
  }, {
    label: 'Disabled checked',
    checked: true,
    disabled: true
  }];
  examples.forEach(props => {
    const checkbox = createCheckbox(props);
    wrapper.appendChild(checkbox);
  });
  return wrapper;
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,g,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(C=(g=o.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var _,w,S;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(S=(w=t.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const M=["LiveExample","Showcase","Checked","Disabled"];export{o as Checked,t as Disabled,a as LiveExample,r as Showcase,M as __namedExportsOrder,I as default};
