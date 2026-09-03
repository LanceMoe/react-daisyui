import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./clsx-CTwy9ux-.js";import{n as i,t as a}from"./bundle-mjs-C6fYOv-m.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{C as s,E as c,T as l,w as u}from"./iframe-Cfx9G2IV.js";var d;function f(){return(f=e((()=>{d=`light.dark.cupcake.bumblebee.emerald.corporate.synthwave.retro.cyberpunk.valentine.halloween.garden.forest.aqua.lofi.pastel.fantasy.wireframe.black.luxury.dracula.cmyk.autumn.business.acid.lemonade.night.coffee.winter.dim.nord.sunset`.split(`.`)})))()}function p({selected:e,children:t,dataTheme:n,className:a,...o}){let s=i(a,`border-base-content/20 hover:border-base-content/40 outline-base-content overflow-hidden rounded-lg border outline-2 outline-offset-2`,r({outline:e}));return(0,m.jsx)(`div`,{...o,"data-theme":n,className:s,children:(0,m.jsx)(`div`,{className:`bg-base-100 text-base-content w-full cursor-pointer font-sans`,children:(0,m.jsxs)(`div`,{className:`grid grid-cols-5 grid-rows-3`,children:[(0,m.jsx)(`div`,{className:`bg-base-200 col-start-1 row-span-2 row-start-1`}),(0,m.jsx)(`div`,{className:`bg-base-300 col-start-1 row-start-3`}),(0,m.jsxs)(`div`,{className:`bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2`,children:[(0,m.jsx)(`div`,{className:`font-bold`,children:n}),(0,m.jsxs)(`div`,{className:`flex flex-wrap gap-1`,children:[(0,m.jsx)(`div`,{className:`bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6`,children:(0,m.jsx)(`div`,{className:`text-primary-content text-sm font-bold`,children:`A`})}),(0,m.jsx)(`div`,{className:`bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6`,children:(0,m.jsx)(`div`,{className:`text-primary-content text-sm font-bold`,children:`A`})}),(0,m.jsx)(`div`,{className:`bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6`,children:(0,m.jsx)(`div`,{className:`text-accent-content text-sm font-bold`,children:`A`})}),(0,m.jsx)(`div`,{className:`bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6`,children:(0,m.jsx)(`div`,{className:`text-neutral-content text-sm font-bold`,children:`A`})})]}),t&&(0,m.jsx)(`div`,{className:`my-2`,children:t})]})]})})})}var m;function h(){return(h=e((()=>{n(),t(),a(),m=o();try{p.displayName=`ThemeItem`,p.__docgenInfo={description:``,displayName:`ThemeItem`,filePath:`/home/runner/work/react-daisyui/react-daisyui/src/Theme/ThemeItem.tsx`,methods:[],props:{dataTheme:{defaultValue:null,declarations:[{fileName:`react-daisyui/src/Theme/ThemeItem.tsx`,name:`TypeLiteral`}],description:``,name:`dataTheme`,required:!0,tags:{},type:{name:`string`}},selected:{defaultValue:null,declarations:[{fileName:`react-daisyui/src/Theme/ThemeItem.tsx`,name:`TypeLiteral`}],description:``,name:`selected`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})))()}var g,_;function v(){return(v=e((()=>{g=t(),c(),_=e=>{let{theme:t,setTheme:n}=(0,g.useContext)(l);return(0,g.useEffect)(()=>{e&&t!==e&&n(e)},[n,t,e]),{theme:t,setTheme:n}}})))()}var y,b,x,S,C,w;function T(){return(T=e((()=>{t(),f(),u(),h(),v(),y=o(),b={title:`Utils/Theme`,component:s},x=e=>{let{theme:t,setTheme:n}=_();return(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`h4`,{className:`mb-4`,children:[`Current Theme: `,t]}),(0,y.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:d.map((e,r)=>(0,y.jsx)(p,{dataTheme:e,role:`button`,"aria-label":`Theme select`,"aria-pressed":e===t,selected:e===t,tabIndex:0,onClick:()=>{document.getElementsByTagName(`html`)[0].setAttribute(`data-theme`,e),window.localStorage.setItem(`sb-react-daisyui-preview-theme`,e),n(e)}},`theme_${e}_#${r}`))})]})},x.args={},S=e=>{let{theme:t,setTheme:n}=_(`corporate`);return(0,y.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:(0,y.jsx)(p,{dataTheme:t,role:`button`,"aria-label":`Theme select`,tabIndex:0})})},S.args={},C=e=>{let{theme:t,setTheme:n}=_();return(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`h4`,{className:`mb-4`,children:[`Current Theme: `,t]}),(0,y.jsx)(`div`,{className:`flex flex-col gap-y-4`,children:(e=>{let r=[];for(let i=0;i<e.length;i+=2)r.push((0,y.jsx)(p,{dataTheme:e[i],role:`button`,"aria-label":`Theme select`,"aria-pressed":e[i]===t,selected:e[i]===t,tabIndex:0,onClick:t=>{t.stopPropagation(),document.getElementsByTagName(`html`)[0].setAttribute(`data-theme`,e[i]),window.localStorage.setItem(`sb-react-daisyui-preview-theme`,e[i]),n(e[i])},children:(0,y.jsx)(p,{dataTheme:e[i+1],role:`button`,"aria-label":`Theme select`,"aria-pressed":e[i+1]===t,selected:e[i+1]===t,tabIndex:0,onClick:t=>{t.stopPropagation(),document.getElementsByTagName(`html`)[0].setAttribute(`data-theme`,e[i+1]),window.localStorage.setItem(`sb-react-daisyui-preview-theme`,e[i+1]),n(e[i+1])}},`theme_${e[i+1]}_#${i+1}`)},`theme_${e[i]}_#${i}`));return(0,y.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:r})})(d)})]})},C.args={},w=[`Default`,`WithInitialValue`,`NestedThemes`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
  const {
    theme,
    setTheme
  } = useTheme();
  return <div>
      <h4 className="mb-4">Current Theme: {theme}</h4>
      <div className="flex flex-wrap gap-4">
        {DEFAULT_THEMES.map((t, i) => <ThemeItem key={\`theme_\${t}_#\${i}\`} dataTheme={t} role="button" aria-label="Theme select" aria-pressed={t === theme} selected={t === theme} tabIndex={0} onClick={() => {
        document.getElementsByTagName('html')[0].setAttribute('data-theme', t);
        window.localStorage.setItem('sb-react-daisyui-preview-theme', t);
        setTheme(t);
      }} />)}
      </div>
    </div>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => {
  const {
    theme,
    setTheme
  } = useTheme('corporate');
  return <div className="flex flex-wrap gap-4">
      <ThemeItem dataTheme={theme} role="button" aria-label="Theme select" tabIndex={0} />
    </div>;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  const {
    theme,
    setTheme
  } = useTheme();
  const renderNestedThemes = (themes: readonly string[]) => {
    const nodes: React.ReactNode[] = [];
    for (let i = 0; i < themes.length; i += 2) {
      nodes.push(<ThemeItem key={\`theme_\${themes[i]}_#\${i}\`} dataTheme={themes[i]} role="button" aria-label="Theme select" aria-pressed={themes[i] === theme} selected={themes[i] === theme} tabIndex={0} onClick={e => {
        e.stopPropagation();
        document.getElementsByTagName('html')[0].setAttribute('data-theme', themes[i]);
        window.localStorage.setItem('sb-react-daisyui-preview-theme', themes[i]);
        setTheme(themes[i]);
      }}>
          <ThemeItem key={\`theme_\${themes[i + 1]}_#\${i + 1}\`} dataTheme={themes[i + 1]} role="button" aria-label="Theme select" aria-pressed={themes[i + 1] === theme} selected={themes[i + 1] === theme} tabIndex={0} onClick={e => {
          e.stopPropagation();
          document.getElementsByTagName('html')[0].setAttribute('data-theme', themes[i + 1]);
          window.localStorage.setItem('sb-react-daisyui-preview-theme', themes[i + 1]);
          setTheme(themes[i + 1]);
        }} />
        </ThemeItem>);
    }
    return <div className="flex flex-wrap gap-4">{nodes}</div>;
  };
  return <div>
      <h4 className="mb-4">Current Theme: {theme}</h4>
      <div className="flex flex-col gap-y-4">{renderNestedThemes(DEFAULT_THEMES)}</div>
    </div>;
}`,...C.parameters?.docs?.source}}}})))()}T();export{x as Default,C as NestedThemes,S as WithInitialValue,w as __namedExportsOrder,b as default};