(this.webpackJsonpmy_todo=this.webpackJsonpmy_todo||[]).push([[0],{26:function(e,n,t){},27:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var c=t(9),a=t.n(c),r=t(20),o=t.n(r),s=(t(26),t(27),t(12)),i=t(3);var u=function(e){var n=e.item,t=e.onCheck;return Object(i.jsxs)("label",{className:"panel-block",children:[Object(i.jsx)("input",{type:"checkbox",checked:n.done,onChange:function(){t(n)}}),Object(i.jsx)("span",{className:n.done?"has-text-grey-light":"",children:n.text})]})};var l=function(e){var n=e.onAdd,t=a.a.useState(""),c=Object(s.a)(t,2),r=c[0],o=c[1];return Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsx)("input",{class:"input",type:"text",placeholder:"Todo\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",value:r,onChange:function(e){return o(e.target.value)},onKeyDown:function(e){13===e.keyCode&&(n(r),o(""))}})})};var d=function(e){var n=e.value,t=e.onChange,c=function(e,n){n.preventDefault(),t(e)};return Object(i.jsxs)("div",{className:"panel-tabs",children:[Object(i.jsx)("a",{href:"#",onClick:c.bind(null,"ALL"),className:"ALL"===n?"is-active":"",children:"\u5168\u3066"}),Object(i.jsx)("a",{href:"#",onClick:c.bind(null,"TODO"),className:"TODO"===n?"is-active":"",children:"\u672a\u5b8c\u4e86"}),Object(i.jsx)("a",{href:"#",onClick:c.bind(null,"DONE"),className:"DONE"===n?"is-active":"",children:"\u5b8c\u4e86\u6e08\u307f"})]})},f=t(13),p=t(21),j=t(8),b=t.n(j),h=t(10),v=t(15);v.a.initializeApp({apiKey:"AIzaSyBhSlGxvNLlKpHyfC7wlAaIK7CoZzDhMAM",authDomain:"fir-sample-f3651.firebaseapp.com",projectId:"fir-sample-f3651",storageBucket:"fir-sample-f3651.appspot.com",messagingSenderId:"712146105096",appId:"1:712146105096:web:b1a8cf609ac13e1b9ff2bd"});var O=v.a.firestore(),x=(v.a.auth(),v.a,function(){var e=Object(h.a)(b.a.mark((function e(){var n,t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.collection("todos").get();case 3:return n=e.sent,t=n.docs.map((function(e){return Object(f.a)(Object(f.a)({},e.data()),{},{id:e.id})})),e.abrupt("return",t);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()),m=function(){var e=Object(h.a)(b.a.mark((function e(n){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=O.collection("todos"),e.next=4,t.add(n);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}(),k=function(){var e=Object(h.a)(b.a.mark((function e(n,t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=O.collection("todos").doc(t),e.next=4,c.update(n);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n,t){return e.apply(this,arguments)}}(),g=function(){var e=Object(h.a)(b.a.mark((function e(n){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=O.collection("todos").doc(n.id),e.next=3,t.delete().then((function(){})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var w=function(){var e=Object(c.useState)([]),n=Object(s.a)(e,2),t=n[0],a=n[1];Object(c.useEffect)((function(){r()}),[t]);var r=function(){var e=Object(h.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(h.a)(b.a.mark((function e(n){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={text:n.text,done:n.done},e.next=3,m(c);case 3:a([].concat(Object(p.a)(t),[c]));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),i=function(){var e=Object(h.a)(b.a.mark((function e(n){var c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={done:!n.done},e.next=3,k(c,n.id);case 3:r=t.map((function(e){return e.id===n.id&&(e=Object(f.a)(Object(f.a)({},e),{},{changes:c})),e})),a(r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return[t,o,i,function(){t.map((function(e){g(e)})),a([])}]};var y=function(){var e=w(),n=Object(s.a)(e,4),t=n[0],c=n[1],r=n[2],o=n[3],f=a.a.useState("ALL"),p=Object(s.a)(f,2),j=p[0],b=p[1],h=t.filter((function(e){return"ALL"===j||("TODO"===j?!e.done:"DONE"===j?e.done:void 0)})),v=function(e){r(e)};return Object(i.jsxs)("article",{class:"panel is-danger",children:[Object(i.jsx)("div",{className:"panel-heading",children:Object(i.jsxs)("span",{class:"icon-text",children:[Object(i.jsx)("span",{class:"icon",children:Object(i.jsx)("i",{class:"fas fa-calendar-check"})}),Object(i.jsx)("span",{children:" ITSS Todo\u30a2\u30d7\u30ea"})]})}),Object(i.jsx)(l,{onAdd:function(e){c({text:e,done:!1})}}),Object(i.jsx)(d,{onChange:function(e){return b(e)},value:j}),h.map((function(e){return Object(i.jsx)(u,{item:e,onCheck:v},e.key)})),Object(i.jsxs)("div",{className:"panel-block",children:[h.length," items"]}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsx)("button",{className:"button is-light is-fullwidth",onClick:o,children:"\u5168\u3066\u306eToDo\u3092\u524a\u9664"})})]})};var C=function(){return Object(i.jsx)("div",{className:"container is-fluid",children:Object(i.jsx)(y,{})})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(C,{})}),document.getElementById("root")),N()}},[[34,1,2]]]);
//# sourceMappingURL=main.e388caeb.chunk.js.map