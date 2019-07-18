// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./fonts/iconfont.css"
import "./utils/js/flexble"
import store from "./store/index"
import {DatePicker,TimePicker,Input} from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false

Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Input)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
