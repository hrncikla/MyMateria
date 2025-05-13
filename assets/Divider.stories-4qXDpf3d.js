/* empty css             */import{a as g,b as C}from"./storybook-helpers-CD2gtCTp.js";const r=({dividerType:e="standard"})=>{const t=e==="vertical",n=e==="inset",i=t?document.createElement("div"):document.createElement("hr");return i.classList.add("divider"),t&&i.classList.add("divider--vertical"),n&&i.classList.add("divider--inset"),i},F={title:"Components/Divider",tags:["autodocs"],render:e=>r(e),parameters:{docs:{description:{component:`
Dividers are visual cues that help organize content by separating elements into distinct sections. According to Material Design guidelines, dividers should be used to group related content or indicate a shift between sections, while maintaining clarity and consistency.

Dividers can be horizontal or vertical, depending on layout needs. They provide subtle separation without introducing strong visual weight. In complex layouts, dividers improve scannability, enhance hierarchy, and help maintain rhythm between elements.

### Divider Types

- **Standard** – A full-width horizontal divider.
  - **Usage:** Between sections in cards, dialogs, or standalone separators.
  - **Class:** \`.divider\`

- **Inset** – A horizontal divider with left indentation.
  - **Usage:** In lists, typically between list items where an icon or avatar aligns left.
  - **Class:** \`.divider .divider--inset\`

- **Vertical** – A vertical line between items.
  - **Usage:** Between columns, buttons or layout areas.
  - **Class:** \`.divider .divider--vertical\`

Always place dividers in appropriate containers to maintain consistent alignment.
        `}}},argTypes:{dividerType:{control:{type:"select"},options:["standard","inset","vertical"],description:"Type of divider to render"}},args:{dividerType:"standard"}},d=e=>{const t=document.createElement("div");t.style.padding="1rem",t.style.border="1px dashed var(--md-sys-color-outline-variant)",t.style.backgroundColor="var(--md-sys-color-surface)",t.style.gap="1rem",t.style.alignItems="center";const n=document.createElement("div");n.className="body-medium";const i=document.createElement("div");i.className="body-medium";let s;switch(e.dividerType){case"inset":t.style.display="block",n.textContent="List item A",i.textContent="List item B",s=r({dividerType:"inset"});break;case"vertical":t.style.display="flex",t.style.flexDirection="row",t.style.height="3rem",n.textContent="Left",i.textContent="Right",s=r({dividerType:"vertical"});break;case"standard":default:t.style.display="block",n.textContent="Above",i.textContent="Below",s=r({dividerType:"standard"});break}return t.appendChild(n),t.appendChild(s),t.appendChild(i),t};d.storyName="Live Example";d.parameters={docs:{description:{story:"Interactive example with horizontal, vertical, and inset dividers."}}};const o=()=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="2rem",e.style.padding="1rem";const t=g();t.appendChild(C("Divider (standard):","body-large"));const n=document.createElement("div");n.style.padding="1rem",n.style.background="var(--md-sys-color-surface)",n.style.borderRadius="0.5rem";const i=document.createElement("div");i.className="body-medium",i.textContent="Content above the divider";const s=r({dividerType:"standard"}),p=document.createElement("div");p.className="body-medium",p.textContent="Content below the divider",n.appendChild(i),n.appendChild(s),n.appendChild(p),t.appendChild(n);const v=g(),x=C("Inset Divider (in list context):","body-large");x.style.color="var(--md-sys-color-primary)",v.appendChild(x);const y=document.createElement("div");y.className="list",y.innerHTML=`
    <div class="list__item">
      <div class="list__text">
        <div class="list__text-main body-medium">Item A</div>
        <div class="list__text-supporting body-small">Created yesterday</div>
      </div>
      <div class="list__meta label-small">2 MB</div>
    </div>
    <hr class="divider divider--inset" />
    <div class="list__item">
      <div class="list__text">
        <div class="list__text-main body-medium">Item B</div>
        <div class="list__text-supporting body-small">Added today</div>
      </div>
      <div class="list__meta label-small">1.4 MB</div>
    </div>
    <hr class="divider divider--inset" />
    <div class="list__item">
      <div class="list__text">
        <div class="list__text-main body-medium">Item C</div>
        <div class="list__text-supporting body-small">Archived</div>
      </div>
      <div class="list__meta label-small">950 KB</div>
    </div>
  `,v.appendChild(y);const u=g(),f=C("Vertical Divider (within layout):","body-large");f.style.color="var(--md-sys-color-primary)",u.appendChild(f);const a=document.createElement("div");a.style.display="flex",a.style.gap="1rem",a.style.alignItems="center",a.style.height="3rem",a.style.border="1px dashed var(--md-sys-color-outline-variant)",a.style.padding="0.5rem";const h=document.createElement("span");h.textContent="Item A",h.className="body-medium";const z=r({dividerType:"vertical"}),b=document.createElement("span");return b.textContent="Item B",b.className="body-medium",a.appendChild(h),a.appendChild(z),a.appendChild(b),u.appendChild(a),e.appendChild(t),e.appendChild(v),e.appendChild(u),e};o.parameters={docs:{description:{story:"Visual examples of divider types: standard (full), inset (indented), and vertical."}},backgrounds:{default:"soft neutral",values:[{name:"soft neutral",value:"#EDEDED"},{name:"light surface",value:"#F4F4F4"},{name:"dark gray",value:"#2E2E2E"}]}};const l=()=>{const e=document.createElement("div");return e.className="body-medium",e.innerHTML='Above content<hr class="divider" />Below content',e};l.storyName="Standard";l.parameters={docs:{description:{story:`
**Standard divider** – a full-width horizontal rule to separate sections.

**Class to use:** \`.divider\`

**Example:**

\`\`\`html
<hr class="divider" />
\`\`\`
      `}}};const c=()=>{const e=document.createElement("div");return e.className="body-medium",e.innerHTML='List item A<hr class="divider divider--inset" />List item B',e};c.parameters={docs:{description:{story:`
**Inset divider** – used within lists to separate items while aligning visually with list content.

**Class to use:** \`.divider .divider--inset\`

**Example:**

\`\`\`html
<hr class="divider divider--inset" />
\`\`\`
      `}}};const m=()=>{const e=document.createElement("div");e.style.display="flex",e.style.alignItems="center",e.style.gap="1rem",e.style.height="3rem";const t=document.createElement("span");t.className="body-medium",t.textContent="Item A";const n=r({dividerType:"vertical"}),i=document.createElement("span");return i.className="body-medium",i.textContent="Item B",e.appendChild(t),e.appendChild(n),e.appendChild(i),e};m.parameters={docs:{description:{story:`
**Vertical divider** – used to separate elements horizontally, such as between buttons or columns.

**Class to use:** \`.divider .divider--vertical\`

**Example:**

\`\`\`html
<div class="divider divider--vertical"></div>
\`\`\`
      `}}};var _,w,E;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const container = document.createElement('div');
  container.style.padding = '1rem';
  container.style.border = '1px dashed var(--md-sys-color-outline-variant)';
  container.style.backgroundColor = 'var(--md-sys-color-surface)';
  container.style.gap = '1rem';
  container.style.alignItems = 'center';
  const before = document.createElement('div');
  before.className = 'body-medium';
  const after = document.createElement('div');
  after.className = 'body-medium';
  let divider;
  switch (args.dividerType) {
    case 'inset':
      container.style.display = 'block';
      before.textContent = 'List item A';
      after.textContent = 'List item B';
      divider = createDivider({
        dividerType: 'inset'
      });
      break;
    case 'vertical':
      container.style.display = 'flex';
      container.style.flexDirection = 'row';
      container.style.height = '3rem';
      before.textContent = 'Left';
      after.textContent = 'Right';
      divider = createDivider({
        dividerType: 'vertical'
      });
      break;
    case 'standard':
    default:
      container.style.display = 'block';
      before.textContent = 'Above';
      after.textContent = 'Below';
      divider = createDivider({
        dividerType: 'standard'
      });
      break;
  }
  container.appendChild(before);
  container.appendChild(divider);
  container.appendChild(after);
  return container;
}`,...(E=(w=d.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var I,D,L;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '2rem';
  wrapper.style.padding = '1rem';
  const sectionStandard = createSection();
  sectionStandard.appendChild(createLabel('Divider (standard):', 'body-large'));
  const container = document.createElement('div');
  container.style.padding = '1rem';
  container.style.background = 'var(--md-sys-color-surface)';
  container.style.borderRadius = '0.5rem';
  const before = document.createElement('div');
  before.className = 'body-medium';
  before.textContent = 'Content above the divider';
  const divider = createDivider({
    dividerType: 'standard'
  });
  const after = document.createElement('div');
  after.className = 'body-medium';
  after.textContent = 'Content below the divider';
  container.appendChild(before);
  container.appendChild(divider);
  container.appendChild(after);
  sectionStandard.appendChild(container);
  const sectionInset = createSection();
  const labelInset = createLabel('Inset Divider (in list context):', 'body-large');
  labelInset.style.color = 'var(--md-sys-color-primary)';
  sectionInset.appendChild(labelInset);
  const listInsetExample = document.createElement('div');
  listInsetExample.className = 'list';
  listInsetExample.innerHTML = \`
    <div class="list__item">
      <div class="list__text">
        <div class="list__text-main body-medium">Item A</div>
        <div class="list__text-supporting body-small">Created yesterday</div>
      </div>
      <div class="list__meta label-small">2 MB</div>
    </div>
    <hr class="divider divider--inset" />
    <div class="list__item">
      <div class="list__text">
        <div class="list__text-main body-medium">Item B</div>
        <div class="list__text-supporting body-small">Added today</div>
      </div>
      <div class="list__meta label-small">1.4 MB</div>
    </div>
    <hr class="divider divider--inset" />
    <div class="list__item">
      <div class="list__text">
        <div class="list__text-main body-medium">Item C</div>
        <div class="list__text-supporting body-small">Archived</div>
      </div>
      <div class="list__meta label-small">950 KB</div>
    </div>
  \`;
  sectionInset.appendChild(listInsetExample);
  const sectionVertical = createSection();
  const labelVertical = createLabel('Vertical Divider (within layout):', 'body-large');
  labelVertical.style.color = 'var(--md-sys-color-primary)';
  sectionVertical.appendChild(labelVertical);
  const verticalWrapper = document.createElement('div');
  verticalWrapper.style.display = 'flex';
  verticalWrapper.style.gap = '1rem';
  verticalWrapper.style.alignItems = 'center';
  verticalWrapper.style.height = '3rem';
  verticalWrapper.style.border = '1px dashed var(--md-sys-color-outline-variant)';
  verticalWrapper.style.padding = '0.5rem';
  const left = document.createElement('span');
  left.textContent = 'Item A';
  left.className = 'body-medium';
  const dividerVertical = createDivider({
    dividerType: 'vertical'
  });
  const right = document.createElement('span');
  right.textContent = 'Item B';
  right.className = 'body-medium';
  verticalWrapper.appendChild(left);
  verticalWrapper.appendChild(dividerVertical);
  verticalWrapper.appendChild(right);
  sectionVertical.appendChild(verticalWrapper);
  wrapper.appendChild(sectionStandard);
  wrapper.appendChild(sectionInset);
  wrapper.appendChild(sectionVertical);
  return wrapper;
}`,...(L=(D=o.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var T,N,A;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const wrapper = document.createElement('div');
  wrapper.className = 'body-medium';
  wrapper.innerHTML = \`Above content<hr class="divider" />Below content\`;
  return wrapper;
}`,...(A=(N=l.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var B,V,S;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const wrapper = document.createElement('div');
  wrapper.className = 'body-medium';
  wrapper.innerHTML = \`List item A<hr class="divider divider--inset" />List item B\`;
  return wrapper;
}`,...(S=(V=c.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var k,W,M;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.alignItems = 'center';
  container.style.gap = '1rem';
  container.style.height = '3rem';
  const left = document.createElement('span');
  left.className = 'body-medium';
  left.textContent = 'Item A';
  const divider = createDivider({
    dividerType: 'vertical'
  });
  const right = document.createElement('span');
  right.className = 'body-medium';
  right.textContent = 'Item B';
  container.appendChild(left);
  container.appendChild(divider);
  container.appendChild(right);
  return container;
}`,...(M=(W=m.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};const U=["LiveExample","Showcase","Divider","Inset","Vertical"];export{l as Divider,c as Inset,d as LiveExample,o as Showcase,m as Vertical,U as __namedExportsOrder,F as default};
