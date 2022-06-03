(this["webpackJsonpmsal-react-quickstart"]=this["webpackJsonpmsal-react-quickstart"]||[]).push([[0],{60:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(25),a=n.n(o),i=(n(59),n(60),n(52)),s=n(20),l=n(18),u=n(39),j={auth:{clientId:"1fb1df3c-52c2-4722-9812-e2f115bbef8b",authority:"https://login.microsoftonline.com/c12007a4-882b-4381-b05a-b783431570c7",redirectUri:"https://nohtaekyoung.github.io/DBocAuthorization"},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1},system:{loggerOptions:{loggerCallback:function(e,t,n){if(!n)switch(e){case u.a.Error:return void console.error(t);case u.a.Info:return void console.info(t);case u.a.Verbose:return void console.debug(t);case u.a.Warning:return void console.warn(t)}}}}},d={scopes:["User.Read"]},h="https://graph.microsoft.com/v1.0/me",b=n(54),p=n(40),g=n(26),f=n(8),m=function(){var e=Object(l.e)().instance,t=function(t){"popup"===t?e.loginPopup(d).catch((function(e){console.log(e)})):"redirect"===t&&e.loginRedirect(d).catch((function(e){console.log(e)}))};return Object(f.jsxs)(p.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"Sign In",children:[Object(f.jsx)(g.a.Item,{as:"button",onClick:function(){return t("popup")},children:"Sign in using Popup"}),Object(f.jsx)(g.a.Item,{as:"button",onClick:function(){return t("redirect")},children:"Sign in using Redirect"})]})},O=function(){var e=Object(l.e)().instance,t=function(t){"popup"===t?e.logoutPopup({postLogoutRedirectUri:"/",mainWindowRedirectUri:"/DBocAuthorization"}):"redirect"===t&&e.logoutRedirect({postLogoutRedirectUri:"/"})};return Object(f.jsxs)(p.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"Sign Out",children:[Object(f.jsx)(g.a.Item,{as:"button",onClick:function(){return t("popup")},children:"Sign out using Popup"}),Object(f.jsx)(g.a.Item,{as:"button",onClick:function(){return t("redirect")},children:"Sign out using Redirect"})]})},x=function(e){var t=Object(l.d)();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(b.a,{bg:"primary",variant:"dark",children:[Object(f.jsx)("a",{className:"navbar-brand",href:"/",children:"Microsoft Identity Platform"}),t?Object(f.jsx)(O,{}):Object(f.jsx)(m,{})]}),Object(f.jsx)("h5",{children:Object(f.jsx)("center",{children:"Welcome to the Microsoft Authentication Library For Javascript - React Quickstart"})}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),e.children]})},v=function(e){return console.log(e.graphData),Object(f.jsxs)("div",{id:"profile-div",children:[Object(f.jsxs)("p",{children:[Object(f.jsx)("strong",{children:"First Name: "})," ",e.graphData.givenName]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("strong",{children:"Last Name: "})," ",e.graphData.surname]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("strong",{children:"Email: "})," ",e.graphData.userPrincipalName]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("strong",{children:"Id: "})," ",e.graphData.id]})]})},k=n(32),y=n.n(k),N=n(38);function S(e){return I.apply(this,arguments)}function I(){return(I=Object(N.a)(y.a.mark((function e(t){var n,c,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Headers,c="Bearer ".concat(t),n.append("Authorization",c),r={method:"GET",headers:n},e.abrupt("return",fetch(h,r).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=n(46),w=(n(66),function(){var e=Object(l.e)(),t=e.instance,n=e.accounts,r=Object(c.useState)(null),o=Object(s.a)(r,2),a=o[0],u=o[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("h5",{className:"card-title",children:["Welcome ",n[0].name]}),a?Object(f.jsx)(v,{graphData:a}):Object(f.jsx)(R.a,{variant:"secondary",onClick:function(){t.acquireTokenSilent(Object(i.a)(Object(i.a)({},d),{},{account:n[0]})).then((function(e){S(e.accessToken).then((function(e){u(e);e.givenName,e.surname,e.mail;var t=document.createElement("a");t.href="http://kr-dst00075.pc.cognex.com:3000/login?givenName=".concat(e.givenName,"&surname=").concat(e.surname,"&mail=").concat(e.mail),document.body.appendChild(t),t.click()}))}))},children:"Request Profile Information"})]})}),C=function(){var e=Object(l.e)(),t=e.instance,n=(e.accounts,Object(c.useState)(null)),r=Object(s.a)(n,2),o=r[0],a=r[1];Object(c.useEffect)((function(){var e=new URLSearchParams(location.search).get("type");console.log("type \ud655\uc778"),"login"===e?i():"login"!==e&&u()}),[]);var i=function(){console.log("login"),t.loginRedirect(d).catch((function(e){console.log(e)})).then((function(e){console.log(e),S(e.accessToken).then((function(e){console.log(e),a(e)}))}))},u=function(){console.log("Callback"),void 0!==o&&console.log(o)};return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(l.a,{children:Object(f.jsx)(w,{})}),Object(f.jsx)(l.c,{children:Object(f.jsx)("h5",{className:"card-title",children:"Please sign-in to see your profile information."})})]})};function P(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(x,{children:Object(f.jsx)(C,{})})})}var D=new(n(72).a)(j);a.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(l.b,{instance:D,children:Object(f.jsx)(P,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.9335f9af.chunk.js.map