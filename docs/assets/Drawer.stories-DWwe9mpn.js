import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r,t as i}from"./clsx-CTwy9ux-.js";import{n as a,t as o}from"./bundle-mjs-C6fYOv-m.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{A as c,k as l}from"./iframe-CQZFdqGP.js";import{n as u,t as d}from"./Button-C1COQKgx.js";import{n as f,t as p}from"./Menu-BA2EYBs-.js";function m({children:e,side:t,open:n,end:r,dataTheme:o,className:s,toggleClassName:c,contentClassName:l,sideClassName:u,overlayClassName:d,toggleId:f,onClickOverlay:p,...m}){let _=(0,h.useId)(),v=f||`drawer-${_}`,y=a(`drawer`,s,i({"drawer-end":r}));return(0,g.jsxs)(`div`,{"aria-expanded":n,...m,"data-theme":o,className:y,children:[(0,g.jsx)(`input`,{id:v,type:`checkbox`,className:i(`drawer-toggle`,c),checked:n,readOnly:!0}),(0,g.jsx)(`div`,{className:i(`drawer-content`,l),children:e}),(0,g.jsxs)(`div`,{className:i(`drawer-side`,u),children:[(0,g.jsx)(`label`,{htmlFor:v,"aria-label":`Close drawer`,className:i(`drawer-overlay`,d),onClick:p}),t]})]})}var h,g;function _(){return(_=t((()=>{r(),h=e(n(),1),o(),g=s();try{m.displayName=`Drawer`,m.__docgenInfo={description:``,displayName:`Drawer`,filePath:`E:/repos/react-daisyui/src/Drawer/Drawer.tsx`,methods:[],props:{dataTheme:{defaultValue:null,declarations:[{fileName:`react-daisyui/src/types.ts`,name:`TypeLiteral`}],description:``,name:`dataTheme`,required:!1,tags:{},type:{name:`string | undefined`}},side:{defaultValue:null,declarations:[{fileName:`react-daisyui/src/Drawer/Drawer.tsx`,name:`TypeLiteral`}],description:``,name:`side`,required:!0,tags:{},type:{name:`ReactNode`}},open:{defaultValue:null,declarations:[{fileName:`react-daisyui/src/Drawer/Drawer.tsx`,name:`TypeLiteral`}],description:``,name:`open`,required:!1,tags:{},type:{name:`boolean | undefined`}},end:{defaultValue:null,declarations:[{fileName:`react-daisyui/src/Drawer/Drawer.tsx`,name:`TypeLiteral`}],description:``,name:`end`,required:!1,tags:{},type:{name:`boolean | undefined`}},toggleClassName:{defaultValue:null,declarations:[{fileName:`react-daisyui/src/Drawer/Drawer.tsx`,name:`TypeLiteral`}],description:``,name:`toggleClassName`,required:!1,tags:{},type:{name:`string | undefined`}},contentClassName:{defaultValue:null,declarations:[{fileName:`react-daisyui/src/Drawer/Drawer.tsx`,name:`TypeLiteral`}],description:``,name:`contentClassName`,required:!1,tags:{},type:{name:`string | undefined`}},sideClassName:{defaultValue:null,declarations:[{fileName:`react-daisyui/src/Drawer/Drawer.tsx`,name:`TypeLiteral`}],description:``,name:`sideClassName`,required:!1,tags:{},type:{name:`string | undefined`}},overlayClassName:{defaultValue:null,declarations:[{fileName:`react-daisyui/src/Drawer/Drawer.tsx`,name:`TypeLiteral`}],description:``,name:`overlayClassName`,required:!1,tags:{},type:{name:`string | undefined`}},toggleId:{defaultValue:null,declarations:[{fileName:`react-daisyui/src/Drawer/Drawer.tsx`,name:`TypeLiteral`}],description:``,name:`toggleId`,required:!1,tags:{},type:{name:`string | undefined`}},onClickOverlay:{defaultValue:null,declarations:[{fileName:`react-daisyui/src/Drawer/Drawer.tsx`,name:`TypeLiteral`}],description:``,name:`onClickOverlay`,required:!1,tags:{},type:{name:`(() => void) | undefined`}}},tags:{}}}catch{}})))()}var v;function y(){return(y=t((()=>{_(),v=m})))()}var b,x,S,C,w,T,E,D;function O(){return(O=t((()=>{b=e(n(),1),u(),f(),c(),y(),x=s(),S={title:`Layout/Drawer`,component:v,argTypes:{side:{control:!1}}},C=e=>{let[t,n]=(0,b.useState)(!1),r=(0,b.useCallback)(()=>{n(e=>!e)},[]);return(0,x.jsx)(v,{...e,open:t,onClickOverlay:r,side:(0,x.jsxs)(p,{className:`p-4 w-80 h-full bg-base-200 text-base-content`,children:[(0,x.jsx)(p.Item,{children:(0,x.jsx)(`a`,{children:`Sidebar Item 1`})}),(0,x.jsx)(p.Item,{children:(0,x.jsx)(`a`,{children:`Sidebar Item 2`})})]}),children:(0,x.jsx)(d,{color:`primary`,onClick:r,children:`Open drawer`})})},C.args={sideClassName:`h-full absolute`,contentClassName:`flex h-56 items-center justify-center`},w=e=>{let[t,n]=(0,b.useState)(!1),r=(0,b.useCallback)(()=>{n(e=>!e)},[]);return(0,x.jsx)(v,{...e,open:t,onClickOverlay:r,side:(0,x.jsxs)(p,{className:`p-4 w-80 h-full bg-base-200 text-base-content`,children:[(0,x.jsx)(p.Item,{children:(0,x.jsx)(`a`,{children:`Sidebar Item 1`})}),(0,x.jsx)(p.Item,{children:(0,x.jsx)(`a`,{children:`Sidebar Item 2`})})]}),children:(0,x.jsx)(d,{color:`primary`,onClick:r,className:`lg:hidden`,children:`Open drawer`})})},w.args={className:`lg:drawer-open`,sideClassName:`h-full absolute`,contentClassName:`flex h-56 items-center justify-center`},T=e=>{let[t,n]=(0,b.useState)(!1),r=(0,b.useCallback)(()=>{n(e=>!e)},[]);return(0,x.jsxs)(v,{...e,open:t,onClickOverlay:r,side:(0,x.jsxs)(p,{className:`p-4 w-60 md:w-80 h-full bg-base-200`,children:[(0,x.jsx)(p.Item,{children:(0,x.jsx)(`a`,{children:`Sidebar Item 1`})}),(0,x.jsx)(p.Item,{children:(0,x.jsx)(`a`,{children:`Sidebar Item 2`})})]}),children:[(0,x.jsxs)(l,{className:`w-full bg-base-300`,children:[(0,x.jsx)(`div`,{className:`flex-none lg:hidden`,children:(0,x.jsx)(d,{shape:`square`,color:`ghost`,onClick:r,children:(0,x.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,className:`inline-block w-6 h-6 stroke-current`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2`,d:`M4 6h16M4 12h16M4 18h16`})})})}),(0,x.jsx)(`div`,{className:`flex-1 px-2 mx-2`,children:`Navbar Title`}),(0,x.jsx)(`div`,{className:`flex-none hidden lg:block`,children:(0,x.jsxs)(p,{horizontal:!0,children:[(0,x.jsx)(p.Item,{children:(0,x.jsx)(`a`,{children:`Navbar Item 1`})}),(0,x.jsx)(p.Item,{children:(0,x.jsx)(`a`,{children:`Navbar Item 2`})})]})})]}),(0,x.jsx)(`div`,{className:`flex flex-grow items-center justify-center`,children:`Content`})]})},T.args={className:`h-56 rounded overflow-hidden`,contentClassName:`flex flex-col`},E=e=>{let[t,n]=(0,b.useState)(!1),r=(0,b.useCallback)(()=>{n(e=>!e)},[]);return(0,x.jsx)(v,{...e,open:t,onClickOverlay:r,side:(0,x.jsxs)(p,{className:`p-4 w-80 h-full bg-base-200 text-base-content`,children:[(0,x.jsx)(p.Item,{children:(0,x.jsx)(`a`,{children:`Sidebar Item 1`})}),(0,x.jsx)(p.Item,{children:(0,x.jsx)(`a`,{children:`Sidebar Item 2`})})]}),children:(0,x.jsx)(d,{color:`primary`,onClick:r,children:`Open drawer`})})},E.args={sideClassName:`h-full absolute ms-[-100vw] w-[stretch]`,contentClassName:`flex h-56 items-center justify-center`,end:!0},D=[`Default`,`Responsive`,`NavbarMenuForDesktopSidebarDrawerForMobile`,`RightSideOfPage`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = useCallback(() => {
    setVisible(visible => !visible);
  }, []);
  return <Drawer {...args} open={visible} onClickOverlay={toggleVisible} side={<Menu className="p-4 w-80 h-full bg-base-200 text-base-content">\r
          <Menu.Item>\r
            <a>Sidebar Item 1</a>\r
          </Menu.Item>\r
          <Menu.Item>\r
            <a>Sidebar Item 2</a>\r
          </Menu.Item>\r
        </Menu>}>\r
      <Button color="primary" onClick={toggleVisible}>\r
        Open drawer\r
      </Button>\r
    </Drawer>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = useCallback(() => {
    setVisible(visible => !visible);
  }, []);
  return <Drawer {...args} open={visible} onClickOverlay={toggleVisible} side={<Menu className="p-4 w-80 h-full bg-base-200 text-base-content">\r
          <Menu.Item>\r
            <a>Sidebar Item 1</a>\r
          </Menu.Item>\r
          <Menu.Item>\r
            <a>Sidebar Item 2</a>\r
          </Menu.Item>\r
        </Menu>}>\r
      <Button color="primary" onClick={toggleVisible} className="lg:hidden">\r
        Open drawer\r
      </Button>\r
    </Drawer>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = useCallback(() => {
    setVisible(visible => !visible);
  }, []);
  return <Drawer {...args} open={visible} onClickOverlay={toggleVisible} side={<Menu className="p-4 w-60 md:w-80 h-full bg-base-200">\r
          <Menu.Item>\r
            <a>Sidebar Item 1</a>\r
          </Menu.Item>\r
          <Menu.Item>\r
            <a>Sidebar Item 2</a>\r
          </Menu.Item>\r
        </Menu>}>\r
      <Navbar className="w-full bg-base-300">\r
        <div className="flex-none lg:hidden">\r
          <Button shape="square" color="ghost" onClick={toggleVisible}>\r
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">\r
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>\r
            </svg>\r
          </Button>\r
        </div>\r
        <div className="flex-1 px-2 mx-2">Navbar Title</div>\r
        <div className="flex-none hidden lg:block">\r
          <Menu horizontal={true}>\r
            <Menu.Item>\r
              <a>Navbar Item 1</a>\r
            </Menu.Item>\r
            <Menu.Item>\r
              <a>Navbar Item 2</a>\r
            </Menu.Item>\r
          </Menu>\r
        </div>\r
      </Navbar>\r
      <div className="flex flex-grow items-center justify-center">Content</div>\r
    </Drawer>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = useCallback(() => {
    setVisible(visible => !visible);
  }, []);
  return <Drawer {...args} open={visible} onClickOverlay={toggleVisible} side={<Menu className="p-4 w-80 h-full bg-base-200 text-base-content">\r
          <Menu.Item>\r
            <a>Sidebar Item 1</a>\r
          </Menu.Item>\r
          <Menu.Item>\r
            <a>Sidebar Item 2</a>\r
          </Menu.Item>\r
        </Menu>}>\r
      <Button color="primary" onClick={toggleVisible}>\r
        Open drawer\r
      </Button>\r
    </Drawer>;
}`,...E.parameters?.docs?.source}}}})))()}O();export{C as Default,T as NavbarMenuForDesktopSidebarDrawerForMobile,w as Responsive,E as RightSideOfPage,D as __namedExportsOrder,S as default};