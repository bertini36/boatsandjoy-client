<template>
  <div id="app" class="relative">
    <navbar/>
    <full-screen-nav/>
    <div data-testid="location-display" class="hidden">{{ $route.fullPath }}</div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import FullScreenNav from './components/FullScreenNav';

export default {
  name: 'App',
  components: {
    Navbar,
    FullScreenNav
  }
}
</script>
