<template>
  <div id="watersports">
    <article class="pt-12 pb-12 md:pb-20 md:pt-10 flex flex-row justify-center">
      <div class="flex flex-col w-full px-4 lg:px-0 lg:w-3/5">
        <h3 class="title mb-4">Level up your visit with watersports!</h3>
        <p class="text-center">
          Do you want to enjoy the Sea? Looking for something different? We help you to
          make it the best way it fits you! We work with various companies with which you
          can enjoy your activity with your friends and family. From a relaxing row
          with a Stand up Paddle Surf or Kayak to an exciting Jetski excursion or
          flying on the sea with Flyboard.
        </p>
      </div>
    </article>

    <div class="flex flex-row justify-center">
      <div class="flex flex-col w-full">
        <div class="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 md:px-4 lg:grid-cols-4 lg:gap-8 xl:gap-14 lg:px-8 xl:px-20 2xl:px-48 pt-3">
          <div class="container group">
            <img class="group-hover:opacity-30" src="../assets/img/diving.png" alt="diving">
            <span class="invisible group-hover:visible">Diving</span>
          </div>
          <div class="container">
            <img class="group-hover:opacity-30" src="../assets/img/jetski.png" alt="jetski">
            <span class="invisible group-hover:visible">Jetski <br> Rent & excursion</span>
          </div>
          <div class="container">
            <img class="group-hover:opacity-30" src="../assets/img/kayak.png" alt="kayak">
            <span class="invisible group-hover:visible">Kayak <br> Rent & excursion</span>
          </div>
          <div class="container">
            <img class="group-hover:opacity-30" src="../assets/img/kitesurf.png" alt="kitesurf">
            <span class="invisible group-hover:visible">Kitesurf <br> Rent & lessons</span>
          </div>
          <div class="container">
            <img class="group-hover:opacity-30" src="../assets/img/paddle.png" alt="sup">
            <span class="invisible group-hover:visible">Paddle surf / SUP</span>
          </div>
          <div class="container">
            <img class="group-hover:opacity-30" src="../assets/img/fishing.png" alt="fishing">
            <span class="invisible group-hover:visible">Fishing <br> Excursion</span>
          </div>
          <div class="container">
            <img class="group-hover:opacity-30" src="../assets/img/surf.png" alt="surf">
            <span class="invisible group-hover:visible">Surf <br> Rent & lessons</span>
          </div>
          <div class="container">
            <img class="group-hover:opacity-30" src="../assets/img/sailing.png" alt="sailing">
            <span class="invisible group-hover:visible">Sailing <br> Rent & lessons</span>
          </div>
          <div class="container">
            <img class="group-hover:opacity-30" src="../assets/img/windsurf.png" alt="windsurf">
            <span class="invisible group-hover:visible">Windsurf <br> Rent & lessons</span>
          </div>
          <div class="container">
            <img class="group-hover:opacity-30" src="../assets/img/flyboard.png" alt="flyboard">
            <span class="invisible group-hover:visible">Flyboard</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WaterSports'
}
</script>

<style scoped>
.container {
  @apply group flex justify-center;
  @apply transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110;
  position: relative;
  text-align: center;
  color: white;
}

/* Centered text */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

img {
  @apply w-96 h-64 rounded-sm;
}

span {
  @apply centered text-xl text-orange-600 tracking-widest;
}
</style>
