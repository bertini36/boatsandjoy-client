<template>
  <div class="flex flex-col h-screen">
    <div class="m-auto">
      <div class="grid grid-cols-3 gap-20 mt-4">
        <Calendar v-model="selectedDate"
                  :inline="true"
                  :minDate="todayDate"
                  :disabledDates="noAvailDates"
        />
        <div class="col-span-2">
          HOLA
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Calendar from 'primevue/calendar';
import { useI18n } from '@/i18nPlugin';
import api from '../api';
import utils from '../utils';

export default {
  components: { Calendar },

  setup() {
    const i18n = ref(useI18n());
    const route = useRoute();
    const selectedDate = ref(utils.str2Date(route.params.date));
    const todayDate = new Date();
    const pivotDate = new Date();
    let noAvailDates = ref([]);
    let showedMonth = new Date().getMonth() + 1;

    onMounted(async () => {
      await api.getDateAvail(selectedDate.value);
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
    }

    return {
      i18n,
      selectedDate,
      todayDate,
      noAvailDates,
    }
  }
}
</script>
