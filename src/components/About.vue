<template>
    <div class="About">
        <h3>about</h3>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';

    @Component
    export default class About extends Vue {
        // @Prop(String) readonly About: String;
        @Prop() msg!: Array;


        // // 生命周期
        private created(): void {
            // this.About = 'about的组件内容'

            console.log('About子组件: ', this.msg)

        }

    }

</script>