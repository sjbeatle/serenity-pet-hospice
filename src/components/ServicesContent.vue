<template>
  <div class="mission">
    <div class="hr"></div>
    <h1>Services &amp; Pricing Information</h1>
    <p>
      <strong>Hospice care daily pricing:</strong> All hospice patients are under the direct care of the referring family
Veterinarian. Services are performed by Licensed or Certified Veterinary Technicians
    </p>
    <p>
      <em>Initial consultation - $195.</em>
      <ul>
        <li>Review of referral and medical records with your family veterinarian</li>
        <li>Full assessment of your pet’s quality of life including pain and anxiety</li>
        <li>Charting medications and treatments</li>
        <li>Initial vital signs including weight, pulse rate, temperature, and blood pressure</li>
        <li>Nutrition evaluation</li>
        <li>Customized health plan for your pet</li>
      </ul>
    </p>
    <p>
      <em>Level 1 care - $85.</em>
      <ul>
        <li>Once daily visit from a technician</li>
        <li>Assessment of your pet’s health including pain and anxiety</li>
        <li>Report any changes to your family veterinarian</li>
        <li>Administer medications and treatments as per your family veterinarian</li>
        <li>Monitor weight and vital signs</li>
      </ul>
    </p>
    <p>
      <em>Level 2 care - $125.</em>
      <ul>
        <li>Once to twice daily visits from a technician</li>
        <li>Assessment of your pet’s health including pain and anxiety</li>
        <li>Report any changes to your family veterinarian</li>
        <li>Administer medications and treatments as per your family veterinarian</li>
        <li>Monitor weight and vital signs</li>
        <li>Monitor blood pressure</li>
        <li>Injections as prescribed by your veterinarian</li>
        <li>Subcutaneous fluid administration</li>
      </ul>
    </p>
    <p>
      <em>Level 3 care - $175.</em>
      <ul>
        <li>Twice daily visits from a technician</li>
        <li>Assessment of your pet’s health including pain and anxiety</li>
        <li>Report any changes to your family veterinarian</li>
        <li>Administer medications and treatments as per your family veterinarian</li>
        <li>Monitor weight and vital signs</li>
        <li>Monitor blood pressure</li>
        <li>Injections as prescribed by your veterinarian</li>
        <li>Subcutaneous fluid administration</li>
        <li>Blood sugar levels checked</li>
        <li>Physical therapy</li>
        <li>Wound management</li>
      </ul>
    </p>
    <p>
      <strong>Palliative care and home services -</strong> Our mission is to work together with your family
Veterinarian as an extension of care to offer the best care in the comfort of your own home. All
services are performed by Licensed or Certified Veterinary Technicians. Serenity Pet Hospice,
LLC does not provide treatment plans or prescribe medications. Medications, treatment plans,
and materials are provided through your referring Veterinarian.
      <ul>
        <li>Diabetic educational training and care: $45/ lesson</li>
        <li>*Insulin administration: $22/ visit</li>
        <li>*Blood glucose check: $42/ visit</li>
        <li>*Blood glucose curve (For previously diagnosed diabetics only): $115/ day</li>
        <li>*Subcutaneous fluid administration: $35</li>
        <li>*Blood pressure evaluation: $18</li>
        <li>*EKG: $18</li>
        <li>De-matting / shaving: $25</li>
        <li>Medicated bath: $40</li>
        <li>*Wound management of decubital sores with laser therapy: $55</li>
        <li>*Wound care/ Bandage change $45</li>
        <li>*Physical therapy/ Rehabilitation: $65/ visit</li>
        <li>Post-operative care: $40/ visit</li>
        <li>*Post-operative care with physical therapy: $75/ visit</li>
        <li>*Ear/ eye cleaning with medication application: $35</li>
        <li>*Injections: $22/ visit</li>
        <li>*Nebulizer treatment: $40/use</li>
        <li>*Oxygen: $120 for set up and 30 minutes of oxygen; $60/hr</li>
        <li>Reiki: $75/ 15 minutes; $115/ 30 minutes</li>
        <li>Massage therapy: $60/ 30 minutes</li>
        <li>*Laser therapy: $55/ single treatment; $40/ treatment with service package</li>
        <li>Whelping assistance $65/hr</li>
        <li>Neonatal care: call for pricing</li>
        <li>Nail trims $35</li>
        <li>Anal gland expression: $30</li>
        <li>Transportation: $40 round trip within 25 miles; extra charge for additional miles</li>
        <li>CPR and First Aid class demonstration $65</li>
        <li>Holiday charge (includes Christmas Eve)- $50</li>
        <li>Pet sitting $35/visit</li>
        <li>Overnight pet sitting up to 3 pets: $90/night. Each additional pet is $5. Arrival time is 8pm and departure time is 7:30am</li>
      </ul>
      <strong>*Service requires patient to be under the care of a Veterinarian</strong>
    </p>
    <p>
      <strong>Euthanasia- performed by a Licensed Veterinarian. Although there are emergency situations
that we will attempt to accommodate, most home euthanasia’s are done through
appointments. New clients are also able to schedule this service.</strong>
      <ul>
        <li>Home euthanasia - call for pricing</li>
        <li>Care of body – depends on size and aftercare</li>
        <li>Paw print – included</li>
        <li>Grief counseling – included</li>
        <li>Donation to the Jeanie Beanie Fund in your pet’s name. The fund donates food and supplies to pets whose human companions are in hospice care.</li>
      </ul>
    </p>
    <p><strong>Serenity Pet Hospice, LLC is fully insured with professional and personal liability.
We work with Licensed Veterinarians and Licensed/ Certified Veterinary
Technicians as well as licensed professionals trained in grief counseling to
provide you with the highest quality home care for your pet.</strong></p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ServicesContent extends Vue {
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
