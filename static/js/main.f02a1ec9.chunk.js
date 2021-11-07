(this["webpackJsonpdictionary-app"]=this["webpackJsonpdictionary-app"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),i=n.n(r),c=(n(71),n(42)),s=n.n(c),l=n(54),d=n(13),u=n(57),h=n.n(u),b=(n(91),n(139)),p=n(137),f=n(133),g=n(59),v=n(130),j=n(134),m=n(138),w=(n(92),[{value:"English",label:"en"},{value:"French",label:"fr"},{value:"Spanish",label:"es"},{value:"Japanese",label:"ja"},{value:"Hindi",label:"hi"},{value:"Russian",label:"ru"},{value:"German",label:"de"},{value:"Italian",label:"it"},{value:"Korean",label:"ko"},{value:"Arabic",label:"ar"},{value:"Brazilian Portuguese",label:"pt-BR"},{value:"Turkish",label:"tr"}]),x=n(7),k=function(e){var t=e.category,n=e.setCategory,a=e.word,o=e.setWord,r=e.LightMode,i=Object(g.a)({palette:{primary:{main:r?"#000":"#fff"},type:r?"light":"dark"}});return Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)("span",{className:"title",children:a||"Dictionary"}),Object(x.jsx)("div",{className:"inputs",children:Object(x.jsxs)(v.a,{theme:i,children:[Object(x.jsx)(j.a,{className:"search",label:"Search a word",value:a,onChange:function(e){return o(e.target.value)}}),Object(x.jsx)(j.a,{select:!0,className:"select",label:"Language",value:t,onChange:function(e){return t=e.target.value,n(t),void o("");var t},children:w.map((function(e){return Object(x.jsx)(m.a,{value:e.label,children:e.value},e.label)}))})]})})]})},y=(n(99),function(e){var t=e.word,n=e.category,a=e.meanings,o=e.LightMode;return Object(x.jsxs)("div",{className:"definitions",children:[a[0]&&t&&"en"===n&&Object(x.jsx)("audio",{src:a[0].phonetics[0]&&a[0].phonetics[0].audio,style:{backgroundColor:"#fff",borderRadius:10},controls:!0,children:"Your Browser doesn't support audio element."}),""===t?Object(x.jsx)("span",{className:"subTitle",children:"Start by typing a word in search"}):a.map((function(e){return e.meanings.map((function(e){return e.definitions.map((function(e){return Object(x.jsxs)("div",{className:"explanation",style:{backgroundColor:o?"#333333":"white",color:o?"white":"black"},children:[Object(x.jsx)("b",{children:e.definition}),Object(x.jsx)("hr",{style:{backgroundColor:"black",width:"100%"}}),e.example&&Object(x.jsxs)("span",{children:[Object(x.jsx)("b",{children:"Example : "}),e.example]}),e.synonyms&&Object(x.jsxs)("span",{children:[Object(x.jsx)("b",{children:"Synonyms :"}),e.synonyms.map((function(e){return"".concat(e,", ")}))]})]})}))}))}))]})});var O=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)([]),i=Object(d.a)(r,2),c=i[0],u=i[1],g=Object(a.useState)("en"),v=Object(d.a)(g,2),j=v[0],m=v[1],w=Object(a.useState)(!1),O=Object(d.a)(w,2),S=O[0],M=O[1],C=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://api.dictionaryapi.dev/api/v2/entries/".concat(j,"/").concat(n));case 3:t=e.sent,u(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Sorry, The link couldn't be fetched successfully.");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();console.log(c);var z=Object(b.a)(p.a)((function(e){var t=e.theme;return{width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>\')')},"& + .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===t.palette.mode?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:"dark"===t.palette.mode?"#003892":"#001e3c",width:32,height:32,"&:before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>\')')}},"& .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===t.palette.mode?"#8796A5":"#aab4be",borderRadius:10}}}));return Object(a.useEffect)((function(){C()}),[n,j]),Object(x.jsx)("div",{className:"App",style:{height:"100vh",backgroundColor:S?"#fff":"#282c34",color:S?"black":"white",transition:"all 0.5s linear"},children:Object(x.jsxs)(f.a,{maxWidth:"md",style:{display:"flex",flexDirection:"column",height:"100vh",justifyContent:"space-evenly"},children:[Object(x.jsxs)("div",{style:{position:"absolute",top:0,right:15,paddingTop:10},children:[Object(x.jsxs)("span",{children:[" ",S?"Dark":"Light"," Mode "]}),Object(x.jsx)(z,{checked:S,onChange:function(){return M(!S)}})]}),Object(x.jsx)(k,{category:j,setCategory:m,word:n,setWord:o,LightMode:S}),c&&Object(x.jsx)(y,{word:n,meanings:c,category:j,LightMode:S})]})})},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(O,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/dictionary-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/dictionary-app","/service-worker.js");S?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):M(t,e)}))}}()},71:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},99:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.f02a1ec9.chunk.js.map