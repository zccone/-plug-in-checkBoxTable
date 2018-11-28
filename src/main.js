import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import axios from 'axios';
//引入element组件化框架
import ElementUI from "element-ui"
//引入样式文件
import 'element-ui/lib/theme-chalk/index.css'
//转译
import promise from 'es6-promise'
promise.polyfill();
Vue.config.productionTip = false
//引入vuex
import store from './store'

Vue.use(ElementUI);
Vue.use(VueResource)
Vue.prototype.$axios = axios;

//网络请求
import {post, get,  put,Delete} from './utils/http'
//定义全局变量
Vue.prototype.$post = post;//发
Vue.prototype.$get = get;//取
Vue.prototype.$put = put;//更新 更新
Vue.prototype.$Delete = Delete;//更新 更新

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
