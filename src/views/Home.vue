<template>
  <div>
    <Availability></Availability>

    <Boats></Boats>

    <WaterSports></WaterSports>

    <div class="flex flex-row pt-20">
      <img src="../assets/img/second-cover.jpg" class="w-full h-56 md:h-96" alt="Dragonera island">
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Availability from '@/components/Availability';
import Boats from '@/components/Boats';
import WaterSports from '@/components/WaterSports';
import Footer from '@/components/Footer';

export default {
  name: 'Home',
  components: {
    Availability,
    Boats,
    WaterSports,
    Footer
  },
}
</script>
