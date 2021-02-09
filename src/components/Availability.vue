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
        <button class="btn" @click="checkAvailability">Check availability</button>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted } from 'vue';
import Calendar from 'primevue/calendar';
import { useI18n } from '@/i18nPlugin';

export default {
  components: { Calendar },

  setup() {
    const i18n = ref(useI18n());
    const selectedDate = ref(null);
    const todayDate = new Date();
    const noAvailDates = [
        new Date(Date.parse('2021-02-16')),
        new Date(Date.parse('2021-02-17')),
        new Date(Date.parse('2021-02-18'))
    ];
    let showedMonth = new Date().getMonth() + 1;

    const setupCalendarButtons = () => {
      prevMonthButtonSetUp();
      nextMonthButtonSetUp();
    };

    const prevMonthButtonSetUp = () => {
      let prevMonthButton = document.querySelector('.p-datepicker-prev');
      prevMonthButton.onclick = () => {
        if (self.showedMonth === 1) showedMonth = 12;
        else showedMonth -= 1;
        setupCalendarButtons();
      }
    };

    const nextMonthButtonSetUp = () => {
      let nextMothButton = document.querySelector('.p-datepicker-next');
      nextMothButton.onclick = () => {
        if (showedMonth === 12) showedMonth = 1;
        else showedMonth += 1;
        setupCalendarButtons();
      }
    }

    onMounted(() => {
      setupCalendarButtons();
    });

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
