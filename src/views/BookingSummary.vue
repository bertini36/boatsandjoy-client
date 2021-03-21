<template>
  <div class="flex flex-col">
     <h1 class="title mt-32" v-if="booking && booking.status === 'confirmed'">
       {{ i18n.t('booking_confirmed') }}
     </h1>
    <h1 class="title mt-32" v-if="booking && booking.status === 'pending'">
      {{ i18n.t('booking_pending') }}
    </h1>
    <h1 class="title mt-32" v-if="booking && booking.status === 'error'">
      {{ i18n.t('booking_error') }}
    </h1>

    <div class="grid grid-cols-6 gap-4 pt-8 md:pt-14" v-if="booking">
      <div class="px-3 md:px-0 col-start-1 col-span-6 md:col-start-2 md:col-span-4">
        <h2 class="text-black font-bold text-2xl">{{ i18n.t('booking_summary') }}</h2>
        <div class="border-solid border border-gray rounded-md mt-4 p-3 md:p-6 shadow-sm flex flex-col">
          <div class="flex flex-row justify-between">
            <div class="flex flex-col">
              <div>
                <span class="font-semibold">{{ i18n.t('booking_locator') }}</span> : {{ booking.locator }}
              </div>
              <div>
                <span class="font-semibold">{{ i18n.t('boat') }}</span> : {{ booking.boat_name }}
              </div>
              <div>
                <span class="font-semibold">{{ i18n.t('date') }}</span> : {{ formatDate(booking.date) }}
                ({{ formatHour(booking.checkin_hour) }} - {{ formatHour(booking.checkout_hour) }})
              </div>

              <div class="mt-4">
                <span class="font-semibold">{{ i18n.t('name') }}</span> : {{ booking.customer_name }}
                <div v-if="booking.extas !== ''">
                  <span class="font-semibold">{{ i18n.t('checkout_extras') }}</span> : {{ booking.extras }}
                </div>
              </div>
            </div>

            <div class="pt-3 md:pt-0">
              <span class="price-circle">{{ booking.price }}€</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Map></Map>

    <Footer></Footer>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

import { formatDate, formatHour } from '../utils/dates';
import { getBooking } from '../services/api';
import Map from '../components/Map';
import Footer from '../components/Footer';

export default {
  components: {
    Map,
    Footer,
  },

  setup() {
    const router = useRoute();
    const i18n = useI18n();

    const booking = ref();

    let sessionId = null;
    if (router && router.query.session_id) sessionId = router.query.session_id;

    onMounted(async () => {
      if (sessionId) {
        booking.value = await getBooking(sessionId);
        console.log(booking.value);
      }
    });

    return {
      booking,
      i18n,
      formatDate,
      formatHour
    }
  }
}
</script>
