<template>
  <div class="HelloWorld">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
    // msg = '哈哈哈哈'

    // 生命周期
    private created(): void {
        console.log('HelloWorld: ', this.msg)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  h1{font-size: 14px;}
</style>
