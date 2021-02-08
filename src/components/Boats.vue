<template>
  <div id="boats">
    <article class="py-12 md:pt-20 flex flex-row justify-center">
      <div class="flex flex-col w-full px-4 lg:px-0 lg:w-3/5">
        <h3 class="title mb-4">Rent your boat from 180€ per day!</h3>
        <p class="text-center">
          Boats and Joy offers you this spacious and beautiful pleasure boats <strong>to rent</strong> to enjoy the amazing Mallorcan Coast.
          These beautiful boats are available <strong>without license</strong>. You can enjoy them if you are above <strong>18 years old</strong>.
          Put off from Sant Elm and enjoy amazing views, beaches, calas and caves located in South-West Mallorca.
          Also have fun snorkeling in Sa Dragonera, a Natural Park known for its lizards, birds and endemic flora
          or have your time to relax and have a good meal in the Mediterranean.
        </p>
      </div>
    </article>

    <article class="py-2 md:py-8 lg:py-10">
      <div class="grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:gap-8 xl:gap-14 lg:px-8 xl:px-20 2xl:px-60">
        <div v-for="image_url in image_urls" :key="image_url">
          <img :src="image_url" alt="Boat photo" class="rounded-sm cursor-pointer" @click="showModal(image_url)">
        </div>
      </div>
    </article>

    <article class="px-4 lg:px-8 xl:px-20 2xl:px-60 my-16">
      <div class="w-full flex-none -ml-full rounded-3xl bg-gray-100 dark:bg-gray-400">
        <div class="w-full flex-none rounded-3xl transform shadow-lg bg-gradient-to-r from-green-300 to-blue-500 -rotate-2 sm:-rotate-2">
          <div class="grid grid-flow-col grid-rows-1 grid-cols-3">
            <div class="hidden lg:block row-start-1 col-start-1 col-span-1 pl-4 pt-4">
              <div class="transform scale-90 -rotate-2">
                <img class="rounded-2xl shadow-2xl" src="../assets/img/boats1.jpg" alt="Boat photo">
              </div>
            </div>

            <div class="bg-white dark:bg-gray-500 dark:text-white xl:relative row-start-1 col-start-1 lg:col-start-2 col-span-3 lg:col-span-2 transform translate-x-4 lg:translate-x-8 translate-y-4 lg:translate-y-7 pt-8 px-8 md:px-8 lg:px-12 rounded-3xl text-left bg-white shadow-2xl">
              <h2 class="title text-2xl font-bold mb-6">Boats information</h2>
              <div class="grid grid-flow-col grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-3 gap-4 pt-4">
                <div>
                  <strong>Basic</strong>
                  <ul class="mt-2">
                    <li>Max.capacicy: 5 or 6 people</li>
                    <li>Power: 15HP</li>
                    <li>Location: Sant Elm</li>
                    <li>Caution: 300€</li>
                    <li>Gas included</li>
                  </ul>
                </div>
                <div class="pt-4 md:pt-0">
                  <strong>Equiped with</strong>
                  <ul class="mt-2">
                    <li>Solarium</li>
                    <li>Bimini</li>
                    <li>Portable fridge</li>
                    <li>Waterproof bag</li>
                  </ul>
                </div>
                <div>
                  <strong>Extras available</strong>
                  <ul class="mt-2">
                    <li>Snorkeling masks</li>
                    <li>Catering</li>
                    <li>Soft drinks</li>
                    <li>Cava & wine</li>
                    <li>Watersports pack</li>
                  </ul>
                </div>
              </div>
              <h3 class="mt-4 md:mt-6 text-lg font-semibold mb-6 text-orange-500 text-center">Ask for more information!</h3>
            </div>
          </div>
        </div>
      </div>
    </article>

    <modal :showing="showingModal" :showClose="true" @close="showingModal = false">
      <div class="flex flex-col w-full">
        <img :src="selected_image_url" alt="Boat photo" class="rounded-sm">
      </div>
    </modal>

  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  name: 'Boats',
  components: {
    Modal,
  },

  data() {
    return {
      image_urls: [
        require('../assets/img/boats1.jpg'),
        require('../assets/img/boats1.jpg'),
        require('../assets/img/boats1.jpg'),
      ],
      showingModal: false,
      selected_image_url: '',
    }
  },

  methods: {
    showModal(image_url) {
      this.showingModal = true;
      this.selected_image_url = image_url;
    }
  }
}
</script>
