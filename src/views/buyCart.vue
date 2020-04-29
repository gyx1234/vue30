<template>
    <div class="buyCart header_margintop" id="nav">
        <mt-header title="购物车" fixed></mt-header>
        <div>购物车</div>
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

    export default class buyCart extends Vue {
        selected = "buyCart";
        tabs = [require("../assets/images/icons/home_gray.png"), require("../assets/images/icons/cart_green.png"), require("../assets/images/icons/my_gray.png")];


    }
</script>

<style scoped>

</style>