<template>
  <div id="app" class="relative">
    <navbar/>
    <full-screen-nav/>

    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import FullScreenNav from '@/components/FullScreenNav';
import { provideI18n } from '@/i18nPlugin';

export default {
  name: 'App',
  components: {
    Navbar,
    FullScreenNav
  },

  setup() {
    provideI18n({
      locale: 'en',
      messages: {
        en: {
          home: 'Home',
          boats: 'Boats',
          watersports: 'Watersports',
          english: 'English',
          spanish: 'Spanish',
          slogan: 'Rent your boat in Mallorca',

          boats_title: 'Rent your boat from 180€ per day!',
          boats_description: 'Boats and Joy offers you this spacious and beautiful pleasure boats to rent to enjoy the amazing Mallorcan Coast. ' +
            'These beautiful boats are available without license. You can enjoy them if you are above 18 years old. ' +
            'Put off from Sant Elm and enjoy amazing views, beaches, calas and caves located in South-West Mallorca. ' +
            'Also have fun snorkeling in Sa Dragonera, a Natural Park known for its lizards, birds and endemic flora ' +
            'or have your time to relax and have a good meal in the Mediterranean.',
          boats_information_title: 'Boats information',
          boats_basic: 'Basic',
          boats_max_capacity: 'Max.capacicy: 5 or 6 people',
          boats_power: 'Power: 15HP',
          boats_location: 'Location: Sant Elm',
          boats_caution: 'Caution: 300€',
          boats_gas: 'Gas included',
          boats_equiped_with: 'Equiped with',
          boats_solarium: 'Solarium',
          boats_bimini: 'Bimini',
          boats_fridge: 'Portable fridge',
          boats_bag: 'Waterproof bag',
          boats_extras: 'Extras available',
          boats_masks: 'Snorkeling masks',
          boats_catering: 'Catering',
          boats_drinks: 'Soft drinks',
          boats_alcohol: 'Cava & wine',
          boats_watersports: 'Watersports pack',
          boats_ask: 'Ask for more information!',
        },

        es: {
          home: 'Inicio',
          boats: 'Embarcaciones',
          watersports: 'Deportes acuáticos',
          english: 'Inglés',
          spanish: 'Castellano',
          slogan: 'Alquila tu barco en Mallorca',

          boats_title: '¡Alquila tu barca desde 180€ al día!',
          boats_description: '',
          boats_information_title: '',
          boats_basic: '',
          boats_max_capacity: '',
          boats_power: '',
          boats_location: '',
          boats_caution: '',
          boats_gas: '',
          boats_equiped_with: '',
          boats_solarium: '',
          boats_bimini: '',
          boats_fridge: '',
          boats_bag: '',
          boats_extras: '',
          boats_masks: '',
          boats_catering: '',
          boats_drinks: '',
          boats_alcohol: '',
          boats_watersports: '',
          boats_ask: '',
        }
      }
    });
  }
}
</script>
