const D={title:"Foundations/Colors",tags:["autodocs"],parameters:{docs:{description:{component:["","This module describes color system using SCSS and CSS variables.","It generates a **full tone palette for each main color**, including error and success states.","There is also a predefined palette of neutral colors.","","### 🔹 Generating Colors with SCSS","Color variables are created using the **mixin**:","","```scss",'@include palette.generate-color-palette($primary-color, "primary");',"```","","This mixin generates **a tone-adjusted palette** for the given color. Example:","","```css",":root {","  --primary-0: #21003e;","  --primary-10: #38006f;","  --primary-20: #5600b2;","  ...","}","```","","### 🔹 What Colors Are Generated?","- **Primary Color** (`primary`) – The main color for UI elements.","- **Secondary Color** (`secondary`) – A complementary color.","- **Tertiary Color** (`tertiary`) – Optional third color.","- **Error Color** (`error`) – Standard Material Design error `#B3261E`","- **Success Color** (`success`) – Standard success color `#388E3C`","- **Custom Colors** (`custom`) – User-defined custom colors.","","### 🔹 Using Colors in UI Components","Colors are defined as CSS variables and can be easily used in components:","","```css","button {","  background-color: var(--primary-50);","  color: var(--md-sys-color-on-primary);","}","```","","### 🔹 Customizing Your Own Color Palette","Users can **define their own seed colors** by modifying the `user-tokens.scss` file.  ","After making changes, simply **rebuild the project** to generate a new color palette.","","#### **1️⃣ Modify `_user-tokens.scss`**","Open `src/scss/tokens/_user-tokens.scss` and change the seed colors:","","```scss","// 🔹 User-defined primary colors","$primary-color: #65558F;","$secondary-color: #d8fd21;","$tertiary-color: #ff0266;","$custom-color: #ff11b8; // 🔹 Custom user-defined color","```","","#### 2️⃣ Build Your New Color Palette","After modifying colors, you need to **rebuild the CSS** for changes to take effect.","","#### 3️⃣ View Your Generated Color Palette","Below, you can see **your currently generated color palette** with all tones.","These colors are automatically applied based on the values set in `user-tokens.scss`."].join(`
`)}}}},b=n=>{let o=getComputedStyle(document.documentElement).getPropertyValue(n).trim();if(!o)return"N/A";if(o.toLowerCase()==="white")return"#FFFFFF";if(o.toLowerCase()==="black")return"#000000";if(o.startsWith("rgb")){const s=o.match(/\d+(\.\d+)?/g);return!s||s.length<3?"#000000":("#"+s.slice(0,3).map(r=>Math.round(parseFloat(r)).toString(16).padStart(2,"0")).join("")).toUpperCase()}return o.toUpperCase()},E=n=>{let o,s,r;if(n.startsWith("rgb")){const e=n.match(/\d+(\.\d+)?/g);if(!e||e.length<3)return"#000";o=parseFloat(e[0]),s=parseFloat(e[1]),r=parseFloat(e[2])}else if(/^#([0-9a-f]{3}){1,2}$/i.test(n)){const e=n.substring(1),t=e.length===3?e.split("").map(a=>a+a).join(""):e;o=parseInt(t.substr(0,2),16),s=parseInt(t.substr(2,2),16),r=parseInt(t.substr(4,2),16)}else return"#000";return(o*299+s*587+r*114)/1e3<128?"#FFF":"#000"},S=["primary","secondary","tertiary","custom","error","success","neutral"],k=[0,10,20,30,40,50,60,70,80,90,95,98,100],m=()=>{const n=document.createElement("div");n.style.fontFamily="sans-serif",n.style.padding="2em",n.innerHTML=`
    <h2>Tonal Palette</h2><br>
    <p>This section displays the current user's tonal palette, showing the entire color scale from tone 0 to 100.</p><br><br>
    <div id="paletteDisplay"></div><br>
    <h3>📝 CSS Variables</h3><br>
    <pre id="cssVariables" class="css-output"></pre>

    <style>
      .color-section {
        margin-bottom: 20px;
      }
      .color-title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .color-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
      }
      .color-box {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
        border: 1px solid rgba(0, 0, 0, 0.1);
      }
      .css-output {
        background: #f4f4f4;
        padding: 10px;
        border-radius: 5px;
        font-size: 14px;
        white-space: pre-wrap;
      }
    </style>
  `;const o=n.querySelector("#paletteDisplay"),s=n.querySelector("#cssVariables");let r=`:root {
`;return S.forEach(i=>{const e=document.createElement("div");e.classList.add("color-section");const t=document.createElement("div");t.textContent=i.charAt(0).toUpperCase()+i.slice(1),t.classList.add("color-title");const a=document.createElement("div");a.classList.add("color-grid"),k.forEach(p=>{const d=`--${i}-${p}`,c=b(d),l=document.createElement("div");l.classList.add("color-box"),l.style.backgroundColor=c,l.textContent=p,l.style.color=E(c),l.addEventListener("click",()=>{c&&(navigator.clipboard.writeText(c),alert(`Barva ${c} zkopírována do schránky!`))}),a.appendChild(l),r+=`  ${d}: ${c||"N/A"};
`}),e.appendChild(t),e.appendChild(a),o.appendChild(e)}),r+=`}
`,s.textContent=r,n},y=()=>{const n=document.createElement("div");n.style.fontFamily="sans-serif",n.style.padding="2em",n.style.maxWidth="800px",n.style.lineHeight="1.6",n.innerHTML=`
    <h2 style="font-size: 24px; font-weight: bold;">Color Tokens</h2> <br>
    <p>
      <strong>Color tokens</strong> are dynamically generated by 
      <strong>mapping specific tones</strong> from the <strong>Material Design tonal palette</strong> 
      to functional color roles. 
      This ensures a <strong>consistent and accessible</strong> color system across the UI.
    </p><br>
    <p>
      The following sections display how colors are assigned from the tonal palette 
      to different roles, such as Primary, Secondary, Error, Surface, and more.
    </p><br><br>
    <div id="tokensDisplay"></div>

    <style>
      p {
        max-width: 1400px;
        font-size: 16px;
        color: #333;
        font-weight: 400;
      }
      strong {
        color: #111; 
      }
  
      .token-section {
        margin-bottom: 30px;
        padding: 15px;
        border-radius: 10px;
        background: #f8f9fa;
      }
      .token-title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 15px;
      }
      .token-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 10px;
      }
      .token-box {
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 10px;
        line-height: 1.2;
        word-break: break-word;
      }
    </style>
  `;const o=n.querySelector("#tokensDisplay");return[{title:"Primary Colors",colors:[{label:"Primary",var:"--md-sys-color-primary",tone:"--primary-50"},{label:"On Primary",var:"--md-sys-color-on-primary",tone:"--primary-100"},{label:"Primary Container",var:"--md-sys-color-primary-container",tone:"--primary-90"},{label:"On Primary Container",var:"--md-sys-color-on-primary-container",tone:"--primary-10"}]},{title:"Secondary Colors",colors:[{label:"Secondary",var:"--md-sys-color-secondary",tone:"--secondary-50"},{label:"On Secondary",var:"--md-sys-color-on-secondary",tone:"--secondary-100"},{label:"Secondary Container",var:"--md-sys-color-secondary-container",tone:"--secondary-90"},{label:"On Secondary Container",var:"--md-sys-color-on-secondary-container",tone:"--secondary-10"}]},{title:"Tertiary Colors",colors:[{label:"Tertiary",var:"--md-sys-color-tertiary",tone:"--tertiary-50"},{label:"On Tertiary",var:"--md-sys-color-on-tertiary",tone:"--tertiary-100"},{label:"Tertiary Container",var:"--md-sys-color-tertiary-container",tone:"--tertiary-90"},{label:"On Tertiary Container",var:"--md-sys-color-on-tertiary-container",tone:"--tertiary-10"}]},{title:"Error Colors",colors:[{label:"Error",var:"--md-sys-color-error",tone:"--error-50"},{label:"On Error",var:"--md-sys-color-on-error",tone:"--error-100"},{label:"Error Container",var:"--md-sys-color-error-container",tone:"--error-90"},{label:"On Error Container",var:"--md-sys-color-on-error-container",tone:"--error-10"}]},{title:"Success Colors",colors:[{label:"Success",var:"--md-sys-color-success",tone:"--success-50"},{label:"On Success",var:"--md-sys-color-on-success",tone:"--success-100"},{label:"Success Container",var:"--md-sys-color-success-container",tone:"--success-90"},{label:"On Success Container",var:"--md-sys-color-on-success-container",tone:"--success-10"}]},{title:"Custom Colors",colors:[{label:"Custom",var:"--md-sys-color-custom",tone:"--custom-50"},{label:"On Custom",var:"--md-sys-color-on-custom",tone:"--custom-100"},{label:"Custom Container",var:"--md-sys-color-custom-container",tone:"--custom-90"},{label:"On Custom Container",var:"--md-sys-color-on-custom-container",tone:"--custom-10"}]},{title:"Info Colors (Aliased from Secondary)",colors:[{label:"Info",var:"--md-sys-color-info",tone:"--secondary-50"},{label:"On Info",var:"--md-sys-color-on-info",tone:"--secondary-100"},{label:"Info Container",var:"--md-sys-color-info-container",tone:"--secondary-90"},{label:"On Info Container",var:"--md-sys-color-on-info-container",tone:"--secondary-10"}]},{title:"Surface & Background",colors:[{label:"Surface",var:"--md-sys-color-surface",tone:"--neutral-98"},{label:"On Surface",var:"--md-sys-color-on-surface",tone:"--neutral-10"},{label:"Surface Dim",var:"--md-sys-color-surface-dim",tone:"--neutral-90"},{label:"Surface Bright",var:"--md-sys-color-surface-bright",tone:"--neutral-98"},{label:"Surface Variant",var:"--md-sys-color-surface-variant",tone:"--neutral-90"},{label:"On Surface Variant",var:"--md-sys-color-on-surface-variant",tone:"--neutral-30"},{label:"Inverse Surface",var:"--md-sys-color-inverse-surface",tone:"--neutral-20"},{label:"Inverse On Surface",var:"--md-sys-color-inverse-on-surface",tone:"--neutral-95"}]},{title:"Outline & Variants",colors:[{label:"Outline",var:"--md-sys-color-outline",tone:"--neutral-50"},{label:"Outline Variant",var:"--md-sys-color-outline-variant",tone:"--neutral-80"}]}].forEach(({title:r,colors:i})=>{const e=document.createElement("div");e.classList.add("token-section");const t=document.createElement("div");t.textContent=r,t.classList.add("token-title");const a=document.createElement("div");a.classList.add("token-grid"),i.forEach(({label:p,var:d,tone:c})=>{const l=b(d);b(c);const u=document.createElement("div");u.classList.add("token-box"),u.style.backgroundColor=l,u.style.color=E(l),u.innerHTML=`${p} <br> <span style="font-weight: normal;">${d}</span> <span style="font-weight: normal;">${c}</span> <br> <span style="font-weight: normal;">${l.toUpperCase()}</span>`,a.appendChild(u)}),e.appendChild(t),e.appendChild(a),o.appendChild(e)}),n};var f,g,x;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.fontFamily = 'sans-serif';
  container.style.padding = '2em';
  container.innerHTML = \`
    <h2>Tonal Palette</h2><br>
    <p>This section displays the current user's tonal palette, showing the entire color scale from tone 0 to 100.</p><br><br>
    <div id="paletteDisplay"></div><br>
    <h3>📝 CSS Variables</h3><br>
    <pre id="cssVariables" class="css-output"></pre>

    <style>
      .color-section {
        margin-bottom: 20px;
      }
      .color-title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .color-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
      }
      .color-box {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
        border: 1px solid rgba(0, 0, 0, 0.1);
      }
      .css-output {
        background: #f4f4f4;
        padding: 10px;
        border-radius: 5px;
        font-size: 14px;
        white-space: pre-wrap;
      }
    </style>
  \`;
  const paletteDisplay = container.querySelector('#paletteDisplay');
  const cssVariablesOutput = container.querySelector('#cssVariables');
  let cssVariablesText = ':root {\\n';

  // Generování barev
  colorGroups.forEach(group => {
    const section = document.createElement('div');
    section.classList.add('color-section');
    const title = document.createElement('div');
    title.textContent = group.charAt(0).toUpperCase() + group.slice(1);
    title.classList.add('color-title');
    const grid = document.createElement('div');
    grid.classList.add('color-grid');
    tones.forEach(tone => {
      const colorVar = \`--\${group}-\${tone}\`;
      const colorValue = getCSSVariable(colorVar);
      const colorBox = document.createElement('div');
      colorBox.classList.add('color-box');
      colorBox.style.backgroundColor = colorValue;
      colorBox.textContent = tone;

      // Dynamická barva textu podle jasu pozadí (Material Design kontrastní výpočet)
      colorBox.style.color = getContrastColor(colorValue);

      // Kopírování barvy do schránky
      colorBox.addEventListener('click', () => {
        if (colorValue) {
          navigator.clipboard.writeText(colorValue);
          alert(\`Barva \${colorValue} zkopírována do schránky!\`);
        }
      });
      grid.appendChild(colorBox);
      cssVariablesText += \`  \${colorVar}: \${colorValue || 'N/A'};\\n\`;
    });
    section.appendChild(title);
    section.appendChild(grid);
    paletteDisplay.appendChild(section);
  });
  cssVariablesText += '}\\n';
  cssVariablesOutput.textContent = cssVariablesText;
  return container;
}`,...(x=(g=m.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,h,C;y.parameters={...y.parameters,docs:{...(v=y.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.fontFamily = 'sans-serif';
  container.style.padding = '2em';
  container.style.maxWidth = '800px';
  container.style.lineHeight = '1.6';
  container.innerHTML = \`
    <h2 style="font-size: 24px; font-weight: bold;">Color Tokens</h2> <br>
    <p>
      <strong>Color tokens</strong> are dynamically generated by 
      <strong>mapping specific tones</strong> from the <strong>Material Design tonal palette</strong> 
      to functional color roles. 
      This ensures a <strong>consistent and accessible</strong> color system across the UI.
    </p><br>
    <p>
      The following sections display how colors are assigned from the tonal palette 
      to different roles, such as Primary, Secondary, Error, Surface, and more.
    </p><br><br>
    <div id="tokensDisplay"></div>

    <style>
      p {
        max-width: 1400px;
        font-size: 16px;
        color: #333;
        font-weight: 400;
      }
      strong {
        color: #111; 
      }
  
      .token-section {
        margin-bottom: 30px;
        padding: 15px;
        border-radius: 10px;
        background: #f8f9fa;
      }
      .token-title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 15px;
      }
      .token-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 10px;
      }
      .token-box {
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 10px;
        line-height: 1.2;
        word-break: break-word;
      }
    </style>
  \`;
  const tokensDisplay = container.querySelector("#tokensDisplay");
  const sections = [{
    title: 'Primary Colors',
    colors: [{
      label: 'Primary',
      var: '--md-sys-color-primary',
      tone: '--primary-50'
    }, {
      label: 'On Primary',
      var: '--md-sys-color-on-primary',
      tone: '--primary-100'
    }, {
      label: 'Primary Container',
      var: '--md-sys-color-primary-container',
      tone: '--primary-90'
    }, {
      label: 'On Primary Container',
      var: '--md-sys-color-on-primary-container',
      tone: '--primary-10'
    }]
  }, {
    title: 'Secondary Colors',
    colors: [{
      label: 'Secondary',
      var: '--md-sys-color-secondary',
      tone: '--secondary-50'
    }, {
      label: 'On Secondary',
      var: '--md-sys-color-on-secondary',
      tone: '--secondary-100'
    }, {
      label: 'Secondary Container',
      var: '--md-sys-color-secondary-container',
      tone: '--secondary-90'
    }, {
      label: 'On Secondary Container',
      var: '--md-sys-color-on-secondary-container',
      tone: '--secondary-10'
    }]
  }, {
    title: 'Tertiary Colors',
    colors: [{
      label: 'Tertiary',
      var: '--md-sys-color-tertiary',
      tone: '--tertiary-50'
    }, {
      label: 'On Tertiary',
      var: '--md-sys-color-on-tertiary',
      tone: '--tertiary-100'
    }, {
      label: 'Tertiary Container',
      var: '--md-sys-color-tertiary-container',
      tone: '--tertiary-90'
    }, {
      label: 'On Tertiary Container',
      var: '--md-sys-color-on-tertiary-container',
      tone: '--tertiary-10'
    }]
  }, {
    title: 'Error Colors',
    colors: [{
      label: 'Error',
      var: '--md-sys-color-error',
      tone: '--error-50'
    }, {
      label: 'On Error',
      var: '--md-sys-color-on-error',
      tone: '--error-100'
    }, {
      label: 'Error Container',
      var: '--md-sys-color-error-container',
      tone: '--error-90'
    }, {
      label: 'On Error Container',
      var: '--md-sys-color-on-error-container',
      tone: '--error-10'
    }]
  }, {
    title: 'Success Colors',
    colors: [{
      label: 'Success',
      var: '--md-sys-color-success',
      tone: '--success-50'
    }, {
      label: 'On Success',
      var: '--md-sys-color-on-success',
      tone: '--success-100'
    }, {
      label: 'Success Container',
      var: '--md-sys-color-success-container',
      tone: '--success-90'
    }, {
      label: 'On Success Container',
      var: '--md-sys-color-on-success-container',
      tone: '--success-10'
    }]
  }, {
    title: 'Custom Colors',
    colors: [{
      label: 'Custom',
      var: '--md-sys-color-custom',
      tone: '--custom-50'
    }, {
      label: 'On Custom',
      var: '--md-sys-color-on-custom',
      tone: '--custom-100'
    }, {
      label: 'Custom Container',
      var: '--md-sys-color-custom-container',
      tone: '--custom-90'
    }, {
      label: 'On Custom Container',
      var: '--md-sys-color-on-custom-container',
      tone: '--custom-10'
    }]
  }, {
    title: 'Info Colors (Aliased from Secondary)',
    colors: [{
      label: 'Info',
      var: '--md-sys-color-info',
      tone: '--secondary-50'
    }, {
      label: 'On Info',
      var: '--md-sys-color-on-info',
      tone: '--secondary-100'
    }, {
      label: 'Info Container',
      var: '--md-sys-color-info-container',
      tone: '--secondary-90'
    }, {
      label: 'On Info Container',
      var: '--md-sys-color-on-info-container',
      tone: '--secondary-10'
    }]
  }, {
    title: 'Surface & Background',
    colors: [{
      label: 'Surface',
      var: '--md-sys-color-surface',
      tone: '--neutral-98'
    }, {
      label: 'On Surface',
      var: '--md-sys-color-on-surface',
      tone: '--neutral-10'
    }, {
      label: 'Surface Dim',
      var: '--md-sys-color-surface-dim',
      tone: '--neutral-90'
    }, {
      label: 'Surface Bright',
      var: '--md-sys-color-surface-bright',
      tone: '--neutral-98'
    }, {
      label: 'Surface Variant',
      var: '--md-sys-color-surface-variant',
      tone: '--neutral-90'
    }, {
      label: 'On Surface Variant',
      var: '--md-sys-color-on-surface-variant',
      tone: '--neutral-30'
    }, {
      label: 'Inverse Surface',
      var: '--md-sys-color-inverse-surface',
      tone: '--neutral-20'
    }, {
      label: 'Inverse On Surface',
      var: '--md-sys-color-inverse-on-surface',
      tone: '--neutral-95'
    }]
  }, {
    title: 'Outline & Variants',
    colors: [{
      label: 'Outline',
      var: '--md-sys-color-outline',
      tone: '--neutral-50'
    }, {
      label: 'Outline Variant',
      var: '--md-sys-color-outline-variant',
      tone: '--neutral-80'
    }]
  }];

  // Funkce pro získání hodnoty CSS proměnné
  /*const getCSSVariable = (variable) => {\r
    let value = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();\r
  \r
    \r
    return value; // Pokud už je ve formátu hex, vrátíme beze změny\r
  };*/

  // Konverze RGB → HEX
  const rgbToHex = rgb => {
    const rgbValues = rgb.match(/\\d+/g);
    if (!rgbValues) return "#000000"; // Defaultní hodnota pokud selže parsování

    return \`#\${rgbValues.slice(0, 3) // Vezmeme pouze R, G, B
    .map(x => parseInt(x).toString(16).padStart(2, "0")) // Převedeme na HEX
    .join("")}\`.toUpperCase();
  };

  // Funkce pro určení správné kontrastní barvy textu
  // Funkce pro určení správné kontrastní barvy textu
  /*const getContrastColor = (hex) => {\r
    if (!hex || !/^#[0-9A-F]{6}$/i.test(hex)) return "#000"; // Ošetření nevalidních hodnot\r
  \r
    const r = parseInt(hex.substr(1, 2), 16);\r
    const g = parseInt(hex.substr(3, 2), 16);\r
    const b = parseInt(hex.substr(5, 2), 16);\r
  \r
    // Výpočet jasu barvy podle WCAG\r
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;\r
  \r
    return brightness < 128 ? "#FFF" : "#000"; // Opravená logika - na tmavém pozadí bílý text\r
  };*/

  // Vytvoření sekcí a přiřazení barev
  // Vytvoření sekcí a přiřazení barev
  sections.forEach(({
    title,
    colors
  }) => {
    const section = document.createElement('div');
    section.classList.add('token-section');
    const sectionTitle = document.createElement('div');
    sectionTitle.textContent = title;
    sectionTitle.classList.add('token-title');
    const grid = document.createElement('div');
    grid.classList.add('token-grid');
    colors.forEach(({
      label,
      var: sysVar,
      tone: toneVar
    }) => {
      const sysColor = getCSSVariable(sysVar);
      const toneColor = getCSSVariable(toneVar);

      // Box pro významovou barvu + odpovídající tón
      const tokenBox = document.createElement('div');
      tokenBox.classList.add('token-box');
      tokenBox.style.backgroundColor = sysColor;
      tokenBox.style.color = getContrastColor(sysColor);
      tokenBox.innerHTML = \`\${label} <br> <span style="font-weight: normal;">\${sysVar}</span> <span style="font-weight: normal;">\${toneVar}</span> <br> <span style="font-weight: normal;">\${sysColor.toUpperCase()}</span>\`;
      grid.appendChild(tokenBox);
    });
    section.appendChild(sectionTitle);
    section.appendChild(grid);
    tokensDisplay.appendChild(section);
  });
  return container;
}`,...(C=(h=y.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const w=["TonalPalette","ColorTokens"];export{y as ColorTokens,m as TonalPalette,w as __namedExportsOrder,D as default};
