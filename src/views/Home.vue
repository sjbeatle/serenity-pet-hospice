<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="logo">
    <Nav />
    <HelloWorld msg="Hospice, Palliative, and Home Care" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import Nav from '@/components/Nav.vue';

@Component({
  components: {
    HelloWorld,
    Nav,
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
