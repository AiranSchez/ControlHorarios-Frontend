<template>
  <div id="register" class="flex flex-col justify-between h-screen">
    <Header/>
    <div>Página de Registro</div>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
