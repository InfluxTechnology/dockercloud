"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3270],{89118:(e,a,r)=>{r.d(a,{ZQ:()=>O,mV:()=>k,f1:()=>C,$M:()=>U});var t=r(36298),s=r(88246),o=r(92721),n=r(80795),d=r(93570),i=r(65737),l=r(93686),c=r(2247),u=r(47900),h=r(42200),b=r(78130),g=r(32086),p=r(94722),f=r(53091),v=r(60057),m=r(54876),w=r(98142),D=r(64850),y=r(45921),S=r(20275),x=r(84455),N=r(62646),A=r(27904),E=r(31181);var j=r(39556);const I=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.forEach((e=>{e.panels?I(e.panels,a):e.targets&&e.targets.forEach((e=>{var r;null!==(r=e.datasource)&&void 0!==r&&r.type&&(a[e.datasource.type]?a[e.datasource.type].push(e):a[e.datasource.type]=[e])}))})),a};function k(e){return async(a,r)=>{var k,U;a((0,j.sf)());const _=await async function(e,a,r){const s=b.Z.getObject(T);if(s)return C(),s;try{switch(e.routeName){case D.vq.Home:{const e=await h.ae.get("/api/dashboards/home");if(e.redirectUri){const a=t.u.stripBaseFromUrl(e.redirectUri);return n.E1.replace(a),null}return e.meta.canSave=!1,e.meta.canShare=!1,e.meta.canStar=!1,e}case D.vq.Public:return await g.pD.loadDashboard("public",e.urlSlug,e.accessToken);case D.vq.Normal:{const a=await g.pD.loadDashboard(e.urlType,e.urlSlug,e.urlUid);if(e.fixUrl&&a.meta.url&&!m.r0.isPlaying){const e=t.u.stripBaseFromUrl(a.meta.url),r=n.E1.getLocation().pathname;e!==r&&(n.E1.replace(Object.assign({},n.E1.getLocation(),{pathname:e})),console.log("not correct url correcting",e,r))}return a}case D.vq.New:return O(e.urlFolderId,e.panelType);case D.vq.Path:{var o;const a=null!==(o=e.urlSlug)&&void 0!==o?o:"";return await g.pD.loadDashboard(D.vq.Path,a,a)}default:throw{message:"Unknown route "+e.routeName}}}catch(e){return(0,d.kW)(e)&&e.cancelled||(a((0,j.jA)({message:"Failed to fetch dashboard",error:e})),console.error(e)),null}}(e,a);if(!_)return;let q;a((0,j.Nv)());try{q=new N.f(_.dashboard,_.meta)}catch(e){return a((0,j.jA)({message:"Failed create dashboard model",error:e})),void console.error(e)}const F=r(),P=n.E1.getSearchObject();P.orgId||n.E1.partial({orgId:F.user.orgId},!0);const R=(0,f.$t)();(0,p.h4)().setCurrent(q),R.init(q);const H=(0,w.mn)(null!==(k=e.urlUid)&&void 0!==k?k:q.uid);await a((0,S.LX)(H,q));if((0,y.Tl)({dashboard:q,timeSrv:R}).run({dashboard:q,range:R.timeRange()}),(0,x.cp)(r())===H&&r().dashboard.initPhase===D.bG.Services){try{q.processRepeats(),P.autofitpanels&&q.autoFitPanels(window.innerHeight,P.kiosk),e.keybindingSrv.setupDashboardBindings(q)}catch(e){e instanceof Error&&a((0,l.$l)((0,u.t_)("Dashboard init failed",e))),console.error(e)}e.routeName!==D.vq.New?(!function(e){const a={dashboardId:e.id,dashboardName:e.title,dashboardUid:e.uid,folderName:e.meta.folderTitle,eventName:A.ct.DashboardView,publicDashboardUid:e.meta.publicDashboardUid};(0,E.r_)(a)}(q),v.H.watch(q.uid)):v.H.leave(),""!==q.weekStart?(0,s.Ls)(q.weekStart):(0,s.Ls)(i.v.bootData.user.weekStart),c.Z.publish(new o.Pl({dashboardId:q.uid,orgId:F.user.orgId,userId:null===(U=F.user.user)||void 0===U?void 0:U.id,grafanaVersion:i.v.buildInfo.version,queries:I(q.panels)})),a((0,j.dS)(q))}}}function O(e,a){const r={meta:{canStar:!1,canShare:!1,canDelete:!1,isNew:!0,folderId:0},dashboard:{title:"New dashboard",panels:[{type:null!=a?a:"add-panel",gridPos:{x:0,y:0,w:12,h:9},title:"Panel Title"}]}};return e&&(r.meta.folderId=parseInt(e,10)),r}const T="DASHBOARD_FROM_LS_KEY";function U(e){b.Z.setObject(T,e)}function C(){b.Z.delete(T)}},73270:(e,a,r)=>{r.r(a),r.d(a,{AddToDashboard:()=>_});var t=r(68404),s=r(1696),o=r(64850),n=r(37744),d=r(82897),i=r(59052),l=r(36298),c=r(31181),u=r(80795),h=r(65737),b=r(78941),g=r(35258),p=r(65678),f=r(37625),v=r(2843),m=r(8006),w=r(71438),D=r(59196),y=r(89118),S=r(42200);let x;async function N(e){var a;const r=function(e,a){for(const{refId:r}of e.filter(A)){const e=E(r);if(a.flameGraphFrames.some(e))return"flamegraph";if(a.graphFrames.some(e))return"timeseries";if(a.logsFrames.some(e))return"logs";if(a.nodeGraphFrames.some(e))return"nodeGraph";if(a.traceFrames.some(e))return"traces"}return"table"}(e.queries,e.queryResponse),t={targets:e.queries,type:r,title:"New Panel",gridPos:{x:0,y:0,w:12,h:8},datasource:e.datasource};let s;if(e.dashboardUid)try{s=await S.ae.getDashboardByUid(e.dashboardUid)}catch(e){throw x.FETCH_DASHBOARD}else s=function(){const e=(0,y.ZQ)();return e.dashboard.panels=[],e}();s.dashboard.panels=[t,...null!==(a=s.dashboard.panels)&&void 0!==a?a:[]];try{(0,y.$M)(s)}catch{throw x.SET_DASHBOARD_LS}}!function(e){e.FETCH_DASHBOARD="fetch-dashboard",e.SET_DASHBOARD_LS="set-dashboard-ls-error"}(x||(x={}));const A=e=>!e.hide,E=e=>a=>a.refId===e;var j=r(45916);const I=["ref"],k=["ref","value","onChange"];function O(e,a){if(null==e)return{};var r,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(s[r]=e[r]);return s}var T,U;!function(e){e.NewDashboard="new-dashboard",e.ExistingDashboard="existing-dashboard"}(T||(T={})),function(e){e.UNKNOWN="unknown-error",e.NAVIGATION="navigation-error"}(U||(U={}));const C=e=>{let{onClose:a,exploreId:s}=e;const S=(0,o.v9)((0,n.F)(s)),[A,E]=(0,t.useState)(),{handleSubmit:C,control:_,formState:{errors:q},watch:F}=(0,i.cI)({defaultValues:{saveTarget:T.NewDashboard}}),P=D.Vt.hasAccess(o.bW.DashboardsCreate,D.Vt.isEditor),R=D.Vt.hasAccess(o.bW.DashboardsWrite,D.Vt.isEditor),H=[];P&&H.push({label:"New dashboard",value:T.NewDashboard}),R&&H.push({label:"Existing dashboard",value:T.ExistingDashboard});const B=H.length>1?F("saveTarget"):H[0].value,L=`Add panel to ${H.length>1?"dashboard":H[0].label.toLowerCase()}`,V=async(e,t)=>{E(void 0);const s=t.saveTarget===T.ExistingDashboard?t.dashboardUid:void 0;(0,c.ff)("e_2_d_submit",{newTab:e,saveTarget:t.saveTarget,queries:S.queries.length});try{var o;await N({dashboardUid:s,datasource:null===(o=S.datasourceInstance)||void 0===o?void 0:o.getRef(),queries:S.queries,queryResponse:S.queryResponse})}catch(e){switch(e){case x.FETCH_DASHBOARD:E({error:e,message:"Could not fetch dashboard information. Please try again."});break;case x.SET_DASHBOARD_LS:E({error:e,message:"Could not add panel to dashboard. Please try again."});break;default:E({error:U.UNKNOWN,message:"Something went wrong. Please try again."})}return}const n=function(e){return e?`d/${e}`:"dashboard/new"}(s);if(!e)return a(),void u.E1.push(l.u.stripBaseFromUrl(n));if(!!!r.g.open(h.v.appUrl+n,"_blank"))return E({error:U.NAVIGATION,message:"Could not navigate to the selected dashboard. Please try again."}),void(0,y.f1)();a()};return(0,t.useEffect)((()=>{(0,c.ff)("e_2_d_open")}),[]),(0,j.jsx)(b.u,{title:L,onDismiss:a,isOpen:!0,children:(0,j.jsxs)("form",{children:[H.length>1&&(0,j.jsx)(g.g,{control:_,render:e=>{let{}=e,a=O(e.field,I);return(0,j.jsx)(p.g,{label:"Target dashboard",description:"Choose where to add the panel.",children:(0,j.jsx)(f.S,Object.assign({options:H},a,{id:"e2d-save-target"}))})},name:"saveTarget"}),B===T.ExistingDashboard&&(0,j.jsx)(g.g,{render:e=>{var a;let{field:{onChange:r}}=e,t=O(e.field,k);return(0,j.jsx)(p.g,{label:"Dashboard",description:"Select in which dashboard the panel will be created.",error:null===(a=q.dashboardUid)||void 0===a?void 0:a.message,invalid:!!q.dashboardUid,children:(0,j.jsx)(w.o,Object.assign({},t,{inputId:"e2d-dashboard-picker",defaultOptions:!0,onChange:e=>r(null==e?void 0:e.uid)}))})},control:_,name:"dashboardUid",shouldUnregister:!0,rules:{required:{value:!0,message:"This field is required."}}}),A&&(0,j.jsx)(v.b,{severity:"error",title:"Error adding the panel",children:A.message}),(0,j.jsxs)(b.u.ButtonRow,{children:[(0,j.jsx)(m.zx,{type:"reset",onClick:a,fill:"outline",variant:"secondary",children:"Cancel"}),(0,j.jsx)(m.zx,{type:"submit",variant:"secondary",onClick:C((0,d.partial)(V,!0)),icon:"external-link-alt",children:"Open in new tab"}),(0,j.jsx)(m.zx,{type:"submit",variant:"primary",onClick:C((0,d.partial)(V,!1)),icon:"apps",children:"Open dashboard"})]})]})})},_=e=>{var a,r;let{exploreId:d}=e;const[i,l]=(0,t.useState)(!1),c=(0,n.F)(d),u=!(null===(a=(0,o.v9)(c))||void 0===a||null===(r=a.queries)||void 0===r||!r.length);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(s.h,{icon:"apps",onClick:()=>l(!0),"aria-label":"Add to dashboard",disabled:!u,children:"Add to dashboard"}),i&&(0,j.jsx)(C,{onClose:()=>l(!1),exploreId:d})]})}}}]);
//# sourceMappingURL=3270.7d8a80167bb498023bc4.js.map