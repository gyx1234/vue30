<template>
    <div class="mine header_margintop" id="nav">
        <mt-header title="mine" fixed></mt-header>
        <div class="main">
            <router-link to="/my_child/watch" class="flex router_link">
                <div>监听</div><i class="iconfont icon-arrow-right"></i>
            </router-link>
        </div>


        <tabbar :selected="selected" :tabs='tabs' />

    </div>


</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import tabbar from '@/components/tabbar.vue'

    @Component({
        components: {
            tabbar
        },
    })
    export default class mine extends Vue {
        selected = "mine";
        tabs = [require("../assets/images/icons/home_gray.png"),require("../assets/images/icons/cart_gray.png"), require("../assets/images/icons/my_green.png")];


    }

</script>

<style scoped>
    .flex{display: flex;}
    .main{padding: 0px 5px 100px 5px;}

    a:-webkit-any-link {cursor: pointer;text-decoration: none;color: #000;}
    .router_link{justify-content: space-between;align-items: center;height: 40px;border-bottom: 1px solid #f2f2f2;}
</style>