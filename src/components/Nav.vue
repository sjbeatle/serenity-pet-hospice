<template>
  <div class="nav">'
    <router-link to="/">Home</router-link> &nbsp;&bull;&nbsp;
    <router-link to="mission">Mission</router-link> &nbsp;&bull;&nbsp;
    <router-link to="services">Services</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Nav extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  margin-top: 2rem;

  a {
    color: #446fac;
    text-decoration: none;
    transition: color 150ms;
    font-weight: bold;
    font-size: 1.5rem;

    &:hover {
      color: #223c67;
    }
  }
}
</style>
