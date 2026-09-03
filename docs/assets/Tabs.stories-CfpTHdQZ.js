import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{D as r,O as i}from"./iframe-CQZFdqGP.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{t(),i(),a=n(),{Tab:o,RadioTab:s}=r,c={title:`Navigation/Tabs`,component:r},l=e=>(0,a.jsxs)(r,{...e,children:[(0,a.jsx)(r.Tab,{children:`Tab 1`}),(0,a.jsx)(r.Tab,{active:!0,children:`Tab 2`}),(0,a.jsx)(r.Tab,{children:`Tab 3`})]}),u=l.bind({}),d=l.bind({}),d.args={variant:`bordered`},f=l.bind({}),f.args={variant:`lift`},p=l.bind({}),p.args={variant:`boxed`},m=({size:e,...t})=>(0,a.jsxs)(`div`,{className:`flex flex-col items-center gap-6`,children:[(0,a.jsxs)(r,{...t,size:`xs`,children:[(0,a.jsx)(r.Tab,{children:`Tiny`}),(0,a.jsx)(r.Tab,{active:!0,children:`Tiny`}),(0,a.jsx)(r.Tab,{children:`Tiny`})]}),(0,a.jsxs)(r,{...t,size:`sm`,children:[(0,a.jsx)(r.Tab,{children:`Small`}),(0,a.jsx)(r.Tab,{active:!0,children:`Small`}),(0,a.jsx)(r.Tab,{children:`Small`})]}),(0,a.jsxs)(r,{...t,size:`md`,children:[(0,a.jsx)(r.Tab,{children:`Normal`}),(0,a.jsx)(r.Tab,{active:!0,children:`Normal`}),(0,a.jsx)(r.Tab,{children:`Normal`})]}),(0,a.jsxs)(r,{...t,size:`lg`,children:[(0,a.jsx)(r.Tab,{children:`Large`}),(0,a.jsx)(r.Tab,{active:!0,children:`Large`}),(0,a.jsx)(r.Tab,{children:`Large`})]})]}),m.argTypes={size:{control:!1}},m.args={variant:`lift`},h=e=>(0,a.jsxs)(r,{...e,children:[(0,a.jsx)(r.RadioTab,{name:`my_tabs_1`,label:`Tab 1`,contentClassName:`p-10`,children:`Tab content 1`}),(0,a.jsx)(r.RadioTab,{name:`my_tabs_1`,label:`Tab 2`,contentClassName:`p-10`,defaultChecked:!0,children:`Tab content 2`}),(0,a.jsx)(r.RadioTab,{name:`my_tabs_1`,label:`Tab 3`,contentClassName:`p-10`,children:`Tab content 3`})]}),h.args={variant:`bordered`},g=e=>(0,a.jsxs)(r,{...e,children:[(0,a.jsx)(r.RadioTab,{name:`my_tabs_2`,label:`Tab 1`,contentClassName:`bg-base-100 border-base-300 rounded-box p-6`,children:`Tab content 1`}),(0,a.jsx)(r.RadioTab,{name:`my_tabs_2`,label:`Tab 2`,contentClassName:`bg-base-100 border-base-300 rounded-box p-6`,defaultChecked:!0,children:`Tab content 2`}),(0,a.jsx)(r.RadioTab,{name:`my_tabs_2`,label:`Tab 3`,contentClassName:`bg-base-100 border-base-300 rounded-box p-6`,children:`Tab content 3`})]}),g.args={className:`w-full my-10 lg:mx-10`,variant:`lift`},_=e=>(0,a.jsxs)(r,{...e,children:[(0,a.jsx)(r.Tab,{children:`Tab 1`}),(0,a.jsx)(r.Tab,{color:`primary`,bgColor:`yellow`,borderColor:`orange`,active:!0,children:`Tab 2`}),(0,a.jsx)(r.Tab,{children:`Tab 3`})]}),_.args={className:`w-full my-10 lg:mx-10`,variant:`lift`},v=[`Default`,`Bordered`,`Lifted`,`Boxed`,`Sizes`,`RadioTabBordered`,`RadioTabLifted`,`TabsWithCustomColor`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
  return <Tabs {...args}>\r
      <Tabs.Tab>Tab 1</Tabs.Tab>\r
      <Tabs.Tab active={true}>Tab 2</Tabs.Tab>\r
      <Tabs.Tab>Tab 3</Tabs.Tab>\r
    </Tabs>;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  return <Tabs {...args}>\r
      <Tabs.Tab>Tab 1</Tabs.Tab>\r
      <Tabs.Tab active={true}>Tab 2</Tabs.Tab>\r
      <Tabs.Tab>Tab 3</Tabs.Tab>\r
    </Tabs>;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
  return <Tabs {...args}>\r
      <Tabs.Tab>Tab 1</Tabs.Tab>\r
      <Tabs.Tab active={true}>Tab 2</Tabs.Tab>\r
      <Tabs.Tab>Tab 3</Tabs.Tab>\r
    </Tabs>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  return <Tabs {...args}>\r
      <Tabs.Tab>Tab 1</Tabs.Tab>\r
      <Tabs.Tab active={true}>Tab 2</Tabs.Tab>\r
      <Tabs.Tab>Tab 3</Tabs.Tab>\r
    </Tabs>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
  size,
  ...args
}) => {
  return <div className="flex flex-col items-center gap-6">\r
      {/* xs*/}\r
      <Tabs {...args} size="xs">\r
        <Tabs.Tab>Tiny</Tabs.Tab>\r
        <Tabs.Tab active={true}>Tiny</Tabs.Tab>\r
        <Tabs.Tab>Tiny</Tabs.Tab>\r
      </Tabs>\r
      {/* sm*/}\r
      <Tabs {...args} size="sm">\r
        <Tabs.Tab>Small</Tabs.Tab>\r
        <Tabs.Tab active={true}>Small</Tabs.Tab>\r
        <Tabs.Tab>Small</Tabs.Tab>\r
      </Tabs>\r
      {/* md*/}\r
      <Tabs {...args} size="md">\r
        <Tabs.Tab>Normal</Tabs.Tab>\r
        <Tabs.Tab active={true}>Normal</Tabs.Tab>\r
        <Tabs.Tab>Normal</Tabs.Tab>\r
      </Tabs>\r
      {/* lg*/}\r
      <Tabs {...args} size="lg">\r
        <Tabs.Tab>Large</Tabs.Tab>\r
        <Tabs.Tab active={true}>Large</Tabs.Tab>\r
        <Tabs.Tab>Large</Tabs.Tab>\r
      </Tabs>\r
    </div>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  return <Tabs {...args}>\r
      <Tabs.RadioTab name="my_tabs_1" label="Tab 1" contentClassName="p-10">\r
        Tab content 1\r
      </Tabs.RadioTab>\r
      <Tabs.RadioTab name="my_tabs_1" label="Tab 2" contentClassName="p-10" defaultChecked={true}>\r
        Tab content 2\r
      </Tabs.RadioTab>\r
      <Tabs.RadioTab name="my_tabs_1" label="Tab 3" contentClassName="p-10">\r
        Tab content 3\r
      </Tabs.RadioTab>\r
    </Tabs>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  return <Tabs {...args}>\r
      <Tabs.RadioTab name="my_tabs_2" label="Tab 1" contentClassName="bg-base-100 border-base-300 rounded-box p-6">\r
        Tab content 1\r
      </Tabs.RadioTab>\r
      <Tabs.RadioTab name="my_tabs_2" label="Tab 2" contentClassName="bg-base-100 border-base-300 rounded-box p-6" defaultChecked={true}>\r
        Tab content 2\r
      </Tabs.RadioTab>\r
      <Tabs.RadioTab name="my_tabs_2" label="Tab 3" contentClassName="bg-base-100 border-base-300 rounded-box p-6">\r
        Tab content 3\r
      </Tabs.RadioTab>\r
    </Tabs>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => {
  return <Tabs {...args}>\r
      <Tabs.Tab>Tab 1</Tabs.Tab>\r
      <Tabs.Tab color="primary" bgColor="yellow" borderColor="orange" active={true}>\r
        Tab 2\r
      </Tabs.Tab>\r
      <Tabs.Tab>Tab 3</Tabs.Tab>\r
    </Tabs>;
}`,..._.parameters?.docs?.source}}}})))()}y();export{d as Bordered,p as Boxed,u as Default,f as Lifted,h as RadioTabBordered,g as RadioTabLifted,m as Sizes,_ as TabsWithCustomColor,v as __namedExportsOrder,c as default};