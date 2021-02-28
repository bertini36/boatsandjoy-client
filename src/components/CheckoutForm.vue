<template>
  <form class="flex flex-col">
    <div class="inline-flex mb-3">
      <span class="mt-1" :class="{'price-circle': !formData.isResident, 'disabled-price-circle': formData.isResident}">
        {{ price }}€
      </span>
      <span class="mt-1 ml-2 price-circle" v-if="formData.isResident">
        {{ residentPrice }}€
      </span>
      <h1 class="title-left pt-3 ml-4">{{ availabilityOption.boat.name }}</h1>
    </div>
    <p class="mb-6">
      {{ formatDate(availabilityOption.day) }}
      {{ $t('results_from') }} {{ formatHour(availabilityOption.from_hour) }}
      {{ $t('results_to') }} {{ formatHour(availabilityOption.to_hour) }}
    </p>

    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" class="h-5 w-5 cursor-pointer" v-model="formData.isResident">
      <span class="pl-3 text-xs md:text-sm">{{ $t('checkout_resident') }}</span>
    </label>

    <label class="inline-flex items-center mt-1 cursor-pointer">
      <input type="checkbox" class="h-5 w-5 cursor-pointer" v-model="formData.acceptLegalAdvice">
      <span class="pl-3 text-xs md:text-sm">{{ $t('checkout_legal_advice') }}</span>
      <span class="pl-3 text-sm text-red-400">{{ errors.acceptLegalAdvice }}</span>
    </label>

    <label class="inline-flex items-center mt-1 cursor-pointer">
      <input type="checkbox" class="h-5 w-5 cursor-pointer" v-model="formData.acceptTermsAndConditions">
      <span class="pl-3 text-xs md:text-sm">{{ $t('checkout_terms_and_conditions') }}</span>
      <span class="pl-3 text-sm text-red-400">{{ errors.acceptTermsAndConditions }}</span>
    </label>

    <div class="flex flex-col">
      <label for="name" class="mt-4 pl-1">{{ $t('checkout_name') }}</label>
      <input id="name" type="text" class="custom-input" v-model="formData.name">
      <span class="text-sm text-red-400 pl-1">{{ errors.name }}</span>
    </div>


    <div class="flex flex-col">
      <label for="telephone" class="mt-2 pl-1">{{ $t('checkout_telephone') }}</label>
      <input id="telephone" type="number" class="custom-input" v-model="formData.telephone">
      <span class="text-sm text-red-400 pl-1">{{ errors.telephone }}</span>
    </div>


    <div class="flex flex-col">
      <label for="extras" class="mt-2 pl-1">{{ $t('checkout_extras') }}</label>
      <textarea id="extras" rows="2" class="custom-textarea" v-model="formData.extras"></textarea>
    </div>

    <div class="flex">
      <button class="btn mt-12 w-full flex-grow inline-flex text-center justify-center" @click="(event) => goPay(event)">
        <img src="../assets/img/icon-add-credit-card.svg" alt="Add credit card icon" class="mr-2">
        {{ $t('checkout_pay') }}
      </button>
    </div>
  </form>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';
import { useI18n } from 'vue-i18n';

import { formatDate, formatHour } from '../utils/dates';
import { createBooking } from '../services/api';
import { redirectToCheckout } from '../services/stripe';

export default {
  props: {
    availabilityOption: Object,
  },

  setup(props) {
    const i18n = useI18n();

    let { availabilityOption } = toRefs(props)
    const basePrice = availabilityOption.value.price;
    const residentDiscount = availabilityOption.value.discounts.resident;
    const price = ref(basePrice);
    const residentPrice = ref(basePrice - (basePrice * residentDiscount));

    const formData = reactive({
      isResident: false,
      acceptLegalAdvice: false,
      acceptTermsAndConditions: false,
      name: '',
      telephone: '',
      extras: '',
    });

    const errors = reactive({
      acceptLegalAdvic: '',
      acceptTermsAndConditions: '',
      name: '',
      telephone: ''
    });

    const goPay = async (event) => {
      event.preventDefault();
      const error = checkErrors();
      if (!error) {
        const response = await createBooking(
          formData.isResident ? residentPrice.value : price.value,
          availabilityOption.value.slots.map(slot => slot.id),
          formData.name,
          formData.telephone,
          formData.extras
        );
        const stripeSessionId = response.session_id;
        await redirectToCheckout(stripeSessionId);
      }
    };

    const checkErrors = () => {
      let error = false;
      errors.acceptLegalAdvice = '';
      if (!formData.acceptLegalAdvice) {
        errors.acceptLegalAdvice = i18n.t('checkout_accept_legal_advice_error');
        error = true;
      }
      errors.acceptTermsAndConditions = '';
      if (!formData.acceptTermsAndConditions) {
        errors.acceptTermsAndConditions = i18n.t('checkout_accept_terms_and_conditions_error');
        error = true;
      }
      errors.name = '';
      if (formData.name === '') {
        errors.name = i18n.t('checkout_name_error');
        error = true;
      }
      errors.telephone = '';
      if (formData.telephone === '') {
        errors.telephone = i18n.t('checkout_telephone_error');
        error = true;
      }
      return error;
    }

    return {
      price,
      residentPrice,
      formData,
      goPay,
      errors,
      formatDate,
      formatHour
    }
  }
}
</script>

<style scoped>

</style>
