import"./index-BB-DdCfE.js";/* empty css             */import{c as k}from"./icon-OfanrlKw.js";import{c as A}from"./storybook-helpers-CD2gtCTp.js";const u=({tabs:a=[],activeIndex:t=0,onChange:o=()=>{}})=>{const s=document.createElement("div");return s.className="tabs",a.forEach((n,i)=>{const e=document.createElement("button");if(e.className="tab",i===t&&e.classList.add("tab--active"),n.disabled&&e.classList.add("tab--disabled"),n.icon){const p=k({symbol:n.icon,size:"small",useMaterial:!0});p.classList.add("tab-icon"),e.appendChild(p)}e.appendChild(document.createTextNode(n.label)),n.disabled||e.addEventListener("click",()=>{o(i)}),s.appendChild(e)}),s},F={title:"Components/Tabs",tags:["autodocs"],render:a=>u(a),parameters:{docs:{description:{component:["Tabs allow users to quickly navigate between related views.","","## Available Classes:","- `.tabs` → wrapper around tab buttons","- `.tab` → base tab button","- `.tab--active` → active tab (primary color + underline)","- `.tab--disabled` → disabled state with reduced opacity","- `.tab-icon` → icon inside the tab (optional)","","## Behavior:","- Clicking a tab triggers `onChange(index)`.","- Disabled tabs cannot be selected.","","## HTML Example:","```html",'<div class="tabs">','  <button class="tab tab--active">','    <span class="material-symbols-outlined tab-icon">home</span>',"    Home","  </button>",'  <button class="tab">','    <span class="material-symbols-outlined tab-icon">settings</span>',"    Settings","  </button>","</div>","```"].join(`
`)}}},argTypes:{tabs:{control:"object",description:"Array of tab objects"},activeIndex:{control:{type:"select"},options:[0,1],labels:{0:"Tab 1",1:"Tab 2"},description:"Index of the currently active tab"},onChange:{action:"tab changed",description:"Fires when tab is changed"}}},c=(a={})=>{const t=A("120px","1rem"),o=[{label:"Domů"},{label:"Profil"},{label:"Nastavení",disabled:!0}];let s=a.activeIndex??0;const n=Array.isArray(a.tabs)?a.tabs:o,i=()=>{t.innerHTML="";const e=u({tabs:n,activeIndex:s,onChange:p=>{s=p,i()}});t.appendChild(e)};return i(),t};c.args={activeIndex:0,tabs:[{label:"Domů"},{label:"Profil"},{label:"Nastavení",disabled:!0}]};const l=()=>{const a=A("120px"),t=u({tabs:[{label:"Domů"},{label:"Zprávy"},{label:"Nastavení"}],activeIndex:1}),o=u({tabs:[{label:"Hudba",icon:"music_note"},{label:"Video",icon:"movie"},{label:"Obrázky",icon:"photo"}],activeIndex:0});return a.appendChild(t),a.appendChild(o),a};l.parameters={docs:{description:{story:"Examples of basic tabs and tabs with Material icons."}},backgrounds:{default:"soft neutral",values:[{name:"soft neutral",value:"#EDEDED"},{name:"light surface",value:"#F4F4F4"},{name:"dark gray",value:"#2E2E2E"}]}};const r={args:{tabs:[{label:"Přehled"},{label:"Detail"},{label:"Nastavení"}],activeIndex:0}};r.storyName="Simple Tabs";r.parameters={docs:{description:{story:["Basic example of tabs without icons or disabled states.","","```html",'<div class="tabs">','  <button class="tab tab--active">Přehled</button>','  <button class="tab">Detail</button>','  <button class="tab">Nastavení</button>',"</div>","```"].join(`
`)}}};const b={args:{tabs:[{label:"Mapy",icon:"map"},{label:"Trasy",icon:"directions_bike"},{label:"Body",icon:"place"}],activeIndex:2}};b.parameters={docs:{description:{story:["**Tabs with icons** — display Material icons next to tab labels.","","```html",'<div class="tabs">','  <button class="tab">','    <span class="material-symbols-outlined tab-icon">map</span>',"    Mapy","  </button>","</div>","```"].join(`
`)}}};const d={args:{tabs:[{label:"Aktivní"},{label:"Nepřístupné",disabled:!0}],activeIndex:0}};d.parameters={docs:{description:{story:["**Disabled tabs** — tabs that cannot be selected, styled with `.tab--disabled`.","","```html",'<div class="tabs">','  <button class="tab tab--disabled">Nepřístupné</button>',"</div>","```"].join(`
`)}}};var m,v,h;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`(args = {}) => {
  const wrapper = createStoryWrapper('120px', '1rem');
  const defaultTabs = [{
    label: 'Domů'
  }, {
    label: 'Profil'
  }, {
    label: 'Nastavení',
    disabled: true
  }];
  let currentActiveIndex = args.activeIndex ?? 0;
  const tabs = Array.isArray(args.tabs) ? args.tabs : defaultTabs;
  const renderTabs = () => {
    wrapper.innerHTML = '';
    const instance = createTabs({
      tabs,
      activeIndex: currentActiveIndex,
      onChange: index => {
        currentActiveIndex = index;
        renderTabs();
      }
    });
    wrapper.appendChild(instance);
  };
  renderTabs();
  return wrapper;
}`,...(h=(v=c.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var x,y,g;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const wrapper = createStoryWrapper('120px');
  const basic = createTabs({
    tabs: [{
      label: 'Domů'
    }, {
      label: 'Zprávy'
    }, {
      label: 'Nastavení'
    }],
    activeIndex: 1
  });
  const withIcons = createTabs({
    tabs: [{
      label: 'Hudba',
      icon: 'music_note'
    }, {
      label: 'Video',
      icon: 'movie'
    }, {
      label: 'Obrázky',
      icon: 'photo'
    }],
    activeIndex: 0
  });
  wrapper.appendChild(basic);
  wrapper.appendChild(withIcons);
  return wrapper;
}`,...(g=(y=l.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var T,I,w;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    tabs: [{
      label: 'Přehled'
    }, {
      label: 'Detail'
    }, {
      label: 'Nastavení'
    }],
    activeIndex: 0
  }
}`,...(w=(I=r.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var E,f,D;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    tabs: [{
      label: 'Mapy',
      icon: 'map'
    }, {
      label: 'Trasy',
      icon: 'directions_bike'
    }, {
      label: 'Body',
      icon: 'place'
    }],
    activeIndex: 2
  }
}`,...(D=(f=b.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var C,N,S;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    tabs: [{
      label: 'Aktivní'
    }, {
      label: 'Nepřístupné',
      disabled: true
    }],
    activeIndex: 0
  }
}`,...(S=(N=d.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const H=["LiveExample","Showcase","SimpleTabs","WithIcons","DisabledTab"];export{d as DisabledTab,c as LiveExample,l as Showcase,r as SimpleTabs,b as WithIcons,H as __namedExportsOrder,F as default};
