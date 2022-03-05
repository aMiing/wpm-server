(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a229c1c"],{"024c":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"table-container"},[r("el-row",[r("el-col",{attrs:{xs:24,sm:24,md:14,lg:14,xl:14}},[r("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:e.handleAdd}},[e._v(" 新建 ")]),r("el-button",{attrs:{icon:"el-icon-delete",type:"danger"},on:{click:e.handleDelete}},[e._v(" 删除 ")])],1),r("el-col",{attrs:{xs:24,sm:24,md:10,lg:10,xl:10}},[r("div",{staticClass:"right-panel"},[r("el-form",{ref:"form",attrs:{model:e.queryForm,inline:!0},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",[r("el-input",{attrs:{placeholder:"输入名称或编号搜索",clearable:""},on:{clear:e.clearSearchKey},model:{value:e.queryForm.searchValue,callback:function(t){e.$set(e.queryForm,"searchValue",t)},expression:"queryForm.searchValue"}})],1),r("el-form-item",[r("el-button",{attrs:{icon:"el-icon-search",type:"primary","native-type":"submit"},on:{click:e.handleQuery}},[e._v(" 查询 ")])],1)],1)],1)])],1),r("div",{staticClass:"checkbox-content type-select"},[r("span",[e._v("按类型筛选：")]),r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.queryForm.type,callback:function(t){e.$set(e.queryForm,"type",t)},expression:"queryForm.type"}},[r("el-option",{attrs:{label:"全部",value:0}}),e._l(e.allTypes,(function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.uuid}})}))],2)],1),r("el-table",{ref:"tableSort",attrs:{data:e.fillList,height:e.height},on:{"selection-change":e.setSelectRows,"sort-change":e.tableSortChange}},[r("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"selection",width:"55"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"编号/条码",prop:"qrcode","min-width":"60"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"name",label:"名称"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"price",label:"单价",sortable:"","sort-by":"price"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[n.priceRange?r("span",{staticClass:"price"},[e._v("￥"+e._s(e._f("priceRangeFilter")(n.priceRange)))]):r("span",{staticClass:"price"},[e._v("￥"+e._s(n.price))])]}}])}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"库存",sortable:"","sort-by":"stock","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(" "+e._s(r.stock+" "+(r.unit||""))+" ")]}}])}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("el-tag",{attrs:{type:e._f("statusFilter")(n.online)}},[e._v(" "+e._s(e.handleStatusText(n.online))+" ")])]}}])}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"所属类别",prop:"type","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("span",[e._v(e._s(e.handleTypes(n.type)))])]}}])}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"录入时间","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("span",[e._v(e._s(e._f("timeFilter")(n.createTime)))])]}}])}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"操作","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleEdit(n)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleOffOrOn(n)}}},[e._v(e._s(1===n.online?"下架":"上架"))]),r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleDelete(n)}}},[e._v("删除")])]}}])})],1),r("el-pagination",{attrs:{background:e.background,"current-page":e.queryForm.pageNo,layout:e.layout,"page-size":e.queryForm.pageSize,total:e.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}}),r("table-edit",{ref:"edit",on:{fetchData:e.fetchData}})],1)},a=[],o=r("1da1"),i=r("5530"),l=(r("96cf"),r("0d03"),r("ac1f"),r("1276"),r("a15b"),r("d81d"),r("4de4"),r("d3b7"),r("caad"),r("2532"),r("b0c0"),r("4160"),r("159b"),r("c740"),r("a434"),r("c975"),r("4795"),r("ad8f")),s=r("7ef6"),c=r("f121"),u=r("ed08"),p=r("40c6"),f=r("2f62"),m={name:"ComprehensiveTable",components:{TableEdit:s["default"]},filters:{statusFilter:function(e){return 1===e?"success":"info"},timeFilter:function(e){return e?Object(u["formatTime"])(new Date(e),"{yy}-{mm}-{dd} {hh}:{ii}:{ss}"):"--"},priceRangeFilter:function(e){e=JSON.parse(e);var t=e[0].price;return e.length>1&&(t=e[e.length-1].price+"~"+t),t}},data:function(){return{imgShow:!0,imageList:[],listLoading:!0,layout:"total, sizes, prev, pager, next, jumper",background:!0,selectRows:"",elementLoadingText:"正在加载...",fillList:[],total:0,queryForm:{pageNo:1,pageSize:20,searchValue:"",type:0}}},computed:Object(i["a"])(Object(i["a"])({},Object(f["c"])({allTypes:"classification/getAllTypes"})),{},{height:function(){return this.$baseTableHeight()}}),mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:if(e.allTypes.length){t.next=8;break}return t.next=5,Object(p["getTypeList"])();case 5:r=t.sent,n=r.data,e.updateAllTypes(n);case 8:return t.next=10,e.fetchData();case 10:a=e.$route.query.operate,"add"===a&&e.handleAdd();case 12:case"end":return t.stop()}}),t)})))()},methods:Object(i["a"])(Object(i["a"])({},Object(f["d"])({updateAllTypes:"classification/AllTypes"})),{},{handleTypes:function(e){var t=e.split(",")||[],r=(this.allTypes||[]).filter((function(e){return t.includes(e.uuid)})).map((function(e){return e.name})).join(",");return r},handleStatusText:function(e){return 1===e?"在售":"下架"},tableSortChange:function(){var e=[];this.$refs.tableSort.tableData.forEach((function(t){e.push(t.img)})),this.imageList=e},setSelectRows:function(e){this.selectRows=e},handleAdd:function(){this.$refs["edit"].showEdit()},handleEdit:function(e){this.$refs["edit"].showEdit(Object(i["a"])({},e))},handleOffOrOn:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.online=1===e.online?2:1,r.next=3,Object(l["doEdit"])(e,"edit");case 3:n=r.sent,a=n.msg,o=n.code,!c["successCode"].includes(o)&&(e.online=1===e.online?2:1),t.$baseMessage(a,"success"),t.fetchData();case 9:case"end":return r.stop()}}),r)})))()},handleDelete:function(e){var t=this;if(e.uuid)this.$baseConfirm("你确定要删除当前项吗",null,Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(l["doDelete"])({uuid:e.uuid});case 2:n=r.sent,a=n.msg,o=n.code,200==o&&(i=t.fillList.findIndex((function(t){return t.uuid==e.uuid})),t.fillList.splice(i,1)),t.$baseMessage(a,"success");case 7:case"end":return r.stop()}}),r)}))));else{if(!(this.selectRows.length>0))return this.$baseMessage("未选中任何行","error"),!1;var r=this.selectRows.map((function(e){return e.uuid}));this.$baseConfirm("你确定要删除选中项吗",null,Object(o["a"])(regeneratorRuntime.mark((function e(){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["doDelete"])({uuid:r});case 2:n=e.sent,a=n.msg,o=n.code,n.data,200==o&&(t.fillList=t.fillList.filter((function(e){return-1==r.indexOf(e.uuid)}))),t.$baseMessage(a,"success");case 8:case"end":return e.stop()}}),e)}))))}},clearSearchKey:function(){this.handleQuery()},handleSizeChange:function(e){this.queryForm.pageSize=e,this.fetchData()},handleCurrentChange:function(e){this.queryForm.pageNo=e,this.fetchData()},handleQuery:function(){this.queryForm.pageNo=1,this.fetchData()},fetchData:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.$baseColorfullLoading(1),t.next=3,Object(l["getList"])(e.queryForm);case 3:n=t.sent,a=n.data,e.fillList=a.data,e.total=a.total,setTimeout((function(){r.close()}),500);case 8:case"end":return t.stop()}}),t)})))()}})},d=m,h=(r("ae15"),r("0c7c")),b=Object(h["a"])(d,n,a,!1,null,null,null);t["default"]=b.exports},"09a6":function(e,t,r){},"18aa":function(e,t,r){"use strict";r("09a6")},"3a20":function(e,t,r){"use strict";r("708a")},"708a":function(e,t,r){},"7ef6":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"edit"==e.mode?"编辑":"添加",visible:e.dialogFormVisible,width:"600px","destroy-on-close":""},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.close}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"条码信息",prop:"qrcode"}},[r("el-input",{attrs:{autocomplete:"off",placeholder:"扫描商品条码将自动填充",autofocus:"true"},model:{value:e.form.qrcode,callback:function(t){e.$set(e.form,"qrcode","string"===typeof t?t.trim():t)},expression:"form.qrcode"}})],1),r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{autocomplete:"off",placeholder:"输入商品名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name","string"===typeof t?t.trim():t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"单价",prop:"price"}},[r("el-radio-group",{on:{change:function(t){e.form.price=""}},model:{value:e.priceType,callback:function(t){e.priceType=t},expression:"priceType"}},[r("el-radio-button",{attrs:{label:"single"}},[e._v("统一价")]),r("el-radio-button",{attrs:{label:"multiple"}},[e._v("阶梯价")])],1),"single"===e.priceType?r("div",{staticClass:"single-box price-form-content"},[r("el-input",{attrs:{autocomplete:"off",placeholder:"输入单价金额"},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price","string"===typeof t?t.trim():t)},expression:"form.price"}})],1):r("div",{staticClass:"multiple-box price-form-content"},[r("multiple-price-form",{ref:"multipleForm",attrs:{priceRange:e.priceRange}})],1)],1),r("el-form-item",{attrs:{label:"库存",prop:"stock"}},[r("el-input",{attrs:{autocomplete:"off",placeholder:"输入当前库存"},model:{value:e.form.stock,callback:function(t){e.$set(e.form,"stock",e._n("string"===typeof t?t.trim():t))},expression:"form.stock"}})],1),r("el-form-item",{attrs:{label:"分类",prop:"type"}},[r("el-select",{attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"请选择或输入类别"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.allTypes,(function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.uuid}})})),1)],1),r("el-form-item",{attrs:{label:"计量方式",prop:"measureType"}},[r("el-radio-group",{model:{value:e.form.measureType,callback:function(t){e.$set(e.form,"measureType",t)},expression:"form.measureType"}},[r("el-radio-button",{attrs:{label:"count"}},[e._v("数量")]),r("el-radio-button",{attrs:{label:"weight"}},[e._v("称重")])],1)],1),r("span",{directives:[{name:"show",rawName:"v-show",value:e.showMore,expression:"showMore"}]},[r("el-form-item",{attrs:{label:"计量单位",prop:"unit"}},[r("el-input",{attrs:{autocomplete:"on",placeholder:"输入商品计量单位，例如个/盒/盘等"},model:{value:e.form.unit,callback:function(t){e.$set(e.form,"unit","string"===typeof t?t.trim():t)},expression:"form.unit"}})],1),r("el-form-item",{attrs:{label:"生产商",prop:"author"}},[r("el-input",{attrs:{autocomplete:"off",placeholder:"商品生产商，非必填"},model:{value:e.form.author,callback:function(t){e.$set(e.form,"author","string"===typeof t?t.trim():t)},expression:"form.author"}})],1)],1)],1),r("el-divider",{attrs:{"content-position":"right"}},[r("a",{on:{click:function(t){e.showMore=!e.showMore}}},[e._v(e._s(e.showMore?"收起":"更多"))])]),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.close}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.commit}},[e._v("确 定")])],1)],1)},a=[],o=r("1da1"),i=r("5530"),l=(r("96cf"),r("fb6a"),r("a15b"),r("caad"),r("2532"),r("ad8f")),s=r("f121"),c=r("2f62"),u=r("e64b"),p={name:"TableEdit",components:{multiplePriceForm:u["default"]},data:function(){return{form:{qrcode:"",name:"",author:"",price:"",stock:"",type:[],uuid:"",unit:"个",measureType:"count"},priceType:"single",priceRange:[],rules:{name:[{required:!0,trigger:"blur",message:"请输入名称"}],price:[{required:!0,trigger:"blur",message:"请输入单价"}],stock:[{required:!0,trigger:"blur",message:"请输入库存"}]},mode:"",dialogFormVisible:!1,showMore:!1}},computed:Object(i["a"])({},Object(c["c"])({allTypes:"classification/getAllTypes"})),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(c["d"])({})),Object(c["b"])({addGoodsItem:"goods/addGoodsItem",setGoodsList:"goods/setGoodsList"})),{},{showEdit:function(e){e?(this.mode="edit",this.form=e,e.priceRange&&(this.priceType="multiple",this.priceRange=JSON.parse(e.priceRange))):this.mode="add",this.dialogFormVisible=!0},close:function(){this.dialogFormVisible=!1,this.showMore=!1,this.$refs["form"].resetFields(),this.form=this.$options.data().form},commit:function(){var e,t=this,r=null===(e=this.$refs.multipleForm)||void 0===e?void 0:e.validateData();"multiple"===this.priceType&&r&&(this.form.price=r.slice(-1)[0].price),this.$refs["form"].validate(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(r){var n,a,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=14;break}return n=Object.assign(t.form,{type:t.form.type.join(","),price:t.form.price}),e.next=4,Object(l["doEdit"])(n,t.mode);case 4:a=e.sent,o=a.msg,i=a.code,a.data,s["successCode"].includes(i)&&t.$emit("fetchData"),t.$baseMessage(o,"success"),t.dialogFormVisible=!1,t.$refs["form"].resetFields(),e.next=15;break;case 14:return e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}})},f=p,m=(r("3a20"),r("0c7c")),d=Object(m["a"])(f,n,a,!1,null,"4d5e334a",null);t["default"]=d.exports},8109:function(e,t,r){e.exports={"menu-color":"rgba(255,255,255,0.95)","menu-color-active":"rgba(255,255,255,0.95)","menu-background":"#2f3447"}},ae15:function(e,t,r){"use strict";r("8109")},e64b:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"multiplePriceForm"},[r("div",{staticClass:"form-title"},[r("span",[e._v("阶梯计价规则：(前包含后不包含)")]),r("el-button",{attrs:{icon:"el-icon-plus",size:"mini",round:"",type:"text"},on:{click:e.handleAdd}})],1),r("el-form",{ref:"form",attrs:{"label-width":"auto","label-suffix":":"}},e._l(e.rules,(function(t,n){return r("el-form-item",{key:t.id,attrs:{label:"规则"+n}},[r("div",{staticClass:"rule-item-content"},[r("span",[e._v("从")]),r("el-input-number",{attrs:{disabled:"",controls:!1,size:"mini",type:"number",max:t.unitRange[1]},model:{value:t.unitRange[0],callback:function(r){e.$set(t.unitRange,0,e._n(r))},expression:"rule.unitRange[0]"}}),r("span",[e._v("单位到")]),r("el-input-number",{attrs:{controls:!1,size:"mini",min:t.unitRange[0]},on:{change:function(t){return e.maxRangeChange(n)}},model:{value:t.unitRange[1],callback:function(r){e.$set(t.unitRange,1,e._n(r))},expression:"rule.unitRange[1]"}}),r("span",[e._v("单位，价格为:")]),r("el-input-number",{attrs:{controls:!1,size:"mini"},model:{value:t.price,callback:function(r){e.$set(t,"price",e._n(r))},expression:"rule.price"}}),r("span",[e._v("元")]),r("div",{staticClass:"operation-box"},[r("el-button",{directives:[{name:"show",rawName:"v-show",value:n>0,expression:"index > 0"}],attrs:{icon:"el-icon-minus",size:"mini",circle:""},on:{click:function(r){return e.handleDelete(t)}}})],1)],1)])})),1)],1)},a=[],o=r("2909"),i=(r("d401"),r("0d03"),r("d3b7"),r("25f0"),r("c740"),r("a434"),{name:"MultiplePriceForm",props:{priceRange:{type:Array,default:function(){return[]}}},data:function(){return{rules:[]}},mounted:function(){this.mergePriceRange()},methods:{mergePriceRange:function(){this.priceRange.length?this.rules=Object(o["a"])(this.priceRange):this.rules.push({id:Math.random().toString(),unitRange:[0,100],price:0})},handleAdd:function(){var e=this.rules[this.rules.length-1].unitRange,t=[e[1]||0,2*e[1]-e[0]||100];this.rules.push({id:Math.random().toString(),unitRange:t,price:0})},handleDelete:function(e){var t=this.rules.findIndex((function(t){return t===e}));this.rules.splice(t,1)},maxRangeChange:function(e){this.rules[e+1]&&(this.rules[e+1].unitRange[0]=this.rules[e].unitRange[1])},validateData:function(){return!!this.rules.length&&(0!==this.rules[0].price&&Object(o["a"])(this.rules))}}}),l=i,s=(r("18aa"),r("0c7c")),c=Object(s["a"])(l,n,a,!1,null,"2b2e2659",null);t["default"]=c.exports}}]);