(this["webpackJsonpmsal-react-quickstart"]=this["webpackJsonpmsal-react-quickstart"]||[]).push([[0],{60:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(25),i=n.n(a),o=(n(59),n(60),n(52)),s=n(21),u=n(19),l=n(39),j={auth:{clientId:"6b9c1aa6-0b49-43e0-806a-a2f4bd6d2888",authority:"https://login.microsoftonline.com/c12007a4-882b-4381-b05a-b783431570c7",redirectUri:"https://nohtaekyoung.github.io/DBocAuthorization"},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1},system:{loggerOptions:{loggerCallback:function(e,t,n){if(!n)switch(e){case l.a.Error:return void console.error(t);case l.a.Info:return void console.info(t);case l.a.Verbose:return void console.debug(t);case l.a.Warning:return void console.warn(t)}}}}},d={scopes:["User.Read"]},h="https://graph.microsoft.com/v1.0/me",b=n(54),p=n(40),m=n(26),g=n(8),O=function(){var e=Object(u.e)().instance,t=function(t){"popup"===t?e.loginPopup(d).catch((function(e){console.log(e)})):"redirect"===t&&e.loginRedirect(d).catch((function(e){console.log(e)}))};return Object(g.jsxs)(p.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"Sign In",children:[Object(g.jsx)(m.a.Item,{as:"button",onClick:function(){return t("popup")},children:"Sign in using Popup"}),Object(g.jsx)(m.a.Item,{as:"button",onClick:function(){return t("redirect")},children:"Sign in using Redirect"})]})},f=function(){var e=Object(u.e)().instance,t=function(t){"popup"===t?e.logoutPopup({postLogoutRedirectUri:"/",mainWindowRedirectUri:"/DBocAuthorization"}):"redirect"===t&&e.logoutRedirect({postLogoutRedirectUri:"/"})};return Object(g.jsxs)(p.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"Sign Out",children:[Object(g.jsx)(m.a.Item,{as:"button",onClick:function(){return t("popup")},children:"Sign out using Popup"}),Object(g.jsx)(m.a.Item,{as:"button",onClick:function(){return t("redirect")},children:"Sign out using Redirect"})]})},x=function(e){var t=Object(u.d)();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(b.a,{bg:"primary",variant:"dark",children:[Object(g.jsx)("a",{className:"navbar-brand",href:"/",children:"Microsoft Identity Platform"}),t?Object(g.jsx)(f,{}):Object(g.jsx)(O,{})]}),Object(g.jsx)("h5",{children:Object(g.jsx)("center",{children:"Welcome to the Microsoft Authentication Library For Javascript - React Quickstart"})}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),e.children]})},v=function(e){return console.log(e.graphData),Object(g.jsxs)("div",{id:"profile-div",children:[Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"First Name: "})," ",e.graphData.givenName]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Last Name: "})," ",e.graphData.surname]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Email: "})," ",e.graphData.userPrincipalName]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Id: "})," ",e.graphData.id]})]})},k=n(32),y=n.n(k),N=n(38);function I(){return(I=Object(N.a)(y.a.mark((function e(t){var n,c,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Headers,c="Bearer ".concat(t),n.append("Authorization",c),r={method:"GET",headers:n},e.abrupt("return",fetch(h,r).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=n(46),R=(n(66),function(){var e=Object(u.e)(),t=e.instance,n=e.accounts,r=Object(c.useState)(null),a=Object(s.a)(r,2),i=a[0],l=a[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("h5",{className:"card-title",children:["Welcome ",n[0].name]}),i?Object(g.jsx)(v,{graphData:i}):Object(g.jsx)(S.a,{variant:"secondary",onClick:function(){t.acquireTokenSilent(Object(o.a)(Object(o.a)({},d),{},{account:n[0]})).then((function(e){(function(e){return I.apply(this,arguments)})(e.accessToken).then((function(e){l(e);e.givenName,e.surname,e.mail;var t=document.createElement("a");t.href="http://kr-dst00075.pc.cognex.com:3000/login?givenName=".concat(e.givenName,"&surname=").concat(e.surname,"&mail=").concat(e.mail),document.body.appendChild(t),t.click()}))}))},children:"Request Profile Information"})]})}),w=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(u.a,{children:Object(g.jsx)(R,{})}),Object(g.jsx)(u.c,{children:Object(g.jsx)("h5",{className:"card-title",children:"Please sign-in to see your profile information."})})]})};function C(){return Object(g.jsx)(x,{children:Object(g.jsx)(w,{})})}var D=new(n(72).a)(j);i.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(u.b,{instance:D,children:Object(g.jsx)(C,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.cbbfa307.chunk.js.map