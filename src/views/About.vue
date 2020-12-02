<template>
  <div class="about flex flex-col justify-between h-screen">
    <Header/>
    <h1>This is an about page</h1>
    <Footer/>
  </div>
</template>.

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
