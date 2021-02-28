import { useI18n } from 'vue-i18n';

import { showErrorNotification } from '../utils/notifications';

let { Stripe } = global;

export async function redirectToCheckout(sessionId) {
  console.log(process.env.VUE_APP_STRIPE_API_KEY);
  const stripe = Stripe(process.env.VUE_APP_STRIPE_API_KEY);
  await stripe.redirectToCheckout({
    sessionId: sessionId
  }).then(function() {
    const i18n = useI18n();
    showErrorNotification(i18n.t('error_redirecting_to_stripe'));
  });
}
