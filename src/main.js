// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'                 // 解决IE不支持promise

import Vue from 'vue'
import App from './App'
import router from './router'

import fastclick from 'fastclick'       // 解决点击手机页面有延迟的情况(300ms)
fastclick.attach(document.getElementById('app'))

import './assets/styles/reset.css';         // 全局css

import axios from './assets/scripts/axios'; // 配置axios拦截器

Vue.config.productionTip = false
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
