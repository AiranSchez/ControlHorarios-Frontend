<template>
  <div id="app" class="flex flex-col justify-center">
    <Header user=""/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
