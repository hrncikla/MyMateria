import{f as I}from"./index-BB-DdCfE.js";/* empty css             */import{c as b}from"./storybook-helpers-CD2gtCTp.js";const c=({title:e="Dialog Title",content:n="This is the content of the dialog.",type:a="",fullscreen:t=!1,showClose:l=!0,onClose:r=()=>{},actions:v=[]})=>{const d=document.createElement("div");d.className="dialog-overlay dialog-overlay--open";const s=document.createElement("div");if(s.classList.add("dialog"),t&&s.classList.add("dialog--fullscreen"),a&&s.classList.add(`dialog--${a}`),l){const o=document.createElement("button");o.className="dialog__close",o.innerHTML="&times;",o.addEventListener("click",()=>{r(),d.remove()}),s.appendChild(o)}if(e){const o=document.createElement("div");o.className="dialog__title",o.textContent=e,s.appendChild(o)}if(n){const o=document.createElement("div");o.className="dialog__content",o.textContent=n,s.appendChild(o)}if(v.length>0){const o=document.createElement("div");o.className="dialog__actions",v.forEach(({label:R,onClick:Z=()=>{}})=>{const h=document.createElement("button");h.className="button button--text",h.textContent=R,h.addEventListener("click",()=>{Z(),d.remove()}),o.appendChild(h)}),s.appendChild(o)}return d.appendChild(s),d},H={title:"Components/Dialog",tags:["autodocs"],render:e=>c(e),parameters:{docs:{description:{component:["Dialogs communicate important information that requires user attention. They follow the Material Design 3 guidelines and come in multiple variants to reflect purpose and hierarchy.","","### Dialog Features","- **Modal presentation** with dimmed overlay","- **Optional close icon** in top right","- **Title and body content support**","- **Action buttons** for confirmation, cancellation or alternatives","- **Variants**:","  - **Standard** (default)","  - **Alert** (emphasizes danger or error)","  - **Info** (supportive messaging)","  - **Fullscreen** (mobile-focused or large content)","","### Available Classes","- `.dialog` — base dialog container","- `.dialog--alert` — alert variant (uses `--md-sys-color-error-container`)","- `.dialog--info` — info variant (uses `--md-sys-color-secondary-container`)","- `.dialog--fullscreen` — full viewport coverage","- `.dialog__title` — title section","- `.dialog__content` — body content","- `.dialog__actions` — actions container","- `.dialog__close` — top-right close button","- `.dialog-overlay` — background dimming with focus trap","","### HTML Example","```html",'<div class="dialog-overlay dialog-overlay--open">','  <div class="dialog dialog--alert">','    <button class="dialog__close">&times;</button>','    <div class="dialog__title">Error</div>','    <div class="dialog__content">Something went wrong.</div>','    <div class="dialog__actions">','      <button class="button button--text">Cancel</button>','      <button class="button button--text">Retry</button>',"    </div>","  </div>","</div>","```"].join(`
`)}}},argTypes:{title:{control:"text"},content:{control:"text"},type:{control:{type:"select"},options:["","alert","info"]},fullscreen:{control:"boolean"},showClose:{control:"boolean"},onClose:{action:"closed"}},args:{title:"Upozornění",content:"Toto je obsah dialogu.",type:"",fullscreen:!1,showClose:!0,onClose:I()}},i=e=>{const n=b(),a=()=>{const l=c({...e,onClose:()=>{t()}});n.appendChild(l)},t=()=>{const l=document.createElement("button");l.className="button button--filled button--small",l.textContent="Znovu zobrazit dialog",l.style.alignSelf="center",l.addEventListener("click",()=>{l.remove(),a()}),n.appendChild(l)};return a(),n};i.storyName="Live Example";i.args={title:"Upozornění",content:"Toto je obsah dialogu.",type:"",fullscreen:!1,showClose:!0};i.parameters={docs:{description:{story:"Interaktivní dialog s možností upravit režim, styl, obsah i akce."}},options:{showPanel:!1},story:{disable:!0}};const p=()=>{const e=b(),n=[{type:"",title:"Standardní dialog",content:"Běžný dialog."},{type:"alert",title:"Chyba",content:"Něco se pokazilo."},{type:"info",title:"Informace",content:"Toto je doplňující zpráva."}];let a=0;const t=()=>{e.innerHTML="",a=n.length,n.forEach(r=>{const v=c({...r,showClose:!0,onClose:()=>{a--,a===0&&l()},actions:[{label:"Zavřít"}]});e.appendChild(v)})},l=()=>{const r=document.createElement("button");r.className="button button--filled button--small",r.textContent="Znovu zobrazit dialogy",r.style.alignSelf="center",r.addEventListener("click",()=>{r.remove(),t()}),e.appendChild(r)};return t(),e};p.parameters={docs:{description:{story:"Ukázka základních typů dialogu: standard, alert a info."}}};const u=()=>{const e=b(),n=()=>{const t=c({type:"alert",showClose:!0,onClose:()=>{a()}});e.appendChild(t)},a=()=>{const t=document.createElement("button");t.className="button button--filled button--small",t.textContent="Znovu zobrazit dialog",t.style.alignSelf="center",t.addEventListener("click",()=>{t.remove(),n()}),e.appendChild(t)};return n(),e};u.parameters={docs:{description:{story:`
**Alert dialog** – emphasizes critical information such as errors or warnings. It uses the background \`--md-sys-color-error-container\` and text \`--md-sys-color-on-error-container\`.

**HTML Example:**

\`\`\`html
<div class="dialog-overlay dialog-overlay--open">
  <div class="dialog dialog--alert">
    <button class="dialog__close">&times;</button>
    <div class="dialog__title">Error</div>
    <div class="dialog__content">Something went wrong.</div>
    <div class="dialog__actions">
      <button class="button button--text">Cancel</button>
      <button class="button button--text">Retry</button>
    </div>
  </div>
</div>
\`\`\`--md-sys-color-error-container\` a text \`--md-sys-color-on-error-container\`. Používá se pro důležitá varování.
      `}}};const g=()=>{const e=b(),n=()=>{const t=c({type:"info",showClose:!0,onClose:()=>{a()}});e.appendChild(t)},a=()=>{const t=document.createElement("button");t.className="button button--filled button--small",t.textContent="Znovu zobrazit dialog",t.style.alignSelf="center",t.addEventListener("click",()=>{t.remove(),n()}),e.appendChild(t)};return n(),e};g.parameters={docs:{description:{story:`
**Info dialog** – provides non-critical information. It uses \`--md-sys-color-secondary-container\` and \`--md-sys-color-on-secondary-container\`.

**HTML Example:**

\`\`\`html
<div class="dialog-overlay dialog-overlay--open">
  <div class="dialog dialog--info">
    <button class="dialog__close">&times;</button>
    <div class="dialog__title">Information</div>
    <div class="dialog__content">This is an informational message.</div>
    <div class="dialog__actions">
      <button class="button button--text">Dismiss</button>
    </div>
  </div>
</div>
\`\`\`--md-sys-color-secondary-container\` a \`--md-sys-color-on-secondary-container\`.
      `}}};const m=()=>{const e=b(),n=()=>{const t=c({fullscreen:!0,showClose:!0,onClose:()=>{a()}});e.appendChild(t)},a=()=>{const t=document.createElement("button");t.className="button button--filled button--small",t.textContent="Znovu zobrazit dialog",t.style.alignSelf="center",t.addEventListener("click",()=>{t.remove(),n()}),e.appendChild(t)};return n(),e};m.parameters={docs:{description:{story:`
**Fullscreen dialog** – optimized for mobile views or large content. Takes up the entire screen using \`.dialog--fullscreen\`.

**HTML Example:**

\`\`\`html
<div class="dialog-overlay dialog-overlay--open">
  <div class="dialog dialog--fullscreen">
    <button class="dialog__close">&times;</button>
    <div class="dialog__title">Fullscreen Mode</div>
    <div class="dialog__content">This dialog covers the entire screen.</div>
    <div class="dialog__actions">
      <button class="button button--text">Close</button>
    </div>
  </div>
</div>
\`\`\`,
      `}}};var y,f,C;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const wrapper = createStoryWrapper();
  const renderDialog = () => {
    const dialog = createDialog({
      ...args,
      onClose: () => {
        showReloadButton();
      }
    });
    wrapper.appendChild(dialog);
  };
  const showReloadButton = () => {
    const btn = document.createElement('button');
    btn.className = 'button button--filled button--small';
    btn.textContent = 'Znovu zobrazit dialog';
    btn.style.alignSelf = 'center';
    btn.addEventListener('click', () => {
      btn.remove();
      renderDialog();
    });
    wrapper.appendChild(btn);
  };
  renderDialog();
  return wrapper;
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var w,E,_;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const wrapper = createStoryWrapper();
  const types = [{
    type: '',
    title: 'Standardní dialog',
    content: 'Běžný dialog.'
  }, {
    type: 'alert',
    title: 'Chyba',
    content: 'Něco se pokazilo.'
  }, {
    type: 'info',
    title: 'Informace',
    content: 'Toto je doplňující zpráva.'
  }];
  let activeCount = 0;
  const renderDialogs = () => {
    wrapper.innerHTML = ''; // Resetuje wrapper
    activeCount = types.length;
    types.forEach(args => {
      const dialog = createDialog({
        ...args,
        showClose: true,
        onClose: () => {
          activeCount--;
          if (activeCount === 0) {
            showReloadButton();
          }
        },
        actions: [{
          label: 'Zavřít'
        }]
      });
      wrapper.appendChild(dialog);
    });
  };
  const showReloadButton = () => {
    const btn = document.createElement('button');
    btn.className = 'button button--filled button--small';
    btn.textContent = 'Znovu zobrazit dialogy';
    btn.style.alignSelf = 'center';
    btn.addEventListener('click', () => {
      btn.remove();
      renderDialogs();
    });
    wrapper.appendChild(btn);
  };
  renderDialogs();
  return wrapper;
}`,...(_=(E=p.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var D,x,z;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const wrapper = createStoryWrapper();
  const renderDialog = () => {
    const dialog = createDialog({
      type: 'alert',
      showClose: true,
      onClose: () => {
        showReloadButton();
      }
    });
    wrapper.appendChild(dialog);
  };
  const showReloadButton = () => {
    const btn = document.createElement('button');
    btn.className = 'button button--filled button--small';
    btn.textContent = 'Znovu zobrazit dialog';
    btn.style.alignSelf = 'center';
    btn.addEventListener('click', () => {
      btn.remove();
      renderDialog();
    });
    wrapper.appendChild(btn);
  };
  renderDialog();
  return wrapper;
}`,...(z=(x=u.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var S,L,k;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const wrapper = createStoryWrapper();
  const renderDialog = () => {
    const dialog = createDialog({
      type: 'info',
      showClose: true,
      onClose: () => {
        showReloadButton();
      }
    });
    wrapper.appendChild(dialog);
  };
  const showReloadButton = () => {
    const btn = document.createElement('button');
    btn.className = 'button button--filled button--small';
    btn.textContent = 'Znovu zobrazit dialog';
    btn.style.alignSelf = 'center';
    btn.addEventListener('click', () => {
      btn.remove();
      renderDialog();
    });
    wrapper.appendChild(btn);
  };
  renderDialog();
  return wrapper;
}`,...(k=(L=g.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var B,N,T;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const wrapper = createStoryWrapper();
  const renderDialog = () => {
    const dialog = createDialog({
      fullscreen: true,
      showClose: true,
      onClose: () => {
        showReloadButton();
      }
    });
    wrapper.appendChild(dialog);
  };
  const showReloadButton = () => {
    const btn = document.createElement('button');
    btn.className = 'button button--filled button--small';
    btn.textContent = 'Znovu zobrazit dialog';
    btn.style.alignSelf = 'center';
    btn.addEventListener('click', () => {
      btn.remove();
      renderDialog();
    });
    wrapper.appendChild(btn);
  };
  renderDialog();
  return wrapper;
}`,...(T=(N=m.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const A=["LiveExample","Showcase","AlertDialog","InfoDialog","FullscreenDialog"];export{u as AlertDialog,m as FullscreenDialog,g as InfoDialog,i as LiveExample,p as Showcase,A as __namedExportsOrder,H as default};
