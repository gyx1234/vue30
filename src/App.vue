<template>
    <div id="app">
        <!--<router-view></router-view>-->
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
    </div>
</template>
<script>
     export default {
         name: 'App',
         data() {
             return {
             }
         },
         methods: {},
         created() {
             // console.log('App created 创建')
         },
         mounted() {
             // console.log('App mounted 安装 完成挂载')
         },
         updated() {
             // console.log('App updated 更新')
         },
         destroyed() {
             // console.log('App destroyed 摧毁 ')
         },
     }
</script>

<style>

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    /*头部修改部分*/
    .header_margintop{margin-top: 40px;}
    .header_margintop .mint-header-button a button{color: #fff;}
    .mint-tabbar > .mint-tab-item.is-selected .mint-tab-item-label{color: #42b983;}
</style>
