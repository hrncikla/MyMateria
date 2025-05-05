/* empty css             */const a=({value:s=0,indeterminate:p=!1,status:d=""})=>{const e=document.createElement("div");e.classList.add("progress"),p&&e.classList.add("progress--indeterminate"),d&&e.classList.add(`progress--${d}`);const t=document.createElement("div");return t.classList.add("progress__bar"),p||(t.style.width=`${Math.min(Math.max(s,0),100)}%`),e.appendChild(t),e},I={title:"Components/Progress",tags:["autodocs"],render:s=>a(s),parameters:{docs:{description:{component:["The linear progress bar indicates activity or status of a process. )","","### Features","- Visual representation of task progress from **0–100%**","- **Indeterminate mode** with animated loop when progress is unknown","- Support for **status colors**: success, warning, error","","### Available Classes","- `.progress` — root container, full width","- `.progress__bar` — inner bar showing progress","- `.progress--indeterminate` — applies animated state (via `@keyframes`)","- `.progress--success` — uses success color (`--md-sys-color-success`)","- `.progress--error` — uses error color (`--md-sys-color-error`)","","### HTML Example","```html","<!-- Determinate progress -->",'<div class="progress">','  <div class="progress__bar" style="width: 60%;"></div>',"</div>","","<!-- Indeterminate progress -->",'<div class="progress progress--indeterminate">','  <div class="progress__bar"></div>',"</div>","","<!-- Success status -->",'<div class="progress progress--success">','  <div class="progress__bar" style="width: 100%;"></div>',"</div>","```"].join(`
`)}}},argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},indeterminate:{control:"boolean"},status:{control:{type:"select"},options:["","success","error"]}},args:{value:50,indeterminate:!1,status:""}},r={};r.storyName="Live Example";r.parameters={docs:{description:{story:"Interactive progress bar with the ability to change value, mode and status."}},options:{showPanel:!1},story:{disable:!0}};const o=()=>{const s=document.createElement("div");s.style.display="flex",s.style.flexDirection="column",s.style.gap="1rem",s.style.width="100%",s.style.maxWidth="400px";const p=a({value:20}),d=a({value:70,status:"success"}),e=a({value:90,status:"error"}),t=a({indeterminate:!0});return s.append(p,d,e,t),s};o.parameters={docs:{description:{story:"Sample of all states: standard, success, error, indeterminate."}}};const n={args:{value:100,status:"success"}};n.parameters={docs:{description:{story:['Progress bar with "success" status – indication of completion or success.',"","```html",'<div class="progress progress--success">','  <div class="progress__bar" style="width: 100%;"></div>',"</div>","```"].join(`
`)}}};const i={args:{value:75,status:"error"}};i.parameters={docs:{description:{story:['Progress bar with "error" status – indicates an error or failure.',"","```html",'<div class="progress progress--error">','  <div class="progress__bar" style="width: 75%;"></div>',"</div>","```"].join(`
`)}}};const c={args:{indeterminate:!0}};c.parameters={docs:{description:{story:["**Indeterminate** – used when the duration of the process cannot be determined.","The animation is set using `@keyframes progress-indeterminate`.","","```html",'<div class="progress progress--indeterminate">','  <div class="progress__bar"></div>',"</div>","```"].join(`
`)}}};var l,m,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,v,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '1rem';
  wrapper.style.width = '100%';
  wrapper.style.maxWidth = '400px';
  const progress1 = createProgress({
    value: 20
  });
  const progress2 = createProgress({
    value: 70,
    status: 'success'
  });
  const progress3 = createProgress({
    value: 90,
    status: 'error'
  });
  const progress4 = createProgress({
    indeterminate: true
  });
  wrapper.append(progress1, progress2, progress3, progress4);
  return wrapper;
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var y,w,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: 100,
    status: 'success'
  }
}`,...(f=(w=n.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var b,_,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 75,
    status: 'error'
  }
}`,...(x=(_=i.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var S,E,P;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...(P=(E=c.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};const j=["LiveExample","Showcase","Success","Error","Indeterminate"];export{i as Error,c as Indeterminate,r as LiveExample,o as Showcase,n as Success,j as __namedExportsOrder,I as default};
