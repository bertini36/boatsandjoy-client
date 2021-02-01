<template>
  <div>
    <header class="flex h-screen">
      <div class="m-auto z-10 flex flex-col text-white">
        <div class="-mt-36">
          <h1 class="border-b-2 border-white pb-6">
            <span class="text-5xl md:text-7xl font-medium tracking-widest text-left">QUICO POU</span>
          </h1>
          <div class="pt-6">
            <h2 class="text-3xl md:text-4xl tracking-widest text-left">ARQUITECTO</h2>
          </div>
        </div>
      </div>
    </header>

    <article class="pt-12 md:pt-20 flex flex-row justify-center">
      <div class="flex flex-col w-full px-4 lg:px-0 lg:w-3/5">
        <h3 class="title">Arquitecto en Mallorca</h3>
        <hr class="divider">
        <p class="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </article>

    <article class="pt-12 md:pt-20 pb-12 md:pb-20 flex flex-row justify-center">
      <div class="flex flex-col w-full px-4 lg:px-0 lg:w-3/5">
        <h3 class="title">Mas de 30 años de experiencia</h3>
        <hr class="divider">
        <p class="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </article>

    <div class="flex flex-row">
      <img src="../assets/img/second-cover.jpg" alt="inside a house picture" class="w-full h-56 md:h-96">
    </div>

    <article class="py-12 md:py-20">
      <LastProjects></LastProjects>
    </article>

    <article class="pb-12">
      <Services></Services>
    </article>

    <Footer></Footer>
  </div>
</template>

<script>
import LastProjects from '@/components/LastProjects';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default {
  name: 'Home',
  components: {
    LastProjects,
    Services,
    Footer,
  }
}
</script>

<style scoped>
header {
  background: url('../assets/img/main-cover.png') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>