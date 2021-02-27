<template>
  <div>
    <AvailabilitySection></AvailabilitySection>
    <BoatsSection></BoatsSection>
    <WaterSportsSection></WaterSportsSection>
    <Map></Map>
    <Footer></Footer>
  </div>
</template>

<script>
import AvailabilitySection from '../components/AvailabilitySection';
import BoatsSection from '../components/BoatsSection';
import WaterSportsSection from '../components/WaterSportsSection';
import Map from '../components/Map';
import Footer from '../components/Footer';

export default {
  components: {
    AvailabilitySection,
    BoatsSection,
    WaterSportsSection,
    Map,
    Footer
  },
}
</script>
