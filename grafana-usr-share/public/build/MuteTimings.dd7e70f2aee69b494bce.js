"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9355],{44981:(e,t,i)=>{i.r(t),i.d(t,{default:()=>J});var n=i(68404),a=i(70356),s=i(38953),l=i(2843),r=i(19512),o=i(64850),d=i(52423),m=i(59052),u=i(16755),c=i(71980),v=i(65678),g=i(4645),h=i(8006),p=i(69066),f=i(46150),y=i(76938),_=i(64834),j=i(72710),x=i(23691),b=i(82897);const k=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],w=["january","february","march","april","may","june","july","august","september","october","november","december"],I={times:[{start_time:"",end_time:""}],weekdays:"",days_of_month:"",months:"",years:""},C=(e,t,i)=>!e||(e.split(",").map((e=>e.trim())).every((e=>e.split(":").every(t)))||i),N=e=>e?e.split(",").map((e=>e.trim())):void 0;var T=i(5302),$=i(39833),M=i(73615),R=i(47628),S=i(34117),O=i(46889),E=i(23734),q=i(45916);const A=e=>{var t,i,n;let{intervalIndex:a}=e;const s=(0,u.wW)(L),{register:l,formState:r}=(0,m.Gc)(),{fields:o,append:d,remove:c}=(0,m.Dq)({name:`time_intervals.${a}.times`}),p=e=>{if(!e)return!0;const[t,i]=e.split(":").map((e=>parseInt(e,10)));return(24===t?0===i:t>=0&&t<25&&(i>-1&&i<60))||"Time is invalid"},f=null===(t=r.errors.time_intervals)||void 0===t?void 0:t[a],y=null!==(i=null==f||null===(n=f.times)||void 0===n?void 0:n.some((e=>(null==e?void 0:e.start_time)||(null==e?void 0:e.end_time))))&&void 0!==i&&i;return(0,q.jsxs)("div",{children:[(0,q.jsx)(v.g,{className:s.field,label:"Time range",description:"The time inclusive of the starting time and exclusive of the end time in UTC",invalid:y,error:y?"Times must be between 00:00 and 24:00 UTC":"",children:(0,q.jsx)(q.Fragment,{children:o.map(((e,t)=>{var i,n,r,o;return(0,q.jsx)("div",{className:s.timeRange,children:(0,q.jsxs)(S.Z,{children:[(0,q.jsx)(O._,{label:"Start time",invalid:!(null==f||null===(i=f.times)||void 0===i||null===(n=i[t])||void 0===n||!n.start_time),children:(0,q.jsx)(g.I,Object.assign({},l(`time_intervals.${a}.times.${t}.start_time`,{validate:p}),{className:s.timeRangeInput,defaultValue:e.start_time,placeholder:"HH:MM","data-testid":"mute-timing-starts-at"}))}),(0,q.jsx)(O._,{label:"End time",invalid:!(null==f||null===(r=f.times)||void 0===r||null===(o=r[t])||void 0===o||!o.end_time),children:(0,q.jsx)(g.I,Object.assign({},l(`time_intervals.${a}.times.${t}.end_time`,{validate:p}),{className:s.timeRangeInput,defaultValue:e.end_time,placeholder:"HH:MM","data-testid":"mute-timing-ends-at"}))}),(0,q.jsx)(E.h,{className:s.deleteTimeRange,title:"Remove",name:"trash-alt",type:"button",onClick:e=>{e.preventDefault(),c(t)}})]})},e.id)}))})}),(0,q.jsx)(h.zx,{className:s.addTimeRange,variant:"secondary",type:"button",icon:"plus",onClick:()=>d({start_time:"",end_time:""}),children:"Add another time range"})]})},L=e=>({field:d.css`
    margin-bottom: 0;
  `,timeRange:d.css`
    margin-bottom: ${e.spacing(1)};
  `,timeRangeInput:d.css`
    width: 120px;
  `,deleteTimeRange:d.css`
    margin: ${e.spacing(1)} 0 0 ${e.spacing(.5)};
  `,addTimeRange:d.css`
    margin-bottom: ${e.spacing(2)};
  `});var P;const V=()=>{const e=(0,u.wW)(U),{formState:t,register:i}=(0,m.Gc)(),{fields:n,append:a,remove:s}=(0,m.Dq)({name:"time_intervals"});return(0,q.jsx)(c.C,{className:e.timeIntervalLegend,label:"Time intervals",children:(0,q.jsxs)(q.Fragment,{children:[P||(P=(0,q.jsx)("p",{children:"A time interval is a definition for a moment in time. All fields are lists, and at least one list element must be satisfied to match the field. If a field is left blank, any moment of time will match the field. For an instant of time to match a complete time interval, all fields must match. A mute timing can contain multiple time intervals."})),n.map(((n,a)=>{var l,r,o,d,m,u,c,p,f,y,_,j,x,b,I,N,T,$,M,R,S,O;const E=t.errors;return(0,q.jsxs)("div",{className:e.timeIntervalSection,children:[(0,q.jsx)(A,{intervalIndex:a}),(0,q.jsx)(v.g,{label:"Days of the week",error:null!==(l=null===(r=E.time_intervals)||void 0===r||null===(o=r[a])||void 0===o||null===(d=o.weekdays)||void 0===d?void 0:d.message)&&void 0!==l?l:"",invalid:!(null===(m=E.time_intervals)||void 0===m||null===(u=m[a])||void 0===u||!u.weekdays),children:(0,q.jsx)(g.I,Object.assign({},i(`time_intervals.${a}.weekdays`,{validate:e=>C(e,(e=>k.includes(e.toLowerCase())),"Invalid day of the week")}),{className:e.input,"data-testid":"mute-timing-weekdays",defaultValue:n.weekdays,placeholder:"Example: monday, tuesday:thursday"}))}),(0,q.jsx)(v.g,{label:"Days of the month",description:"The days of the month, 1-31, of a month. Negative values can be used to represent days which begin at the end of the month",invalid:!(null===(c=E.time_intervals)||void 0===c||null===(p=c[a])||void 0===p||!p.days_of_month),error:null===(f=E.time_intervals)||void 0===f||null===(y=f[a])||void 0===y||null===(_=y.days_of_month)||void 0===_?void 0:_.message,children:(0,q.jsx)(g.I,Object.assign({},i(`time_intervals.${a}.days_of_month`,{validate:e=>C(e,(e=>{const t=parseInt(e,10);return t>-31&&t<0||t>0&&t<32}),"Invalid day")}),{className:e.input,defaultValue:n.days_of_month,placeholder:"Example: 1, 14:16, -1","data-testid":"mute-timing-days"}))}),(0,q.jsx)(v.g,{label:"Months",description:"The months of the year in either numerical or the full calendar month",invalid:!(null===(j=E.time_intervals)||void 0===j||null===(x=j[a])||void 0===x||!x.months),error:null===(b=E.time_intervals)||void 0===b||null===(I=b[a])||void 0===I||null===(N=I.months)||void 0===N?void 0:N.message,children:(0,q.jsx)(g.I,Object.assign({},i(`time_intervals.${a}.months`,{validate:e=>C(e,(e=>w.includes(e)||parseInt(e,10)<13&&parseInt(e,10)>0),"Invalid month")}),{className:e.input,placeholder:"Example: 1:3, may:august, december",defaultValue:n.months,"data-testid":"mute-timing-months"}))}),(0,q.jsx)(v.g,{label:"Years",invalid:!(null===(T=E.time_intervals)||void 0===T||null===($=T[a])||void 0===$||!$.years),error:null!==(M=null===(R=E.time_intervals)||void 0===R||null===(S=R[a])||void 0===S||null===(O=S.years)||void 0===O?void 0:O.message)&&void 0!==M?M:"",children:(0,q.jsx)(g.I,Object.assign({},i(`time_intervals.${a}.years`,{validate:e=>C(e,(e=>/^\d{4}$/.test(e)),"Invalid year")}),{className:e.input,placeholder:"Example: 2021:2022, 2030",defaultValue:n.years,"data-testid":"mute-timing-years"}))}),(0,q.jsx)(h.zx,{type:"button",variant:"destructive",icon:"trash-alt",onClick:()=>s(a),children:"Remove time interval"})]},n.id)})),(0,q.jsx)(h.zx,{type:"button",variant:"secondary",className:e.removeTimeIntervalButton,onClick:()=>{a(I)},icon:"plus",children:"Add another time interval"})]})})},U=e=>({input:d.css`
    width: 400px;
  `,timeIntervalLegend:d.css`
    legend {
      font-size: 1.25rem;
    }
  `,timeIntervalSection:d.css`
    background-color: ${e.colors.background.secondary};
    padding: ${e.spacing(1)};
    margin-bottom: ${e.spacing(1)};
  `,removeTimeIntervalButton:d.css`
    margin-top: ${e.spacing(1)};
  `});var B,z;const D={icon:"sitemap",breadcrumbs:[{title:"Notification Policies",url:"alerting/routes"}]},F=e=>({input:d.css`
    width: 400px;
  `,submitButton:d.css`
    margin-left: ${e.spacing(1)};
  `}),G=e=>{var t,i,a;let{muteTiming:s,showError:r,provenance:d}=e;const k=(0,o.I0)(),w=(0,f.k)("notification"),[C,S]=(0,p.k)(w),O=(0,u.wW)(F),E={alertmanager_config:{},template_files:{}},A=(0,y._)((e=>e.amConfigs)),{result:L=E,loading:P}=C&&A[C]||T.oq,U=null!==(t=null==L?void 0:L.alertmanager_config)&&void 0!==t?t:{},G=(e=>(0,n.useMemo)((()=>{if(!e)return{name:"",time_intervals:[I]};const t=e.time_intervals.map((e=>{var t,i,n,a,s,l,r,o,d;return{times:null!==(t=e.times)&&void 0!==t?t:I.times,weekdays:null!==(i=null==e||null===(n=e.weekdays)||void 0===n?void 0:n.join(", "))&&void 0!==i?i:I.weekdays,days_of_month:null!==(a=null==e||null===(s=e.days_of_month)||void 0===s?void 0:s.join(", "))&&void 0!==a?a:I.days_of_month,months:null!==(l=null==e||null===(r=e.months)||void 0===r?void 0:r.join(", "))&&void 0!==l?l:I.months,years:null!==(o=null==e||null===(d=e.years)||void 0===d?void 0:d.join(", "))&&void 0!==o?o:I.years}}));return{name:e.name,time_intervals:t}}),[e]))(s),W=(0,m.cI)({defaultValues:G});return(0,q.jsxs)(M.J,{pageId:"am-routes",pageNav:Object.assign({},D,{id:s?"alert-policy-edit":"alert-policy-new",text:s?"Edit mute timing":"New mute timing"}),children:[(0,q.jsx)($.P,{current:C,onChange:S,disabled:!0,dataSources:w}),d&&(0,q.jsx)(R.Xq,{resource:R.Uv.MuteTiming}),L&&!P&&(0,q.jsx)(m.RV,Object.assign({},W,{children:(0,q.jsxs)("form",{onSubmit:W.handleSubmit((e=>{var t,i;const n=(e=>{const t=e.time_intervals.map((e=>{var t;let{times:i,weekdays:n,days_of_month:a,months:s,years:l}=e;const r={times:i.filter((e=>{let{start_time:t,end_time:i}=e;return!!t&&!!i})),weekdays:null===(t=N(n))||void 0===t?void 0:t.map((e=>e.toLowerCase())),days_of_month:N(a),months:N(s),years:N(l)};return(0,b.omitBy)(r,b.isUndefined)}));return{name:e.name,time_intervals:t}})(e),a=s?null==U||null===(t=U.mute_time_intervals)||void 0===t?void 0:t.filter((e=>{let{name:t}=e;return t!==s.name})):U.mute_time_intervals,l=Object.assign({},L,{alertmanager_config:Object.assign({},U,{route:s&&n.name!==s.name?(0,j.FM)(n.name,s.name,null!==(i=U.route)&&void 0!==i?i:{}):U.route,mute_time_intervals:[...a||[],n]})});k((0,_.mM)({newConfig:l,oldConfig:L,alertManagerSourceName:C,successMessage:"Mute timing saved",redirectPath:"/alerting/routes/"}))})),"data-testid":"mute-timing-form",children:[r&&(B||(B=(0,q.jsx)(l.b,{title:"No matching mute timing found"}))),(0,q.jsxs)(c.C,{label:"Create mute timing",disabled:Boolean(d),children:[(0,q.jsx)(v.g,{required:!0,label:"Name",description:"A unique name for the mute timing",invalid:!(null===(i=W.formState.errors)||void 0===i||!i.name),error:null===(a=W.formState.errors.name)||void 0===a?void 0:a.message,children:(0,q.jsx)(g.I,Object.assign({},W.register("name",{required:!0,validate:e=>{if(!s){var t;return!(null==U||null===(t=U.mute_time_intervals)||void 0===t?void 0:t.find((t=>{let{name:i}=t;return e===i})))||`Mute timing already exists for "${e}"`}return e.length>0||"Name is required"}}),{className:O.input,"data-testid":"mute-timing-name"}))}),z||(z=(0,q.jsx)(V,{})),(0,q.jsx)(h.Qj,{type:"button",variant:"secondary",href:(0,x.eQ)("/alerting/routes/",C),children:"Cancel"}),(0,q.jsx)(h.zx,{type:"submit",className:O.submitButton,children:s?"Save":"Submit"})]})]})}))]})};var W,H,Z;const J=()=>{const[e]=(0,r.K)(),t=(0,o.I0)(),i=(0,f.k)("notification"),[d]=(0,p.k)(i),m=(0,y._)((e=>e.amConfigs)),u=(0,n.useCallback)((()=>{d&&t((0,_.Yh)(d))}),[d,t]);(0,n.useEffect)((()=>{u()}),[u]);const{result:c,error:v,loading:g}=d&&m[d]||T.oq,h=null==c?void 0:c.alertmanager_config,j=(0,n.useCallback)((e=>{var t;const i=null==h||null===(t=h.mute_time_intervals)||void 0===t?void 0:t.find((t=>{let{name:i}=t;return i===e}));if(i){var n;const e=(null!==(n=null==h?void 0:h.muteTimeProvenances)&&void 0!==n?n:{})[i.name];return Object.assign({},i,{provenance:e})}return i}),[h]);return(0,q.jsxs)(q.Fragment,{children:[g&&(W||(W=(0,q.jsx)(s.u,{text:"Loading mute timing"}))),v&&!g&&(0,q.jsx)(l.b,{severity:"error",title:`Error loading Alertmanager config for ${d}`,children:v.message||"Unknown error."}),c&&!v&&(0,q.jsxs)(a.rs,{children:[H||(H=(0,q.jsx)(a.AW,{exact:!0,path:"/alerting/routes/mute-timing/new",children:(0,q.jsx)(G,{})})),(0,q.jsx)(a.AW,{exact:!0,path:"/alerting/routes/mute-timing/edit",children:()=>{if(e.muteName){const t=j(String(e.muteName)),i=null==t?void 0:t.provenance;return(0,q.jsx)(G,{muteTiming:t,showError:!t,provenance:i})}return Z||(Z=(0,q.jsx)(a.l_,{to:"/alerting/routes"}))}})]})]})}},73615:(e,t,i)=>{i.d(t,{J:()=>s});i(68404);var n=i(37417),a=i(45916);const s=e=>{let{children:t,pageId:i,pageNav:s,isLoading:l}=e;return(0,a.jsx)(n.T,{pageNav:s,navId:i,children:(0,a.jsx)(n.T.Contents,{isLoading:l,children:t})})}},47628:(e,t,i)=>{i.d(t,{C0:()=>d,Uv:()=>r,Xq:()=>o});i(68404);var n,a=i(2843),s=i(64313),l=i(45916);let r;!function(e){e.ContactPoint="contact point",e.Template="template",e.MuteTiming="mute timing",e.AlertRule="alert rule",e.RootNotificationPolicy="root notification policy"}(r||(r={}));const o=e=>{let{resource:t}=e;return(0,l.jsxs)(a.b,{title:`This ${t} cannot be edited through the UI`,severity:"info",children:["This ",t," has been provisioned, that means it was created by config. Please contact your server admin to update this ",t,"."]})},d=()=>n||(n=(0,l.jsx)(s.C,{text:"Provisioned",color:"purple"}))},69066:(e,t,i)=>{i.d(t,{k:()=>o});var n=i(68404),a=i(19512),s=i(78130),l=i(74846),r=i(43271);function o(e){const[t,i]=(0,a.K)(),o=function(e){return(0,n.useCallback)((t=>e.map((e=>e.name)).includes(t)),[e])}(e),d=(0,n.useCallback)((e=>{o(e)&&(e===r.GC?(s.Z.delete(l.de),i({[l.c4]:null})):(s.Z.set(l.de,e),i({[l.c4]:e})))}),[i,o]),m=t[l.c4];if(m&&"string"==typeof m)return o(m)?[m,d]:[void 0,d];const u=s.Z.get(l.de);return u&&"string"==typeof u&&o(u)?(d(u),[u,d]):o(r.GC)?[r.GC,d]:[void 0,d]}},46150:(e,t,i)=>{i.d(t,{k:()=>s});var n=i(68404),a=i(43271);function s(e){return(0,n.useMemo)((()=>(0,a.LE)(e)),[e])}}}]);
//# sourceMappingURL=MuteTimings.dd7e70f2aee69b494bce.js.map