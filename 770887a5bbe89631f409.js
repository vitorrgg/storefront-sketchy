/*! For license information please see 770887a5bbe89631f409.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{420:function(e,t,r){"use strict";r.r(t);r(190),r(7),r(191);var n=r(60),o=r.n(n),c=r(365);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.default=(e={},t="search-engine")=>{const r=document.getElementById(t);if(r){const n=window.storefront&&window.storefront.getScopedSlots,a=new URLSearchParams(window.location.search),i=s(s({},e.props),{},{term:a.get("term"),page:parseInt(a.get("page"),10)||1,brands:a.getAll("brands[]"),categories:a.getAll("categories[]")});["brands","categories"].forEach(e=>{if(r.dataset[e]){try{i[e]=JSON.parse(r.dataset[e])}catch(e){return void console.error(e)}i[e]&&i[e].length<2&&(i["isFixed".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))]=!0),i.defaultSort="sales",i.hasPopularItems=!1}});const{resource:p}=window.document.body.dataset;switch(p){case"brands":case"categories":if(!i[p]||!i[p].length)return void console.error(new Error("Skipping SearchEngine with empty '".concat(p,"' filter")))}new o.a({data:{term:i.term},render(e){const o=this;return e(c.a,{attrs:{id:t},props:s(s({},i),{},{term:o.term}),on:{"update:term"(e){o.term=e}},scopedSlots:"function"==typeof n?n(r,e):void 0})}}).$mount(r)}}}}]);
//# sourceMappingURL=770887a5bbe89631f409.js.map