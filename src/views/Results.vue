<template>
<h1 class="pt-20">Results</h1>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute();
    console.log(route.params);
  }
}
</script>

<style scoped>

</style>
