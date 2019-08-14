<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="logo">
    <Nav />
    <ServicesContent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';
import ServicesContent from '@/components/ServicesContent.vue';

@Component({
  components: {
    ServicesContent,
    Nav,
  },
})
export default class Mission extends Vue {}
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
