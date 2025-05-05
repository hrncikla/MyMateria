import"./index-BB-DdCfE.js";/* empty css             */const C=({label:e="Možnost",name:d="radio-group",value:s="",checked:i=!1,disabled:o=!1,onChange:p=()=>{}})=>{const a=document.createElement("label");a.className="radio",o&&a.classList.add("radio--disabled");const n=document.createElement("input");n.type="radio",n.name=d,n.value=s,n.checked=i,n.disabled=o;const c=document.createElement("span");c.className="radio__outer";const u=document.createElement("span");return u.className="radio__inner",c.appendChild(u),a.appendChild(n),a.appendChild(c),a.appendChild(document.createTextNode(e)),n.addEventListener("change",E=>{E.target.checked&&p(s)}),a},k={title:"Components/Radio",tags:["autodocs"],render:e=>C(e),parameters:{docs:{description:{component:["Radio buttons allow users to select a single option from a set.","","### Features","- Label support","- Grouping via `name` attribute","- Controlled or uncontrolled `checked` state","- Optional `disabled` mode with reduced opacity","","### Available Classes","- `.radio` — main wrapper (label element)","- `.radio__outer` — outer circle (visual border)","- `.radio__inner` — inner dot (visible when selected)","- `.radio--disabled` — disabled state (applies `opacity: 0.38`)","","### HTML Example","```html","<!-- Single radio button -->",'<label class="radio">','  <input type="radio" name="group1" value="A">','  <span class="radio__outer">','    <span class="radio__inner"></span>',"  </span>","  Option A","</label>","","<!-- Disabled -->",'<label class="radio radio--disabled">','  <input type="radio" name="group1" value="B" disabled>','  <span class="radio__outer">','    <span class="radio__inner"></span>',"  </span>","  Option B","</label>","","<!-- Group (dynamic selection in JS) -->",'<label class="radio">','  <input type="radio" name="group-demo" value="C" checked>','  <span class="radio__outer">','    <span class="radio__inner"></span>',"  </span>","  Option C","</label>","```"].join(`
`)}}},argTypes:{label:{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"}},args:{label:"Možnost A",checked:!1,disabled:!1}},r={};r.storyName="Live Example";r.parameters={docs:{description:{story:["An interactive radio button example. Use the Controls panel to change label, checked state, and group name.","","```html",'<label class="radio">','  <input type="radio" name="example-group" value="A">','  <span class="radio__outer">','    <span class="radio__inner"></span>',"  </span>","  Option A","</label>","```"].join(`
`)}},options:{showPanel:!1},story:{disable:!0}};const t=()=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="0.5rem";const d=["A","B","C"];let s="B";const i=()=>{e.innerHTML="",d.forEach(o=>{const p=C({label:`Option ${o}`,name:"group-demo",value:o,checked:s===o,onChange:a=>{s=a,i()}});e.appendChild(p)})};return i(),e};t.parameters={docs:{description:{story:["Example of a radio group where only one option can be selected at a time.","","```html",'<label class="radio">','  <input type="radio" name="group-demo" value="A">','  <span class="radio__outer">','    <span class="radio__inner"></span>',"  </span>","  Option A","</label>","",'<label class="radio">','  <input type="radio" name="group-demo" value="B" checked>','  <span class="radio__outer">','    <span class="radio__inner"></span>',"  </span>","  Option B","</label>","",'<label class="radio">','  <input type="radio" name="group-demo" value="C">','  <span class="radio__outer">','    <span class="radio__inner"></span>',"  </span>","  Option C","</label>","```"].join(`
`)}}};const l={args:{disabled:!0,checked:!1}};l.parameters={docs:{description:{story:["A disabled radio button — not interactive and rendered with reduced opacity.","","```html",'<label class="radio radio--disabled">','  <input type="radio" name="example" value="A" disabled>','  <span class="radio__outer">','    <span class="radio__inner"></span>',"  </span>","  Option A","</label>","```"].join(`
`)}}};var m,b,_;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(_=(b=r.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var h,g,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '0.5rem';
  const options = ['A', 'B', 'C'];
  let selected = 'B';
  const renderGroup = () => {
    wrapper.innerHTML = '';
    options.forEach(opt => {
      const radio = createRadio({
        label: \`Option \${opt}\`,
        name: 'group-demo',
        value: opt,
        checked: selected === opt,
        onChange: val => {
          selected = val;
          renderGroup();
        }
      });
      wrapper.appendChild(radio);
    });
  };
  renderGroup();
  return wrapper;
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,f,x;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: false
  }
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const O=["LiveExample","GroupExample","Disabled"];export{l as Disabled,t as GroupExample,r as LiveExample,O as __namedExportsOrder,k as default};
