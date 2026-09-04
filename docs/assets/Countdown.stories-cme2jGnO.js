import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r,t as i}from"./bundle-mjs-C6fYOv-m.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";function o({value:e,dataTheme:t,className:n,style:i,...a}){let o=r(`countdown`,n),c=Number.isFinite(e)?Math.min(99,Math.max(0,e)):0,l={...i,"--value":c};return(0,s.jsx)(`span`,{role:`timer`,"aria-live":a[`aria-live`]??`polite`,"aria-label":a[`aria-label`]??String(c),...a,"data-theme":t,className:o,children:(0,s.jsx)(`span`,{style:l,children:c})})}var s;function c(){return(c=t((()=>{n(),i(),s=a();try{o.displayName=`Countdown`,o.__docgenInfo={description:``,displayName:`Countdown`,filePath:`/home/runner/work/react-daisyui/react-daisyui/src/Countdown/Countdown.tsx`,methods:[],props:{dataTheme:{defaultValue:null,declarations:[{fileName:`react-daisyui/src/types.ts`,name:`TypeLiteral`}],description:``,name:`dataTheme`,required:!1,tags:{},type:{name:`string | undefined`}},value:{defaultValue:null,declarations:[{fileName:`react-daisyui/src/Countdown/Countdown.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}var l;function u(){return(u=t((()=>{c(),l=o;try{o.displayName=`Countdown`,o.__docgenInfo={description:``,displayName:`Countdown`,filePath:`/home/runner/work/react-daisyui/react-daisyui/src/Countdown/index.tsx`,methods:[],props:{dataTheme:{defaultValue:null,declarations:[{fileName:`react-daisyui/src/types.ts`,name:`TypeLiteral`}],description:``,name:`dataTheme`,required:!1,tags:{},type:{name:`string | undefined`}},value:{defaultValue:null,declarations:[{fileName:`react-daisyui/src/Countdown/Countdown.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}var d,f,p,m,h,g,_,v;function y(){return(y=t((()=>{d=e(n(),1),u(),f=a(),p={title:`Data Display/Countdown`,component:l},m=e=>{let[t,n]=(0,d.useState)(e.value);return(0,d.useEffect)(()=>{let t=setTimeout(()=>{n(t=>t<=0?e.value:t-1)},1e3);return()=>{clearTimeout(t)}},[t]),(0,f.jsx)(l,{className:`text-2xl`,value:t})},m.args={value:50},h=e=>{let[t,n]=(0,d.useState)(e.value);return(0,d.useEffect)(()=>{let t=setTimeout(()=>{n(t=>t<=0?e.value:t-1)},1e3);return()=>{clearTimeout(t)}},[t]),(0,f.jsxs)(`span`,{className:`font-mono text-2xl`,children:[(0,f.jsx)(l,{value:10}),`:`,(0,f.jsx)(l,{value:24}),`:`,(0,f.jsx)(l,{value:t})]})},h.args={value:34},g=e=>{let[t,n]=(0,d.useState)(e.value);return(0,d.useEffect)(()=>{let t=setTimeout(()=>{n(t=>t<=0?e.value:t-1)},1e3);return()=>{clearTimeout(t)}},[t]),(0,f.jsxs)(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[(0,f.jsxs)(`div`,{className:`flex flex-col`,children:[(0,f.jsx)(l,{className:`font-mono text-5xl`,value:15}),`days`]}),(0,f.jsxs)(`div`,{className:`flex flex-col`,children:[(0,f.jsx)(l,{className:`font-mono text-5xl`,value:10}),`hours`]}),(0,f.jsxs)(`div`,{className:`flex flex-col`,children:[(0,f.jsx)(l,{className:`font-mono text-5xl`,value:24}),`min`]}),(0,f.jsxs)(`div`,{className:`flex flex-col`,children:[(0,f.jsx)(l,{className:`font-mono text-5xl`,value:t}),`sec`]})]})},g.args={value:37},_=e=>{let[t,n]=(0,d.useState)(e.value);return(0,d.useEffect)(()=>{let t=setTimeout(()=>{n(t=>t<=0?e.value:t-1)},1e3);return()=>{clearTimeout(t)}},[t]),(0,f.jsxs)(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[(0,f.jsxs)(`div`,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,children:[(0,f.jsx)(l,{className:`font-mono text-5xl`,value:15}),`days`]}),(0,f.jsxs)(`div`,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,children:[(0,f.jsx)(l,{className:`font-mono text-5xl`,value:10}),`hours`]}),(0,f.jsxs)(`div`,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,children:[(0,f.jsx)(l,{className:`font-mono text-5xl`,value:24}),`min`]}),(0,f.jsxs)(`div`,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,children:[(0,f.jsx)(l,{className:`font-mono text-5xl`,value:t}),`sec`]})]})},_.args={value:26},v=[`Default`,`Clock`,`WithLabels`,`WithBoxes`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<number>(args.value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(v => v <= 0 ? args.value : v - 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return <Countdown className="text-2xl" value={value} />;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<number>(args.value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(v => v <= 0 ? args.value : v - 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return <span className="font-mono text-2xl">
      <Countdown value={10} />:
      <Countdown value={24} />:
      <Countdown value={value} />
    </span>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<number>(args.value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(v => v <= 0 ? args.value : v - 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col">
        <Countdown className="font-mono text-5xl" value={15} />
        days
      </div>
      <div className="flex flex-col">
        <Countdown className="font-mono text-5xl" value={10} />
        hours
      </div>
      <div className="flex flex-col">
        <Countdown className="font-mono text-5xl" value={24} />
        min
      </div>
      <div className="flex flex-col">
        <Countdown className="font-mono text-5xl" value={value} />
        sec
      </div>
    </div>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<number>(args.value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(v => v <= 0 ? args.value : v - 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <Countdown className="font-mono text-5xl" value={15} />
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <Countdown className="font-mono text-5xl" value={10} />
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <Countdown className="font-mono text-5xl" value={24} />
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <Countdown className="font-mono text-5xl" value={value} />
        sec
      </div>
    </div>;
}`,..._.parameters?.docs?.source}}}})))()}y();export{h as Clock,m as Default,_ as WithBoxes,g as WithLabels,v as __namedExportsOrder,p as default};