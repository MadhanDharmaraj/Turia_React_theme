(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[48],{2e3:function(e,a,s){"use strict";s.r(a);var t=s(0),c=s(465),r=s(1),n=s(16),o=s(59),l=s.n(o),i=s(585),d=s(1002),b=s(937),j=s(1076),u=s(714),p=s(468),m=s(475),O=s(473),g=s(6),h=function(e){var a=e.title,s=e.actions,c=e.children,o=e.collapseIcon,h=e.reloadIcon,f=e.removeIcon,x=e.endReload,v=Object(t.useState)(!1),N=Object(n.a)(v,2),y=N[0],T=N[1],M=Object(t.useState)(!0),C=Object(n.a)(M,2),P=C[0],w=C[1],z=Object(t.useState)(!0),E=Object(n.a)(z,2),R=E[0],k=E[1],A={collapse:o||d.a,remove:f||b.a,reload:h||j.a},S=function(e){switch(e){case"collapse":return w(!P);case"remove":return k(!1);case"reload":return T(!0)}},D=function(){T(!1)};Object(t.useEffect)((function(){y&&x(D)}));var F="collapse"===s||s.includes("collapse")?u.a:t.Fragment,I="reload"===s||s.includes("reload")?i.a:t.Fragment;return Object(g.jsx)(I,Object(r.a)(Object(r.a)({},"reload"===s||s.includes("reload")?{blocking:y}:{}),{},{children:Object(g.jsxs)(p.a,{className:l()("card-action",{"d-none":!R}),children:[Object(g.jsxs)(m.a,{children:[Object(g.jsx)(O.a,{tag:"h4",children:a}),Object(g.jsx)("div",{className:"action-icons",children:function(){if(Array.isArray(s))return s.map((function(e,a){var t=A[e];return Object(g.jsx)(t,{className:l()("cursor-pointer",{"mr-50":a<s.length-1}),size:15,onClick:function(){return S(e)}},a)}));var e=A[s];return Object(g.jsx)(e,{className:"cursor-pointer",size:15,onClick:function(){return S(s)}})}()})]}),Object(g.jsx)(F,Object(r.a)(Object(r.a)({},"collapse"===s||s.includes("collapse")?{isOpen:P}:{}),{},{children:c}))]})}))},f=s(469),x=s(470),v=s(471),N=s(521),y=s(479);a.default=function(){return Object(g.jsxs)(t.Fragment,{children:[Object(g.jsx)(c.a,{breadCrumbTitle:"Card Actions",breadCrumbParent:"Card",breadCrumbActive:"Card Actions"}),Object(g.jsx)(f.a,{children:Object(g.jsx)(x.a,{sm:"12",children:Object(g.jsx)(h,{title:"Card Actions",actions:["collapse","reload","remove"],endReload:function(e){setTimeout((function(){return e()}),2e3)},children:Object(g.jsx)(v.a,{className:"pt-0",children:Object(g.jsxs)(N.a,{responsive:!0,bordered:!0,children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Action"}),Object(g.jsx)("th",{children:"Icon"}),Object(g.jsx)("th",{children:"Details"})]})}),Object(g.jsxs)("tbody",{children:[Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Collapse"}),Object(g.jsx)("td",{className:"text-center",children:Object(g.jsx)(d.a,{className:"collapse-icon",size:15})}),Object(g.jsx)("td",{children:" Collapse card content using collapse action."})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Refresh Content"}),Object(g.jsx)("td",{className:"text-center",children:Object(g.jsx)(j.a,{size:15})}),Object(g.jsx)("td",{children:"Refresh your card content using refresh action."})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Remove Card"}),Object(g.jsx)("td",{className:"text-center",children:Object(g.jsx)(b.a,{size:15})}),Object(g.jsx)("td",{children:" Remove card from page using remove card action"})]})]})]})})})})}),Object(g.jsxs)(f.a,{children:[Object(g.jsx)(x.a,{md:"6",sm:"12",children:Object(g.jsx)(h,{title:"Collapse",actions:"collapse",children:Object(g.jsxs)(v.a,{className:"pt-0",children:[Object(g.jsxs)(y.a,{children:["You can create a collapsible content by using our",Object(g.jsx)("code",{children:"CardAction"})," component and by passing prop",Object(g.jsx)("code",{children:"actions='collapse'"}),"."]}),Object(g.jsxs)(y.a,{className:"mb-0",children:["Click on ",Object(g.jsx)(d.a,{size:15})," to see card collapse in action"]})]})})}),Object(g.jsx)(x.a,{md:"6",sm:"12",children:Object(g.jsx)(h,{title:"Reload",actions:"reload",endReload:function(e){setTimeout((function(){return e()}),2e3)},children:Object(g.jsxs)(v.a,{className:"pt-0",children:[Object(g.jsxs)(y.a,{children:["To create a re-loadable card pass prop",Object(g.jsx)("code",{children:"actions='reload'"})," and pass prop ",Object(g.jsx)("code",{children:"endReload"}),"to end the loading."]}),Object(g.jsxs)(y.a,{className:"mb-0",children:["Click on ",Object(g.jsx)(j.a,{size:15})," to see card refresh in action"]})]})})}),Object(g.jsx)(x.a,{md:"6",sm:"12",children:Object(g.jsx)(h,{title:"Remove",actions:"remove",children:Object(g.jsxs)(v.a,{className:"pt-0",children:[Object(g.jsxs)(y.a,{children:["You can add refresh content action to card by adding class",Object(g.jsx)("code",{children:".card-reload"})," with your card tag, and add conditional spinner into card body to show when card is refreshing."]}),Object(g.jsxs)(y.a,{className:"mb-0",children:["Click on ",Object(g.jsx)(j.a,{size:15})," to see card refresh in action"]})]})})})]})]})}},465:function(e,a,s){"use strict";var t=s(466),c=s(1041),r=s(972),n=s(973),o=s(971),l=s(998),i=s(476),d=s(477),b=s(478),j=s(1267),u=s(952),p=s(961),m=s(6);a.a=function(e){var a=e.breadCrumbTitle,s=e.breadCrumbParent,O=e.breadCrumbParent2,g=e.breadCrumbParent3,h=e.breadCrumbActive;return Object(m.jsxs)("div",{className:"content-header row",children:[Object(m.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(m.jsx)("div",{className:"row breadcrumbs-top",children:Object(m.jsxs)("div",{className:"col-12",children:[a?Object(m.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(m.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(m.jsxs)(i.a,{children:[Object(m.jsx)(d.a,{tag:"li",children:Object(m.jsx)(t.b,{to:"/",children:"Home"})}),Object(m.jsx)(d.a,{tag:"li",className:"text-primary",children:s}),O?Object(m.jsx)(d.a,{tag:"li",className:"text-primary",children:O}):"",g?Object(m.jsx)(d.a,{tag:"li",className:"text-primary",children:g}):"",Object(m.jsx)(d.a,{tag:"li",active:!0,children:h})]})})]})})}),Object(m.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(m.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(m.jsxs)(b.a,{children:[Object(m.jsx)(j.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(m.jsx)(c.a,{size:14})}),Object(m.jsxs)(u.a,{tag:"ul",right:!0,children:[Object(m.jsxs)(p.a,{tag:t.b,to:"/apps/chat",children:[Object(m.jsx)(r.a,{className:"mr-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(m.jsxs)(p.a,{tag:t.b,to:"/apps/chat",children:[Object(m.jsx)(n.a,{className:"mr-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(m.jsxs)(p.a,{tag:t.b,to:"/apps/email",children:[Object(m.jsx)(o.a,{className:"mr-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(m.jsxs)(p.a,{tag:t.b,to:"/apps/calendar",children:[Object(m.jsx)(l.a,{className:"mr-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},467:function(e,a,s){"use strict";var t=s(14),c=s(0),r=s.n(c),n=s(5),o=s.n(n),l=s(474),i={children:o.a.node},d=function(e){return r.a.createElement(l.a,Object(t.a)({group:!0},e))};d.propTypes=i,a.a=d},468:function(e,a,s){"use strict";var t=s(14),c=s(15),r=s(0),n=s.n(r),o=s(5),l=s.n(o),i=s(59),d=s.n(i),b=s(84),j={tag:b.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},u=function(e){var a=e.className,s=e.cssModule,r=e.color,o=e.body,l=e.inverse,i=e.outline,j=e.tag,u=e.innerRef,p=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),m=Object(b.mapToCssModules)(d()(a,"card",!!l&&"text-white",!!o&&"card-body",!!r&&(i?"border":"bg")+"-"+r),s);return n.a.createElement(j,Object(t.a)({},p,{className:m,ref:u}))};u.propTypes=j,u.defaultProps={tag:"div"},a.a=u},469:function(e,a,s){"use strict";var t=s(14),c=s(15),r=s(0),n=s.n(r),o=s(5),l=s.n(o),i=s(59),d=s.n(i),b=s(84),j=l.a.oneOfType([l.a.number,l.a.string]),u={tag:b.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:j,sm:j,md:j,lg:j,xl:j},p={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e){var a=e.className,s=e.cssModule,r=e.noGutters,o=e.tag,l=e.form,i=e.widths,j=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),u=[];i.forEach((function(a,s){var t=e[a];if(delete j[a],t){var c=!s;u.push(c?"row-cols-"+t:"row-cols-"+a+"-"+t)}}));var p=Object(b.mapToCssModules)(d()(a,r?"no-gutters":null,l?"form-row":"row",u),s);return n.a.createElement(o,Object(t.a)({},j,{className:p}))};m.propTypes=u,m.defaultProps=p,a.a=m},470:function(e,a,s){"use strict";var t=s(14),c=s(15),r=s(0),n=s.n(r),o=s(5),l=s.n(o),i=s(59),d=s.n(i),b=s(84),j=l.a.oneOfType([l.a.number,l.a.string]),u=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:j,offset:j})]),p={tag:b.tagPropType,xs:u,sm:u,md:u,lg:u,xl:u,className:l.a.string,cssModule:l.a.object,widths:l.a.array},m={tag:"div",widths:["xs","sm","md","lg","xl"]},O=function(e,a,s){return!0===s||""===s?e?"col":"col-"+a:"auto"===s?e?"col-auto":"col-"+a+"-auto":e?"col-"+s:"col-"+a+"-"+s},g=function(e){var a=e.className,s=e.cssModule,r=e.widths,o=e.tag,l=Object(c.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach((function(a,t){var c=e[a];if(delete l[a],c||""===c){var r=!t;if(Object(b.isObject)(c)){var n,o=r?"-":"-"+a+"-",j=O(r,a,c.size);i.push(Object(b.mapToCssModules)(d()(((n={})[j]=c.size||""===c.size,n["order"+o+c.order]=c.order||0===c.order,n["offset"+o+c.offset]=c.offset||0===c.offset,n)),s))}else{var u=O(r,a,c);i.push(u)}}})),i.length||i.push("col");var j=Object(b.mapToCssModules)(d()(a,i),s);return n.a.createElement(o,Object(t.a)({},l,{className:j}))};g.propTypes=p,g.defaultProps=m,a.a=g},471:function(e,a,s){"use strict";var t=s(14),c=s(15),r=s(0),n=s.n(r),o=s(5),l=s.n(o),i=s(59),d=s.n(i),b=s(84),j={tag:b.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},u=function(e){var a=e.className,s=e.cssModule,r=e.innerRef,o=e.tag,l=Object(c.a)(e,["className","cssModule","innerRef","tag"]),i=Object(b.mapToCssModules)(d()(a,"card-body"),s);return n.a.createElement(o,Object(t.a)({},l,{className:i,ref:r}))};u.propTypes=j,u.defaultProps={tag:"div"},a.a=u},473:function(e,a,s){"use strict";var t=s(14),c=s(15),r=s(0),n=s.n(r),o=s(5),l=s.n(o),i=s(59),d=s.n(i),b=s(84),j={tag:b.tagPropType,className:l.a.string,cssModule:l.a.object},u=function(e){var a=e.className,s=e.cssModule,r=e.tag,o=Object(c.a)(e,["className","cssModule","tag"]),l=Object(b.mapToCssModules)(d()(a,"card-title"),s);return n.a.createElement(r,Object(t.a)({},o,{className:l}))};u.propTypes=j,u.defaultProps={tag:"div"},a.a=u},475:function(e,a,s){"use strict";var t=s(14),c=s(15),r=s(0),n=s.n(r),o=s(5),l=s.n(o),i=s(59),d=s.n(i),b=s(84),j={tag:b.tagPropType,className:l.a.string,cssModule:l.a.object},u=function(e){var a=e.className,s=e.cssModule,r=e.tag,o=Object(c.a)(e,["className","cssModule","tag"]),l=Object(b.mapToCssModules)(d()(a,"card-header"),s);return n.a.createElement(r,Object(t.a)({},o,{className:l}))};u.propTypes=j,u.defaultProps={tag:"div"},a.a=u},476:function(e,a,s){"use strict";var t=s(14),c=s(15),r=s(0),n=s.n(r),o=s(5),l=s.n(o),i=s(59),d=s.n(i),b=s(84),j={tag:b.tagPropType,listTag:b.tagPropType,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},u=function(e){var a=e.className,s=e.listClassName,r=e.cssModule,o=e.children,l=e.tag,i=e.listTag,j=e["aria-label"],u=Object(c.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(b.mapToCssModules)(d()(a),r),m=Object(b.mapToCssModules)(d()("breadcrumb",s),r);return n.a.createElement(l,Object(t.a)({},u,{className:p,"aria-label":j}),n.a.createElement(i,{className:m},o))};u.propTypes=j,u.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=u},477:function(e,a,s){"use strict";var t=s(14),c=s(15),r=s(0),n=s.n(r),o=s(5),l=s.n(o),i=s(59),d=s.n(i),b=s(84),j={tag:b.tagPropType,active:l.a.bool,className:l.a.string,cssModule:l.a.object},u=function(e){var a=e.className,s=e.cssModule,r=e.active,o=e.tag,l=Object(c.a)(e,["className","cssModule","active","tag"]),i=Object(b.mapToCssModules)(d()(a,!!r&&"active","breadcrumb-item"),s);return n.a.createElement(o,Object(t.a)({},l,{className:i,"aria-current":r?"page":void 0}))};u.propTypes=j,u.defaultProps={tag:"li"},a.a=u},478:function(e,a,s){"use strict";s.d(a,"a",(function(){return m}));var t=s(21),c=s(14),r=s(60),n=s(123),o=s(0),l=s.n(o),i=s(5),d=s.n(i),b=s(467),j=s(84);function u(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,t)}return s}var p=["defaultOpen"],m=function(e){function a(a){var s;return(s=e.call(this,a)||this).state={isOpen:a.defaultOpen||!1},s.toggle=s.toggle.bind(Object(r.a)(s)),s}Object(n.a)(a,e);var s=a.prototype;return s.toggle=function(){this.setState({isOpen:!this.state.isOpen})},s.render=function(){return l.a.createElement(b.a,Object(c.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(j.omit)(this.props,p)))},a}(o.Component);m.propTypes=function(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?u(Object(s),!0).forEach((function(a){Object(t.a)(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}({defaultOpen:d.a.bool},b.a.propTypes)},479:function(e,a,s){"use strict";var t=s(14),c=s(15),r=s(0),n=s.n(r),o=s(5),l=s.n(o),i=s(59),d=s.n(i),b=s(84),j={tag:b.tagPropType,className:l.a.string,cssModule:l.a.object},u=function(e){var a=e.className,s=e.cssModule,r=e.tag,o=Object(c.a)(e,["className","cssModule","tag"]),l=Object(b.mapToCssModules)(d()(a,"card-text"),s);return n.a.createElement(r,Object(t.a)({},o,{className:l}))};u.propTypes=j,u.defaultProps={tag:"p"},a.a=u},521:function(e,a,s){"use strict";var t=s(14),c=s(15),r=s(0),n=s.n(r),o=s(5),l=s.n(o),i=s(59),d=s.n(i),b=s(84),j={className:l.a.string,cssModule:l.a.object,size:l.a.string,bordered:l.a.bool,borderless:l.a.bool,striped:l.a.bool,dark:l.a.bool,hover:l.a.bool,responsive:l.a.oneOfType([l.a.bool,l.a.string]),tag:b.tagPropType,responsiveTag:b.tagPropType,innerRef:l.a.oneOfType([l.a.func,l.a.string,l.a.object])},u=function(e){var a=e.className,s=e.cssModule,r=e.size,o=e.bordered,l=e.borderless,i=e.striped,j=e.dark,u=e.hover,p=e.responsive,m=e.tag,O=e.responsiveTag,g=e.innerRef,h=Object(c.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),f=Object(b.mapToCssModules)(d()(a,"table",!!r&&"table-"+r,!!o&&"table-bordered",!!l&&"table-borderless",!!i&&"table-striped",!!j&&"table-dark",!!u&&"table-hover"),s),x=n.a.createElement(m,Object(t.a)({},h,{ref:g,className:f}));if(p){var v=Object(b.mapToCssModules)(!0===p?"table-responsive":"table-responsive-"+p,s);return n.a.createElement(O,{className:v},x)}return x};u.propTypes=j,u.defaultProps={tag:"table",responsiveTag:"div"},a.a=u},585:function(e,a,s){"use strict";var t=s(1),c=s(21),r=s(0),n=s(59),o=s.n(n),l=s(616),i=(s(697),s(6)),d=function(e){var a,s=e.children,n=e.blocking,l=e.loader,d=e.className,b=e.tag,j=e.overlayColor,u=b;return Object(i.jsxs)(u,{className:o()("ui-loader",(a={},Object(c.a)(a,d,d),Object(c.a)(a,"show",n),a)),children:[s,n?Object(i.jsxs)(r.Fragment,{children:[Object(i.jsx)("div",Object(t.a)({className:"overlay"},n&&j?{style:{backgroundColor:j}}:{})),Object(i.jsx)("div",{className:"loader",children:l})]}):null]})};a.a=d,d.defaultProps={tag:"div",blocking:!1,loader:Object(i.jsx)(l.a,{color:"primary"})}},616:function(e,a,s){"use strict";var t=s(14),c=s(15),r=s(0),n=s.n(r),o=s(5),l=s.n(o),i=s(59),d=s.n(i),b=s(84),j={tag:b.tagPropType,type:l.a.string,size:l.a.string,color:l.a.string,className:l.a.string,cssModule:l.a.object,children:l.a.string},u=function(e){var a=e.className,s=e.cssModule,r=e.type,o=e.size,l=e.color,i=e.children,j=e.tag,u=Object(c.a)(e,["className","cssModule","type","size","color","children","tag"]),p=Object(b.mapToCssModules)(d()(a,!!o&&"spinner-"+r+"-"+o,"spinner-"+r,!!l&&"text-"+l),s);return n.a.createElement(j,Object(t.a)({role:"status"},u,{className:p}),i&&n.a.createElement("span",{className:Object(b.mapToCssModules)("sr-only",s)},i))};u.propTypes=j,u.defaultProps={tag:"div",type:"border",children:"Loading..."},a.a=u},697:function(e,a,s){}}]);
//# sourceMappingURL=48.ca98dd00.chunk.js.map