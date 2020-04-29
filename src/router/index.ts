import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index.vue'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import buyCart from '@/views/buyCart.vue'
import mine from '@/views/mine.vue'
import index_detail from '@/views/index_detail.vue'
import watch from '@/views/my_child/watch.vue'
import tabbar from '@/components/tabbar.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/index',
        name: 'index',
        component: index,
        children: [
            {path: '/Home', name: 'Home', component: Home, meta: {keepAlive: true, isBack: false}},
            {path: '/About', name: 'About', component: About, meta: {keepAlive: true, isBack: false}}
        ],
        meta: {keepAlive: true, /*此组件需要被缓存*/isBack: false}
    },
    {path: '/buyCart', name: 'buyCart', component: buyCart, meta: {keepAlive: true, isBack: false}},
    {path: '/mine', name: 'mine', component: mine, meta: {keepAlive: true, isBack: false}},
    {path: '/index_detail', name: 'index_detail', component: index_detail, meta: {keepAlive: true, isBack: false}},
    {path: '/my_child/watch', name: 'watch', component: watch, meta: {keepAlive: true, isBack: false}},
    {path: '/tabbar', name: 'tabbar', component: tabbar, meta: {keepAlive: true, isBack: false}},
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
