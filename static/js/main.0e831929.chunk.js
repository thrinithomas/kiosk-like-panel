(this["webpackJsonpkiosk-like-panel"]=this["webpackJsonpkiosk-like-panel"]||[]).push([[0],{34:function(e,n,a){},61:function(e,n,a){e.exports=a(76)},66:function(e,n,a){},67:function(e,n,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},68:function(e,n,a){},76:function(e,n,a){"use strict";a.r(n);var t=a(0),l=a.n(t),r=a(16),c=a.n(r),u=(a(66),a(67),a(68),a(15)),o=a(43),i=a(17),s=a(44),d=a(45),m=a(50),p=a(112),h=a(113),y=a(109),f=a(33),k=a(22),E=a(11),b=a(102),g=a(120),v=a(110),w=a(115),_=a(114),C=a(119),S=a(106),O=a(117),j=a(118),x=a(104),B=a(105),A=a(108),N=a(3),H=a(29),R=a(34),F=a.n(R),P=Object(b.a)((function(e){return{root:{},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:H.a[500]}}})),L=function(e){var n=P(),a=l.a.useState(!1),t=Object(E.a)(a,2);t[0],t[1];return l.a.createElement(x.a,{className:n.root,style:{margin:"10px"}},l.a.createElement(B.a,null,l.a.createElement("div",{className:F.a.OrderSummary},l.a.createElement(O.a,{component:"fieldset",className:n.formControl},l.a.createElement(j.a,{component:"legend"},"\u5348\u9910"),l.a.createElement(C.a,{"aria-label":"lunch",name:"lunch"},Object.keys(e.menu.lunch).map((function(n,a){return l.a.createElement(S.a,{key:e.menu.lunch[n]+a,checked:e.meals.lunch===e.menu.lunch[n],onChange:function(){e.selectedHandler(e.menu.weekday,"lunch",e.menu.lunch[n]),e.completedHandler(a)},value:e.menu.lunch[n],control:l.a.createElement(_.a,{color:"primary"}),label:e.menu.lunch[n]})}))),e.menu.lunch_soup)),l.a.createElement("br",null),l.a.createElement("div",{className:F.a.OrderSummary},l.a.createElement(O.a,{component:"fieldset",className:n.formControl},l.a.createElement(j.a,{component:"legend"},"\u665a\u9910"),l.a.createElement(C.a,{"aria-label":"dinner",name:"dinner"},Object.keys(e.menu.dinner).map((function(n,a){return l.a.createElement(S.a,{key:e.menu.dinner[n]+a,checked:e.meals.dinner===e.menu.dinner[n],onChange:function(){e.selectedHandler(e.menu.weekday,"dinner",e.menu.dinner[n]),e.completedHandler(a)},value:e.menu.dinner[n],control:l.a.createElement(_.a,{color:"primary"}),label:e.menu.dinner[n]})}))),e.menu.dinner_soup))),l.a.createElement(A.a,null,l.a.createElement(y.a,{onClick:function(){e.cancelClicked(e.menu.weekday),e.cancelHandler()},className:Object(N.a)(n.expand),"aria-label":"submit",variant:"contained",color:"secondary"},"\u53d6\u6d88/\u91cd\u65b0\u7c21\u904e")))},T=Object(b.a)((function(e){return{root:{width:"100%"},button:{marginRight:e.spacing(1)},completed:{display:"inline-block"}}})),D={monday:"\u661f\u671f\u4e00",tuesday:"\u661f\u671f\u4e8c",wednesday:"\u661f\u671f\u4e09",thursday:"\u661f\u671f\u56db",friday:"\u661f\u671f\u4e94",saturday:"\u661f\u671f\u516d"},I=function(e){var n=T(),a=l.a.useState(0),t=Object(E.a)(a,2),r=t[0],c=t[1],u=l.a.useState(new Set),o=Object(E.a)(u,2),i=o[0],s=o[1],d=function(){console.log("To be done")};return l.a.createElement("div",{className:n.Root},l.a.createElement(g.a,{alternativeLabel:!0,nonLinear:!0,activeStep:r},e.menu.map((function(e,n){return l.a.createElement(v.a,{key:"step_"+n},l.a.createElement(w.a,{onClick:function(){c(n)},completed:(a=n,i.has(a))},D[e.weekday]));var a}))),l.a.createElement(L,{menu:e.menu[r],meals:e.meals[r],selectedHandler:e.handleSelected,completedHandler:function(){var e=new Set(i);e.add(r),s(e),d()},cancelHandler:function(){var e=new Set(i);e.delete(r),s(e)},cancelClicked:e.cancelClicked}))},J=a(111),W=a(116),$=a(107),V=a(48),q=a.n(V),z={monday:"\u661f\u671f\u4e00",tuesday:"\u661f\u671f\u4e8c",wednesday:"\u661f\u671f\u4e09",thursday:"\u661f\u671f\u56db",friday:"\u661f\u671f\u4e94",saturday:"\u661f\u671f\u516d"},G=Object(b.a)((function(e){return{root:{},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:H.a[500]}}})),K=function(e){var n=G(),a=l.a.useState(!1),t=Object(E.a)(a,2);t[0],t[1];return l.a.createElement(x.a,{className:n.root,style:{margin:"10px"}},l.a.createElement(J.a,{avatar:l.a.createElement(W.a,{"aria-label":"recipe",className:n.avatar},"\u674e"),title:"\u674e\u6a39\u4ec1",subheader:"2020\u5e74 2\u6708"}),l.a.createElement(B.a,null,Object.keys(e.meals).map((function(n,a){return l.a.createElement(l.a.Fragment,null,null!==e.meals[n].lunch||null!==e.meals[n].dinner?l.a.createElement("strong",null,z[e.meals[n].weekday]):null,null==e.meals[n].lunch?null:l.a.createElement("p",null,"\u5348\u9910: ",e.meals[n].lunch+(void 0===e.menu[n].lunch_soup?"":" + "+e.menu[n].lunch_soup)),null==e.meals[n].dinner?null:l.a.createElement("p",null,"\u665a\u9910: ",e.meals[n].dinner+(void 0===e.menu[n].dinner_soup?"":" + "+e.menu[n].dinner_soup)))})),l.a.createElement("strong",null,"\u7e3d\u6578: $ ",e.totalPrice)),l.a.createElement(A.a,{disableSpacing:!0},l.a.createElement($.a,{"aria-label":"share"},l.a.createElement(q.a,null)),l.a.createElement(y.a,{className:Object(N.a)(n.expand),"aria-label":"submit",variant:"contained",color:"primary"},"\u63d0\u4ea4")))},M=[{weekday:"monday",lunch:{A:"\u871c\u8c46\u7092\u96de\u7403",B:"\u7d05\u8170\u8c46\u71f4\u8c6c\u67f3(\u25b2\u5c11\u7d05\u8170\u8c46)",C:"\u73cd\u73e0\u7b4d\u71f4\u751f\u6839"},lunch_soup:"\u91d1\u91dd\u9ec3\u8c46\u8001\u9ec3\u74dc\u7626\u8089\u6e6f*",dinner:{A:"\u8591\u8525\u706b\u817f\u84b8\u9b5a\u67f3",B:"\u897f\u82b9\u7092\u8089\u7247",C:"\u96dc\u83dc\u716e\u7c89\u7d72"},dinner_soup:"\u8150\u7af9\u767d\u679c\u8c6c\u809a\u6e6f*"},{weekday:"tuesday",lunch:{A:"\u7c9f\u7c73\u6591\u584a#*",B:"\u9ebb\u5a46\u8c46\u8150",C:"\u7530\u5712\u4e94\u5f69\u7d20\u96de"},lunch_soup:"\u82b1\u751f\u7709\u8c46\u9c46\u9b5a\u6392\u9aa8\u6e6f*",dinner:{A:"\u5408\u638c\u74dc\u716e\u8c6c\u6252",B:"\u8461\u570b\u96de(\u514d\u6930\u6c41)#",C:"\u6dbc\u74dc\u7092\u86cb"},dinner_soup:"\u9673\u814e\u7bc0\u74dc\u7626\u8089\u6e6f*"},{weekday:"wednesday",lunch:{A:"\u7d05\u9152\u71f4\u725b\u5c3e/\u85af\u4ed4\u7d05\u863f\u8514\u7086\u8089\u7247(*\u5c11\u85af\u4ed4)(DCC/kc)",B:"\u6912\u7d72\u5357\u74dc\u84b8\u96de\u7ffc(\u53bb\u908a\u76ae)#",C:"\u672c\u83c7\u96f2\u8033\u67b8\u675e\u71f4\u52dd\u74dc"},lunch_soup:"\u82ab\u831c\u9b5a\u7247\u6e6f*",dinner:{A:"\u9999\u5983\u96de(\u53bb\u76ae)",B:"\u7c9f\u7c73\u84b8\u8089\u9905",C:"\u9bae\u8304\u7389\u5b50\u8c46\u8150"},dinner_soup:"\u4f5b\u624b\u860b\u679c\u8c6c\u5c55\u6e6f*"},{weekday:"thursday",lunch:{A:"\u84b8\u6642\u9b5a/\u84b8\u9b5a\u67f3(DCC/kc)",B:"\u7d05\u68d7\u96ea\u8033\u84b8\u8089\u4e01",C:"\u8304\u6c41\u8c46\u84b8\u8c46\u8150"},lunch_soup:"\u7334\u982d\u83c7\u8328\u5be6\u7626\u8089\u6e6f*",dinner:{A:"\u863f\u8514\u7086\u9b5a\u5d27",B:"\u8170\u679c\u767e\u5408\u7092\u96de\u4e01(\u25b2\u5c11\u8170\u679c)",C:"\u8c46\u8c49\u7086\u5357\u74dc(*)@"},dinner_soup:"\u51ac\u74dc\u7c9f\u7c73\u96de\u6e6f(\u9694\u6cb9)(*)"},{weekday:"friday",lunch:{A:"\u87f2\u8349\u82b1\u84b8\u96de",B:"\u7464\u67f1\u7c89\u7d72\u84b8\u6c34\u86cb(\u25b2\u5c11\u7464\u67f1)",C:"\u9ec3\u6912\u8170\u679c\u7092\u6dee\u5c71(\u25b2\u5c11\u8170\u679c)"},lunch_soup:"\u96d9\u674f\u897f\u6d0b\u83dc\u7626\u8089\u6e6f*",dinner:{A:"\u56db\u5b63\u8c46\u7518\u7b4d\u7092\u96de\u67f3",B:"\u679d\u7af9\u51ac\u74dc\u7086\u6885\u8089\u7c92",C:"\u6de1\u6885\u83dc\u84b8\u8304\u5b50# @"},dinner_soup:"\u725b\u84a1\u8d64\u5c0f\u8c46\u7626\u8089\u6e6f*"},{weekday:"saturday",lunch:{A:"\u96de\u6252\u71f4\u51ac\u83c7(\u25b2\u5c11\u83c7)",B:"\u5357\u74dc\u84b8\u8089\u9905",C:"\u7518\u7b4d\u7af9\u7b19\u716e\u9eb5\u6839"},dinner:{A:"\u8c49\u6c41\u84b8\u7626\u6392\u9aa8# @",B:"\u6d77\u7687\u84b8\u86cb",C:"\u8349\u83c7\u6252\u73cd\u73e0\u8340(\u25b2\u5c11\u83c7)"}}],Q=function(e){function n(e){var a;return Object(o.a)(this,n),(a=Object(s.a)(this,Object(d.a)(n).call(this,e))).state={meals:[{weekday:"monday",lunch:null,lunch_soup:null,dinner:null,dinner_soup:null},{weekday:"tuesday",lunch:null,lunch_soup:null,dinner:null,dinner_soup:null},{weekday:"wednesday",lunch:null,lunch_soup:null,dinner:null,dinner_soup:null},{weekday:"thursday",lunch:null,lunch_soup:null,dinner:null,dinner_soup:null},{weekday:"friday",lunch:null,lunch_soup:null,dinner:null,dinner_soup:null},{weekday:"saturday",lunch:null,lunch_soup:null,dinner:null,dinner_soup:null}],totalPrice:0},a.handleSelected=function(e,n,t){console.log(e,n,t);var l=Object(u.a)(a.state.meals);console.log(l);var r=l.find((function(n){return n.weekday===e}));r[n]=t,"lunch"===n?r.lunch_soup=M.find((function(n){return n.weekday===e})).lunch_soup:r.dinner_soup=M.find((function(n){return n.weekday===e})).dinner_soup,a.setState({meals:l}),a.updateState()},a.cancelClicked=function(e){var n=Object(u.a)(a.state.meals);console.log(n,e);var t=n.find((function(n){return n.weekday===e}));t.lunch=null,t.lunch_soup=null,t.dinner=null,t.dinner_soup=null,a.setState({meals:n}),a.updateState()},a.orderSumRef=Object(t.createRef)(),a}return Object(m.a)(n,e),Object(i.a)(n,[{key:"updateState",value:function(){var e=this,n=Object.keys(this.state.meals).map((function(n,a){return e.state.meals[n]})).map((function(e){return(null==e.lunch?0:1)+(null==e.dinner?0:1)})).reduce((function(e,n){return e+n}),0);this.setState({totalPrice:18*n})}},{key:"render",value:function(){var e=this;return l.a.createElement(f.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,null),l.a.createElement(h.a,{container:!0,spacing:1},l.a.createElement(h.a,{item:!0,xs:12,sm:9,spacing:3},l.a.createElement(h.a,{container:!0,justify:"space-between",spacing:16},l.a.createElement(h.a,{style:{margin:"15px"},item:!0},l.a.createElement(k.a,{type:"title",color:"inherit"},"3\u670823\u65e5 \u81f3 3\u670827\u65e5")),l.a.createElement(h.a,{style:{margin:"15px"},item:!0},l.a.createElement("div",null,l.a.createElement(y.a,{"aria-label":"submit",variant:"contained",style:{background:"#388e3c",color:"#FFF"},onClick:function(){console.log(e.orderSumRef),e.orderSumRef.current&&e.orderSumRef.current.scrollIntoView({behavior:"smooth",block:"start"})}},"\u7e3d\u89bd")))),l.a.createElement(I,{meals:this.state.meals,menu:M,handleSelected:this.handleSelected,cancelClicked:this.cancelClicked})),l.a.createElement(h.a,{ref:this.orderSumRef,item:!0,xs:12,sm:3},l.a.createElement(K,{meals:this.state.meals,menu:M,totalPrice:this.state.totalPrice})))))}}]),n}(t.Component);var U=function(){return l.a.createElement(Q,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.0e831929.chunk.js.map