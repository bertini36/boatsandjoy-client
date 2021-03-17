import Home from './views/Home.vue';
import Results from './views/Results.vue';
import BookingSummary from './views/BookingSummary.vue';

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
  {
    path: '/booking/summary',
    name: 'booking-summary',
    component: BookingSummary,
  },
];

export default routes;
