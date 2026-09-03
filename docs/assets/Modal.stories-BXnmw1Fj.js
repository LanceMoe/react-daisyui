import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-gPQRi9Ar.js";import{n as o,t as s}from"./Modal-BziFod1x.js";var c,l,u,d,f,p,m,h,g;function _(){return(_=t((()=>{c=e(n(),1),i(),o(),l=r(),u={title:`Actions/Modal`,component:s},d=e=>{let t=(0,c.useRef)(null),n=(0,c.useCallback)(()=>{t.current?.showModal()},[t]);return(0,l.jsxs)(`div`,{className:`font-sans`,children:[(0,l.jsx)(a,{onClick:n,children:`Open Modal`}),(0,l.jsxs)(s,{...e,ref:t,children:[(0,l.jsx)(s.Header,{className:`font-bold`,children:`Hello!`}),(0,l.jsx)(s.Body,{children:`Press ESC key or click the button below to close`}),(0,l.jsx)(s.Actions,{children:(0,l.jsx)(`form`,{method:`dialog`,children:(0,l.jsx)(a,{children:`Close`})})})]})]})},f=e=>{let t=(0,c.useRef)(null),n=(0,c.useCallback)(()=>{t.current?.showModal()},[t]);return(0,l.jsxs)(`div`,{className:`font-sans`,children:[(0,l.jsx)(a,{onClick:n,children:`Open Modal`}),(0,l.jsxs)(s,{...e,ref:t,children:[(0,l.jsx)(s.Header,{className:`font-bold`,children:`Hello!`}),(0,l.jsx)(s.Body,{children:`Press ESC key or click outside to close`})]})]})},f.args={backdrop:!0},p=e=>{let t=(0,c.useRef)(null),n=(0,c.useCallback)(()=>{t.current?.showModal()},[t]);return(0,l.jsxs)(`div`,{className:`font-sans`,children:[(0,l.jsx)(a,{onClick:n,children:`Open Modal`}),(0,l.jsxs)(s,{...e,ref:t,children:[(0,l.jsx)(`form`,{method:`dialog`,children:(0,l.jsx)(a,{size:`sm`,color:`ghost`,shape:`circle`,className:`absolute right-2 top-2`,children:`x`})}),(0,l.jsx)(s.Header,{className:`font-bold`,children:`Hello!`}),(0,l.jsx)(s.Body,{children:`Press ESC key or click on X button to close`})]})]})},m=e=>{let t=(0,c.useRef)(null),n=(0,c.useCallback)(()=>{t.current?.showModal()},[t]);return(0,l.jsxs)(`div`,{className:`font-sans`,children:[(0,l.jsx)(a,{onClick:n,children:`Open Modal`}),(0,l.jsxs)(s,{...e,ref:t,children:[(0,l.jsx)(s.Header,{className:`font-bold`,children:`Hello!`}),(0,l.jsx)(s.Body,{children:`Press ESC key or click the button below to close`}),(0,l.jsx)(s.Actions,{children:(0,l.jsx)(`form`,{method:`dialog`,children:(0,l.jsx)(a,{children:`Close`})})})]})]})},m.args={className:`w-11/12 max-w-5xl`},h=e=>{let{dialogRef:t,show:n}=s.useDialog();return(0,l.jsxs)(`div`,{className:`font-sans`,children:[(0,l.jsx)(a,{onClick:n,children:`Open Modal`}),(0,l.jsxs)(s,{...e,ref:t,children:[(0,l.jsx)(s.Header,{className:`font-bold`,children:`Hello!`}),(0,l.jsx)(s.Body,{children:`This modal works with useDialog hook!`}),(0,l.jsx)(s.Actions,{children:(0,l.jsx)(`form`,{method:`dialog`,children:(0,l.jsx)(a,{children:`Close`})})})]})]})},g=[`Default`,`ClickedOutside`,`CloseButton`,`CustomWidth`,`UseDialogHook`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);
  return <div className="font-sans">
      <Button onClick={handleShow}>Open Modal</Button>
      <Modal {...args} ref={ref}>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>Press ESC key or click the button below to close</Modal.Body>
        <Modal.Actions>
          <form method="dialog">
            <Button>Close</Button>
          </form>
        </Modal.Actions>
      </Modal>
    </div>;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);
  return <div className="font-sans">
      <Button onClick={handleShow}>Open Modal</Button>
      <Modal {...args} ref={ref}>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>Press ESC key or click outside to close</Modal.Body>
      </Modal>
    </div>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);
  return <div className="font-sans">
      <Button onClick={handleShow}>Open Modal</Button>
      <Modal {...args} ref={ref}>
        <form method="dialog">
          <Button size="sm" color="ghost" shape="circle" className="absolute right-2 top-2">
            x
          </Button>
        </form>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>Press ESC key or click on X button to close</Modal.Body>
      </Modal>
    </div>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);
  return <div className="font-sans">
      <Button onClick={handleShow}>Open Modal</Button>
      <Modal {...args} ref={ref}>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>Press ESC key or click the button below to close</Modal.Body>
        <Modal.Actions>
          <form method="dialog">
            <Button>Close</Button>
          </form>
        </Modal.Actions>
      </Modal>
    </div>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  const {
    dialogRef,
    show
  } = Modal.useDialog();
  return <div className="font-sans">
      <Button onClick={show}>Open Modal</Button>
      <Modal {...args} ref={dialogRef}>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>This modal works with useDialog hook!</Modal.Body>
        <Modal.Actions>
          <form method="dialog">
            <Button>Close</Button>
          </form>
        </Modal.Actions>
      </Modal>
    </div>;
}`,...h.parameters?.docs?.source}}}})))()}_();export{f as ClickedOutside,p as CloseButton,m as CustomWidth,d as Default,h as UseDialogHook,g as __namedExportsOrder,u as default};