<template>
  <div>
    <h3 class="title mt-20 mb-4">{{ i18n.$t('map_title') }}</h3>
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
import { defineComponent, ref } from 'vue';
import { GoogleMap, Marker } from 'vue3-google-map';
import { useI18n } from '../utils/i18nPlugin';

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const i18n = ref(useI18n());
    // TODO: Move credentials to env
    const googleApiKey = 'AIzaSyAzW4jgKYOJloB347OY_Kcwr13zv5WvUmk';
    const center = { lat: 39.578955, lng: 2.350158 }  // Sant Elm
    return {
      i18n,
      googleApiKey,
      center
    }
  },
});
</script>
