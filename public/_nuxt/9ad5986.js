(window.webpackJsonp=window.webpackJsonp||[]).push([[596,34,60,61],{1341:function(t,e,l){"use strict";l.r(e);var n=l(0),c=(l(5),{layout:"vendor",middleware:["vendor"],meta:{permission:"riders.index",strategy:"read"},data:function(){return{options:[{value:"",text:this.$t("select_your_positioning")},{value:"ltr",text:this.$t("select_ltr_positioning")},{value:"rtl",text:this.$t("select_rtl_positioning")}],rider:"",error:!1,url:"/backend"}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var l,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$sellerRepositories.riders.show(t.$route.params.id);case 2:l=e.sent,data=l.data,t.rider=data;case 5:case"end":return e.stop()}}),e)})))()},methods:{},mounted:function(){}}),r=l(71),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return this.$auth.user.store?this.$auth.user.is_active?l("div",[l("div",{staticClass:"content-header"},[l("div",{staticClass:"row g-0"},[l("div",{staticClass:"col-sm-12 px-0"},[l("h2",{staticClass:"m-0 text-body bold"},[t._v("\n          "+t._s(this.$t("form.rider.view_rider"))+"\n        ")])]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-sm-12 px-0"},[l("ol",{staticClass:"breadcrumb float-sm-right text-body"},[l("li",{staticClass:"breadcrumb-item"},[l("nuxt-link",{attrs:{to:t.localePath("/rider/dashboard")}},[t._v(t._s(this.$t("sidebar.home")))])],1),t._v(" "),l("li",{staticClass:"breadcrumb-item"},[l("nuxt-link",{attrs:{to:t.localePath("/seller/riders")}},[t._v(t._s(this.$t("sidebar.rider")))])],1),t._v(" "),l("li",{staticClass:"breadcrumb-item active"},[t._v("\n              "+t._s(this.$t("form.view"))+"\n            ")])]),t._v(" "),l("p",{staticClass:"text-body-secondary"},[t._v("\n            "+t._s(this.$t("form.rider.view_description"))+"\n          ")])])])])]),t._v(" "),l("section",{staticClass:"content"},[t.$fetchState.pending?l("div",[l("AdminViewLoader")],1):l("div",{staticClass:"container"},[l("div",{staticClass:"card gutter-b border-0"},[l("div",{staticClass:"card-body"},[l("div",{staticClass:"row"},[l("div",{staticClass:"show-table px-0 mb-3"},[l("div",{staticClass:"row justify-content-end"},[l("div",{staticClass:"col-3"},[t._v("\n                  "+t._s(this.$t("form.rider.first_name.label"))+"\n                ")]),t._v(" "),l("div",{staticClass:"col-3"},[l("p",[t._v(t._s(t.rider.first_name))])]),t._v(" "),l("div",{staticClass:"col-3"},[t._v("\n                  "+t._s(this.$t("form.rider.last_name.label"))+"\n                ")]),t._v(" "),l("div",{staticClass:"col-3"},[l("p",[t._v(t._s(t.rider.last_name))])]),t._v(" "),l("div",{staticClass:"col-3"},[t._v(t._s(this.$t("form.rider.dob.label")))]),t._v(" "),l("div",{staticClass:"col-3"},[l("p",[t._v(t._s(t.rider.dob_format))])]),t._v(" "),l("div",{staticClass:"col-3"},[t._v("\n                  "+t._s(this.$t("form.rider.phone.label"))+"\n                ")]),t._v(" "),l("div",{staticClass:"col-3"},[l("p",[t._v(t._s(t.rider.phone))])]),t._v(" "),l("div",{staticClass:"col-3"},[t._v("\n                  "+t._s(this.$t("form.rider.address.label"))+"\n                ")]),t._v(" "),l("div",{staticClass:"col-3"},[l("p",[t._v(t._s(t.rider.address))])]),t._v(" "),l("div",{staticClass:"col-3"},[t._v("\n                  "+t._s(this.$t("form.rider.zip_code.label"))+"\n                ")]),t._v(" "),l("div",{staticClass:"col-3"},[l("p",[t._v(t._s(t.rider.zip_code))])]),t._v(" "),l("div",{staticClass:"col-3"},[t._v("\n                  "+t._s(this.$t("form.rider.country.label"))+"\n                ")]),t._v(" "),l("div",{staticClass:"col-3"},[l("p",[t._v(t._s(t.rider.country.name))])]),t._v(" "),l("div",{staticClass:"col-3"},[t._v("\n                  "+t._s(this.$t("form.rider.state.label"))+"\n                ")]),t._v(" "),l("div",{staticClass:"col-3"},[l("p",[t._v(t._s(t.rider.state.name))])]),t._v(" "),l("div",{staticClass:"col-3"},[t._v("\n                  "+t._s(this.$t("form.rider.city.label"))+"\n                ")]),t._v(" "),l("div",{staticClass:"col-3"},[l("p",[t._v(t._s(t.rider.city.name))])]),t._v(" "),l("div",{staticClass:"col-3"},[t._v("\n                  "+t._s(this.$t("form.rider.email.label"))+"\n                ")]),t._v(" "),l("div",{staticClass:"col-3"},[l("p",[t._v(t._s(t.rider.email))])]),t._v(" "),l("div",{staticClass:"col-3"},[t._v("\n                  "+t._s(this.$t("form.rider.gender.label"))+"\n                ")]),t._v(" "),l("div",{staticClass:"col-3"},[l("p",[t._v(t._s(t.rider.gender))])]),t._v(" "),l("div",{staticClass:"col-3"},[l("label",{staticClass:"label form-label pe-4"},[t._v("\n                    "+t._s(this.$t("form.rider.status.label"))+"\n                  ")])]),t._v(" "),l("div",{staticClass:"col-3"},[l("div",{staticClass:"form-switch"},[l("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"flexSwitchCheckChecked",disabled:""},domProps:{checked:t.rider.is_active?"checked":""}})])])])])])])])])])]):l("div",{},[l("SellerShopDeactive")],1):l("div",{},[l("SellerShopSettings")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SellerShopSettings:l(682).default,SellerShopDeactive:l(683).default,AdminViewLoader:l(676).default})},673:function(t,e,l){var content=l(679);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(131).default)("648263e9",content,!0,{sourceMap:!1})},674:function(t,e,l){var content=l(681);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(131).default)("661f7a96",content,!0,{sourceMap:!1})},676:function(t,e,l){"use strict";l.r(e);var n={props:["multilang","multilangImage"]},c=l(71),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container skeletion-effect"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-12"},[l("div",{staticClass:"card gutter-b border-0"},[l("div",{staticClass:"card-body p-4"},[t._m(0),t._v(" "),t.multilang?l("div",[l("hr",{staticClass:"text-primary"}),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-12 py-2"},[l("div",{staticClass:"px-0 pt-3"},[l("h2",{staticClass:"skeletion-animation"}),t._v(" "),l("div",{staticClass:"subheading skeletion-animation"}),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-12 px-0 pt-3 d-flex"},[t._m(1),t._v(" "),l("div",{staticClass:"tab-content p-4",attrs:{id:"myTabContent"}},[l("div",{staticClass:"tab-pane fade active show",attrs:{role:"tabpanel"}},[l("div",{staticClass:"row"},[t.multilangImage?l("div",[t._m(2)]):t._e(),t._v(" "),t._m(3)]),t._v(" "),t._m(4)])])])])])])])]):t._e()])])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-6 my-1"},[l("div",{staticClass:"show-table"},[l("div",{staticClass:"row justify-content-end"},[l("div",{staticClass:"col-6"},[l("div",{staticClass:"label skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"text skeletion-animation"}),t._v(" "),l("div",{staticClass:"text skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"label skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"text skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"label skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"text skeletion-animation"}),t._v(" "),l("div",{staticClass:"text skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"label skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"switch skeletion-animation"})])])])]),t._v(" "),l("div",{staticClass:"col-md-6 my-1"},[l("div",{staticClass:"show-table"},[l("div",{staticClass:"row justify-content-end"},[l("div",{staticClass:"col-6"},[l("div",{staticClass:"label skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"text skeletion-animation"}),t._v(" "),l("div",{staticClass:"text skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"label skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"text skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"label skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"text skeletion-animation"}),t._v(" "),l("div",{staticClass:"text skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"label skeletion-animation"})]),t._v(" "),l("div",{staticClass:"col-6"},[l("div",{staticClass:"switch skeletion-animation"})])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{staticClass:"nav nav-tabs d-inline-block",attrs:{id:"myTab",role:"tablist "}},[l("div",{staticClass:"tabs"}),t._v(" "),l("div",{staticClass:"tabs"}),t._v(" "),l("div",{staticClass:"tabs"})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-md-12 my-1"},[l("div",{attrs:{role:"group"}},[l("div",{staticClass:"label skeletion-animation"}),t._v(" "),l("div",{staticClass:"py-2"},[l("div",{staticClass:"image skeletion-animation"})])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-md-6 my-1"},[l("div",{attrs:{role:"group "}},[l("label",{staticClass:"label skeletion-animation"}),t._v(" "),l("div",{staticClass:"input skeletion-animation"}),t._v(" "),l("div",{staticClass:"subheading skeletion-animation"})])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-12 my-1"},[l("div",{attrs:{role:"group "}},[l("label",{staticClass:"label skeletion-animation"}),t._v(" "),l("div",{staticClass:"textarea skeletion-animation"}),t._v(" "),l("div",{staticClass:"subheading skeletion-animation"})])])])}],!1,null,null,null);e.default=component.exports},678:function(t,e,l){"use strict";l(673)},679:function(t,e,l){var n=l(130)((function(i){return i[1]}));n.push([t.i,".svg-inline--fa.fa-w-16[data-v-7b3f0bbc]{font-size:4rem!important}",""]),n.locals={},t.exports=n},680:function(t,e,l){"use strict";l(674)},681:function(t,e,l){var n=l(130)((function(i){return i[1]}));n.push([t.i,".svg-inline--fa.fa-w-16[data-v-4eaaa628]{font-size:4rem!important}",""]),n.locals={},t.exports=n},682:function(t,e,l){"use strict";l.r(e);var n={},c=(l(678),l(71)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",[l("div",{staticClass:"container"},[l("div",{staticClass:"row mt-5"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"card bg-white p-5"},[l("div",{staticClass:"text-center"},[l("fa",{staticClass:"fs-5 me-2 mb-4",attrs:{icon:["fas","cog"]}}),t._v(" "),l("h2",[t._v(t._s(t.$t("You_have_not_set_your_store_yet")))]),t._v(" "),l("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"/seller/store_settings",type:"button",name:"button"}},[t._v(t._s(t.$t("form.store_settings.store_settings")))])],1)])])])])])}),[],!1,null,"7b3f0bbc",null);e.default=component.exports},683:function(t,e,l){"use strict";l.r(e);var n={},c=(l(680),l(71)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",[l("div",{staticClass:"container"},[l("div",{staticClass:"row mt-5"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"card bg-white p-5"},[l("div",{staticClass:"text-center"},[l("fa",{staticClass:"fs-5 me-2 mb-4 text-danger",attrs:{icon:["fas","ban"]}}),t._v(" "),l("h2",[t._v(t._s(t.$t("your_store_currently_is_in_active_or_under_review")))])],1)])])])])])}),[],!1,null,"4eaaa628",null);e.default=component.exports}}]);