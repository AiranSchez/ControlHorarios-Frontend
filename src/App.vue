<template>
  <div id="app" class="flex flex-col justify-center">
    <router-view/>
    <Footer/>
  </div>
</template>

<script>

import Footer from './components/Footer/Footer'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>
