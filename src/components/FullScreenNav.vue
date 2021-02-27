<template>
  <Transition name="fade">
    <div v-if="showingFullScreenNav" @click.self="hideFullScreenNav"
      class="fixed inset-0 w-full h-full flex items-center justify-center z-30">
      <div class="w-full h-full bg-white">
        <div class="flex flex-row justify-between">
          <div class="pt-8 pl-6">
            <img src="../assets/img/favicon.png" alt="main logo" class="h-12"/>
          </div>
          <button aria-label="close" @click.prevent="hideFullScreenNav" class="text-xl text-gray-500 mt-8 mr-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 fill-current text-black hover:text-orange-600 cursor-pointer">
             <path d="M19.571.429c-.571-.572-1.428-.572-2 0L10 8 2.429.429c-.572-.572-1.429-.572-2 0-.572.571-.572 1.428 0 2L8 10 .429 17.571c-.572.572-.572 1.429 0 2 .285.286.571.429 1 .429.428 0 .714-.143 1-.429L10 12l7.571 7.571c.286.286.715.429 1 .429.286 0 .715-.143 1-.429.572-.571.572-1.428 0-2L12 10l7.571-7.571c.572-.572.572-1.429 0-2z" transform="translate(-134 -194) translate(140 200)"/>
           </svg>
          </button>
        </div>
        <ul class="mb-auto mt-12">
          <li><a :href="base_url + '#home'" @click="hideFullScreenNav" class="w-full">{{ $t('home') }}</a></li>
          <li><a :href="base_url + '#boats'" @click="hideFullScreenNav" class="w-full">{{ $t('boats') }}</a></li>
          <li><a :href="base_url + '#watersports'" @click="hideFullScreenNav" class="w-full">{{ $t('watersports') }}</a></li>
          <li><LanguageSwitch></LanguageSwitch></li>
        </ul>
      </div>
    </div>
  </Transition>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import LanguageSwitch from '../components/LanguageSwitch';

export default {
  components: { LanguageSwitch },
  setup() {
    const store = useStore();
    const base_url = process.env.VUE_APP_URL;

    return {
      base_url,
      showingFullScreenNav: computed(() => store.state.showingFullScreenNav),
      hideFullScreenNav: () => store.commit('hideFullScreenNav'),
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.4s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

li {
  @apply flex;
  @apply pt-4 pb-4 pl-10 xl:px-12;
}

a {
  @apply text-black text-xl cursor-pointer;
  @apply hover:text-orange-600 hover:text-2xl;
}
</style>
