(this["webpackJsonpintro-js"]=this["webpackJsonpintro-js"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(7),r=n.n(c),a=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))},i=n(2),s=n(1),u=n(9),o=n(0),j=function(t){var e=t.setCategories,n=Object(s.useState)(""),c=Object(i.a)(n,2),r=c[0],a=c[1];return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(u.a)(t))})),a(""))},children:[Object(o.jsx)("h1",{children:r}),Object(o.jsx)("input",{type:"text",value:r,onChange:function(t){a(t.target.value)}})]})},d=n(10),l=n(6),b=n.n(l),f=n(8),h=function(){var t=Object(f.a)(b.a.mark((function t(e){var n,c,r,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"ePcaPk7EZIpkS6ywdgvyNrnzn3GxVH1l",n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=").concat("ePcaPk7EZIpkS6ywdgvyNrnzn3GxVH1l"),t.next=4,fetch(n);case 4:return c=t.sent,t.next=7,c.json();case 7:return r=t.sent,a=r.data,t.abrupt("return",null===a||void 0===a?void 0:a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){var e=t.title,n=t.url;return Object(o.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(o.jsx)("img",{src:n,alt:e}),Object(o.jsx)("p",{children:e})]})},p=function(t){var e=t.category,n=function(t){var e=Object(s.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],r=n[1];return Object(s.useEffect)((function(){h(t).then((function(t){r({data:t,loading:!1})}))}),[t]),c}(e),c=n.data,r=n.loading;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:e}),r&&Object(o.jsx)("p",{children:"Loading"}),Object(o.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(o.jsx)(O,Object(d.a)({},t),t.id)}))})]})},g=function(){var t=Object(s.useState)(["One Punch"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"Gif App"}),Object(o.jsx)(j,{setCategories:c}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(t){return Object(o.jsx)(p,{category:t},t)}))})]})};n(17);r.a.render(Object(o.jsx)(g,{}),document.getElementById("root")),a()}},[[18,1,2]]]);
//# sourceMappingURL=main.84bd4e14.chunk.js.map