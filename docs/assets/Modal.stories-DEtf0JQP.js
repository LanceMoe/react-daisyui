import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-C1COQKgx.js";import{n as o,t as s}from"./Modal-BzKVUuvH.js";var c,l,u,d,f,p,m,h,g;function _(){return(_=t((()=>{c=e(n(),1),i(),o(),l=r(),u={title:`Actions/Modal`,component:s},d=e=>{let t=(0,c.useRef)(null),n=(0,c.useCallback)(()=>{t.current?.showModal()},[t]);return(0,l.jsxs)(`div`,{className:`font-sans`,children:[(0,l.jsx)(a,{onClick:n,children:`Open Modal`}),(0,l.jsxs)(s,{...e,ref:t,children:[(0,l.jsx)(s.Header,{className:`font-bold`,children:`Hello!`}),(0,l.jsx)(s.Body,{children:`Press ESC key or click the button below to close`}),(0,l.jsx)(s.Actions,{children:(0,l.jsx)(`form`,{method:`dialog`,children:(0,l.jsx)(a,{children:`Close`})})})]})]})},f=e=>{let t=(0,c.useRef)(null),n=(0,c.useCallback)(()=>{t.current?.showModal()},[t]);return(0,l.jsxs)(`div`,{className:`font-sans`,children:[(0,l.jsx)(a,{onClick:n,children:`Open Modal`}),(0,l.jsxs)(s,{...e,ref:t,children:[(0,l.jsx)(s.Header,{className:`font-bold`,children:`Hello!`}),(0,l.jsx)(s.Body,{children:`Press ESC key or click outside to close`})]})]})},f.args={backdrop:!0},p=e=>{let t=(0,c.useRef)(null),n=(0,c.useCallback)(()=>{t.current?.showModal()},[t]);return(0,l.jsxs)(`div`,{className:`font-sans`,children:[(0,l.jsx)(a,{onClick:n,children:`Open Modal`}),(0,l.jsxs)(s,{...e,ref:t,children:[(0,l.jsx)(`form`,{method:`dialog`,children:(0,l.jsx)(a,{size:`sm`,color:`ghost`,shape:`circle`,className:`absolute right-2 top-2`,children:`x`})}),(0,l.jsx)(s.Header,{className:`font-bold`,children:`Hello!`}),(0,l.jsx)(s.Body,{children:`Press ESC key or click on X button to close`})]})]})},m=e=>{let t=(0,c.useRef)(null),n=(0,c.useCallback)(()=>{t.current?.showModal()},[t]);return(0,l.jsxs)(`div`,{className:`font-sans`,children:[(0,l.jsx)(a,{onClick:n,children:`Open Modal`}),(0,l.jsxs)(s,{...e,ref:t,children:[(0,l.jsx)(s.Header,{className:`font-bold`,children:`Hello!`}),(0,l.jsx)(s.Body,{children:`Press ESC key or click the button below to close`}),(0,l.jsx)(s.Actions,{children:(0,l.jsx)(`form`,{method:`dialog`,children:(0,l.jsx)(a,{children:`Close`})})})]})]})},m.args={className:`w-11/12 max-w-5xl`},h=e=>{let{Dialog:t,handleShow:n}=s.useDialog();return(0,l.jsxs)(`div`,{className:`font-sans`,children:[(0,l.jsx)(a,{onClick:n,children:`Open Modal`}),(0,l.jsxs)(t,{...e,children:[(0,l.jsx)(s.Header,{className:`font-bold`,children:`Hello!`}),(0,l.jsx)(s.Body,{children:`This modal works with useDialog hook!`}),(0,l.jsx)(s.Actions,{children:(0,l.jsx)(`form`,{method:`dialog`,children:(0,l.jsx)(a,{children:`Close`})})})]})]})},g=[`Default`,`ClickedOutside`,`CloseButton`,`CustomWidth`,`UseDialogHook`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);
  return <div className="font-sans">\r
      <Button onClick={handleShow}>Open Modal</Button>\r
      <Modal {...args} ref={ref}>\r
        <Modal.Header className="font-bold">Hello!</Modal.Header>\r
        <Modal.Body>Press ESC key or click the button below to close</Modal.Body>\r
        <Modal.Actions>\r
          <form method="dialog">\r
            <Button>Close</Button>\r
          </form>\r
        </Modal.Actions>\r
      </Modal>\r
    </div>;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);
  return <div className="font-sans">\r
      <Button onClick={handleShow}>Open Modal</Button>\r
      <Modal {...args} ref={ref}>\r
        <Modal.Header className="font-bold">Hello!</Modal.Header>\r
        <Modal.Body>Press ESC key or click outside to close</Modal.Body>\r
      </Modal>\r
    </div>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);
  return <div className="font-sans">\r
      <Button onClick={handleShow}>Open Modal</Button>\r
      <Modal {...args} ref={ref}>\r
        <form method="dialog">\r
          <Button size="sm" color="ghost" shape="circle" className="absolute right-2 top-2">\r
            x\r
          </Button>\r
        </form>\r
        <Modal.Header className="font-bold">Hello!</Modal.Header>\r
        <Modal.Body>Press ESC key or click on X button to close</Modal.Body>\r
      </Modal>\r
    </div>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);
  return <div className="font-sans">\r
      <Button onClick={handleShow}>Open Modal</Button>\r
      <Modal {...args} ref={ref}>\r
        <Modal.Header className="font-bold">Hello!</Modal.Header>\r
        <Modal.Body>Press ESC key or click the button below to close</Modal.Body>\r
        <Modal.Actions>\r
          <form method="dialog">\r
            <Button>Close</Button>\r
          </form>\r
        </Modal.Actions>\r
      </Modal>\r
    </div>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  const {
    Dialog,
    handleShow
  } = Modal.useDialog();
  return <div className="font-sans">\r
      <Button onClick={handleShow}>Open Modal</Button>\r
      <Dialog {...args}>\r
        <Modal.Header className="font-bold">Hello!</Modal.Header>\r
        <Modal.Body>This modal works with useDialog hook!</Modal.Body>\r
        <Modal.Actions>\r
          <form method="dialog">\r
            <Button>Close</Button>\r
          </form>\r
        </Modal.Actions>\r
      </Dialog>\r
    </div>;
}`,...h.parameters?.docs?.source}}}})))()}_();export{f as ClickedOutside,p as CloseButton,m as CustomWidth,d as Default,h as UseDialogHook,g as __namedExportsOrder,u as default};