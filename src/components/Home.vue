<template>
    <div class="home">
        <!--<img alt="Vue logo" src="../assets/logo.png">-->
        <HelloWorld :msg="home"/>
        <p>{{message}}</p>
    </div>
</template>

<script lang="ts">
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({
        components: {
            HelloWorld
        },
    })
    export default class Home extends Vue {
        // @Prop() private msg!: string;
        message = 'hhhh HelloWorld'
        home = 'data的HOME'

        // method
        // public changeMessage (): void {
        //     this.message = 'Good bye'
        // }
        // public getName(): string {
        //     let storeName = 'abcefg'
        //     return storeName
        // }

        // 生命周期
        private created (): void {
            console.log('Home created')
        }
        private mounted (): void {
            console.log('Home mounted')

        }
        private updated (): void {
            console.log('Home updated')

        }
        private destroyed (): void {
            console.log('Home destroyed')

        }
    }

</script>
