<template>
  <div class="flex flex-col">
     <h1 class="title mt-32">PAYMENT SUCCESS</h1>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import { getBooking } from '../services/api';

export default {
  setup() {
    const router = useRoute();
    const booking = ref();

    let sessionId = null;
    if (router && router.query.session_id) sessionId = router.query.session_id;

    onMounted(async () => {
      if (sessionId) {
        booking.value = await getBooking(sessionId);
      }
    });
  }
}
</script>
