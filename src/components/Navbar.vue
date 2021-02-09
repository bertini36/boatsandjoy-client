<template>
  <div class="navbar md:invisible h-16 md:h-0">
    <div class="flex flex-row justify-between px-6">
      <a href="#home">
        <img src="../assets/img/favicon.png" alt="main logo" class="cursor-pointer h-10"/>
      </a>
      <div class="pt-1">
        <img src="../assets/icons/icon-menu-black.svg" alt="dropdown menu icon" class="cursor-pointer h-8" @click="showFullScreenNav"/>
      </div>
    </div>
  </div>

  <div class="navbar invisible md:visible h-0 md:h-20">
    <div class="flex flex-row justify-between md:px-32 lg:px-60 xl:px-96">
      <a href="#home">
        <img src="../assets/img/favicon.png" alt="main logo" class="cursor-pointer h-12"/>
      </a>
      <ul class="pt-3 flex flex-row">
        <li class="ml-8 link"><a href="#home">{{ i18n.$t('home') }}</a></li>
        <li class="ml-8 link"><a href="#boats">{{ i18n.$t('boats') }}</a></li>
        <li class="ml-8 link"><a href="#watersports">{{ i18n.$t('watersports') }}</a></li>
        <li class="ml-8 "><LanguageSwitch></LanguageSwitch></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from '@/i18nPlugin';
import LanguageSwitch from '@/components/LanguageSwitch';

export default {
  components: { LanguageSwitch },
  setup() {
    const i18n = ref(useI18n());
    const store = useStore();

    return {
      i18n,
      showFullScreenNav: () => store.commit('showFullScreenNav'),
    }
  }
}
</script>

<style scoped>
.navbar {
  @apply w-full top-0 z-30;
  @apply bg-gray-800 shadow-2xl;
  @apply flex flex-col justify-center fixed;
  @apply bg-white;
}
.link {
  @apply text-black text-lg font-medium;
  @apply cursor-pointer hover:text-orange-600 hover:text-xl;
}
</style>
