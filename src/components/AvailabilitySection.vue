<template>
  <header id="home" class="flex flex-col h-screen">
    <div class="m-auto">
      <div class="flex flex-row justify-center pt-20 md:pt-auto md:pt-0">
        <img src="../assets/img/big-logo.png" alt="Big logo" class="w-3/4 md:w-2/4">
      </div>

      <div class="flex flex-row justify-center mt-4">
        <h1 class="text-white text-3xl">{{ $t('slogan') }}</h1>
      </div>

      <div class="mt-6 md:mt-12 flex flex-row justify-center">
       <Calendar></Calendar>
      </div>

      <div class="mt-6 flex flex-row justify-center">
        <button class="btn" @click="checkAvailability">{{ $t('check_availability') }}</button>
      </div>

      <div class="mt-2 flex flex-row justify-center">
        <a :href="`/pdf/vouchers.pdf`" target="_blank" class="text-white">
          {{ $t('check_voucher') }}
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter} from 'vue-router';
import { useI18n } from 'vue-i18n';

import { date2Str } from '../utils/dates';
import Calendar from './Calendar';
import { showInfoNotification } from '../utils/notifications';

export default {
  components: {
    Calendar,
  },

  setup() {
    const router = useRouter();
    const store = useStore();
    const i18n = useI18n();

    const checkAvailability = () => {
      const selectedDate = store.getters.selectedDate;
      if (selectedDate !== null) {
        const dateStr = date2Str(selectedDate);
        router.push({ name: 'results', params: { date: dateStr } });
      } else {
        showInfoNotification(i18n.t('no_date_selected'));
      }
    };

    return {
      i18n,
      checkAvailability,
    }
  }
}
</script>

<style scoped>
header {
  background: url('../assets/img/main-cover.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
button {
  width: 421.41px;
}
@media only screen and (max-width: 770px) {
  button {
    width: 365.41px;
  }
}
</style>
