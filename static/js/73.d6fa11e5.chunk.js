(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[73],{1939:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(469),r=s(470),i=s(485),n=s(465),o=s(900),l=s(903),b=s(904),j=s(897),d=s(16),h=s(85),u=s.n(h),O=s(974),x=s(622),m=s(6),p=function(e){var t=e.kFormatter,s=e.success,c=Object(a.useState)(null),r=Object(d.a)(c,2),i=r[0],n=r[1],o={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:[s],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}};return Object(a.useEffect)((function(){u.a.get("/card/card-statistics/revenue").then((function(e){return n(e.data)}))}),[]),null!==i?Object(m.jsx)(x.a,{icon:Object(m.jsx)(O.a,{size:21}),color:"success",stats:t(i.analyticsData.revenue),statTitle:"Revenue Generated",options:o,series:i.series,type:"area"}):null},g=s(968),f=function(e){var t=e.danger,s=Object(a.useState)(null),c=Object(d.a)(s,2),r=c[0],i=c[1],n={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:[t],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}};return Object(a.useEffect)((function(){u.a.get("/card/card-statistics/sales").then((function(e){return i(e.data)}))}),[]),null!==r?Object(m.jsx)(x.a,{icon:Object(m.jsx)(g.a,{size:21}),color:"danger",stats:r.analyticsData.sales,statTitle:"Quarterly Sales",options:n,series:r.series,type:"area"}):null},y=s(896),w=s(1061),v=s(1),N=s(124),T=s(472),k=s(483),z=s.n(k),C=s(468),P=s(475),S=s(479),E=s(760),F=["icon","color","stats","statTitle","series","options","type","height"],B=function(e){var t=e.icon,s=e.color,a=e.stats,c=e.statTitle,r=e.series,i=e.options,n=e.type,o=e.height,l=Object(N.a)(e,F);return Object(m.jsxs)(C.a,Object(v.a)(Object(v.a)({},l),{},{children:[Object(m.jsxs)(P.a,{className:"align-items-start pb-0",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{className:"font-weight-bolder",children:a}),Object(m.jsx)(S.a,{children:c})]}),Object(m.jsx)(T.a,{className:"avatar-stats p-50 m-0",color:"light-".concat(s),icon:t})]}),Object(m.jsx)(z.a,{options:i,series:r,type:n,height:o||100})]}))},M=B;B.defaultProps={options:E.b,color:"primary"};var D=function(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){u.a.get("/card/card-statistics/site-traffic").then((function(e){return c(e.data)}))}),[]),null!==s?Object(m.jsx)(M,{icon:Object(m.jsx)(w.a,{size:21}),color:"primary",stats:"78.9k",statTitle:"Site Traffic",series:s.series,type:"line"}):null},I=s(1102),L=function(e){var t=e.success,s=Object(a.useState)(null),c=Object(d.a)(s,2),r=c[0],i=c[1];Object(a.useEffect)((function(){u.a.get("/card/card-statistics/active-users").then((function(e){return i(e.data)}))}),[]);var n={chart:{id:"activeUsers",toolbar:{show:!1},sparkline:{enabled:!0},dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1}},grid:{show:!1},colors:[t],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:5},fill:{type:"gradient",gradient:{shadeIntensity:1,gradientToColors:["#55DD92"],opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}};return null!==r?Object(m.jsx)(M,{icon:Object(m.jsx)(I.a,{size:21}),color:"success",stats:"659.8k",statTitle:"Active Users",series:r.series,options:n,type:"line"}):null},A=s(971),R=function(e){var t=e.warning,s=Object(a.useState)(null),c=Object(d.a)(s,2),r=c[0],i=c[1];Object(a.useEffect)((function(){u.a.get("/card/card-statistics/newsletter").then((function(e){return i(e.data)}))}),[]);var n={chart:{id:"newsletter",toolbar:{show:!1},sparkline:{enabled:!0},dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1}},grid:{show:!1},colors:[t],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:5},fill:{type:"gradient",gradient:{shadeIntensity:1,gradientToColors:["#ffc085"],opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}};return null!==r?Object(m.jsx)(M,{icon:Object(m.jsx)(A.a,{size:21}),color:"warning",stats:"28.7k",statTitle:"Newsletter",series:r.series,type:"line",options:n}):null},U=s(471),G=["icon","color","stats","statTitle","className"],J=function(e){var t=e.icon,s=e.color,a=e.stats,c=e.statTitle,r=e.className;Object(N.a)(e,G);return Object(m.jsx)(C.a,{className:"text-center",children:Object(m.jsxs)(U.a,{className:r,children:[Object(m.jsx)("div",{className:"avatar p-50 m-0 mb-1 ".concat(s?"bg-light-".concat(s):"bg-light-primary"),children:Object(m.jsx)("div",{className:"avatar-content",children:t})}),Object(m.jsx)("h2",{className:"font-weight-bolder",children:a}),Object(m.jsx)("p",{className:"card-text line-ellipsis",children:c})]})})},W=["icon","color","stats","statTitle","className"],H=function(e){var t=e.icon,s=e.color,a=e.stats,c=e.statTitle,r=e.className;Object(N.a)(e,W);return Object(m.jsx)(C.a,{children:Object(m.jsx)(U.a,{className:r,children:Object(m.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{className:"font-weight-bolder mb-0",children:a}),Object(m.jsx)("p",{className:"card-text",children:c})]}),Object(m.jsx)("div",{className:"avatar avatar-stats p-50 m-0 ".concat(s?"bg-light-".concat(s):"bg-light-primary"),children:Object(m.jsx)("div",{className:"avatar-content",children:t})})]})})})},Q=s(1032),V=s(973),$=s(1084),q=s(947),K=s(991),X=s(1098),Y=s(1022),Z=s(1080),_=s(981),ee=s(982),te=s(132);t.default=function(){var e=Object(a.useContext)(te.a);return Object(m.jsxs)(a.Fragment,{children:[Object(m.jsx)(n.a,{breadCrumbTitle:"Statistics Cards",breadCrumbParent:"Card",breadCrumbActive:"Statistics Cards"}),Object(m.jsxs)(c.a,{children:[Object(m.jsx)(r.a,{lg:"2",xs:"6",children:Object(m.jsx)(l.a,{warning:e.colors.warning.main})}),Object(m.jsx)(r.a,{lg:"2",xs:"6",children:Object(m.jsx)(b.a,{info:e.colors.info.main})}),Object(m.jsx)(r.a,{lg:"8",sm:"12",children:Object(m.jsx)(o.a,{cols:{md:"3",sm:"6"}})})]}),Object(m.jsxs)(c.a,{children:[Object(m.jsx)(r.a,{xl:"2",md:"4",sm:"6",children:Object(m.jsx)(J,{icon:Object(m.jsx)(Q.a,{size:21}),color:"info",stats:"36.9k",statTitle:"Views"})}),Object(m.jsx)(r.a,{xl:"2",md:"4",sm:"6",children:Object(m.jsx)(J,{icon:Object(m.jsx)(V.a,{size:21}),color:"warning",stats:"12k",statTitle:"Comments"})}),Object(m.jsx)(r.a,{xl:"2",md:"4",sm:"6",children:Object(m.jsx)(J,{icon:Object(m.jsx)($.a,{size:21}),color:"danger",stats:"97.8k",statTitle:"Orders"})}),Object(m.jsx)(r.a,{xl:"2",md:"4",sm:"6",children:Object(m.jsx)(J,{icon:Object(m.jsx)(q.a,{size:21}),color:"primary",stats:"26.8",statTitle:"Bookmarks"})}),Object(m.jsx)(r.a,{xl:"2",md:"4",sm:"6",children:Object(m.jsx)(J,{icon:Object(m.jsx)(K.a,{size:21}),color:"success",stats:"689",statTitle:"Reviews"})}),Object(m.jsx)(r.a,{xl:"2",md:"4",sm:"6",children:Object(m.jsx)(J,{icon:Object(m.jsx)(X.a,{size:21}),color:"danger",stats:"2.1k",statTitle:"Returns"})})]}),Object(m.jsxs)(c.a,{children:[Object(m.jsx)(r.a,{lg:"3",sm:"6",children:Object(m.jsx)(H,{icon:Object(m.jsx)(Y.a,{size:21}),color:"primary",stats:"86%",statTitle:"CPU Usage"})}),Object(m.jsx)(r.a,{lg:"3",sm:"6",children:Object(m.jsx)(H,{icon:Object(m.jsx)(Z.a,{size:21}),color:"success",stats:"1.2gb",statTitle:"Memory Usage"})}),Object(m.jsx)(r.a,{lg:"3",sm:"6",children:Object(m.jsx)(H,{icon:Object(m.jsx)(_.a,{size:21}),color:"danger",stats:"0.1%",statTitle:"Downtime Ratio"})}),Object(m.jsx)(r.a,{lg:"3",sm:"6",children:Object(m.jsx)(H,{icon:Object(m.jsx)(ee.a,{size:21}),color:"warning",stats:"13",statTitle:"Issues Found"})})]}),Object(m.jsxs)(c.a,{children:[Object(m.jsx)(r.a,{lg:"3",sm:"6",children:Object(m.jsx)(j.a,{kFormatter:i.g})}),Object(m.jsx)(r.a,{lg:"3",sm:"6",children:Object(m.jsx)(p,{kFormatter:i.g,success:e.colors.success.main})}),Object(m.jsx)(r.a,{lg:"3",sm:"6",children:Object(m.jsx)(f,{danger:e.colors.danger.main})}),Object(m.jsx)(r.a,{lg:"3",sm:"6",children:Object(m.jsx)(y.a,{kFormatter:i.g,warning:e.colors.warning.main})})]}),Object(m.jsxs)(c.a,{children:[Object(m.jsx)(r.a,{lg:"4",sm:"6",children:Object(m.jsx)(D,{})}),Object(m.jsx)(r.a,{lg:"4",sm:"6",children:Object(m.jsx)(L,{success:e.colors.success.main})}),Object(m.jsx)(r.a,{lg:"4",sm:"6",children:Object(m.jsx)(R,{warning:e.colors.warning.main})})]})]})}},465:function(e,t,s){"use strict";var a=s(466),c=s(1041),r=s(972),i=s(973),n=s(971),o=s(998),l=s(476),b=s(477),j=s(478),d=s(1267),h=s(952),u=s(961),O=s(6);t.a=function(e){var t=e.breadCrumbTitle,s=e.breadCrumbParent,x=e.breadCrumbParent2,m=e.breadCrumbParent3,p=e.breadCrumbActive;return Object(O.jsxs)("div",{className:"content-header row",children:[Object(O.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(O.jsx)("div",{className:"row breadcrumbs-top",children:Object(O.jsxs)("div",{className:"col-12",children:[t?Object(O.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(O.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(O.jsxs)(l.a,{children:[Object(O.jsx)(b.a,{tag:"li",children:Object(O.jsx)(a.b,{to:"/",children:"Home"})}),Object(O.jsx)(b.a,{tag:"li",className:"text-primary",children:s}),x?Object(O.jsx)(b.a,{tag:"li",className:"text-primary",children:x}):"",m?Object(O.jsx)(b.a,{tag:"li",className:"text-primary",children:m}):"",Object(O.jsx)(b.a,{tag:"li",active:!0,children:p})]})})]})})}),Object(O.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(O.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)(d.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(O.jsx)(c.a,{size:14})}),Object(O.jsxs)(h.a,{tag:"ul",right:!0,children:[Object(O.jsxs)(u.a,{tag:a.b,to:"/apps/chat",children:[Object(O.jsx)(r.a,{className:"mr-1",size:14}),Object(O.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(O.jsxs)(u.a,{tag:a.b,to:"/apps/chat",children:[Object(O.jsx)(i.a,{className:"mr-1",size:14}),Object(O.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(O.jsxs)(u.a,{tag:a.b,to:"/apps/email",children:[Object(O.jsx)(n.a,{className:"mr-1",size:14}),Object(O.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(O.jsxs)(u.a,{tag:a.b,to:"/apps/calendar",children:[Object(O.jsx)(o.a,{className:"mr-1",size:14}),Object(O.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},467:function(e,t,s){"use strict";var a=s(14),c=s(0),r=s.n(c),i=s(5),n=s.n(i),o=s(474),l={children:n.a.node},b=function(e){return r.a.createElement(o.a,Object(a.a)({group:!0},e))};b.propTypes=l,t.a=b},476:function(e,t,s){"use strict";var a=s(14),c=s(15),r=s(0),i=s.n(r),n=s(5),o=s.n(n),l=s(59),b=s.n(l),j=s(84),d={tag:j.tagPropType,listTag:j.tagPropType,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},h=function(e){var t=e.className,s=e.listClassName,r=e.cssModule,n=e.children,o=e.tag,l=e.listTag,d=e["aria-label"],h=Object(c.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),u=Object(j.mapToCssModules)(b()(t),r),O=Object(j.mapToCssModules)(b()("breadcrumb",s),r);return i.a.createElement(o,Object(a.a)({},h,{className:u,"aria-label":d}),i.a.createElement(l,{className:O},n))};h.propTypes=d,h.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=h},477:function(e,t,s){"use strict";var a=s(14),c=s(15),r=s(0),i=s.n(r),n=s(5),o=s.n(n),l=s(59),b=s.n(l),j=s(84),d={tag:j.tagPropType,active:o.a.bool,className:o.a.string,cssModule:o.a.object},h=function(e){var t=e.className,s=e.cssModule,r=e.active,n=e.tag,o=Object(c.a)(e,["className","cssModule","active","tag"]),l=Object(j.mapToCssModules)(b()(t,!!r&&"active","breadcrumb-item"),s);return i.a.createElement(n,Object(a.a)({},o,{className:l,"aria-current":r?"page":void 0}))};h.propTypes=d,h.defaultProps={tag:"li"},t.a=h},478:function(e,t,s){"use strict";s.d(t,"a",(function(){return O}));var a=s(21),c=s(14),r=s(60),i=s(123),n=s(0),o=s.n(n),l=s(5),b=s.n(l),j=s(467),d=s(84);function h(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}var u=["defaultOpen"],O=function(e){function t(t){var s;return(s=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},s.toggle=s.toggle.bind(Object(r.a)(s)),s}Object(i.a)(t,e);var s=t.prototype;return s.toggle=function(){this.setState({isOpen:!this.state.isOpen})},s.render=function(){return o.a.createElement(j.a,Object(c.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(d.omit)(this.props,u)))},t}(n.Component);O.propTypes=function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?h(Object(s),!0).forEach((function(t){Object(a.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):h(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({defaultOpen:b.a.bool},j.a.propTypes)},479:function(e,t,s){"use strict";var a=s(14),c=s(15),r=s(0),i=s.n(r),n=s(5),o=s.n(n),l=s(59),b=s.n(l),j=s(84),d={tag:j.tagPropType,className:o.a.string,cssModule:o.a.object},h=function(e){var t=e.className,s=e.cssModule,r=e.tag,n=Object(c.a)(e,["className","cssModule","tag"]),o=Object(j.mapToCssModules)(b()(t,"card-text"),s);return i.a.createElement(r,Object(a.a)({},n,{className:o}))};h.propTypes=d,h.defaultProps={tag:"p"},t.a=h},622:function(e,t,s){"use strict";var a=s(1),c=s(21),r=s(124),i=s(472),n=s(59),o=s.n(n),l=s(483),b=s.n(l),j=s(468),d=s(471),h=s(760),u=s(6),O=["icon","color","stats","statTitle","series","options","type","height","className"],x=function(e){var t=e.icon,s=e.color,n=e.stats,l=e.statTitle,h=e.series,x=e.options,m=e.type,p=e.height,g=e.className,f=Object(r.a)(e,O);return Object(u.jsxs)(j.a,Object(a.a)(Object(a.a)({},f),{},{children:[Object(u.jsxs)(d.a,{className:o()("pb-0",Object(c.a)({},g,g)),children:[Object(u.jsx)(i.a,{className:"avatar-stats p-50 m-0",color:"light-".concat(s),icon:t}),Object(u.jsx)("h2",{className:"font-weight-bolder mt-1",children:n}),Object(u.jsx)("p",{className:"card-text",children:l})]}),Object(u.jsx)(b.a,{options:x,series:h,type:m,height:p||100})]}))};t.a=x,x.defaultProps={options:h.a,color:"primary"}},704:function(e,t,s){"use strict";var a=s(483),c=s.n(a),r=s(468),i=s(471),n=s(6),o=function(e){var t=e.title,s=e.stats,a=e.options,o=e.series,l=e.type,b=e.height;return Object(n.jsx)(r.a,{className:"card-tiny-line-stats",children:Object(n.jsxs)(i.a,{className:"pb-50",children:[Object(n.jsx)("h6",{children:t}),Object(n.jsx)("h2",{className:"font-weight-bolder mb-1",children:s}),Object(n.jsx)(c.a,{options:a,series:o,type:l,height:b})]})})};t.a=o,o.defaultProps={height:100}},760:function(e,t,s){"use strict";s.d(t,"a",(function(){return a})),s.d(t,"b",(function(){return c}));var a={chart:{toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:["#7367F0"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}},c={chart:{toolbar:{show:!1},sparkline:{enabled:!0},dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1}},grid:{show:!1},colors:["#7367F0"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:5},fill:{type:"gradient",gradient:{shadeIntensity:1,gradientToColors:["#A9A2F6"],opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}}},896:function(e,t,s){"use strict";var a=s(16),c=s(0),r=s(85),i=s.n(r),n=s(1065),o=s(622),l=s(6);t.a=function(e){var t=e.kFormatter,s=e.warning,r=Object(c.useState)(null),b=Object(a.a)(r,2),j=b[0],d=b[1],h={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:[s],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}};return Object(c.useEffect)((function(){i.a.get("/card/card-statistics/orders").then((function(e){return d(e.data)}))}),[]),null!==j?Object(l.jsx)(o.a,{icon:Object(l.jsx)(n.a,{size:21}),color:"warning",stats:t(j.analyticsData.orders),statTitle:"Orders Received",options:h,series:j.series,type:"area"}):null}},897:function(e,t,s){"use strict";var a=s(16),c=s(0),r=s(85),i=s.n(r),n=s(1104),o=s(622),l=s(6);t.a=function(e){var t=e.kFormatter,s=Object(c.useState)(null),r=Object(a.a)(s,2),b=r[0],j=r[1];return Object(c.useEffect)((function(){i.a.get("/card/card-statistics/subscribers").then((function(e){return j(e.data)}))}),[]),null!==b?Object(l.jsx)(o.a,{icon:Object(l.jsx)(n.a,{size:21}),color:"primary",stats:t(b.analyticsData.subscribers),statTitle:"Subscribers Gained",series:b.series,type:"area"}):null}},900:function(e,t,s){"use strict";var a=s(1),c=s(21),r=s(59),i=s.n(r),n=s(472),o=s(1097),l=s(970),b=s(996),j=s(1025),d=s(470),h=s(967),u=s(479),O=s(468),x=s(475),m=s(473),p=s(471),g=s(469),f=s(6);t.a=function(e){var t=e.cols,s=[{title:"230k",subtitle:"Sales",color:"light-primary",icon:Object(f.jsx)(o.a,{size:24})},{title:"8.549k",subtitle:"Customers",color:"light-info",icon:Object(f.jsx)(l.a,{size:24})},{title:"1.423k",subtitle:"Products",color:"light-danger",icon:Object(f.jsx)(b.a,{size:24})},{title:"$9745",subtitle:"Revenue",color:"light-success",icon:Object(f.jsx)(j.a,{size:24})}];return Object(f.jsxs)(O.a,{className:"card-statistics",children:[Object(f.jsxs)(x.a,{children:[Object(f.jsx)(m.a,{tag:"h4",children:"Statistics"}),Object(f.jsx)(u.a,{className:"card-text font-small-2 mr-25 mb-0",children:"Updated 1 month ago"})]}),Object(f.jsx)(p.a,{className:"statistics-body",children:Object(f.jsx)(g.a,{children:s.map((function(e,r){var o=Object.keys(t);return Object(f.jsx)(d.a,Object(a.a)(Object(a.a)({},t),{},{className:i()(Object(c.a)({},"mb-2 mb-".concat(o[0],"-0"),r!==s.length-1)),children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)(n.a,{color:e.color,icon:e.icon,className:"mr-2"}),Object(f.jsxs)(h.a,{className:"my-auto",body:!0,children:[Object(f.jsx)("h4",{className:"font-weight-bolder mb-0",children:e.title}),Object(f.jsx)(u.a,{className:"font-small-3 mb-0",children:e.subtitle})]})]})}),r)}))})})]})}},903:function(e,t,s){"use strict";var a=s(16),c=s(0),r=s(85),i=s.n(r),n=s(704),o=s(6);t.a=function(e){var t=e.warning,s=Object(c.useState)(null),r=Object(a.a)(s,2),l=r[0],b=r[1];Object(c.useEffect)((function(){i.a.get("/card/card-statistics/orders-bar-chart").then((function(e){return b(e.data)}))}),[]);var j={chart:{stacked:!0,toolbar:{show:!1}},grid:{show:!1,padding:{left:0,right:0,top:-15,bottom:-15}},plotOptions:{bar:{horizontal:!1,columnWidth:"20%",startingShape:"rounded",colors:{backgroundBarColors:["#f3f3f3","#f3f3f3","#f3f3f3","#f3f3f3","#f3f3f3"],backgroundBarRadius:5}}},legend:{show:!1},dataLabels:{enabled:!1},colors:[t],xaxis:{labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1},tooltip:{x:{show:!1}}};return null!==l?Object(o.jsx)(n.a,{height:70,type:"bar",options:j,title:l.title,stats:l.statistics,series:l.series}):null}},904:function(e,t,s){"use strict";var a=s(16),c=s(0),r=s(85),i=s.n(r),n=s(704),o=s(6);t.a=function(e){var t=e.info,s=Object(c.useState)(null),r=Object(a.a)(s,2),l=r[0],b=r[1];Object(c.useEffect)((function(){i.a.get("/card/card-statistics/profit-line-chart").then((function(e){return b(e.data)}))}),[]);var j={chart:{toolbar:{show:!1},zoom:{enabled:!1}},grid:{borderColor:"#EBEBEB",strokeDashArray:5,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}},padding:{top:-30,bottom:-10}},stroke:{width:3},colors:[t],series:[{data:[0,20,5,30,15,45]}],markers:{size:2,colors:t,strokeColors:t,strokeWidth:2,strokeOpacity:1,strokeDashArray:0,fillOpacity:1,discrete:[{seriesIndex:0,dataPointIndex:5,fillColor:"#ffffff",strokeColor:t,size:5}],shape:"circle",radius:2,hover:{size:3}},xaxis:{labels:{show:!0,style:{fontSize:"0px"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1},tooltip:{x:{show:!1}}};return null!==l?Object(o.jsx)(n.a,{height:70,type:"line",options:j,title:l.title,stats:l.statistics,series:l.series}):null}}}]);
//# sourceMappingURL=73.d6fa11e5.chunk.js.map