(this["webpackJsonpmsal-react-quickstart"]=this["webpackJsonpmsal-react-quickstart"]||[]).push([[0],{60:function(t,e,n){},66:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(25),i=n.n(r),a=(n(59),n(60),n(37)),s=n(20),u=n(19),l=n(40),d={auth:{clientId:"1fb1df3c-52c2-4722-9812-e2f115bbef8b",authority:"https://login.microsoftonline.com/c12007a4-882b-4381-b05a-b783431570c7",redirectUri:"https://nohtaekyoung.github.io/DBocAuthorization"},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1},system:{loggerOptions:{loggerCallback:function(t,e,n){if(!n)switch(t){case l.a.Error:return void console.error(e);case l.a.Info:return void console.info(e);case l.a.Verbose:return void console.debug(e);case l.a.Warning:return void console.warn(e)}}}}},b={scopes:["User.Read"]},j="https://graph.microsoft.com/v1.0/me",h=n(54),p=n(41),f=n(26),g=n(9),m=function(){var t=Object(u.c)().instance,e=function(e){"popup"===e?t.loginPopup(b).catch((function(t){console.log(t)})):"redirect"===e&&t.loginRedirect(b).catch((function(t){console.log(t)}))};return Object(g.jsxs)(p.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"Sign In",children:[Object(g.jsx)(f.a.Item,{as:"button",onClick:function(){return e("popup")},children:"Sign in using Popup"}),Object(g.jsx)(f.a.Item,{as:"button",onClick:function(){return e("redirect")},children:"Sign in using Redirect"})]})},O=function(){var t=Object(u.c)().instance,e=function(e){"popup"===e?t.logoutPopup({postLogoutRedirectUri:"/",mainWindowRedirectUri:"/DBocAuthorization"}):"redirect"===e&&t.logoutRedirect({postLogoutRedirectUri:"/"})};return Object(g.jsxs)(p.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"Sign Out",children:[Object(g.jsx)(f.a.Item,{as:"button",onClick:function(){return e("popup")},children:"Sign out using Popup"}),Object(g.jsx)(f.a.Item,{as:"button",onClick:function(){return e("redirect")},children:"Sign out using Redirect"})]})},v=function(t){var e=Object(u.b)();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(h.a,{bg:"primary",variant:"dark",children:[Object(g.jsx)("a",{className:"navbar-brand",href:"/",children:"Microsoft Identity Platform"}),e?Object(g.jsx)(O,{}):Object(g.jsx)(m,{})]}),Object(g.jsx)("h5",{children:Object(g.jsx)("center",{children:"Welcome to the Microsoft Authentication Library For Javascript - React Quickstart"})}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),t.children]})},x=n(32),k=n.n(x),y=n(39);function R(t){return S.apply(this,arguments)}function S(){return(S=Object(y.a)(k.a.mark((function t(e){var n,c,o;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new Headers,c="Bearer ".concat(e),n.append("Authorization",c),o={method:"GET",headers:n},t.abrupt("return",fetch(j,o).then((function(t){return t.json()})).catch((function(t){return console.log(t)})));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}n(66);var w=function(){var t=Object(u.c)(),e=t.instance,n=t.accounts,o=Object(c.useState)(null),r=Object(s.a)(o,2),i=(r[0],r[1]);Object(c.useEffect)((function(){console.log("2"),n.length>0&&e.acquireTokenSilent(Object(a.a)(Object(a.a)({},b),{},{account:n[0]})).then((function(t){R(t.accessToken).then((function(t){i(t);t.givenName,t.surname,t.mail;var e=document.createElement("a");e.href="http://kr-dst00075.pc.cognex.com:3000/login?givenName=".concat(t.givenName,"&surname=").concat(t.surname,"&mail=").concat(t.mail),document.body.appendChild(e),e.click()}))}))}),[]);return Object(g.jsx)(g.Fragment,{})},I=function(){var t=Object(u.c)(),e=t.instance,n=(t.accounts,Object(c.useState)(null)),o=Object(s.a)(n,2);o[0],o[1];Object(c.useEffect)((function(){console.log("1");var t=new URLSearchParams(location.search).get("type");if(console.log("type \ud655\uc778"),"login"===t)r();else if("logout"===t)i();else{var e=document.createElement("a");e.href="http://kr-dst00075.pc.cognex.com:3000/login",document.body.appendChild(e),e.click()}}),[]);var r=function(){e.loginRedirect(b).catch((function(t){console.log(t)}))},i=function(){e.logoutRedirect({postLogoutRedirectUri:"/DBocAuthorization"})};return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(w,{})})};function C(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(v,{children:Object(g.jsx)(I,{})})})}var A=new(n(72).a)(d);i.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(u.a,{instance:A,children:Object(g.jsx)(C,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.19ee4ff7.chunk.js.map