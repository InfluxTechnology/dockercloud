"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9738],{20154:(e,s,a)=>{a.r(s),a.d(s,{ServiceAccountCreatePage:()=>C,default:()=>y});var r,n,i=a(68404),t=a(93570),o=a(80795),l=a(3218),c=a(71980),d=a(65678),u=a(4645),g=a(8006),h=a(37417),b=a(41455),p=a(97928),m=a(68374),v=a(64850),x=a(74408),j=a(45916);const C=e=>{let{}=e;const[s,a]=(0,i.useState)([]),[C,y]=(0,i.useState)([]),A=m.Vt.user.orgId,[I,R]=(0,i.useState)({id:0,orgId:m.Vt.user.orgId,role:v.B5.Viewer,tokens:0,name:"",login:"",isDisabled:!1,createdAt:"",teams:[]});(0,i.useEffect)((()=>{m.Vt.licensedAccessControlEnabled()&&async function(){try{if(m.Vt.hasPermission(v.bW.ActionRolesList)){let e=await(0,p.ul)(A);a(e)}}catch(e){console.error("Error loading options",e)}}()}),[A]);const f=(0,i.useCallback)((async e=>{e.role=I.role;const s=await(async e=>{const s=await(0,t.i)().post("/api/serviceaccounts/",e);return await m.Vt.fetchUserPermissions(),s})(e);try{const a={avatarUrl:s.avatarUrl,id:s.id,isDisabled:s.isDisabled,login:s.login,name:s.name,orgId:s.orgId,role:s.role,tokens:s.tokens};await(async(e,s)=>(0,t.i)().patch(`/api/serviceaccounts/${e}`,s))(s.id,e),m.Vt.licensedAccessControlEnabled()&&m.Vt.hasPermission(v.bW.ActionUserRolesAdd)&&m.Vt.hasPermission(v.bW.ActionUserRolesRemove)&&await(0,p.hB)(C,a.id,a.orgId)}catch(e){console.error(e)}o.E1.push(`/org/serviceaccounts/${s.id}`)}),[I.role,C]),V=e=>{R(Object.assign({},I,{role:e}))},w=(e,s,a)=>{y(e)};return(0,j.jsx)(h.T,{navId:"serviceaccounts",pageNav:{text:"Create service account"},children:(0,j.jsxs)(h.T.Contents,{children:[r||(r=(0,j.jsx)(h.T.OldNavOnly,{children:(0,j.jsx)("h3",{className:"page-sub-heading",children:"Create service account"})})),(0,j.jsx)(l.l,{onSubmit:f,validateOn:"onSubmit",children:e=>{let{register:a,errors:r}=e;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(c.C,{children:[(0,j.jsx)(d.g,{label:"Display name",required:!0,invalid:!!r.name,error:r.name?"Display name is required":void 0,children:(0,j.jsx)(u.I,Object.assign({id:"display-name-input"},a("name",{required:!0}),{autoFocus:!0}))}),(0,j.jsx)(d.g,{label:"Role",children:m.Vt.licensedAccessControlEnabled()?(0,j.jsx)(b.R,{apply:!0,userId:I.id||0,orgId:I.orgId,basicRole:I.role,onBasicRoleChange:V,roleOptions:s,onApplyRoles:w,pendingRoles:C,maxWidth:"100%"}):(0,j.jsx)(x.A,{"aria-label":"Role",value:I.role,onChange:V})})]}),n||(n=(0,j.jsx)(g.zx,{type:"submit",children:"Create"}))]})}})]})})},y=C}}]);
//# sourceMappingURL=ServiceAccountCreatePage.3de7a8ecd9ccc1fb960a.js.map