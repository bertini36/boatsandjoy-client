import { createStore } from 'vuex';
import { createI18n } from 'vue-i18n';
import { render as vtlRender } from '@testing-library/vue';

import routes from '../routes';
import store from '../store';
import en from '../i18n/en';

export function render(component, props = {}, initialState = {}) {
  const testStore = createStore({
    ...store,
    state: {
      ...store.state,
      ...initialState
    }
  });
  const testI18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en
    }
  });
  return vtlRender(component, {
    props: props,
    routes: routes,   // Router will be to be passed as plugin with next versions TL
    global: {
      plugins: [
        testStore,
        testI18n
      ]
    }
  });
}
