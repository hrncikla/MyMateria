import{f as Z}from"./index-BB-DdCfE.js";/* empty css             */import{c as $}from"./icon-BkT0aKZH.js";import{v as G}from"./v4-CtRu48qb.js";const g=({items:e=[],onSelect:s=()=>{}})=>{const n=document.createElement("div");return n.className="menu",e.forEach((t,l)=>{if(t.divider){const i=document.createElement("div");i.className="menu__divider",n.appendChild(i);return}const a=document.createElement("div");if(a.classList.add("menu__item"),t.disabled&&a.classList.add("menu__item--disabled"),t.icon){const i=$(t.icon);i.classList.add("menu__icon"),a.appendChild(i)}const o=document.createElement("span");if(o.textContent=t.label,a.appendChild(o),t.shortcut){const i=document.createElement("span");i.className="menu__shortcut",i.textContent=t.shortcut,a.appendChild(i)}t.disabled||a.addEventListener("click",()=>s(l)),n.appendChild(a)}),n},{addons:H}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:q}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:f}=__STORYBOOK_MODULE_GLOBAL__;var J="storybook/actions",Q=`${J}/action-event`,ee={depth:10,clearOnStoryChange:!0,limit:50},K=(e,s)=>{let n=Object.getPrototypeOf(e);return!n||s(n)?n:K(n,s)},te=e=>!!(typeof e=="object"&&e&&K(e,s=>/^Synthetic(?:Base)?Event$/.test(s.constructor.name))&&typeof e.persist=="function"),ne=e=>{if(te(e)){let s=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));s.persist();let n=Object.getOwnPropertyDescriptor(s,"view"),t=n==null?void 0:n.value;return typeof t=="object"&&(t==null?void 0:t.constructor.name)==="Window"&&Object.defineProperty(s,"view",{...n,value:Object.create(t.constructor.prototype)}),s}return e},se=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?G():Date.now().toString(36)+Math.random().toString(36).substring(2);function ae(e,s={}){let n={...ee,...s},t=function(...l){var _,v;if(s.implicit){let E=(_="__STORYBOOK_PREVIEW__"in f?f.__STORYBOOK_PREVIEW__:void 0)==null?void 0:_.storyRenders.find(c=>c.phase==="playing"||c.phase==="rendering");if(E){let c=!((v=window==null?void 0:window.FEATURES)!=null&&v.disallowImplicitActionsInRenderV8),C=new q({phase:E.phase,name:e,deprecated:c});if(c)console.warn(C);else throw C}}let a=H.getChannel(),o=se(),i=5,h=l.map(ne),z=l.length>1?h:h[0],X={id:o,count:0,data:{name:e,args:z},options:{...n,maxDepth:i+(n.depth||3),allowFunction:n.allowFunction||!1}};a.emit(Q,X)};return t.isAction=!0,t.implicit=s.implicit,t}const ce={title:"Components/Menu",tags:["autodocs"],render:e=>g(e),parameters:{docs:{description:{component:["Menu is a contextual overlay displaying a list of choices. Built using Material Design 3 principles.","","### Menu Features","- Icons using custom icon component","- Optional shortcut display","- Divider support","- Disabled state","","### Available Classes","- `.menu` – base menu container","- `.menu__item` – interactive menu item","- `.menu__item--disabled` – visually disabled item","- `.menu__icon` – leading icon (e.g. using Material Symbols)","- `.menu__shortcut` – right-aligned shortcut label","- `.menu__divider` – separator between groups of items","","### HTML Example","```html",'<div class="my-wrapper">','  <div class="menu">','    <div class="menu__item">','      <span class="menu__icon">','        <span class="material-symbols-outlined icon">settings</span>',"      </span>","      <span>Settings</span>",'      <span class="menu__shortcut">Ctrl+S</span>',"    </div>",'    <div class="menu__divider"></div>','    <div class="menu__item menu__item--disabled">','      <span class="menu__icon">','        <span class="material-symbols-outlined icon">logout</span>',"      </span>","      <span>Logout</span>","    </div>","  </div>","</div>","```"].join(`
`)}}},argTypes:{items:{control:"object"},onSelect:{action:"selected"}},args:{items:[{icon:'<span class="material-symbols-outlined icon">edit</span>',label:"Edit"},{icon:'<span class="material-symbols-outlined icon">delete</span>',label:"Delete"},{divider:!0},{icon:'<span class="material-symbols-outlined icon">settings</span>',label:"Settings",shortcut:"Ctrl+S"},{icon:'<span class="material-symbols-outlined icon">logout</span>',label:"Logout",disabled:!0}],onSelect:Z()}},r=e=>{const s=document.createElement("div");s.className="my-wrapper",s.style.padding="2rem",s.style.position="relative";const n=document.createElement("button");n.textContent="Toggle Menu",n.style.padding="0.5rem 1rem";const t=g(e);return t.style.position="absolute",t.style.top="3rem",t.style.left="0",t.style.display="none",n.addEventListener("click",()=>{t.style.display=t.style.display==="none"?"flex":"none"}),s.appendChild(n),s.appendChild(t),s};r.storyName="Live Example";r.parameters={docs:{description:{story:"Interactive menu rendered on button click. Items can include icons, shortcuts, dividers and disabled states."}},options:{showPanel:!1},story:{disable:!0}};const d=()=>{const e=document.createElement("div");return e.className="my-wrapper",e.style.padding="2rem",e.style.display="grid",e.style.gridTemplateColumns="repeat(auto-fit, minmax(240px, 1fr))",e.style.gap="1.5rem",e.style.backgroundColor="#F4F4F4",[{title:"Basic Menu",items:[{label:"New file"},{label:"Open..."},{label:"Save"}]},{title:"With Icons",items:[{icon:'<span class="material-symbols-outlined icon">description</span>',label:"Document"},{icon:'<span class="material-symbols-outlined icon">folder</span>',label:"Folder"},{icon:'<span class="material-symbols-outlined icon">settings</span>',label:"Settings"}]},{title:"With Shortcuts",items:[{label:"Copy",shortcut:"Ctrl+C"},{label:"Paste",shortcut:"Ctrl+V"},{label:"Cut",shortcut:"Ctrl+X"}]},{title:"With Disabled",items:[{label:"Item 1"},{label:"Item 2",disabled:!0},{label:"Item 3"}]},{title:"With Divider",items:[{label:"Profile"},{label:"Account"},{divider:!0},{label:"Logout"}]},{title:"All Features",items:[{icon:'<span class="material-symbols-outlined icon">edit</span>',label:"Edit",shortcut:"E"},{icon:'<span class="material-symbols-outlined icon">sync</span>',label:"Sync",shortcut:"S"},{divider:!0},{icon:'<span class="material-symbols-outlined icon">delete</span>',label:"Delete",disabled:!0}]}].forEach(({title:n,items:t})=>{const l=document.createElement("div"),a=document.createElement("strong");a.textContent=n,a.style.display="block",a.style.marginBottom="0.5rem";const o=g({items:t,onSelect:ae("menu item selected")});l.appendChild(a),l.appendChild(o),e.appendChild(l)}),e};d.parameters={docs:{description:{story:"Showcase of all available menu configurations: icons, shortcuts, dividers, disabled and more."}}};const m={args:{items:[{label:"Option A"},{label:"Option B",disabled:!0},{label:"Option C"}]}};m.parameters={docs:{description:{story:"A menu item with `.menu__item--disabled` is styled with reduced opacity and cannot be interacted with."}}};const p={args:{items:[{label:"Undo",shortcut:"Ctrl+Z"},{label:"Redo",shortcut:"Ctrl+Y"}]}};p.parameters={docs:{description:{story:"Shortcuts are displayed on the right using `.menu__shortcut`."}}};const u={args:{items:[{icon:"📄",label:"File"},{icon:"📁",label:"Folder"},{icon:"⭐",label:"Favorite"}]}};u.parameters={docs:{description:{story:"Menu with leading icons using `.menu__icon`."}}};const b={args:{items:[{label:"Top"},{divider:!0},{label:"Bottom"}]}};b.parameters={docs:{description:{story:"Divider creates a visual separation using `.menu__divider`."}}};const y={args:{items:[{icon:"✏️",label:"Rename",shortcut:"F2"},{icon:"🗑️",label:"Delete",disabled:!0},{divider:!0},{icon:"⚙️",label:"Settings",shortcut:"Ctrl+S"}]}};y.parameters={docs:{description:{story:"Combined menu with icon, shortcut, disabled item, and divider."}}};var S,O,D;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const wrapper = document.createElement('div');
  wrapper.className = 'my-wrapper';
  wrapper.style.padding = '2rem';
  wrapper.style.position = 'relative';
  const trigger = document.createElement('button');
  trigger.textContent = 'Toggle Menu';
  trigger.style.padding = '0.5rem 1rem';
  const menu = createMenu(args);
  menu.style.position = 'absolute';
  menu.style.top = '3rem';
  menu.style.left = '0';
  menu.style.display = 'none';
  trigger.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
  });
  wrapper.appendChild(trigger);
  wrapper.appendChild(menu);
  return wrapper;
}`,...(D=(O=r.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var w,F,I;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.className = 'my-wrapper';
  container.style.padding = '2rem';
  container.style.display = 'grid';
  container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(240px, 1fr))';
  container.style.gap = '1.5rem';
  container.style.backgroundColor = '#F4F4F4';
  const examples = [{
    title: 'Basic Menu',
    items: [{
      label: 'New file'
    }, {
      label: 'Open...'
    }, {
      label: 'Save'
    }]
  }, {
    title: 'With Icons',
    items: [{
      icon: '<span class="material-symbols-outlined icon">description</span>',
      label: 'Document'
    }, {
      icon: '<span class="material-symbols-outlined icon">folder</span>',
      label: 'Folder'
    }, {
      icon: '<span class="material-symbols-outlined icon">settings</span>',
      label: 'Settings'
    }]
  }, {
    title: 'With Shortcuts',
    items: [{
      label: 'Copy',
      shortcut: 'Ctrl+C'
    }, {
      label: 'Paste',
      shortcut: 'Ctrl+V'
    }, {
      label: 'Cut',
      shortcut: 'Ctrl+X'
    }]
  }, {
    title: 'With Disabled',
    items: [{
      label: 'Item 1'
    }, {
      label: 'Item 2',
      disabled: true
    }, {
      label: 'Item 3'
    }]
  }, {
    title: 'With Divider',
    items: [{
      label: 'Profile'
    }, {
      label: 'Account'
    }, {
      divider: true
    }, {
      label: 'Logout'
    }]
  }, {
    title: 'All Features',
    items: [{
      icon: '<span class="material-symbols-outlined icon">edit</span>',
      label: 'Edit',
      shortcut: 'E'
    }, {
      icon: '<span class="material-symbols-outlined icon">sync</span>',
      label: 'Sync',
      shortcut: 'S'
    }, {
      divider: true
    }, {
      icon: '<span class="material-symbols-outlined icon">delete</span>',
      label: 'Delete',
      disabled: true
    }]
  }];
  examples.forEach(({
    title,
    items
  }) => {
    const section = document.createElement('div');
    const label = document.createElement('strong');
    label.textContent = title;
    label.style.display = 'block';
    label.style.marginBottom = '0.5rem';
    const menu = createMenu({
      items,
      onSelect: action('menu item selected')
    });
    section.appendChild(label);
    section.appendChild(menu);
    container.appendChild(section);
  });
  return container;
}`,...(I=(F=d.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var x,R,A;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Option A'
    }, {
      label: 'Option B',
      disabled: true
    }, {
      label: 'Option C'
    }]
  }
}`,...(A=(R=m.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var L,M,B;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Undo',
      shortcut: 'Ctrl+Z'
    }, {
      label: 'Redo',
      shortcut: 'Ctrl+Y'
    }]
  }
}`,...(B=(M=p.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var T,W,P;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items: [{
      icon: '📄',
      label: 'File'
    }, {
      icon: '📁',
      label: 'Folder'
    }, {
      icon: '⭐',
      label: 'Favorite'
    }]
  }
}`,...(P=(W=u.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var N,j,V;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Top'
    }, {
      divider: true
    }, {
      label: 'Bottom'
    }]
  }
}`,...(V=(j=b.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var k,Y,U;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    items: [{
      icon: '✏️',
      label: 'Rename',
      shortcut: 'F2'
    }, {
      icon: '🗑️',
      label: 'Delete',
      disabled: true
    }, {
      divider: true
    }, {
      icon: '⚙️',
      label: 'Settings',
      shortcut: 'Ctrl+S'
    }]
  }
}`,...(U=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};const de=["LiveExample","Showcase","WithDisabledItem","WithShortcuts","IconsOnly","DividerOnly","AllFeatures"];export{y as AllFeatures,b as DividerOnly,u as IconsOnly,r as LiveExample,d as Showcase,m as WithDisabledItem,p as WithShortcuts,de as __namedExportsOrder,ce as default};
