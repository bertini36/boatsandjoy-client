<template>
  <div id="boats">
    <article class="py-12 md:pt-20 flex flex-row justify-center">
      <div class="flex flex-col w-full px-4 lg:px-0 lg:w-3/5">
        <h3 class="title mb-4">{{ $t('boats_title') }}</h3>
        <p class="text-center" v-html="$t('boats_description')"></p>
      </div>
    </article>

    <article class="py-2 md:py-8 lg:py-10">
      <div class="grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:gap-8 xl:gap-14 lg:px-8 xl:px-20 2xl:px-60">
        <div v-for="image_url in image_urls" :key="image_url">
          <img :src="image_url" alt="Boat photo" class="rounded-sm md:cursor-pointer" @click="showModal(image_url)">
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
