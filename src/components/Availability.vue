<template>
  <header id="home" class="flex flex-col h-screen">
    <div class="m-auto">
      <div class="flex flex-row justify-center pt-20 md:pt-0">
        <img src="../assets/img/big-logo.png" alt="Big logo" class="w-3/4 md:w-2/4">
      </div>

      <div class="flex flex-row justify-center mt-4">
        <h1 class="text-white text-3xl">{{ i18n.$t('slogan') }}</h1>
      </div>

      <div class="mt-6 md:mt-12 flex flex-row justify-center">
        <Calendar v-model="selectedDate"
                  :inline="true"
                  :minDate="todayDate"
                  :disabledDates="noAvailDates"
        />
      </div>

      <div class="mt-6 flex flex-row justify-center">
        <button class="btn" @click="checkAvailability">{{ i18n.$t('check_availability') }}</button>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Calendar from 'primevue/calendar';
import { useI18n } from '@/i18nPlugin';

export default {
  components: { Calendar },

  setup() {
    const i18n = ref(useI18n());
    const selectedDate = ref(null);
    const todayDate = new Date();
    const pivotDate = new Date();
    let noAvailDates = ref([]);
    let showedMonth = new Date().getMonth() + 1;

    onMounted(async () => {
      await getNoAvailDates(pivotDate);
      setupCalendarButtons();
    });

    const getNoAvailDates = async (date) => {
      axios.get(`http://127.0.0.1/availability/month/${formatDate(date)}/`).then((response) => {
        const results = response.data.data;
        noAvailDates.value = results.filter(result => !result.availability).map(result => new Date(Date.parse(result.date)));
      });
    };

    const formatDate = (date) => {
      let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
      if (month.length < 2)
          month = '0' + month;
      if (day.length < 2)
          day = '0' + day;
      return [year, month, day].join('-');
    };

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
        await getNoAvailDates(pivotDate);
      }
    };

    const nextMonthButtonSetUp = () => {
      let nextMothButton = document.querySelector('.p-datepicker-next');
      nextMothButton.onclick = async () => {
        if (showedMonth === 12) showedMonth = 1;
        else showedMonth += 1;
        setupCalendarButtons();
        pivotDate.setMonth(pivotDate.getMonth()+1);
        await getNoAvailDates(pivotDate);
      }
    }

    const checkAvailability = () => {
      console.log(selectedDate.value);
      console.log(showedMonth);
    };

    return {
      i18n,
      selectedDate,
      todayDate,
      noAvailDates,
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
