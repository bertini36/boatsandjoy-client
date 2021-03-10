import Home from './views/Home.vue';
import Results from './views/Results.vue';
import PaymentSuccess from './views/PaymentSuccess.vue';
import PaymentError from './views/PaymentError.vue';

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
    path: '/payment/success',
    name: 'payment-success',
    component: PaymentSuccess,
  },
  {
    path: '/payment/error',
    name: 'payment-error',
    component: PaymentError,
  },
];

export default routes;
