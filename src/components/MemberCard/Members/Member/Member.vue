<template>
    <figure class="flex flex-row justify-evenly bg-gray-100 rounded-xl p-8 w-3/5 m-3 shadow-xl">
        <MemberAvatar :picture="pictureUrl"/>
        <div class="text-left space-y-6">
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
