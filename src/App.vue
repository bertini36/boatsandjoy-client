<template>
  <div id="app" class="relative">
    <navbar/>
    <eclipse-banner/>
    <full-screen-nav/>
    <div data-testid="location-display" class="hidden">{{ $route.fullPath }}</div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import EclipseBanner from './components/EclipseBanner';
import FullScreenNav from './components/FullScreenNav';

export default {
  name: 'App',
  components: {
    Navbar,
    EclipseBanner,
    FullScreenNav
  }
}
</script>
