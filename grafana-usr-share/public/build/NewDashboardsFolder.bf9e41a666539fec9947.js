"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8932],{20043:(e,r,a)=>{a.r(r),a.d(r,{NewDashboardsFolder:()=>w,default:()=>x});var s,t,d=a(68404),l=a(36635),n=a(65737),o=a(3218),i=a(65678),u=a(4645),c=a(8006),h=a(37417),b=a(77281),m=a(41120),f=a(45916);function N(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}const p={createNewFolder:m.W7},g=(0,l.connect)(null,p),v={folderName:""};class w extends d.PureComponent{constructor(){super(...arguments),N(this,"onSubmit",(e=>{this.props.createNewFolder(e.folderName)})),N(this,"validateFolderName",(e=>b.t.validateNewFolderName(e).then((()=>!0)).catch((e=>e.message)))),N(this,"pageNav",{text:"Create a new folder",subTitle:"Folders provide a way to group dashboards and alert rules.",breadcrumbs:[{title:"Dashboards",url:"dashboards"}]})}render(){return(0,f.jsx)(h.T,{navId:"dashboards/browse",pageNav:this.pageNav,children:(0,f.jsxs)(h.T.Contents,{children:[!n.v.featureToggles.topnav&&(s||(s=(0,f.jsx)("h3",{children:"New dashboard folder"}))),(0,f.jsx)(o.l,{defaultValues:v,onSubmit:this.onSubmit,children:e=>{let{register:r,errors:a}=e;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i.g,{label:"Folder name",invalid:!!a.folderName,error:a.folderName&&a.folderName.message,children:(0,f.jsx)(u.I,Object.assign({id:"folder-name-input"},r("folderName",{required:"Folder name is required.",validate:async e=>await this.validateFolderName(e)})))}),t||(t=(0,f.jsx)(c.zx,{type:"submit",children:"Create"}))]})}})]})})}}const x=g(w)}}]);
//# sourceMappingURL=NewDashboardsFolder.bf9e41a666539fec9947.js.map