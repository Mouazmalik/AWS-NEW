(window.webpackJsonp=window.webpackJsonp||[]).push([[264,19,44,74,262,282],{1414:function(t,e,r){"use strict";r.r(e);var n=r(0),c=(r(5),{props:["allVendorsTrendingProducts"],fetch:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{},computed:{},data:function(){return{settings:{infinite:!0,slidesToShow:4,speed:500,rows:2,slidesPerRow:1,responsive:[{breakpoint:991,settings:{slidesToShow:3,arrows:!1}},{breakpoint:767,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}}}}),o=r(71),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$fetchState.pending?r("section",{staticClass:"upcoming-items skeletion-effect"},[r("WebsiteSkeletonTemplate1Upcoming")],1):t.$fetchState.error?r("section",{staticClass:"featured-items"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("AdminLoader")],1)])]):t.allVendorsTrendingProducts&&t.allVendorsTrendingProducts.length>0?r("section",{staticClass:"upcoming-items"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("h2",{staticClass:"section-heading"},[t._v(t._s(this.$t("web.home.trending_items.heading.text1"))),r("span",[t._v(t._s(this.$t("web.home.trending_items.heading.text2")))])]),t._v(" "),r("p",{staticClass:"section-subheading"},[t._v(t._s(this.$t("web.home.trending_items.description")))]),t._v(" "),r("VueSlickCarousel",t._b({},"VueSlickCarousel",t.settings,!1),t._l(t.allVendorsTrendingProducts,(function(t){return r("div",{key:t.id},[r("Template1NewArrivalProductCard",{attrs:{product:t}})],1)})),0)],1)])])]):r("section")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminLoader:r(661).default,Template1NewArrivalProductCard:r(722).default})},661:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(4),r(57),r(40),r(58);var n=r(21),c=r(129);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)({allSettings:"allDefaultSettings"}))},d=l,f=r(71),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.allSettings.general_settings&&t.allSettings.general_settings.loader?n("div",{staticClass:"text-center"},[n("img",{attrs:{src:"/backend"+t.allSettings.general_settings.loader.original_media_path,alt:"",width:"135px",height:"135px"}})]):n("div",{staticClass:"text-center"},[n("img",{attrs:{src:r(663),alt:"",width:"135px",height:"135px"}})])}),[],!1,null,null,null);e.default=component.exports},662:function(t,e,r){t.exports=r.p+"img/defult-product-img.e4aa9fc.png"},663:function(t,e,r){t.exports=r.p+"img/loader.1aa8404.gif"},664:function(t,e,r){"use strict";r.r(e);var n={props:["rating"],data:function(){return{}}},c=r(71),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"stars",style:{"--rating":t.rating},attrs:{"aria-label":"Rating of this product is 2.3 out of 5."}},[r("span",[t._v("("+t._s(this.rating)+")")])])}),[],!1,null,null,null);e.default=component.exports},722:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(57),r(40),r(58);var n=r(0),c=r(21),o=(r(101),r(4),r(5),r(129));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={props:["product"],data:function(){return{wishlist:!1}},mounted:function(){},methods:d(d({},Object(o.b)({fetchCartItems:"Web/Cart/fetchCartItems",fetchWishlistItems:"Web/Wishlist/fetchWishlistItems"})),{},{addToCart:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.product.is_available){e.next=9;break}if(2!=t.product.product_type){e.next=5;break}t.$router.push("/product/".concat(t.product.slug)),e.next=7;break;case 5:return e.next=7,t.$webService.addCartItem({product_id:t.product.id,quantity:1}).then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.success){e.next=6;break}return t.$toast.success(r.message),e.next=4,t.fetchCartItems();case 4:e.next=7;break;case 6:t.$toast.error(r.message);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 7:e.next=10;break;case 9:t.$toast.error(t.$t("product_not_available"));case 10:case"end":return e.stop()}}),e)})))()},addToWishlist:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$auth.loggedIn||!t.$gates.hasRole("customer")){e.next=5;break}return e.next=3,t.$webService.addWishlistItem({product_id:t.product.id,quantity:1}).then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchWishlistItems();case 2:0==r.success?t.$toast.error(r.data.message):(t.wishlist=!0,t.$toast.success(r.data.message));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:e.next=6;break;case 5:t.$toast.error(t.$t("please_login_first"));case 6:case"end":return e.stop()}}),e)})))()}}),computed:{image:function(){if(this.product.media){var image=this.product.media.find((function(t){return"image"==t.type}));return image||null}return null}}},m=f,h=r(71),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card overflow-hidden"},[n("nuxt-link",{attrs:{to:"/product/"+t.product.slug}},[n("div",{staticClass:"row g-0 align-items-center"},[n("div",{staticClass:"col-6 pe-3 h-100"},[n("div",{staticClass:"img-wrap"},[t.image?n("img",{staticClass:"w-sm-100 img-fluid",attrs:{src:"/backend"+t.image.thumbnails.small.thumbnail,alt:t.image.alt_text}}):n("img",{staticClass:"w-sm-100 img-fluid",attrs:{src:r(662),alt:"..."}})])]),t._v(" "),n("div",{staticClass:"col-6 h-100 d-flex align-items-center"},[n("div",{staticClass:"card-body ps-0 py-3"},[n("h6",[t._v("\n                  "+t._s(t.product.name)+"\n                ")]),t._v(" "),t.product.flash_sale?n("div",{staticClass:"product-price d-flex align-items-center mb-1"},[n("span",{staticClass:"price"},[t._v("\n                    "+t._s(t.product.flash_sale.display_price)+"\n                  ")]),t._v(" "),n("span",{staticClass:"actual-price"},[t._v("\n                    "+t._s(t.product.display_price)+"\n                  ")])]):t.product.special_sale?n("div",{staticClass:"product-price d-flex align-items-center mb-1"},[n("span",{staticClass:"price"},[t._v("\n                    "+t._s(t.product.special_sale.display_price)+"\n                  ")]),t._v(" "),n("span",{staticClass:"actual-price"},[t._v("\n                    "+t._s(t.product.display_price)+"\n                  ")])]):n("div",{staticClass:"product-price d-flex align-items-center mb-1"},[t.product.attributes&&t.product.attributes.length>0?n("span",[t._v("\n                      "+t._s(t.$t("starting_from_price"))+"\n                  "),t.product.attributes&&t.product.attributes.length>0?n("span",{staticClass:"price"},[t._v("\n                  "+t._s(t.product.starting_from_price)+"\n                  ")]):t._e()]):n("span",[n("span",{staticClass:"price"},[t._v("\n                  "+t._s(t.product.display_price)+"\n                  ")])])]),t._v(" "),n("div",{staticClass:"icons d-flex flex-row align-items-center mb-1"},[n("i",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:t.$t("add_to_wishlist")},expression:"{ content: $t('add_to_wishlist') }"}],staticClass:"list-icon",attrs:{onclick:"return false;"},on:{click:function(e){return t.addToWishlist()}}},[n("fa",{class:t.product.is_wishlisted||t.wishlist?"text-danger":"",attrs:{icon:["fas","heart"]}})],1),t._v(" "),n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:t.$t("add_to_cart")},expression:"{ content: $t('add_to_cart') }"}],staticClass:"list-icon text-body border-0 bg-transparent",attrs:{onclick:"return false;"},on:{click:t.addToCart}},[n("fa",{attrs:{icon:["fas","shopping-bag"]}})],1)]),t._v(" "),n("div",{staticClass:"rating"},[n("GlobalRating",{attrs:{rating:t.product.reviews_average_rating}})],1),t._v(" "),t._l(t.product.tags,(function(e,r){return n("span",{key:r,staticClass:"badge me-1",class:r%2==0?"bg-primary":"bg-danger"},[t._v(t._s(e))])}))],2)])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalRating:r(664).default})}}]);