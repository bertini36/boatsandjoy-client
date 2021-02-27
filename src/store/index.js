export default {
  state: {
    showingFullScreenNav: false,
    selectedDate: null,
  },
  getters: {
    showingFullScreenNav: state => state.showingFullScreenNav,
    selectedDate: state => state.selectedDate
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
};
