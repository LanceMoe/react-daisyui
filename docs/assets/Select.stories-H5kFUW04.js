import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Select-DcXRL-hy.js";var o,s,c,l,u,d,f;function p(){return(p=t((()=>{o=e(n(),1),i(),s=r(),{Option:c}=a,l={title:`Data Input/Select`,component:a,parameters:{controls:{exclude:[`ref`]}},args:{className:`w-full max-w-xs`,disabled:!1}},u=e=>{let[t,n]=(0,o.useState)(`default`);return(0,s.jsx)(`div`,{className:`flex w-full component-preview p-4 items-center justify-center gap-2 font-sans`,children:(0,s.jsxs)(a,{...e,value:t,onChange:e=>n(e.target.value),children:[(0,s.jsx)(c,{value:`default`,disabled:!0,children:`Pick your favorite Simpson`}),(0,s.jsx)(c,{value:`Homer`,children:`Homer`}),(0,s.jsx)(c,{value:`Marge`,children:`Marge`}),(0,s.jsx)(c,{value:`Bart`,children:`Bart`}),(0,s.jsx)(c,{value:`Lisa`,children:`Lisa`}),(0,s.jsx)(c,{value:`Maggie`,children:`Maggie`})]})})},d=e=>(0,s.jsx)(`div`,{className:`flex w-full component-preview p-4 items-center justify-center gap-2 font-sans`,children:(0,s.jsxs)(`div`,{className:`flex w-full max-w-xs flex-col gap-2`,children:[(0,s.jsxs)(`label`,{className:`label`,children:[(0,s.jsx)(`span`,{children:`Pick the best fantasy franchise`}),(0,s.jsx)(`span`,{className:`text-xs text-base-content/60`,children:`Alt label`})]}),(0,s.jsxs)(a,{defaultValue:`default`,onChange:console.log,...e,children:[(0,s.jsx)(c,{value:`default`,disabled:!0,children:`Pick one`}),(0,s.jsx)(c,{value:`Star Wars`,children:`Star Wars`}),(0,s.jsx)(c,{value:`Harry Potter`,children:`Harry Potter`}),(0,s.jsx)(c,{value:`Lord of the Rings`,children:`Lord of the Rings`}),(0,s.jsx)(c,{value:`Planet of the Apes`,children:`Planet of the Apes`}),(0,s.jsx)(c,{value:`Star Trek`,children:`Star Trek`})]}),(0,s.jsxs)(`label`,{className:`label`,children:[(0,s.jsx)(`span`,{className:`text-xs text-base-content/60`,children:`Alt label`}),(0,s.jsx)(`span`,{className:`text-xs text-base-content/60`,children:`Alt label`})]})]})}),f=[`Default`,`FormControlAndLabels`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('default');
  return <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">\r
      <Select {...args} value={value} onChange={event => setValue(event.target.value)}>\r
        <Option value="default" disabled>\r
          Pick your favorite Simpson\r
        </Option>\r
        <Option value="Homer">Homer</Option>\r
        <Option value="Marge">Marge</Option>\r
        <Option value="Bart">Bart</Option>\r
        <Option value="Lisa">Lisa</Option>\r
        <Option value="Maggie">Maggie</Option>\r
      </Select>\r
    </div>;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  return <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">\r
      <div className="flex w-full max-w-xs flex-col gap-2">\r
        <label className="label">\r
          <span>Pick the best fantasy franchise</span>\r
          <span className="text-xs text-base-content/60">Alt label</span>\r
        </label>\r
        <Select defaultValue="default" onChange={console.log} {...args}>\r
          <Option value="default" disabled>\r
            Pick one\r
          </Option>\r
          <Option value="Star Wars">Star Wars</Option>\r
          <Option value="Harry Potter">Harry Potter</Option>\r
          <Option value="Lord of the Rings">Lord of the Rings</Option>\r
          <Option value="Planet of the Apes">Planet of the Apes</Option>\r
          <Option value="Star Trek">Star Trek</Option>\r
        </Select>\r
        <label className="label">\r
          <span className="text-xs text-base-content/60">Alt label</span>\r
          <span className="text-xs text-base-content/60">Alt label</span>\r
        </label>\r
      </div>\r
    </div>;
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as Default,d as FormControlAndLabels,f as __namedExportsOrder,l as default};