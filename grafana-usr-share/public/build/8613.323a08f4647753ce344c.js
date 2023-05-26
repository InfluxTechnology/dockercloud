"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8613],{44812:(e,r,n)=>{n.d(r,{F:()=>o});var t=n(52423),l=(n(68404),n(16755)),s=n(39440),a=n(45916);const i=["renderExpandedContent"];const o=e=>{let{renderExpandedContent:r}=e,n=function(e,r){if(null==e)return{};var n,t,l={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,i);const o=(0,l.wW)(d);return(0,a.jsx)(s.t,Object.assign({renderExpandedContent:r?(e,n,l)=>(0,a.jsxs)(a.Fragment,{children:[!(n===l.length-1)&&(0,a.jsx)("div",{className:(0,t.cx)(o.contentGuideline,o.guideline)}),r(e,n,l)]}):void 0,renderPrefixHeader:()=>(0,a.jsx)("div",{className:o.relative,children:(0,a.jsx)("div",{className:(0,t.cx)(o.headerGuideline,o.guideline)})}),renderPrefixCell:(e,r,n)=>(0,a.jsxs)("div",{className:o.relative,children:[(0,a.jsx)("div",{className:(0,t.cx)(o.topGuideline,o.guideline)}),!(r===n.length-1)&&(0,a.jsx)("div",{className:(0,t.cx)(o.bottomGuideline,o.guideline)})]})},n))},d=e=>({relative:t.css`
    position: relative;
    height: 100%;
  `,guideline:t.css`
    left: -19px;
    border-left: 1px solid ${e.colors.border.medium};
    position: absolute;

    ${e.breakpoints.down("md")} {
      display: none;
    }
  `,topGuideline:t.css`
    width: 18px;
    border-bottom: 1px solid ${e.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,bottomGuideline:t.css`
    top: 50%;
    bottom: 0;
  `,contentGuideline:t.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,headerGuideline:t.css`
    top: -25px;
    bottom: 0;
  `})},41058:(e,r,n)=>{n.d(r,{V:()=>a});n(68404);var t,l=n(99500),s=n(45916);const a=e=>{let{namespace:r,group:n}=e;return n?(0,s.jsxs)(s.Fragment,{children:[r," ",t||(t=(0,s.jsx)(l.J,{name:"angle-right"}))," ",n]}):(0,s.jsx)(s.Fragment,{children:r})}},58613:(e,r,n)=>{n.d(r,{i:()=>ne});var t,l,s,a,i=n(52423),o=n(68404),d=n(16755),u=n(42949),c=n(97846),p=n(74846),m=n(80458),x=n(39440),h=n(44812),g=n(47628),b=n(41058),v=n(98492),j=n(70356),f=n(274),w=n(65737),y=n(21888),C=n(8006),$=n(11818),N=n(54761),R=n(2024),S=n(47900),G=n(62847),k=n(64850),z=n(12134),E=n(64834),M=n(43271),V=n(23691),F=n(55357),L=n(45916);function U(e){let{children:r}=e;const n=(0,d.l4)().breakpoints.values.xxl,[t,l]=(0,o.useState)((s=n,window.matchMedia(`(max-width: ${s}px)`).matches));var s;const a=(0,d.wW)(D);return(0,G.e)({breakpoint:n,onChange:e=>{l(e.matches)}}),t?null:(0,L.jsx)("div",{className:a.buttonText,children:r})}const W=e=>{let{rule:r,rulesSource:n}=e;const i=(0,k.I0)(),u=(0,j.TH)(),c=(0,S.iG)(),p=(0,d.wW)(D),{namespace:x,group:h,rulerRule:g}=r,[b,v]=(0,o.useState)(),G=(0,M.EG)(n),W=(0,m.Pc)(r.rulerRule)&&Boolean(r.rulerRule.grafana_alert.provenance),T=[],O=(0,m.Jq)(h),{isEditable:P,isRemovable:I}=(0,z.M)(G,g),A=u.pathname+u.search,J=u.pathname.endsWith("/view");const q=()=>{if(b&&b.rulerRule){const e=F.Zk((0,M.EG)(b.namespace.rulesSource),b.namespace.name,b.group.name,b.rulerRule);i((0,E.hS)(e,{navigateTo:J?"/alerting/list":void 0})),v(void 0)}},B=()=>{if((0,M.jq)(n)){const{appUrl:e,appSubUrl:t}=w.v;return`${""!==t?`${e}${t}/`:w.v.appUrl}alerting/${`${encodeURIComponent(n.name)}/${encodeURIComponent(r.name)}`}/find`}return window.location.href.split("?")[0]};if(J||T.push((0,L.jsx)(y.u,{placement:"top",content:"View",children:(0,L.jsx)(C.Qj,{className:p.button,size:"xs",variant:"secondary",icon:"eye",href:(0,V.V2)(n,r,A),children:t||(t=(0,L.jsx)(U,{children:"View"}))},"view")})),P&&g&&!O&&!W){const e=(0,M.EG)(n),r=F.Zk(e,x.name,h.name,g),t=f.Cj.renderUrl(`${w.v.appSubUrl}/alerting/${encodeURIComponent(F.$V(r))}/edit`,{returnTo:A});J&&T.push((0,L.jsx)($.m,{icon:"copy",onClipboardError:e=>{c.error("Error while copying URL",e)},className:p.button,size:"sm",getText:B,children:"Copy link to rule"},"copy")),T.push((0,L.jsx)(y.u,{placement:"top",content:"Edit",children:(0,L.jsx)(C.Qj,{className:p.button,size:"xs",variant:"secondary",icon:"pen",href:t,children:l||(l=(0,L.jsx)(U,{children:"Edit"}))},"edit")}))}return I&&g&&!O&&!W&&T.push((0,L.jsx)(y.u,{placement:"top",content:"Delete",children:(0,L.jsx)(C.zx,{className:p.button,size:"xs",type:"button",variant:"secondary",icon:"trash-alt",onClick:()=>v(r),children:s||(s=(0,L.jsx)(U,{children:"Delete"}))},"delete")})),T.length?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("div",{className:p.wrapper,children:(0,L.jsx)(N.Lh,{width:"auto",children:T.length?T.map(((e,r)=>(0,L.jsx)("div",{children:e},r))):a||(a=(0,L.jsx)("div",{}))})}),!!b&&(0,L.jsx)(R.s,{isOpen:!0,title:"Delete rule",body:"Deleting this rule will permanently remove it from your alert rule list. Are you sure you want to delete this rule?",confirmText:"Yes, delete",icon:"exclamation-triangle",onConfirm:q,onDismiss:()=>v(void 0)})]}):null};const D=e=>({wrapper:i.css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  `,button:i.css`
    height: 24px;
    font-size: ${e.typography.size.sm};
    svg {
      margin-right: 0;
    }
  `,buttonText:i.css`
    margin-left: 8px;
  `});var T=n(99500),O=n(9751);function P(e){let{rule:r}=e;const n=(0,d.wW)(I),{exceedsLimit:t}=(0,o.useMemo)((()=>(0,O.f)(r.group.interval)),[r.group.interval]);return t?(0,L.jsx)(y.u,{theme:"error",content:(0,L.jsxs)("div",{children:["A minimum evaluation interval of"," ",(0,L.jsx)("span",{className:n.globalLimitValue,children:w.v.unifiedAlerting.minInterval})," has been configured in Grafana and will be used instead of the ",r.group.interval," interval configured for the Rule Group."]}),children:(0,L.jsx)(T.J,{name:"stopwatch-slash",className:n.icon})}):null}function I(e){return{globalLimitValue:i.css`
      font-weight: ${e.typography.fontWeightBold};
    `,icon:i.css`
      fill: ${e.colors.warning.text};
    `}}var A=n(90062),J=n(95018),q=n(57306),B=n(81887),H=n(93991),Z=n(47286),_=n(39778);const Q=e=>{let{rule:r}=e;const n=(0,d.wW)(K),{namespace:{rulesSource:t}}=r,l=Object.entries(r.annotations).filter((e=>{let[r,n]=e;return!!n.trim()}));return(0,L.jsxs)("div",{children:[(0,L.jsx)(q.f,{rule:r,rulesSource:t,isViewMode:!1}),(0,L.jsxs)("div",{className:n.wrapper,children:[(0,L.jsxs)("div",{className:n.leftSide,children:[(0,L.jsx)(Y,{rule:r}),!!r.labels&&!!Object.keys(r.labels).length&&(0,L.jsx)(J.C,{label:"Labels",horizontal:!0,children:(0,L.jsx)(A.s,{labels:r.labels})}),(0,L.jsx)(Z.C,{rulesSource:t,rule:r,annotations:l}),(0,L.jsx)(B.J,{annotations:l})]}),(0,L.jsx)("div",{className:n.rightSide,children:(0,L.jsx)(H.C,{rulesSource:t,rule:r})})]}),(0,L.jsx)(_.M,{rule:r,itemsDisplayLimit:15})]})},Y=e=>{let r,{rule:n}=e,t=n.group.interval;var l;(0,m.yF)(n.rulerRule)||(r=null===(l=n.rulerRule)||void 0===l?void 0:l.for);return(0,L.jsxs)(L.Fragment,{children:[t&&(0,L.jsxs)(J.C,{label:"Evaluate",horizontal:!0,children:["Every ",t]}),r&&(0,L.jsx)(J.C,{label:"For",horizontal:!0,children:r})]})},K=e=>({wrapper:i.css`
    display: flex;
    flex-direction: row;

    ${e.breakpoints.down("md")} {
      flex-direction: column;
    }
  `,leftSide:i.css`
    flex: 1;
  `,rightSide:i.css`
    ${e.breakpoints.up("md")} {
      padding-left: 90px;
      width: 300px;
    }
  `});var X,ee=n(84438),re=n(31244);const ne=e=>{let{rules:r,className:n,showGuidelines:t=!1,emptyMessage:l="No rules found.",showGroupColumn:s=!1,showSummaryColumn:a=!1}=e;const c=(0,d.wW)(te),p=(0,i.cx)(c.wrapper,n,{[c.wrapperMargin]:t}),m=(0,o.useMemo)((()=>r.map(((e,r)=>({id:`${e.namespace.name}-${e.group.name}-${e.name}-${r}`,data:e})))),[r]),g=le(a,s);if(!r.length)return(0,L.jsx)("div",{className:(0,i.cx)(p,c.emptyMessage),children:l});const b=t?h.F:x.t;return(0,L.jsx)("div",{className:p,"data-testid":"rules-table",children:(0,L.jsx)(b,{cols:g,isExpandable:!0,items:m,renderExpandedContent:e=>{let{data:r}=e;return(0,L.jsx)(Q,{rule:r})},pagination:{itemsPerPage:u.gN},paginationStyles:c.pagination})})},te=e=>({wrapperMargin:i.css`
    ${e.breakpoints.up("md")} {
      margin-left: 36px;
    }
  `,emptyMessage:i.css`
    padding: ${e.spacing(1)};
  `,wrapper:i.css`
    width: auto;
    border-radius: ${e.shape.borderRadius()};
  `,pagination:i.css`
    display: flex;
    margin: 0;
    padding-top: ${e.spacing(1)};
    padding-bottom: ${e.spacing(.25)};
    justify-content: center;
    border-left: 1px solid ${e.colors.border.strong};
    border-right: 1px solid ${e.colors.border.strong};
    border-bottom: 1px solid ${e.colors.border.strong};
  `});function le(e,r){const{hasRuler:n,rulerRulesLoaded:t}=(0,c.h)();return(0,o.useMemo)((()=>{const l=[{id:"state",label:"State",renderCell:e=>{let{data:r}=e;const{namespace:l}=r,{rulesSource:s}=l,{promRule:a,rulerRule:i}=r,o=!(!(n(s)&&t(s)&&a)||i),d=!(!(n(s)&&t(s)&&i)||a);return(0,L.jsx)(re.p,{rule:r,isDeleting:o,isCreating:d})},size:"165px"},{id:"name",label:"Name",renderCell:e=>{let{data:r}=e;return r.name},size:5},{id:"provisioned",label:"",renderCell:e=>{let{data:r}=e;const n=r.rulerRule;if(!(0,m.Pc)(n))return null;return n.grafana_alert.provenance?X||(X=(0,L.jsx)(g.C0,{})):null},size:"100px"},{id:"warnings",label:"",renderCell:e=>{let{data:r}=e;return(0,L.jsx)(P,{rule:r})},size:"45px"},{id:"health",label:"Health",renderCell:e=>{let{data:{promRule:r,group:n}}=e;return r?(0,L.jsx)(ee.V,{rule:r}):null},size:"75px"}];return e&&l.push({id:"summary",label:"Summary",renderCell:e=>{var r;let{data:n}=e;return(0,L.jsx)(v.Z,{input:null!==(r=n.annotations[p.q6.summary])&&void 0!==r?r:""})},size:5}),r&&l.push({id:"group",label:"Group",renderCell:e=>{let{data:r}=e;const{namespace:n,group:t}=r;return"default"===t.name?(0,L.jsx)(b.V,{namespace:n.name}):(0,L.jsx)(b.V,{namespace:n.name,group:t.name})},size:5}),l.push({id:"actions",label:"Actions",renderCell:e=>{let{data:r}=e;return(0,L.jsx)(W,{rule:r,rulesSource:r.namespace.rulesSource})},size:"290px"}),l}),[e,r,n,t])}},97846:(e,r,n)=>{n.d(r,{h:()=>a});var t=n(68404),l=n(43271),s=n(76938);function a(){const e=(0,s._)((e=>e.rulerRules));return{hasRuler:(0,t.useCallback)((r=>{var n;const t="string"==typeof r?r:r.name;return t===l.GC||!(null===(n=e[t])||void 0===n||!n.result)}),[e]),rulerRulesLoaded:(0,t.useCallback)((r=>{var n;const t=(0,l.EG)(r),s=null===(n=e[t])||void 0===n?void 0:n.result;return Boolean(s)}),[e])}}}}]);
//# sourceMappingURL=8613.323a08f4647753ce344c.js.map