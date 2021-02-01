<template>
  <Transition name="fade">
    <div v-if="showingFullScreenNav" @click.self="hideFullScreenNav"
      class="fixed inset-0 w-full h-full flex items-center justify-center z-30">
      <div class="w-full h-full bg-gray-100">
        <div class="flex flex-row justify-between">
          <span class="mt-8 ml-8 text-gray-600 text-3xl font-bold tracking-widest">QP</span>
          <button aria-label="close" @click.prevent="hideFullScreenNav" class="text-xl text-gray-500 mt-8 mr-8">
            <img src="../assets/icons/icon-close-big.svg" alt="close icon">
          </button>
        </div>
        <ul class="mb-auto mt-12">
          <li><router-link tag="span" :to="{ name: 'home' }" @click="close">Inicio</router-link></li>
          <li><router-link tag="span" :to="{ name: 'projects' }" @click="close">Proyectos</router-link></li>
          <li><router-link tag="span" :to="{ name: 'contact' }" @click="close">Contacta</router-link></li>
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