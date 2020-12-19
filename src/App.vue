<template>
  <div id="app" class="flex flex-col justify-center">
    <Header user=""/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
