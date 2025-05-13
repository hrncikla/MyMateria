/* empty css             */import{c as T}from"./icon-OfanrlKw.js";import{c as d}from"./storybook-helpers-CD2gtCTp.js";const c=({items:e=[],onSelect:t=()=>{}})=>{const r=document.createElement("div");return r.className="menu",e.forEach((n,s)=>{if(n.divider){const i=document.createElement("div");i.className="menu__divider",r.appendChild(i);return}const a=document.createElement("div");if(a.classList.add("menu__item"),n.disabled&&a.classList.add("menu__item--disabled"),n.icon){const i=T(n.icon);i.classList.add("menu__icon"),a.appendChild(i)}const o=document.createElement("span");if(o.textContent=n.label,a.appendChild(o),n.shortcut){const i=document.createElement("span");i.className="menu__shortcut",i.textContent=n.shortcut,a.appendChild(i)}n.disabled||a.addEventListener("click",()=>t(s)),r.appendChild(a)}),r},U={title:"Components/Menu",tags:["autodocs"],render:e=>c(e),parameters:{docs:{description:{component:["Menu is a contextual overlay displaying a list of choices. Built using Material Design 3 principles.","","### Menu Features","- Icons using custom icon component","- Optional shortcut display","- Divider support","- Disabled state","","### Available Classes","- `.menu` – base menu container","- `.menu__item` – interactive menu item","- `.menu__item--disabled` – visually disabled item","- `.menu__icon` – leading icon (e.g. using Material Symbols)","- `.menu__shortcut` – right-aligned shortcut label","- `.menu__divider` – separator between groups of items","","### HTML Example","```html",'  <div class="menu">','    <div class="menu__item">','      <span class="menu__icon">','        <span class="material-symbols-outlined icon">settings</span>',"      </span>","      <span>Settings</span>",'      <span class="menu__shortcut">Ctrl+S</span>',"    </div>",'    <div class="menu__divider"></div>','    <div class="menu__item menu__item--disabled">','      <span class="menu__icon">','        <span class="material-symbols-outlined icon">logout</span>',"      </span>","      <span>Logout</span>","    </div>","  </div>","```"].join(`
`)}}},argTypes:{items:{control:"object"}},args:{items:[{icon:"edit",label:"Edit"},{icon:"delete",label:"Delete"},{divider:!0},{icon:"settings",label:"Settings",shortcut:"Ctrl+S"},{icon:"logout",label:"Logout",disabled:!0}]}},l=e=>{const t=d(),r=document.createElement("button");r.textContent="Toggle Menu",r.style.padding="0.5rem 1rem";const n=[{label:"Basic Item 1"},{label:"Basic Item 2"},{label:"Basic Item 3"}];e.icon&&n.forEach((a,o)=>{n[o].icon=["edit","folder","settings"][o%3]}),e.divider&&n.splice(1,0,{divider:!0});const s=c({items:n});return s.style.position="absolute",s.style.top="3rem",s.style.left="0",s.style.display="none",r.addEventListener("click",()=>{s.style.display=s.style.display==="none"?"flex":"none"}),t.appendChild(r),t.appendChild(s),t};l.storyName="Live Example";l.argTypes={icon:{control:"boolean",defaultValue:!1},divider:{control:"boolean",defaultValue:!1}};l.args={icon:!1,divider:!1};l.parameters={docs:{description:{story:`
Interactive menu with toggle options for icons and dividers.
`}}};const p=()=>{const e=d();return e.style.display="grid",e.style.gridTemplateColumns="repeat(auto-fit, minmax(240px, 1fr))",e.style.gap="1.5rem",e.style.padding="1.5rem",[{title:"With Icons",items:[{icon:"folder",label:"File"},{icon:"folder",label:"Folder"},{icon:"star",label:"Favorite"}]},{title:"With Shortcuts",items:[{label:"Undo",shortcut:"Ctrl+Z"},{label:"Redo",shortcut:"Ctrl+Y"}]},{title:"With Disabled Items",items:[{label:"Option A"},{label:"Option B",disabled:!0},{label:"Option C"}]}].forEach(({title:r,items:n})=>{const s=document.createElement("div"),a=document.createElement("strong");a.textContent=r,a.style.display="block",a.style.marginBottom="0.5rem",s.appendChild(a);const o=c({items:n.map(i=>({...i,icon:i.icon?T({symbol:i.icon,useMaterial:!0}):null}))});s.appendChild(o),e.appendChild(s)}),e};p.parameters={docs:{description:{story:"\nShowcase of various menu configurations, including icons, shortcuts, dividers, and disabled items.\n```\n"}}};const m=()=>{const e=d(),t=c({items:[{label:"Option A"},{label:"Option B",disabled:!0},{label:"Option C"}]});return e.appendChild(t),e};m.parameters={docs:{description:{story:`
A menu item with \`.menu__item--disabled\` is styled with reduced opacity and cannot be interacted with.

\`\`\`html
<div class="menu">
  <div class="menu__item">Option A</div>
  <div class="menu__item menu__item--disabled">Option B</div>
  <div class="menu__item">Option C</div>
</div>
\`\`\`
`}}};const u=()=>{const e=d(),t=c({items:[{label:"Undo",shortcut:"Ctrl+Z"},{label:"Redo",shortcut:"Ctrl+Y"}]});return e.appendChild(t),e};u.parameters={docs:{description:{story:`
Shortcuts are displayed on the right using \`.menu__shortcut\`.

\`\`\`html
<div class="menu">
  <div class="menu__item">
    <span class="menu__label">Undo</span>
    <span class="menu__shortcut">Ctrl+Z</span>
  </div>
  <div class="menu__item">
    <span class="menu__label">Redo</span>
    <span class="menu__shortcut">Ctrl+Y</span>
  </div>
</div>
\`\`\`
`}}};const b=()=>{const e=d(),t=c({items:[{icon:"folder",label:"File"},{icon:"folder",label:"Folder"},{icon:"star",label:"Favorite"}]});return e.appendChild(t),e};b.parameters={docs:{description:{story:`
Menu with leading icons using \`.menu__icon\`.

\`\`\`html
<div class="menu">
  <div class="menu__item">
    <span class="menu__icon material-symbols-outlined">star</span>
    <span class="menu__label">File</span>
  </div>
  <div class="menu__item">
    <span class="menu__icon material-symbols-outlined">star</span>
    <span class="menu__label">Folder</span>
  </div>
  <div class="menu__item">
    <span class="menu__icon material-symbols-outlined">star</span>
    <span class="menu__label">Favorite</span>
  </div>
</div>
\`\`\`
`}}};const _=()=>{const e=d(),t=c({items:[{label:"Top"},{divider:!0},{label:"Bottom"}]});return e.appendChild(t),e};_.parameters={docs:{description:{story:`
Divider creates a visual separation using \`.menu__divider\`.

\`\`\`html
<div class="menu">
  <div class="menu__item">Top</div>
  <div class="menu__divider"></div>
  <div class="menu__item">Bottom</div>
</div>
\`\`\`
`}}};var v,h,g;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const wrapper = createStoryWrapper();
  const trigger = document.createElement('button');
  trigger.textContent = 'Toggle Menu';
  trigger.style.padding = '0.5rem 1rem';
  const items = [{
    label: 'Basic Item 1'
  }, {
    label: 'Basic Item 2'
  }, {
    label: 'Basic Item 3'
  }];
  if (args.icon) {
    items.forEach((item, index) => {
      items[index].icon = ['edit', 'folder', 'settings'][index % 3];
    });
  }
  if (args.divider) {
    items.splice(1, 0, {
      divider: true
    });
  }
  const menu = createMenu({
    items
  });
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
}`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,C,f;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const wrapper = createStoryWrapper();
  wrapper.style.display = 'grid';
  wrapper.style.gridTemplateColumns = 'repeat(auto-fit, minmax(240px, 1fr))';
  wrapper.style.gap = '1.5rem';
  wrapper.style.padding = '1.5rem';
  const examples = [{
    title: 'With Icons',
    items: [{
      icon: 'folder',
      label: 'File'
    }, {
      icon: 'folder',
      label: 'Folder'
    }, {
      icon: 'star',
      label: 'Favorite'
    }]
  }, {
    title: 'With Shortcuts',
    items: [{
      label: 'Undo',
      shortcut: 'Ctrl+Z'
    }, {
      label: 'Redo',
      shortcut: 'Ctrl+Y'
    }]
  }, {
    title: 'With Disabled Items',
    items: [{
      label: 'Option A'
    }, {
      label: 'Option B',
      disabled: true
    }, {
      label: 'Option C'
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
    section.appendChild(label);
    const menu = createMenu({
      items: items.map(item => ({
        ...item,
        icon: item.icon ? createIcon({
          symbol: item.icon,
          useMaterial: true
        }) : null
      }))
    });
    section.appendChild(menu);
    wrapper.appendChild(section);
  });
  return wrapper;
}`,...(f=(C=p.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var w,E,S;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const wrapper = createStoryWrapper();
  const menu = createMenu({
    items: [{
      label: 'Option A'
    }, {
      label: 'Option B',
      disabled: true
    }, {
      label: 'Option C'
    }]
  });
  wrapper.appendChild(menu);
  return wrapper;
}`,...(S=(E=m.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var x,O,M;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const wrapper = createStoryWrapper();
  const menu = createMenu({
    items: [{
      label: 'Undo',
      shortcut: 'Ctrl+Z'
    }, {
      label: 'Redo',
      shortcut: 'Ctrl+Y'
    }]
  });
  wrapper.appendChild(menu);
  return wrapper;
}`,...(M=(O=u.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var I,B,W;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const wrapper = createStoryWrapper();
  const menu = createMenu({
    items: [{
      icon: 'folder',
      label: 'File'
    }, {
      icon: 'folder',
      label: 'Folder'
    }, {
      icon: 'star',
      label: 'Favorite'
    }]
  });
  wrapper.appendChild(menu);
  return wrapper;
}`,...(W=(B=b.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var F,L,D;_.parameters={..._.parameters,docs:{...(F=_.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const wrapper = createStoryWrapper();
  const menu = createMenu({
    items: [{
      label: 'Top'
    }, {
      divider: true
    }, {
      label: 'Bottom'
    }]
  });
  wrapper.appendChild(menu);
  return wrapper;
}`,...(D=(L=_.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};const Y=["LiveExample","Showcase","WithDisabledItem","WithShortcuts","IconsOnly","DividerOnly"];export{_ as DividerOnly,b as IconsOnly,l as LiveExample,p as Showcase,m as WithDisabledItem,u as WithShortcuts,Y as __namedExportsOrder,U as default};
