<template>
  <div id="home">
    <header class="flex flex-col h-screen">
      <div class="m-auto">
        <div class="flex flex-row justify-center">
          <img src="../assets/img/big-logo.png" alt="Big logo" class="w-3/4 md:w-2/4">
        </div>

        <div class="flex flex-row justify-center mt-4">
          <h1 class="text-white text-3xl">Rent your boat in Mallorca</h1>
        </div>

        <div class="mt-12 flex flex-row justify-center">
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

    <Boats></Boats>

    <WaterSports></WaterSports>

    <div class="flex flex-row pt-20">
      <img src="../assets/img/second-cover.jpg" class="w-full h-56 md:h-96" alt="Dragonera island">
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Calendar from 'primevue/calendar';
import Boats from '@/components/Boats';
import WaterSports from '@/components/WaterSports';
import Footer from '@/components/Footer';

export default {
  name: 'Home',
  components: {
    Calendar,
    Boats,
    WaterSports,
    Footer
  },

  data() {
    return {
      selectedDate: null,
      todayDate: new Date(),
      noAvailDates: [
        new Date(Date.parse('2021-02-16')),
        new Date(Date.parse('2021-02-17')),
        new Date(Date.parse('2021-02-18'))
      ],
      showedMonth: new Date().getMonth() + 1,
    }
  },

  mounted() {
    this.prevMonthButtonSetUp();
    this.nextMonthButtonSetUp();
  },

  methods: {
    prevMonthButtonSetUp() {
      let prevMonthButton = document.querySelector('.p-datepicker-prev');
      let self = this;
      prevMonthButton.onclick = function() {
        if (self.showedMonth === 1) {
          self.showedMonth = 12;
        } else {
          self.showedMonth -= 1;
        }
        self.prevMonthButtonSetUp();
        self.nextMonthButtonSetUp();
      }
    },

    nextMonthButtonSetUp() {
      let nextMothButton = document.querySelector('.p-datepicker-next');
      let self = this;
      nextMothButton.onclick = function() {
        if (self.showedMonth === 12) {
          self.showedMonth = 1;
        } else {
          self.showedMonth += 1;
        }
        self.prevMonthButtonSetUp();
        self.nextMonthButtonSetUp();
      }
    },

    checkAvailability() {
      console.log(this.selectedDate);
      console.log(this.showedMonth);
    },
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
