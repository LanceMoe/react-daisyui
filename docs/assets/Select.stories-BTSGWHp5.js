import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Select-frRWjYP6.js";var o,s,c,l,u,d,f;function p(){return(p=t((()=>{o=e(n(),1),i(),s=r(),{Option:c}=a,l={title:`Data Input/Select`,component:a,parameters:{controls:{exclude:[`ref`]}},args:{className:`w-full max-w-xs`,disabled:!1}},u=e=>{let[t,n]=(0,o.useState)(`default`);return(0,s.jsx)(`div`,{className:`flex w-full component-preview p-4 items-center justify-center gap-2 font-sans`,children:(0,s.jsxs)(a,{...e,value:t,onChange:e=>n(e.target.value),children:[(0,s.jsx)(c,{value:`default`,disabled:!0,children:`Pick your favorite Simpson`}),(0,s.jsx)(c,{value:`Homer`,children:`Homer`}),(0,s.jsx)(c,{value:`Marge`,children:`Marge`}),(0,s.jsx)(c,{value:`Bart`,children:`Bart`}),(0,s.jsx)(c,{value:`Lisa`,children:`Lisa`}),(0,s.jsx)(c,{value:`Maggie`,children:`Maggie`})]})})},d=e=>(0,s.jsx)(`div`,{className:`flex w-full component-preview p-4 items-center justify-center gap-2 font-sans`,children:(0,s.jsxs)(`div`,{className:`flex w-full max-w-xs flex-col gap-2`,children:[(0,s.jsxs)(`label`,{className:`label`,children:[(0,s.jsx)(`span`,{children:`Pick the best fantasy franchise`}),(0,s.jsx)(`span`,{className:`text-xs text-base-content/60`,children:`Alt label`})]}),(0,s.jsxs)(a,{defaultValue:`default`,onChange:console.log,...e,children:[(0,s.jsx)(c,{value:`default`,disabled:!0,children:`Pick one`}),(0,s.jsx)(c,{value:`Star Wars`,children:`Star Wars`}),(0,s.jsx)(c,{value:`Harry Potter`,children:`Harry Potter`}),(0,s.jsx)(c,{value:`Lord of the Rings`,children:`Lord of the Rings`}),(0,s.jsx)(c,{value:`Planet of the Apes`,children:`Planet of the Apes`}),(0,s.jsx)(c,{value:`Star Trek`,children:`Star Trek`})]}),(0,s.jsxs)(`label`,{className:`label`,children:[(0,s.jsx)(`span`,{className:`text-xs text-base-content/60`,children:`Alt label`}),(0,s.jsx)(`span`,{className:`text-xs text-base-content/60`,children:`Alt label`})]})]})}),f=[`Default`,`FormControlAndLabels`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('default');
  return <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Select {...args} value={value} onChange={event => setValue(event.target.value)}>
        <Option value="default" disabled>
          Pick your favorite Simpson
        </Option>
        <Option value="Homer">Homer</Option>
        <Option value="Marge">Marge</Option>
        <Option value="Bart">Bart</Option>
        <Option value="Lisa">Lisa</Option>
        <Option value="Maggie">Maggie</Option>
      </Select>
    </div>;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  return <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <div className="flex w-full max-w-xs flex-col gap-2">
        <label className="label">
          <span>Pick the best fantasy franchise</span>
          <span className="text-xs text-base-content/60">Alt label</span>
        </label>
        <Select defaultValue="default" onChange={console.log} {...args}>
          <Option value="default" disabled>
            Pick one
          </Option>
          <Option value="Star Wars">Star Wars</Option>
          <Option value="Harry Potter">Harry Potter</Option>
          <Option value="Lord of the Rings">Lord of the Rings</Option>
          <Option value="Planet of the Apes">Planet of the Apes</Option>
          <Option value="Star Trek">Star Trek</Option>
        </Select>
        <label className="label">
          <span className="text-xs text-base-content/60">Alt label</span>
          <span className="text-xs text-base-content/60">Alt label</span>
        </label>
      </div>
    </div>;
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as Default,d as FormControlAndLabels,f as __namedExportsOrder,l as default};