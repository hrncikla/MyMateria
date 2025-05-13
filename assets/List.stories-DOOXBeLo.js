/* empty css             */import{c as Z}from"./icon-OfanrlKw.js";const g=({items:e=[],onSelect:K=()=>{}})=>{const x=document.createElement("div");return x.className="list",e.forEach((t,U)=>{const i=document.createElement("div");if(i.className="list__item",t.selected&&i.classList.add("list__item--selected"),t.disabled&&i.classList.add("list__item--disabled"),t.icon){const s=Z({symbol:t.icon,useMaterial:!0,size:"default"});s.classList.add("list__icon"),i.appendChild(s)}const u=document.createElement("div");u.className="list__text";const _=document.createElement("div");if(_.className="list__text-main",_.textContent=t.text||t.label||"Item",u.appendChild(_),t.supportingText){const s=document.createElement("div");s.className="list__text-supporting",s.textContent=t.supportingText,u.appendChild(s)}if(i.appendChild(u),t.meta){const s=document.createElement("div");s.className="list__meta",s.textContent=t.meta,i.appendChild(s)}t.disabled||i.addEventListener("click",()=>K(U)),x.appendChild(i)}),x},J={title:"Components/List",tags:["autodocs"],render:e=>g(e),parameters:{docs:{description:{component:["The List component displays related content in a structured form.","","## Structure","- Optional leading icon (`.list__icon`)","- Main text (`.list__text-main`)","- Optional supporting text (`.list__text-supporting`)","- Optional meta text on right (`.list__meta`)","","## State classes","- `.list__item--selected` — highlights the selected item.","- `.list__item--disabled` — non-interactive, reduced opacity.","","## HTML Example","```html",'<div class="list">','  <div class="list__item">','    <span class="material-symbols-outlined list__icon">folder</span>','    <div class="list__text">','      <div class="list__text-main">Documents</div>','      <div class="list__text-supporting">1 GB free</div>',"    </div>",'    <div class="list__meta">Yesterday</div>',"  </div>","</div>","```"].join(`
`)}}}},a=e=>g({items:[{icon:e.iconEnabled?"folder":"",text:e.text||"Documents",supportingText:e.supportingText||"1 GB free",meta:e.meta||"Yesterday",selected:e.selected,disabled:e.disabled}]});a.storyName="Live Example";a.argTypes={iconEnabled:{control:"boolean",defaultValue:!0,description:"Toggle leading icon"},text:{control:"text",defaultValue:"Documents",description:"Main text content"},supportingText:{control:"text",defaultValue:"1 GB free",description:"Supporting text (optional)"},meta:{control:"text",defaultValue:"Yesterday",description:"Meta info (right aligned)"},selected:{control:"boolean",defaultValue:!1,description:"Mark as selected"},disabled:{control:"boolean",defaultValue:!1,description:"Mark as disabled"}};a.args={iconEnabled:!0,text:"Documents",supportingText:"1 GB free",meta:"Yesterday",selected:!1,disabled:!1};a.parameters={docs:{description:{story:"Interactive list item example with editable icon visibility, main text, supporting text, meta, selected and disabled states. Default values are prefilled for convenience."}},options:{showPanel:!1},story:{disable:!0}};const n=()=>g({items:[{icon:"mail",text:"Zprávy",supportingText:"5 nových",meta:"12:00"},{icon:"call",text:"Hovory",supportingText:"Nepřijatý",meta:"včera"},{icon:"event",text:"Kalendář",meta:"zítra"},{icon:"lock",text:"Uzamčeno",disabled:!0}]});n.parameters={docs:{description:{story:"Examples of different list item types — icons, supporting text, meta, disabled."}}};const r={args:{items:[{text:"Basic text only"}]}};r.parameters={docs:{description:{story:'```html\n<div class="list__item">Basic text only</div>\n```'}}};const o={args:{items:[{text:"Main text",supportingText:"Supporting info"}]}};o.parameters={docs:{description:{story:`\`\`\`html
<div class="list__item">
  <div class="list__text">
    <div class="list__text-main">Main text</div>
    <div class="list__text-supporting">Supporting info</div>
  </div>
</div>
\`\`\``}}};const l={args:{items:[{text:"Item text",meta:"Today"}]}};l.parameters={docs:{description:{story:'```html\n<div class="list__item">\n  <div class="list__text-main">Item text</div>\n  <div class="list__meta">Today</div>\n</div>\n```'}}};const c={args:{items:[{icon:"folder",text:"Full item",supportingText:"Supporting",meta:"Yesterday"}]}};c.parameters={docs:{description:{story:`\`\`\`html
<div class="list__item">
  <span class="material-symbols-outlined list__icon">folder</span>
  <div class="list__text">
    <div class="list__text-main">Full item</div>
    <div class="list__text-supporting">Supporting</div>
  </div>
  <div class="list__meta">Yesterday</div>
</div>
\`\`\``}}};const d={args:{items:[{icon:"star"}]}};d.parameters={docs:{description:{story:'```html\n<div class="list__item">\n  <span class="material-symbols-outlined list__icon">star</span>\n</div>\n```'}}};const m={args:{items:[{text:"Default"},{text:"Selected",selected:!0},{text:"Another"}]}};m.parameters={docs:{description:{story:'```html\n<div class="list__item list__item--selected">Selected</div>\n```'}}};const p={args:{items:[{text:"Active"},{text:"Disabled",disabled:!0}]}};p.parameters={docs:{description:{story:'```html\n<div class="list__item list__item--disabled">Disabled</div>\n```'}}};var v,f,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return createList({
    items: [{
      icon: args.iconEnabled ? 'folder' : '',
      text: args.text || 'Documents',
      supportingText: args.supportingText || '1 GB free',
      meta: args.meta || 'Yesterday',
      selected: args.selected,
      disabled: args.disabled
    }]
  });
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,h,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const list = createList({
    items: [{
      icon: 'mail',
      text: 'Zprávy',
      supportingText: '5 nových',
      meta: '12:00'
    }, {
      icon: 'call',
      text: 'Hovory',
      supportingText: 'Nepřijatý',
      meta: 'včera'
    }, {
      icon: 'event',
      text: 'Kalendář',
      meta: 'zítra'
    }, {
      icon: 'lock',
      text: 'Uzamčeno',
      disabled: true
    }]
  });
  return list;
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var T,E,I;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Basic text only'
    }]
  }
}`,...(I=(E=r.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var D,L,M;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Main text',
      supportingText: 'Supporting info'
    }]
  }
}`,...(M=(L=o.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var B,C,N;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Item text',
      meta: 'Today'
    }]
  }
}`,...(N=(C=l.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var Y,F,W;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    items: [{
      icon: 'folder',
      text: 'Full item',
      supportingText: 'Supporting',
      meta: 'Yesterday'
    }]
  }
}`,...(W=(F=c.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var O,V,k;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    items: [{
      icon: 'star'
    }]
  }
}`,...(k=(V=d.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var z,G,w;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Default'
    }, {
      text: 'Selected',
      selected: true
    }, {
      text: 'Another'
    }]
  }
}`,...(w=(G=m.parameters)==null?void 0:G.docs)==null?void 0:w.source}}};var A,j,H;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Active'
    }, {
      text: 'Disabled',
      disabled: true
    }]
  }
}`,...(H=(j=p.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};const Q=["LiveExample","Showcase","BasicItem","ItemWithSupportingText","ItemWithMeta","FullItem","IconOnly","WithSelection","DisabledItems"];export{r as BasicItem,p as DisabledItems,c as FullItem,d as IconOnly,l as ItemWithMeta,o as ItemWithSupportingText,a as LiveExample,n as Showcase,m as WithSelection,Q as __namedExportsOrder,J as default};
