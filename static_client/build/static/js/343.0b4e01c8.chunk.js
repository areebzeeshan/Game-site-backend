"use strict";(self.webpackChunknew_client=self.webpackChunknew_client||[]).push([[343],{72058:function(e,t,r){r.d(t,{I6:function(){return i},Ir:function(){return p},SK:function(){return x},nM:function(){return u},ry:function(){return d},tr:function(){return l}});var s=r(74165),n=r(15861),a=r(74569),c=r.n(a),o=r(48145),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){var r=(0,n.Z)((0,s.Z)().mark((function r(n){var a,l;return(0,s.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n({type:"product_list_request"}),r.next=4,c().get("".concat(o.b,"/products?keyword=").concat(e,"&pageNumber=").concat(t));case 4:a=r.sent,l=a.data,n({type:"product_list_success",payload:l}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),n({type:"product_list_fail",payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()},i=function(e){return function(){var t=(0,n.Z)((0,s.Z)().mark((function t(r){var n,a;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"product_detail_request"}),t.next=4,c().get("".concat(o.b,"/products/").concat(e));case 4:n=t.sent,a=n.data,r({type:"product_detail_success",payload:a}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),r({type:"product_detail_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=(0,n.Z)((0,s.Z)().mark((function t(r,n){var a,l,i,d,u;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"product_create_request"}),a=n(),l=a.user,i={headers:{"Content-Type":"Application/json",authToken:"".concat(l.token)}},t.next=6,c().post("".concat(o.b,"/products"),e,i);case 6:d=t.sent,u=d.data,r({type:"product_create_success",payload:u}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:"product_create_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()},u=function(e){return function(){var t=(0,n.Z)((0,s.Z)().mark((function t(r,n){var a,l,i,d,u;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"product_update_request"}),a=n(),l=a.user,i={headers:{"Content-Type":"Application/json",authToken:"".concat(l.token)}},t.next=6,c().put("".concat(o.b,"/products/").concat(e._id),e,i);case 6:d=t.sent,u=d.data,r({type:"product_update_success",payload:u}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:"product_update_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=(0,n.Z)((0,s.Z)().mark((function t(r,n){var a,l,i;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"product_delete_request"}),a=n(),l=a.user,i={headers:{authtoken:"".concat(l.token)}},t.next=6,c().delete("".concat(o.b,"/products/").concat(e),i);case 6:r({type:"product_delete_success"}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),r({type:"product_delete_fail",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,r){return t.apply(this,arguments)}}()},x=function(e,t){return function(){var r=(0,n.Z)((0,s.Z)().mark((function r(n,a){var l,i,d;return(0,s.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n({type:"product_reviews_request"}),l=a(),i=l.user,d={headers:{"Content-Type":"application/json",authtoken:"".concat(i.token)}},r.next=6,c().post("".concat(o.b,"/products/rating/").concat(e),t,d);case 6:n({type:"product_reviews_success"}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),n({type:"product_reviews_fail",payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e,t){return r.apply(this,arguments)}}()}},18711:function(e,t,r){r(72791);var s=r(54270),n=r(80184);t.Z=function(e){var t=e.title;return(0,n.jsxs)(s.q,{children:[(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("title",{children:t}),(0,n.jsx)("meta",{name:"robots",content:"noindex, follow"}),(0,n.jsx)("meta",{name:"description",content:"Syed Hadi Raza  \u2013 Ecommerce Project"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"})]})}},81474:function(e,t,r){r(72791);var s=r(23853),n=r(20458),a=r(16856),c=r(91523),o=r(80184);t.Z=function(e){var t=e.cats;return(0,o.jsx)("section",{class:"text-gray-600 body-font",children:(0,o.jsxs)("div",{class:"container px-5 pt-10 mx-auto",children:[(0,o.jsx)("div",{class:"flex flex-col text-center w-full mb-2",children:(0,o.jsxs)("div",{class:"flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center",children:[(0,o.jsx)("h2",{class:"text-xs text-indigo-500 tracking-widest font-medium title-font mb-1",children:t?"02":"01"}),(0,o.jsx)("h1",{class:"md:text-3xl text-2xl font-medium title-font text-gray-700",children:"Categories"})]})}),(0,o.jsxs)("div",{class:"flex flex-wrap -m-2",children:[(0,o.jsx)("div",{class:"p-2 lg:w-1/3 md:w-1/2 w-full",children:(0,o.jsx)(c.rU,{to:"/category/smarttv",children:(0,o.jsxs)("div",{class:"h-full flex items-center border-gray-200 border p-4 rounded-lg",children:[(0,o.jsx)(s.hRw,{size:40,color:"blue",className:"w-16 h-16 bg-gray-100 p-1 object-cover object-center flex-shrink-0  mr-4"}),(0,o.jsx)("div",{class:"flex-grow",children:(0,o.jsx)("h2",{class:"text-gray-900 title-font font-medium",children:"Smart TV"})})]})})}),(0,o.jsx)("div",{class:"p-2 lg:w-1/3 md:w-1/2 w-full",children:(0,o.jsx)(c.rU,{to:"/category/mobile",children:(0,o.jsxs)("div",{class:"h-full flex items-center border-gray-200 border p-4 rounded-lg",children:[(0,o.jsx)(n.xp2,{size:40,color:"blue",className:"w-16 h-16 bg-gray-100 p-1 object-cover object-center flex-shrink-0  mr-4"}),(0,o.jsx)("div",{class:"flex-grow",children:(0,o.jsx)("h2",{class:"text-gray-900 title-font font-medium",children:"Mobile Phones"})})]})})}),(0,o.jsx)("div",{class:"p-2 lg:w-1/3 md:w-1/2 w-full",children:(0,o.jsx)(c.rU,{to:"/category/cameras",children:(0,o.jsxs)("div",{class:"h-full flex items-center border-gray-200 border p-4 rounded-lg",children:[(0,o.jsx)(n.D4U,{size:40,color:"blue",className:"w-16 h-16 bg-gray-100 p-1 object-cover object-center flex-shrink-0  mr-4"}),(0,o.jsx)("div",{class:"flex-grow",children:(0,o.jsx)("h2",{class:"text-gray-900 title-font font-medium",children:"Cameras"})})]})})}),(0,o.jsx)("div",{class:"p-2 lg:w-1/3 md:w-1/2 w-full",children:(0,o.jsx)(c.rU,{to:"/category/watch",children:(0,o.jsxs)("div",{class:"h-full flex items-center border-gray-200 border p-4 rounded-lg",children:[(0,o.jsx)(s.Lhx,{size:40,color:"blue",className:"w-16 h-16 bg-gray-100 p-1 object-cover object-center flex-shrink-0  mr-4"}),(0,o.jsx)("div",{class:"flex-grow",children:(0,o.jsx)("h2",{class:"text-gray-900 title-font font-medium",children:"Watches"})})]})})}),(0,o.jsx)("div",{class:"p-2 lg:w-1/3 md:w-1/2 w-full",children:(0,o.jsx)(c.rU,{to:"/category/laptops",children:(0,o.jsxs)("div",{class:"h-full flex items-center border-gray-200 border p-4 rounded-lg",children:[(0,o.jsx)(n.RFD,{size:40,color:"blue",className:"w-16 h-16 bg-gray-100 p-1 object-cover object-center flex-shrink-0  mr-4"}),(0,o.jsx)("div",{class:"flex-grow",children:(0,o.jsx)("h2",{class:"text-gray-900 title-font font-medium",children:"Laptops"})})]})})}),(0,o.jsx)("div",{class:"p-2 lg:w-1/3 md:w-1/2 w-full",children:(0,o.jsx)(c.rU,{to:"/category/accessories",children:(0,o.jsxs)("div",{class:"h-full flex items-center border-gray-200 border p-4 rounded-lg",children:[(0,o.jsx)(a.sOA,{size:40,color:"blue",className:"w-16 h-16 bg-gray-100 p-1 object-cover object-center flex-shrink-0  mr-4"}),(0,o.jsx)("div",{class:"flex-grow",children:(0,o.jsxs)("h2",{class:"text-gray-900 title-font font-medium",children:[" ","Accessories"]})})]})})}),(0,o.jsx)("div",{class:"p-2 lg:w-1/3 md:w-1/2 w-full",children:(0,o.jsx)(c.rU,{to:"/category/headphones",children:(0,o.jsxs)("div",{class:"h-full flex items-center border-gray-200 border p-4 rounded-lg",children:[(0,o.jsx)(n.keI,{size:40,color:"blue",className:"w-16 h-16 bg-gray-100 p-1 object-cover object-center flex-shrink-0  mr-4"}),(0,o.jsx)("div",{class:"flex-grow",children:(0,o.jsxs)("h2",{class:"text-gray-900 title-font font-medium",children:[" ","Headphones"]})})]})})})]})]})})}},53808:function(e,t,r){var s=r(70885),n=r(72791),a=r(8895),c=r(91523),o=r(80184);t.Z=function(e){var t=e.item,r=(0,n.useState)(1.04),l=(0,s.Z)(r,1)[0],i=t.name,d=t.price,u=t.images;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(a.Z,{scale:l,transitionSpeed:4e3,children:[(0,o.jsx)("a",{className:"block relative h-48 rounded overflow-hidden",children:(0,o.jsx)(a.Z,{scale:1.2,transitionSpeed:5e3,children:(0,o.jsx)("img",{src:u&&u.length&&u[0].url,alt:"",className:"object-cover w-full rounded aspect-square"})})}),(0,o.jsxs)("div",{className:"mt-4",children:[(0,o.jsx)("h2",{className:"text-gray-900 title-font text-lg font-medium",children:(0,o.jsxs)(c.rU,{to:"/product/".concat(t._id),children:[" ",i]})}),(0,o.jsxs)("p",{className:"mt-1",children:[d," PKR"]})]})]})})}},93343:function(e,t,r){r.r(t);var s,n=r(30168),a=r(72791),c=r(30577),o=r(16030),l=r(72058),i=r(81474),d=r(51575),u=r(52554),p=r(53808),x=r(7692),f=r(18711),m=r(80184),h=(0,u.F4)(s||(s=(0,n.Z)(["\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n"])));t.default=function(e){var t=e.match,r=t.params.keyword,s=t.params.pageNumber||1,n=(0,o.I0)(),u=((0,o.v9)((function(e){return e.user})),(0,o.v9)((function(e){return e.listProducts}))),g=u.products,j=u.loading,v=u.error;u.page,u.pages;(0,a.useEffect)((function(){n((0,l.tr)(r,s))}),[n,r,s]);var y=g.filter((function(e){return"mobiles"===e.category}));return v&&c.Am.error(v),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(f.Z,{title:"MobilePhones"}),(0,m.jsx)("section",{className:"text-gray-600 body-font bg-gray-50",children:(0,m.jsxs)("div",{className:"container px-5 pt-10 mx-auto",children:[(0,m.jsxs)("div",{className:"flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center ",children:[(0,m.jsx)("h2",{className:"text-xs text-indigo-500 tracking-widest font-medium title-font mb-1",children:"01"}),(0,m.jsx)("h1",{className:"md:text-3xl  text-2xl font-medium title-font text-gray-700",children:(0,m.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:["Mobile Phones ",(0,m.jsx)(x.YqJ,{className:"mx-2",color:"blue"})]})})]}),j?(0,m.jsx)("p",{children:"loading..."}):v?(0,m.jsxs)("h3",{children:[" ",c.Am.error(v)," "]}):(0,m.jsx)("div",{className:"flex flex-wrap -m-4 ",children:0===y.length?(0,m.jsx)("p",{className:"py-10 px-10",children:"Server is not found any Mobile Phone for you :("}):y.map((function(e,t){return(0,m.jsx)("div",{className:"lg:w-1/4 md:w-1/2 p-4 w-full",children:(0,m.jsx)(d.ZP,{className:"onStep",keyframes:h,delay:300,duration:600,cascade:!0,children:(0,m.jsx)(p.Z,{item:e})})},t)}))})]})}),(0,m.jsx)(d.ZP,{className:"onStep",keyframes:h,delay:300,duration:600,cascade:!0,children:(0,m.jsx)(i.Z,{cats:!0})})]})}}}]);
//# sourceMappingURL=343.0b4e01c8.chunk.js.map