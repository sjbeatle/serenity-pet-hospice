<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.jpg" class="logo">
    <HelloWorld msg="Welcome!"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  max-width: 300px;
  margin: 0 auto;

  .logo {
    max-width: 100%;
  }
}
</style>
