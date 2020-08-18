(this.webpackJsonprepeat=this.webpackJsonprepeat||[]).push([[0],{31:function(e,t,a){e.exports={jumbotron:"Recall_jumbotron__CgnOl",checkButtonContainer:"Recall_checkButtonContainer__1YZ7n",cardFrontContainer:"Recall_cardFrontContainer__3I0dV",cardBackContainer:"Recall_cardBackContainer__1QBG4",matchesContainer:"Recall_matchesContainer__3iiew",equal:"Recall_equal__3tHiw",notEqual:"Recall_notEqual__27BH3"}},42:function(e,t,a){e.exports=a(69)},47:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(22),r=a.n(c),o=(a(47),a(71)),u=a(72),i=a(73),s=a(74),m=a(75),d=a(16),E=a(14),f=a(21),b=a(79),p=Object(f.b)(),v=Object(f.c)({name:"flow",initialState:p.getInitialState(),reducers:{addFlow:function(e,t){var a=t.payload,n=a.name,l=a.steps,c=a.speed,r=a.id;r=r||Object(b.a)(),p.upsertOne(e,{name:n,steps:l,speed:c,id:r})},removeFlow:function(e,t){p.removeOne(e,t.payload)}}}),w=v.actions,h=w.addFlow,_=w.removeFlow,g=p.getSelectors((function(e){return e.flow})),O=g.selectById,j=(g.selectIds,g.selectEntities,g.selectAll),C=(g.selectTotal,v.reducer),S=a(38),k=a(40),F=a(9),B=a.n(F),N=function(){var e=Object(E.b)(),t=Object(E.c)((function(e){return j(e)}));return l.a.createElement("div",null,l.a.createElement(o.a,{className:B.a.center},l.a.createElement("h1",null,"Flows")),l.a.createElement(u.a,null,l.a.createElement(i.a,null,t.map((function(t){return l.a.createElement(s.a,{key:t.id},l.a.createElement("div",{className:B.a.listGroupItem},l.a.createElement("div",null,l.a.createElement(d.b,{to:"/flow/".concat(t.id,"/recall")},t.name),l.a.createElement("div",null,l.a.createElement("b",null,"Steps:"),t.steps),l.a.createElement("div",null,l.a.createElement("b",null,"Speed:"),t.speed)),l.a.createElement("div",{className:B.a.flowControlContainer},l.a.createElement(m.a,{className:B.a.button,color:"danger",onClick:function(){return e(_(t.id))}},l.a.createElement("svg",{className:"bi bi-trash-fill",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"}))),l.a.createElement(d.b,{to:"/flow/edit/".concat(t.id)},l.a.createElement(m.a,{color:"info",className:B.a.cardControlButton},l.a.createElement(S.a,{icon:k.a}))))))})))),l.a.createElement(u.a,{className:B.a.center},l.a.createElement("div",null),l.a.createElement(d.b,{to:"/flow/add"},l.a.createElement(m.a,{color:"primary",className:B.a.addFlowButton},"Add Flow")),l.a.createElement("div",null)))},x=a(15),y=a(76),I=a(77),R=a(78),H=a(4),A=a(5),z=a.n(A),q=function(){var e=Object(H.g)(),t=Object(E.b)(),a=Object(n.useState)(""),c=Object(x.a)(a,2),r=c[0],i=c[1],s=Object(n.useState)(""),d=Object(x.a)(s,2),f=d[0],b=d[1],p=Object(n.useState)(""),v=Object(x.a)(p,2),w=v[0],_=v[1],g=Object(H.h)().id,j=Object(E.c)((function(e){return O(e,g)}));console.log(j),Object(n.useEffect)((function(){j&&(i(j.name),b(j.steps),_(j.speed))}),[j]);return l.a.createElement("div",null,l.a.createElement(o.a,{className:B.a.center},l.a.createElement(m.a,{color:"info",onClick:function(){return e.goBack()}},"Back"),l.a.createElement("h1",null,g?"Edit":"Add"," Flow")),l.a.createElement(u.a,null,l.a.createElement(y.a,{className:z()(B.a.center,B.a.margin)},l.a.createElement(I.a,{className:z()(B.a.fullWidth)}," ","Flow",l.a.createElement(R.a,{value:r,onChange:function(e){return i(e.target.value)}}),l.a.createElement(R.a,{value:f,onChange:function(e){return b(e.target.value)}}),l.a.createElement(R.a,{value:w,onChange:function(e){return _(e.target.value)}}))),l.a.createElement("div",{className:B.a.center},l.a.createElement("div",null),l.a.createElement(m.a,{color:"primary",onClick:function(){return t(h({name:r,steps:f,speed:w,id:g})),void e.goBack()}},"Submit"),l.a.createElement("div",null))))},M=a(31),G=a.n(M),J=window.speechSynthesis;function P(e){if(!J.speaking){var t=new SpeechSynthesisUtterance(e);-1!==e.indexOf("*")&&((t=new SpeechSynthesisUtterance(e.substring(0,e.length-1))).rate=.5),J.speak(t)}}var V=function(){var e=Object(H.g)(),t=Object(H.h)().id,a=Object(E.c)((function(e){return O(e,t)})),c=Object(n.useState)(null),r=Object(x.a)(c,2),i=(r[0],r[1],Object(n.useState)(0)),s=Object(x.a)(i,2),d=(s[0],s[1],Object(n.useState)(!1)),f=Object(x.a)(d,2),b=f[0],p=f[1],v=function(e,t){var a=Object(n.useState)(e),l=Object(x.a)(a,2),c=l[0],r=l[1],o=Object(n.useRef)(null);return{count:c,start:Object(n.useCallback)((function(){null===o.current&&(o.current=setInterval((function(){r((function(e){return e+1}))}),t))}),[t]),stop:Object(n.useCallback)((function(){null!==o.current&&(clearInterval(o.current),o.current=null)}),[]),reset:Object(n.useCallback)((function(){r(-1)}),[])}}(-1,a.speed),w=v.count,h=v.start,_=v.stop,g=v.reset,j=a.steps.split(","),C=w%j.length,S=-1===w?"-":j[C],k=-1===w?"-":Math.floor(w/j.length);"-"!==S&&b&&(-1!=="".concat(S).indexOf("Count")?P("".concat(k+1)+"*"):P(S));var F=b?l.a.createElement(m.a,{onClick:function(){_(),p(!1)}},"Pause"):l.a.createElement(m.a,{onClick:function(){h(),p(!0)}},"Start");return l.a.createElement("div",null,l.a.createElement(o.a,{className:G.a.jumbotron},l.a.createElement(m.a,{color:"info",onClick:function(){return e.goBack()}},l.a.createElement("svg",{className:"bi bi-arrow-left-circle-fill",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.646 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L6.207 7.5H11a.5.5 0 0 1 0 1H6.207l2.147 2.146z"}))),l.a.createElement("h1",null,"Recall")),l.a.createElement(u.a,null,l.a.createElement(u.a,{className:G.a.flowFrontContainer},l.a.createElement("h5",null," ",a.name," "),l.a.createElement("div",null," ",a.steps," "),l.a.createElement("div",null," ",a.speed," ")),l.a.createElement(u.a,null,l.a.createElement("h5",null," Count: ",w," "),l.a.createElement("h1",null," Step: ",S," "),l.a.createElement("h1",null," Count: ",k," ")),l.a.createElement(u.a,null,l.a.createElement(m.a,{onClick:function(){_(),g()}},"Stop"),F)))};var W=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d.a,null,l.a.createElement(H.d,null,l.a.createElement(H.b,{exact:!0,path:"/flow",component:N}),l.a.createElement(H.b,{exact:!0,path:"/flow",component:N}),l.a.createElement(H.b,{exact:!0,path:"/flow/add",component:q}),l.a.createElement(H.b,{exact:!0,path:"/flow/edit/:id",component:q}),l.a.createElement(H.b,{exact:!0,path:"/flow/:id/recall",component:V}),l.a.createElement(H.b,{exact:!0,path:"/"},l.a.createElement(H.a,{to:"/flow"})))))},Y=a(41),L=a.n(Y),T=function(){try{var e=localStorage.getItem("state");return e?JSON.parse(e):void 0}catch(t){return}}(),U=Object(f.a)({reducer:{flow:C},preloadedState:T});U.subscribe(L()((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.log(a)}}(U.getState())}),1e3));var Z=U;a(68);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E.a,{store:Z},l.a.createElement(W,null))),document.getElementById("root"))},9:function(e,t,a){e.exports={center:"Flow_center__nsh0s",fullWidth:"Flow_fullWidth__tumPx",margin:"Flow_margin__Y-y4Z",addFlowButton:"Flow_addFlowButton__d-YyL",listGroupItem:"Flow_listGroupItem__v578A",flowControlContainer:"Flow_flowControlContainer__1B8q3",button:"Flow_button__3PiwT"}}},[[42,1,2]]]);
//# sourceMappingURL=main.0c88c3fb.chunk.js.map