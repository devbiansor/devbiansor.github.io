(window.webpackJsonp=window.webpackJsonp||[]).push([[9,11],{1224:function(t,e,r){"use strict";r.r(e);var n=r(489),o=r(486),l=r(1356),c=r(483),h=r(1299),f=r(223),d=r(480),v=r(482),w=r(1301),y=r(1314),m=r(1300),O=r(1389),_=(r(10),r(70),r(38),r(331),{props:{pl:{type:Object,default:null}}}),j=r(54),component=Object(j.a)(_,(function(){var t=this,e=t._self._c;return e(v.a,t._l(t.pl,(function(v,i){return e(c.a,{key:i,staticClass:"pa-2",staticStyle:{overflow:"hidden","text-overflow":"ellipsis"},attrs:{cols:"12",md:"4",lg:"3"}},[e(h.a,{scopedSlots:t._u([{key:"default",fn:function(c){var _=c.hover;return[e(d.a,{attrs:{transition:"scroll-y-transition"}},[e(n.a,{staticStyle:{display:"flex","flex-direction":"column"},attrs:{height:"320",elevation:_?1:2}},[e(o.b,{staticClass:"grow pa-5 pb-1"},[e(o.c,{staticClass:"pa-0 pb-5"},[e("div",{staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start","justify-content":"flex-start"}},[v.logosrc?e("img",{attrs:{src:r(487)("./".concat(v.logosrc)),height:"30"}}):t._e(),t._v(" "),e(O.a,{attrs:{top:"",color:"default"},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[e(l.a,t._g(t._b({staticClass:"ml-2",staticStyle:{cursor:"help",color:"#707070"},attrs:{label:"",color:v.role_color}},"v-chip",o,!1),n),[t._v("\n                      "+t._s(v.role)+"\n                    ")])]}}],null,!0)},[t._v(" "),e("span",[t._v(t._s(v.role_description))])])],1),t._v(" "),e(m.a),t._v(" "),e("router-link",{attrs:{to:"/projects/".concat(v.link)}},[e(h.a,{staticStyle:{cursor:"pointer"},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.hover;return[e(f.a,{attrs:{color:n?"black":""}},[t._v("mdi-folder-open")])]}}],null,!0)})],1)],1),t._v(" "),e("div",{staticClass:"title font-weight-bold pb-1",staticStyle:{flex:"1","justify-content":"center","align-items":"center"}},[e("div",{staticClass:"d-inline-block text-truncate",staticStyle:{width:"100%"}},[e(O.a,{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on;return[e(f.a,t._g({staticClass:"pa-0 ma-0",attrs:{left:""}},n),[t._v(t._s("mdi-".concat(v.apptype)))])]}}],null,!0)},[t._v(" "),e("span",[t._v(t._s("web"===v.apptype?"Web App":"Mobile App"))])]),t._v(" "),e("router-link",{staticClass:"text-decoration-none grey--text text--darken-2",attrs:{to:"/projects/".concat(v.link)}},[t._v("\n                  "+t._s(v.title)+"\n                ")])],1)]),t._v(" "),e("div",[t._v(t._s(v.subtitle))]),t._v(" "),e("br"),t._v(" "),e("div",{staticStyle:{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":"4","/* start showing ellipsis when 3rd line is reached */\n                white-space":"pre-wrap"}},[t._v("\n              "+t._s(v.description)+"\n            ")]),t._v(" "),e("div",{staticClass:"caption"},[t._v("\n              "+t._s(v.subdescription)+"\n            ")])],1),t._v(" "),e(o.a,{staticClass:"pa-3 pl-4",staticStyle:{position:"relative"}},[e("no-ssr",[e(w.a,{staticClass:"tae",attrs:{multiple:"","show-arrows":!0}},t._l(v.technologies,(function(r,n){return e(y.a,{key:n},[e(l.a,{staticClass:"mr-1",attrs:{small:"",label:""}},[t._v("\n                    "+t._s(r.name))])],1)})),1)],1)],1)],1)],1)]}}],null,!0)})],1)})),1)}),[],!1,null,null,null);e.default=component.exports},1299:function(t,e,r){"use strict";var n=r(684),o=r(60),l=r(16),c=r(15);e.a=Object(l.a)(n.a,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},1300:function(t,e,r){"use strict";r(179);var n=r(0);e.a=Object(n.h)("spacer","div","v-spacer")},1301:function(t,e,r){"use strict";var n=r(2),o=(r(35),r(10),r(70),r(81),r(12),r(69),r(47),r(38),r(13),r(14),r(11),r(4),r(26),r(48),r(45),r(9),r(46),r(56),r(685),r(686),r(80)),l=r(235),c=r(164),h=r(180),f=r(238),d=r(239),v=r(16),w=r(0);function y(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function j(t){var e=Math.abs(t);return Math.sign(t)*(e/((1/.501-2)*(1-e)+1))}function x(t,e,r,n){var o=t.clientWidth,l=r?e.content-t.offsetLeft-o:t.offsetLeft;r&&(n=-n);var c=e.wrapper+n,h=o+l,f=.4*o;return l<=n?n=Math.max(l-f,0):c<=h&&(n=Math.min(n-(c-h-f),e.content-e.wrapper)),r?-n:n}var S=Object(v.a)(c.a,h.a).extend({name:"base-slide-group",directives:{Resize:f.a,Touch:d.a},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"==typeof t||["always","never","desktop","mobile"].includes(t)}}},data:function(){return{isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{canTouch:function(){return"undefined"!=typeof window},__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return _(_({},c.a.options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;case"never":return!1;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,content=t.content,e=t.wrapper;return content>Math.abs(this.scrollOffset)+e},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$vuetify.rtl&&(t=-t);var e=t<=0?j(-t):t>this.widths.content-this.widths.wrapper?-(this.widths.content-this.widths.wrapper)+j(this.widths.content-this.widths.wrapper-t):-t;this.$vuetify.rtl&&(e=-e),this.$refs.content.style.transform="translateX(".concat(e,"px)")}},mounted:function(){var t=this;if("undefined"!=typeof ResizeObserver){var e=new ResizeObserver((function(){t.onResize()}));e.observe(this.$el),e.observe(this.$refs.content),this.$on("hook:destroyed",(function(){e.disconnect()}))}else{var r=0;this.$on("hook:beforeUpdate",(function(){var e;r=((null===(e=t.$refs.content)||void 0===e?void 0:e.children)||[]).length})),this.$on("hook:updated",(function(){var e;r!==((null===(e=t.$refs.content)||void 0===e?void 0:e.children)||[]).length&&t.setWidths()}))}},methods:{onScroll:function(){this.$refs.wrapper.scrollLeft=0},onFocusin:function(t){if(this.isOverflowing){var e,r=y(Object(w.f)(t));try{for(r.s();!(e=r.n()).done;){var n,o=e.value,l=y(this.items);try{for(l.s();!(n=l.n()).done;){var c=n.value;if(c.$el===o)return void(this.scrollOffset=x(c.$el,this.widths,this.$vuetify.rtl,this.scrollOffset))}}catch(t){l.e(t)}finally{l.f()}}}catch(t){r.e(t)}finally{r.f()}}},genNext:function(){var t=this,slot=this.$scopedSlots.next?this.$scopedSlots.next({}):Object(w.m)(this,"next")||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[slot])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content",on:{focusin:this.onFocusin}},Object(w.m)(this))},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var r="".concat(t[0].toUpperCase()).concat(t.slice(1)),n=this["has".concat(r)];return this.showArrows||n?this.$createElement(o.a,{props:{disabled:!n}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,slot=this.$scopedSlots.prev?this.$scopedSlots.prev({}):Object(w.m)(this,"prev")||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[slot])},genTransition:function(t){return this.$createElement(l.c,[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper",on:{scroll:this.onScroll}},[this.genContent()])},calculateNewOffset:function(t,e,r,n){var o=r?-1:1,l=o*n+("prev"===t?-1:1)*e.wrapper;return o*Math.max(Math.min(l,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var content=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,content.style.setProperty("transition","none"),content.style.setProperty("willChange","transform")},onTouchMove:function(t){if(this.canTouch){if(!this.isSwiping){var e=t.touchmoveX-t.touchstartX,r=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(r),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd:function(){if(this.canTouch){var t=this.$refs,content=t.content,e=t.wrapper,r=content.clientWidth-e.clientWidth;content.style.setProperty("transition",null),content.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-r&&(this.scrollOffset=-r):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=r&&(this.scrollOffset=r),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")}},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){if(!this.selectedItem&&this.items.length){var t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=function(t,e,r){var n=t.offsetLeft,o=t.clientWidth;if(r){var l=e.content-n-o/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,l))}var c=n+o/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,c))}(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=x(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){if(!t._isDestroyed){var e=t.$refs,content=e.content,r=e.wrapper;t.widths={content:content?content.clientWidth:0,wrapper:r?r.clientWidth:0},t.isOverflowing=t.widths.wrapper+1<t.widths.content,t.scrollIntoView()}}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});e.a=S.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}})},1307:function(t,e,r){"use strict";r.r(e);var n=r(329),o=r(483),l=r(477),c=r(223),h=r(480),f=r(482),d=(r(10),r(12),r(13),r(14),r(11),r(4),r(9),r(2)),v=(r(56),r(32),r(52));function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){Object(d.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var m={props:{pageHeight:{type:Number,default:0}},computed:y(y(y({},Object(v.b)({projectlists:"utils/project_list"})),Object(v.c)({pl:function(t){return t.utils.pl},projectlistlength:function(t){return t.utils.project_list.length}})),{},{showmorepage:{set:function(t){this.$store.commit("utils/SET_MOREPAGE",t)},get:function(){return this.$store.state.utils.showmorepage}}}),data:function(){return{}},mounted:function(){var t=this.projectlists;if(t){var e=this.paginateProjectList(t,8,this.showmorepage);this.$store.commit("utils/SET_PL_VALUE",e),this.display_length=Math.ceil(t.length/8)}},methods:{paginateProjectList:function(t,e,r){return t.slice(0,r*e)},showLessProject:function(){this.showmorepage=1;var t=this.paginateProjectList(this.projectlists,8,this.showmorepage);this.$store.commit("utils/SET_PL_VALUE",t)},showMoreProjects:function(){if(this.page_size=Math.ceil(this.projectlistlength/8),this.page_size!==this.showmorepage){this.showmorepage=this.showmorepage+1;var t=this.paginateProjectList(this.projectlists,8,this.showmorepage);this.$store.commit("utils/SET_PL_VALUE",t)}}}},O=r(54),component=Object(O.a)(m,(function(){var t=this,e=t._self._c;return e(l.a,{staticStyle:{"":"100vh"},attrs:{id:"projects",fluid:""}},[e(o.a,{attrs:{"offset-sm":"1",sm:"10"}},[e(f.a,{staticStyle:{"padding-top":"40px"}},[e(o.a,{staticClass:"text-center",attrs:{"justify-self":"center","align-self":"center"}},[e(h.a,{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{origin:"top",delay:"100"},expression:"{ origin: 'top', delay: '100' }"}]},[e("div",{staticClass:"text-center display-2 mb-8 font-weight-bold"},[t._v("\n            My Projects ("+t._s(t.projectlistlength)+")\n          ")])])],1)],1),t._v(" "),e("br"),t._v(" "),e("ProjectCard",{attrs:{pl:t.pl}}),t._v(" "),e("br"),t._v(" "),e(f.a,[e(o.a,{staticClass:"text-center"},[e(h.a,{attrs:{transition:"scroll-y-transition"}},[t.showmorepage!==Math.ceil(t.projectlistlength/8)?e(n.a,{staticClass:"white--text text-none subtitle-2",attrs:{depressed:"",color:"#242526"},on:{click:function(e){return t.showMoreProjects()}}},[t._v("Show more\n            "),e(c.a,[t._v("mdi-arrow-down-thin")])],1):t._e()],1),t._v(" "),e(h.a,{attrs:{transition:"scroll-y-transition"}},[t.showmorepage==Math.ceil(t.projectlistlength/8)?e(n.a,{staticClass:"white--text text-none subtitle-2",attrs:{depressed:"",color:"#242526"},on:{click:function(e){return t.showLessProject()}}},[t._v("Show Less "),e(c.a,[t._v("mdi-arrow-up-thin")])],1):t._e()],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProjectCard:r(1224).default})},1314:function(t,e,r){"use strict";r(10),r(12),r(13),r(14),r(11),r(4),r(9);var n=r(2),o=(r(688),r(139)),l=r(16),c=r(15);function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d=r(1).a.extend({props:{activeClass:String,value:{required:!1},disabled:Boolean},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(n.a)(Object(n.a)({},this.activeClass,this.isActive),"v-item--disabled",this.disabled)}),this.disabled&&(element.data.attrs=f(f({},element.data.attrs),{},{tabindex:-1})),element):(Object(c.c)("v-item should only contain a single element",this),element)):(Object(c.c)("v-item is missing a default scopedSlot",this),null);var element}});Object(l.a)(d,Object(o.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),e.a=Object(l.a)(d,Object(o.a)("slideGroup")).extend({name:"v-slide-item"})},685:function(t,e,r){"use strict";r(3)({target:"Math",stat:!0},{sign:r(332)})},686:function(t,e,r){var content=r(687);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("d67becdc",content,!0,{sourceMap:!1})},687:function(t,e,r){var n=r(21)((function(i){return i[1]}));n.push([t.i,".v-slide-group{display:flex}.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__next,.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__prev{display:none}.v-slide-group.v-item-group>.v-slide-group__next,.v-slide-group.v-item-group>.v-slide-group__prev{cursor:pointer}.v-slide-item{display:inline-flex;flex:0 1 auto}.v-slide-group__next,.v-slide-group__prev{align-items:center;display:flex;flex:0 1 52px;justify-content:center;min-width:52px}.v-slide-group__content{display:flex;flex:1 0 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-slide-group__wrapper{contain:content;display:flex;flex:1 1 auto;overflow:hidden}.v-slide-group__next--disabled,.v-slide-group__prev--disabled{pointer-events:none}",""]),n.locals={},t.exports=n},688:function(t,e,r){var content=r(689);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("158a1398",content,!0,{sourceMap:!1})},689:function(t,e,r){var n=r(21)((function(i){return i[1]}));n.push([t.i,".v-item--disabled,.v-item--disabled *{pointer-events:none}",""]),n.locals={},t.exports=n}}]);