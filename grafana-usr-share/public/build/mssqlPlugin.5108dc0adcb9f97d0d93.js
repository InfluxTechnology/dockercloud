(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5032],{55658:(e,t,a)=>{"use strict";a.r(t),a.d(t,{plugin:()=>U});var n=a(23214),i=a(75957),s=a(52423),r=(a(68404),a(70332)),l=a(16755),o=a(71980),c=a(46889),d=a(4645),u=a(70917),h=a(34117),m=a(85558),f=a(70800),p=a(2843),b=a(32889),v=a(92155),g=a(27650);let y,S;!function(e){e.sqlAuth="SQL Server Authentication",e.windowsAuth="Windows Authentication"}(y||(y={})),function(e){e.disable="disable",e.false="false",e.true="true"}(S||(S={}));var x,j,w,T,L,A,E,C,D,q=a(45916);function I(e){return{ulPadding:(0,s.css)({margin:e.spacing(1,0),paddingLeft:e.spacing(5)})}}var M=a(55618),$=a(40436);var O=a(5739);function W(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class R{constructor(e,t,a){W(this,"target",void 0),W(this,"templateSrv",void 0),W(this,"scopedVars",void 0),this.target=(0,O.Y)(e||{refId:"A"}),this.templateSrv=t,this.scopedVars=a}quoteLiteral(e){return"'"+e.replace(/'/g,"''")+"'"}}var _=a(68522);const F=e=>{let{getColumns:t,getTables:a}=e;return(e,n)=>Object.assign({},n&&(0,_.getStandardSQLCompletionProvider)(e,n),{tables:{resolve:async e=>await a.current(e.table),parseName:e=>{if(!e)return{table:""};let t=e,a=t.value;for(;t.next&&t.next.type!==_.TokenType.Whitespace;)a+=t.next.value,t=t.next;return t.value.endsWith(".")&&(a=t.value.slice(0,t.value.length-1)),{table:a}}},columns:{resolve:async e=>{if(null==e||!e.table)return[];const[a,n,i]=e.table.split(".");return await t.current({table:`${n}.${i}`,dataset:a,refId:"A"})}}})};var P=a(82897),N=a(56767);function k(e){switch(e){case"datetimeoffset":case"date":case"datetime2":case"smalldatetime":case"datetime":case"time":return"clock-nine";case"bit":return"toggle-off";case"tinyint":case"smallint":case"int":case"bigint":case"decimal":case"numeric":case"real":case"float":case"money":case"smallmoney":return"calculator-alt";case"char":case"varchar":case"text":case"nchar":case"nvarchar":case"ntext":case"binary":case"varbinary":case"image":return"text";default:return}}function B(e){switch(e){case"datetimeoffset":case"datetime2":case"smalldatetime":case"datetime":return"datetime";case"time":return"time";case"date":return"date";case"bit":return"boolean";case"tinyint":case"smallint":case"int":case"bigint":case"decimal":case"numeric":case"real":case"float":case"money":case"smallmoney":return"number";default:return"text"}}function Q(e){var t,a,n,i;let{sql:s,dataset:r,table:l}=e,o="";if(!s||!(0,N.IC)(s.columns))return o;if(o+=function(e,t){const a=e.map((e=>{let t="";var a;if(e.name&&e.alias)t+=`${e.name}(${null===(a=e.parameters)||void 0===a?void 0:a.map((e=>`${e.name}`))}) AS ${e.alias}`;else if(e.name){var n;t+=`${e.name}(${null===(n=e.parameters)||void 0===n?void 0:n.map((e=>`${e.name}`))})`}else if(e.alias){var i;t+=`${null===(i=e.parameters)||void 0===i?void 0:i.map((e=>`${e.name}`))} AS ${e.alias}`}else{var s;t+=`${null===(s=e.parameters)||void 0===s?void 0:s.map((e=>`${e.name}`))}`}return t}));return`SELECT ${H(t)?"TOP("+t+")":""} ${a.join(", ")} `}(s.columns,s.limit),r&&l&&(o+=`FROM ${r}.${l} `),s.whereString&&(o+=`WHERE ${s.whereString} `),null!==(t=s.groupBy)&&void 0!==t&&null!==(a=t[0])&&void 0!==a&&a.property.name){o+=`GROUP BY ${s.groupBy.map((e=>e.property.name)).filter((e=>!(0,P.isEmpty)(e))).join(", ")} `}return null!==(n=s.orderBy)&&void 0!==n&&n.property.name&&(o+=`ORDER BY ${s.orderBy.property.name} `),null!==(i=s.orderBy)&&void 0!==i&&i.property.name&&s.orderByDirection&&(o+=`${s.orderByDirection} `),o}const H=e=>void 0!==e&&e>=0;class V extends M.D{constructor(e){var t,a,n;super(e),n=void 0,(a="sqlLanguageDefinition")in(t=this)?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n}getQueryModel(e,t,a){return new R(e,t,a)}async fetchDatasets(){return(await this.runSql("SELECT name FROM sys.databases WHERE name NOT IN ('master', 'tempdb', 'model', 'msdb');",{refId:"datasets"})).fields.name.values.toArray().flat()}async fetchTables(e){var t;return(await this.runSql((t=e,`SELECT TABLE_SCHEMA + '.' + TABLE_NAME as schemaAndName\n    FROM [${t}].INFORMATION_SCHEMA.TABLES\n    WHERE TABLE_TYPE = 'BASE TABLE'`),{refId:"tables"})).fields.schemaAndName.values.toArray().flat()}async fetchFields(e){if(!e.table)return[];const[t,a]=e.table.split("."),n=await this.runSql(function(e,t){return`\n   USE ${e}\n   SELECT COLUMN_NAME as 'column',DATA_TYPE as 'type'\n   FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME='${t}';`}(e.dataset,a),{refId:"columns"}),i=[];for(let e=0;e<n.length;e++){const t=n.fields.column.values.get(e),a=n.fields.type.values.get(e);i.push({label:t,value:t,type:a,icon:k(a),raqbFieldType:B(a)})}return i}getSqlLanguageDefinition(e){if(void 0!==this.sqlLanguageDefinition)return this.sqlLanguageDefinition;const t={getColumns:{current:t=>async function(e,t){const a=await e.fields(t);return a.length>0?a.map((e=>({name:e.value,type:e.value,description:e.value}))):[]}(e,t)},getTables:{current:t=>async function(e,t){var a;return await(null===(a=e.lookup)||void 0===a?void 0:a.call(e,t))||[]}(e,t)}};return this.sqlLanguageDefinition={id:"sql",completionProvider:F(t),formatter:$._},this.sqlLanguageDefinition}getDB(){return void 0!==this.db?this.db:{init:()=>Promise.resolve(!0),datasets:()=>this.fetchDatasets(),tables:e=>this.fetchTables(e),getEditorLanguageDefinition:()=>this.getSqlLanguageDefinition(this.db),fields:async e=>null!=e&&e.dataset&&null!=e&&e.table?this.fetchFields(e):[],validateQuery:e=>Promise.resolve({isError:!1,isValid:!0,query:e,error:"",rawSql:e.rawSql}),dsID:()=>this.id,dispose:e=>{},toRawSql:Q,lookup:async e=>{if(e){const t=e.split(".").filter((e=>e));if(t.length>2)return[];if(1===t.length){return(await this.fetchTables(t[0])).map((e=>({name:e,completion:e})))}return[]}return(await this.fetchDatasets()).map((e=>({name:e,completion:`${e}.`})))}}}}const U=new n.hf(V).setQueryEditor(i.M).setConfigEditor((e=>{const{options:t,onOptionsChange:a}=e,n=(0,l.wW)(I),i=t.jsonData,s=e=>n=>{a(Object.assign({},t,{[e]:n.currentTarget.value}))},M=[{value:y.sqlAuth,label:"SQL Server Authentication"},{value:y.windowsAuth,label:"Windows Authentication"}],$=[{value:S.disable,label:"disable"},{value:S.false,label:"false"},{value:S.true,label:"true"}],O=15;return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(o.C,{label:"MS SQL Connection",width:400,children:[(0,q.jsx)(c._,{labelWidth:O,label:"Host",children:(0,q.jsx)(d.I,{width:46,name:"host",type:"text",value:t.url||"",placeholder:"localhost:1433",onChange:s("url")})}),(0,q.jsx)(c._,{labelWidth:O,label:"Database",children:(0,q.jsx)(d.I,{width:46,name:"database",value:t.database||"",placeholder:"database name",onChange:s("database")})}),(0,q.jsx)(c._,{label:"Authentication",labelWidth:O,htmlFor:"authenticationType",tooltip:(0,q.jsxs)("ul",{className:n.ulPadding,children:[x||(x=(0,q.jsxs)("li",{children:[(0,q.jsx)("i",{children:"SQL Server Authentication"})," This is the default mechanism to connect to MS SQL Server. Enter the SQL Server Authentication login or the Windows Authentication login in the DOMAIN\\User format."]})),j||(j=(0,q.jsxs)("li",{children:[(0,q.jsx)("i",{children:"Windows Authentication"})," Windows Integrated Security - single sign on for users who are already logged onto Windows and have enabled this option for MS SQL Server."]}))]}),children:(0,q.jsx)(u.Ph,{value:i.authenticationType||y.sqlAuth,inputId:"authenticationType",options:M,onChange:e=>{a(Object.assign({},t,{jsonData:Object.assign({},i,{authenticationType:e.value}),secureJsonData:Object.assign({},t.secureJsonData,{password:""}),secureJsonFields:Object.assign({},t.secureJsonFields,{password:!1}),user:""}))}})}),i.authenticationType===y.windowsAuth?null:(0,q.jsxs)(h.Z,{children:[(0,q.jsx)(c._,{labelWidth:O,label:"User",children:(0,q.jsx)(d.I,{width:O,value:t.user||"",placeholder:"user",onChange:s("user")})}),(0,q.jsx)(c._,{label:"Password",labelWidth:O,children:(0,q.jsx)(m.m4,{width:O,placeholder:"Password",isConfigured:t.secureJsonFields&&t.secureJsonFields.password,onReset:()=>{(0,r.Mf)(e,"password")},onBlur:(0,r.fi)(e,"password")})})]})]}),(0,q.jsxs)(o.C,{label:"TLS/SSL Auth",children:[(0,q.jsx)(c._,{labelWidth:25,htmlFor:"encrypt",tooltip:(0,q.jsxs)(q.Fragment,{children:["Determines whether or to which extent a secure SSL TCP/IP connection will be negotiated with the server.",(0,q.jsxs)("ul",{className:n.ulPadding,children:[w||(w=(0,q.jsxs)("li",{children:[(0,q.jsx)("i",{children:"disable"})," - Data sent between client and server is not encrypted."]})),T||(T=(0,q.jsxs)("li",{children:[(0,q.jsx)("i",{children:"false"})," - Data sent between client and server is not encrypted beyond the login packet. (default)"]})),L||(L=(0,q.jsxs)("li",{children:[(0,q.jsx)("i",{children:"true"})," - Data sent between client and server is encrypted."]}))]}),"If you're using an older version of Microsoft SQL Server like 2008 and 2008R2 you may need to disable encryption to be able to connect."]}),label:"Encrypt",children:(0,q.jsx)(u.Ph,{options:$,value:i.encrypt||S.disable,inputId:"encrypt",onChange:t=>{(0,r.tp)(e,"encrypt",t.value)}})}),i.encrypt===S.true?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(c._,{labelWidth:25,htmlFor:"skipTlsVerify",label:"Skip TLS Verify",children:(0,q.jsx)(f.x,{id:"skipTlsVerify",onChange:t=>{(0,r.tp)(e,"tlsSkipVerify",t.currentTarget.checked)},value:i.tlsSkipVerify||!1})}),i.tlsSkipVerify?null:(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(c._,{labelWidth:25,tooltip:A||(A=(0,q.jsx)("span",{children:"Path to file containing the public key certificate of the CA that signed the SQL Server certificate. Needed when the server certificate is self signed."})),label:"TLS/SSL Root Certificate",children:(0,q.jsx)(d.I,{value:i.sslRootCertFile||"",onChange:(0,r._R)(e,"sslRootCertFile"),placeholder:"TLS/SSL root certificate file path"})}),(0,q.jsx)(c._,{labelWidth:25,label:"Hostname in server certificate",children:(0,q.jsx)(d.I,{placeholder:"Common Name (CN) in server certificate",value:i.serverName||"",onChange:(0,r._R)(e,"serverName")})})]})]}):null]}),(0,q.jsx)(g.K,{labelWidth:O,jsonData:i,onPropertyChanged:(t,a)=>{(0,r.tp)(e,t,a)}}),(0,q.jsxs)(o.C,{label:"MS SQL details",children:[(0,q.jsx)(c._,{tooltip:E||(E=(0,q.jsxs)("span",{children:["A lower limit for the auto group by time interval. Recommended to be set to write frequency, for example",(0,q.jsx)("code",{children:"1m"})," if your data is written every minute."]})),label:"Min time interval",labelWidth:20,children:(0,q.jsx)(d.I,{placeholder:"1m",value:i.timeInterval||"",onChange:(0,r._R)(e,"timeInterval")})}),(0,q.jsx)(c._,{tooltip:C||(C=(0,q.jsxs)("span",{children:["The number of seconds to wait before canceling the request when connecting to the database. The default is"," ",(0,q.jsx)("code",{children:"0"}),", meaning no timeout."]})),label:"Connection timeout",labelWidth:20,children:(0,q.jsx)(v.Y,{placeholder:"60",min:0,value:i.connectionTimeout,onChange:t=>{(0,r.tp)(e,"connectionTimeout",null!=t?t:0)}})})]}),D||(D=(0,q.jsxs)(p.b,{title:"User Permission",severity:"info",children:["The database user should only be granted SELECT permissions on the specified database and tables you want to query. Grafana does not validate that queries are safe so queries can contain any SQL statement. For example, statements like ",(0,q.jsx)("code",{children:"USE otherdb;"})," and ",(0,q.jsx)("code",{children:"DROP TABLE user;"})," would be executed. To protect against this we ",(0,q.jsx)("em",{children:"highly"})," recommend you create a specific MS SQL user with restricted permissions. Check out the"," ",(0,q.jsx)(b.r,{rel:"noreferrer",target:"_blank",href:"http://docs.grafana.org/features/datasources/mssql/",children:"Microsoft SQL Server Data Source Docs"})," ","for more information."]}))]})}))},76345:()=>{},56834:()=>{}}]);
//# sourceMappingURL=mssqlPlugin.5108dc0adcb9f97d0d93.js.map