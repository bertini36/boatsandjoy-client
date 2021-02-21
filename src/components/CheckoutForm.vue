<template>
  <form class="flex flex-col">
    <div class="inline-flex mb-3">
      <span :class="{'price-circle': !isResident, 'disabled-price-circle': isResident}">
        {{ price }}€
      </span>
      <span class="price-circle ml-2" v-if="isResident">
        {{ residentPrice }}€
      </span>
      <h1 class="title-left pt-3 ml-4">{{ availabilityOption.boat.name }}</h1>
    </div>
    <p class="mb-6">
      {{ i18n.$t('results_from') }} {{ availabilityOption.from_hour }}
      {{ i18n.$t('results_to') }} {{availabilityOption.to_hour }}
    </p>

    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" class="h-5 w-5 cursor-pointer" v-model="isResident">
      <span class="pl-3 text-xs md:text-sm">{{ i18n.$t('checkout_resident') }}</span>
    </label>

    <label class="inline-flex items-center mt-1 cursor-pointer">
      <input type="checkbox" class="h-5 w-5 cursor-pointer" v-model="acceptLegalAdvice">
      <span class="pl-3 text-xs md:text-sm">{{ i18n.$t('checkout_legal_advice') }}</span>
    </label>

    <label class="inline-flex items-center mt-1 cursor-pointer">
      <input type="checkbox" class="h-5 w-5 cursor-pointer" v-model="acceptTermsAndConditions">
      <span class="pl-3 text-xs md:text-sm">{{ i18n.$t('checkout_terms_and_conditions') }}</span>
    </label>

    <label for="name" class="mt-4 pl-1">{{ i18n.$t('checkout_name') }}</label>
    <input id="name" type="text" class="custom-input" v-model="name" required>

    <label for="telephone" class="mt-2 pl-1">{{ i18n.$t('checkout_telephone') }}</label>
    <input id="telephone" type="number" class="custom-input" v-model="telephone" required>

    <label for="extras" class="mt-2 pl-1">{{ i18n.$t('checkout_extras') }}</label>
    <textarea id="extras" rows="2" class="custom-textarea" v-model="extras"></textarea>

    <div class="flex">
      <button class="btn mt-6 w-full flex-grow">
        {{ i18n.$t('checkout_pay') }}
      </button>
    </div>
  </form>
</template>

<script>
import {ref, toRefs} from 'vue';
import {useI18n} from '@/i18nPlugin';

export default {
  props: {
    availabilityOption: Object,
  },

  setup(props) {
    const i18n = ref(useI18n());

    let { availabilityOption } = toRefs(props)
    const basePrice = availabilityOption.value.price;
    const residentDiscount = availabilityOption.value.discounts.resident;
    const price = ref(basePrice);
    const residentPrice = ref(basePrice - (basePrice * residentDiscount));

    const isResident = ref(false);
    const acceptLegalAdvice = ref(false);
    const acceptTermsAndConditions = ref(false);
    const name = ref('');
    const telephone = ref('');
    const extras = ref('');

    return {
      i18n,
      price,
      residentPrice,
      isResident,
      acceptLegalAdvice,
      acceptTermsAndConditions,
      name,
      telephone,
      extras
    }
  }
}
</script>

<style scoped>

</style>
