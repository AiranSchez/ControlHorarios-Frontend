<template>
  <div class="p-14">
      <Member pictureUrl = "EmperorsWisdom.jpg" memberName="Manuel Pérez Regalado" memberRole="Fullstack Developer" memberQuote="My critics are... usually short-lived."/>
    <div class="flex justify-end">
      <Member pictureUrl = "EmperorsWisdom.jpg" memberName="Ariane Zanardi Francisco" memberRole="Fullstack Developer" memberQuote="There is only the Emperor, and he is our Shield and Protector."/>
    </div>
      <Member pictureUrl = "EmperorsWisdom.jpg" memberName="Airán Sánchez Brito" memberRole="Fullstack Developer" memberQuote="There is only the Emperor, and he is our Shield and Protector."/>
    <div class="flex justify-end">
      <Member pictureUrl = "EmperorsWisdom.jpg" memberName="Jaime Rodríguez Pérez" memberRole="Fullstack Developer" memberQuote="There is only the Emperor, and he is our Shield and Protector."/>
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
