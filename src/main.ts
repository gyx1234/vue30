import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/iconfont/iconfont.css'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css';

import axios from 'axios'
import VueAxios from 'vue-axios'

import {post, get} from './utils/http'
// import {post, get} from './utils/request'
// 定义全局变量
Vue.prototype.$post = post
Vue.prototype.$get = get


Vue.use(Mint, VueAxios, axios)

Vue.config.productionTip = false

// import Router from 'vue-router'
// Vue.use(Router)
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
