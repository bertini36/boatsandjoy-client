<template>
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
</template>
