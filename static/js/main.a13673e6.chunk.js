(this["webpackJsonpmsal-react-quickstart"]=this["webpackJsonpmsal-react-quickstart"]||[]).push([[0],{60:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(25),i=n.n(r),a=(n(59),n(60),n(30)),s=n(20),u=n(18),l=n(40),d={auth:{clientId:"1fb1df3c-52c2-4722-9812-e2f115bbef8b",authority:"https://login.microsoftonline.com/c12007a4-882b-4381-b05a-b783431570c7",redirectUri:"https://nohtaekyoung.github.io/DBocAuthorization"},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1},system:{loggerOptions:{loggerCallback:function(e,t,n){if(!n)switch(e){case l.a.Error:return void console.error(t);case l.a.Info:return void console.info(t);case l.a.Verbose:return void console.debug(t);case l.a.Warning:return void console.warn(t)}}}}},b={scopes:["User.Read"]},h="https://graph.microsoft.com/v1.0/me",j=n(54),p=n(41),f=n(26),g=n(8),m=function(){var e=Object(u.e)().instance,t=function(t){"popup"===t?e.loginPopup(b).catch((function(e){console.log(e)})):"redirect"===t&&e.loginRedirect(b).catch((function(e){console.log(e)}))};return Object(g.jsxs)(p.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"Sign In",children:[Object(g.jsx)(f.a.Item,{as:"button",onClick:function(){return t("popup")},children:"Sign in using Popup"}),Object(g.jsx)(f.a.Item,{as:"button",onClick:function(){return t("redirect")},children:"Sign in using Redirect"})]})},O=function(){var e=Object(u.e)().instance,t=function(t){"popup"===t?e.logoutPopup({postLogoutRedirectUri:"/",mainWindowRedirectUri:"/DBocAuthorization"}):"redirect"===t&&e.logoutRedirect({postLogoutRedirectUri:"/"})};return Object(g.jsxs)(p.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"Sign Out",children:[Object(g.jsx)(f.a.Item,{as:"button",onClick:function(){return t("popup")},children:"Sign out using Popup"}),Object(g.jsx)(f.a.Item,{as:"button",onClick:function(){return t("redirect")},children:"Sign out using Redirect"})]})},x=function(e){var t=Object(u.d)();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(j.a,{bg:"primary",variant:"dark",children:[Object(g.jsx)("a",{className:"navbar-brand",href:"/",children:"Microsoft Identity Platform"}),t?Object(g.jsx)(O,{}):Object(g.jsx)(m,{})]}),Object(g.jsx)("h5",{children:Object(g.jsx)("center",{children:"Welcome to the Microsoft Authentication Library For Javascript - React Quickstart"})}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),e.children]})},v=n(33),k=n.n(v),y=n(39);function S(e){return R.apply(this,arguments)}function R(){return(R=Object(y.a)(k.a.mark((function e(t){var n,c,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Headers,c="Bearer ".concat(t),n.append("Authorization",c),o={method:"GET",headers:n},e.abrupt("return",fetch(h,o).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(47),n(66);var w=function(){var e=Object(u.e)(),t=e.instance,n=e.accounts,o=Object(c.useState)(null),r=Object(s.a)(o,2),i=(r[0],r[1]);Object(c.useEffect)((function(){var e=new URLSearchParams(location.search).get("type");console.log("type \ud655\uc778"),"login"===e&&l()}),[]);var l=function(){console.log("login"),t.loginRedirect(b).catch((function(e){console.log(e)})).then((function(e){t.acquireTokenSilent(Object(a.a)(Object(a.a)({},b),{},{account:n[0]})).then((function(e){S(e.accessToken).then((function(e){i(e);e.givenName,e.surname,e.mail;var t=document.createElement("a");t.href="http://kr-dst00075.pc.cognex.com:3000/login?givenName=".concat(e.givenName,"&surname=").concat(e.surname,"&mail=").concat(e.mail),document.body.appendChild(t),t.click()}))}))}))};return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(u.a,{}),Object(g.jsx)(u.c,{children:Object(g.jsx)("h5",{className:"card-title",children:"Please sign-in to see your profile information."})})]})};function I(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(x,{children:Object(g.jsx)(w,{})})})}var N=new(n(72).a)(d);i.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(u.b,{instance:N,children:Object(g.jsx)(I,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.a13673e6.chunk.js.map