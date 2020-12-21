<template>
  <div class="flex justify-center items-center">
    <div class="flex flex-col justify-center items-center w-10/12">
      <div class="flex justify-start w-10/12">
        <Member pictureUrl = "EmperorsWisdom.jpg" memberName="Manuel Pérez Regalado" memberRole="Fullstack Developer" memberQuote="There is only the Emperor, and he is our Shield and Protector."/>
      </div>
      <div class="flex justify-end w-10/12">
        <Member pictureUrl = "EmperorsWisdom.jpg" memberName="Ariane Zanardi Francisco" memberRole="Fullstack Developer" memberQuote="There is only the Emperor, and he is our Shield and Protector."/>
      </div>
      <div class="flex justify-start w-10/12">
        <Member pictureUrl = "EmperorsWisdom.jpg" memberName="Airán Sánchez Brito" memberRole="Fullstack Developer" memberQuote="There is only the Emperor, and he is our Shield and Protector."/>
      </div>
      <div class="flex justify-end w-10/12">
        <Member pictureUrl = "EmperorsWisdom.jpg" memberName="Jaime Rodríguez Pérez" memberRole="Fullstack Developer" memberQuote="There is only the Emperor, and he is our Shield and Protector."/>
      </div>
    </div>
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
