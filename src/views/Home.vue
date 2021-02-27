<template>
  <div>
    <Availability></Availability>
    <Boats></Boats>
    <WaterSports></WaterSports>
    <Map></Map>
    <Footer></Footer>
  </div>
</template>

<script>
import Availability from '../components/Availability';
import Boats from '../components/Boats';
import WaterSports from '../components/WaterSports';
import Map from '../components/Map';
import Footer from '../components/Footer';

export default {
  components: {
    Availability,
    Boats,
    WaterSports,
    Map,
    Footer
  },
}
</script>
