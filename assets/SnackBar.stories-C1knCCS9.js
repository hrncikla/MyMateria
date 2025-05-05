/* empty css             */import{c as p}from"./storybook-helpers-CD2gtCTp.js";const u=({text:a="Upozornění",actionLabel:n="",duration:e=3e3,onAction:r=()=>{},onClose:U=()=>{}})=>{const t=document.createElement("div");t.className="snackbar snackbar--open";const b=document.createElement("div");if(b.className="snackbar__text",b.textContent=a,t.appendChild(b),n){const l=document.createElement("button");l.className="snackbar__action",l.textContent=n,l.addEventListener("click",()=>{r(),t.remove()}),t.appendChild(l)}return document.body.appendChild(t),setTimeout(()=>{t.remove(),U()},e),t},W={title:"Components/Snackbar",tags:["autodocs"],render:a=>u(a),parameters:{docs:{description:{component:["Snackbar provides brief messages about app processes at the bottom of the screen.","","## Structure and Classes","- `.snackbar` – root container; `position: fixed`, styled for bottom alignment","- `.snackbar--open` – triggers entry animation (`snackbar-fade-in`)","- `.snackbar__text` – message content; uses `body-medium` typography (size 14px)","- `.snackbar__action` – optional button with filled look and `label-large` text (size 14px)","","## Styles and Tokens Used","- `--md-sys-color-inverse-surface` → background of snackbar","- `--md-sys-color-inverse-on-surface` → color of message text","- `--md-sys-color-primary` → action button text color","- `--md-sys-shape-corner-large` → border-radius","- `@include button-base` and `button-style()` for button styling","","## Behavior","- Auto-dismiss after a set `duration` (default 3s)","- Click on action triggers optional callback","- Use `onClose()` if programmatically dismissed","---","","## Example HTML","```html",'<div class="snackbar snackbar--open">','  <div class="snackbar__text">Změny byly uloženy.</div>','  <button class="snackbar__action">Zpět</button>',"</div>","```","","### ℹ️ Usage Notes","","> Snackbar should not interrupt the user, nor require confirmation. Use dialog for critical actions.","","---",""].join(`
`)}}},argTypes:{text:{control:"text"},actionLabel:{control:"text"},duration:{control:{type:"number",min:1e3,step:500}}},args:{text:"Změny byly úspěšně uloženy.",actionLabel:"Zpět",duration:3e3}},s=a=>{const n=p("120px"),e=document.createElement("button");return e.className="button button--filled",e.textContent="Zobrazit snackbar",e.addEventListener("click",()=>u(a)),n.appendChild(e),n};s.storyName="Live Example";s.parameters={docs:{description:{story:"Interactive snackbar with the ability to edit text, action and display duration."}},options:{showPanel:!1},story:{disable:!0}};const o=()=>{const a=p("120px");return[{text:"Saved",duration:2500},{text:"Error while saving",actionLabel:"Retry"},{text:"Message sent",actionLabel:"Undo"}].forEach(e=>{const r=document.createElement("button");r.className="button button--filled",r.textContent=`Show: ${e.text}`,r.addEventListener("click",()=>u(e)),a.appendChild(r)}),a};o.parameters={docs:{description:{story:["Example with interactive buttons that trigger various snackbar messages.","","```js",'createSnackbar({ text: "Saved", duration: 2500 });','createSnackbar({ text: "Error while saving", actionLabel: "Retry" });','createSnackbar({ text: "Message sent", actionLabel: "Undo" });',"```"].join(`
`)}},backgrounds:{default:"soft neutral",values:[{name:"soft neutral",value:"#EDEDED"},{name:"light surface",value:"#F4F4F4"},{name:"dark gray",value:"#2E2E2E"}]}};const c=()=>{const a=p("120px");return a.innerHTML=`
    <div class="snackbar snackbar--open">
      <div class="snackbar__text">Changes have been saved.</div>
      <button class="snackbar__action">Undo</button>
    </div>
  `,a};c.parameters={docs:{description:{story:["**Default snackbar** — basic message and action structure.","","```html",'<div class="snackbar snackbar--open">','  <div class="snackbar__text">Changes have been saved.</div>','  <button class="snackbar__action">Undo</button>',"</div>","```"].join(`
`)}}};const i=()=>{const a=p("120px");return a.innerHTML=`
    <div class="snackbar snackbar--open">
      <div class="snackbar__text">Your changes were automatically saved. This message will disappear in a few seconds.</div>
    </div>
  `,a};i.parameters={docs:{description:{story:["**Snackbar with long text** — displays an extended message with no action.","","```html",'<div class="snackbar snackbar--open">','  <div class="snackbar__text">Your changes were automatically saved. This message will disappear in a few seconds.</div>',"</div>","```"].join(`
`)}}};const d=()=>{const a=p("120px");return a.innerHTML=`
    <div class="snackbar snackbar--open">
      <div class="snackbar__text">Automatic notification with no action</div>
    </div>
  `,a};d.parameters={docs:{description:{story:["**Snackbar without action** — only displays a message, no buttons.","","```html",'<div class="snackbar snackbar--open">','  <div class="snackbar__text">Automatic notification with no action</div>',"</div>","```"].join(`
`)}}};var m,k,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const wrapper = createStoryWrapper("120px");
  const btn = document.createElement('button');
  btn.className = 'button button--filled';
  btn.textContent = 'Zobrazit snackbar';
  btn.addEventListener('click', () => createSnackbar(args));
  wrapper.appendChild(btn);
  return wrapper;
}`,...(v=(k=s.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var x,g,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const wrapper = createStoryWrapper('120px');
  const examples = [{
    text: 'Saved',
    duration: 2500
  }, {
    text: 'Error while saving',
    actionLabel: 'Retry'
  }, {
    text: 'Message sent',
    actionLabel: 'Undo'
  }];
  examples.forEach(args => {
    const btn = document.createElement('button');
    btn.className = 'button button--filled';
    btn.textContent = \`Show: \${args.text}\`;
    btn.addEventListener('click', () => createSnackbar(args));
    wrapper.appendChild(btn);
  });
  return wrapper;
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,w,f;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const wrapper = createStoryWrapper('120px');
  wrapper.innerHTML = \`
    <div class="snackbar snackbar--open">
      <div class="snackbar__text">Changes have been saved.</div>
      <button class="snackbar__action">Undo</button>
    </div>
  \`;
  return wrapper;
}`,...(f=(w=c.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var _,S,E;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const wrapper = createStoryWrapper('120px');
  wrapper.innerHTML = \`
    <div class="snackbar snackbar--open">
      <div class="snackbar__text">Your changes were automatically saved. This message will disappear in a few seconds.</div>
    </div>
  \`;
  return wrapper;
}`,...(E=(S=i.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var L,C,T;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const wrapper = createStoryWrapper('120px');
  wrapper.innerHTML = \`
    <div class="snackbar snackbar--open">
      <div class="snackbar__text">Automatic notification with no action</div>
    </div>
  \`;
  return wrapper;
}`,...(T=(C=d.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const H=["LiveExample","Showcase","DefaultSnackbar","LongTextSnackbar","WithoutActionSnackbar"];export{c as DefaultSnackbar,s as LiveExample,i as LongTextSnackbar,o as Showcase,d as WithoutActionSnackbar,H as __namedExportsOrder,W as default};
