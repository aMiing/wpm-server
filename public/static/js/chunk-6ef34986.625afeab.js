(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ef34986"],{"24bd":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"table-container"},[r("vab-query-form",[r("vab-query-form-left-panel",[r("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:e.handleAdd}},[e._v(" 添加 ")]),r("el-button",{attrs:{icon:"el-icon-delete",type:"danger"},on:{click:e.handleDelete}},[e._v(" 删除 ")])],1),r("vab-query-form-right-panel",[r("el-form",{ref:"form",attrs:{model:e.queryForm,inline:!0},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",[r("el-input",{attrs:{placeholder:"输入名称或编号搜索",clearable:""},on:{clear:e.clearSearchKey},model:{value:e.queryForm.title,callback:function(t){e.$set(e.queryForm,"title",t)},expression:"queryForm.title"}})],1),r("el-form-item",[r("el-button",{attrs:{icon:"el-icon-search",type:"primary","native-type":"submit"},on:{click:e.handleQuery}},[e._v(" 查询 ")])],1)],1)],1)],1),r("div",{staticClass:"checkbox-content type-select"},[r("span",[e._v("按类型筛选：")]),e._l(e.queryForm.filtType,(function(t,o){return r("el-checkbox",{key:o,attrs:{label:t.label,border:""},model:{value:t.select,callback:function(r){e.$set(t,"select",r)},expression:"type.select"}})})),r("el-button",{staticClass:"select-all",attrs:{type:"text"},on:{click:e.selectAllTypes}},[e._v("反选")])],2),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"tableSort",attrs:{data:e.list,"element-loading-text":e.elementLoadingText,height:e.height},on:{"selection-change":e.setSelectRows,"sort-change":e.tableSortChange}},[r("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"selection",width:"55"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"编号",prop:"uuid",width:"240"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"name",label:"名称"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"price",label:"单价"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"库存",prop:"stock",sortable:"",width:"80"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"生产商",prop:"author"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.row;return[r("el-tag",{attrs:{type:e._f("statusFilter")(o.online)}},[e._v(" "+e._s(e.handleStatusText(o.online))+" ")])]}}])}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"所属类别",prop:"type",sortable:"","sort-by":"type"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"录入时间",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.row;return[r("span",[e._v(e._s(e._f("timeFilter")(o.createTime)))])]}}])}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"操作",width:"180px"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.row;return[r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleEdit(o)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleOffOrOn(o)}}},[e._v(e._s(1===o.online?"下架":"上架"))]),r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleDelete(o)}}},[e._v("删除")])]}}])})],1),r("el-pagination",{attrs:{background:e.background,"current-page":e.queryForm.pageNo,layout:e.layout,"page-size":e.queryForm.pageSize,total:e.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}}),r("table-edit",{ref:"edit"})],1)},a=[],n=r("1da1"),l=r("5530"),s=(r("4160"),r("159b"),r("caad"),r("2532"),r("a15b"),r("d81d"),r("4795"),r("96cf"),r("ad8f")),i=r("8200"),c=r("f121"),u=r("2f62"),d={name:"ComprehensiveTable",components:{TableEdit:i["default"]},filters:{statusFilter:function(e){return 1===e?"success":"info"},timeFilter:function(e){return e}},data:function(){return{imgShow:!0,imageList:[],listLoading:!0,layout:"total, sizes, prev, pager, next, jumper",background:!0,selectRows:"",elementLoadingText:"正在加载...",queryForm:{pageNo:1,pageSize:20,title:"",filtType:[{label:"化妆品",select:!0},{label:"电子产品",select:!0}]}}},computed:Object(l["a"])(Object(l["a"])({},Object(u["c"])({list:"goods/getFiltList",total:"goods/getTotal",allTypes:"goods/getAllTypes"})),{},{height:function(){return this.$baseTableHeight()}}),watch:{allTypes:function(e){this.queryForm.filtType=e},queryForm:{handler:function(e){this.getFiltData(e)},deep:!0}},created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchData();case 2:case"end":return t.stop()}}),t)})))()},methods:Object(l["a"])(Object(l["a"])(Object(l["a"])({},Object(u["d"])({addCartItem:"cart/addCartItem",getFiltData:"goods/getFiltData",updateAllTypes:"goods/updateAllTypes"})),Object(u["b"])({setGoodsList:"goods/setGoodsList",delGoodsList:"goods/delGoodsList"})),{},{handleStatusText:function(e){return 1===e?"在售":"下架"},tableSortChange:function(){var e=[];this.$refs.tableSort.tableData.forEach((function(t,r){e.push(t.img)})),this.imageList=e},setSelectRows:function(e){this.selectRows=e},handleAdd:function(){this.$refs["edit"].showEdit()},handleEdit:function(e){this.$refs["edit"].showEdit(e)},handleOffOrOn:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var o,a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.online=1===e.online?2:1,r.next=3,Object(s["doEdit"])(e,"edit");case 3:o=r.sent,a=o.msg,n=o.code,!c["successCode"].includes(n)&&(e.online=1===e.online?2:1),t.$baseMessage(a,"success");case 8:case"end":return r.stop()}}),r)})))()},handleDelete:function(e){var t=this;if(e.uuid)this.$baseConfirm("你确定要删除当前项吗",null,Object(n["a"])(regeneratorRuntime.mark((function r(){var o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(s["doDelete"])({uuid:e.uuid});case 2:return o=r.sent,a=o.msg,r.next=6,t.delGoodsList({uuid:e.uuid});case 6:t.updateAllTypes(),t.$baseMessage(a,"success");case 8:case"end":return r.stop()}}),r)}))));else{if(!(this.selectRows.length>0))return this.$baseMessage("未选中任何行","error"),!1;var r=this.selectRows.map((function(e){return e.uuid})).join(",");this.$baseConfirm("你确定要删除选中项吗",null,Object(n["a"])(regeneratorRuntime.mark((function e(){var o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["doDelete"])({uuid:r});case 2:return o=e.sent,a=o.msg,e.next=6,t.delGoodsList({uuid:r});case 6:t.updateAllTypes(),t.$baseMessage(a,"success");case 8:case"end":return e.stop()}}),e)}))))}},clearSearchKey:function(){this.handleQuery()},handleSizeChange:function(e){this.queryForm.pageSize=e},handleCurrentChange:function(e){this.queryForm.pageNo=e},handleQuery:function(){this.queryForm.pageNo=1},fetchData:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.listLoading=!0,t.next=3,e.setGoodsList();case 3:r=[],e.list.forEach((function(e,t){r.push(e.img)})),e.imageList=r,setTimeout((function(){e.listLoading=!1}),500);case 7:case"end":return t.stop()}}),t)})))()},selectAllTypes:function(){this.queryForm.filtType=this.queryForm.filtType.map((function(e){return Object.assign(e,{select:!e.select})}))}})},f=d,p=(r("d0c9"),r("2877")),m=Object(p["a"])(f,o,a,!1,null,null,null);t["default"]=m.exports},"321d":function(e,t,r){e.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#2f3447"}},8200:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"edit"==e.mode?"编辑":"添加",visible:e.dialogFormVisible,width:"500px"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.close}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name","string"===typeof t?t.trim():t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"单价",prop:"price"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price","string"===typeof t?t.trim():t)},expression:"form.price"}})],1),r("el-form-item",{attrs:{label:"生产商",prop:"author"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.author,callback:function(t){e.$set(e.form,"author","string"===typeof t?t.trim():t)},expression:"form.author"}})],1),r("el-form-item",{attrs:{label:"当前库存",prop:"stock"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.stock,callback:function(t){e.$set(e.form,"stock",e._n("string"===typeof t?t.trim():t))},expression:"form.stock"}})],1),r("el-form-item",{attrs:{label:"商品类别",prop:"type"}},[r("el-select",{attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"请选择或输入商品类别"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.allTypes,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.label}})})),1)],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.close}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)],1)},a=[],n=r("1da1"),l=r("5530"),s=(r("96cf"),r("ac1f"),r("1276"),r("a15b"),r("caad"),r("2532"),r("4160"),r("159b"),r("ad8f")),i=r("f121"),c=r("2f62"),u={name:"TableEdit",data:function(){return{form:{name:"",author:"",price:"",stock:"",type:[],uuid:""},rules:{name:[{required:!0,trigger:"blur",message:"请输入名称"}],author:[{required:!0,trigger:"blur",message:"请输入生产商"}],price:[{required:!0,trigger:"blur",message:"请输入单价"}],stock:[{required:!0,trigger:"blur",message:"请输入库存"}]},mode:"",dialogFormVisible:!1}},computed:Object(l["a"])({},Object(c["c"])({allTypes:"goods/getAllTypes"})),methods:Object(l["a"])(Object(l["a"])(Object(l["a"])({},Object(c["d"])({updateAllTypes:"goods/updateAllTypes"})),Object(c["b"])({addGoodsItem:"goods/addGoodsItem",getFiltData:"goods/getFiltData"})),{},{showEdit:function(e){e?(this.mode="edit",this.form=Object.assign({},e,{type:e.type.split(",")})):this.mode="add",this.dialogFormVisible=!0},close:function(){this.$refs["form"].resetFields(),this.form=this.$options.data().form,this.dialogFormVisible=!1,this.$emit("fetch-data")},save:function(){var e=this;this.$refs["form"].validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var o,a,l,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=17;break}return o=Object.assign(e.form,{type:e.form.type.join(",")}),t.next=4,Object(s["doEdit"])(o,e.mode);case 4:a=t.sent,l=a.msg,c=a.code,u=a.data,i["successCode"].includes(c)&&u.forEach(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.addGoodsItem(r);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e.updateAllTypes(),e.$baseMessage(l,"success"),e.$refs["form"].resetFields(),e.dialogFormVisible=!1,e.$emit("fetch-data"),e.form=e.$options.data().form,t.next=18;break;case 17:return t.abrupt("return",!1);case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}})},d=u,f=r("2877"),p=Object(f["a"])(d,o,a,!1,null,null,null);t["default"]=p.exports},a15b:function(e,t,r){"use strict";var o=r("23e7"),a=r("44ad"),n=r("fc6a"),l=r("a640"),s=[].join,i=a!=Object,c=l("join",",");o({target:"Array",proto:!0,forced:i||!c},{join:function(e){return s.call(n(this),void 0===e?",":e)}})},d0c9:function(e,t,r){"use strict";r("321d")}}]);