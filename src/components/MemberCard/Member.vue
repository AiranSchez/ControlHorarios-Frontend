<template>
  <div>
    <div class="flex">
      <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0 w-3/5 m-3">
          <MemberAvatar/>
        <div class="pt-6 md:p-8 text-center space-y-4">
          <Blockquote value="La salud es lo importante"/>
          <MemberNameRol name="Ari" rol="puto amo"/>
        </div>
      </figure>
    </div>
    <div class="flex justify-end">
      <figure class="flex justify-end bg-gray-100 rounded-xl p-8 md:p-0 w-3/5 m-3">
        <div class="pt-6 md:p-8 text-center space-y-4">
          <Blockquote value="La salud es lo importante"/>
          <MemberNameRol name="Airan" rol="puto amo"/>
        </div>
          <MemberAvatar/>
      </figure>
    </div>
     <div class="flex">
      <figure class="flex bg-gray-100 rounded-xl p-8 md:p-0 w-3/5 m-3">
       <MemberAvatar/>
        <div class="pt-6 md:p-8 text-center space-y-4">
          <Blockquote value="La salud es lo importante"/>
          <MemberNameRol name="Jaime" rol="puto amo"/>
        </div>
      </figure>
    </div>
     <div class="flex justify-end">
      <figure class="flex justify-end bg-gray-100 rounded-xl p-8 md:p-0 w-3/5 m-3">
        <div class="pt-6 md:p-8 text-center space-y-4">
          <Blockquote value="La salud es lo importante"/>
          <MemberNameRol name="Manu" rol="puto amo"/>
        </div>
          <MemberAvatar/>
      </figure>
    </div>
  </div>
</template>

<script>
import Blockquote from './Blockquote.vue'
import MemberAvatar from './MemberAvatar.vue'
import MemberNameRol from './MemberNameRol'
export default {
  name: 'Member',
  components: {
    Blockquote,
    MemberNameRol,
    MemberAvatar
  }
}
</script>

<style>

</style>
