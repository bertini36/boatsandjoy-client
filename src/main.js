import { createApp } from 'vue';
import App from './App.vue';
import router from './routes.js';
import store from './store';
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/nova/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './assets/css/main.css';
import 'noty/lib/noty.css';
import 'noty/lib/themes/nest.css';

const app = createApp(App)

app.config.globalProperties.$filters = {
  // TODO: Move to a file
  formatHour(value) {
    const slices = value.split(':');
    return `${slices[0]}:${slices[1]}`;
  }
}

app.use(router)
  .use(store)
  .use(PrimeVue)
  .mount('#app');
