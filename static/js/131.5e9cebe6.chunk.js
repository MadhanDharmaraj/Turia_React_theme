(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[131],{1904:function(e,a,s){"use strict";s.r(a);var t=s(0),c=s(134),r=s(469),o=s(470),n=s(468),l=s(471),i=s(473),d=s(479),u=s(6);a.default=function(){var e=Object(t.useContext)(c.a);return Object(u.jsxs)(r.a,{children:[Object(u.jsx)(o.a,{md:"6",sm:"12",children:Object(u.jsx)(n.a,{children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(i.a,{tag:"h4",children:"Common"}),Object(u.jsx)(d.a,{children:"No ability is required to view this card"}),Object(u.jsx)(d.a,{className:"text-primary",children:"This card is visible to 'user' and 'admin' both"})]})})}),e.can("read","Analytics")?Object(u.jsx)(o.a,{md:"6",sm:"12",children:Object(u.jsx)(n.a,{children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(i.a,{tag:"h4",children:"Analytics"}),Object(u.jsx)(d.a,{children:"User with 'Analytics' subject's 'Read' ability can view this card"}),Object(u.jsx)(d.a,{className:"text-danger",children:"This card is visible to 'admin' only"})]})})}):null]})}},468:function(e,a,s){"use strict";var t=s(14),c=s(15),r=s(0),o=s.n(r),n=s(5),l=s.n(n),i=s(59),d=s.n(i),u=s(84),b={tag:u.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,s=e.cssModule,r=e.color,n=e.body,l=e.inverse,i=e.outline,b=e.tag,m=e.innerRef,p=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(u.mapToCssModules)(d()(a,"card",!!l&&"text-white",!!n&&"card-body",!!r&&(i?"border":"bg")+"-"+r),s);return o.a.createElement(b,Object(t.a)({},p,{className:f,ref:m}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},469:function(e,a,s){"use strict";var t=s(14),c=s(15),r=s(0),o=s.n(r),n=s(5),l=s.n(n),i=s(59),d=s.n(i),u=s(84),b=l.a.oneOfType([l.a.number,l.a.string]),m={tag:u.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},p={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e){var a=e.className,s=e.cssModule,r=e.noGutters,n=e.tag,l=e.form,i=e.widths,b=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];i.forEach((function(a,s){var t=e[a];if(delete b[a],t){var c=!s;m.push(c?"row-cols-"+t:"row-cols-"+a+"-"+t)}}));var p=Object(u.mapToCssModules)(d()(a,r?"no-gutters":null,l?"form-row":"row",m),s);return o.a.createElement(n,Object(t.a)({},b,{className:p}))};f.propTypes=m,f.defaultProps=p,a.a=f},470:function(e,a,s){"use strict";var t=s(14),c=s(15),r=s(0),o=s.n(r),n=s(5),l=s.n(n),i=s(59),d=s.n(i),u=s(84),b=l.a.oneOfType([l.a.number,l.a.string]),m=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:b,offset:b})]),p={tag:u.tagPropType,xs:m,sm:m,md:m,lg:m,xl:m,className:l.a.string,cssModule:l.a.object,widths:l.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e,a,s){return!0===s||""===s?e?"col":"col-"+a:"auto"===s?e?"col-auto":"col-"+a+"-auto":e?"col-"+s:"col-"+a+"-"+s},g=function(e){var a=e.className,s=e.cssModule,r=e.widths,n=e.tag,l=Object(c.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach((function(a,t){var c=e[a];if(delete l[a],c||""===c){var r=!t;if(Object(u.isObject)(c)){var o,n=r?"-":"-"+a+"-",b=j(r,a,c.size);i.push(Object(u.mapToCssModules)(d()(((o={})[b]=c.size||""===c.size,o["order"+n+c.order]=c.order||0===c.order,o["offset"+n+c.offset]=c.offset||0===c.offset,o)),s))}else{var m=j(r,a,c);i.push(m)}}})),i.length||i.push("col");var b=Object(u.mapToCssModules)(d()(a,i),s);return o.a.createElement(n,Object(t.a)({},l,{className:b}))};g.propTypes=p,g.defaultProps=f,a.a=g},471:function(e,a,s){"use strict";var t=s(14),c=s(15),r=s(0),o=s.n(r),n=s(5),l=s.n(n),i=s(59),d=s.n(i),u=s(84),b={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,s=e.cssModule,r=e.innerRef,n=e.tag,l=Object(c.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.mapToCssModules)(d()(a,"card-body"),s);return o.a.createElement(n,Object(t.a)({},l,{className:i,ref:r}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},473:function(e,a,s){"use strict";var t=s(14),c=s(15),r=s(0),o=s.n(r),n=s(5),l=s.n(n),i=s(59),d=s.n(i),u=s(84),b={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,s=e.cssModule,r=e.tag,n=Object(c.a)(e,["className","cssModule","tag"]),l=Object(u.mapToCssModules)(d()(a,"card-title"),s);return o.a.createElement(r,Object(t.a)({},n,{className:l}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},479:function(e,a,s){"use strict";var t=s(14),c=s(15),r=s(0),o=s.n(r),n=s(5),l=s.n(n),i=s(59),d=s.n(i),u=s(84),b={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,s=e.cssModule,r=e.tag,n=Object(c.a)(e,["className","cssModule","tag"]),l=Object(u.mapToCssModules)(d()(a,"card-text"),s);return o.a.createElement(r,Object(t.a)({},n,{className:l}))};m.propTypes=b,m.defaultProps={tag:"p"},a.a=m}}]);
//# sourceMappingURL=131.5e9cebe6.chunk.js.map