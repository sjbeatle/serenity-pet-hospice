<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="logo">
    <Nav />
    <MissionContent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';
import MissionContent from '@/components/MissionContent.vue';

@Component({
  components: {
    MissionContent,
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
