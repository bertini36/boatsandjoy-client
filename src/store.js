import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      showingFullScreenNav: false,
      selectedDate: null,
    }
  },
  mutations: {
    showFullScreenNav(state) {
      state.showingFullScreenNav = true;
    },

    hideFullScreenNav(state) {
      state.showingFullScreenNav = false;
    },

    setSelectedDate(state, newSelectedDate) {
      state.selectedDate = newSelectedDate;
    }
  }
});

export default store;
