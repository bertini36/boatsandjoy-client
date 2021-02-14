<template>
  <div class="flex flex-col">
    <h3 class="title mt-32 mb-4">{{ i18n.$t('results_title') }}</h3>
    <div class="mx-2 lg:m-auto">
      <div class="grid grid-cols-1 xl:grid-cols-3 mt-6 md:gap-10">
        <div class="col-span-1 text-center md:pl-8">
          <Calendar v-model="selectedDate"
                    :inline="true"
                    :minDate="todayDate"
                    :disabledDates="noAvailDates"
          />
          <div class="mt-6 mb-12 md:mb-6 lg:mb-0 flex flex-row justify-center text-center">
            <button class="btn" @click="checkAvailability">{{ i18n.$t('check_availability') }}</button>
          </div>
        </div>
        <div class="md:col-span-2 text-center">
          <article class="px-8 lg:px-12 mb-12 md:mt-0" v-for="(boatAvailability, i) in boatsAvailability" :key="boatAvailability.boat.id">
            <div class="w-full xl:w-11/12 flex-none -ml-full rounded-3xl bg-gray-100">
              <div class="w-full flex-none">
                <div class="grid grid-flow-col grid-rows-1 grid-cols-3">
                  <div class="row-start-1 col-start-1 col-span-1">
                    <img class="rounded-l-xl cursor-pointer" src="../assets/img/boats1.jpg" alt="Boat photo"
                         @click="showModal(getBoatPhoto(boatAvailability.boat.name))">
                  </div>

                  <div class="bg-white xl:relative col-start-2 col-span-3 lg:col-span-2 pt-8 px-8 md:px-8 lg:px-12 rounded-r-xl text-left bg-white border border-gray-300">
                    <h2 class="title text-2xl font-bold mb-6">{{ boatAvailability.boat.name }}</h2>
                    <div class="flex flex-row">
                      <select v-model="selectedAvailabilityOption[i]">
                        <option value="">{{ i18n.$t('results_select_a_pricing_option') }}</option>
                        <option v-for="availabilityOption in boatAvailability.availability" :key="availabilityOption"
                                :value="availabilityOption">
                            {{ i18n.$t('results_from') }} {{ availabilityOption.from_hour }}
                            {{ i18n.$t('results_to') }} {{availabilityOption.to_hour }} ({{ availabilityOption.price }}€)
                        </option>
                      </select>
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

    <modal :showing="showingModal" @close="showingModal = false">
      <div class="flex flex-col w-full">
        <img :src="selected_image_url" alt="Boat photo" class="rounded-sm">
      </div>
    </modal>
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
import Modal from '@/components/Modal.vue';

export default {
  components: {
    Calendar,
    Map,
    Footer,
    Modal,
  },

  setup() {
    const i18n = ref(useI18n());
    const route = useRoute();

    const selectedDate = ref(utils.str2Date(route.params.date));
    const todayDate = new Date();
    const pivotDate = new Date();
    let noAvailDates = ref([]);
    let showedMonth = new Date().getMonth() + 1;
    const boatsAvailability = ref(null);
    const selectedAvailabilityOption = ['', ''];

    const showingModal = ref(false);
    const selected_image_url = ref('');

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
        location.href = process.env.VUE_APP_URL + `results/${dateStr}`;
      }
    };

    const showModal = (image_url) => {
      showingModal.value = true;
      selected_image_url.value = image_url;
    };

    const getBoatPhoto = (boatName) => {
      const photos = [
        require('../assets/img/boats1.jpg'),
        require('../assets/img/boats1.jpg')
      ];
      if (boatName === 'B&J I') {
        return photos[0];
      } else if (boatName == 'B&J II') {
        return photos[1];
      }
    };

    return {
      i18n,
      selectedDate,
      todayDate,
      noAvailDates,
      boatsAvailability,
      checkAvailability,
      showingModal,
      showModal,
      selected_image_url,
      getBoatPhoto,
      selectedAvailabilityOption,
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
