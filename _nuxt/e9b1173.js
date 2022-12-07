(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1076:function(e,t,o){var map={"./Screenshot_20201208-062030_VesselProv2.jpg":931,"./Screenshot_20201208-062040_VesselProv2.jpg":932,"./Screenshot_20201208-062043_VesselProv2.jpg":933,"./Screenshot_20201208-062050_VesselProv2.jpg":934,"./Screenshot_20201208-062105_VesselProv2.jpg":935,"./Screenshot_20201208-062139_VesselProv2.jpg":936,"./Screenshot_20201208-062145_VesselProv2.jpg":937,"./Screenshot_20201208-062154_VesselProv2.jpg":938,"./Screenshot_20201208-062201_VesselProv2.jpg":939,"./Screenshot_20201208-062216_VesselProv2.jpg":940,"./Screenshot_20201208-062219_VesselProv2.jpg":941,"./Screenshot_20201208-062226_VesselProv2.jpg":942,"./Screenshot_20201208-062244_VesselProv2.jpg":943,"./Screenshot_20201208-062302_VesselProv2.jpg":944};function r(e){var t=n(e);return o(t)}function n(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=n,e.exports=r,r.id=1076},1114:function(e,t,o){"use strict";o.r(t);o(54),o(27),o(60),o(36),o(16),o(39),o(6);var i=o(1076),r=/[^0-9]/g;var n=function(e,t){return e.forEach((function(e){t.push({src:"vesselprov2/display".concat(e.substr(1))})})),t}(Array.from(i.keys()).sort((function(a,b){return a.replace(r,"")-b.replace(r,"")})),[]),v={layout:"projectdetails",data:function(){return{images:n}},methods:{goToLink:function(){this.$router.push({name:"projects-id",params:{id:"fleetprov2"}})},openLink:function(link){window.open(link,"_blank")}}},l=o(50),c=o(61),_=o.n(c),d=o(382),h=o(379),m=o(1081),f=o(375),S=o(369),w=o(370),k=o(141),y=o(376),component=Object(l.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{staticClass:"pt-0 mt-0",attrs:{sm:"10","offset-sm":"1"}},[r("v-row",[r("v-col",{staticClass:"pt-2 subtitle-1",attrs:{sm:"6"}},[r("div",{staticClass:"subtitle-2 mb-2"},[e._v("Dec 2019 - Feb 2019")]),e._v(" "),r("div",{staticClass:"body-1"},[r("div",[e._v("\n              Same but a much minimal process compared to\n              "),r("code",{staticStyle:{cursor:"pointer"},on:{click:function(t){return e.goToLink()}}},[e._v("Fleetpro V2")]),e._v(". Tracks and monitor the asset locations of customer GPS\n              devices specifically for vessels. A new version of the previous\n              one, same process but different design.\n            ")]),e._v(" "),r("br"),e._v(" "),r("div",{staticClass:"title"},[e._v("Technical Details")]),e._v(" "),r("br"),e._v(" "),r("div",[r("ul",[r("li",[e._v("\n                  Push notification using expo push token (FCM) and\n                  "),r("code",{staticStyle:{cursor:"pointer"},on:{click:function(t){return e.openLink("https://www.npmjs.com/package/expo-server-sdk")}}},[e._v("\n                    expo-server-sdk")]),e._v(". But later, moved to\n                  "),r("code",{staticStyle:{cursor:"pointer"},on:{click:function(t){return e.openLink("https://www.npmjs.com/package/firebase-admin")}}},[e._v("firebase-admin")]),e._v("\n                  because starting of expo v37, they required to provide own\n                  google.service.json file from firebase-console. Notify the\n                  user when there is alert problem in assets such as low\n                  battery, over speed, overidle, overpark.\n                ")]),e._v(" "),r("li",[e._v("JWT authentication")]),e._v(" "),r("li",[e._v("AsyncStorage for saving user info and session")]),e._v(" "),r("li",[e._v("Redux and Redux Saga for state management")]),e._v(" "),r("li",[e._v("\n                  Backend is deployed on IIS7 using "),r("code",[e._v("iisnode")])]),e._v(" "),r("li",[e._v("Uploaded both on Apple Store and Google Play.")])])]),e._v(" "),r("br"),e._v(" "),r("div",{staticClass:"title"},[e._v("Features")]),e._v(" "),r("br"),e._v(" "),r("div",[r("ul",[r("li",[e._v("Selection of server during login")]),e._v(" "),r("li",[e._v("Internalization (i18n) - Indonesia and English")]),e._v(" "),r("li",[e._v("Dashboard")]),e._v(" "),r("li",[e._v("Assets lists")]),e._v(" "),r("li",[e._v("View asset on map")]),e._v(" "),r("li",[e._v("Show assets nearby")]),e._v(" "),r("li",[e._v("Show multiple assets on map at the same time")]),e._v(" "),r("li",[e._v("Zones")]),e._v(" "),r("li",[e._v("Trace asset movement (Polling every 30 sec)")]),e._v(" "),r("li",[e._v("\n                  Playback - Select date and show the asset history route.\n                ")]),e._v(" "),r("li",[e._v("Playback History List")]),e._v(" "),r("li",[e._v("Change map type")]),e._v(" "),r("li",[e._v("Interval Settings")])])])])]),e._v(" "),r("v-col",[r("v-card",{attrs:{flat:""}},[r("v-card-title",[e._v(" Front End ")]),e._v(" "),r("v-card-text",[r("ul",[r("li",[e._v("UI Kitten and Nativebase")]),e._v(" "),r("li",[e._v("React Native (Expo)")])])])],1),e._v(" "),r("v-card",{attrs:{flat:""}},[r("v-card-title",[e._v(" Backend ")]),e._v(" "),r("v-card-text",[r("ul",[r("li",[e._v("Node.js")]),e._v(" "),r("li",[e._v("AdonisJS")]),e._v(" "),r("li",[e._v("SQL")]),e._v(" "),r("li",[e._v("IIS7")])])])],1),e._v(" "),r("v-card",{attrs:{flat:""}},[r("v-card-title",[e._v(" Built with ")]),e._v(" "),r("v-card-text",[r("v-chip",{attrs:{label:"",small:""}},[e._v("React Native (Expo)")]),e._v(" "),r("v-chip",{attrs:{label:"",small:""}},[e._v("UI Kitten & Nativebase")]),e._v(" "),r("v-chip",{attrs:{label:"",small:""}},[e._v("Node.js")]),e._v(" "),r("v-chip",{attrs:{label:"",small:""}},[e._v("AdonisJS")]),e._v(" "),r("v-chip",{attrs:{label:"",small:""}},[e._v("SQL")]),e._v(" "),r("v-chip",{attrs:{label:"",small:""}},[e._v("IIS7")])],1)],1)],1)],1),e._v(" "),r("v-row",[r("v-col",[r("v-row",e._l(e.images,(function(e,i){return r("v-col",{key:i,attrs:{sm:"6"}},[r("v-img",{attrs:{src:o(380)("./"+e.src)}})],1)})),1),e._v(" "),r("v-divider")],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;_()(component,{VCard:d.a,VCardText:h.b,VCardTitle:h.c,VChip:m.a,VCol:f.a,VContainer:S.a,VDivider:w.a,VImg:k.a,VRow:y.a})}}]);