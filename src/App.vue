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
import {provideI18n} from '@/i18nPlugin';

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
          check_availability: 'Check availability',

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

          watersports_title: 'Level up your visit with watersports!',
          watersports_description: 'Do you want to enjoy the Sea? Looking for something different? We help you to ' +
            'make it the best way it fits you! We work with various companies with which you ' +
            'can enjoy your activity with your friends and family. From a relaxing row ' +
            'with a Stand up Paddle Surf or Kayak to an exciting Jetski excursion or ' +
            'flying on the sea with Flyboard.',
          watersports_diving: 'Diving',
          watersports_jetski: 'Jetski',
          watersports_rent_and_excursion: 'Rent & excursion',
          watersports_kayak: 'Kayak',
          watersports_kitesurf: 'Kitesurf',
          watersports_rent_and_lessons: 'Rent & lessons',
          watersports_sup: 'Paddle surf / SUP',
          watersports_fishing: 'Fishing',
          watersports_excursion: 'Excursion',
          watersports_surf: 'Surf',
          watersports_sailing: 'Sailing',
          watersports_windsurf: 'Windsurf',
          watersports_flyboard: 'Flyboard',

          map_title: 'You can find us in Sant Elm!',

          results_title: 'Results',
          results_select_a_pricing_option: 'Choose your schedule',
          results_from: 'From',
          results_to: 'to',
          results_book: 'Book now!',

          checkout_resident: 'Resident of the Balearic Islands',
          checkout_legal_advice: 'Accept legal advice',
          checkout_terms_and_conditions: 'Accept terms and conditions',
          checkout_name: 'Name',
          checkout_telephone: 'Telephone number',
          checkout_extras: 'Doubts & extras',
          checkout_pay: 'Pay with credit card',
          checkout_accept_legal_advice_error: 'You have to accept legal advice',
          checkout_accept_terms_and_conditions_error: 'You have to accept terms and conditions',
          checkout_name_error: 'You have to specify your name',
          checkout_telephone_error: 'You have to specify your telephone number',

          footer_about_us_title: 'About us',
          footer_about_us_content: 'bla bla bla',
          footer_links_title: 'Links',
          footer_legal_advice: 'Legal advice',
          footer_terms: 'Terms and Conditions',
          footer_cookies: 'Cookies policy',
          footer_contact_title: 'Contact',
          footer_company_address: 'C/Omelades 2A 2º 1ª 07012 Palma de Mallorca',
          footer_rights: 'All rights reserved',
          footer_created: 'Created by',
        },

        es: {
          home: 'Inicio',
          boats: 'Embarcaciones',
          watersports: 'Deportes acuáticos',
          english: 'Inglés',
          spanish: 'Castellano',
          slogan: 'Alquila tu barco en Mallorca',
          check_availability: '',

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

          watersports_title: '',
          watersports_description: '',
          watersports_diving: '',
          watersports_jetski: '',
          watersports_rent_and_excursion: '',
          watersports_kayak: '',
          watersports_kitesurf: '',
          watersports_rent_and_lessons: '',
          watersports_sup: '',
          watersports_fishing: '',
          watersports_excursion: '',
          watersports_surf: '',
          watersports_sailing: '',
          watersports_windsurf: '',
          watersports_flyboard: '',

          map_title: '',

          results_title: '',
          results_select_a_pricing_option: '',
          results_from: '',
          results_to: '',
          results_book: '',

          checkout_resident: '',
          checkout_legal_advice: '',
          checkout_terms_and_conditions: '',
          checkout_name: '',
          checkout_telephone: '',
          checkout_extras: '',
          checkout_pay: '',
          checkout_accept_legal_advice_error: '',
          checkout_accept_terms_and_conditions_error: '',
          checkout_name_error: '',
          checkout_telephone_error: '',

          footer_about_us_title: '',
          footer_about_us_content: '',
          footer_links_title: '',
          footer_legal_advice: '',
          footer_terms: '',
          footer_cookies: '',
          footer_contact_title: '',
          footer_company_address: '',
          footer_rights: '',
          footer_created: '',
        }
      }
    });
  }
}
</script>
