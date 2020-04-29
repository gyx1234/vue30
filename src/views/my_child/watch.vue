<template>
    <div class="watch header_margintop">
        <mt-header title="watch" fixed>
            <router-link to="" slot="left">
                <mt-button icon="back" @click="$router.back(-1)">返回</mt-button>
            </router-link>
        </mt-header>

        <p>
            <input class="ipt" style="" v-model="input"/>
        </p>
        <p>{{input}}</p>

        <button v-on:click="dianji">点击</button>
        <p>=======================</p>

        <p><input class="ipt" v-model="one"/></p>
        <p>------{{one}}--------</p>
        <p><input class="ipt" v-model="two"/></p>
        <p>------{{two}}--------</p>

        <p>{{dif}}</p>
    </div>

</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

    @Component
    export default class watch extends Vue {
        input = '监听输入框内容';
        one = 0
        two = 0
        dif = 0

        // Watch 监听
        @Watch('input', {immediate: true, deep: true})
        inputChanged(val: string, oldVal: string) {
            console.log('input：', val, oldVal)
        }

        @Watch('one', {immediate: true, deep: true})
        oneChanged(val: string, oldVal: string) {
            // console.log('one：', val, oldVal)
            this.dif = this.one - this.two
        }

        @Watch('two', {immediate: true, deep: true})
        twoChanged(val: string, oldVal: string) {
            // console.log('two：', val, oldVal)
            this.dif = this.one - this.two
        }

        // 事件
        private dianji(): void {
            console.log('点击：', this.input)
        }

    }

</script>

<style scoped>
    .ipt {
        border: 1px solid #999;
        padding: 10px 0;
    }

</style>