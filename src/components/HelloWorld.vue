<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Our site is currently under construction but please
      continue to check back for updates. Thank you!
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  color: #0076b3;
}
</style>
