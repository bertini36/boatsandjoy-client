<template>
  <header id="home" class="flex flex-col h-screen">
    <div class="m-auto">
      <div class="flex flex-row justify-center pt-20 md:pt-auto md:pt-0">
        <img src="../assets/img/big-logo.png" alt="Big logo" class="w-3/4 md:w-2/4">
      </div>

      <div class="flex flex-row justify-center mt-4">
        <h1 class="text-white text-3xl">{{ i18n.$t('slogan') }}</h1>
      </div>

      <div class="mt-6 md:mt-12 flex flex-row justify-center">
       <bj-calendar></bj-calendar>
      </div>

      <div class="mt-6 flex flex-row justify-center">
        <button class="btn" @click="checkAvailability">{{ i18n.$t('check_availability') }}</button>
      </div>
    </div>
  </header>
</template>

<script>
import {ref} from 'vue';
import {useStore} from 'vuex';
import {useI18n} from '@/i18nPlugin';
import router from '../routes';
import utils from '../utils';
import BjCalendar from './BjCalendar';
import notifier from '../utils/notifier';

export default {
  components: {
    BjCalendar,
  },

  setup() {
    const store = useStore();
    const i18n = ref(useI18n());

    const checkAvailability = () => {
      if (store.state.selectedDate !== null) {
        const dateStr = utils.date2Str(store.state.selectedDate);
        router.push({ name: 'results', params: { date: dateStr } });
      } else {
        notifier.showInfoNotification(i18n.value.$t('no_date_selected'));
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
