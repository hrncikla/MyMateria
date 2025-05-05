/* empty css             */import{c as u}from"./storybook-helpers-CD2gtCTp.js";const r=({label:o="Tooltip",position:e="top",content:t="Nápověda k tlačítku",color:n=""})=>{const p=document.createElement("div");p.className=`tooltip tooltip--${e}`;const v=document.createElement("button");v.textContent=o,v.style.padding="0.5rem 1rem";const g=document.createElement("div");return g.className="tooltip__content",n&&g.classList.add(`tooltip__content--${n}`),g.textContent=t,p.appendChild(v),p.appendChild(g),p},U={title:"Components/Tooltip",tags:["autodocs"],render:o=>r(o),parameters:{docs:{description:{component:["The Tooltip component provides brief informative text when users hover or focus on an element.","","## Structure","- `.tooltip` — wrapper container","- `.tooltip__content` — tooltip content container (appears on hover/focus)","","## Positions","- `.tooltip--top` (default)","- `.tooltip--bottom`","- `.tooltip--left`","- `.tooltip--right`","","## Color Variants (on `.tooltip__content`)","- `.tooltip__content--success`","- `.tooltip__content--info`","- `.tooltip__content--warning`","- `.tooltip__content--error`","","## HTML Example","```html",'<div class="tooltip tooltip--top">',"  <button>Hover me</button>",'  <div class="tooltip__content tooltip__content--success">Success tooltip</div>',"</div>","```","","> **Accessibility tip:** Do not rely on tooltip content for critical information."].join(`
`)}}},argTypes:{label:{control:"text"},content:{control:"text"},position:{control:{type:"select"},options:["top","bottom","left","right"]},color:{control:{type:"select"},options:["","success","info","warning","error"]}},args:{label:"Hover me",content:"Tooltip content here",position:"top",color:""}},s={render:o=>{const e=u("120px","7rem"),t=r(o);return e.appendChild(t),e}};s.storyName="Live Example";s.parameters={docs:{description:{story:"Tooltip s možností zvolit pozici a upravit text."}},options:{showPanel:!1},story:{disable:!0}};const a=()=>{const o=document.createElement("div");return o.style.display="grid",o.style.gridTemplateColumns="repeat(auto-fit, minmax(140px, 1fr))",o.style.gap="2rem",o.style.padding="2rem",o.style.justifyItems="center",["top","bottom","left","right"].forEach(t=>{const n=r({label:t.charAt(0).toUpperCase()+t.slice(1),position:t,content:`Tooltip ${t}`});o.appendChild(n)}),o};a.parameters={docs:{description:{story:"Ukázka všech pozic tooltipu kolem prvku."}},backgrounds:{default:"soft neutral",values:[{name:"soft neutral",value:"#EDEDED"},{name:"light surface",value:"#F4F4F4"},{name:"dark gray",value:"#2E2E2E"}]}};const l={args:{position:"top"},render:o=>{const e=u("120px"),t=r(o);return e.appendChild(t),e}};l.parameters={docs:{description:{story:'Tooltip displayed above the element using `.tooltip--top` class.\n\n```html\n<div class="tooltip tooltip--top">\n  <button>Hover me</button>\n  <div class="tooltip__content">Tooltip text</div>\n</div>\n```'}}};const c={args:{position:"bottom"},render:o=>{const e=u("120px"),t=r(o);return e.appendChild(t),e}};c.parameters={docs:{description:{story:'Tooltip displayed below the element using `.tooltip--bottom` class.\n\n```html\n<div class="tooltip tooltip--bottom">\n  <button>Hover me</button>\n  <div class="tooltip__content">Tooltip text</div>\n</div>\n```'}}};const d={args:{position:"left"},render:o=>{const e=u("100px","7rem"),t=r(o);return e.appendChild(t),e}};d.parameters={docs:{description:{story:'Tooltip displayed to the left using `.tooltip--left` class.\n\n```html\n<div class="tooltip tooltip--left">\n  <button>Hover me</button>\n  <div class="tooltip__content">Tooltip text</div>\n</div>\n```'}}};const m={args:{position:"right"}};m.parameters={docs:{description:{story:'Tooltip displayed to the right using `.tooltip--right` class.\n\n```html\n<div class="tooltip tooltip--right">\n  <button>Hover me</button>\n  <div class="tooltip__content">Tooltip text</div>\n</div>\n```'}}};const i=()=>{const o=u();return[{label:"Success",color:"success"},{label:"Info",color:"info"},{label:"Warning",color:"warning"},{label:"Error",color:"error"}].forEach(({label:t,color:n})=>{const p=r({label:`${t}`,content:`${t} tooltip`,position:"top",color:n});o.appendChild(p)}),o};i.storyName="Color Variants";i.parameters={docs:{description:{story:["Showcase of all available tooltip color variants.","","**Available Color Classes:**","- `.tooltip__content--success` → success green background","- `.tooltip__content--info` → info blue background","- `.tooltip__content--warning` → warning yellow background","- `.tooltip__content--error` → error red background","","```html",'<div class="tooltip tooltip--top">',"  <button>Hover me</button>",'  <div class="tooltip__content tooltip__content--success">Success tooltip</div>',"</div>",'<div class="tooltip tooltip--top">',"  <button>Hover me</button>",'  <div class="tooltip__content tooltip__content--info">Info tooltip</div>',"</div>",'<div class="tooltip tooltip--top">',"  <button>Hover me</button>",'  <div class="tooltip__content tooltip__content--warning">Warning tooltip</div>',"</div>",'<div class="tooltip tooltip--top">',"  <button>Hover me</button>",'  <div class="tooltip__content tooltip__content--error">Error tooltip</div>',"</div>","```"].join(`
`)}}};var b,_,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    const wrapper = createStoryWrapper('120px', '7rem');
    const tooltip = createTooltip(args);
    wrapper.appendChild(tooltip);
    return wrapper;
  }
}`,...(h=(_=s.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var f,w,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'grid';
  wrapper.style.gridTemplateColumns = 'repeat(auto-fit, minmax(140px, 1fr))';
  wrapper.style.gap = '2rem';
  wrapper.style.padding = '2rem';
  wrapper.style.justifyItems = 'center';
  const positions = ['top', 'bottom', 'left', 'right'];
  positions.forEach(pos => {
    const tooltip = createTooltip({
      label: pos.charAt(0).toUpperCase() + pos.slice(1),
      position: pos,
      content: \`Tooltip \${pos}\`
    });
    wrapper.appendChild(tooltip);
  });
  return wrapper;
}`,...(y=(w=a.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var T,x,C;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    position: 'top'
  },
  render: args => {
    const wrapper = createStoryWrapper('120px');
    const tooltip = createTooltip(args);
    wrapper.appendChild(tooltip);
    return wrapper;
  }
}`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var E,S,k;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    position: 'bottom'
  },
  render: args => {
    const wrapper = createStoryWrapper('120px');
    const tooltip = createTooltip(args);
    wrapper.appendChild(tooltip);
    return wrapper;
  }
}`,...(k=(S=c.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var H,W,$;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    position: 'left'
  },
  render: args => {
    const wrapper = createStoryWrapper('100px', '7rem');
    const tooltip = createTooltip(args);
    wrapper.appendChild(tooltip);
    return wrapper;
  }
}`,...($=(W=d.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var L,I,N;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    position: 'right'
  }
}`,...(N=(I=m.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var j,z,A;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const wrapper = createStoryWrapper();
  const colors = [{
    label: 'Success',
    color: 'success'
  }, {
    label: 'Info',
    color: 'info'
  }, {
    label: 'Warning',
    color: 'warning'
  }, {
    label: 'Error',
    color: 'error'
  }];
  colors.forEach(({
    label,
    color
  }) => {
    const tooltip = createTooltip({
      label: \`\${label}\`,
      content: \`\${label} tooltip\`,
      position: 'top',
      color
    });
    wrapper.appendChild(tooltip);
  });
  return wrapper;
}`,...(A=(z=i.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const B=["LiveExample","Showcase","TooltipTop","TooltipBottom","TooltipLeft","TooltipRight","TooltipColorsShowcase"];export{s as LiveExample,a as Showcase,c as TooltipBottom,i as TooltipColorsShowcase,d as TooltipLeft,m as TooltipRight,l as TooltipTop,B as __namedExportsOrder,U as default};
