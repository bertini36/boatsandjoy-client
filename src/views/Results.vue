<template>
  <div>
    <loader v-if="!boatsAvailability"></loader>
    <div v-else class="flex flex-col">
      <h3 class="title mt-24 md:mt-32 mb-4" v-if="loadedDate">{{ $t('results_title') }} {{ formatDate(loadedDate) }}</h3>

      <div class="mx-4 lg:mx-8 grid grid-cols-1 xl:grid-cols-3 mt-6 md:gap-10">
        <div class="hidden md:block col-span-1 text-center">
          <Calendar></Calendar>
          <div class="mt-6 mb-12 md:mb-6 lg:mb-0 flex flex-row justify-center text-center">
            <button class="btn" @click="checkAvailability">{{ $t('check_availability') }}</button>
          </div>
        </div>

        <div class="md:col-span-2 text-center">
          <article class="mb-6 md:mt-0" v-for="(boatAvailability, i) in boatsAvailability"
                   :key="boatAvailability.boat.id">
            <div class="w-full rounded-3xl">
              <div class="flex flex-col md:flex-row">
                <div class="md:w-2/5 flex">
                  <img class="rounded-t-lg md:rounded-t-none md:rounded-l-lg md:cursor-pointer flex-grow"
                       :src="getBoatPhoto(boatAvailability.boat.name)" alt="Boat photo"
                       @click="showPhotoModal(getBoatPhoto(boatAvailability.boat.name))">
                </div>
                <div class="md:w-3/5 pt-8 px-8 lg:px-12 rounded-b-lg md:rounded-b-none md:rounded-r-lg text-left bg-white border border-gray-300">
                  <div class="flex flex-row">
                    <div class="w-3/4 flex flex-col">
                      <h2 class="text-3xl font-bold tracking-widest text-left uppercase text-orange-500">
                        {{ boatAvailability.boat.name }}
                      </h2>
                      <span class="font-bold">
                        {{ $t('results_max_capacity') }}: {{ getMaxCapacity(boatAvailability.boat.name) }}
                      </span>
                    </div>
                    <div v-if="selectedAvailabilityOptions[i] !== '' & selectedAvailabilityOptions[i] !== undefined" class="w-1/4 flex justify-end">
                      <span class="price-circle">
                        {{ selectedAvailabilityOptions[i].price }}€
                      </span>
                    </div>
                  </div>

                  <div class="w-full flex flex-col">
                    <select v-model="selectedAvailabilityOptions[i]" class="custom-select w-full mt-6 mb-2">
                      <option value="">{{ $t('results_select_a_pricing_option') }}</option>
                      <option v-for="availabilityOption in boatAvailability.availability"
                              :key="availabilityOption"
                              :value="{...{'boat': boatAvailability.boat}, ...availabilityOption, ...{'discounts': boatAvailability.discounts}}">
                          {{ $t('results_from') }} {{ formatHour(availabilityOption.from_hour) }}
                          {{ $t('results_to') }} {{ formatHour(availabilityOption.to_hour) }} ({{ availabilityOption.price }}€)
                      </option>
                    </select>
                    <div class="flex">
                      <button class="btn mt-6 mb-4 w-full flex-grow"
                              :disabled="!selectedAvailabilityOptions[i]"
                              @click="showCheckoutModal(selectedAvailabilityOptions[i])">
                        {{ $t('results_book') }}
                      </button>
                    </div>
                    <div class="flex text-sm" v-html="$t('results_included')"></div>
                    <div class="flex text-sm" v-html="$t('results_deposit')"></div>
                    <div class="flex text-sm" v-html="$t('results_catering')"></div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <Map></Map>

      <Footer></Footer>
    </div>

    <modal :showing="showingPhotoModal" @close="showingPhotoModal = false">
      <div class="flex flex-col w-full">
        <img :src="selectedImageUrl" alt="Boat photo" class="rounded-sm">
      </div>
    </modal>

    <modal :showing="showingCheckoutModal" @close="showingCheckoutModal = false">
      <checkout-form :availability-option="selectedAvailabilityOption"></checkout-form>
    </modal>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

import { getDateAvail } from '../services/api';
import {date2Str, formatDate, formatHour, str2Date} from '../utils/dates';
import Calendar from '../components/Calendar';
import Map from '../components/Map';
import Footer from '../components/Footer';
import Modal from '../components/Modal.vue';
import CheckoutForm from '../components/CheckoutForm.vue';
import Loader from '../components/Loader.vue';
import { showInfoNotification } from '../utils/notifications';
import { isBigScreen } from '../utils/screen';

export default {
  components: {
    Calendar,
    Map,
    Footer,
    Modal,
    CheckoutForm,
    Loader,
  },

  setup() {
    const router = useRoute();
    const store = useStore();
    const i18n = useI18n();

    if (router && router.params.date) store.commit('setSelectedDate', str2Date(router.params.date));

    const loadedDate = ref('');
    const boatsAvailability = ref(null);
    const selectedAvailabilityOptions = ref(['', '']);

    const showingPhotoModal = ref(false);
    const selectedImageUrl = ref('');

    const showingCheckoutModal = ref(false);
    let selectedAvailabilityOption = ref(null);

    onMounted(async () => {
      boatsAvailability.value = await getDateAvail(store.state.selectedDate);
      loadedDate.value = date2Str(store.state.selectedDate);
    });

    const getSelectedDate = () => {
      return date2Str(store.state.selectedDate);
    };

    const checkAvailability = () => {
      const selectedDate = store.getters.selectedDate;
      if (selectedDate !== null) {
        const dateStr = date2Str(selectedDate);
        location.href = process.env.VUE_APP_URL + `results/${dateStr}`;
      } else {
        showInfoNotification(i18n.t('no_date_selected'));
      }
    };

    /**
     * This function is really strict, I know. Each boat photo has to be defined here...
     * @param boatName
     * @return Boat photo path
     */
    const getBoatPhoto = (boatName) => {
      const photos = [
        require('../assets/img/bj1.jpeg'),
        require('../assets/img/bj2.jpeg'),
        require('../assets/img/bj3.jpeg'),
      ];
      if (boatName === 'B&J I') {
        return photos[0];
      } else if (boatName === 'B&J II') {
        return photos[1];
      } else if (boatName === 'B&J III') {
        return photos[2];
      }
    };

    const getMaxCapacity = (boatName) => {
      if (boatName === 'B&J I' || boatName === 'B&J III') {
        return 5;
      } else if (boatName === 'B&J II') {
        return 6;
      }
    }

    const showPhotoModal = (image_url) => {
      if (isBigScreen()) {
        showingPhotoModal.value = true;
        selectedImageUrl.value = image_url;
      }
    };

    const showCheckoutModal = (availabilityOption) => {
      showingCheckoutModal.value = true;
      selectedAvailabilityOption.value = availabilityOption;
    };

    return {
      loadedDate,
      boatsAvailability,
      getSelectedDate,
      checkAvailability,
      showingPhotoModal,
      showPhotoModal,
      showingCheckoutModal,
      showCheckoutModal,
      selectedImageUrl,
      getBoatPhoto,
      getMaxCapacity,
      selectedAvailabilityOptions,
      selectedAvailabilityOption,
      formatDate,
      formatHour,
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
