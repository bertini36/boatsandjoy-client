<template>
  <div>
    <AvailabilitySection></AvailabilitySection>
    <BoatsSection></BoatsSection>
    <WaterSportsSection></WaterSportsSection>
    <CateringSection></CateringSection>
    <Map></Map>
    <Footer></Footer>
  </div>
</template>

<script>
import AvailabilitySection from '../components/AvailabilitySection';
import BoatsSection from '../components/BoatsSection';
import WaterSportsSection from '../components/WaterSportsSection';
import CateringSection from '../components/CateringSection';
import Map from '../components/Map';
import Footer from '../components/Footer';

export default {
  components: {
    AvailabilitySection,
    BoatsSection,
    WaterSportsSection,
    CateringSection,
    Map,
    Footer
  },
}
</script>
