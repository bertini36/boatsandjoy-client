import { createApp } from 'vue';
import App from './App.vue';
import router from './routes.js';
import store from './store.js';
import './assets/css/main.css';

createApp(App).use(router).use(store).mount('#app')
