// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'

import 'lib-flexible'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import storage from './storage';
Vue.prototype.$storage = storage
Vue.use(ElementUI);


Vue.config.productionTip = false

FastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

axios.defaults.baseURL = 'http://localhost:3000/api/base/' 
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})
