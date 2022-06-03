(this["webpackJsonpmsal-react-quickstart"]=this["webpackJsonpmsal-react-quickstart"]||[]).push([[0],{60:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(25),a=n.n(o),i=(n(59),n(60),n(37)),s=n(20),u=n(18),l=n(40),d={auth:{clientId:"1fb1df3c-52c2-4722-9812-e2f115bbef8b",authority:"https://login.microsoftonline.com/c12007a4-882b-4381-b05a-b783431570c7",redirectUri:"https://nohtaekyoung.github.io/DBocAuthorization"},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1},system:{loggerOptions:{loggerCallback:function(e,t,n){if(!n)switch(e){case l.a.Error:return void console.error(t);case l.a.Info:return void console.info(t);case l.a.Verbose:return void console.debug(t);case l.a.Warning:return void console.warn(t)}}}}},j={scopes:["User.Read"]},h="https://graph.microsoft.com/v1.0/me",b=n(54),p=n(41),m=n(26),g=n(8),f=function(){var e=Object(u.e)().instance,t=function(t){"popup"===t?e.loginPopup(j).catch((function(e){console.log(e)})):"redirect"===t&&e.loginRedirect(j).catch((function(e){console.log(e)}))};return Object(g.jsxs)(p.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"Sign In",children:[Object(g.jsx)(m.a.Item,{as:"button",onClick:function(){return t("popup")},children:"Sign in using Popup"}),Object(g.jsx)(m.a.Item,{as:"button",onClick:function(){return t("redirect")},children:"Sign in using Redirect"})]})},O=function(){var e=Object(u.e)().instance,t=function(t){"popup"===t?e.logoutPopup({postLogoutRedirectUri:"/",mainWindowRedirectUri:"/DBocAuthorization"}):"redirect"===t&&e.logoutRedirect({postLogoutRedirectUri:"/"})};return Object(g.jsxs)(p.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"Sign Out",children:[Object(g.jsx)(m.a.Item,{as:"button",onClick:function(){return t("popup")},children:"Sign out using Popup"}),Object(g.jsx)(m.a.Item,{as:"button",onClick:function(){return t("redirect")},children:"Sign out using Redirect"})]})},x=function(e){var t=Object(u.d)();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(b.a,{bg:"primary",variant:"dark",children:[Object(g.jsx)("a",{className:"navbar-brand",href:"/",children:"Microsoft Identity Platform"}),t?Object(g.jsx)(O,{}):Object(g.jsx)(f,{})]}),Object(g.jsx)("h5",{children:Object(g.jsx)("center",{children:"Welcome to the Microsoft Authentication Library For Javascript - React Quickstart"})}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),e.children]})},v=function(e){return console.log(e.graphData),Object(g.jsxs)("div",{id:"profile-div",children:[Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"First Name: "})," ",e.graphData.givenName]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Last Name: "})," ",e.graphData.surname]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Email: "})," ",e.graphData.userPrincipalName]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Id: "})," ",e.graphData.id]})]})},k=n(32),y=n.n(k),N=n(39);function R(e){return S.apply(this,arguments)}function S(){return(S=Object(N.a)(y.a.mark((function e(t){var n,c,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Headers,c="Bearer ".concat(t),n.append("Authorization",c),r={method:"GET",headers:n},e.abrupt("return",fetch(h,r).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=n(47),w=(n(66),function(){var e=Object(u.e)(),t=e.instance,n=e.accounts,r=Object(c.useState)(null),o=Object(s.a)(r,2),a=o[0],l=o[1];Object(c.useEffect)((function(){console.log("2"),n.length>0&&t.acquireTokenSilent(Object(i.a)(Object(i.a)({},j),{},{account:n[0]})).then((function(e){R(e.accessToken).then((function(e){l(e);e.givenName,e.surname,e.mail;var t=document.createElement("a");t.href="http://kr-dst00075.pc.cognex.com:3000/login?givenName=".concat(e.givenName,"&surname=").concat(e.surname,"&mail=").concat(e.mail),document.body.appendChild(t),t.click()}))}))}),[]);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("h5",{className:"card-title",children:["Welcome ",n[0].name]}),a?Object(g.jsx)(v,{graphData:a}):Object(g.jsx)(I.a,{variant:"secondary",onClick:function(){t.acquireTokenSilent(Object(i.a)(Object(i.a)({},j),{},{account:n[0]})).then((function(e){R(e.accessToken).then((function(e){l(e);e.givenName,e.surname,e.mail;var t=document.createElement("a");t.href="http://kr-dst00075.pc.cognex.com:3000/login?givenName=".concat(e.givenName,"&surname=").concat(e.surname,"&mail=").concat(e.mail),document.body.appendChild(t),t.click()}))}))},children:"Request Profile Information"})]})}),C=function(){var e=Object(u.e)(),t=e.instance,n=(e.accounts,Object(c.useState)(null)),r=Object(s.a)(n,2);r[0],r[1];Object(c.useEffect)((function(){console.log("1");var e=new URLSearchParams(location.search).get("type");if(console.log("type \ud655\uc778"),"login"===e)o();else if("logout"===e)a();else{var t=document.createElement("a");t.href="http://kr-dst00075.pc.cognex.com:3000/login",document.body.appendChild(t),t.click()}}),[]);var o=function(){t.loginRedirect(j).catch((function(e){console.log(e)}))},a=function(){t.logoutRedirect({postLogoutRedirectUri:"/"})};return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(u.a,{children:Object(g.jsx)(w,{})}),Object(g.jsx)(u.c,{children:Object(g.jsx)("h5",{className:"card-title",children:"Please sign-in to see your profile information."})})]})};function E(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(x,{children:Object(g.jsx)(C,{})})})}var P=new(n(72).a)(d);a.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(u.b,{instance:P,children:Object(g.jsx)(E,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.db54b383.chunk.js.map