/* empty css             */import{c as K}from"./icon-OfanrlKw.js";const v=({content:e="",variant:a="error",dot:t=!1}={})=>{const n=document.createElement("div");n.className="badge-wrapper";const r=document.createElement("div");return r.classList.add("badge",`badge--${a}`),t?(r.classList.add("badge--dot"),r.textContent=""):r.textContent=e,n.appendChild(r),n},f=({child:e,content:a="",variant:t="error",dot:n=!1})=>{const r=document.createElement("div");r.className="badge-wrapper",r.style.position="relative",r.style.display="inline-block",r.appendChild(e);const y=v({content:a,variant:t,dot:n});return r.appendChild(y.querySelector(".badge")),r},Y={title:"Components/Badge",tags:["autodocs"],render:e=>v(e),parameters:{docs:{description:{component:["The badge is a small status indicator component used to show alerts, counts or dots.","","### Badge Variants","- **Default**: Appears with error color and number inside.","- **Dot**: Small circle indicator with no content.","- **Info / Success / Warning**: Contextual color variants for different types of alerts.","","### Typical Usage","Badges are usually placed over:","- Icons (e.g., Notification)","- Buttons (e.g., Messages)","- Avatars (e.g., Online status)","","They must be wrapped inside a `.badge-wrapper` container to ensure correct positioning.","","```html",'<div class="badge-wrapper">','  <button class="button">Inbox</button>','  <div class="badge badge--info">5</div>',"</div>","",'<div class="badge-wrapper">','  <span class="material-symbols-outlined icon">',"     account_circle","  </span>",'  <div class="badge badge--success badge--dot"></div>',"</div>","","```"].join(`
`)}}},argTypes:{content:{control:"text"},variant:{control:{type:"select"},options:["error","info","success","warning"]},dot:{control:"boolean"}},args:{content:"128+",variant:"error",dot:!1}},o=e=>{const a=document.createElement("div");a.style.display="flex",a.style.justifyContent="center",a.style.alignItems="center",a.style.padding="2rem",a.style.minHeight="8rem",a.style.backgroundColor="var(--md-sys-color-surface-variant)",a.style.borderRadius="1rem",a.style.overflow="hidden";const t=v(e);return a.appendChild(t),a};o.storyName="Live Example";o.parameters={docs:{description:{story:"Interactive badge component. Use the controls to toggle variant, dot, or text."}},options:{showPanel:!1},story:{disable:!0}};const c=()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="2rem",[{variant:"error",label:"5"},{variant:"info",label:"i"},{variant:"success",label:"✔"},{variant:"warning",label:"!"},{variant:"error",label:"",dot:!0}].forEach(({variant:t,label:n,dot:r})=>{const y=v({variant:t,content:n,dot:r}),s=document.createElement("div");s.className="badge-wrapper",s.style.width="2rem",s.style.height="2rem",s.style.backgroundColor="var(--md-sys-color-surface-variant)",s.style.borderRadius="0.5rem",s.appendChild(y.querySelector(".badge")),e.appendChild(s)}),e};c.parameters={docs:{description:{story:"Static examples of all badge variants (default, info, success, warning, dot)."}},backgrounds:{default:"soft neutral",values:[{name:"soft neutral",value:"#EDEDED"},{name:"light surface",value:"#F4F4F4"},{name:"dark gray",value:"#2E2E2E"}]}};const d={args:{variant:"error",content:"3",dot:!1}};d.parameters={docs:{description:{story:'\nDefault badge displays an error-colored pill with number.\n\n**Background:** `var(--md-sys-color-error)`  \n**Text:** `var(--md-sys-color-on-error)`\n\n```html\n<div class="badge badge--error">3</div>\n```\n      '}}};const i={args:{variant:"error",dot:!0}};i.parameters={docs:{description:{story:'\nDot badge is a minimal indicator without text.\n\n**Background:** `var(--md-sys-color-error)`  \n**Text:** `var(--md-sys-color-on-error)`\n\n```html\n<div class="badge badge--error badge--dot"></div>\n```\n      '}}};const l={args:{variant:"info",content:"i"}};l.parameters={docs:{description:{story:'\nInfo badge uses informational secondary color.\n\n**Background:** `var(--md-sys-color-info)`  \n**Text:** `var(--md-sys-color-on-info)`\n\n```html\n<div class="badge badge--info">i</div>\n```\n      '}}};const p={args:{variant:"success",content:"✔"}};p.parameters={docs:{description:{story:'\nSuccess badge indicates a positive action.\n\n**Background:** `var(--md-sys-color-success)`  \n**Text:** `var(--md-sys-color-on-success)`\n\n```html\n<div class="badge badge--success">✔</div>\n```\n      '}}};const u={args:{variant:"warning",content:"!"}};u.parameters={docs:{description:{story:'\nWarning badge shows caution or alert.\n\n**Background:** `var(--md-sys-color-tertiary)`  \n**Text:** `var(--md-sys-color-on-tertiary)`\n\n```html\n<div class="badge badge--warning">!</div>\n```\n      '}}};const m=()=>{const e=K({symbol:"notifications",size:"large",useMaterial:!0});return f({child:e,content:"3",variant:"error"})};m.parameters={docs:{description:{story:`
**Badge on Icon** — attaches a badge to a Material icon (e.g., notifications).

\`\`\`html
<div class="badge-wrapper">
  <span class="material-symbols-outlined icon icon--large">notifications</span>
  <div class="badge badge--error">3</div>
</div>
\`\`\`
      `}}};const g=()=>{const e=K({symbol:"account_circle",useMaterial:!0});return f({child:e,dot:!0,variant:"success"})};g.parameters={docs:{description:{story:`
**Dot Badge on Avatar** — attaches a small dot badge to an avatar to indicate presence.

\`\`\`html
<div class="badge-wrapper">
  <span class="material-symbols-outlined icon">
    account_circle
  </span>
  <div class="badge badge--success badge--dot"></div>
</div>
\`\`\`
      `}}};const b=()=>{const e=document.createElement("button");return e.className="button button--filled",e.textContent="Messages",f({child:e,content:"New",variant:"success"})};b.parameters={docs:{description:{story:`
**Badge on Button** — attaches a badge to a button element.

\`\`\`html
<div class="badge-wrapper">
  <button class="button button--filled">Messages</button>
  <div class="badge badge--success">New</div>
</div>
\`\`\`
      `}}};var h,w,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.justifyContent = 'center';
  wrapper.style.alignItems = 'center';
  wrapper.style.padding = '2rem';
  wrapper.style.minHeight = '8rem';
  wrapper.style.backgroundColor = 'var(--md-sys-color-surface-variant)';
  wrapper.style.borderRadius = '1rem';
  wrapper.style.overflow = 'hidden';
  const badge = createBadge(args);
  wrapper.appendChild(badge);
  return wrapper;
}`,...(x=(w=o.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var B,E,C;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '2rem';
  const badgeVariants = [{
    variant: 'error',
    label: '5'
  }, {
    variant: 'info',
    label: 'i'
  }, {
    variant: 'success',
    label: '✔'
  }, {
    variant: 'warning',
    label: '!'
  }, {
    variant: 'error',
    label: '',
    dot: true
  }];
  badgeVariants.forEach(({
    variant,
    label,
    dot
  }) => {
    const badge = createBadge({
      variant,
      content: label,
      dot
    });
    const box = document.createElement('div');
    box.className = 'badge-wrapper';
    box.style.width = '2rem';
    box.style.height = '2rem';
    box.style.backgroundColor = 'var(--md-sys-color-surface-variant)';
    box.style.borderRadius = '0.5rem';
    box.appendChild(badge.querySelector('.badge'));
    container.appendChild(box);
  });
  return container;
}`,...(C=(E=c.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var S,I,k;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    content: '3',
    dot: false
  }
}`,...(k=(I=d.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var D,N,M;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    dot: true
  }
}`,...(M=(N=i.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var T,O,W;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    content: 'i'
  }
}`,...(W=(O=l.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var _,A,L;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    content: '✔'
  }
}`,...(L=(A=p.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var V,R,j;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    content: '!'
  }
}`,...(j=(R=u.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var q,F,z;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const icon = createIcon({
    symbol: 'notifications',
    size: 'large',
    useMaterial: true
  });
  return createBadgeWrapper({
    child: icon,
    content: '3',
    variant: 'error'
  });
}`,...(z=(F=m.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var H,U,P;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const avatar = createIcon({
    symbol: 'account_circle',
    useMaterial: true
  });
  return createBadgeWrapper({
    child: avatar,
    dot: true,
    variant: 'success'
  });
}`,...(P=(U=g.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var $,G,J;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const button = document.createElement('button');
  button.className = 'button button--filled';
  button.textContent = 'Messages';
  return createBadgeWrapper({
    child: button,
    content: 'New',
    variant: 'success'
  });
}`,...(J=(G=b.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const Z=["LiveExample","Showcase","Default","Dot","Info","Success","Warning","BadgeOnIcon","BadgeOnAvatar","BadgeOnButton"];export{g as BadgeOnAvatar,b as BadgeOnButton,m as BadgeOnIcon,d as Default,i as Dot,l as Info,o as LiveExample,c as Showcase,p as Success,u as Warning,Z as __namedExportsOrder,Y as default};
