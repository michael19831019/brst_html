(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-318b7fe8"],{"0145":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"archives-container"},[e("div",{staticClass:"archives-content"},[e("div",{staticStyle:{display:"flex","justify-content":"center","font-size":"20px","font-weight":"bold","margin-bottom":"20px"}},[a._v(" 转账单详情 ")]),a._m(0),e("el-form",{ref:"dataForm",staticClass:"form-container",attrs:{"label-width":"100px"}},[e("div",{staticClass:"user-content"},[e("el-row",{attrs:{gutter:24}},[e("el-col",{attrs:{xs:{span:22},sm:{span:22},md:{span:12},lg:{span:8,offset:2},xl:{span:8,offset:4}}},[e("el-form-item",{attrs:{label:"银行编号："}},[a._v(" "+a._s(a.TransferData.code)+" ")])],1),e("el-col",{attrs:{xs:{span:22},sm:{span:22},md:{span:12},lg:{span:8,offset:0},xl:{span:10,offset:0}}},[e("el-form-item",{attrs:{label:"银行名称："}},[a._v(" "+a._s(a.TransferData.title)+" ")])],1),e("el-col",{attrs:{xs:{span:22},sm:{span:22},md:{span:12},lg:{span:8,offset:0},xl:{span:8,offset:0}}},[e("el-form-item",{attrs:{label:"附属银行："}},[a._v(" "+a._s(a.TransferData.bank_id)+" ")])],1),e("el-col",{attrs:{xs:{span:22},sm:{span:22},md:{span:12},lg:{span:8,offset:2},xl:{span:8,offset:4}}},[e("el-form-item",{attrs:{label:"最终金额："}},[a._v(" "+a._s(a.TransferData.Capital)+" ")])],1),e("el-col",{attrs:{xs:{span:22},sm:{span:22},md:{span:12},lg:{span:8},xl:{span:8}}},[e("el-form-item",{attrs:{label:"账单数量："}},[a._v(" "+a._s(a.TransferData.accountnum)+" ")])],1),e("el-col",{attrs:{xs:{span:22},sm:{span:22},md:{span:12},lg:{span:8,offset:2},xl:{span:8,offset:4}}},[e("el-form-item",{attrs:{label:"开始时间："}},[a._v(" "+a._s(a._f("formatDate")(a.TransferData.startdate))+" ")])],1),e("el-col",{attrs:{xs:{span:22},sm:{span:22},md:{span:12},lg:{span:8},xl:{span:8}}},[e("el-form-item",{attrs:{label:"账单数量："}},[e("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{change:a.changeBankInfo},model:{value:a.TransferData.bankcode,callback:function(t){a.$set(a.TransferData,"bankcode",t)},expression:"TransferData.bankcode"}},[e("el-option",{key:"全部",attrs:{label:"全部",value:"0"}}),a._l(a.BankInfoOptions,(function(a){return e("el-option",{key:a.label,attrs:{label:a.label,value:a.value}})}))],2)],1)],1),e("el-col",{attrs:{xs:{span:22},sm:{span:22},md:{span:12},lg:{span:8,offset:2},xl:{span:8,offset:4}}},[e("el-form-item",{attrs:{label:"开始时间："}},[a._v(" "+a._s(a._f("formatDate")(a.TransferData.startdate))+" ")])],1),e("el-col",{attrs:{xs:{span:22},sm:{span:22},md:{span:22},lg:{span:16,offset:2},xl:{span:16,offset:4}}}),e("el-col",{attrs:{xs:{span:22},sm:{span:22},md:{span:12},lg:{span:16,offset:2},xl:{span:16,offset:4}}})],1)],1)]),e("div",[e("router-link",{attrs:{to:"/Transfer/Transfer"}},[e("el-button",[a._v("返回")])],1)],1)],1)])},n=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"main-table-top"},[e("span",[e("i",{staticClass:"el-icon-data-analysis"}),a._v("基本资料")]),e("div",{staticClass:"right-menu"})])}],r=e("b85c"),l=(e("159b"),e("b0c0"),e("5319"),e("ac1f"),e("cf80")),o=e("dc70"),f={name:"TransferDetail",components:{},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{TransferData:{},tempTransferData:{},loading:!1,AnnexData:{},BankInfoOptions:[]}},created:function(){var a=this.$route.params&&this.$route.params.id;this.fetchData(a)},methods:{fetchData:function(a){var t=this;Object(l["c"])(a).then((function(a){var e=a.data;if(t.TransferData=Object.assign({},e),Object(o["a"])().then((function(a){var e=a.data;e.forEach((function(a){t.BankInfoOptions.push({value:a.code,label:a.nickname})}))})),0===t.TransferData.id){var s,n=t.$store.state.tagsView.visitedViews,l=Object(r["a"])(n);try{for(l.s();!(s=l.n()).done;){var f=s.value;"TransferDetail"===f.name&&t.$store.dispatch("tagsView/delView",f).then((function(){t.$router.replace("/Transfer/Transfer")}))}}catch(i){l.e(i)}finally{l.f()}}}))}}},i=f,c=(e("de1a"),e("3b5b"),e("2877")),p=Object(c["a"])(i,s,n,!1,null,"4e25b8dc",null);t["default"]=p.exports},"3b5b":function(a,t,e){"use strict";e("759e")},"759e":function(a,t,e){},9506:function(a,t,e){},cf80:function(a,t,e){"use strict";e.d(t,"c",(function(){return r})),e.d(t,"d",(function(){return l})),e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return f}));var s=e("b775"),n=e("83d6");function r(a){return Object(s["a"])({url:n["apiurl"]+"/transfer/get",method:"get",params:{code:a}})}function l(a){return Object(s["a"])({url:n["apiurl"]+"/transfer/list",method:"get",params:a})}function o(a){return Object(s["a"])({url:n["apiurl"]+"/transfer/AddPlus",method:"post",data:a})}function f(a){return Object(s["a"])({url:n["apiurl"]+"/transfer/again",method:"post",data:a})}},dc70:function(a,t,e){"use strict";e.d(t,"a",(function(){return r}));var s=e("b775"),n=e("83d6");function r(a){return Object(s["a"])({url:n["apiurl"]+"/bank/listall",method:"get",params:a})}},de1a:function(a,t,e){"use strict";e("9506")}}]);