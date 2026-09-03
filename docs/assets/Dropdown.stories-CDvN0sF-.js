import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{D as r,O as i}from"./iframe-BRezO1A1.js";import{n as a,t as o}from"./Button-tDUhPLOB.js";import{n as s,t as c}from"./Card-xdMDox7e.js";import{n as l,t as u}from"./Dropdown-CcKfTzGH.js";var d,f,p,m,h,g,_;function v(){return(v=e((()=>{t(),l(),s(),i(),a(),d=n(),f={title:`Actions/Dropdown`,component:u,argTypes:{item:{control:!1}}},p=e=>(0,d.jsx)(`div`,{className:`my-32`,children:(0,d.jsxs)(u,{...e,children:[(0,d.jsx)(u.Toggle,{children:`Click`}),(0,d.jsxs)(u.Menu,{className:`w-52`,children:[(0,d.jsx)(u.Item,{children:`Item 1`}),(0,d.jsx)(u.Item,{children:`Item 2`})]})]})}),m=e=>(0,d.jsx)(`div`,{className:`my-32`,children:(0,d.jsxs)(u,{...e,children:[(0,d.jsx)(u.Toggle,{children:`Click`}),(0,d.jsx)(u.Menu,{className:`card card-compact w-64 p-2 shadow bg-primary text-primary-content m-1`,children:(0,d.jsxs)(c.Body,{children:[(0,d.jsx)(c.Title,{tag:`h3`,children:`Card title!`}),(0,d.jsx)(`p`,{children:`you can use any element as a dropdown.`})]})})]})}),h=({dataTheme:e,...t})=>(0,d.jsxs)(r,{className:`my-32 px-2 font-sans bg-base-300 rounded-box`,dataTheme:e,children:[(0,d.jsx)(r.Start,{className:`px-2 lg:flex-none`,children:(0,d.jsx)(`span`,{className:`text-lg font-bold`,children:`daisyUI`})}),(0,d.jsxs)(r.End,{children:[(0,d.jsx)(o,{color:`ghost`,dataTheme:e,children:`Button`}),(0,d.jsxs)(u,{...t,dataTheme:e,children:[(0,d.jsx)(u.Toggle,{className:`btn btn-ghost rounded-btn`,button:!1,children:`Dropdown`}),(0,d.jsxs)(u.Menu,{className:`w-52 mt-4`,children:[(0,d.jsx)(u.Item,{children:`Item 1`}),(0,d.jsx)(u.Item,{children:`Item 2`})]})]})]})]}),h.args={end:!0},g=e=>(0,d.jsxs)(`div`,{className:`my-32 font-sans`,children:[`A normal text and a helper dropdown`,(0,d.jsxs)(u,{...e,children:[(0,d.jsx)(u.Toggle,{button:!1,className:`btn btn-circle btn-ghost btn-xs text-info`,children:(0,d.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,className:`w-4 h-4 stroke-current`,children:(0,d.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2`,d:`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`})})}),(0,d.jsx)(u.Menu,{className:`card compact w-64 !p-0 shadow bg-base-100 rounded-box`,children:(0,d.jsxs)(c.Body,{children:[(0,d.jsx)(c.Title,{tag:`h2`,children:`You needed more info?`}),(0,d.jsx)(`p`,{children:`Here is a description!`})]})})]})]}),g.args={end:!0},_=[`Default`,`AsCard`,`InNavbar`,`Helper`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  return <div className="my-32">\r
      <Dropdown {...args}>\r
        <Dropdown.Toggle>Click</Dropdown.Toggle>\r
        <Dropdown.Menu className="w-52">\r
          <Dropdown.Item>Item 1</Dropdown.Item>\r
          <Dropdown.Item>Item 2</Dropdown.Item>\r
        </Dropdown.Menu>\r
      </Dropdown>\r
    </div>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
  return <div className="my-32">\r
      <Dropdown {...args}>\r
        <Dropdown.Toggle>Click</Dropdown.Toggle>\r
        <Dropdown.Menu className="card card-compact w-64 p-2 shadow bg-primary text-primary-content m-1">\r
          <Card.Body>\r
            <Card.Title tag={'h3'}>Card title!</Card.Title>\r
            <p>you can use any element as a dropdown.</p>\r
          </Card.Body>\r
        </Dropdown.Menu>\r
      </Dropdown>\r
    </div>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`({
  dataTheme,
  ...args
}) => {
  return <Navbar className="my-32 px-2 font-sans bg-base-300 rounded-box" dataTheme={dataTheme}>\r
      <Navbar.Start className="px-2 lg:flex-none">\r
        <span className="text-lg font-bold">daisyUI</span>\r
      </Navbar.Start>\r
      <Navbar.End>\r
        <Button color="ghost" dataTheme={dataTheme}>\r
          Button\r
        </Button>\r
        <Dropdown {...args} dataTheme={dataTheme}>\r
          <Dropdown.Toggle className="btn btn-ghost rounded-btn" button={false}>\r
            Dropdown\r
          </Dropdown.Toggle>\r
          <Dropdown.Menu className="w-52 mt-4">\r
            <Dropdown.Item>Item 1</Dropdown.Item>\r
            <Dropdown.Item>Item 2</Dropdown.Item>\r
          </Dropdown.Menu>\r
        </Dropdown>\r
      </Navbar.End>\r
    </Navbar>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  return <div className="my-32 font-sans">\r
      A normal text and a helper dropdown\r
      <Dropdown {...args}>\r
        <Dropdown.Toggle button={false} className="btn btn-circle btn-ghost btn-xs text-info">\r
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current">\r
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
          </svg>\r
        </Dropdown.Toggle>\r
        <Dropdown.Menu className="card compact w-64 !p-0 shadow bg-base-100 rounded-box">\r
          <Card.Body>\r
            <Card.Title tag={'h2'}>You needed more info?</Card.Title>\r
            <p>Here is a description!</p>\r
          </Card.Body>\r
        </Dropdown.Menu>\r
      </Dropdown>\r
    </div>;
}`,...g.parameters?.docs?.source}}}})))()}v();export{m as AsCard,p as Default,g as Helper,h as InNavbar,_ as __namedExportsOrder,f as default};