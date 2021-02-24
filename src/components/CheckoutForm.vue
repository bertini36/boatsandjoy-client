<template>
  <form class="flex flex-col">
    <div class="inline-flex mb-3">
      <span class="mt-1" :class="{'price-circle': !isResident, 'disabled-price-circle': isResident}">
        {{ price }}€
      </span>
      <span class="text-6xl font-bold text-blue-500" v-if="isResident">
        >
      </span>
      <span class="mt-1 price-circle" v-if="isResident">
        {{ residentPrice }}€
      </span>
      <h1 class="title-left pt-3 ml-4">{{ availabilityOption.boat.name }}</h1>
    </div>
    <p class="mb-6">
      {{ i18n.$t('results_from') }} {{ $filters.formatHour(availabilityOption.from_hour) }}
      {{ i18n.$t('results_to') }} {{ $filters.formatHour(availabilityOption.to_hour) }}
    </p>

    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" class="h-5 w-5 cursor-pointer" v-model="isResident">
      <span class="pl-3 text-xs md:text-sm">{{ i18n.$t('checkout_resident') }}</span>
    </label>

    <label class="inline-flex items-center mt-1 cursor-pointer">
      <input type="checkbox" class="h-5 w-5 cursor-pointer" v-model="acceptLegalAdvice">
      <span class="pl-3 text-xs md:text-sm">{{ i18n.$t('checkout_legal_advice') }}</span>
      <span class="pl-3 text-sm text-red-400">{{ acceptLegalAdviceError }}</span>
    </label>

    <label class="inline-flex items-center mt-1 cursor-pointer">
      <input type="checkbox" class="h-5 w-5 cursor-pointer" v-model="acceptTermsAndConditions">
      <span class="pl-3 text-xs md:text-sm">{{ i18n.$t('checkout_terms_and_conditions') }}</span>
      <span class="pl-3 text-sm text-red-400">{{ acceptTermsAndConditionsError }}</span>
    </label>

    <div class="flex flex-col">
      <label for="name" class="mt-4 pl-1">{{ i18n.$t('checkout_name') }}</label>
      <input id="name" type="text" class="custom-input" v-model="name">
      <span class="text-sm text-red-400 pl-1">{{ nameError }}</span>
    </div>


    <div class="flex flex-col">
      <label for="telephone" class="mt-2 pl-1">{{ i18n.$t('checkout_telephone') }}</label>
      <input id="telephone" type="number" class="custom-input" v-model="telephone">
      <span class="text-sm text-red-400 pl-1">{{ telephoneError }}</span>
    </div>


    <div class="flex flex-col">
      <label for="extras" class="mt-2 pl-1">{{ i18n.$t('checkout_extras') }}</label>
      <textarea id="extras" rows="2" class="custom-textarea" v-model="extras"></textarea>
    </div>

    <div class="flex">
      <button class="btn mt-12 w-full flex-grow inline-flex text-center justify-center" @click="(event) => pay(event)">
        <img src="../assets/img/icon-add-credit-card.svg" alt="Add credit card icon" class="mr-2">
        {{ i18n.$t('checkout_pay') }}
      </button>
    </div>
  </form>
</template>

<script>
import {ref, toRefs} from 'vue';
import {useI18n} from '@/utils/i18nPlugin';

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

    const acceptLegalAdviceError = ref('');
    const acceptTermsAndConditionsError = ref('');
    const nameError = ref('');
    const telephoneError = ref('');

    const pay = (event) => {
      event.preventDefault();
      const error = checkErrors();
      if (!error) {
        console.log('Tamos bien');
      }
    };

    const checkErrors = () => {
      let error = false;
      acceptLegalAdviceError.value = '';
      if (!acceptLegalAdvice.value) {
        acceptLegalAdviceError.value = i18n.value.$t('checkout_accept_legal_advice_error');
        error = true;
      }
      acceptTermsAndConditionsError.value = '';
      if (!acceptTermsAndConditions.value) {
        acceptTermsAndConditionsError.value = i18n.value.$t('checkout_accept_terms_and_conditions_error');
        error = true;
      }
      nameError.value = '';
      if (name.value === '') {
        nameError.value = i18n.value.$t('checkout_name_error');
        error = true;
      }
      telephoneError.value = '';
      if (telephone.value === '') {
        telephoneError.value = i18n.value.$t('checkout_telephone_error');
        error = true;
      }
      return error;
    }

    return {
      i18n,
      price,
      residentPrice,
      isResident,
      acceptLegalAdvice,
      acceptTermsAndConditions,
      name,
      telephone,
      extras,
      pay,
      acceptLegalAdviceError,
      acceptTermsAndConditionsError,
      nameError,
      telephoneError,
    }
  }
}
</script>

<style scoped>

</style>
