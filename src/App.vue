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
          slogan: 'Rent your boat in Mallorca'
        },
        es: {
          home: 'Inicio',
          boats: 'Embarcaciones',
          watersports: 'Deportes acuáticos',
          english: 'Inglés',
          spanish: 'Castellano',
          slogan: 'Alquila tu barco en Mallorca'
        }
      }
    });
  }
}
</script>
