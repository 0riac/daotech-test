(this["webpackJsonpdaotech-test"]=this["webpackJsonpdaotech-test"]||[]).push([[0],{79:function(t,e,n){},85:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(9),r=n.n(i),s=(n(79),n(129)),l=n(125),o=n(13),d=n(17),j=n(19),u=n(60),b=n.n(u),O=n(123),x=n(126),f=n(48),h=n.n(f),p=n(58),v=n.n(p),g=n(59),k=n.n(g),m=n(130),y=n(120),S="ADD_TASK",T="REMOVE_TASK",C="CHANGE_TASK_STATUS",F="IN_PROCESS_TASK",N="DONE_TASK",_=n(2),A=Object(y.a)("div")({display:"flex",padding:"8px 0 8px 0",alignItems:"center"}),E=Object(y.a)("div")({margin:"0 0 0 12px",textAlign:"left",color:"#3f51b5"}),L=Object(y.a)(O.a)((function(){return{width:"100%",textTransform:"none",justifyContent:"left",paddingLeft:"14px"}})),w=Object(y.a)("div")({display:"flex",alignItems:"center",background:"#FFF",paddingLeft:"6px"}),I=Object(y.a)("div")({padding:"16px 0 16px 8px",display:"flex",alignItems:"center",flex:1}),R=Object(y.a)(E)((function(t){return{width:"100%",flex:1,display:"flex",justify:"space-between",marginTop:t.withLabel?"-16px":0,"& div":{flex:1}}})),K=Object(y.a)("div")({display:"flex",alignSelf:"stretch",margin:"0 0 0 16px"}),D=function(t){var e=t.addTask,n=(t.onFocus,t.onBlur,Object(a.useState)("")),c=Object(d.a)(n,2),i=c[0],r=c[1],s=Object(a.useState)(!1),l=Object(d.a)(s,2),o=l[0],j=l[1];return Object(_.jsxs)(w,{children:[Object(_.jsxs)(I,{children:[Object(_.jsx)(h.a,{style:{color:"#9d9d9d"}}),Object(_.jsx)(R,{withLabel:o,children:Object(_.jsx)(m.a,{autoFocus:!0,onChange:function(t){var e=t.target.value;e.length<=10?j(!1):j(!0),r(e)},label:o?"Length range >".concat(2," and <").concat(10):"",error:o})})]}),Object(_.jsx)(K,{onClick:function(){i.length<2||i.length>10?j(!0):e(i)},children:Object(_.jsx)(O.a,{children:Object(_.jsx)(v.a,{style:{color:"#9d9d9d"}})})})]})},B=Object(j.b)(null,(function(t){return{addTask:function(e){return t(function(t){var e=t.taskName;return{type:S,payload:{taskName:e}}}({taskName:e}))}}}))((function(t){var e=t.addTask,n=Object(a.useState)(),c=Object(d.a)(n,2),i=c[0],r=c[1];return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(x.a,{}),i?Object(_.jsx)(D,{addTask:function(t){return r(!1)||e(t)}}):null,Object(_.jsx)(x.a,{}),Object(_.jsx)(L,{onClick:function(){return r((function(t){return!t}))},children:Object(_.jsx)(A,{children:i?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(k.a,{color:"primary"}),Object(_.jsx)(E,{children:"Close"})]}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(b.a,{color:"primary"}),Object(_.jsx)(E,{children:"Add a task"})]})})})]})})),M=n(66),H=n(61),P=n.n(H),V=n(62),W=n.n(V),J=["status","changeTaskStatus","removeTask","state"],U=Object(y.a)("div")({display:"flex",padding:"8px 0 8px 0",alignItems:"center"}),Y=Object(y.a)("div")((function(t){return{textDecoration:t.lineThrough?"line-through":"inherit",margin:"0 0 0 12px",textAlign:"left"}})),q=Object(y.a)(O.a)((function(){return{width:"100%",textTransform:"none",justifyContent:"left",paddingLeft:"14px"}})),z=Object(y.a)("div")({display:"flex"}),G=Object(y.a)(O.a)({display:"flex",alignItems:"center"}),Q=function(t){var e=t.taskName;return Object(_.jsxs)(U,{children:[Object(_.jsx)(P.a,{style:{color:"#6ab200"}}),Object(_.jsx)(Y,{lineThrough:!0,children:e})]})},X=function(t){var e=t.taskName;return Object(_.jsxs)(U,{children:[Object(_.jsx)(h.a,{style:{color:"#9d9d9d"}}),Object(_.jsx)(Y,{children:e})]})},Z=function(t){var e=t.status,n=t.changeTaskStatus,a=t.removeTask,c=(t.state,Object(M.a)(t,J));return Object(_.jsxs)(z,{children:[Object(_.jsx)(q,{onClick:n,children:e===N?Object(_.jsx)(Q,Object(o.a)({status:e},c)):Object(_.jsx)(X,Object(o.a)({status:e},c))}),Object(_.jsx)(G,{onClick:a,children:Object(_.jsx)(W.a,{style:{color:"#9d9d9d"}})})]})},$=n(127),tt=function(t){t.scrolledContainer,t.scrolledWrapper;var e=Object(a.useState)(),n=Object(d.a)(e,2),c=n[0],i=n[1],r=Object(a.useState)(),s=Object(d.a)(r,2),l=s[0],o=s[1],j=Object(a.useState)(),u=Object(d.a)(j,2),b=u[0],O=u[1],x=Object(a.useState)(),f=Object(d.a)(x,2),h=f[0],p=f[1];Object(a.useEffect)((function(){if(h){var t=h.parentNode,e=t.parentNode;i(t),o(e)}}),[h]),Object(a.useEffect)((function(){var t=function(){requestAnimationFrame((function(){return O(Math.floor(l.scrollTop))}))};return c&&l&&(t(),l.addEventListener("scroll",t)),function(){c&&l.removeEventListener("scroll",t)}}),[c]),Object(a.useEffect)((function(){h&&(h.style.height="".concat(l.clientHeight,"px"))}),[null===l||void 0===l?void 0:l.height]);var v=(null===c||void 0===c?void 0:c.scrollHeight)!==(null===l||void 0===l?void 0:l.clientHeight),g=(null===c||void 0===c?void 0:c.clientHeight)/(null===l||void 0===l?void 0:l.clientHeight);return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{ref:function(t){return p(t)},style:{position:"absolute",right:"0px",top:b,width:"20px",height:"0%",display:h&&v?"flex":"none"},children:h?Object(_.jsx)("div",{style:{position:"absolute",width:"8px",right:"0px",height:"".concat((null===l||void 0===l?void 0:l.clientHeight)/g-12,"px"),top:b/g,background:"#d6dee1","border-radius":"20px",margin:"6px 0"}}):null})})},et=function(t){var e=t.children;return Object(_.jsxs)("div",{style:{position:"relative"},children:[e,Object(_.jsx)(tt,{})]})},nt=Object(y.a)("div")((function(){return{background:"#FFF"}})),at=Object(y.a)("div")({display:"flex",flexDirection:"column"}),ct=Object(y.a)("div")({maxHeight:"60vh",overflowY:"auto","&::-webkit-scrollbar":{display:"none"},scrollbarWidth:"none"}),it=Object(j.b)(null,(function(t){return{changeTaskStatus:function(e){return t(function(t){return{type:C,payload:{id:t}}}(e))},removeTask:function(e){return t(function(t){return{type:T,payload:{id:t}}}(e))}}}))((function(t){var e=t.list,n=void 0===e?[]:e,a=t.changeTaskStatus,c=t.removeTask;return Object(_.jsxs)(at,{children:[Object(_.jsx)(ct,{children:Object(_.jsx)(et,{children:Object(_.jsx)($.a,{container:!0,direction:"column",children:n.map((function(t,e){return Object(_.jsx)($.a,{item:!0,children:Object(_.jsxs)(nt,{children:[Object(_.jsx)(Z,Object(o.a)(Object(o.a)({},t),{},{changeTaskStatus:function(){return a(t.id)},removeTask:function(){return c(t.id)}}),t.id),e<n.length-1?Object(_.jsx)(x.a,{}):null]})})}))})})}),Object(_.jsx)(B,{})]})})),rt=n(65),st=n(131),lt=n(64),ot=n.n(lt),dt=n(128),jt=n(63),ut=n.n(jt),bt="SEL_FILTER_VALUE",Ot=Object(y.a)(l.a)((function(){return{padding:"32px 8px 14px 14px",borderRadius:"4px 4px 0 0",display:"flex",background:"linear-gradient(to right, #7360e7, #1d9eff)"}})),xt=Object(y.a)("div")({display:"flex",flexDirection:"column"}),ft=Object(y.a)("div")({display:"flex",flex:1,alignItems:"flex-end",justifyContent:"flex-end"}),ht=Object(y.a)(dt.a)({color:"#FFF"}),pt=Object(y.a)(dt.a)({color:"#FFF"}),vt=Object(y.a)(O.a)({paddingLeft:"0px",paddingRight:"0px",minWidth:"48px",margin:"0 0 -4px 16px"}),gt=Object(y.a)(dt.a)({color:"#FFF"}),kt=Object(j.b)((function(t){var e=t.tasks.taskList;return{filterBy:t.settings.filterBy,completedTaskCount:e.filter((function(t){return t.status===N})).length,currentTaskCount:e.filter((function(t){return t.status===F})).length}}),(function(t){return{setFilterValue:function(e){return t(function(t){return{type:bt,payload:t}}(e))}}}))((function(t){var e=t.filterBy,n=t.setFilterValue,c=t.completedTaskCount,i=t.currentTaskCount,r=Object(a.useState)(),s=Object(d.a)(r,2),l=s[0],o=s[1],j=function(t){void 0!=t.target.value&&n(t.target.value),o(null)},u=function(){return Object(_.jsxs)(rt.a,{anchorEl:l,keepMounted:!0,open:Boolean(l),onClose:j,children:[Object(_.jsx)(st.a,{onClick:j,value:1,children:"All"}),Object(_.jsx)(st.a,{onClick:j,value:2,children:"Completed"}),Object(_.jsx)(st.a,{onClick:j,value:3,children:"Current"})]})},b=function(){switch(e){case 1:return Object(_.jsxs)(gt,{variant:"body2",children:[c," / ",c+i," \u2014 All tasks"]});case 2:return Object(_.jsxs)(gt,{variant:"body2",children:[c," \u2014 Completed tasks"]});case 3:return Object(_.jsxs)(gt,{variant:"body2",children:[i," \u2014 Current tasks"]})}};return Object(_.jsxs)(Ot,{children:[Object(_.jsx)(u,{}),Object(_.jsxs)(xt,{children:[Object(_.jsx)(ht,{variant:"h4",children:"TO DO"}),Object(_.jsx)(pt,{variant:"body2",children:ut()().format("dddd, MMMM D")})]}),Object(_.jsxs)(ft,{children:[Object(_.jsx)("div",{children:Object(_.jsx)(b,{})}),Object(_.jsx)(vt,{size:"small",onClick:function(t){return o(t.target)},children:Object(_.jsx)(ot.a,{style:{color:"#FFF"}})})]})]})})),mt=Object(y.a)(l.a)((function(){return{background:"inherit",display:"flex",flexDirection:"column",overflowY:"hidden"}})),yt=Object(y.a)(s.a)({marginTop:"5vh",display:"flex",flexDirection:"column"}),St=Object(y.a)("div")({height:"100vh",display:"flex",overflow:"hidden"}),Tt=Object(j.b)((function(t){var e=t.tasks.taskList,n=t.settings.filterBy;return{taskList:void 0==n||1===n?e:2===n?e.filter((function(t){return t.status===N})):3===n?e.filter((function(t){return t.status===F})):void 0}}))((function(t){var e=t.taskList;return Object(_.jsx)(St,{children:Object(_.jsxs)(yt,{maxWidth:"sm",children:[Object(_.jsx)(kt,{}),Object(_.jsx)(mt,{children:Object(_.jsx)(it,{list:e})})]})})})),Ct=n(53),Ft=n(52),Nt=n(20),_t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{taskList:[]},e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload,c=t.taskList;switch(n){case S:var i=Object(Nt.a)();return Object(o.a)(Object(o.a)({},t),{},{taskList:[].concat(Object(Ft.a)(c),[{id:i,taskName:a.taskName,status:F}])});case T:return Object(o.a)(Object(o.a)({},t),{},{taskList:c.filter((function(t){return t.id!==a.id}))});case C:var r=c.find((function(t){return t.id===a.id}));return r.status=r.status===F?N:F,Object(o.a)(Object(o.a)({},t),{},{taskList:Object(Ft.a)(c)})}return t},At=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{filterBy:1},e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case bt:return Object(o.a)(Object(o.a)({},t),{},{filterBy:a})}return t},Et={tasks:{taskList:[{id:Object(Nt.a)(),taskName:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438",status:"IN_PROCESS_TASK"},{id:Object(Nt.a)(),taskName:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u043f\u0440\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0438, \u0447\u0442\u043e \u0435\u0451 \u0434\u043b\u0438\u043d\u0430 \u043c\u0435\u043d\u044c\u0448\u0435 N \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0438\u043b\u0438 \u0440\u0430\u0432\u043d\u0430 \u0435\u0439",status:"IN_PROCESS_TASK"},{id:Object(Nt.a)(),taskName:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0438\u0441\u0435\u0439",status:"IN_PROCESS_TASK"},{id:Object(Nt.a)(),taskName:"\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u0437\u0430\u043f\u0438\u0441\u0438 \u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e / \u041d\u0435\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0439 \u043f\u0440\u0438 \u043a\u043b\u0438\u043a\u0435 \u043d\u0430 \u0435\u0451 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",status:"IN_PROCESS_TASK"},{id:Object(Nt.a)(),taskName:"\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u043e \u0442\u0438\u043f\u0443 (\u0432\u0441\u0435, \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435, \u0442\u0435\u043a\u0443\u0449\u0438\u0435)",status:"IN_PROCESS_TASK"},{id:Object(Nt.a)(),taskName:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441\u0447\u0451\u0442\u0447\u0438\u043a\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445 \u0438 \u043d\u0435\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u0434\u0430\u0447",status:"IN_PROCESS_TASK"},{id:Object(Nt.a)(),taskName:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430 (Redux, Mobx)",status:"IN_PROCESS_TASK"}]}},Lt=Object(Ct.b)(Object(Ct.a)({tasks:_t,settings:At}),Et);r.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(j.a,{store:Lt,children:Object(_.jsx)(Tt,{})})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.b45db411.chunk.js.map