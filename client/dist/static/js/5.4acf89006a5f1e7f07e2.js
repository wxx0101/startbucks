webpackJsonp([5],{"0hbx":function(e,n){},"ook+":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});t("vLgD");var o=t("gyMJ"),a={props:{},components:{},data:function(){return{phone:"",pwd:""}},computed:{},methods:{btnLogin:function(){var e=this,n=this.phone.toString(),t=this.pwd.toString();console.log(n,t),o.a.Login({phone:n,password:t}).then(function(n){var t=n.code,o=n.message,a=n.token;t?(window.localStorage.token=a,alert(o),e.$router.push("/")):alert(o)}).catch(function(e){console.log(e)})}},created:function(){},mounted:function(){}},r={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"loginBox"},[t("h2",[e._v("登录")]),e._v(" "),t("p",[e._v("\n    用户名：\n    "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"tel",placeholder:"请输入用户名"},domProps:{value:e.phone},on:{input:function(n){n.target.composing||(e.phone=n.target.value)}}})]),e._v(" "),t("p",[e._v("\n    密码：\n    "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.pwd,expression:"pwd"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.pwd},on:{input:function(n){n.target.composing||(e.pwd=n.target.value)}}})]),e._v(" "),t("p",[t("button",{on:{click:e.btnLogin}},[e._v("登录")])])])},staticRenderFns:[]};var i=t("VU/8")(a,r,!1,function(e){t("0hbx")},"data-v-41db9b24",null);n.default=i.exports}});
//# sourceMappingURL=5.4acf89006a5f1e7f07e2.js.map