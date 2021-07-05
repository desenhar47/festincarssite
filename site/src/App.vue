<template>
  <div id="app">
    <Navbar/>
    <div class="content">
      <router-view/>
    </div>
    <FooterComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import FooterComponent from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    FooterComponent
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet"');
@import url('https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap');

body,figure{margin: 0;}

#app {
  font-family: 'Oswald', sans-serif;
  overflow: hidden;
  h2,h1 {
    font-family: 'Lobster Two', cursive;
    font-weight: 400;
  }
  .content{
    min-height: 72vh;
  }
}
</style>
