<template>
  <form class="flex flex-col">
    <div class="inline-flex mb-3">
      <span class="bg-orange-500 text-white text-xl rounded-full px-3 py-4 font-bold">
        {{ price }}€
      </span>
      <h1 class="text-3xl font-bold tracking-widest uppercase text-orange-500 pt-3 ml-4">{{ availabilityOption.boat.name }}</h1>
    </div>
    <p class="mb-6">
      {{ i18n.$t('results_from') }} {{ availabilityOption.from_hour }}
      {{ i18n.$t('results_to') }} {{availabilityOption.to_hour }}
    </p>

    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" class="h-5 w-5" v-model="applyResidentDiscount">
      <span class="pl-3 text-xs md:text-sm" @change="updatePrice">{{ i18n.$t('checkout_resident') }}</span>
    </label>

    <label class="inline-flex items-center mt-1 cursor-pointer">
      <input type="checkbox" class="h-5 w-5">
      <span class="pl-3 text-xs md:text-sm">{{ i18n.$t('checkout_legal_advice') }}</span>
    </label>

    <label class="inline-flex items-center mt-1 cursor-pointer">
      <input type="checkbox" class="h-5 w-5">
      <span class="pl-3 text-xs md:text-sm">{{ i18n.$t('checkout_resident') }}</span>
    </label>

    <input type="text" class="custom-input mt-4" :placeholder="i18n.$t('checkout_name')">

    <input type="number" class="custom-input mt-2" :placeholder="i18n.$t('checkout_telephone')">

    <textarea rows="2" class="custom-textarea mt-2" :placeholder="i18n.$t('checkout_extras')"></textarea>

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
    const applyResidentDiscount = ref(false);

    const updatePrice = () => {
      if (applyResidentDiscount.value) {
        price.value = basePrice - (basePrice * residentDiscount);
      }
    }

    return {
      i18n,
      applyResidentDiscount,
      price,
      updatePrice,
    }
  }
}
</script>

<style scoped>

</style>
