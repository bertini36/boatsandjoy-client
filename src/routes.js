import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Results from '@/views/Results.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/results/:date',
    name: 'results',
    component: Results,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
