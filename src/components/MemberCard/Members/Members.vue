<template>
  <div class="flex flex-col justify-center items-center mb-10">
    <h1 class="w-full my-2 mb-10 text-5xl font-bold leading-tight text-center text-white">Our team</h1>
    <Member
      pictureUrl = "Manuel.png"
      memberName="Manuel Pérez Regalado"
      memberRole="Fullstack Developer"
      memberQuote="My critics are... usually short-lived."
      twitter="https://twitter.com/"
      github="https://github.com/Pandacore"
      linkedin="https://www.linkedin.com/in/manuel-perez-regalado/"
    />
    <Member
      pictureUrl = "ArianeZanardi.jpg"
      memberName="Ariane Zanardi Francisco"
      memberRole="Fullstack Developer"
      memberQuote="The best way to predict the future is to invent it"
      twitter="https://twitter.com/ariane_zanardi"
      github="https://github.com/arianezf"
      linkedin="https://www.linkedin.com/in/ariane-zanardi-35093b1a3/"/>
    <Member
      pictureUrl = "Airan.jpeg"
      memberName="Airán Sánchez Brito"
      memberRole="Fullstack Developer"
      memberQuote="When nothing goes right... go left"
      twitter="https://twitter.com/AiranDev"
      github="https://github.com/AiranSchez"
      linkedin="https://www.linkedin.com/in/air%C3%A1n-s%C3%A1nchez-brito-415910145/"/>
    <Member
      pictureUrl = "Jaime.jpeg"
      memberName="Jaime Rodríguez Pérez"
      memberRole="Fullstack Developer"
      memberQuote="May stackoverflow be with you"
      twitter="https://twitter.com/"
      github="https://github.com/jaimerperez"
      linkedin="https://www.linkedin.com/in/jaime-rodriguez-perez/"/>
  </div>
</template>

<script>
import Member from './Member/Member'

export default {
  name: 'Members',
  components: {
    Member
  }
}
</script>
