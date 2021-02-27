import Home from './views/Home.vue';
import Results from './views/Results.vue';

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

export default routes;
