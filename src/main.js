import { createApp } from 'vue';
import App from './App.vue';
import router from './routes.js';
import store from './store.js';
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/nova/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './assets/css/main.css';

createApp(App)
  .use(router)
  .use(store)
  .use(PrimeVue)
  .mount('#app');
