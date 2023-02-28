<template>
  <div id="extras">
    <article class="pt-20 md:pt-10 flex flex-row justify-center">
      <div class="flex flex-col w-full px-4 lg:px-0 lg:w-3/5">
        <h2 class="title mb-4 text-4xl">{{ $t('extras') }}</h2>
      </div>
    </article>

    <div>
      <article class="pt-12 pb-12 md:pb-20 md:pt-10 flex flex-row justify-center">
        <div class="flex flex-col w-full px-4 lg:px-0 lg:w-3/5">
          <h3 class="title mb-4">{{ $t('watersports_title') }}</h3>
          <p class="text-center">{{ $t('watersports_description') }}</p>
          <p class="text-center mt-4"><strong>{{ $t('watersports_contact') }} info@boatsandjoy.com</strong></p>
        </div>
      </article>

      <div class="flex flex-row justify-center">
        <div class="flex flex-col w-full">
          <div class="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 md:px-4 lg:grid-cols-4 lg:gap-8 xl:gap-14 lg:px-8 xl:px-20 2xl:px-48 pt-3">
            <div class="container">
              <img class="group-hover:opacity-30" src="../assets/img/jetski.png" alt="jetski">
              <span class="invisible group-hover:visible">{{ $t('watersports_jetski') }} <br> {{ $t('watersports_rent_and_excursion') }}</span>
            </div>
            <div class="container">
              <img class="group-hover:opacity-30" src="../assets/img/kayak.jpeg" alt="kayak">
              <span class="invisible group-hover:visible">{{ $t('watersports_kayak') }} <br> {{ $t('watersports_rent_and_excursion') }}</span>
            </div>
            <div class="container">
              <img class="group-hover:opacity-30" src="../assets/img/paddle.png" alt="sup">
              <span class="invisible group-hover:visible">{{ $t('watersports_sup') }} <br> {{ $t('watersports_rent_and_lessons') }}</span>
            </div>
            <div class="container">
              <img class="group-hover:opacity-30" src="../assets/img/fishing.png" alt="fishing">
              <span class="invisible group-hover:visible">{{ $t('watersports_fishing') }} <br> {{ $t('watersports_excursion') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <article class="mt-10 pt-12 pb-6 md:pt-10 flex flex-row justify-center">
        <div class="flex flex-col w-full px-4 lg:px-0 lg:w-3/5">
          <h3 class="title mb-4">{{ $t('catering_title') }}</h3>
          <p class="text-center"><a href="/pdf/catering.pdf" target="_blank">{{ $t('catering_description') }}</a></p>
        </div>
      </article>

      <article class="py-2">
        <div class="grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:gap-8 xl:gap-14 lg:px-8 xl:px-20 2xl:px-60">
          <img src="../assets/img/catering1.jpg" alt="Catering photo" class="rounded-sm h-72">
          <img src="../assets/img/catering2.jpg" alt="Catering photo" class="rounded-sm h-72">
          <img src="../assets/img/catering3.jpg" alt="Catering photo" class="rounded-sm h-72">
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.container {
  @apply group flex justify-center;
  @apply transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110;
  position: relative;
  text-align: center;
  color: white;
}

/* Centered text */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

img {
  @apply w-96 h-64 rounded-sm;
}

span {
  @apply centered text-xl text-orange-600 tracking-widest;
}
</style>
