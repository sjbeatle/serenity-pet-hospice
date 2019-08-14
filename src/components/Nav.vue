<template>
  <div class="nav">
    <router-link to="/">Home</router-link> &nbsp;&bull;&nbsp;
    <router-link to="mission">Mission</router-link> &nbsp;&bull;&nbsp;
    <router-link to="services">Services</router-link>

    <div class="social">
      <br />
      <a href="https://www.facebook.com/Serenity-Pet-Hospice-and-Home-Care-113679299986319/" target="_blank"><i class="fa fa-facebook-square"></i></a>

      &nbsp;
      &nbsp;

      <a href="https://www.instagram.com/serenity_pet_hospice/" target="_blank"><i class="fa fa-instagram"></i></a>
    </div>
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

  .social {
    margin-bottom: -20px;

    i {
      font-size: 2rem;
    }
  }
}
</style>
