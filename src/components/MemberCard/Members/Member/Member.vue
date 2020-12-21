<template>
    <figure class="flex justify-around items-center max-w-3xl h-52 bg-white m-4 rounded-md">
        <MemberAvatar :picture="pictureUrl"/>
        <div class="text-left space-y-6 w-96">
          <MemberNameRol :name="memberName" :rol="memberRole"/>
          <Blockquote :value="memberQuote"/>
          <MemberSocialMedia/>
        </div>
    </figure>
</template>

<script>
import Blockquote from '../../Blockquote/Blockquote.vue'
import MemberAvatar from '../../MemberAvatar/MemberAvatar.vue'
import MemberNameRol from '../../MemberNameRol/MemberNameRol'
import MemberSocialMedia from '../MemberSocialMedia/MemberSocialMedia'

export default {
  name: 'Member',
  components: {
    Blockquote,
    MemberNameRol,
    MemberAvatar,
    MemberSocialMedia
  },
  props: {
    pictureUrl: String,
    memberName: String,
    memberRole: String,
    memberQuote: String
  }
}
</script>
