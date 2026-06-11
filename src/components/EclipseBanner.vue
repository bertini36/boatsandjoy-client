<template>
  <div v-if="visible" class="eclipse-banner">
    <div class="flex flex-row items-center justify-center px-10 text-center">
      <span class="text-sm md:text-base">{{ $t('eclipse_banner_text') }}</span>
      <a :href="`/pdf/eclipse_${i18n.locale.value}.pdf`" target="_blank" class="ml-3 text-sm md:text-base font-bold underline whitespace-nowrap">
        {{ $t('eclipse_banner_cta') }}
      </a>
    </div>
    <button class="close" @click="dismiss" aria-label="Close">&times;</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const STORAGE_KEY = 'eclipseBannerDismissed';

export default {
  setup() {
    const i18n = useI18n();
    const visible = ref(localStorage.getItem(STORAGE_KEY) !== 'true');

    const dismiss = () => {
      localStorage.setItem(STORAGE_KEY, 'true');
      visible.value = false;
    };

    return { i18n, visible, dismiss };
  }
};
</script>

<style scoped>
.eclipse-banner {
  @apply w-full top-16 md:top-20 z-20 fixed;
  @apply bg-orange-500 text-white;
  @apply flex flex-row items-center justify-center;
  @apply py-2 shadow-md;
}
.eclipse-banner a:hover {
  @apply text-gray-200 underline;
}
.close {
  @apply absolute right-4 text-2xl leading-none;
  @apply cursor-pointer hover:text-gray-200;
}
</style>
