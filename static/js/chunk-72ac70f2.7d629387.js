(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72ac70f2"],{3967:function(t,a,s){"use strict";s("95fe")},"95fe":function(t,a,s){},b494:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"archives-container"},[s("div",{staticClass:"archives-content"},[s("div",{staticStyle:{display:"flex","justify-content":"center","font-size":"20px","font-weight":"bold","margin-bottom":"20px"}},[t._v(" 转账单详情 ")]),t._m(0),s("el-form",{ref:"dataForm",staticClass:"form-container",attrs:{"label-width":"100px"}},[s("div",{staticClass:"user-content"},[s("el-row",{attrs:{gutter:24}},[s("el-col",{attrs:{xs:{span:22},sm:{span:22},md:{span:12},lg:{span:8,offset:0},xl:{span:8,offset:4}}},[s("el-form-item",{attrs:{label:"银行编号："}},[t._v(" "+t._s(t.TransferData.code)+" ")])],1),s("el-col",{attrs:{xs:{span:22},sm:{span:22},md:{span:12},lg:{span:8,offset:2},xl:{span:8,offset:4}}},[s("el-form-item",{attrs:{label:"银行名称："}},[t._v(" "+t._s(t.TransferData.title)+" ")])],1),s("el-col",{attrs:{xs:{span:22},sm:{span:22},md:{span:12},lg:{span:8,offset:0},xl:{span:8,offset:4}}},[s("el-form-item",{attrs:{label:"附属银行："}},[t._v(" "+t._s(t.TransferData.bank_id)+" ")])],1),s("el-col",{attrs:{xs:{span:22},sm:{span:22},md:{span:12},lg:{span:8,offset:2},xl:{span:8,offset:4}}},[s("el-form-item",{attrs:{label:"最终金额："}},[t._v(" "+t._s(t.TransferData.Capital)+" ")])],1),s("el-col",{attrs:{xs:{span:22},sm:{span:22},md:{span:12},lg:{span:8,offset:0},xl:{span:8,offset:4}}},[s("el-form-item",{attrs:{label:"账单数量："}},[t._v(" "+t._s(t.TransferData.accountnum)+" ")])],1),s("el-col",{attrs:{xs:{span:22},sm:{span:22},md:{span:12},lg:{span:8,offset:2},xl:{span:8,offset:4}}},[s("el-form-item",{attrs:{label:"开始时间："}},[t._v(" "+t._s(t._f("formatDate")(t.TransferData.startdate))+" ")])],1),s("el-col",{attrs:{xs:{span:22},sm:{span:22},md:{span:12},lg:{span:8,offset:0},xl:{span:8,offset:4}}},[s("el-form-item",{attrs:{label:"开户银行："}},[t._v(" "+t._s(t.TransferData.Transferbank)+" ")])],1),s("el-col",{attrs:{xs:{span:22},sm:{span:22},md:{span:12},lg:{span:8,offset:2},xl:{span:8,offset:4}}},[s("el-form-item",{attrs:{label:"开始时间："}},[t._v(" "+t._s(t._f("formatDate")(t.TransferData.startdate))+" ")])],1),s("el-col",{attrs:{xs:{span:22},sm:{span:22},md:{span:12},lg:{span:8,offset:0},xl:{span:8,offset:4}}},[s("router-link",{attrs:{to:"/Transfer/Transfer"}},[s("el-button",[t._v("返回")])],1)],1),s("el-col",{attrs:{xs:{span:22},sm:{span:22},md:{span:12},lg:{span:8,offset:2},xl:{span:8,offset:4}}},[t._v("2")])],1)],1)])],1)])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"main-table-top"},[s("span",[s("i",{staticClass:"el-icon-data-analysis"}),t._v("基本资料")]),s("div",{staticClass:"right-menu"})])}],r=s("b85c"),f=(s("159b"),s("b0c0"),s("5319"),s("ac1f"),s("cf80")),l=s("dc70"),o={name:"TransferDetailInfo",components:{},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{TransferData:{},tempTransferData:{},loading:!1,AnnexData:{},BankInfoOptions:[]}},created:function(){var t=this.$route.params&&this.$route.params.id;this.fetchData(t)},methods:{fetchData:function(t){var a=this;Object(f["c"])(t).then((function(t){var s=t.data;if(a.TransferData=Object.assign({},s),Object(l["a"])().then((function(t){var s=t.data;s.forEach((function(t){a.BankInfoOptions.push({value:t.code,label:t.nickname})}))})),0===a.TransferData.id){var e,n=a.$store.state.tagsView.visitedViews,f=Object(r["a"])(n);try{for(f.s();!(e=f.n()).done;){var o=e.value;"TransferDetailInfo"===o.name&&a.$store.dispatch("tagsView/delView",o).then((function(){a.$router.replace("/Transfer/Transfer")}))}}catch(i){f.e(i)}finally{f.f()}}}))}}},i=o,c=(s("3967"),s("e8ca"),s("2877")),p=Object(c["a"])(i,e,n,!1,null,"2cdc6af5",null);a["default"]=p.exports},cf80:function(t,a,s){"use strict";s.d(a,"c",(function(){return r})),s.d(a,"d",(function(){return f})),s.d(a,"a",(function(){return l})),s.d(a,"b",(function(){return o}));var e=s("b775"),n=s("83d6");function r(t){return Object(e["a"])({url:n["apiurl"]+"/transfer/get",method:"get",params:{code:t}})}function f(t){return Object(e["a"])({url:n["apiurl"]+"/transfer/list",method:"get",params:t})}function l(t){return Object(e["a"])({url:n["apiurl"]+"/transfer/AddPlus",method:"post",data:t})}function o(t){return Object(e["a"])({url:n["apiurl"]+"/transfer/again",method:"post",data:t})}},dc70:function(t,a,s){"use strict";s.d(a,"a",(function(){return r}));var e=s("b775"),n=s("83d6");function r(t){return Object(e["a"])({url:n["apiurl"]+"/bank/listall",method:"get",params:t})}},e70c:function(t,a,s){},e8ca:function(t,a,s){"use strict";s("e70c")}}]);