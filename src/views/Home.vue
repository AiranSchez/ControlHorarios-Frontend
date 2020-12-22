<template>
  <div>
    <div class="home flex flex-col min-h-screen leading-normal tracking-normal bg-gradient-to-r from-green-400 to-blue-500">
      <Header class="text-black" user=""/>
      <HomeHeader/>
      <HomeInfo/>
      <HomeDescription/>
      <Members/>
      <Footer/>
    </div>
  </div>

</template>
<script>
import Members from '../components/MemberCard/Members/Members'
import Header from '@/components/Header/Header'
import Footer from '../components/Footer/Footer'
import HomeInfo from '@/components/HomeComponents/HomeInfo/HomeInfo'
import HomeHeader from '@/components/HomeComponents/HomeHeader/HomeHeader'
import HomeDescription from '@/components/HomeComponents/HomeDescription/HomeDescription'

export default {
  name: 'Home',
  components: {
    Members,
    Header,
    Footer,
    HomeInfo,
    HomeHeader,
    HomeDescription
  }
}
</script>
