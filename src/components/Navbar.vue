<template>
  <div class="navbar md:invisible h-16 md:h-0">
    <div class="flex flex-row justify-between px-6">
      <router-link tag="div" class="logo" :to="{ name: 'home' }">QP</router-link>
      <img src="../assets/icons/icon-menu-white.svg" alt="dropdown menu icon" class="cursor-pointer h-8" @click="showFullScreenNav"/>
    </div>
  </div>

  <div class="navbar invisible md:visible h-0 md:h-20">
    <div class="flex flex-row justify-between px-20">
      <router-link tag="div" class="logo" :to="{ name: 'home' }">QP</router-link>
      <div class="pt-1 text-white">
        <router-link tag="span" class="ml-8 cursor-pointer font-medium" :to="{ name: 'home' }">Inicio</router-link>
        <router-link tag="span" class="ml-8 cursor-pointer font-medium" :to="{ name: 'projects' }">Proyectos</router-link>
        <router-link tag="span" class="ml-8 cursor-pointer font-medium" :to="{ name: 'contact' }">Contacta</router-link>
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
  @apply bg-gray-800 shadow-md;
  @apply flex flex-col justify-center sticky;
  @apply bg-black;
}

.logo {
  @apply text-white text-2xl font-bold tracking-widest cursor-pointer;
}
</style>