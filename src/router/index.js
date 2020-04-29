import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '@/views/index.vue';
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import buyCart from '@/views/buyCart.vue';
import mine from '@/views/mine.vue';
Vue.use(VueRouter);
var routes = [
    {
        path: '/',
        name: 'index',
        component: Index,
        children: [
            { path: '/home', component: Home },
            { path: '/about', component: About },
        ],
        meta: {
            keepAlive: true,
            isBack: false
        }
    },
    { path: '/buyCart', name: 'buyCart', component: buyCart, meta: { keepAlive: true, isBack: false } },
    { path: '/mine', name: 'mine', component: mine, meta: { keepAlive: true, isBack: false } },
    { path: '/index_detail', name: 'index_detail', component: mine, meta: { keepAlive: true, isBack: false } },
    { path: '/my_child/watch', name: 'watch', component: mine, meta: { keepAlive: true, isBack: false } },
    { path: '/tabbar', name: 'tabbar', component: mine, meta: { keepAlive: true, isBack: false } },
];
var router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
});
export default router;
//# sourceMappingURL=index.js.map