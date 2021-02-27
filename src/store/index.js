export default {
  state: {
    selectedDate: null,
    showingFullScreenNav: false,
  },
  getters: {
    selectedDate: state => state.selectedDate,
    showingFullScreenNav: state => state.showingFullScreenNav,
  },
  mutations: {
    setSelectedDate(state, newSelectedDate) {
      state.selectedDate = newSelectedDate;
    },

    showFullScreenNav(state) {
      state.showingFullScreenNav = true;
    },

    hideFullScreenNav(state) {
      state.showingFullScreenNav = false;
    },
  }
};
