import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';
import { createI18n } from 'vue-i18n';
import PrimeVue from 'primevue/config';

import App from './App.vue';
import routes from './routes';
import store from './store';
import en from './i18n/en';
import es from './i18n/es';

import 'primevue/resources/themes/nova/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './assets/css/main.css';
import 'noty/lib/noty.css';
import 'noty/lib/themes/nest.css';

const app = createApp(App)

app
  .use(createRouter({
    history: createWebHistory(),
    routes,
  }))
  .use(createStore(store))
  .use(createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en,
      es
    }
  }))
  .use(PrimeVue)
  .mount('#app');
