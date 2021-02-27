<template>
  <div>
    <h3 class="title mt-20 mb-4">{{ $t('map_title') }}</h3>
    <GoogleMap
      :api-key="googleApiKey"
      :center="center"
      :zoom="15"
      style="width: 100%; height: 500px"
    >
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { GoogleMap, Marker } from 'vue3-google-map';

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const googleApiKey = process.env.VUE_APP_GOOGLE_MAPS_KEY;
    const center = { lat: 39.578955, lng: 2.350158 }  // Sant Elm
    return {
      googleApiKey,
      center
    }
  },
});
</script>
