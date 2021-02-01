<template>
  <Transition name="fade">
    <div v-if="showingFullScreenNav" @click.self="hideFullScreenNav"
      class="fixed inset-0 w-full h-full flex items-center justify-center z-30">
      <div class="w-full h-full bg-gray-100">
        <div class="flex flex-row justify-between">
          <div class="pt-8 pl-6">
            <img src="../assets/img/favicon.png" alt="main logo" class="cursor-pointer h-12"/>
          </div>
          <button aria-label="close" @click.prevent="hideFullScreenNav" class="text-xl text-gray-500 mt-8 mr-8">
            <img src="../assets/icons/icon-close-big.svg" alt="close icon">
          </button>
        </div>
        <ul class="mb-auto mt-12">
          <li><router-link tag="span" :to="{ name: 'home' }" @click="close">Inicio</router-link></li>
        </ul>
      </div>
    </div>
  </Transition>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'FullScreenNav',
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
    @apply pt-4 pb-4 pl-10 xl:px-12 cursor-pointer;
    @apply text-black text-xl;
    @apply hover:text-black hover:underline;
  }
</style>
