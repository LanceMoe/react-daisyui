import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r,t as i}from"./bundle-mjs-C6fYOv-m.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./Button-tDUhPLOB.js";import{n as c,t as l}from"./Alert-Cwj565DS.js";var u,d,f,p,m;function h(){return(h=t((()=>{u=e(n(),1),i(),d=a(),f={start:`toast-start`,center:`toast-center`,end:`toast-end`},p={top:`toast-top`,middle:`toast-middle`,bottom:`toast-bottom`},m=(0,u.forwardRef)(({horizontal:e=`end`,vertical:t=`bottom`,className:n,children:i,...a},o)=>(0,d.jsx)(`div`,{...a,className:r(`toast`,f[e],p[t],n),ref:o,children:i})),m.displayName=`Toast`;try{m.displayName=`Toast`,m.__docgenInfo={description:``,displayName:`Toast`,filePath:`E:/repos/react-daisyui/src/Toast/Toast.tsx`,methods:[],props:{horizontal:{defaultValue:{value:`end`},declarations:[{fileName:`react-daisyui/src/Toast/Toast.tsx`,name:`TypeLiteral`}],description:``,name:`horizontal`,required:!1,tags:{},type:{name:`"center" | "start" | "end" | undefined`}},vertical:{defaultValue:{value:`bottom`},declarations:[{fileName:`react-daisyui/src/Toast/Toast.tsx`,name:`TypeLiteral`}],description:``,name:`vertical`,required:!1,tags:{},type:{name:`"top" | "bottom" | "middle" | undefined`}},dataTheme:{defaultValue:null,declarations:[{fileName:`react-daisyui/src/types.ts`,name:`IComponentBaseProps`}],description:``,name:`dataTheme`,parent:{fileName:`react-daisyui/src/types.ts`,name:`IComponentBaseProps`},required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})))()}var g;function _(){return(_=t((()=>{h(),g=m;try{m.displayName=`Toast`,m.__docgenInfo={description:``,displayName:`Toast`,filePath:`E:/repos/react-daisyui/src/Toast/index.tsx`,methods:[],props:{horizontal:{defaultValue:{value:`end`},declarations:[{fileName:`react-daisyui/src/Toast/Toast.tsx`,name:`TypeLiteral`}],description:``,name:`horizontal`,required:!1,tags:{},type:{name:`"center" | "start" | "end" | undefined`}},vertical:{defaultValue:{value:`bottom`},declarations:[{fileName:`react-daisyui/src/Toast/Toast.tsx`,name:`TypeLiteral`}],description:``,name:`vertical`,required:!1,tags:{},type:{name:`"top" | "bottom" | "middle" | undefined`}},dataTheme:{defaultValue:null,declarations:[{fileName:`react-daisyui/src/types.ts`,name:`IComponentBaseProps`}],description:``,name:`dataTheme`,parent:{fileName:`react-daisyui/src/types.ts`,name:`IComponentBaseProps`},required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})))()}var v,y,b,x,S,C,w,T,E,D;function O(){return(O=t((()=>{v=e(n(),1),_(),c(),o(),y=a(),b={title:`Feedback/Toast`,component:g},x={start:`left`,end:`right`,center:`center`},S=({vertical:e=`bottom`,horizontal:t=`end`,...n})=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(`span`,{children:[`Look at the `,e,` `,x[t],` of this story to see the toast.`]}),(0,y.jsx)(`div`,{className:`w-full h-full`,children:(0,y.jsx)(g,{...n,vertical:e,horizontal:t,children:`Default toast`})})]}),C=({vertical:e=`bottom`,horizontal:t=`end`,...n})=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(`span`,{children:[`Look at the `,e,` `,x[t],` of this story to see the toast.`]}),(0,y.jsx)(g,{...n,vertical:e,horizontal:t,children:(0,y.jsx)(l,{status:`info`,children:`New message arrived.`})})]}),w=({vertical:e=`bottom`,horizontal:t=`end`,...n})=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(`span`,{children:[`Look at the `,e,` `,x[t],` of this story to see the toast.`]}),(0,y.jsxs)(g,{...n,vertical:e,horizontal:t,children:[(0,y.jsx)(l,{status:`info`,children:`New message arrived.`}),(0,y.jsx)(l,{status:`success`,children:`Message sent successfully.`})]})]}),T=[`info`,`success`,`warning`,`error`],E=e=>{let[t,n]=v.useState([{text:`This is a custom alert!`,status:`info`}]),r=()=>{n(e=>[...e,{text:`New message arrived.`,status:T[Math.floor(Math.random()*T.length)]}])},i=e=>{n(t=>t.filter((t,n)=>n!==e))};return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(s,{onClick:r,children:`Add Toast`}),(0,y.jsx)(g,{...e,children:t.map((e,t)=>(0,y.jsxs)(l,{status:e.status,children:[(0,y.jsx)(`div`,{className:`w-full flex-row justify-between gap-2`,children:(0,y.jsx)(`h3`,{children:e.text})}),(0,y.jsx)(s,{color:`ghost`,onClick:()=>i(t),children:`X`})]},t))})]})},D=[`Default`,`WithAlert`,`WithMultipleAlerts`,`DynamicAlerts`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`({
  vertical = 'bottom',
  horizontal = 'end',
  ...args
}) => {
  return <>\r
      <span>\r
        Look at the {vertical} {horizontalMapping[horizontal]} of this story to\r
        see the toast.\r
      </span>\r
      <div className="w-full h-full">\r
        <Toast {...args} vertical={vertical} horizontal={horizontal}>\r
          Default toast\r
        </Toast>\r
      </div>\r
    </>;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`({
  vertical = 'bottom',
  horizontal = 'end',
  ...args
}) => {
  return <>\r
      <span>\r
        Look at the {vertical} {horizontalMapping[horizontal]} of this story to\r
        see the toast.\r
      </span>\r
      <Toast {...args} vertical={vertical} horizontal={horizontal}>\r
        <Alert status="info">New message arrived.</Alert>\r
      </Toast>\r
    </>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`({
  vertical = 'bottom',
  horizontal = 'end',
  ...args
}) => {
  return <>\r
      <span>\r
        Look at the {vertical} {horizontalMapping[horizontal]} of this story to\r
        see the toast.\r
      </span>\r
      <Toast {...args} vertical={vertical} horizontal={horizontal}>\r
        <Alert status="info">New message arrived.</Alert>\r
        <Alert status="success">Message sent successfully.</Alert>\r
      </Toast>\r
    </>;
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => {
  const [alerts, setAlerts] = React.useState<DynamicToastChild[]>([{
    text: 'This is a custom alert!',
    status: 'info'
  }]);
  const handleAddToast = () => {
    setAlerts(alerts => [...alerts, {
      text: 'New message arrived.',
      status: dynamicToastChildStatuses[Math.floor(Math.random() * dynamicToastChildStatuses.length)]
    }]);
  };
  const handleRemoveToast = (index: number) => {
    setAlerts(alerts => alerts.filter((_, i) => i !== index));
  };
  return <div>\r
      <Button onClick={handleAddToast}>Add Toast</Button>\r
      <Toast {...args}>\r
        {alerts.map((alert, index) => <Alert key={index} status={alert.status}>\r
            <div className="w-full flex-row justify-between gap-2">\r
              <h3>{alert.text}</h3>\r
            </div>\r
            <Button color="ghost" onClick={() => handleRemoveToast(index)}>\r
              X\r
            </Button>\r
          </Alert>)}\r
      </Toast>\r
    </div>;
}`,...E.parameters?.docs?.source}}}})))()}O();export{S as Default,E as DynamicAlerts,C as WithAlert,w as WithMultipleAlerts,D as __namedExportsOrder,b as default};