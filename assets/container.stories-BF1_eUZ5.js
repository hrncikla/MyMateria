const c={title:"Layout/Container",tags:["autodocs"],parameters:{docs:{description:{component:["","The `.container` class provides a responsive, centered layout wrapper.","","It automatically adapts its maximum width based on breakpoints:","","| Breakpoint | Min-Width | Max-Container Width |","|:-----------|:----------|:--------------------|","| Compact    | 0px       | `$md-sys-container-compact` |","| Medium     | 600px     | `$md-sys-container-medium` |","| Large      | 840px     | `$md-sys-container-large` |","| Extended-md| 1240px    | `$md-sys-container-extended-md` |","| Extended-lg| 1440px    | `$md-sys-container-extended-lg` |","| Extended-xl| 1600px    | `$md-sys-container-extended-xl` |","| Extended-xxl| 1920px   | `$md-sys-container-extended-xxl` |","","---","","## How `.container` works","","- `width: 100%` - always full width","- `margin-inline: auto` - centered horizontally","- `padding-inline: var(--md-sys-container-padding)` - consistent horizontal spacing","- `max-width` changes based on screen width breakpoints","","The container uses spacing token:","","- `$md-sys-container-padding` = default horizontal padding inside container.","","---","","## Example Usage","","```html",'<div class="container">',"  <h2>Centered Content</h2>","  <p>This container adapts based on screen width.</p>","</div>","```",""].join(`
`)}}}},a=()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.fontFamily="sans-serif",e.style.display="flex",e.style.flexDirection="column",e.style.gap="2rem",e.style.alignItems="center";const n=document.createElement("div");n.style.padding="0.5rem 1rem",n.style.background="#e0e0e0",n.style.fontSize="14px",n.style.width="fit-content",n.style.borderRadius="4px",n.innerText=`Viewport width: ${window.innerWidth}px`,window.addEventListener("resize",()=>{n.innerText=`Viewport width: ${window.innerWidth}px`});const l=p=>{const t=document.createElement("div");t.className="container",t.style.background="#e3f2fd",t.style.padding="1rem",t.style.border="2px solid #1976d2",t.style.minHeight="150px",t.style.width="100%";const i=document.createElement("div");return i.style.background="#ffffff",i.style.border="2px dashed #1976d2",i.style.padding="1rem",i.style.textAlign="center",i.innerHTML=`<strong>${p}</strong><br/>Adaptable content`,t.appendChild(i),t};e.appendChild(l("Default Container"));const r=document.createElement("p");return r.style.fontSize="14px",r.style.color="#555",r.innerText="Resize the screen to see how the container adapts to different breakpoints.",e.appendChild(r),e.appendChild(n),e};var d,o,s;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.padding = '2rem';
  container.style.fontFamily = 'sans-serif';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '2rem';
  container.style.alignItems = 'center';

  // ✅ Dynamické zobrazení šířky
  const widthDisplay = document.createElement('div');
  widthDisplay.style.padding = '0.5rem 1rem';
  widthDisplay.style.background = '#e0e0e0';
  widthDisplay.style.fontSize = '14px';
  widthDisplay.style.width = 'fit-content';
  widthDisplay.style.borderRadius = '4px';
  widthDisplay.innerText = \`Viewport width: \${window.innerWidth}px\`;

  // ✅ Aktualizace při změně velikosti
  window.addEventListener('resize', () => {
    widthDisplay.innerText = \`Viewport width: \${window.innerWidth}px\`;
  });
  const createContainerBox = label => {
    const wrapper = document.createElement('div');
    wrapper.className = 'container';
    wrapper.style.background = '#e3f2fd'; // světlá modrá = container space
    wrapper.style.padding = '1rem';
    wrapper.style.border = '2px solid #1976d2';
    wrapper.style.minHeight = '150px';
    wrapper.style.width = '100%';
    const innerBox = document.createElement('div');
    innerBox.style.background = '#ffffff';
    innerBox.style.border = '2px dashed #1976d2';
    innerBox.style.padding = '1rem';
    innerBox.style.textAlign = 'center';
    innerBox.innerHTML = \`<strong>\${label}</strong><br/>Adaptable content\`;
    wrapper.appendChild(innerBox);
    return wrapper;
  };

  // Příklad základního containeru
  container.appendChild(createContainerBox('Default Container'));
  const infoText = document.createElement('p');
  infoText.style.fontSize = '14px';
  infoText.style.color = '#555';
  infoText.innerText = 'Resize the screen to see how the container adapts to different breakpoints.';
  container.appendChild(infoText);
  container.appendChild(widthDisplay);
  return container;
}`,...(s=(o=a.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const x=["ContainerExamples"];export{a as ContainerExamples,x as __namedExportsOrder,c as default};
