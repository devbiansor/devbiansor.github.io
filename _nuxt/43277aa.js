(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1340:function(e,n,t){var map={"./2020-12-08_1-12-38.png":975,"./2020-12-08_1-12-56.png":976,"./2020-12-08_1-13-15.png":977,"./2020-12-08_1-39-36.png":978,"./2020-12-08_1-39-44.png":979,"./2020-12-08_1-39-52.png":980,"./2020-12-08_1-40-09.png":981,"./2020-12-08_1-40-17.png":982,"./2020-12-08_1-41-46.png":983,"./2020-12-08_1-41-54.png":984,"./2020-12-08_1-42-24.png":985,"./2020-12-08_1-42-37.png":986,"./2020-12-08_1-42-47.png":987,"./2020-12-08_1-48-41.png":988,"./2020-12-08_1-50-40.png":989,"./2020-12-08_1-50-47.png":990,"./2020-12-08_1-50-53.png":991,"./2020-12-08_1-51-02.png":992,"./2020-12-08_1-51-12.png":993,"./2020-12-08_1-51-35.png":994,"./2020-12-08_1-51-46.png":995,"./2020-12-08_1-55-39.png":996,"./2020-12-08_1-55-55.png":997,"./2020-12-08_1-56-04.png":998,"./2020-12-08_1-56-17.png":999,"./2020-12-08_1-56-24.png":1e3,"./2020-12-08_1-56-50.png":1001,"./2020-12-08_1-56-56.png":1002,"./2020-12-08_1-57-07.png":1003,"./2020-12-08_1-57-26.png":1004,"./2020-12-08_1-57-31.png":1005,"./2020-12-08_2-00-50.png":1006,"./2020-12-08_2-00-56.png":1007,"./2020-12-08_2-01-04.png":1008,"./2020-12-08_2-04-21.png":1009,"./2020-12-08_2-04-51.png":1010,"./2020-12-08_2-05-46.png":1011,"./2020-12-08_2-06-10.png":1012,"./2020-12-08_2-06-16.png":1013,"./2020-12-08_2-06-29.png":1014,"./2020-12-08_2-06-41.png":1015,"./2020-12-08_2-06-52.png":1016,"./2020-12-08_2-07-01.png":1017,"./2020-12-08_2-07-09.png":1018,"./2020-12-08_2-07-18.png":1019,"./2020-12-08_2-07-23.png":1020,"./2020-12-08_2-07-32.png":1021,"./2020-12-08_2-07-42.png":1022,"./2020-12-08_2-07-50.png":1023,"./2020-12-08_2-08-05.png":1024,"./2020-12-08_2-08-11.png":1025,"./2020-12-08_2-08-16.png":1026,"./2020-12-08_2-08-22.png":1027};function l(e){var n=_(e);return t(n)}function _(e){if(!t.o(map,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return map[e]}l.keys=function(){return Object.keys(map)},l.resolve=_,e.exports=l,l.id=1340},1373:function(e,n,t){"use strict";t.r(n);var l=t(489),_=t(486),r=t(1356),v=t(483),o=t(477),c=t(476),d=t(172),m=t(482),f=(t(69),t(330),t(4),t(26),t(45),t(55),t(9),t(46),t(1340)),y=/[^0-9]/g;var h=function(e,n){return e.forEach((function(e){n.push({src:"pms/display".concat(e.substr(1))})})),n}(Array.from(f.keys()).sort((function(a,b){return a.replace(y,"")-b.replace(y,"")})),[]),w={layout:"projectdetails",data:function(){return{images:h}}},S=t(54),component=Object(S.a)(w,(function(){var e=this,n=e._self._c;return n(o.a,[n(m.a,[n(v.a,{staticClass:"pt-0 mt-0",attrs:{sm:"10","offset-sm":"1"}},[n(m.a,[n(v.a,{staticClass:"mt-4 subtitle-1",attrs:{sm:"6"}},[n("div",{staticClass:"subtitle-2 mb-2"},[e._v("Mar 2019 - Jun 2019")]),e._v(" "),n("div",{staticClass:"body-1"},[n("div",[e._v("\n              Replacing the old manual excel sheet process of evaluating\n              employees PMS. This is my last project from my previous company\n              before that I decided to re-create on my own process to be use\n              in general.\n            ")]),e._v(" "),n("br"),e._v(" "),n("div",{staticClass:"title"},[e._v("Technical Details")]),e._v(" "),n("br"),e._v(" "),n("div",[n("ul",[n("li",[e._v("\n                  The database of user is centralized and separated from main\n                  application. Connected in 2 databases.\n                ")]),e._v(" "),n("li",[e._v("Role-based permission using "),n("i",[e._v("Zizaco/Entrust")])]),e._v(" "),n("li",[e._v("\n                  Hierarchy user structure using "),n("i",[e._v("laravel nestedset")])]),e._v(" "),n("li",[e._v("Internalization (i18n)")]),e._v(" "),n("li",[e._v("Single Page Application (SPA)")]),e._v(" "),n("li",[e._v("Restful API")]),e._v(" "),n("li",[e._v("State Management using Vuex")]),e._v(" "),n("li",[e._v("\n                  Socket.io (Notification for approvals/acknowledgement)\n                ")]),e._v(" "),n("li",[e._v("Properly indexed database")]),e._v(" "),n("li",[e._v("Oauth2 authentication using Laravel Passport")]),e._v(" "),n("li",[e._v("Deployed on apache 2 physical server")]),e._v(" "),n("li",[e._v("Later deployed on EC2 AWS centos 7 OS")])])]),e._v(" "),n("br"),e._v(" "),n("div",{staticClass:"title"},[e._v("Features")]),e._v(" "),n("br"),e._v(" "),n("div",[n("ul",[n("li",[e._v("\n                  User dashboard - Total count of on-going evaluation,\n                  re-evaluations, completed evaluations, below performance,\n                  above performance, on-target. Graph for total evaluation\n                  sent, completed, re-evaluate.\n                ")]),e._v(" "),n("li",[e._v("\n                  My PMS - View all your manager evaluations and your self\n                  assessments.\n                ")]),e._v(" "),n("li",[e._v("\n                  Approvals and Acknowledgements - Request for approval,\n                  acknowledgement or reject.\n                ")]),e._v(" "),n("li",[e._v("\n                  Approval is based on hierarchy that can be set in admin\n                  side. Approver can have 2nd level, example; evaluation must\n                  approved by I.T manager first and IT Director or by just I.T\n                  manager before complete.\n                ")]),e._v(" "),n("li",[e._v("Approval History & Logs")]),e._v(" "),n("li",[e._v("\n                  Personal Performance Plan Template - Every manager users can\n                  create their own performance plan template per category.\n                ")]),e._v(" "),n("li",[e._v("\n                  My Account - Profile settings, add signature, change\n                  password.\n                ")]),e._v(" "),n("li",[e._v("\n                  Evaluation - Evaluation process has 6 steps,\n                  "),n("ul",[n("li",[e._v("Review period")]),e._v(" "),n("li",[e._v("Employee details")]),e._v(" "),n("li",[e._v("Performance plan")]),e._v(" "),n("li",[e._v("Values")]),e._v(" "),n("li",[e._v("Behavioral indicator")]),e._v(" "),n("li",[e._v("Summary review")])])]),e._v(" "),n("li",[e._v("Self-assessment - Same as with evaluation process")]),e._v(" "),n("li",[e._v("\n                  Evaluation Progress - list of all descendants under the\n                  manager and to check if its completed, on-going or not\n                  started\n                ")]),e._v(" "),n("li",[e._v("Goals")]),e._v(" "),n("li",[e._v("Add comment on goals")]),e._v(" "),n("li",[e._v("Feedback")]),e._v(" "),n("li",[e._v("Employee Performance Dashboard")]),e._v(" "),n("li",[e._v("\n                  Organizational Chart - UI structure of user's hierarchy\n                ")]),e._v(" "),n("li",[e._v("\n                  User management - (Employees) Add, edit and set to active or\n                  inactive\n                ")]),e._v(" "),n("li",[e._v("Job titles")]),e._v(" "),n("li",[e._v("Department")]),e._v(" "),n("li",[e._v("Division")]),e._v(" "),n("li",[e._v("Peer Group")]),e._v(" "),n("li",[e._v("Organization - Settings for user hierarchy")]),e._v(" "),n("li",[e._v("Evaluation Category - Settings for categories")]),e._v(" "),n("li",[e._v("\n                  Settings - Uploading of employees in bulk using CSV file in\n                  a specific format\n                ")]),e._v(" "),n("li",[e._v("Audit trail")])])])])]),e._v(" "),n(v.a,[n(l.a,{attrs:{flat:""}},[n(_.c,[e._v(" Front End ")]),e._v(" "),n(_.b,[n("ul",[n("li",[e._v("Vuetify")]),e._v(" "),n("li",[e._v("VueJS 2")]),e._v(" "),n("li",[e._v("Single Page Application")])])])],1),e._v(" "),n(l.a,{attrs:{flat:""}},[n(_.c,[e._v(" Backend ")]),e._v(" "),n(_.b,[n("ul",[n("li",[e._v("Laravel 5.5")]),e._v(" "),n("li",[e._v("PHP 7")]),e._v(" "),n("li",[e._v("MySQL")])])])],1),e._v(" "),n(l.a,{attrs:{flat:""}},[n(_.c,[e._v(" Built with ")]),e._v(" "),n(_.b,[n(r.a,{attrs:{label:"",small:""}},[e._v("Laravel 5.8")]),e._v(" "),n(r.a,{attrs:{label:"",small:""}},[e._v("VueJS")]),e._v(" "),n(r.a,{attrs:{label:"",small:""}},[e._v("Vuetify")]),e._v(" "),n(r.a,{attrs:{label:"",small:""}},[e._v("MySQL")]),e._v(" "),n(r.a,{attrs:{label:"",small:""}},[e._v("Apache 2")])],1)],1)],1)],1),e._v(" "),n(m.a,[n(v.a,[e._l(e.images,(function(l,i){return n("div",{key:i},[n(d.a,{attrs:{src:t(487)("./".concat(l.src))}}),e._v(" "),n(c.a)],1)}))],2)],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);