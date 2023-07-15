<template>
  <div id="boats">
    HOLAAAA
  </div>
</template>

<script>
import { ref } from 'vue';

import { isBigScreen } from '../utils/screen';

export default {
  components: { },

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
