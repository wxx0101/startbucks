webpackJsonp([0],{"gV+x":function(t,e){},pHDm:function(t,e){},yivU:function(t,e,n){"use strict";var i=n("Dd8w"),a=n.n(i),s=n("NYxO"),c={props:{},components:{},data:function(){return{}},computed:a()({},Object(s.d)(["dataList"])),methods:{getDate:function(t){var e=new Date(t);return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()},getHour:function(t,e){var n=new Date(t);return((new Date(e)-n)/3600/1e3).toFixed(1)},editBtn:function(t,e){this.$router.push("/overtimeEdit/"+e)}},created:function(){},mounted:function(){}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bigBox"},t._l(t.dataList,function(e,i){return n("ul",{key:i,staticClass:"con",on:{click:function(n){return t.editBtn(e.list_type,e.applicationNumber)}}},[n("li",[n("span",[t._v(t._s(e.applicationNumber))]),t._v(" "),n("span",[t._v("待确认")])]),t._v(" "),n("li",[n("p",{staticClass:"left"},[n("span",[t._v("申请人")]),n("b",[t._v(t._s(e.nickname))])]),n("p",{staticClass:"right"},[n("span",[t._v("加班类型")]),n("b",[t._v(t._s("overtime"===e.list_type?"工作日加班":"休假"))])])]),t._v(" "),n("li",[n("p",{staticClass:"left"},[n("span",[t._v("加班日期")]),n("b",[t._v(t._s(t.getDate(e.create_at)))])]),n("p",{staticClass:"right"},[n("span",[t._v("加班时数")]),n("b",[t._v(t._s(t.getHour(e.create_at,e.endTime))+"时")])])])])}),0)},staticRenderFns:[]};var o={props:{},components:{todoList:n("VU/8")(c,r,!1,function(t){n("gV+x")},"data-v-386fe0dd",null).exports},data:function(){return{arr:[{name:"加班",string:"overtime"},{name:"休假",string:"vacation"}],ind:0}},computed:a()({},Object(s.d)(["type","dataList"])),methods:a()({},Object(s.b)(["getTaskList"]),Object(s.c)(["getType"]),{changeClick:function(t,e){this.ind=t,this.getType(e),this.getTaskList()}}),created:function(){this.getType("overtime"),this.getTaskList()},mounted:function(){}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contentBox"},[n("div",{staticClass:"tabTop"},[n("div",{staticClass:"show"},t._l(t.arr,function(e,i){return n("span",{key:i,class:{active:i==t.ind},on:{click:function(n){return t.changeClick(i,e.string)}}},[t._v(t._s(e.name))])}),0)]),t._v(" "),n("todoList")],1)},staticRenderFns:[]};var d=n("VU/8")(o,u,!1,function(t){n("pHDm")},"data-v-112bde65",null);e.a=d.exports}});
//# sourceMappingURL=0.8e95202a1299f8888a20.js.map