(this["webpackJsonpmsal-react-quickstart"]=this["webpackJsonpmsal-react-quickstart"]||[]).push([[0],{60:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(25),i=n.n(a),o=(n(59),n(60),n(52)),s=n(21),u=n(19),l=n(39),j={auth:{clientId:"6b9c1aa6-0b49-43e0-806a-a2f4bd6d2888",authority:"https://login.microsoftonline.com/c12007a4-882b-4381-b05a-b783431570c7",redirectUri:"https://nohtaekyoung.github.io/DBocAuthorization"},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1},system:{loggerOptions:{loggerCallback:function(e,t,n){if(!n)switch(e){case l.a.Error:return void console.error(t);case l.a.Info:return void console.info(t);case l.a.Verbose:return void console.debug(t);case l.a.Warning:return void console.warn(t)}}}}},d={scopes:["User.Read"]},h="https://graph.microsoft.com/v1.0/me",b=n(54),p=n(40),O=n(26),f=n(8),g=function(){var e=Object(u.e)().instance,t=function(t){"popup"===t?e.loginPopup(d).catch((function(e){console.log(e)})):"redirect"===t&&e.loginRedirect(d).catch((function(e){console.log(e)}))};return Object(f.jsxs)(p.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"Sign In",children:[Object(f.jsx)(O.a.Item,{as:"button",onClick:function(){return t("popup")},children:"Sign in using Popup"}),Object(f.jsx)(O.a.Item,{as:"button",onClick:function(){return t("redirect")},children:"Sign in using Redirect"})]})},m=function(){var e=Object(u.e)().instance,t=function(t){"popup"===t?e.logoutPopup({postLogoutRedirectUri:"/",mainWindowRedirectUri:"/"}):"redirect"===t&&e.logoutRedirect({postLogoutRedirectUri:"/"})};return Object(f.jsxs)(p.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"Sign Out",children:[Object(f.jsx)(O.a.Item,{as:"button",onClick:function(){return t("popup")},children:"Sign out using Popup"}),Object(f.jsx)(O.a.Item,{as:"button",onClick:function(){return t("redirect")},children:"Sign out using Redirect"})]})},x=function(e){var t=Object(u.d)();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(b.a,{bg:"primary",variant:"dark",children:[Object(f.jsx)("a",{className:"navbar-brand",href:"/",children:"Microsoft Identity Platform"}),t?Object(f.jsx)(m,{}):Object(f.jsx)(g,{})]}),Object(f.jsx)("h5",{children:Object(f.jsx)("center",{children:"Welcome to the Microsoft Authentication Library For Javascript - React Quickstart"})}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),e.children]})},v=function(e){return console.log(e.graphData),Object(f.jsxs)("div",{id:"profile-div",children:[Object(f.jsxs)("p",{children:[Object(f.jsx)("strong",{children:"First Name: "})," ",e.graphData.givenName]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("strong",{children:"Last Name: "})," ",e.graphData.surname]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("strong",{children:"Email: "})," ",e.graphData.userPrincipalName]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("strong",{children:"Id: "})," ",e.graphData.id]})]})},k=n(32),y=n.n(k),I=n(38);function S(){return(S=Object(I.a)(y.a.mark((function e(t){var n,c,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Headers,c="Bearer ".concat(t),n.append("Authorization",c),r={method:"GET",headers:n},e.abrupt("return",fetch(h,r).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=n(46),R=(n(66),function(){var e=Object(u.e)(),t=e.instance,n=e.accounts,r=Object(c.useState)(null),a=Object(s.a)(r,2),i=a[0],l=a[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("h5",{className:"card-title",children:["Welcome ",n[0].name]}),i?Object(f.jsx)(v,{graphData:i}):Object(f.jsx)(N.a,{variant:"secondary",onClick:function(){t.acquireTokenSilent(Object(o.a)(Object(o.a)({},d),{},{account:n[0]})).then((function(e){(function(e){return S.apply(this,arguments)})(e.accessToken).then((function(e){l(e);var t=document.createElement("a");t.href="http://kr-dst00075.pc.cognex.com:3000/api/sso/auth?sso=".concat(e),document.body.appendChild(t),t.click()}))}))},children:"Request Profile Information"})]})}),w=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(u.a,{children:Object(f.jsx)(R,{})}),Object(f.jsx)(u.c,{children:Object(f.jsx)("h5",{className:"card-title",children:"Please sign-in to see your profile information."})})]})};function C(){return Object(f.jsx)(x,{children:Object(f.jsx)(w,{})})}var P=new(n(72).a)(j);i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(u.b,{instance:P,children:Object(f.jsx)(C,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.e9c16064.chunk.js.map