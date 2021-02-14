<template>
  <div class="flex flex-col">
    <h3 class="title mt-32 mb-4">{{ i18n.$t('results_title') }}</h3>
    <div class="mx-2 lg:m-auto">
      <div class="grid grid-cols-1 lg:grid-cols-3 mt-6">
        <div class="col-span-1 text-center">
          <Calendar v-model="selectedDate"
                    :inline="true"
                    :minDate="todayDate"
                    :disabledDates="noAvailDates"
          />
          <div class="mt-6 flex flex-row justify-center">
            <button class="btn" @click="checkAvailability">{{ i18n.$t('check_availability') }}</button>
          </div>
        </div>
        <div class="lg:col-span-2 text-center">
          <article class="px-8 lg:px-20 mb-12" v-for="boatAvailability in boatsAvailability" :key="boatAvailability.boat.id">
            <div class="w-full lg:w-11/12 flex-none -ml-full rounded-3xl bg-gray-100 dark:bg-gray-400">
              <div class="w-full flex-none rounded-3xl transform shadow-lg bg-gradient-to-r from-green-300 to-blue-500 -rotate-2 sm:-rotate-2">
                <div class="grid grid-flow-col grid-rows-1 grid-cols-3">
                  <div
                    class="hidden lg:block row-start-1 col-start-1 col-span-1 pl-4 pt-4">
                    <div class="transform scale-90 -rotate-2">
                      <img class="rounded-2xl shadow-2xl" src="../assets/img/boats1.jpg"
                           alt="Boat photo">
                    </div>
                  </div>

                  <div
                    class="bg-white dark:bg-gray-500 dark:text-white xl:relative row-start-1 col-start-1 lg:col-start-2 col-span-3 lg:col-span-2 transform translate-x-4 lg:translate-x-8 translate-y-4 lg:translate-y-7 pt-8 px-8 md:px-8 lg:px-12 rounded-3xl text-left bg-white shadow-2xl">
                    <h2 class="title text-2xl font-bold mb-6"></h2>
                    <div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
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
import Calendar from 'primevue/calendar';
import { useI18n } from '@/i18nPlugin';
import api from '../api';
import utils from '../utils';
import Map from '@/components/Map';
import Footer from '@/components/Footer';
import router from "../routes";

export default {
  components: {
    Calendar,
    Map,
    Footer
  },

  setup() {
    const i18n = ref(useI18n());
    const route = useRoute();
    const selectedDate = ref(utils.str2Date(route.params.date));
    const todayDate = new Date();
    const pivotDate = new Date();
    let noAvailDates = ref([]);
    let showedMonth = new Date().getMonth() + 1;
    let boatsAvailability = ref(null);

    onMounted(async () => {
      boatsAvailability.value = await api.getDateAvail(selectedDate.value);
      noAvailDates.value = await api.getNoAvailDates(pivotDate);
      setupCalendarButtons();
    });

    const setupCalendarButtons = () => {
      prevMonthButtonSetUp();
      nextMonthButtonSetUp();
    };

    const prevMonthButtonSetUp = () => {
      let prevMonthButton = document.querySelector('.p-datepicker-prev');
      prevMonthButton.onclick = async () => {
        if (self.showedMonth === 1) showedMonth = 12;
        else showedMonth -= 1;
        setupCalendarButtons();
        pivotDate.setMonth(pivotDate.getMonth()-1);
        noAvailDates.value = await api.getNoAvailDates(pivotDate);
      }
    };

    const nextMonthButtonSetUp = () => {
      let nextMothButton = document.querySelector('.p-datepicker-next');
      nextMothButton.onclick = async () => {
        if (showedMonth === 12) showedMonth = 1;
        else showedMonth += 1;
        setupCalendarButtons();
        pivotDate.setMonth(pivotDate.getMonth()+1);
        noAvailDates.value = await api.getNoAvailDates(pivotDate);
      }
    };

    const checkAvailability = () => {
      if (selectedDate.value !== null) {
        const dateStr = utils.date2Str(selectedDate.value);
        router.push({ name: 'results', params: { date: dateStr } });
      }
    };


    return {
      i18n,
      selectedDate,
      todayDate,
      noAvailDates,
      boatsAvailability,
      checkAvailability,
    }
  }
}
</script>

<style scoped>
button {
  width: 421.41px;
}
@media only screen and (max-width: 770px) {
  button {
    width: 365.41px;
  }
}
</style>
