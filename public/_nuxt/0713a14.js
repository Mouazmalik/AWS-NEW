(window.webpackJsonp=window.webpackJsonp||[]).push([[492,28],{1348:function(t,e,c){"use strict";c.r(e);c(43),c(25),c(7),c(4),c(57),c(40),c(58);var o=c(21),l=c(0),n=(c(5),c(26),c(47),c(33),c(81),c(129));function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(object);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,c)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={layout:"admin",middleware:["admin","permission"],meta:{permission:"roles.update",strategy:"update"},data:function(){return{cruds:["languages","manufacturers","products","units","attributes","attribute_values","categories","tax_classes","vendors","order_statuses","orders","roles","currencies","coupons","slider_images","static_banners","zones","newsletters","countries","cities","states","tax_rates","parallax_banners","customers","reviews","admins","news_categories","about_us","term_condition","privacy_policy","refund_policy","newses","faqs","addresses","content_pages","coupons","review_statuses","application_banners","splash_screens","application_parallax_banners","application_slider_images","content_application_pages","brands","riders","shipping_methods","payment_methods","contact_forms","reports","sales","payout_requests","rider_payout_requests","live_chat"],settings_index_update:["theme_settings","settings","media_settings","commissions","seo_pages","store_settings","facebook_settings","google_settings","alert_settings","api_protection_settings","social_login_settings","main_settings","inventories","rider_shipping"],other_permissions:[],formData:{permissions:{}},error:!1,checkAllPermissions:!1,isAnyPermissionFalse:!1,checkAllIndexPermissions:!0,checkAllUpdatePermissions:!0,checkAllCreatePermissions:!0,checkAllStatusPermissions:!0,checkAllDeletePermissions:!0}},fetch:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var c,data,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$repositories.roles.show(t.$route.params.id);case 2:for(c=e.sent,data=c.data,i=0;i<data.permissions.length;i++)t.formData.permissions[data.permissions[i].name]=!0;data.permissions.length==5*t.cruds.length+2*t.settings_index_update.length&&(t.checkAllPermissions=!0,t.isAnyPermissionFalse=!1),t.anyCheckBoxClicked();case 7:case"end":return e.stop()}}),e)})))()},methods:m(m({selectAllpermissions:function(){this.checkAllPermissions?this.makeEveryPermissionFalse():this.makeEveryPermissionTrue()},anyCheckBoxClicked:function(t){for(var i=0;i<this.cruds.length;i++)this.formData.permissions["".concat(this.cruds[i],".index")]||(this.isAnyPermissionFalse=!0),this.formData.permissions["".concat(this.cruds[i],".create")]||(this.isAnyPermissionFalse=!0),this.formData.permissions["".concat(this.cruds[i],".update")]||(this.isAnyPermissionFalse=!0),this.formData.permissions["".concat(this.cruds[i],".delete")]||(this.isAnyPermissionFalse=!0),this.formData.permissions["".concat(this.cruds[i],".is_active")]||(this.isAnyPermissionFalse=!0);for(i=0;i<this.settings_index_update.length;i++)this.formData.permissions["".concat(this.settings_index_update[i],".index")]||(this.isAnyPermissionFalse=!0),this.formData.permissions["".concat(this.settings_index_update[i],".update")]||(this.isAnyPermissionFalse=!0);this.isAnyPermissionFalse?(this.checkAllPermissions=!1,this.isAnyPermissionFalse=!1,this.checkColumnsToBeSelected()):this.makeEveryPermissionTrue(),this.$forceUpdate()},makeEveryPermissionTrue:function(){for(var i=0;i<this.cruds.length;i++)this.$set(this.formData.permissions,"".concat(this.cruds[i],".index"),!0),this.$set(this.formData.permissions,"".concat(this.cruds[i],".create"),!0),this.$set(this.formData.permissions,"".concat(this.cruds[i],".update"),!0),this.$set(this.formData.permissions,"".concat(this.cruds[i],".delete"),!0),this.$set(this.formData.permissions,"".concat(this.cruds[i],".is_active"),!0);for(i=0;i<this.settings_index_update.length;i++)this.$set(this.formData.permissions,"".concat(this.settings_index_update[i],".index"),!0),this.$set(this.formData.permissions,"".concat(this.settings_index_update[i],".update"),!0);this.checkAllPermissions=!0,this.checkAllIndexPermissions=!0,this.checkAllUpdatePermissions=!0,this.checkAllCreatePermissions=!0,this.checkAllStatusPermissions=!0,this.checkAllDeletePermissions=!0},makeEveryPermissionFalse:function(){for(var i=0;i<this.cruds.length;i++)this.formData.permissions["".concat(this.cruds[i],".index")]=!1,this.formData.permissions["".concat(this.cruds[i],".create")]=!1,this.formData.permissions["".concat(this.cruds[i],".update")]=!1,this.formData.permissions["".concat(this.cruds[i],".delete")]=!1,this.formData.permissions["".concat(this.cruds[i],".is_active")]=!1;for(i=0;i<this.settings_index_update.length;i++)this.formData.permissions["".concat(this.settings_index_update[i],".index")]=!1,this.formData.permissions["".concat(this.settings_index_update[i],".update")]=!1;this.checkAllPermissions=!1,this.checkAllIndexPermissions=!1,this.checkAllUpdatePermissions=!1,this.checkAllCreatePermissions=!1,this.checkAllStatusPermissions=!1,this.checkAllDeletePermissions=!1},toggleColumnSelect:function(t,e){if(this["checkAll".concat(t,"Permissions")]){for(var i=0;i<this.cruds.length;i++)this.formData.permissions["".concat(this.cruds[i],".").concat(e)]=!0;for(i=0;i<this.settings_index_update.length;i++)this.formData.permissions["".concat(this.settings_index_update[i],".").concat(e)]=!0}else{for(i=0;i<this.cruds.length;i++)this.formData.permissions["".concat(this.cruds[i],".").concat(e)]=!1;for(i=0;i<this.settings_index_update.length;i++)this.formData.permissions["".concat(this.settings_index_update[i],".").concat(e)]=!1}this.anyCheckBoxClicked()},checkColumnsToBeSelected:function(){this.checkAllIndexPermissions=!0,this.checkAllUpdatePermissions=!0,this.checkAllCreatePermissions=!0,this.checkAllStatusPermissions=!0,this.checkAllDeletePermissions=!0;for(var i=0;i<this.cruds.length;i++)this.formData.permissions["".concat(this.cruds[i],".index")]||(this.checkAllIndexPermissions=!1),this.formData.permissions["".concat(this.cruds[i],".create")]||(this.checkAllCreatePermissions=!1),this.formData.permissions["".concat(this.cruds[i],".update")]||(this.checkAllUpdatePermissions=!1),this.formData.permissions["".concat(this.cruds[i],".delete")]||(this.checkAllDeletePermissions=!1),this.formData.permissions["".concat(this.cruds[i],".is_active")]||(this.checkAllStatusPermissions=!1);for(i=0;i<this.settings_index_update.length;i++)this.formData.permissions["".concat(this.settings_index_update[i],".index")]||(this.checkAllIndexPermissions=!1),this.formData.permissions["".concat(this.settings_index_update[i],".update")]||(this.checkAllUpdatePermissions=!1)}},Object(n.b)({updateRoles:"Roles/updateRoles"})),{},{update:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.updateAndContinue();case 2:t.error||t.$router.replace(t.localePath("/admin/roles"));case 3:case"end":return e.stop()}}),e)})))()},updateAndContinue:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.updateRoles({formData:t.formData,id:t.$route.params.id}).then(function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(c){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.response?(t.error=null!==(o=c.response.data.errors)&&void 0!==o?o:c.response.data,t.$toast.error(c.response.data.message)):"fail"==c.state?t.$toast.error(c.message):(t.error=!1,t.$toast.success(c.message));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})))()}}),mounted:function(){},computed:m({},Object(n.c)({allActiveLanguages:"General/allActiveLanguages"}))},h=d,v=c(71),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("div",{staticClass:"content-header"},[c("div",{staticClass:"row g-0"},[c("div",{staticClass:"col-sm-12 px-0"},[c("h2",{staticClass:"m-0 text-body bold"},[t._v("\n          "+t._s(this.$t("form.permission.edit_permission"))+"\n        ")])]),t._v(" "),c("div",{staticClass:"row"},[c("div",{staticClass:"col-sm-12 px-0"},[c("ol",{staticClass:"breadcrumb float-sm-right text-body"},[c("li",{staticClass:"breadcrumb-item"},[c("nuxt-link",{attrs:{to:t.localePath("/admin/dashboard")}},[t._v(t._s(this.$t("sidebar.home")))])],1),t._v(" "),c("li",{staticClass:"breadcrumb-item"},[c("nuxt-link",{attrs:{to:t.localePath("/admin/roles")}},[t._v(t._s(this.$t("sidebar.role")))])],1),t._v(" "),c("li",{staticClass:"breadcrumb-item"},[c("nuxt-link",{attrs:{to:"#"}},[t._v(t._s(this.$t("sidebar.permission")))])],1),t._v(" "),c("li",{staticClass:"breadcrumb-item active"},[t._v("\n              "+t._s(this.$t("form.edit"))+"\n            ")])]),t._v(" "),c("p",{staticClass:"text-body-secondary"},[t._v("\n            "+t._s(this.$t("permission.index_description"))+"\n          ")])])])])]),t._v(" "),c("section",{staticClass:"content pb-5"},[t.$fetchState.pending?c("div",[c("AdminPermissionTable")],1):c("div",{staticClass:"container"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-lg-12"},[c("div",{staticClass:"card gutter-b border-0"},[c("div",{staticClass:"card-body px-0"},[c("div",{staticClass:"table-responsive permission-table"},[c("table",{staticClass:"table table-striped"},[c("thead",[c("tr",{staticClass:"px-3"},[c("th",{attrs:{rowspan:"2"}},[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.checkAllPermissions,expression:"checkAllPermissions"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck6"},domProps:{checked:Array.isArray(t.checkAllPermissions)?t._i(t.checkAllPermissions,null)>-1:t.checkAllPermissions},on:{click:t.selectAllpermissions,change:function(e){var c=t.checkAllPermissions,o=e.target,l=!!o.checked;if(Array.isArray(c)){var n=t._i(c,null);o.checked?n<0&&(t.checkAllPermissions=c.concat([null])):n>-1&&(t.checkAllPermissions=c.slice(0,n).concat(c.slice(n+1)))}else t.checkAllPermissions=l}}}),t._v(" "),c("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck6"}},[t._v("\n                              "+t._s(t.$t("select_all")))])])])]),t._v(" "),c("th",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.checkAllIndexPermissions,expression:"checkAllIndexPermissions"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"},domProps:{checked:Array.isArray(t.checkAllIndexPermissions)?t._i(t.checkAllIndexPermissions,null)>-1:t.checkAllIndexPermissions},on:{change:[function(e){var c=t.checkAllIndexPermissions,o=e.target,l=!!o.checked;if(Array.isArray(c)){var n=t._i(c,null);o.checked?n<0&&(t.checkAllIndexPermissions=c.concat([null])):n>-1&&(t.checkAllIndexPermissions=c.slice(0,n).concat(c.slice(n+1)))}else t.checkAllIndexPermissions=l},function(e){return t.toggleColumnSelect("Index","index")}]}}),t._v(" "),c("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}})])])]),t._v(" "),c("th",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.checkAllCreatePermissions,expression:"checkAllCreatePermissions"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck2"},domProps:{checked:Array.isArray(t.checkAllCreatePermissions)?t._i(t.checkAllCreatePermissions,null)>-1:t.checkAllCreatePermissions},on:{change:[function(e){var c=t.checkAllCreatePermissions,o=e.target,l=!!o.checked;if(Array.isArray(c)){var n=t._i(c,null);o.checked?n<0&&(t.checkAllCreatePermissions=c.concat([null])):n>-1&&(t.checkAllCreatePermissions=c.slice(0,n).concat(c.slice(n+1)))}else t.checkAllCreatePermissions=l},function(e){return t.toggleColumnSelect("Create","create")}]}}),t._v(" "),c("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck2"}})])])]),t._v(" "),c("th",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.checkAllUpdatePermissions,expression:"checkAllUpdatePermissions"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck3"},domProps:{checked:Array.isArray(t.checkAllUpdatePermissions)?t._i(t.checkAllUpdatePermissions,null)>-1:t.checkAllUpdatePermissions},on:{change:[function(e){var c=t.checkAllUpdatePermissions,o=e.target,l=!!o.checked;if(Array.isArray(c)){var n=t._i(c,null);o.checked?n<0&&(t.checkAllUpdatePermissions=c.concat([null])):n>-1&&(t.checkAllUpdatePermissions=c.slice(0,n).concat(c.slice(n+1)))}else t.checkAllUpdatePermissions=l},function(e){return t.toggleColumnSelect("Update","update")}]}}),t._v(" "),c("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck3"}})])])]),t._v(" "),c("th",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.checkAllDeletePermissions,expression:"checkAllDeletePermissions"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck4"},domProps:{checked:Array.isArray(t.checkAllDeletePermissions)?t._i(t.checkAllDeletePermissions,null)>-1:t.checkAllDeletePermissions},on:{change:[function(e){var c=t.checkAllDeletePermissions,o=e.target,l=!!o.checked;if(Array.isArray(c)){var n=t._i(c,null);o.checked?n<0&&(t.checkAllDeletePermissions=c.concat([null])):n>-1&&(t.checkAllDeletePermissions=c.slice(0,n).concat(c.slice(n+1)))}else t.checkAllDeletePermissions=l},function(e){return t.toggleColumnSelect("Delete","delete")}]}}),t._v(" "),c("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck4"}})])])]),t._v(" "),c("th",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.checkAllStatusPermissions,expression:"checkAllStatusPermissions"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck5"},domProps:{checked:Array.isArray(t.checkAllStatusPermissions)?t._i(t.checkAllStatusPermissions,null)>-1:t.checkAllStatusPermissions},on:{change:[function(e){var c=t.checkAllStatusPermissions,o=e.target,l=!!o.checked;if(Array.isArray(c)){var n=t._i(c,null);o.checked?n<0&&(t.checkAllStatusPermissions=c.concat([null])):n>-1&&(t.checkAllStatusPermissions=c.slice(0,n).concat(c.slice(n+1)))}else t.checkAllStatusPermissions=l},function(e){return t.toggleColumnSelect("Status","is_active")}]}}),t._v(" "),c("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck5"}})])])])]),t._v(" "),t._m(0)]),t._v(" "),c("tbody",[t._l(t.cruds,(function(e,o){return c("tr",{key:o},[c("th",{attrs:{scope:"row"}},[t._v(t._s(e))]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.permissions[e+".index"],expression:"formData.permissions[crud + '.index']"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"+e+".index"},domProps:{checked:Array.isArray(t.formData.permissions[e+".index"])?t._i(t.formData.permissions[e+".index"],null)>-1:t.formData.permissions[e+".index"]},on:{change:[function(c){var o=t.formData.permissions[e+".index"],l=c.target,n=!!l.checked;if(Array.isArray(o)){var r=t._i(o,null);l.checked?r<0&&t.$set(t.formData.permissions,e+".index",o.concat([null])):r>-1&&t.$set(t.formData.permissions,e+".index",o.slice(0,r).concat(o.slice(r+1)))}else t.$set(t.formData.permissions,e+".index",n)},t.anyCheckBoxClicked]}}),t._v(" "),c("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"+e+".index"}})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.permissions[e+".create"],expression:"formData.permissions[crud + '.create']"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"+e+".create"},domProps:{checked:Array.isArray(t.formData.permissions[e+".create"])?t._i(t.formData.permissions[e+".create"],null)>-1:t.formData.permissions[e+".create"]},on:{change:[function(c){var o=t.formData.permissions[e+".create"],l=c.target,n=!!l.checked;if(Array.isArray(o)){var r=t._i(o,null);l.checked?r<0&&t.$set(t.formData.permissions,e+".create",o.concat([null])):r>-1&&t.$set(t.formData.permissions,e+".create",o.slice(0,r).concat(o.slice(r+1)))}else t.$set(t.formData.permissions,e+".create",n)},t.anyCheckBoxClicked]}}),t._v(" "),c("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"+e+".create"}})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.permissions[e+".update"],expression:"formData.permissions[crud + '.update']"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"+e+".update"},domProps:{checked:Array.isArray(t.formData.permissions[e+".update"])?t._i(t.formData.permissions[e+".update"],null)>-1:t.formData.permissions[e+".update"]},on:{change:[function(c){var o=t.formData.permissions[e+".update"],l=c.target,n=!!l.checked;if(Array.isArray(o)){var r=t._i(o,null);l.checked?r<0&&t.$set(t.formData.permissions,e+".update",o.concat([null])):r>-1&&t.$set(t.formData.permissions,e+".update",o.slice(0,r).concat(o.slice(r+1)))}else t.$set(t.formData.permissions,e+".update",n)},t.anyCheckBoxClicked]}}),t._v(" "),c("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"+e+".update"}})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.permissions[e+".delete"],expression:"formData.permissions[crud + '.delete']"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"+e+".delete"},domProps:{checked:Array.isArray(t.formData.permissions[e+".delete"])?t._i(t.formData.permissions[e+".delete"],null)>-1:t.formData.permissions[e+".delete"]},on:{change:[function(c){var o=t.formData.permissions[e+".delete"],l=c.target,n=!!l.checked;if(Array.isArray(o)){var r=t._i(o,null);l.checked?r<0&&t.$set(t.formData.permissions,e+".delete",o.concat([null])):r>-1&&t.$set(t.formData.permissions,e+".delete",o.slice(0,r).concat(o.slice(r+1)))}else t.$set(t.formData.permissions,e+".delete",n)},t.anyCheckBoxClicked]}}),t._v(" "),c("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"+e+".delete"}})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.permissions[e+".is_active"],expression:"\n                                formData.permissions[crud + '.is_active']\n                              "}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"+e+".is_active"},domProps:{checked:Array.isArray(t.formData.permissions[e+".is_active"])?t._i(t.formData.permissions[e+".is_active"],null)>-1:t.formData.permissions[e+".is_active"]},on:{change:[function(c){var o=t.formData.permissions[e+".is_active"],l=c.target,n=!!l.checked;if(Array.isArray(o)){var r=t._i(o,null);l.checked?r<0&&t.$set(t.formData.permissions,e+".is_active",o.concat([null])):r>-1&&t.$set(t.formData.permissions,e+".is_active",o.slice(0,r).concat(o.slice(r+1)))}else t.$set(t.formData.permissions,e+".is_active",n)},t.anyCheckBoxClicked]}}),t._v(" "),c("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"+e+".is_active"}})])])])])})),t._v(" "),t._l(t.settings_index_update,(function(e){return c("tr",{key:e},[c("th",{attrs:{scope:"row"}},[t._v(t._s(e))]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.permissions[e+".index"],expression:"formData.permissions[set + '.index']"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"+e+".index"},domProps:{checked:Array.isArray(t.formData.permissions[e+".index"])?t._i(t.formData.permissions[e+".index"],null)>-1:t.formData.permissions[e+".index"]},on:{change:[function(c){var o=t.formData.permissions[e+".index"],l=c.target,n=!!l.checked;if(Array.isArray(o)){var r=t._i(o,null);l.checked?r<0&&t.$set(t.formData.permissions,e+".index",o.concat([null])):r>-1&&t.$set(t.formData.permissions,e+".index",o.slice(0,r).concat(o.slice(r+1)))}else t.$set(t.formData.permissions,e+".index",n)},t.anyCheckBoxClicked]}}),t._v(" "),c("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"+e+".index"}})])])]),t._v(" "),c("td"),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.permissions[e+".update"],expression:"formData.permissions[set + '.update']"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"+e+".update"},domProps:{checked:Array.isArray(t.formData.permissions[e+".update"])?t._i(t.formData.permissions[e+".update"],null)>-1:t.formData.permissions[e+".update"]},on:{change:[function(c){var o=t.formData.permissions[e+".update"],l=c.target,n=!!l.checked;if(Array.isArray(o)){var r=t._i(o,null);l.checked?r<0&&t.$set(t.formData.permissions,e+".update",o.concat([null])):r>-1&&t.$set(t.formData.permissions,e+".update",o.slice(0,r).concat(o.slice(r+1)))}else t.$set(t.formData.permissions,e+".update",n)},t.anyCheckBoxClicked]}}),t._v(" "),c("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"+e+".update"}})])])]),t._v(" "),c("td"),t._v(" "),c("td")])}))],2)])])])])])]),t._v(" "),c("div",{staticClass:"row"},[c("div",{staticClass:"col-md-12 px-4 text-center text-md-end"},[c("button",{staticClass:"btn btn-secondary mb-3 px-3 py-2",attrs:{type:"button",name:"button"},on:{click:t.update}},[t._v("\n            "+t._s(this.$t("form.update"))+"\n          ")]),t._v(" "),c("button",{staticClass:"btn btn-success mb-3 px-3 py-2",attrs:{type:"button",name:"button"},on:{click:t.updateAndContinue}},[t._v("\n            "+t._s(this.$t("form.update_and_continue"))+"\n          ")])])])])])])}),[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("tr",{staticClass:"border-0"},[c("th",{staticClass:"pt-0"},[t._v("Show")]),t._v(" "),c("th",{staticClass:"pt-0"},[t._v("Create")]),t._v(" "),c("th",{staticClass:"pt-0"},[t._v("Update")]),t._v(" "),c("th",{staticClass:"pt-0"},[t._v("Delete")]),t._v(" "),c("th",{staticClass:"pt-0"},[t._v("Change Status")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminPermissionTable:c(926).default})},926:function(t,e,c){"use strict";c.r(e);var o={},l=c(71),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"container skeletion-effect"},[c("div",{staticClass:"row g-0"},[c("div",{staticClass:"col-lg-12"},[c("div",{staticClass:"card gutter-b border-0"},[c("div",{staticClass:"card-body px-0 py-3"},[c("div",{staticClass:"table-responsive permission-table"},[c("table",{staticClass:"table table-striped"},[c("thead",[c("tr",{staticClass:"px-3"},[c("th",{attrs:{rowspan:"2"}},[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check d-flex"},[c("div",{staticClass:"checkbox me-4 skeletion-animation"}),t._v(" "),c("div",{staticClass:"label skeletion-animation"})])])]),t._v(" "),c("th",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("th",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("th",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("th",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("th",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])])]),t._v(" "),c("tr",{staticClass:"border-0"},[c("th",{staticClass:"pt-0"},[c("div",{staticClass:"label skeletion-animation"})]),t._v(" "),c("th",{staticClass:"pt-0"},[c("div",{staticClass:"label skeletion-animation"})]),t._v(" "),c("th",{staticClass:"pt-0"},[c("div",{staticClass:"label skeletion-animation"})]),t._v(" "),c("th",{staticClass:"pt-0"},[c("div",{staticClass:"label skeletion-animation"})]),t._v(" "),c("th",{staticClass:"pt-0"},[c("div",{staticClass:"label skeletion-animation"})])])]),t._v(" "),c("tbody",[c("tr",[c("th",{attrs:{scope:"row"}},[c("div",{staticClass:"label skeletion-animation"})]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])])]),t._v(" "),c("tr",[c("th",{attrs:{scope:"row"}},[c("div",{staticClass:"label skeletion-animation"})]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])])]),t._v(" "),c("tr",[c("th",{attrs:{scope:"row"}},[c("div",{staticClass:"label skeletion-animation"})]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])])]),t._v(" "),c("tr",[c("th",{attrs:{scope:"row"}},[c("div",{staticClass:"label skeletion-animation"})]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])])]),t._v(" "),c("tr",[c("th",{attrs:{scope:"row"}},[c("div",{staticClass:"label skeletion-animation"})]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])])]),t._v(" "),c("tr",[c("th",{attrs:{scope:"row"}},[c("div",{staticClass:"label skeletion-animation"})]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])])]),t._v(" "),c("tr",[c("th",{attrs:{scope:"row"}},[c("div",{staticClass:"label skeletion-animation"})]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])])]),t._v(" "),c("tr",[c("th",{attrs:{scope:"row"}},[c("div",{staticClass:"label skeletion-animation"})]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])])]),t._v(" "),c("tr",[c("th",{attrs:{scope:"row"}},[c("div",{staticClass:"label skeletion-animation"})]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])])]),t._v(" "),c("tr",[c("th",{attrs:{scope:"row"}},[c("div",{staticClass:"label skeletion-animation"})]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])])]),t._v(" "),c("tr",[c("th",{attrs:{scope:"row"}},[c("div",{staticClass:"label skeletion-animation"})]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])]),t._v(" "),c("td",[c("div",{staticClass:"col-sm-6"},[c("div",{staticClass:"form-check"},[c("div",{staticClass:"checkbox skeletion-animation"})])])])])])])])])]),t._v(" "),c("div",{staticClass:"row"},[c("div",{staticClass:"col-md-12 d-flex justify-content-end px-4"},[c("div",{staticClass:"button-add skeletion-animation"}),t._v(" "),c("div",{staticClass:"button-continue skeletion-animation"})])])])])])}],!1,null,null,null);e.default=component.exports}}]);