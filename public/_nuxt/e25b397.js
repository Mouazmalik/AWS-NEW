(window.webpackJsonp=window.webpackJsonp||[]).push([[70,44],{664:function(t,e,r){"use strict";r.r(e);var n={props:["rating"],data:function(){return{}}},c=r(71),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"stars",style:{"--rating":t.rating},attrs:{"aria-label":"Rating of this product is 2.3 out of 5."}},[r("span",[t._v("("+t._s(this.rating)+")")])])}),[],!1,null,null,null);e.default=component.exports},726:function(t,e,r){t.exports=r.p+"img/testimonials-img1.a5a1a4a.png"},798:function(t,e,r){"use strict";r.r(e);r(101),r(4);var n={props:["review"],data:function(){return{}},methods:{},computed:{image:function(){if(this.review&&this.review.product&&this.review.product.media){var image=this.review.product.media.find((function(t){return"image"==t.type}));return image||null}return null}}},c=r(71),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card page-background"},[t.image?n("img",{staticClass:"card-img-top rounded-circle border",attrs:{src:"/backend"+t.image.thumbnails.medium.thumbnail,alt:t.image.alt_text}}):n("img",{staticClass:"card-img-top rounded-circle border",attrs:{src:r(726),alt:"alt text"}}),t._v(" "),n("div",{staticClass:"card-body"},[n("h6",{staticClass:"mb-1 text-center"},[t._v(t._s(t.review.product.name))]),t._v(" "),n("div",{staticClass:"rating text-center mb-3 d-flex justify-content-center"},[n("GlobalRating",{attrs:{rating:t.review.rating}})],1),t._v(" "),n("div",{staticClass:"mb-3 description-sec"},[n("i",[t._v(t._s(t.review.description))])]),t._v(" "),n("h6",{staticClass:"mb-0"},[t._v(t._s(t.review.customer.name))]),t._v(" "),n("p",{staticClass:"post-date mb-0 opacity-5"},[t._v(t._s(t.review.created_at))])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalRating:r(664).default})}}]);