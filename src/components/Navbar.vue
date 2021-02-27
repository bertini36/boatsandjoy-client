<template>
  <div class="navbar md:invisible h-16 md:h-0">
    <div class="flex flex-row justify-between px-6">
      <a :href="base_url + '#home'">
        <img src="../assets/img/favicon.png" alt="main logo" class="cursor-pointer h-10"/>
      </a>
      <div class="pt-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 fill-current text-black hover:text-orange-600 cursor-pointer" @click="showFullScreenNav">
          <path d="M17.686 15.09c.785 0 1.422.573 1.495 1.314l.006.14c.028.81-.64 1.456-1.473 1.456H1.502c-.786 0-1.423-.573-1.495-1.314L0 16.545c0-.808.667-1.455 1.502-1.455h16.184zm-5.534-7.491c.785 0 1.423.573 1.495 1.314l.007.14c.027.782-.64 1.456-1.502 1.456H1.502c-.786 0-1.423-.573-1.495-1.314L0 9.054c0-.808.667-1.455 1.502-1.455h10.65zM23.498 0c.785 0 1.422.573 1.494 1.314l.007.141c.028.808-.667 1.455-1.501 1.455H1.502C.716 2.91.079 2.337.007 1.596L0 1.456C0 .645.667 0 1.502 0h21.996z" transform="translate(-392 -128) translate(396 135)"/>
        </svg>
      </div>
    </div>
  </div>

  <div class="navbar invisible md:visible h-0 md:h-20">
    <div class="flex flex-row justify-between md:px-12 lg:px-60 xl:px-96">
      <a :href="base_url + '#home'">
        <img src="../assets/img/favicon.png" alt="main logo" class="cursor-pointer h-12"/>
      </a>
      <ul class="pt-3 flex flex-row">
        <li class="ml-8 link"><a :href="base_url + '#home'">{{ $t('home') }}</a></li>
        <li class="ml-8 link"><a :href="base_url + '#boats'">{{ $t('boats') }}</a></li>
        <li class="ml-8 link"><a :href="base_url + '#watersports'">{{ $t('watersports') }}</a></li>
        <li class="ml-8 "><LanguageSwitch></LanguageSwitch></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import LanguageSwitch from '../components/LanguageSwitch';

export default {
  components: { LanguageSwitch },
  setup() {
    const store = useStore();
    const base_url = process.env.VUE_APP_URL;

    return {
      base_url,
      showFullScreenNav: () => store.commit('showFullScreenNav'),
    }
  }
}
</script>

<style scoped>
.navbar {
  @apply w-full top-0 z-30;
  @apply bg-gray-800 shadow-lg;
  @apply flex flex-col justify-center fixed;
  @apply bg-white;
}
.link {
  @apply text-black text-lg font-medium;
  @apply cursor-pointer hover:text-orange-600 hover:text-xl;
}
</style>
