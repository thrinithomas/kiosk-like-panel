(this["webpackJsonpkiosk-like-panel"]=this["webpackJsonpkiosk-like-panel"]||[]).push([[0],{59:function(e,n,a){e.exports=a(71)},64:function(e,n,a){},65:function(e,n,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},66:function(e,n,a){},71:function(e,n,a){"use strict";a.r(n);var t=a(0),l=a.n(t),r=a(10),c=a.n(r),u=(a(64),a(65),a(66),a(37)),o=a(47),i=a(19),s=a(48),m=a(49),d=a(52),h=a(120),p=a(121),f=a(9),E=a(108),y=a(122),g=a(112),b=a(111),k=a(23),v=a(36),C=a.n(v),O=a(123),_=a(127),j=a(110),S=a(124),w=a(126),x=Object(E.a)((function(e){return{formControl:{margin:e.spacing(3)}}})),B=function(e){console.log(e.menu,e.meals);var n=x(),a=l.a.useState(!1),t=Object(f.a)(a,2);t[0],t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(S.a,{component:"fieldset",className:n.formControl},l.a.createElement(w.a,{component:"legend"},"\u5348\u9910"),l.a.createElement(_.a,{"aria-label":"lunch",name:"lunch"},Object.keys(e.menu.lunch).map((function(n,a){return l.a.createElement(j.a,{checked:e.meals.lunch===e.menu.lunch[n],onChange:function(){return e.selectedHandler(e.weekday,"lunch",e.menu.lunch[n])},value:e.menu.lunch[n],control:l.a.createElement(O.a,{color:"primary"}),label:e.menu.lunch[n]})}))),e.menu.lunch_soup),l.a.createElement(S.a,{component:"fieldset",className:n.formControl},l.a.createElement(w.a,{component:"legend"},"\u665a\u9910"),l.a.createElement(_.a,{"aria-label":"dinner",name:"dinner"},Object.keys(e.menu.dinner).map((function(n,a){return l.a.createElement(j.a,{checked:e.meals.dinner===e.menu.dinner[n],onChange:function(){return e.selectedHandler(e.weekday,"dinner",e.menu.dinner[n])},value:e.menu.dinner[n],control:l.a.createElement(O.a,{color:"primary"}),label:e.menu.dinner[n]})}))),e.menu.dinner_soup))},A=a(114),N=a(115),H=a(113),P=Object(E.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}})),z=function(e){var n=P(),a=l.a.useState(!1),t=Object(f.a)(a,2),r=t[0],c=t[1];return Object.keys(e.meals).map((function(a,t){return l.a.createElement("div",{className:n.root,key:"panel"+a},l.a.createElement(y.a,{expanded:r==="panel"+a,onChange:(u="panel"+a,function(e,n){c(!!n&&u)})},l.a.createElement(b.a,{expandIcon:l.a.createElement(C.a,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},l.a.createElement(k.a,{className:n.heading},"27\uff0f2 - ",a),l.a.createElement(k.a,{className:n.secondaryHeading},"\u5348\u9910: ",null==e.meals[a].lunch?null:e.meals[a].lunch+(void 0===e.menu[a].lunch_soup?"":" + "+e.menu[a].lunch_soup),l.a.createElement("br",null),"\u665a\u9910: ",null==e.meals[a].dinner?null:e.meals[a].dinner+(void 0===e.menu[a].dinner_soup?"":" + "+e.menu[a].dinner_soup))),l.a.createElement(g.a,null,l.a.createElement(k.a,null,l.a.createElement(B,{meals:e.meals[a],menu:e.menu[a],selectedHandler:e.handleSelected,weekday:a}))),l.a.createElement(H.a,null),l.a.createElement(A.a,null,l.a.createElement(N.a,{onClick:function(){return e.cancelClicked(a)},size:"medium",variant:"contained",color:"secondary"},"\u53d6\u6d88/\u91cd\u65b0\u7c21\u904e"))));var u}))},F=a(3),T=a(116),D=a(117),I=a(118),J=a(119),R=a(125),W=a(72),$=a(34),L=a(51),q=a.n(L),G=Object(E.a)((function(e){return{root:{},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:$.a[500]}}})),K=function(e){var n=G(),a=l.a.useState(!1),t=Object(f.a)(a,2);t[0],t[1];return console.log(e.meals),l.a.createElement(T.a,{className:n.root},l.a.createElement(D.a,{avatar:l.a.createElement(R.a,{"aria-label":"recipe",className:n.avatar},"\u674e"),title:"\u674e\u6a39\u4ec1",subheader:"2020\u5e74 2\u6708"}),l.a.createElement(I.a,null,l.a.createElement(k.a,{variant:"body2",color:"textSecondary",component:"p"},Object.keys(e.meals).map((function(n,a){return l.a.createElement(l.a.Fragment,null,null!==e.meals[n].lunch||null!==e.meals[n].dinner?l.a.createElement("strong",null,n):null,null==e.meals[n].lunch?null:l.a.createElement("p",null,"\u5348\u9910: ",e.meals[n].lunch+(void 0===e.menu[n].lunch_soup?"":" + "+e.menu[n].lunch_soup)),null==e.meals[n].dinner?null:l.a.createElement("p",null,"\u665a\u9910: ",e.meals[n].dinner+(void 0===e.menu[n].dinner_soup?"":" + "+e.menu[n].dinner_soup)))})),l.a.createElement("strong",null,"\u7e3d\u6578: $ ",e.totalPrice))),l.a.createElement(J.a,{disableSpacing:!0},l.a.createElement(W.a,{"aria-label":"share"},l.a.createElement(q.a,null)),l.a.createElement(N.a,{className:Object(F.a)(n.expand),"aria-label":"submit",variant:"contained",color:"primary"},"\u63d0\u4ea4")))},M={monday:{lunch:{A:"\u871c\u8c46\u7092\u96de\u7403",B:"\u7d05\u8170\u8c46\u71f4\u8c6c\u67f3(\u25b2\u5c11\u7d05\u8170\u8c46)",C:"\u73cd\u73e0\u7b4d\u71f4\u751f\u6839"},lunch_soup:"\u91d1\u91dd\u9ec3\u8c46\u8001\u9ec3\u74dc\u7626\u8089\u6e6f*",dinner:{A:"\u8591\u8525\u706b\u817f\u84b8\u9b5a\u67f3",B:"\u897f\u82b9\u7092\u8089\u7247",C:"\u96dc\u83dc\u716e\u7c89\u7d72"},dinner_soup:"\u8150\u7af9\u767d\u679c\u8c6c\u809a\u6e6f*"},tuesday:{lunch:{A:"\u7c9f\u7c73\u6591\u584a#*",B:"\u9ebb\u5a46\u8c46\u8150",C:"\u7530\u5712\u4e94\u5f69\u7d20\u96de"},lunch_soup:"\u82b1\u751f\u7709\u8c46\u9c46\u9b5a\u6392\u9aa8\u6e6f*",dinner:{A:"\u5408\u638c\u74dc\u716e\u8c6c\u6252",B:"\u8461\u570b\u96de(\u514d\u6930\u6c41)#",C:"\u6dbc\u74dc\u7092\u86cb"},dinner_soup:"\u9673\u814e\u7bc0\u74dc\u7626\u8089\u6e6f*"},wednesday:{lunch:{A:"\u7d05\u9152\u71f4\u725b\u5c3e/\u85af\u4ed4\u7d05\u863f\u8514\u7086\u8089\u7247(*\u5c11\u85af\u4ed4)(DCC/kc)",B:"\u6912\u7d72\u5357\u74dc\u84b8\u96de\u7ffc(\u53bb\u908a\u76ae)#",C:"\u672c\u83c7\u96f2\u8033\u67b8\u675e\u71f4\u52dd\u74dc"},lunch_soup:"\u82ab\u831c\u9b5a\u7247\u6e6f*",dinner:{A:"\u9999\u5983\u96de(\u53bb\u76ae)",B:"\u7c9f\u7c73\u84b8\u8089\u9905",C:"\u9bae\u8304\u7389\u5b50\u8c46\u8150"},dinner_soup:"\u4f5b\u624b\u860b\u679c\u8c6c\u5c55\u6e6f*"},thursday:{lunch:{A:"\u84b8\u6642\u9b5a/\u84b8\u9b5a\u67f3(DCC/kc)",B:"\u7d05\u68d7\u96ea\u8033\u84b8\u8089\u4e01",C:"\u8304\u6c41\u8c46\u84b8\u8c46\u8150"},lunch_soup:"\u7334\u982d\u83c7\u8328\u5be6\u7626\u8089\u6e6f*",dinner:{A:"\u863f\u8514\u7086\u9b5a\u5d27",B:"\u8170\u679c\u767e\u5408\u7092\u96de\u4e01(\u25b2\u5c11\u8170\u679c)",C:"\u8c46\u8c49\u7086\u5357\u74dc(*)@"},dinner_soup:"\u51ac\u74dc\u7c9f\u7c73\u96de\u6e6f(\u9694\u6cb9)(*)"},friday:{lunch:{A:"\u87f2\u8349\u82b1\u84b8\u96de",B:"\u7464\u67f1\u7c89\u7d72\u84b8\u6c34\u86cb(\u25b2\u5c11\u7464\u67f1)",C:"\u9ec3\u6912\u8170\u679c\u7092\u6dee\u5c71(\u25b2\u5c11\u8170\u679c)"},lunch_soup:"\u96d9\u674f\u897f\u6d0b\u83dc\u7626\u8089\u6e6f*",dinner:{A:"\u56db\u5b63\u8c46\u7518\u7b4d\u7092\u96de\u67f3",B:"\u679d\u7af9\u51ac\u74dc\u7086\u6885\u8089\u7c92",C:"\u6de1\u6885\u83dc\u84b8\u8304\u5b50# @"},dinner_soup:"\u725b\u84a1\u8d64\u5c0f\u8c46\u7626\u8089\u6e6f*"},saturday:{lunch:{A:"\u96de\u6252\u71f4\u51ac\u83c7(\u25b2\u5c11\u83c7)",B:"\u5357\u74dc\u84b8\u8089\u9905",C:"\u7518\u7b4d\u7af9\u7b19\u716e\u9eb5\u6839"},dinner:{A:"\u8c49\u6c41\u84b8\u7626\u6392\u9aa8# @",B:"\u6d77\u7687\u84b8\u86cb",C:"\u8349\u83c7\u6252\u73cd\u73e0\u8340(\u25b2\u5c11\u83c7)"}}},Q=function(e){function n(){var e,a;Object(o.a)(this,n);for(var t=arguments.length,l=new Array(t),r=0;r<t;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(l)))).state={meals:{monday:{lunch:null,dinner:null},tuesday:{lunch:null,dinner:null},wednesday:{lunch:null,dinner:null},thursday:{lunch:null,dinner:null},friday:{lunch:null,dinner:null},saturday:{lunch:null,dinner:null}},totalPrice:0},a.handleSelected=function(e,n,t){var l=Object(u.a)({},a.state.meals);l[e][n]=t,a.setState({meals:l}),a.updateState()},a.cancelClicked=function(e){var n=Object(u.a)({},a.state.meals);n[e].lunch=null,n[e].dinner=null,a.setState({meals:n}),a.updateState()},a}return Object(d.a)(n,e),Object(i.a)(n,[{key:"updateState",value:function(){var e=this,n=Object.keys(this.state.meals).map((function(n,a){return e.state.meals[n]})).map((function(e){return(null==e.lunch?0:1)+(null==e.dinner?0:1)})).reduce((function(e,n){return e+n}),0);this.setState({totalPrice:18*n})}},{key:"render",value:function(){return console.log(this.state),l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,null),l.a.createElement(p.a,{container:!0,spacing:1},l.a.createElement(p.a,{item:!0,xs:12,sm:8,spacing:3},l.a.createElement(z,{meals:this.state.meals,menu:M,handleSelected:this.handleSelected,cancelClicked:this.cancelClicked})),l.a.createElement(p.a,{item:!0,xs:12,sm:4},l.a.createElement(K,{meals:this.state.meals,menu:M,totalPrice:this.state.totalPrice}))))}}]),n}(t.Component);var U=function(){return l.a.createElement(Q,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.27240b44.chunk.js.map