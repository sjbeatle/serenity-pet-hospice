<template>
  <div class="hello">
    <div class="hr"></div>
    <h1>Hospice, Palliative, and Home Care</h1>
    <h4>"For your pet, through your family vet"</h4>
    <h2><a href="tel:2012896583" class="telephone">201-289-6583</a></h2>
    <h3><a href="mailto:info@serenitypethospice.org" class="telephone">info@serenitypethospice.org</a></h3>
    <div class="hr"></div>
    <p>
      <strong>Serving the Hudson Valley &amp; Northern New Jersey</strong>
    <p>
    <div class="hr"></div>
    <p>
      Our site is currently under construction but please
      continue to check back for updates. Thank you!
    </p>
    <br />
    <p>
      <a href="https://www.iaahpc.org/" target="_blank"><img alt="IAAHPC logo" class="vendor" src="../assets/IAAHPC.png"></a>
      <br />
      <br />
      <br />
      <a href="https://www.navta.net/" target="_blank"><img alt="NAVTA logo" class="vendor" src="../assets/NAVTA.png"></a>
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
.hr {
  font-size: 0;
  line-height: 0;
  height: 1px;
  background-color: #0076b3;
  margin: 2rem 0;
}
a {
  color: #0076b3;
}

.telephone {
  color: #2c3e50;
  text-decoration: none;
}

.vendor {
  max-width: 100%;
  margin: 0 auto;
}
</style>
