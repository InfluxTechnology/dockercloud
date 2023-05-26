"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3778],{64875:(e,a,n)=>{n.r(a),n.d(a,{FolderLibraryPanelsPage:()=>p,default:()=>f});var s=n(68404),i=n(36635),l=n(66015),o=n(37417),d=n(85829),r=n(47782),t=n(65768),c=n(41120),u=n(83146),h=n(45916);const b={getFolderByUid:c.Pb};function p(e){let{pageNav:a,getFolderByUid:n,folderUid:i}=e;const{loading:d}=(0,l.Z)((async()=>await n(i)),[n,i]),[c,u]=(0,s.useState)(void 0);return(0,h.jsx)(o.T,{navId:"dashboards/browse",pageNav:a.main,children:(0,h.jsxs)(o.T.Contents,{isLoading:d,children:[(0,h.jsx)(r.N,{onClick:u,currentFolderUID:i,showSecondaryActions:!0,showSort:!0,showPanelFilter:!0}),c?(0,h.jsx)(t.b,{onDismiss:()=>u(void 0),libraryPanel:c}):null]})})}const f=(0,i.connect)(((e,a)=>{const n=a.match.params.uid;return{pageNav:(0,d.ht)(e.navIndex,`folder-library-panels-${n}`,(0,u._)(1)),folderUid:n}}),b)(p)},65768:(e,a,n)=>{n.d(a,{b:()=>v});var s,i=n(52423),l=n(99151),o=n.n(l),d=n(68404),r=n(274),t=n(80795),c=n(16755),u=n(78941),h=n(70917),b=n(8006),p=n(98865),f=n(45916);function v(e){let{libraryPanel:a,onDismiss:n}=e;const i=(0,c.wW)(g),[l,v]=(0,d.useState)(!1),[w,x]=(0,d.useState)(0),[j,C]=(0,d.useState)(void 0);(0,d.useEffect)((()=>{(async()=>{const e=await(0,p.Ef)(a.uid);x(e.length)})()}),[a.uid]);const y=(0,d.useCallback)((e=>async function(e,a,n){n(!0);const s=(await(0,p.E8)(e)).filter((e=>e.title.toLowerCase().includes(a.toLowerCase()))).map((e=>({label:e.title,value:e})));return n(!1),s}(a.uid,e,v)),[a.uid]),k=(0,d.useMemo)((()=>o()(y,300,{leading:!0})),[y]);return(0,f.jsxs)(u.u,{title:"View panel in dashboard",onDismiss:n,onClickBackdrop:n,isOpen:!0,children:[(0,f.jsxs)("div",{className:i.container,children:[0===w?s||(s=(0,f.jsx)("span",{children:"Panel is not linked to a dashboard. Add the panel to a dashboard and retry."})):null,w>0?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("p",{children:["This panel is being used in"," ",(0,f.jsxs)("strong",{children:[w," ",w>1?"dashboards":"dashboard"]}),".Please choose which dashboard to view the panel in:"]}),(0,f.jsx)(h.qb,{isClearable:!0,isLoading:l,defaultOptions:!0,loadOptions:k,onChange:C,placeholder:"Start typing to search for dashboard",noOptionsMessage:"No dashboards found"})]}):null]}),(0,f.jsxs)(u.u.ButtonRow,{children:[(0,f.jsx)(b.zx,{variant:"secondary",onClick:n,fill:"outline",children:"Cancel"}),(0,f.jsx)(b.zx,{onClick:e=>{var a;e.preventDefault(),t.E1.push(r.Cj.renderUrl(`/d/${null==j||null===(a=j.value)||void 0===a?void 0:a.uid}`,{}))},disabled:!Boolean(j),children:j?`View panel in ${null==j?void 0:j.label}...`:"View panel in dashboard..."})]})]})}function g(e){return{container:i.css``}}}}]);
//# sourceMappingURL=FolderLibraryPanelsPage.af9009e15751e9799f74.js.map