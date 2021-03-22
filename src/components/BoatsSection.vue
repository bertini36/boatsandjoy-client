<template>
  <div id="boats">
    <article class="py-12 md:pt-20 flex flex-row justify-center">
      <div class="flex flex-col w-full px-4 lg:px-0 lg:w-3/5">
        <h3 class="title mb-4">{{ $t('boats_title') }}</h3>
        <p class="text-center">{{ $t('boats_description') }}</p>
      </div>
    </article>

    <article class="py-2 md:py-8 lg:py-10">
      <div class="grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:gap-8 xl:gap-14 lg:px-8 xl:px-20 2xl:px-60">
        <div v-for="image_url in image_urls" :key="image_url">
          <img :src="image_url" alt="Boat photo" class="rounded-sm md:cursor-pointer" @click="showModal(image_url)">
        </div>
      </div>
    </article>

    <article class="px-4 lg:px-8 xl:px-20 2xl:px-60 my-16">
      <div class="w-full flex-none -ml-full rounded-3xl bg-gray-100">
        <div class="w-full flex-none rounded-3xl transform shadow-lg bg-gradient-to-r from-green-300 to-blue-500 -rotate-2 sm:-rotate-2">
          <div class="grid grid-flow-col grid-rows-1 grid-cols-3">
            <div class="hidden lg:block row-start-1 col-start-1 col-span-1 pl-4 pt-4">
              <div class="transform scale-90 -rotate-2">
                <img class="rounded-2xl shadow-2xl cursor-pointer" src="../assets/img/boats4.jpg" alt="Boat photo"
                     @click="showModal(require('../assets/img/boats4.jpg'))">
              </div>
            </div>

            <div class="bg-white xl:relative row-start-1 col-start-1 lg:col-start-2 col-span-3 lg:col-span-2 transform translate-x-4 lg:translate-x-8 translate-y-4 lg:translate-y-7 pt-8 px-8 md:px-8 lg:px-12 rounded-3xl text-left bg-white shadow-2xl">
              <h2 class="title text-2xl font-bold mb-6">{{ $t('boats_information_title') }}</h2>
              <div class="grid grid-flow-col grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-3 gap-4 pt-4">
                <div>
                  <strong>{{ $t('boats_basic') }}</strong>
                  <ul class="mt-2">
                    <li>{{ $t('boats_max_capacity') }}</li>
                    <li>{{ $t('boats_power') }}</li>
                    <li>{{ $t('boats_location') }}</li>
                    <li>{{ $t('boats_caution') }}</li>
                    <li>{{ $t('boats_gas') }}</li>
                  </ul>
                </div>
                <div class="pt-4 md:pt-0">
                  <strong>{{ $t('boats_equiped_with') }}</strong>
                  <ul class="mt-2">
                    <li>{{ $t('boats_solarium') }}</li>
                    <li>{{ $t('boats_bimini') }}</li>
                    <li>{{ $t('boats_fridge') }}</li>
                    <li>{{ $t('boats_bag') }}</li>
                  </ul>
                </div>
                <div>
                  <strong>{{ $t('boats_extras') }}</strong>
                  <ul class="mt-2">
                    <li>{{ $t('boats_masks') }}</li>
                    <li>{{ $t('boats_catering') }}</li>
                    <li>{{ $t('boats_drinks') }}</li>
                    <li>{{ $t('boats_alcohol') }}</li>
                    <li>{{ $t('boats_watersports') }}</li>
                  </ul>
                </div>
              </div>
              <h3 class="mt-4 md:mt-6 text-lg font-semibold mb-6 text-orange-500 text-center">
                {{ $t('boats_ask') }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </article>

    <modal :showing="showingModal" @close="showingModal = false">
      <div class="flex flex-col w-full">
        <img :src="selectedImageUrl" alt="Boat photo" class="rounded-sm">
      </div>
    </modal>

  </div>
</template>

<script>
import { ref } from 'vue';

import Modal from '../components/Modal.vue';
import { isBigScreen } from '../utils/screen';

export default {
  components: { Modal },

  setup() {
    const image_urls = [
      require('../assets/img/boats1.jpg'),
      require('../assets/img/boats2.jpg'),
      require('../assets/img/boats3.jpeg')
    ];
    const showingModal = ref(false);
    const selectedImageUrl = ref('');

    const showModal = (image_url) => {
      if (isBigScreen()) {
        showingModal.value = true;
        selectedImageUrl.value = image_url;
      }
    };

    return {
      image_urls,
      showingModal,
      selectedImageUrl,
      showModal,
    }
  },
}
</script>
