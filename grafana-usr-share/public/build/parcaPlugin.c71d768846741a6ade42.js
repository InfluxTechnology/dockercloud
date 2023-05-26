"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2015],{77936:(e,t,n)=>{n.r(t),n.d(t,{plugin:()=>Z});var r=n(23214),s=n(68404),a=n(58582),o=n(45916);var i=n(82897),l=n(50986),c=n(54316),u=n(30477);const d={labelSelector:"{}",queryType:"both"};var g=n(52423),p=n(16755);function f(e){const t=(0,p.wW)((0,s.useCallback)((t=>h(t,e)),[e]));return(0,o.jsx)("div",{className:t.root,children:e.children})}const h=(e,t)=>{var n,r,s;return{root:(0,g.css)({display:"flex",flexDirection:null!==(n=t.direction)&&void 0!==n?n:"row",flexWrap:null===(r=t.wrap)||void 0===r||r?"wrap":void 0,alignItems:t.alignItems,gap:e.spacing(null!==(s=t.gap)&&void 0!==s?s:2),flexGrow:t.flexGrow})}},b=e=>{let{children:t,stackProps:n}=e;const r=(0,p.wW)(m);return(0,o.jsx)("div",{className:r.root,children:(0,o.jsx)(f,Object.assign({gap:2},n,{children:t}))})},m=e=>({root:(0,g.css)({padding:e.spacing(1),backgroundColor:e.colors.background.secondary,borderRadius:e.shape.borderRadius(1)})}),y=e=>{let{children:t}=e;return(0,o.jsx)(f,{gap:.5,direction:"column",children:t})};var x=n(3088),v=n(31787);const w={id:"parca",extensions:[".parca"],aliases:["parca"],mimetypes:[],def:{language:{ignoreCase:!1,defaultToken:"",tokenPostfix:".fireql",keywords:[],operators:[],symbols:/[=><!~?:&|+\-*\/^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,digits:/\d+(_+\d+)*/,octaldigits:/[0-7]+(_+[0-7]+)*/,binarydigits:/[0-1]+(_+[0-1]+)*/,hexdigits:/[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,integersuffix:/(ll|LL|u|U|l|L)?(ll|LL|u|U|l|L)?/,floatsuffix:/[fFlL]?/,tokenizer:{root:[[/[a-z_]\w*(?=\s*(=|!=|=~|!~))/,"tag"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string_double"],[/'/,"string","@string_single"],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/\d+/,"number"],[/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/,"number.float"],[/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/,"number.float"],[/0[xX][0-9a-fA-F']*[0-9a-fA-F](@integersuffix)/,"number.hex"],[/0[0-7']*[0-7](@integersuffix)/,"number.octal"],[/0[bB][0-1']*[0-1](@integersuffix)/,"number.binary"],[/\d[\d']*\d(@integersuffix)/,"number"],[/\d(@integersuffix)/,"number"]],string_double:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],string_single:[[/[^\\']+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/'/,"string","@pop"]],clauses:[[/[^(,)]/,"tag"],[/\)/,"identifier","@pop"]],whitespace:[[/[ \t\r\n]+/,"white"]]}},languageConfiguration:{wordPattern:/(-?\d*\.\d\w*)|([^`~!#%^&*()\-=+\[{\]}\\|;:'",.<>\/?\s]+)/g,brackets:[["{","}"]],autoClosingPairs:[{open:"{",close:"}"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:"{",close:"}"},{open:'"',close:'"'},{open:"'",close:"'"}],folding:{}}}};function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class C{constructor(e,t,n){L(this,"triggerCharacters",["{",",","[","(","=","~"," ",'"']),L(this,"labels",{}),this.datasource=e,this.monaco=t,this.editor=n}async init(){const e=await this.datasource.getLabelNames();this.labels=e.reduce(((e,t)=>(e[t]=[],e)),{})}provideCompletionItems(e,t){var n;if((null===(n=this.editor.getModel())||void 0===n?void 0:n.id)!==e.id)return{suggestions:[]};const{range:r,offset:s}=function(e,t,n){const r=t.getWordAtPosition(n),s=null!=r?e.Range.lift({startLineNumber:n.lineNumber,endLineNumber:n.lineNumber,startColumn:r.startColumn,endColumn:r.endColumn}):e.Range.fromPositions(n),a={column:n.column,lineNumber:n.lineNumber};return{offset:t.getOffsetAt(a),range:s}}(this.monaco,e,t),a=function(e,t){if(""===e)return{type:"EMPTY"};const n=e.matchAll(A),r=Array.from(n).reduce(((e,t)=>{const[n,r,s]=t[1];return e.push({name:r,value:s}),e}),[]),s=e.substring(0,t).match(S);if(s)return{type:"IN_LABEL_VALUE",labelName:s[1],betweenQuotes:!!s[2],otherLabels:r};if(e.substring(0,t).match(k))return{type:"IN_LABEL_NAME",otherLabels:r};return{type:"UNKNOWN"}}(e.getValue(),s);return this.getCompletions(a).then((e=>{const t=e.length.toString().length;return{suggestions:e.map(((e,n)=>({kind:E(e.type,this.monaco),label:e.label,insertText:e.insertText,sortText:n.toString().padStart(t,"0"),range:r})))}}))}async getCompletions(e){if(!Object.keys(this.labels).length)return[];switch(e.type){case"UNKNOWN":return[];case"EMPTY":return Object.keys(this.labels).map((e=>({label:e,insertText:`{${e}="`,type:"LABEL_NAME"})));case"IN_LABEL_NAME":return Object.keys(this.labels).map((e=>({label:e,insertText:e,type:"LABEL_NAME"})));case"IN_LABEL_VALUE":let t=[];return this.labels[e.labelName].length?t=this.labels[e.labelName]:(t=await this.datasource.getLabelValues(e.labelName),this.labels[e.labelName]=t),t.map((t=>({label:t,insertText:e.betweenQuotes?t:`"${t}"`,type:"LABEL_VALUE"})));default:throw new Error(`Unexpected situation ${e}`)}}}function E(e,t){switch(e){case"LABEL_NAME":return t.languages.CompletionItemKind.Enum;case"LABEL_VALUE":return t.languages.CompletionItemKind.EnumMember;default:throw new Error(`Unexpected CompletionType: ${e}`)}}const N=/[a-zA-Z_][a-zA-Z0-9_]*/,j=/[^"]*/,A=new RegExp(`(${N.source})="(${j.source})"`,"g"),S=new RegExp(`(${N.source})=("?)${j.source}$`),k=new RegExp(/[{,]\s*[a-zA-Z0-9_]*$/);function T(e){const t=function(e){const t=(0,s.useRef)(null);return(0,s.useEffect)((()=>()=>{var e;null===(e=t.current)||void 0===e||e.call(t)}),[]),async(n,r)=>{const s=new C(e,r,n);await s.init();const{dispose:a}=r.languages.registerCompletionItemProvider(R,s);t.current=a}}(e.datasource),n=(0,p.wW)(I),r=(0,x.Z)(e.onRunQuery),a=(0,s.useRef)(null);return(0,o.jsx)("div",{className:n.wrapper,ref:a,children:(0,o.jsx)(v.p,{value:e.value,language:R,onBlur:e.onChange,containerStyles:n.queryField,monacoOptions:{folding:!1,fontSize:14,lineNumbers:"off",overviewRulerLanes:0,renderLineHighlight:"none",scrollbar:{vertical:"hidden",verticalScrollbarSize:8,horizontal:"hidden",horizontalScrollbarSize:0},scrollBeyondLastLine:!1,wordWrap:"on",padding:{top:5,bottom:6}},onBeforeEditorMount:q,onEditorDidMount:(e,n)=>{t(e,n);const s=()=>{const t=a.current;if(null!==t){const n=e.getContentHeight();t.style.height=`${n+_}px`,t.style.width="100%";const r=t.clientWidth;e.layout({width:r,height:n})}};e.onDidContentSizeChange(s),s(),e.addCommand(n.KeyMod.Shift|n.KeyCode.Enter,(()=>{r.current(e.getValue())}))}})})}const _=2;let z=!1;const R="parca";function q(e){if(!1===z){z=!0;const{aliases:t,extensions:n,mimetypes:r,def:s}=w;e.languages.register({id:R,aliases:t,extensions:n,mimetypes:r}),e.languages.setMonarchTokensProvider(R,s.language),e.languages.setLanguageConfiguration(R,s.languageConfiguration)}}const I=()=>({queryField:g.css`
      flex: 1;
      // Not exactly sure but without this the editor doe not shrink after resizing (so you can make it bigger but not
      // smaller). At the same time this does not actually make the editor 100px because it has flex 1 so I assume
      // this should sort of act as a flex-basis (but flex-basis does not work for this). So yeah CSS magic.
      width: 100px;
    `,wrapper:g.css`
      display: flex;
      flex: 1;
      border: 1px solid rgba(36, 41, 46, 0.3);
      border-radius: 2px;
    `});var M=n(88102),O=n(99500),P=n(65678),B=n(37625);const $=[{value:"metrics",label:"Metric",description:"Return aggregated metrics"},{value:"profile",label:"Profile",description:"Return profile"},{value:"both",label:"Both",description:"Return both metric and profile data"}];function W(e){let{query:t,onQueryTypeChange:n,app:r}=e;const[s,a]=(0,M.Z)(!1),i=(0,p.wW)(U),l=function(e){return e===c.zj.Explore?$:$.filter((e=>"both"!==e.value))}(r);return(0,o.jsxs)(f,{gap:0,direction:"column",children:[(0,o.jsxs)("div",{className:i.header,onClick:a,title:"Click to edit options",children:[(0,o.jsx)("div",{className:i.toggle,children:(0,o.jsx)(O.J,{name:s?"angle-down":"angle-right"})}),(0,o.jsx)("h6",{className:i.title,children:"Options"}),!s&&(0,o.jsx)("div",{className:i.description,children:(0,o.jsxs)("span",{children:["Type: ",t.queryType]})})]}),s&&(0,o.jsx)("div",{className:i.body,children:(0,o.jsx)(P.g,{label:"Query Type",children:(0,o.jsx)(B.S,{options:l,value:t.queryType,onChange:n})})})]})}const U=e=>({switchLabel:(0,g.css)({color:e.colors.text.secondary,cursor:"pointer",fontSize:e.typography.bodySmall.fontSize,"&:hover":{color:e.colors.text.primary}}),header:(0,g.css)({display:"flex",cursor:"pointer",alignItems:"baseline",color:e.colors.text.primary,"&:hover":{background:e.colors.emphasize(e.colors.background.primary,.03)}}),title:(0,g.css)({flexGrow:1,overflow:"hidden",fontSize:e.typography.bodySmall.fontSize,fontWeight:e.typography.fontWeightMedium,margin:0}),description:(0,g.css)({color:e.colors.text.secondary,fontSize:e.typography.bodySmall.fontSize,paddingLeft:e.spacing(2),gap:e.spacing(2),display:"flex"}),body:(0,g.css)({display:"flex",paddingTop:e.spacing(2),gap:e.spacing(2),flexWrap:"wrap"}),toggle:(0,g.css)({color:e.colors.text.secondary,marginRight:`${e.spacing(1)}`})});var F=n(53786),Q=n(18474);class V extends Q.CK{constructor(e){super(e)}query(e){return e.targets.every((e=>e.profileTypeId))?super.query(e):(0,F.of)({data:[]})}async getProfileTypes(){return await super.getResource("profileTypes")}async getLabelNames(){return await super.getResource("labelNames")}async getLabelValues(e){return await super.getResource("labelValues",{label:e})}}const Z=new r.hf(V).setConfigEditor((e=>{const{options:t,onOptionsChange:n}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.E,{defaultUrl:"http://localhost:7070",dataSourceConfig:t,showAccessOptions:!1,onChange:n})})})).setQueryEditor((function(e){const[t,n]=(0,s.useState)([]);(0,l.Z)((async()=>{const t=await e.datasource.getProfileTypes();n(t)}));const r=(0,s.useMemo)((()=>{let e=new Map;for(let s of t){var n,r;e.has(s.name)||e.set(s.name,{label:s.name,value:s.ID,children:[]}),null===(n=e.get(s.name))||void 0===n||null===(r=n.children)||void 0===r||r.push({label:s.sample_type,value:s.ID})}return Array.from(e.values())}),[t]),a=(0,s.useMemo)((()=>{if(!t)return"Loading";const n=t.find((t=>t.ID===e.query.profileTypeId));return n?n.name+" - "+n.sample_type:"Select a profile type"}),[e.query.profileTypeId,t]);let g=function(e,t){let n=(0,i.defaults)(e,d);t!==c.zj.Explore&&"both"===n.queryType&&(n.queryType="profile");return n}(e.query,e.app);return(0,o.jsxs)(y,{children:[(0,o.jsxs)(b,{stackProps:{wrap:!1,gap:1},children:[(0,o.jsx)(u.O,{onChange:function(t,n){if(0===n.length)return;const r=n[n.length-1].value;if("string"!=typeof r)throw new Error("id is not string");e.onChange(Object.assign({},e.query,{profileTypeId:r}))},options:r,buttonProps:{variant:"secondary"},children:a}),(0,o.jsx)(T,{value:g.labelSelector,onChange:function(t){e.onChange(Object.assign({},e.query,{labelSelector:t}))},datasource:e.datasource,onRunQuery:function(t){e.onChange(Object.assign({},e.query,{labelSelector:t})),e.onRunQuery()}})]}),(0,o.jsx)(b,{children:(0,o.jsx)(W,{query:g,onQueryTypeChange:t=>{e.onChange(Object.assign({},g,{queryType:t}))},app:e.app})})]})}))},3088:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(68404);const s=function(e){var t=(0,r.useRef)(e);return t.current=e,t}},50986:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(31423);const s=function(e){(0,r.Z)((function(){e()}))}}}]);
//# sourceMappingURL=parcaPlugin.c71d768846741a6ade42.js.map