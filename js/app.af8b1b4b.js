(function(t){function e(e){for(var r,i,u=e[0],c=e[1],s=e[2],l=0,m=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(m.length)m.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},i={app:0},a={app:0},o=[];function u(t){return c.p+"js/"+({404:"404",home:"home",settings:"settings"}[t]||t)+"."+{404:"26b523b2",home:"53eef7bc",settings:"52645738"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={404:1,home:1,settings:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var r="css/"+({404:"404",home:"home",settings:"settings"}[t]||t)+"."+{404:"27d44fc0",home:"0b57c703",settings:"0ecdbc2a"}[t]+".css",a=c.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return e()}var m=document.getElementsByTagName("style");for(u=0;u<m.length;u++){s=m[u],l=s.getAttribute("data-href");if(l===r||l===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||a,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete i[t],f.parentNode.removeChild(f),n(o)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){i[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(t);var m=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",m.name="ChunkLoadError",m.type=r,m.request=i,n[1](m)}a[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/koshelek-ru/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var m=0;m<s.length;m++)e(s[m]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"115e":function(t,e,n){},2950:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("4de4"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("ContentBlock")],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"b-header b-header_blue"},[n("nav",{staticClass:"b-header__main-navigation"},[n("router-link",{staticClass:"b-header__navlink b-header__navlink_grey",attrs:{to:"/"}},[t._v(" Home ")]),n("router-link",{staticClass:"b-header__navlink b-header__navlink_grey",attrs:{to:"/settings"}},[t._v(" Settings ")])],1)])},u=[],c=(n("623d"),n("2877")),s={},l=Object(c["a"])(s,o,u,!1,null,"5444161f",null),m=l.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("keep-alive",[n("router-view")],1)],1)},d=[],p=(n("d4fb"),{}),h=Object(c["a"])(p,f,d,!1,null,"5194fa7d",null),b=h.exports,g={name:"App",components:{Header:m,ContentBlock:b}},v=g,w=(n("5c0b"),Object(c["a"])(v,i,a,!1,null,null,null)),y=w.exports,F=(n("d3b7"),n("8c4f"));r["default"].use(F["a"]);var _=[{path:"/",name:"Home",component:function(){return n.e("home").then(n.bind(null,"bb51"))}},{path:"/settings",name:"settings",component:function(){return n.e("settings").then(n.bind(null,"26d3"))}},{path:"*",name:"404",component:function(){return n.e("404").then(n.bind(null,"7746"))}}],k=new F["a"]({mode:"history",base:"/koshelek-ru/",routes:_}),x=k,D=n("5f5b"),j={install:function(t){t.prototype.$dataPlugin=new t}},O=(n("96cf"),n("1da1")),C={install:function(t){t.prototype.$getData=Object(O["a"])(regeneratorRuntime.mark((function t(){var e,n,r,i=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"btcusdt",t.prev=1,t.next=4,fetch("https://www.binance.com/api/v1/depth?symbol=".concat(e.toUpperCase(),"&limit=500"));case 4:return r=t.sent,t.next=7,r.json();case 7:n=t.sent,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),console.log(t.t0);case 13:return t.abrupt("return",n);case 14:case"end":return t.stop()}}),t,null,[[1,10]])}))),t.prototype.$binanceSocketService={connect:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"btcusdt";this.$socket=new WebSocket("wss://stream.binance.com:9443/ws/".concat(t,"@depth"))},stop:function(){this.$socket.close(1e3)}}}},N=function(t,e){switch(e){case"btcusdt":return new Intl.NumberFormat("ru-RU",{minimumFractionDigits:5,maximumFractionDigits:5}).format(t);case"bnbbtc":return new Intl.NumberFormat("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2}).format(t);case"ethbtc":return new Intl.NumberFormat("ru-RU",{minimumFractionDigits:3,maximumFractionDigits:3}).format(t);default:return new Intl.NumberFormat("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2}).format(t)}},S=function(t,e){switch(e){case"btcusdt":return new Intl.NumberFormat("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2}).format(t);case"bnbbtc":return new Intl.NumberFormat("ru-RU",{minimumFractionDigits:7,maximumFractionDigits:7}).format(t);case"ethbtc":return new Intl.NumberFormat("ru-RU",{minimumFractionDigits:6,maximumFractionDigits:6}).format(t);default:return new Intl.NumberFormat("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2}).format(t)}},E=function(t){return new Intl.NumberFormat("ru-RU",{minimumFractionDigits:4,maximumFractionDigits:4}).format(t)};n("115e"),n("c32e");r["default"].config.productionTip=!1,r["default"].use(D["a"]),r["default"].use(j),r["default"].use(C),r["default"].filter("amountFilter",N),r["default"].filter("priceFilter",S),r["default"].filter("totalFilter",E),new r["default"]({router:x,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),i=n.n(r);i.a},"623d":function(t,e,n){"use strict";var r=n("2950"),i=n.n(r);i.a},"9c0c":function(t,e,n){},c32e:function(t,e,n){},d4fb:function(t,e,n){"use strict";var r=n("fd84"),i=n.n(r);i.a},fd84:function(t,e,n){}});
//# sourceMappingURL=app.af8b1b4b.js.map