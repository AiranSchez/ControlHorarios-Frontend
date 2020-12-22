<template>
    <figure class="flex justify-around items-center h-52 bg-white m-4 rounded-md w-1/3">
        <MemberAvatar :picture="pictureUrl"/>
        <div class="text-left space-y-6 mx-10 w-96">
          <MemberNameRol :name="memberName" :rol="memberRole"/>
          <Blockquote :value="memberQuote"/>
          <MemberSocialMedia :twitter="twitter" :github="github" :linkedin="linkedin"/>
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
    memberQuote: String,
    twitter: String,
    github: String,
    linkedin: String
  }
}
</script>
