(window.webpackJsonp=window.webpackJsonp||[]).push([[69,44],{664:function(t,e,n){"use strict";n.r(e);var r={props:["rating"],data:function(){return{}}},c=n(71),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stars",style:{"--rating":t.rating},attrs:{"aria-label":"Rating of this product is 2.3 out of 5."}},[n("span",[t._v("("+t._s(this.rating)+")")])])}),[],!1,null,null,null);e.default=component.exports},728:function(t,e,n){t.exports=n.p+"img/mega-menu-offer-img.5a12092.jpg"},960:function(t,e,n){"use strict";n.r(e);n(43),n(25),n(7),n(57),n(40),n(58);var r=n(0),c=n(21),o=(n(101),n(4),n(5),n(129));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={props:["product"],data:function(){return{wishlist:!1}},methods:d(d({},Object(o.b)({fetchCartItems:"Web/Cart/fetchCartItems",fetchWishlistItems:"Web/Wishlist/fetchWishlistItems"})),{},{addToCart:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.product.is_available){e.next=9;break}if(2!=t.product.product_type){e.next=5;break}t.$router.push("/product/".concat(t.product.slug)),e.next=7;break;case 5:return e.next=7,t.$webService.addCartItem({product_id:t.product.id,quantity:1}).then(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.success){e.next=6;break}return t.$toast.success(n.message),e.next=4,t.fetchCartItems();case 4:e.next=7;break;case 6:t.$toast.error(n.message);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 7:e.next=10;break;case 9:t.$toast.error("Product Not Available Yet");case 10:case"end":return e.stop()}}),e)})))()},addToWishlist:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$auth.loggedIn||!t.$gates.hasRole("customer")){e.next=5;break}return e.next=3,t.$webService.addWishlistItem({product_id:t.product.id,quantity:1}).then(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchWishlistItems();case 2:0==n.success?t.$toast.error(n.data.message):(t.wishlist=!0,t.$toast.success(n.data.message));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:e.next=6;break;case 5:t.$toast.error(t.$t("please_login_first"));case 6:case"end":return e.stop()}}),e)})))()},removeItem:function(){this.$emit("removeItem")}}),computed:{image:function(){if(this.product.media){var image=this.product.media.find((function(t){return"image"==t.type}));return image||null}return null}}},m=_,v=n(71),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"compare-item-wrap rounded overflow-hidden"},[r("div",{staticClass:"compare-item-img p-0"},[r("div",{staticClass:"img-wrap"},[t.image?r("img",{staticClass:"w-100",attrs:{src:"/backend"+t.image.thumbnails.medium.thumbnail,alt:t.image.alt_text}}):r("img",{attrs:{src:n(728)}})]),t._v(" "),r("h5",[r("nuxt-link",{attrs:{to:"/product/"+t.product.slug}},[t._v("\n        "+t._s(t.product.name)+"\n      ")]),t._v(" "),r("GlobalRating",{attrs:{rating:t.product.reviews_average_rating}})],1),t._v(" "),r("div",{staticClass:"icon-wrap d-flex flex-column"},[r("a",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:t.$t("add_to_wishlist")},expression:"{ content: $t('add_to_wishlist') }"}],staticClass:"icon-cont",attrs:{href:"#",onclick:"return false;"},on:{click:function(e){return t.addToWishlist()}}},[r("fa",{class:t.product.is_wishlisted||t.wishlist?"text-danger":"",attrs:{icon:["fas","heart"]}})],1)])]),t._v(" "),r("ul",[r("li",[t.product.flash_sale?r("div",{staticClass:"product-price d-flex align-items-center"},[t._v("\n        "+t._s(t.$t("price"))+":\n        "),r("span",{staticClass:"price"},[t._v("\n          "+t._s(t.product.flash_sale.display_price)+"\n        ")]),t._v(" "),r("span",{staticClass:"actual-price"},[t._v("\n          "+t._s(t.product.display_price)+"\n        ")])]):t.product.special_sale?r("div",{staticClass:"product-price d-flex align-items-center"},[t._v("\n        "+t._s(t.$t("price"))+":\n        "),r("span",{staticClass:"price"},[t._v("\n          "+t._s(t.product.special_sale.display_price)+"\n        ")]),t._v(" "),r("span",{staticClass:"actual-price"},[t._v("\n          "+t._s(t.product.display_price)+"\n        ")])]):r("div",{staticClass:"product-price d-flex align-items-center"},[t.product.attributes.length>0?r("span",[t._v("\n           "+t._s(t.$t("starting_from_price"))+"\n          "),t.product.attributes.length>0?r("span",{staticClass:"price"},[t._v("\n            "+t._s(t.product.starting_from_price)+"\n          ")]):t._e()]):r("span",[r("span",{staticClass:"price"},[t._v("\n            "+t._s(t.product.display_price)+"\n          ")])])])]),t._v(" "),this.product.sku?r("li",[t._v(t._s(t.$t("sku"))+": "+t._s(this.product.sku))]):r("li",[t._v(t._s(t.$t("sku"))+": "+t._s(t.$t("n_a")))]),t._v(" "),r("li",[t._v("\n      "+t._s(t.$t("keywords.manufacturer"))+": "+t._s(this.product.manufacturer.name)+"\n    ")]),t._v(" "),this.product.modal?r("li",[t._v("\n      "+t._s(t.$t("modal"))+": "+t._s(this.product.modal)+"\n    ")]):r("li",[t._v(t._s(t.$t("modal"))+": "+t._s(t.$t("n_a")))]),t._v(" "),this.product.brand?r("li",[t._v("\n      "+t._s(t.$t("brand.label"))+": "+t._s(this.product.brand.name)+"\n    ")]):r("li",[t._v(t._s(t.$t("brand.label"))+": "+t._s(t.$t("n_a")))]),t._v(" "),this.product.vendor?r("li",[t._v("\n      "+t._s(t.$t("keywords.vendor"))+": "+t._s(this.product.vendor.name)+"\n    ")]):r("li",[t._v(t._s(t.$t("vendor"))+": "+t._s(t.$t("n_a")))]),t._v(" "),r("li",[t._v("\n      "+t._s(t.$t("weight"))+": "+t._s(this.product.weight+" "+this.product.unit)+"\n    ")]),t._v(" "),this.product.attributes.length>0?r("li",[t._v("\n      "+t._s(t.$t("attributes"))+"\n      "),t._l(this.product.attributes,(function(e){return r("div",{key:e.id,staticClass:"mb-2"},[r("b",{staticClass:"d-block mb-2"},[t._v(t._s(e.name)+" :")]),t._v(" "),t._l(e.values,(function(n,c){return r("span",{key:n.id,staticClass:"border px-2 py-1 me-1 d-inline-block mb-2"},[t._v(t._s(n.name)+"\n          "+t._s((e.values.length,"")))])}))],2)}))],2):r("li",[t._v(t._s(t.$t("attributes"))+": "+t._s(t.$t("n_a")))])]),t._v(" "),r("div",{staticClass:"vender-btns d-flex justify-content-center align-items-center"},[r("nuxt-link",{attrs:{to:"/product/"+t.product.slug}},[r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:t.$t("explore_more")},expression:"{ content: $t('explore_more') }"}],staticClass:"\n          btn btn-warning\n          rounded\n          fw-bold\n          d-flex\n          align-items-center\n          justify-content-center\n        "},[t._v("\n        "+t._s(t.$t("explore_more"))+"\n      ")])]),t._v(" "),r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:t.$t("add_to_cart")},expression:"{ content: $t('add_to_cart') }"}],staticClass:"\n        btn btn-primary\n        text-white\n        rounded\n        fw-bold\n        d-flex\n        align-items-center\n        justify-content-center\n        ms-3\n      ",on:{click:function(e){return t.addToCart()}}},[r("fa",{staticClass:"me-2",attrs:{icon:["fas","shopping-bag"]}}),t._v("\n      "+t._s(t.$t("add_to_cart"))+"\n    ")],1),t._v(" "),r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:t.$t("remove")},expression:"{ content: $t('remove') }"}],staticClass:"\n        btn btn-danger\n        text-white\n        rounded\n        fw-bold\n        d-flex\n        align-items-center\n        justify-content-center\n        ms-3\n      ",on:{click:function(e){return t.removeItem()}}},[t._v("\n      "+t._s(t.$t("remove"))+"\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalRating:n(664).default})}}]);