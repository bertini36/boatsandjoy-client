<template>
  <PrimeCalendar v-model="selectedDate"
            :inline="true"
            :minDate="tomorrowDate"
            :disabledDates="noAvailDates"
  />
</template>

<script>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import PrimeCalendar from 'primevue/calendar';

import { getNoAvailDates } from '../services/api';
import { str2Date } from '../utils/dates';

export default {
  components: {
    PrimeCalendar,
  },

  setup() {
    const router = useRoute();
    const store = useStore();

    if (router && router.params.date) store.commit('setSelectedDate', str2Date(router.params.date));

    const selectedDate = ref(store.getters.selectedDate);
    const todayDate = new Date();
    const tomorrowDate = new Date(todayDate)
    tomorrowDate.setDate(tomorrowDate.getDate() + 1)
    const pivotDate = selectedDate.value ? new Date(selectedDate.value) : new Date();
    let noAvailDates = ref([]);
    let showedMonth = new Date().getMonth() + 1;

    watch(() => selectedDate.value, (newValue) => {
      store.commit('setSelectedDate', newValue);
    });

    onMounted(async () => {
      noAvailDates.value = await getNoAvailDates(pivotDate);
      setupCalendarButtons();
    });

    const setupCalendarButtons = () => {
      prevMonthButtonSetUp();
      nextMonthButtonSetUp();
    };

    const prevMonthButtonSetUp = () => {
      let prevMonthButton = document.querySelector('.p-datepicker-prev');
      prevMonthButton.onclick = async () => {
        if (showedMonth === 1) showedMonth = 12;
        else showedMonth -= 1;
        setupCalendarButtons();
        pivotDate.setMonth(pivotDate.getMonth()-1);
        noAvailDates.value = await getNoAvailDates(pivotDate);
      }
    };

    const nextMonthButtonSetUp = () => {
      let nextMothButton = document.querySelector('.p-datepicker-next');
      nextMothButton.onclick = async () => {
        if (showedMonth === 12) showedMonth = 1;
        else showedMonth += 1;
        setupCalendarButtons();
        pivotDate.setMonth(pivotDate.getMonth()+1);
        noAvailDates.value = await getNoAvailDates(pivotDate);
      }
    };

    return {
      selectedDate,
      todayDate,
      tomorrowDate,
      noAvailDates,
    }
  }
}
</script>
