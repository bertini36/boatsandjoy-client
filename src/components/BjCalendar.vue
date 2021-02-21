<template>
  <Calendar v-model="selectedDate"
            :inline="true"
            :minDate="todayDate"
            :disabledDates="noAvailDates"
  />
</template>

<script>
import {onMounted, ref, watch} from 'vue';
import {useRoute} from 'vue-router';
import {useStore} from 'vuex';
import Calendar from 'primevue/calendar';
import api from '../api';
import dates from '../utils/dates';

export default {
  components: {
    Calendar,
  },

  setup() {
    const route = useRoute();
    const store = useStore();

    if (route.params.date) store.commit('setSelectedDate', dates.str2Date(route.params.date));
    else if (store.state.selectedDate === null) store.commit('setSelectedDate', new Date());
    const selectedDate = ref(store.state.selectedDate);
    const todayDate = new Date();
    const pivotDate = new Date(selectedDate.value);
    let noAvailDates = ref([]);
    let showedMonth = new Date().getMonth() + 1;

    watch(() => selectedDate.value, (newValue) => {
      store.commit('setSelectedDate', newValue);
    });

    onMounted(async () => {
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

    return {
      selectedDate,
      todayDate,
      noAvailDates,
    }
  }
}
</script>
