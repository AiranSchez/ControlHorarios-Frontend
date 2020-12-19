<template>
  <div class="home flex flex-col min-h-screen">
    <Header user=""/>
    <img src="../assets/Home-picture-1.jpg" alt="Main picture" />
    <div class="bg-white flex flex-col items-center justify-around pt-10 pb-10">
      <div class="font-bold text-xl pb-4 transform">
        Controla tus horas totales
      </div>
      <div class="text-base flex flex-col items-center pb-4">
        <div>Nuestra meta es lograr que cada día</div>
        <div>sea más fácil para ti trabajar</div>
      </div>
      <img
        src="../assets/Home-icon-1.png"
        alt="Calendar icon"
        class="w-20 h-20 shadow-2xl"
      />
    </div>
    <img src="../assets/Home-picture-2.jpg" alt="Calendar picture" />
    <div class="bg-white flex flex-col items-center justify-around pt-10 pb-10">
      <div class="font-bold text-xl pb-4">Organiza a tu equipo</div>
      <div class="text-base flex flex-col items-center pb-4">
        <div>Gestiona las vacaciones individuales</div>
        <div>como nunca lo has hecho</div>
      </div>
      <img
        src="../assets/Home-icon-2.png"
        alt="Chronometer icon"
        class="w-20 h-20"
      />
    </div>
    <img src="../assets/Home-picture-3.jpg" alt="Meeting Picture" />
    <Members/>
    <Footer/>
  </div>
</template>
<script>
import Members from '../components/MemberCard/Members/Members'
import Header from '@/components/Header/Header'
import Footer from '../components/Footer/Footer'

export default {
  name: 'Home',
  components: {
    Members,
    Header,
    Footer
  }
}
</script>
