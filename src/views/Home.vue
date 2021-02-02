<template>
  <div>
    <header class="flex h-screen">
      <div class="mx-auto z-10 pt-16">
        <div class="flex flex-row justify-center">
          <img src="../assets/img/big-logo.png" alt="Big logo" class="w-3/4 md:w-2/4">
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
