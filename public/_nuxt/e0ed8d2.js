(window.webpackJsonp=window.webpackJsonp||[]).push([[363,19],{1256:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(4),r(57),r(40),r(58);var l=r(21),n=r(0),c=(r(5),r(129));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={layout:"admin",middleware:["admin","permission"],meta:{permission:"attribute_value_values.index",strategy:"read"},data:function(){return{attribute_value:"",error:!1}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$repositories.attribute_value_values.show(t.$route.params.id);case 2:r=e.sent,data=r.data,t.attribute_value=data;case 5:case"end":return e.stop()}}),e)})))()},methods:{},mounted:function(){},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)({allActiveLanguages:"General/allActiveLanguages"}))},v=d,m=r(71),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"content-header"},[r("div",{staticClass:"row g-0"},[r("div",{staticClass:"col-sm-12 px-0"},[r("h2",{staticClass:"m-0 text-body bold"},[t._v("\n          "+t._s(this.$t("attribute_value.view_attribute_value"))+"\n        ")])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12 px-0"},[r("ol",{staticClass:"breadcrumb float-sm-right text-body"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:t.localePath("/admin/dashboard")}},[t._v(t._s(this.$t("sidebar.home")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:t.localePath("/admin/attribute_value_values")}},[t._v(t._s(this.$t("sidebar.attribute_value")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active"},[t._v("\n              "+t._s(this.$t("form.view"))+"\n            ")])]),t._v(" "),r("p",{staticClass:"text-body-secondary"},[t._v("\n            "+t._s(this.$t("attribute_value.view_description"))+"\n          ")])])])])]),t._v(" "),r("section",{staticClass:"content"},[t.$fetchState.pending?r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("AdminLoader")],1)])]):r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"card gutter-b border-0"},[r("div",{staticClass:"card-body p-4"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"show-table"},[r("div",{staticClass:"row justify-content-end"},[r("div",{staticClass:"col-6"},[r("label",{staticClass:"label form-label"},[t._v("\n                          "+t._s(this.$t("form.attribute_value.status.label"))+"\n                        ")])]),t._v(" "),r("div",{staticClass:"col-6"},[r("div",{staticClass:"form-switch"},[r("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"flexSwitchCheckChecked",disabled:""},domProps:{checked:t.attribute_value.is_active?"checked":""}})])])])])])]),t._v(" "),r("hr",{staticClass:"text-primary"}),t._v(" "),r("div",{staticClass:"row w-100"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"px-0 pt-3"},[r("h2",{staticClass:"m-0 text-body bold"},[t._v("\n                      "+t._s(t.$t("form.multilanguage"))+"\n                    ")]),t._v(" "),r("p",[r("span",{staticClass:"heebo-light"},[t._v("\n                        "+t._s(t.$t("form.attribute_value.subheading"))+"\n                      ")])])]),t._v(" "),r("div",{staticClass:"d-md-flex"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 px-0"},[r("ul",{staticClass:"nav nav-tabs px-0",attrs:{id:"myTab",role:"tablist"}},t._l(t.allActiveLanguages.languages,(function(e,l){return r("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[r("a",{staticClass:"nav-link",class:0==l?"active":"",attrs:{id:e.code+"-tab","data-bs-toggle":"tab",href:"#"+e.code,role:"tab","aria-controls":e.code,"aria-selected":0==l?"true":"false"}},[t._v(t._s(e.name))])])})),0)])]),t._v(" "),r("div",{staticClass:"row w-100"},[r("div",{staticClass:"col-lg-12 px-0"},[r("div",{},[r("div",{},[r("div",{staticClass:"tab-content p-4",attrs:{id:"myTabContent"}},t._l(t.allActiveLanguages.languages,(function(e,l){return r("div",{staticClass:"tab-pane fade",class:0==l?"active show":"",attrs:{id:e.code,role:"tabpanel","aria-labelledby":e.code+"-tab"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 my-1"},[r("div",{attrs:{role:"group "}},[r("div",{attrs:{role:"group"}},[r("label",{attrs:{for:"input-live form-label"}},[t._v(t._s(t.$t("form.attribute_value.name.label")))]),t._v(" "),r("div",{staticClass:"py-3 px-3 rounded shadow-sm border mt-2 show-input"},[t._v("\n                                          "+t._s(t.attribute_value.nameTranslations[e.code])+"\n                                        ")])])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 my-1"},[r("div",{attrs:{role:"group "}},[r("div",{attrs:{role:"group"}},[r("label",{attrs:{for:"input-live form-label"}},[t._v(t._s(t.$t("form.attribute_value.description.label")))]),t._v(" "),r("div",{staticClass:"py-3 px-3 shadow-sm rounded border mt-2 show-text-area",domProps:{innerHTML:t._s(t.attribute_value.descriptionTranslations[e.code])}})])])])])])})),0)])])])])])])])])])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminLoader:r(661).default})},661:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(4),r(57),r(40),r(58);var l=r(21),n=r(129);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var o={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.c)({allSettings:"allDefaultSettings"}))},d=o,v=r(71),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.allSettings.general_settings&&t.allSettings.general_settings.loader?l("div",{staticClass:"text-center"},[l("img",{attrs:{src:"/backend"+t.allSettings.general_settings.loader.original_media_path,alt:"",width:"135px",height:"135px"}})]):l("div",{staticClass:"text-center"},[l("img",{attrs:{src:r(663),alt:"",width:"135px",height:"135px"}})])}),[],!1,null,null,null);e.default=component.exports},663:function(t,e,r){t.exports=r.p+"img/loader.1aa8404.gif"}}]);