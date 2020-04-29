<template>
    <mt-tabbar class="tabbar" v-model="message" fixed>
        <mt-tab-item id="index">
            <img slot="icon" :src="this.atabs[0]">
            首页
        </mt-tab-item>
        <mt-tab-item id="buyCart">
            <img slot="icon" v-bind:src="this.atabs[1]">
            购物车
        </mt-tab-item>
        <mt-tab-item id="mine">
            <img slot="icon" v-bind:src="this.atabs[2]">
            我的
        </mt-tab-item>
    </mt-tabbar>
</template>

<script lang="ts">
    // import 'reflect-metadata'
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

    @Component
    export default class tabbar extends Vue {
        // @Prop() selected!: string;
        // @Prop() tabs!: Array;
        @Prop(String) public selected: String;
        @Prop(Array) public tabs: Array;

        //选中的tabbar值message为外面页面传入的值selected
        message = this.selected;
        //这里使用的icon图标为图片，所以需要加图片改变的传入，若使用阿里图标，则不用加
        atabs = this.tabs;

        @Watch('message', {immediate: true, deep: true})
        messageChanged(val, oldVal) {
            switch (val) {
                case "index":
                    this.$router.push({path: "/index"})
                    break;
                case "buyCart":
                    this.$router.push({path: "/buyCart"})
                    break;
                case "mine":
                    this.$router.push({path: "/mine"})
                    break;
            }
        }

        // @Watch('$route', {immediate: true, deep: true})
        // routeChanged(to, from){
        //     console.log('$route：', to, from)
        // }

        private activated() {
            this.message = this.selected
            this.tabs = this.atabs
        }
    }
</script>
