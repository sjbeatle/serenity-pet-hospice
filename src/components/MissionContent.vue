<template>
  <div class="mission">
    <div class="hr"></div>
    <h1>Mission</h1>
    <p>
      Our mission is to provide compassionate end-of-life care for pets and emotional
support as well as education for their families. We work directly with the family
Veterinarian to ensure that terminal illness and the dying process can be experienced
with dignity. Serenity Pet Hospice will follow treatment plans as provided by the family
Veterinarian to focus on having the pet living fully until the last moment of life.
    </p>
    <p>
      Serenity Pet Hospice also offers a wide variety of home care services. All services are
performed by Licensed or Certified Veterinary Technicians. Serenity Pet Hospice does
not provide treatment plans or prescribe medications. Medications, treatment plans,
and materials are provided through your referring Veterinarian.
    </p>
    <p>
      Please contact us today at <a href="tel:2012896583">201-289-6583</a> or email us at <a href="mailto:info@serenitypethospice.org">info@serenitypethospice.org</a> for
more information.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MissionContent extends Vue {
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

p {
  text-align: left;
  line-height: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: 540px) {
    margin-left: -100px;
    margin-right: -100px;
  }
}
</style>
