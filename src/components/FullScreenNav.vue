<template>
  <Transition name="fade">
    <div v-if="showingFullScreenNav" @click.self="hideFullScreenNav"
      class="fixed inset-0 w-full h-full flex items-center justify-center z-30">
      <div class="w-full h-full bg-white">
        <div class="flex flex-row justify-between">
          <div class="pt-8 pl-6">
            <img src="../assets/img/favicon.png" alt="main logo" class="cursor-pointer h-12"/>
          </div>
          <button aria-label="close" @click.prevent="hideFullScreenNav" class="text-xl text-gray-500 mt-8 mr-8">
            <img src="../assets/icons/icon-close-big.svg" alt="close icon">
          </button>
        </div>
        <ul class="mb-auto mt-12">
          <li><a href="#home" @click="hideFullScreenNav" class="w-full">Home</a></li>
          <li><a href="#boats" @click="hideFullScreenNav" class="w-full">Boats</a></li>
          <li><a href="#watersports" @click="hideFullScreenNav" class="w-full">Watersports</a></li>
          <li><LanguageSwitch></LanguageSwitch></li>
        </ul>
      </div>
    </div>
  </Transition>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import LanguageSwitch from '@/components/LanguageSwitch';

export default {
  components: { LanguageSwitch },
  setup() {
    const store = useStore();

    return {
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
