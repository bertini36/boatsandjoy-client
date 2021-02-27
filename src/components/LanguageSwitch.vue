<template>
  <div>
    <label for="toggle" class="mr-2 text-xs">{{ $t('english') }}</label>
    <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
      <input type="checkbox" @click="switchLanguage" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer focus:outline-none"/>
      <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
    </div>
    <label for="toggle" class="ml-2 text-xs">{{ $t('spanish') }}</label>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const i18n = useI18n();

    const switchLanguage = () => {
      i18n.locale.value = i18n.locale.value === 'en' ? 'es' : 'en';
    };

    return {
      switchLanguage,
    };
  }
};
</script>

<style scoped>
/* CHECKBOX TOGGLE SWITCH */
/* @apply rules for documentation, these do not work as inline style */
.toggle-checkbox:checked {
    @apply right-0;
    right: 0;
}
</style>
