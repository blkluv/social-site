(function(e){function s(s){for(var o,p,a=s[0],i=s[1],h=s[2],n=0,l=[];n<a.length;n++)p=a[n],Object.prototype.hasOwnProperty.call(c,p)&&c[p]&&l.push(c[p][0]),c[p]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);m&&m(s);while(l.length)l.shift()();return r.push.apply(r,h||[]),t()}function t(){for(var e,s=0;s<r.length;s++){for(var t=r[s],o=!0,p=1;p<t.length;p++){var a=t[p];0!==c[a]&&(o=!1)}o&&(r.splice(s--,1),e=i(i.s=t[0]))}return e}var o={},p={app:0},c={app:0},r=[];function a(e){return i.p+"js/"+({Error404:"Error404",Login:"Login","Post~Profile":"Post~Profile",Post:"Post",Profile:"Profile"}[e]||e)+"."+{Error404:"e58853f1",Login:"54bba9b3","Post~Profile":"94df1fd6",Post:"83dad078",Profile:"55333801"}[e]+".js"}function i(s){if(o[s])return o[s].exports;var t=o[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var s=[],t={Login:1,"Post~Profile":1,Post:1,Profile:1};p[e]?s.push(p[e]):0!==p[e]&&t[e]&&s.push(p[e]=new Promise((function(s,t){for(var o="css/"+({Error404:"Error404",Login:"Login","Post~Profile":"Post~Profile",Post:"Post",Profile:"Profile"}[e]||e)+"."+{Error404:"31d6cfe0",Login:"0ea35a4d","Post~Profile":"c4691164",Post:"3fa0a928",Profile:"249396cc"}[e]+".css",c=i.p+o,r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var h=r[a],n=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(n===o||n===c))return s()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){h=l[a],n=h.getAttribute("data-href");if(n===o||n===c)return s()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=s,m.onerror=function(s){var o=s&&s.target&&s.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete p[e],m.parentNode.removeChild(m),t(r)},m.href=c;var g=document.getElementsByTagName("head")[0];g.appendChild(m)})).then((function(){p[e]=0})));var o=c[e];if(0!==o)if(o)s.push(o[2]);else{var r=new Promise((function(s,t){o=c[e]=[s,t]}));s.push(o[2]=r);var h,n=document.createElement("script");n.charset="utf-8",n.timeout=120,i.nc&&n.setAttribute("nonce",i.nc),n.src=a(e);var l=new Error;h=function(s){n.onerror=n.onload=null,clearTimeout(m);var t=c[e];if(0!==t){if(t){var o=s&&("load"===s.type?"missing":s.type),p=s&&s.target&&s.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+p+")",l.name="ChunkLoadError",l.type=o,l.request=p,t[1](l)}c[e]=void 0}};var m=setTimeout((function(){h({type:"timeout",target:n})}),12e4);n.onerror=n.onload=h,document.head.appendChild(n)}return Promise.all(s)},i.m=e,i.c=o,i.d=function(e,s,t){i.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,s){if(1&s&&(e=i(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var o in e)i.d(t,o,function(s){return e[s]}.bind(null,o));return t},i.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(s,"a",s),s},i.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},i.p="/",i.oe=function(e){throw console.error(e),e};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],n=h.push.bind(h);h.push=s,h=h.slice();for(var l=0;l<h.length;l++)s(h[l]);var m=n;r.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("cd49")},"022a":function(e,s,t){},"526b":function(e,s,t){"use strict";t.d(s,"d",(function(){return h})),t.d(s,"a",(function(){return n})),t.d(s,"c",(function(){return l})),t.d(s,"b",(function(){return m}));var o=t("59ca"),p=t.n(o),c=(t("ea7b"),t("000b"),t("e71f"),t("588e"),"production"),r={apiKey:"AIzaSyAvZhvOdcZctgok0Ktrk-ehP0j2uABMToc",authDomain:"instabio-c15ca.firebaseapp.com",databaseURL:"https://instabio-c15ca.firebaseio.com",projectId:"instabio-c15ca",storageBucket:"instabio-c15ca.appspot.com",messagingSenderId:"336040471368",appId:"1:336040471368:web:5e968f27eea0576937617d",measurementId:"G-NM6F1DZZ3M"},a=p.a.initializeApp(r);a.analytics();var i=a.firestore(),h=a.storage().ref(),n=a.auth(),l="production"===c?i.collection("profiles"):i.collection("dev-profiles"),m=function(e){return"production"===c?i.collection("profiles/".concat(e,"/timeline")):i.collection("dev-profiles/".concat(e,"/timeline"))}},"5f4a":function(e,s,t){"use strict";var o=["https://images.pexels.com/photos/1122462/pexels-photo-1122462.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1694881/pexels-photo-1694881.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1168742/pexels-photo-1168742.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/313104/pexels-photo-313104.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1751596/pexels-photo-1751596.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/853411/pexels-photo-853411.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1188470/pexels-photo-1188470.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/42078/pexels-photo-42078.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1194412/pexels-photo-1194412.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1587651/pexels-photo-1587651.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1545499/pexels-photo-1545499.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/428325/pexels-photo-428325.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1471204/pexels-photo-1471204.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1413883/pexels-photo-1413883.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1070970/pexels-photo-1070970.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1425452/pexels-photo-1425452.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1430675/pexels-photo-1430675.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1255061/pexels-photo-1255061.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1090551/pexels-photo-1090551.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1440399/pexels-photo-1440399.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1267244/pexels-photo-1267244.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1439264/pexels-photo-1439264.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1439251/pexels-photo-1439251.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1447358/pexels-photo-1447358.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1439258/pexels-photo-1439258.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1452783/pexels-photo-1452783.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1453488/pexels-photo-1453488.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1261408/pexels-photo-1261408.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1467479/pexels-photo-1467479.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/840566/pexels-photo-840566.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1464565/pexels-photo-1464565.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/102170/pexels-photo-102170.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1461447/pexels-photo-1461447.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1461101/pexels-photo-1461101.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1080884/pexels-photo-1080884.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/952057/pexels-photo-952057.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/457446/pexels-photo-457446.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1753798/pexels-photo-1753798.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1751601/pexels-photo-1751601.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1173804/pexels-photo-1173804.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1684915/pexels-photo-1684915.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1587200/pexels-photo-1587200.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1587619/pexels-photo-1587619.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1391421/pexels-photo-1391421.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1416945/pexels-photo-1416945.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1093946/pexels-photo-1093946.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1471141/pexels-photo-1471141.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1486669/pexels-photo-1486669.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1230349/pexels-photo-1230349.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/247519/pexels-photo-247519.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1430627/pexels-photo-1430627.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1254690/pexels-photo-1254690.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1439951/pexels-photo-1439951.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1436621/pexels-photo-1436621.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1454021/pexels-photo-1454021.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1356286/pexels-photo-1356286.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1439317/pexels-photo-1439317.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1250643/pexels-photo-1250643.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/561462/pexels-photo-561462.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/122101/pexels-photo-122101.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1456951/pexels-photo-1456951.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/695779/pexels-photo-695779.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/106258/pexels-photo-106258.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1466852/pexels-photo-1466852.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/426893/pexels-photo-426893.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1461270/pexels-photo-1461270.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/689924/pexels-photo-689924.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/922100/pexels-photo-922100.png?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1166990/pexels-photo-1166990.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1701626/pexels-photo-1701626.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1721613/pexels-photo-1721613.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1206059/pexels-photo-1206059.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1340502/pexels-photo-1340502.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1391480/pexels-photo-1391480.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1545980/pexels-photo-1545980.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1545511/pexels-photo-1545511.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1417255/pexels-photo-1417255.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1448371/pexels-photo-1448371.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/689475/pexels-photo-689475.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1415268/pexels-photo-1415268.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1058950/pexels-photo-1058950.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/873069/pexels-photo-873069.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/417801/pexels-photo-417801.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1436618/pexels-photo-1436618.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1425436/pexels-photo-1425436.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1019411/pexels-photo-1019411.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1439254/pexels-photo-1439254.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1449855/pexels-photo-1449855.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/248012/pexels-photo-248012.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/729982/pexels-photo-729982.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/175718/pexels-photo-175718.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1139317/pexels-photo-1139317.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1292684/pexels-photo-1292684.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/567451/pexels-photo-567451.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1464223/pexels-photo-1464223.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1463563/pexels-photo-1463563.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/93827/pexels-photo-93827.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1058950/pexels-photo-1058950.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1083989/pexels-photo-1083989.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1096668/pexels-photo-1096668.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1098366/pexels-photo-1098366.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1174103/pexels-photo-1174103.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/206233/pexels-photo-206233.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1079384/pexels-photo-1079384.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1089845/pexels-photo-1089845.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1121797/pexels-photo-1121797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1142984/pexels-photo-1142984.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1174179/pexels-photo-1174179.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/293029/pexels-photo-293029.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/562622/pexels-photo-562622.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/673649/pexels-photo-673649.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1081672/pexels-photo-1081672.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1115196/pexels-photo-1115196.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1143367/pexels-photo-1143367.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"];s["a"]=o},"73ec":function(e,s,t){"use strict";t.d(s,"d",(function(){return p})),t.d(s,"b",(function(){return c})),t.d(s,"a",(function(){return r})),t.d(s,"c",(function(){return a}));t("a15b"),t("d81d"),t("fb6a"),t("a9e3"),t("d3b7"),t("ac1f"),t("25f0"),t("466d");var o=["🖤","💜","💙","💚","💛","🧡","❤️","🔥","👌","🙌","🤲","💪","🎙️","🎵","🧙","✍️","✌️","🖖","🤜","🤛","👍","👊","✊","👏","☢️","👽","💉","🎧","⚠️","🔝","💯","✨","💣","💥","🥊","🌶️","🕶️","🌡️","🐲","☮️","☯️","😄","😃","😀","😊","😉","😍","😜","😝","😛","😁","😂","😆","😋","😎","😈","😮","😬","😏","😺","😸","😻","🙈","🙊"],p=function(e,s){return Math.floor(Math.random()*(s-e+1))+e},c=function(e){return e[p(0,e.length-1)]},r=function(e){for(var s=[],t=0;t<e;t++)s.push(c(o));return s.join(" ")},a=function(e){console.log({hexString:e});var s=e.slice(1),t=s?"#".concat((16777215^Number("0x1".concat(s))).toString(16).substr(1).toUpperCase()):"";return console.log({invertedHex:t}),t}},9224:function(e){e.exports=JSON.parse('{"a":"0.3.13"}')},"9cdc":function(e,s,t){"use strict";t("022a")},afbc:function(e,s,t){"use strict";t("4160"),t("45fc"),t("d3b7"),t("ac1f"),t("25f0"),t("5319"),t("159b"),t("96cf");var o=t("1da1"),p=t("8c4f"),c=t("526b"),r=(t("99af"),t("73ec")),a=t("5f4a"),i={instagram:{icon:"fa fa-instagram",link:"https://www.instagram.com/..."},facebook:{icon:"fa fa-facebook",link:"https://www.facebook.com/..."},youtube:{icon:"fa fa-youtube",link:"https://youtube.com/c/..."},spotify:{icon:"fa fa-spotify",link:"https://open.spotify.com/artist/..."},twitter:{icon:"fa fa-twitter",link:""},github:{icon:"fa fa-github-alt",link:""},linkedin:{icon:"fa fa-linkedin",link:""}},h=function(e){var s=e.uid,t=e.displayName,o=e.photoURL;return{userUid:s,displayName:t,coverImg:Object(r["b"])(a["a"]),photoURL:o,bgColor:"#000000",shortBio:"".concat(Object(r["a"])(Object(r["d"])(1,3))," What/Where ").concat(Object(r["a"])(Object(r["d"])(1,3))),longBio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et bibendum ex. Integer condimentum nisi luctus commodo sagittis. Integer varius libero et est convallis, vitae malesuada justo bibendum. Duis eu mi sed dolor consequat luctus. Integer feugiat, urna vel sagittis accumsan, ipsum neque pulvinar mi, eu tempor erat diam accumsan lectus. Vestibulum quis auctor mi. Cras ornare luctus dolor quis tincidunt. Aenean eu malesuada lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\n\n    Aliquam dignissim turpis sed ultrices commodo. Sed sed purus risus. Ut accumsan semper dolor, a euismod velit aliquet quis. Vestibulum pharetra magna ac justo ultrices dapibus. Nullam vel nunc tempus, scelerisque libero et, interdum ipsum. Maecenas nulla orci, semper nec purus iaculis, tincidunt imperdiet libero. Nulla dolor ligula, maximus et purus vehicula, luctus vehicula neque. Ut ac turpis orci. Vestibulum tristique maximus dolor, a tristique eros faucibus ac. Duis ac interdum ex, sed accumsan erat. Praesent facilisis pharetra ex pulvinar malesuada. ".concat(Object(r["a"])(Object(r["d"])(1,3))),socialLinks:i}},n=h,l=Object(p["a"])({history:Object(p["b"])(),routes:[]}),m=function(){return t.e("Login").then(t.bind(null,"a55b"))},g=[{path:"/404",component:function(){return t.e("Error404").then(t.bind(null,"b2ec"))}},{path:"/",component:m,meta:{toProfileIfLoggedIn:!0}},{path:"/login",component:m,meta:{toProfileIfLoggedIn:!0}},{path:"/u/:userUid",props:!0,component:function(){return Promise.all([t.e("Post~Profile"),t.e("Profile")]).then(t.bind(null,"c66d"))},beforeEnter:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(s,t,o){var p,r,a,i,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(p=c["a"].currentUser,r=(null===p||void 0===p?void 0:p.uid)===s.params.userUid,r){e.next=5;break}return o(),e.abrupt("return");case 5:return a=c["c"].doc(s.params.userUid.toString()),e.next=8,a.get();case 8:if(i=e.sent,!p||!r||(null===i||void 0===i?void 0:i.exists)){e.next=16;break}return console.log("own profile not found, creating..."),h=n(p),e.next=14,a.set(h);case 14:return o(),e.abrupt("return");case 16:(null===i||void 0===i?void 0:i.exists)?o():(console.log("public profile not found, 404..."),l.replace("/404"));case 17:case"end":return e.stop()}}),e)})));function s(s,t,o){return e.apply(this,arguments)}return s}()},{path:"/u/:userUid/p/:postUid",props:!0,component:function(){return Promise.all([t.e("Post~Profile"),t.e("Post")]).then(t.bind(null,"37d3"))}}];g.forEach(l.addRoute),l.beforeEach((function(e,s,t){var o,p=e.matched;if(console.log({matched:p}),p.length<1)l.replace("/404");else{var r=p.some((function(e){return e.meta.toProfileIfLoggedIn})),a=null===c["a"]||void 0===c["a"]||null===(o=c["a"].currentUser)||void 0===o?void 0:o.uid;r&&a?l.replace("/u/".concat(a)):t()}}));s["a"]=l},c91c:function(e,s,t){},cd49:function(e,s,t){"use strict";t.r(s);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("830f"),p=t("5c40");function c(e,s){var t=Object(p["A"])("router-view"),o=Object(p["A"])("Footer");return Object(p["u"])(),Object(p["g"])(p["c"],null,{default:Object(p["G"])((function(){return[Object(p["l"])(t),Object(p["l"])(o)]})),_:1})}t("fb6a");var r=t("cf05"),a=t.n(r),i=Object(p["I"])("data-v-a963a704");Object(p["x"])("data-v-a963a704");var h={class:"container-fluid bg-secondary text-white text-center p-5"},n=Object(p["l"])("div",{class:"row justify-content-center"},[Object(p["l"])("div",{class:"col-6 col-sm-2"},[Object(p["l"])("a",{href:"https://instab.io"},[Object(p["l"])("img",{src:a.a,class:"img-fluid"})])]),Object(p["l"])("div",{class:"col-6 col-sm-4 text-right"},[Object(p["l"])("h4",null,"🚧 WIP..."),Object(p["l"])("hr"),Object(p["l"])("p",null,[Object(p["l"])("a",{target:"_blank",href:"https://blog.instab.io",class:"text-white"},"Blog")]),Object(p["l"])("p",null,[Object(p["l"])("a",{target:"_blank",href:"https://github.com/yeikiu/instab.io/blob/master/README.md",class:"text-white"},"About")]),Object(p["l"])("p",null,[Object(p["l"])("a",{target:"_blank",href:"https://github.com/yeikiu/instab.io/issues",class:"text-white"},"Report an Issue")])])],-1),l=Object(p["k"])("Created with ❤️ by "),m=Object(p["l"])("a",{href:"https://github.com/yeikiu/",target:"_blank",class:"text-white"},"JQ",-1);Object(p["v"])();var g=i((function(e,s){return Object(p["u"])(),Object(p["g"])("div",h,[n,Object(p["l"])("p",null,"InstaB.io v"+Object(p["D"])(e.version)+" (beta)",1),Object(p["l"])("p",null,[l,m,Object(p["k"])("© "+Object(p["D"])((new Date).toDateString().slice(-4)),1)])])})),u=t("9224"),x={data:function(){return{version:u["a"]}}};t("faa7");x.render=g,x.__scopeId="data-v-a963a704";var b=x,f={components:{Footer:b}};t("9cdc");f.render=c;var d,j=f,y=t("afbc"),w=t("526b");w["a"].onAuthStateChanged((function(e){console.log(new Date,{authData:e}),d?(null===e||void 0===e?void 0:e.uid)?y["a"].push("/u/".concat(e.uid)):y["a"].push("/login"):(d=Object(o["a"])(j),d.use(y["a"]).mount("#app"))}))},cf05:function(e,s,t){e.exports=t.p+"img/logo.f138b63b.png"},faa7:function(e,s,t){"use strict";t("c91c")}});
//# sourceMappingURL=app.9bbf3d63.js.map