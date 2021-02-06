<template>
  <div>
    <header class="flex flex-col h-screen">
      <div class="m-auto">
        <div class="flex flex-row justify-center">
          <img src="../assets/img/big-logo.png" alt="Big logo" class="w-3/4 md:w-2/4">
        </div>

        <div class="mt-12 flex flex-row justify-center">
          <Calendar v-model="selectedDate"
                    :inline="true"
                    :minDate="todayDate"
                    :disabledDates="noAvailDates"
          />
        </div>

        <div class="mt-6 flex flex-row justify-center">
          <button class="btn" @click="checkAvailability">Comprobar disponibilidad</button>
        </div>
      </div>
    </header>

    <article class="py-12 md:pt-20 flex flex-row justify-center">
      <div class="flex flex-col w-full px-4 lg:px-0 lg:w-3/5">
        <h3 class="title mb-4">Rent your boat!</h3>
        <p class="text-center">
          Boats and Joy offers you this spacious and beautiful pleasure boat TO RENT to enjoy the amazing Mallorcan Coast.
          This beautiful 5 meters boat is available WITHOUT LICENSE. You can enjoy it if you are above 18 years old.
          Put off from Sant Elm and enjoy amazing views, beaches, calas and caves located in South-West Mallorca.
          Also have fun snorkeling in Sa Dragonera, a Natural Park known for its lizards, birds and endemic flora
          or have your time to relax and have a good meal in the Mediterranean.
        </p>
      </div>
    </article>
  </div>
</template>

<script>
import Calendar from 'primevue/calendar';

export default {
  name: 'Home',
  components: {
    Calendar,
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
