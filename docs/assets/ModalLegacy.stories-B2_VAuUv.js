import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-gPQRi9Ar.js";import{n as o,t as s}from"./Modal-Czz5FQAo.js";var c,l,u,d,f,p,m,h;function g(){return(g=t((()=>{c=e(n(),1),i(),o(),l=r(),u={title:`Actions/Modal/Legacy`,component:s.Legacy},d=e=>{let[t,n]=(0,c.useState)(!1),r=()=>{n(!t)};return(0,l.jsxs)(`div`,{className:`font-sans`,children:[(0,l.jsx)(a,{onClick:r,children:`Open Modal`}),(0,l.jsxs)(s.Legacy,{...e,open:t,children:[(0,l.jsx)(s.Header,{className:`font-bold`,children:`Hello!`}),(0,l.jsx)(s.Body,{children:`This modal works with a legacy mode!`}),(0,l.jsx)(s.Actions,{children:(0,l.jsx)(a,{onClick:r,children:`Close`})})]})]})},f=e=>{let[t,n]=(0,c.useState)(!1),r=()=>{n(!t)};return(0,l.jsxs)(`div`,{className:`font-sans`,children:[(0,l.jsx)(a,{onClick:r,children:`Open Modal`}),(0,l.jsxs)(s.Legacy,{...e,open:t,onClickBackdrop:r,children:[(0,l.jsx)(s.Header,{className:`font-bold`,children:`Hello!`}),(0,l.jsx)(s.Body,{children:`Click outside to close`})]})]})},p=e=>{let[t,n]=(0,c.useState)(!1),r=()=>{n(!t)};return(0,l.jsxs)(`div`,{className:`font-sans`,children:[(0,l.jsx)(a,{onClick:r,children:`Open Modal`}),(0,l.jsxs)(s.Legacy,{...e,open:t,children:[(0,l.jsx)(a,{size:`sm`,color:`ghost`,shape:`circle`,className:`absolute right-2 top-2`,onClick:r,children:`✕`}),(0,l.jsx)(s.Header,{className:`font-bold`,children:`Hello!`}),(0,l.jsx)(s.Body,{children:`Click on X button to close`})]})]})},m=e=>{let[t,n]=(0,c.useState)(!1),r=()=>{n(!t)};return(0,l.jsxs)(`div`,{className:`font-sans`,children:[(0,l.jsx)(a,{onClick:r,children:`Open Modal`}),(0,l.jsxs)(s.Legacy,{...e,open:t,children:[(0,l.jsx)(s.Header,{className:`font-bold`,children:`Hello!`}),(0,l.jsx)(s.Body,{children:`This modal works with a legacy mode!`}),(0,l.jsx)(s.Actions,{children:(0,l.jsx)(a,{onClick:r,children:`Close`})})]})]})},m.args={className:`w-11/12 max-w-5xl`},h=[`Default`,`ClickedOutside`,`CloseButton`,`CustomWidth`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState<boolean>(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return <div className="font-sans">
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal.Legacy {...args} open={visible}>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>This modal works with a legacy mode!</Modal.Body>

        <Modal.Actions>
          <Button onClick={toggleVisible}>Close</Button>
        </Modal.Actions>
      </Modal.Legacy>
    </div>;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState<boolean>(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return <div className="font-sans">
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal.Legacy {...args} open={visible} onClickBackdrop={toggleVisible}>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>Click outside to close</Modal.Body>
      </Modal.Legacy>
    </div>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState<boolean>(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return <div className="font-sans">
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal.Legacy {...args} open={visible}>
        <Button size="sm" color="ghost" shape="circle" className="absolute right-2 top-2" onClick={toggleVisible}>
          ✕
        </Button>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>Click on X button to close</Modal.Body>
      </Modal.Legacy>
    </div>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState<boolean>(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return <div className="font-sans">
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal.Legacy {...args} open={visible}>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>This modal works with a legacy mode!</Modal.Body>
        <Modal.Actions>
          <Button onClick={toggleVisible}>Close</Button>
        </Modal.Actions>
      </Modal.Legacy>
    </div>;
}`,...m.parameters?.docs?.source}}}})))()}g();export{f as ClickedOutside,p as CloseButton,m as CustomWidth,d as Default,h as __namedExportsOrder,u as default};