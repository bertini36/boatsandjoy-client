<template>
  <div>
    <AvailabilitySection></AvailabilitySection>
    <BoatsSection></BoatsSection>
    <ExtrasSection></ExtrasSection>
    <Map></Map>
    <Footer></Footer>
  </div>
</template>

<script>
import AvailabilitySection from '../components/AvailabilitySection';
import BoatsSection from '../components/BoatsSection';
import ExtrasSection from '../components/ExtrasSection';
import Map from '../components/Map';
import Footer from '../components/Footer';

export default {
  components: {
    AvailabilitySection,
    BoatsSection,
    ExtrasSection,
    Map,
    Footer
  },
}
</script>
