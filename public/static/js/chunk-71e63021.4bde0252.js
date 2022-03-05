(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71e63021"],{"0de4":function(t,e,a){t.exports={"menu-color":"rgba(255,255,255,0.95)","menu-color-active":"rgba(255,255,255,0.95)","menu-background":"#2f3447"}},1052:function(t,e,a){"use strict";a("0de4")},"127f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index-container"},[a("el-row",[a("div",{staticClass:"title-content"},[a("span",{staticClass:"title"},[t._v("数据概览")])])]),a("el-row",{attrs:{gutter:20}},[t._l(t.salesData,(function(e){return a("el-col",{key:e.label,attrs:{xs:24,sm:24,md:12,lg:6,xl:6}},[a("el-card",{attrs:{shadow:"never"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"card-header-content"},[a("span",[t._v(t._s(e.label))]),a("span",{staticClass:"order-count"},[a("strong",[a("i",[t._v(t._s(e.orderCount))])]),t._v(" 单 ")])])]),a("div",{staticClass:"card-main-content"},[a("span",{staticClass:"unit"},[t._v("￥")]),a("vab-count",{attrs:{"start-val":t.countConfig.startVal,"end-val":e.volume,duration:t.countConfig.duration,decimals:t.countConfig.decimals}})],1)])],1)})),t._l(t.iconList,(function(e,n){return a("el-col",{key:n,attrs:{xs:12,sm:6,md:3,lg:3,xl:3}},[a("router-link",{attrs:{to:e.link,target:"_blank"}},[a("el-card",{staticClass:"icon-panel",attrs:{shadow:"never"}},[a("vab-icon",{style:{color:e.color},attrs:{icon:["fas",e.icon]}}),a("p",[t._v(t._s(e.title))])],1)],1)],1)}))],2),a("el-row",[a("div",{staticClass:"title-content"},[a("span",{staticClass:"title"},[t._v("数据统计")])]),a("div",{staticClass:"checkbox-content time-select"},[a("select-date",{attrs:{initSelect:"近一周"},on:{setDateEmit:t.setDateEmit}})],1)]),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:9}},[a("el-card",{attrs:{shadow:"never"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("订单数据")])]),a("vab-chart",{attrs:{autoresize:!0,theme:"vab-echarts-theme",options:t.orderOption}}),a("div",{staticClass:"bottom"},[a("span",[t._v("总订单量： "),a("vab-count",{attrs:{"start-val":t.countConfig.startVal,"end-val":t.allOrdersCount,duration:t.countConfig.duration,decimals:Number("0")}})],1),a("span",[t._v(" 日均： "),a("vab-count",{attrs:{"start-val":t.countConfig.startVal,"end-val":t.avarageOrder,duration:t.countConfig.duration,decimals:Number("0")}})],1)])],1)],1),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:9}},[a("el-card",{attrs:{shadow:"never"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("营业额")])]),a("vab-chart",{attrs:{autoresize:!0,theme:"vab-echarts-theme",options:t.volumeOption}}),a("div",{staticClass:"bottom"},[a("span",[t._v("总营业额： "),a("vab-count",{attrs:{"start-val":Number("0"),"end-val":t.allVolume,duration:Number("1000"),decimals:Number("2")}})],1),a("span",[t._v(" 日均： "),a("vab-count",{attrs:{"start-val":Number("0"),"end-val":t.avarageVolume,duration:Number("1000"),decimals:Number("2")}})],1)])],1)],1)],1)],1)},r=[],i=a("1da1"),o=(a("96cf"),a("99af"),a("d81d"),a("0d03"),a("4795"),a("7fc4")),s=a("8837"),c=a("f8b7"),l={name:"Analyse",components:{VabChart:o["default"],SelectDate:s["default"]},data:function(){return{volumeData:[],orderData:[],salesData:[],allOrdersCount:0,allVolume:0,getStatisticLen:0,countConfig:{startVal:0,decimals:2,duration:2e3},chartOption:{grid:{top:"8%",left:"2%",right:"4%",bottom:"0%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:[{type:"category",axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}]},iconList:[{icon:"book",title:"订单列表",link:"/data/order",color:"#69c0ff"},{icon:"coffee",title:"敬请期待",link:"",color:"#95de64"}]}},computed:{orderOption:function(){return Object.assign({},this.chartOption,{dataset:{source:[["date","有效订单"]].concat(this.orderData)},series:[{name:"有效订单",type:"line",smooth:!0,label:{show:!0,position:"top"}}]})},volumeOption:function(){return Object.assign({},this.chartOption,{dataset:{source:[["date","销售额"]].concat(this.volumeData)},series:[{name:"销售金额",type:"bar",label:{show:!0,position:"top"}}]})},avarageOrder:function(){return this.getStatisticLen?Math.round(this.allOrdersCount/this.getStatisticLen):0},avarageVolume:function(){return this.getStatisticLen?Math.round(this.allVolume/this.getStatisticLen*100)/100:0}},created:function(){this.fetchData()},methods:{setDateEmit:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,r,i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(c["getOrderStatistics"])(t);case 2:n=a.sent,r=n.data,e.getStatisticLen=Math.ceil((t[1]-t[0])/864e5),i=0,o=0,e.orderData=r.map((function(t){return i+=t.orderCount,[t.date,t.orderCount]})),e.volumeData=r.map((function(t){return o+=t.volume,[t.date,t.volume]})),e.allOrdersCount=i,e.allVolume=o;case 10:case"end":return a.stop()}}),a)})))()},fetchData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n,r,i,o,s,l,u,d,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.$baseColorfullLoading(1),n=(new Date).toLocaleDateString(),r=(new Date).getTime(),i=new Date(n).getTime(),o=i-24*(((new Date).getDay()||7)-1)*3600*1e3,s=i-24*((new Date).getDate()-1)*3600*1e3,l=[[i,r],[o,r],[s,r]],e.next=9,Object(c["getDataPreview"])({parames:l});case 9:u=e.sent,d=u.data,m=["日销售额","周销售额","月销售额"],t.salesData=d.map((function(t,e){return{label:m[e],volume:t[0].volume||0,orderCount:t[0].orderCount||0}})),setTimeout((function(){a.close()}),500);case 14:case"end":return e.stop()}}),e)})))()}}},u=l,d=(a("d5a3"),a("0c7c")),m=Object(d["a"])(u,n,r,!1,null,"7187ecb5",null);e["default"]=m.exports},"7fc4":function(t,e,a){"use strict";a.r(e);a("313e");var n=a("9ca8");e["default"]=n["a"]},8837:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"select-date-content"},[a("el-radio-group",{on:{change:t.radioSelectChange},model:{value:t.initSelectRadio,callback:function(e){t.initSelectRadio=e},expression:"initSelectRadio"}},[a("el-radio-button",{attrs:{label:"今天"}}),a("el-radio-button",{attrs:{label:"昨天"}}),a("el-radio-button",{attrs:{label:"近一周"}}),a("el-radio-button",{attrs:{label:"近30天"}}),a("el-radio-button",{attrs:{label:"近90天"}})],1),a("div",{staticClass:"initTime"},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"timestamp"},on:{change:t.pickerDateChange},model:{value:t.initStartDate,callback:function(e){t.initStartDate=e},expression:"initStartDate"}})],1)],1)},r=[],i=a("1da1"),o=(a("96cf"),a("0d03"),{name:"SetDate",props:{initSelect:{type:String,default:"今天"}},data:function(){return{initStartDate:"",initSelectRadio:""}},mounted:function(){this.initSelectRadio=this.initSelect,this.radioSelectChange(this.initSelectRadio)},methods:{radioSelectChange:function(t){var e=(new Date).toLocaleDateString(),a=(new Date).getTime(),n=new Date(e).getTime(),r=864e5,i=[];switch(t){case"今天":i=[n,a];break;case"昨天":i=[n-r,n];break;case"近一周":i=[a-7*r,a];break;case"近30天":i=[a-30*r,a];break;case"近90天":i=[a-90*r,a];break;default:i=[n,a];break}this.pickerDateChange(i)},pickerDateChange:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.$emit("setDateEmit",t);case 1:case"end":return a.stop()}}),a)})))()}}}),s=o,c=(a("1052"),a("0c7c")),l=Object(c["a"])(s,n,r,!1,null,null,null);e["default"]=l.exports},c721:function(t,e,a){},d5a3:function(t,e,a){"use strict";a("c721")}}]);