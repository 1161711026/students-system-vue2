import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

//配置axios的基础路径
import axios from 'axios'
axios.defaults.baseURL = 'http://47.98.128.191:3000';
//调用axios的请求、响应拦截
import '@/axios/axios'

//将api添加到Vue的原型链上 $api就可以直接访问api.js
import api from '@/https/api'
Vue.prototype.$api = api;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
