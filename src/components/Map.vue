<template>
  <div>
    <h3 class="title mt-20 mb-8">You can find us in Sant Elm!</h3>
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
    const googleApiKey = 'AIzaSyAzW4jgKYOJloB347OY_Kcwr13zv5WvUmk';
    const center = { lat: 39.578955, lng: 2.350158 }  // Sant Elm
    return {
      googleApiKey,
      center
    }
  },
});
</script>
