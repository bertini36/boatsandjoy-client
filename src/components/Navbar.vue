<template>
  <div class="navbar md:invisible h-16 md:h-0">
    <div class="flex flex-row justify-between px-6">
      <router-link tag="div" class="logo" :to="{ name: 'home' }">
        <img src="../assets/img/favicon.png" alt="main logo" class="cursor-pointer h-10"/>
      </router-link>
      <div class="pt-1">
        <img src="../assets/icons/icon-menu-black.svg" alt="dropdown menu icon" class="cursor-pointer h-8" @click="showFullScreenNav"/>
      </div>
    </div>
  </div>

  <div class="navbar invisible md:visible h-0 md:h-20">
    <div class="flex flex-row justify-between md:px-32 lg:px-60 xl:px-96">
      <router-link tag="div" class="logo" :to="{ name: 'home' }">
        <img src="../assets/img/favicon.png" alt="main logo" class="cursor-pointer h-12"/>
      </router-link>
      <div class="pt-3">
        <router-link tag="span" class="ml-8 link" :to="{ name: 'home' }">Inicio</router-link>
        <span class="ml-8 link">Embarcaciones</span>
        <span class="ml-8 link">Actividades</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
  name: 'Navbar',
  setup() {
    const store = useStore();

    return {
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
