<template>
  <div>
    <div class="flex flex-col">
      <h3 class="title mt-32 mb-4">{{ i18n.$t('results_title') }}</h3>

      <div class="mx-4 lg:mx-8 grid grid-cols-1 xl:grid-cols-3 mt-6 md:gap-10">
        <div class="col-span-1 text-center">
          <bj-calendar></bj-calendar>
          <div class="mt-6 mb-12 md:mb-6 lg:mb-0 flex flex-row justify-center text-center">
            <button class="btn" @click="checkAvailability">{{ i18n.$t('check_availability') }}</button>
          </div>
        </div>

        <div class="md:col-span-2 text-center">
          <article class="mb-6 md:mt-0" v-for="(boatAvailability, i) in boatsAvailability"
                   :key="boatAvailability.boat.id">
            <div class="w-full rounded-3xl">
              <div class="flex flex-col md:flex-row">
                <div class="md:w-2/5 flex">
                  <img class="rounded-t-lg md:rounded-t-none md:rounded-l-lg cursor-pointer flex-grow" src="../assets/img/boats1.jpg" alt="Boat photo"
                       @click="showPhotoModal(getBoatPhoto(boatAvailability.boat.name))">
                </div>
                <div class="md:w-3/5 pt-8 px-8 lg:px-12 rounded-b-lg md:rounded-b-none md:rounded-r-lg text-left bg-white border border-gray-300">
                  <div class="flex flex-row">
                    <h2 class="w-3/4 text-3xl font-bold tracking-widest text-left uppercase text-orange-500 mb-6">
                      {{ boatAvailability.boat.name }}
                    </h2>

                    <div v-if="selectedAvailabilityOptions[i] !== ''" class="w-1/4 flex justify-end">
                      <span class="price-circle">
                        {{ selectedAvailabilityOptions[i].price }}€
                      </span>
                    </div>
                  </div>

                  <div class="w-full flex flex-col">
                    <select v-model="selectedAvailabilityOptions[i]" class="custom-select w-full mt-6 mb-2">
                      <option value="">{{ i18n.$t('results_select_a_pricing_option') }}</option>
                      <option v-for="availabilityOption in boatAvailability.availability"
                              :key="availabilityOption"
                              :value="{...{'boat': boatAvailability.boat}, ...availabilityOption, ...{'discounts': boatAvailability.discounts}}">
                          {{ i18n.$t('results_from') }} {{ availabilityOption.from_hour }}
                          {{ i18n.$t('results_to') }} {{ availabilityOption.to_hour }} ({{ availabilityOption.price }}€)
                      </option>
                    </select>
                    <div class="flex">
                      <button class="btn mt-6 mb-4 w-full flex-grow"
                              :disabled="!selectedAvailabilityOptions[i]"
                              @click="showCheckoutModal(selectedAvailabilityOptions[i])">
                        {{ i18n.$t('results_book') }}
                      </button>
                    </div>
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
import {onMounted, ref} from 'vue';
import {useStore} from 'vuex';
import {useI18n} from '@/i18nPlugin';
import api from '../api';
import utils from '../utils';
import BjCalendar from '@/components/BjCalendar';
import Map from '@/components/Map';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal.vue';
import CheckoutForm from '@/components/CheckoutForm.vue';
import notifier from '../utils/notifier';

export default {
  components: {
    BjCalendar,
    Map,
    Footer,
    Modal,
    CheckoutForm,
  },

  setup() {
    const store = useStore();
    const i18n = ref(useI18n());

    const boatsAvailability = ref(null);
    const selectedAvailabilityOptions = ref(['', '']);

    const showingPhotoModal = ref(false);
    const selectedImageUrl = ref('');

    const showingCheckoutModal = ref(false);
    let selectedAvailabilityOption = ref(null);

    onMounted(async () => {
      boatsAvailability.value = await api.getDateAvail(store.state.selectedDate);
    });

    const checkAvailability = () => {
      if (store.state.selectedDate !== null) {
        const dateStr = utils.date2Str(store.state.selectedDate);
        location.href = process.env.VUE_APP_URL + `results/${dateStr}`;
      } else {
        notifier.showInfoNotification(i18n.value.$t('no_date_selected'));
      }
    };

    /**
     * This function is really strict, I know. Each boat photo has to be defined here...
     * @param boatName
     * @return Boat photo path
     */
    const getBoatPhoto = (boatName) => {
      const photos = [
        require('../assets/img/boats1.jpg'),
        require('../assets/img/boats1.jpg')
      ];
      if (boatName === 'B&J I') {
        return photos[0];
      } else if (boatName === 'B&J II') {
        return photos[1];
      }
    };

    const showPhotoModal = (image_url) => {
      showingPhotoModal.value = true;
      selectedImageUrl.value = image_url;
    };

    const showCheckoutModal = (availabilityOption) => {
      showingCheckoutModal.value = true;
      selectedAvailabilityOption.value = availabilityOption;
    };

    return {
      i18n,
      boatsAvailability,
      checkAvailability,
      showingPhotoModal,
      showPhotoModal,
      showingCheckoutModal,
      showCheckoutModal,
      selectedImageUrl,
      getBoatPhoto,
      selectedAvailabilityOptions,
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
