<template>
  <div id="main" class="flex flex-col h-screen">
    <div class="m-auto">
      HOLA
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import utils from '../utils';

export default {
  setup() {
    const route = useRoute();
    const date = route.params.date;

    onMounted(async () => {
      await getDateAvail(date);
    });

    const getDateAvail = async (date) => {
      axios.get(`${process.env.VUE_APP_API_URL}availability/day/${utils.formatDate(date)}/`).then((response) => {
        const results = response.data.data;
        console.log(results);
      });
    };
  }
}
</script>

<style scoped>
#main {
  background: url('../assets/img/main-cover.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
