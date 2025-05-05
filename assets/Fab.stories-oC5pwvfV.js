/* empty css             */import{c as D}from"./icon-BkT0aKZH.js";const p=({icon:a="add",label:c="",size:s="default",variant:l="secondary",disabled:b=!1,onClick:L=()=>{}}={})=>{const e=document.createElement("button");e.classList.add("fab"),l&&e.classList.add(`fab--${l}`),s&&s!=="default"&&e.classList.add(`fab--${s}`),b&&e.classList.add("fab--disabled");const m=D({symbol:a,useMaterial:!a.startsWith("⭐")&&a.length>1,size:"default",container:!1});if(m.classList.add("fab__icon"),e.appendChild(m),c){const d=document.createElement("span");d.className="fab__label",d.textContent=c,e.appendChild(d)}return b||e.addEventListener("click",L),e},k={title:"Components/FAB",tags:["autodocs"],render:a=>p(a),parameters:{docs:{description:{component:["Floating Action Button (FAB) visually represents the primary or frequent action in an application.","","## Available Variants","- `.fab--primary` → Primary container (color: `--md-sys-color-primary-container`)","- `.fab--secondary` (default) → Secondary container (color: `--md-sys-color-secondary-container`)","- `.fab--tertiary` → Tertiary container (color: `--md-sys-color-tertiary-container`)","","## Available Sizes","- `.fab--small` → 40px height (mini FAB)","- `.fab` (default) → 56px height (standard FAB)","- `.fab--large` → 96px height (large FAB)","","## Icon Styling",'- FABs use icons inside `<span class="material-symbols-outlined icon fab__icon">`.',"- The icon uses default size `1.5rem`, inherited from `.icon` class.","","## Label Support","- Extended FABs can include text next to the icon using `.fab__label`.","","## HTML Examples","","**Standard FAB:**","","```html",'<button class="fab fab--primary">','  <span class="material-symbols-outlined icon fab__icon">add</span>',"</button>","```","","**Extended FAB (with label):**","","```html",'<button class="fab fab--primary">','  <span class="material-symbols-outlined icon fab__icon">add</span>','  <span class="fab__label">Create</span>',"</button>","```","---","","> ℹ️ **Best Practices:** Always display only the single most important action on the screen using FAB. Place FAB above related content.","","---"].join(`
`)}}},argTypes:{icon:{control:{type:"select"},options:["add","edit","share","star","lock"]},label:{control:"text"},size:{control:{type:"select"},options:["small","default","large"]},variant:{control:{type:"select"},options:["primary","secondary","tertiary"]},disabled:{control:"boolean"}},args:{icon:"add",label:"",size:"default",variant:"secondary",disabled:!1}},t=a=>p(a);t.storyName="Live Example";t.parameters={docs:{description:{story:"Interactive FAB component. Choose size, variant, icon and label."}},options:{showPanel:!1},story:{disable:!0}};const n=()=>{const a=document.createElement("div");return a.style.display="flex",a.style.gap="2rem",a.style.flexWrap="wrap",a.style.alignItems="center",[{icon:"add",label:"",size:"small",variant:"secondary"},{icon:"add",label:"",size:"default",variant:"secondary"},{icon:"add",label:"",size:"large",variant:"secondary"},{icon:"edit",label:"Edit",size:"default",variant:"primary"},{icon:"share",label:"Share",size:"default",variant:"tertiary"}].forEach(s=>{const l=p(s);a.appendChild(l)}),a};n.parameters={docs:{description:{story:"Static overview of different FAB sizes, variants and label combinations."}},backgrounds:{default:"soft neutral",values:[{name:"soft neutral",value:"#EDEDED"},{name:"light surface",value:"#F4F4F4"},{name:"dark gray",value:"#2E2E2E"}]}};const r={args:{label:"Add Item",icon:"add"}};r.parameters={docs:{description:{story:["**FAB with Label** — Displays an icon and text side by side.","","```html",'<button class="fab fab--secondary">','  <span class="material-symbols-outlined icon fab__icon">add</span>','  <span class="fab__label">Add Item</span>',"</button>","```"].join(`
`)}}};const o={args:{size:"default",variant:"primary",icon:"edit"}};o.parameters={docs:{description:{story:["**Primary FAB** — Default primary floating action button.","","**Available Sizes:**","- `.fab--small` → 40px height","- `.fab` (default) → 56px height","- `.fab--large` → 96px height","","```html",'<button class="fab fab--primary">','  <span class="material-symbols-outlined icon fab__icon">edit</span>',"</button>","```"].join(`
`)}}};const i={args:{disabled:!0,icon:"lock"}};i.parameters={docs:{description:{story:["**Disabled FAB** — Reduced opacity, disabled interaction.","","```html",'<button class="fab fab--secondary fab--disabled">','  <span class="material-symbols-outlined icon fab__icon">lock</span>',"</button>","```"].join(`
`)}}};var f,u,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return createFab(args);
}`,...(y=(u=t.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,h,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.gap = '2rem';
  wrapper.style.flexWrap = 'wrap';
  wrapper.style.alignItems = 'center';
  const configs = [{
    icon: 'add',
    label: '',
    size: 'small',
    variant: 'secondary'
  }, {
    icon: 'add',
    label: '',
    size: 'default',
    variant: 'secondary'
  }, {
    icon: 'add',
    label: '',
    size: 'large',
    variant: 'secondary'
  }, {
    icon: 'edit',
    label: 'Edit',
    size: 'default',
    variant: 'primary'
  }, {
    icon: 'share',
    label: 'Share',
    size: 'default',
    variant: 'tertiary'
  }];
  configs.forEach(args => {
    const fab = createFab(args);
    wrapper.appendChild(fab);
  });
  return wrapper;
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var _,A,E;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Add Item',
    icon: 'add'
  }
}`,...(E=(A=r.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var F,x,z;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'default',
    variant: 'primary',
    icon: 'edit'
  }
}`,...(z=(x=o.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var B,w,S;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    disabled: true,
    icon: 'lock'
  }
}`,...(S=(w=i.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const P=["LiveExample","Showcase","WithLabel","PrimaryDefault","Disabled"];export{i as Disabled,t as LiveExample,o as PrimaryDefault,n as Showcase,r as WithLabel,P as __namedExportsOrder,k as default};
