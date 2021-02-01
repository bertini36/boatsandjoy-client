import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      showingFullScreenNav: false
    }
  },
  mutations: {
    showFullScreenNav(state) {
      state.showingFullScreenNav = true;
    },

    hideFullScreenNav(state) {
      state.showingFullScreenNav = false;
    }
  }
});

export default store;
