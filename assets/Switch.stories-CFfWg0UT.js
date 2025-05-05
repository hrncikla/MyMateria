import"./index-BB-DdCfE.js";/* empty css             */const E=({checked:e=!1,disabled:d=!1,onChange:i=()=>{}})=>{const s=document.createElement("label");s.className="switch",d&&s.classList.add("switch--disabled");const a=document.createElement("input");a.type="checkbox",a.checked=e,a.disabled=d;const o=document.createElement("span");o.className="switch__track";const l=document.createElement("span");return l.className="switch__thumb",a.addEventListener("change",S=>{i(S.target.checked)}),s.appendChild(a),s.appendChild(o),s.appendChild(l),s},L={title:"Components/Switch",tags:["autodocs"],render:e=>E(e),parameters:{docs:{description:{component:["Switch toggles the state of a single setting.","","Supports `checked` / `unchecked` state and optional `disabled` mode.","","## Available Classes","- `.switch` | Root wrapper element with relative positioning |","- `.switch__track` | The horizontal background (track) |","- `.switch__thumb` | The circular toggle element |","- `.switch--disabled` | Reduces opacity and disables interaction |","","## HTML Structure","","```html",'<label class="switch">','  <input type="checkbox" />','  <div class="switch__track"></div>','  <div class="switch__thumb"></div>',"</label>","```",""].join(`
`)}}},argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"}},args:{checked:!1,disabled:!1}},t={};t.storyName="Live Example";t.parameters={docs:{description:{story:"Interactive switch – you can turn on/off and disable."}},options:{showPanel:!1},story:{disable:!0}};const c=()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="2rem",e.style.alignItems="center",[{checked:!1,disabled:!1},{checked:!0,disabled:!1},{checked:!1,disabled:!0},{checked:!0,disabled:!0}].forEach(i=>{const s=E({...i});e.appendChild(s)}),e};c.parameters={docs:{description:{story:"Demonstration of all switch states: on, off, enabled, and disabled."}}};const r={args:{checked:!0}};r.parameters={docs:{description:{story:["The switch is turned on by default using the `checked` property.","","```html",'<label class="switch">','  <input type="checkbox" checked />','  <div class="switch__track"></div>','  <div class="switch__thumb"></div>',"</label>","```"].join(`
`)}}};const n={args:{disabled:!0}};n.parameters={docs:{description:{story:["The switch is disabled — it does not respond to user interaction and has reduced opacity.","","```html",'<label class="switch switch--disabled">','  <input type="checkbox" disabled />','  <div class="switch__track"></div>','  <div class="switch__thumb"></div>',"</label>","```"].join(`
`)}}};var p,h,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(m=(h=t.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var u,b,w;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.gap = '2rem';
  wrapper.style.alignItems = 'center';
  const states = [{
    checked: false,
    disabled: false
  }, {
    checked: true,
    disabled: false
  }, {
    checked: false,
    disabled: true
  }, {
    checked: true,
    disabled: true
  }];
  states.forEach(args => {
    const el = createSwitch({
      ...args
    });
    wrapper.appendChild(el);
  });
  return wrapper;
}`,...(w=(b=c.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var k,g,f;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,_,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(v=(_=n.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const T=["LiveExample","Showcase","Checked","Disabled"];export{r as Checked,n as Disabled,t as LiveExample,c as Showcase,T as __namedExportsOrder,L as default};
