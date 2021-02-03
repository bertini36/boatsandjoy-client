<template>
  <div>
    <header class="flex flex-col h-screen">
      <div class="mx-auto z-10 pt-16">
        <div class="flex flex-row justify-center">
          <img src="../assets/img/big-logo.png" alt="Big logo" class="w-3/4 md:w-2/4">
        </div>
      </div>
      <div class="mt-12 flex flex-row justify-center">
        <Calendar v-model="selectedDate" :inline="true" />
      </div>
    </header>
  </div>
</template>

<script>
import Calendar from 'primevue/calendar';

export default {
  name: 'Home',
  components: {
    Calendar,
  },
  data() {
    return {
      selectedDate: null
    }
  },
}
</script>

<style scoped>
header {
  background: url('../assets/img/main-cover.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
