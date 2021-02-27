<template>
  <div id="app" class="relative">
    <navbar/>
    <full-screen-nav/>

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
