const x={title:"Layout/Grid",tags:["autodocs"],parameters:{docs:{description:{component:["","This section documents the CSS utility classes and tokens for the layout grid system.","","---","","## Grid Utilities","","### Columns","| Class | Property | Value |","|:------|:---------|:------|","| `.grid` | display | grid |","| `.grid-cols-1` | grid-template-columns | 1fr |","| `.grid-cols-2` | grid-template-columns | repeat(2, 1fr) |","| `.grid-cols-3` | grid-template-columns | repeat(3, 1fr) |","| `.grid-cols-4` | grid-template-columns | repeat(4, 1fr) |","| `.grid-auto` | grid-template-columns | repeat(auto-fit, minmax(200px, 1fr)) |","","### Gap Classes","| Class | Token | Value |","|:------|:------|:------|","| `.grid-gap-none` | `$md-sys-space-none` | 0rem |","| `.grid-gap-small` | `$md-sys-space-small` | 0.5rem |","| `.grid-gap-medium` | `$md-sys-space-medium` | 1rem |","| `.grid-gap-large` | `$md-sys-space-large` | 1.5rem |","","### Alignment","| Class | Property | Value |","|:------|:---------|:------|","| `.grid-align-start` | align-items | start |","| `.grid-align-center` | align-items | center |","| `.grid-align-end` | align-items | end |","| `.grid-justify-start` | justify-items | start |","| `.grid-justify-center` | justify-items | center |","| `.grid-justify-end` | justify-items | end |","| `.grid-place-center` | place-items | center |","","### Flow","| Class | Property | Value |","|:------|:---------|:------|","| `.grid-flow-row` | grid-auto-flow | row |","| `.grid-flow-column` | grid-auto-flow | column |","","---","","## ℹ️ Usage Notes","","> Grid utilities are useful for responsive layouts, cards, content previews, or adaptive UIs. You can combine them with spacing utilities for consistent behavior.","","---","","## Example","","```html",'<div class="grid grid-cols-3 grid-gap-medium">',"  <div>Box 1</div>","  <div>Box 2</div>","  <div>Box 3</div>","</div>","```"].join(`
`)}}}},i=()=>{const e=document.createElement("div");e.style.fontFamily="sans-serif",e.style.padding="2rem",e.style.display="flex",e.style.flexDirection="column",e.style.gap="2rem";const y=[{classes:["grid","grid-cols-2","grid-gap-small"],label:"2 columns + small gap"},{classes:["grid","grid-cols-3","grid-gap-medium","grid-align-center"],label:"3 columns + medium gap + align center"},{classes:["grid","grid-cols-4","grid-gap-large","grid-justify-center"],label:"4 columns + large gap + justify center"},{classes:["grid","grid-auto","grid-gap-default","grid-place-center"],label:"Auto-fit + default gap + place center"}],l=document.createElement("table");l.style.width="100%",l.style.borderCollapse="collapse",l.style.fontSize="14px";const c=document.createElement("thead");c.innerHTML=`
      <tr style="background-color: #f0f0f0;">
        <th style="text-align: left; padding: 10px; border: 1px solid #ccc;">Classes Applied</th>
        <th style="text-align: left; padding: 10px; border: 1px solid #ccc;">Example</th>
      </tr>
    `,l.appendChild(c);const o=document.createElement("tbody");return y.forEach(p=>{const r=document.createElement("tr"),d=document.createElement("td");d.style.padding="10px",d.style.border="1px solid #ccc",d.innerHTML=p.classes.map(s=>`<code>.${s}</code>`).join("<br>"),r.appendChild(d);const a=document.createElement("td");a.style.padding="10px",a.style.border="1px solid #ccc";const n=document.createElement("div");n.className=p.classes.join(" "),n.style.background="#e8f5e9",n.style.padding="1rem",n.style.minHeight="100px";for(let s=1;s<=4;s++){const t=document.createElement("div");t.style.background="#90caf9",t.style.padding="1rem",t.style.textAlign="center",t.style.borderRadius="6px",t.style.fontWeight="bold",t.innerText=`Item ${s}`,n.appendChild(t)}a.appendChild(n),r.appendChild(a),o.appendChild(r)}),l.appendChild(o),e.appendChild(l),e};var g,m,u;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.fontFamily = 'sans-serif';
  container.style.padding = '2rem';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '2rem';
  const examples = [{
    classes: ['grid', 'grid-cols-2', 'grid-gap-small'],
    label: '2 columns + small gap'
  }, {
    classes: ['grid', 'grid-cols-3', 'grid-gap-medium', 'grid-align-center'],
    label: '3 columns + medium gap + align center'
  }, {
    classes: ['grid', 'grid-cols-4', 'grid-gap-large', 'grid-justify-center'],
    label: '4 columns + large gap + justify center'
  }, {
    classes: ['grid', 'grid-auto', 'grid-gap-default', 'grid-place-center'],
    label: 'Auto-fit + default gap + place center'
  }];
  const table = document.createElement('table');
  table.style.width = '100%';
  table.style.borderCollapse = 'collapse';
  table.style.fontSize = '14px';
  const thead = document.createElement('thead');
  thead.innerHTML = \`
      <tr style="background-color: #f0f0f0;">
        <th style="text-align: left; padding: 10px; border: 1px solid #ccc;">Classes Applied</th>
        <th style="text-align: left; padding: 10px; border: 1px solid #ccc;">Example</th>
      </tr>
    \`;
  table.appendChild(thead);
  const tbody = document.createElement('tbody');
  examples.forEach(ex => {
    const tr = document.createElement('tr');

    // Column 1 – vypis tříd
    const classTd = document.createElement('td');
    classTd.style.padding = '10px';
    classTd.style.border = '1px solid #ccc';
    classTd.innerHTML = ex.classes.map(c => \`<code>.\${c}</code>\`).join('<br>');
    tr.appendChild(classTd);

    // Column 2 – vizuální ukázka
    const exampleTd = document.createElement('td');
    exampleTd.style.padding = '10px';
    exampleTd.style.border = '1px solid #ccc';
    const gridBox = document.createElement('div');
    gridBox.className = ex.classes.join(' ');
    gridBox.style.background = '#e8f5e9';
    gridBox.style.padding = '1rem';
    gridBox.style.minHeight = '100px';
    for (let i = 1; i <= 4; i++) {
      const cell = document.createElement('div');
      cell.style.background = '#90caf9';
      cell.style.padding = '1rem';
      cell.style.textAlign = 'center';
      cell.style.borderRadius = '6px';
      cell.style.fontWeight = 'bold';
      cell.innerText = \`Item \${i}\`;
      gridBox.appendChild(cell);
    }
    exampleTd.appendChild(gridBox);
    tr.appendChild(exampleTd);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  container.appendChild(table);
  return container;
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const f=["GridUtilitiesTable"];export{i as GridUtilitiesTable,f as __namedExportsOrder,x as default};
