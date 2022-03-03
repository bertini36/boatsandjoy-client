<template>
  <form class="flex flex-col">
    <div class="inline-flex mb-3">
      <span class="mt-1" :class="{'price-circle': !formData.isResident && !validPromocodeApplied, 'disabled-price-circle': formData.isResident || validPromocodeApplied}">
        {{ basePrice }}€
      </span>
      <span class="mt-1 ml-2 price-circle" v-if="formData.isResident || validPromocodeApplied">
        {{ finalPrice }}€
      </span>
      <h1 class="title-left pt-3 ml-4">{{ availabilityOption.boat.name }}</h1>
    </div>
    <p class="mb-6">
      {{ formatDate(availabilityOption.day) }}
      {{ $t('results_from') }} {{ formatHour(availabilityOption.from_hour) }}
      {{ $t('results_to') }} {{ formatHour(availabilityOption.to_hour) }}
    </p>

    <!--
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" class="h-5 w-5 cursor-pointer" v-model="formData.isResident" @click="(event) => applyResidentDiscount(event)">
      <span class="pl-3 text-xs md:text-sm">{{ $t('checkout_resident') }}</span>
    </label>
    -->

    <label class="inline-flex items-center mt-1 cursor-pointer text-xs md:text-sm">
      <input type="checkbox" class="h-5 w-5 cursor-pointer" v-model="formData.acceptLegalAdvice">
        <span class="pl-3">{{ $t('checkout_legal_advice') }}</span>&nbsp;
        (<a class="hover:text-orange-500 hover:underline"
           :href="`/pdf/legal_advice_${i18n.locale.value}.pdf`" target="_blank">
          {{ $t('download') }}
        </a>)
      <span class="pl-3 text-sm text-red-400">{{ errors.acceptLegalAdvice }}</span>
    </label>

    <label class="inline-flex items-center mt-1 cursor-pointer text-xs md:text-sm">
      <input type="checkbox" class="h-5 w-5 cursor-pointer" v-model="formData.acceptTermsAndConditions">
      <span class="pl-3">{{ $t('checkout_terms_and_conditions') }}</span>&nbsp;
      (<a class="hover:text-orange-500 hover:underline"
         :href="`/pdf/terms_conditions_${i18n.locale.value}.pdf`" target="_blank">
        {{ $t('download') }}
      </a>)
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

    <div class="flex flex-row">
      <div class="flex flex-col">
        <label for="promocode" class="mt-2 pl-1">{{ $t('checkout_promocode') }}</label>
        <input id="promocode" type="text" class="custom-input" v-model="formData.promocode">
      </div>
      <button class="btn-slim my-9 ml-4 text-center justify-center md:mb-0" @click="(event) => goValidatePromocode(event)" v-html="$t('checkout_validate')"></button>
      <span class="text-sm text-red-400 pl-4 pt-10">{{ errors.promocode }}</span>
    </div>

    <div class="alert hidden md:block" v-html="$t('checkout_extra_info')" role="alert"></div>

    <div class="flex flex-col">
      <label for="extras" class="mt-2 pl-1">{{ $t('checkout_extras') }}</label>
      <textarea id="extras" rows="2" class="custom-textarea" v-model="formData.extras"></textarea>
    </div>

    <div class="flex">
      <button class="btn my-8 w-full flex-grow inline-flex text-center justify-center md:mb-0" @click="(event) => goPay(event)">
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
import { createBooking, validatePromocode } from '../services/api';
import { redirectToCheckout } from '../services/stripe';

export default {
  props: {
    availabilityOption: Object,
  },

  setup(props) {
    const i18n = useI18n();

    let { availabilityOption } = toRefs(props)
    const basePrice = availabilityOption.value.price
    const booking_day = availabilityOption.value.day
    const residentDiscount = availabilityOption.value.discounts.resident;
    const residentDiscountApplied = ref(0);
    const validPromocodeApplied = ref(false);
    const promocodeAppliedDiscount = ref(0);
    const finalPrice = ref(basePrice - (basePrice * (residentDiscountApplied.value + promocodeAppliedDiscount.value)));

    const formData = reactive({
      isResident: false,
      acceptLegalAdvice: false,
      acceptTermsAndConditions: false,
      name: '',
      telephone: '',
      extras: '',
      promocode: '',
    });

    const errors = reactive({
      acceptLegalAdvic: '',
      acceptTermsAndConditions: '',
      name: '',
      telephone: '',
      promocode: '',
    });

    const goPay = async (event) => {
      event.preventDefault();
      const error = checkErrors();
      if (!error) {
        const response = await createBooking(
          basePrice,
          formData.isResident,
          formData.promocode,
          availabilityOption.value.slots.map(slot => slot.id),
          formData.name,
          formData.telephone,
          formData.extras
        );
        const stripeSessionId = response.session_id;
        await redirectToCheckout(stripeSessionId);
      }
    };

    const goValidatePromocode = async (event) => {
      event.preventDefault();
      const response = await validatePromocode(formData.promocode, booking_day);
      validPromocodeApplied.value = response.valid;
      errors.promocode = '';
      if (validPromocodeApplied.value) {
        promocodeAppliedDiscount.value = response.factor;
      } else {
        errors.promocode = i18n.t('checkout_promocode_error');
      }
      finalPrice.value = basePrice - (basePrice * (residentDiscountApplied.value + promocodeAppliedDiscount.value));
    };

    const applyResidentDiscount = async () => {
      if (residentDiscountApplied.value === 0) {
        residentDiscountApplied.value = residentDiscount;
      } else {
        residentDiscountApplied.value = 0;
      }
      finalPrice.value = basePrice - (basePrice * (residentDiscountApplied.value + promocodeAppliedDiscount.value));
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
      basePrice,
      finalPrice,
      formData,
      goPay,
      errors,
      formatDate,
      formatHour,
      i18n,
      goValidatePromocode,
      validPromocodeApplied,
      applyResidentDiscount,
    }
  }
}
</script>

<style scoped>

</style>
