<template>
  <div class="pl-10">
      <img class="w-40 h-30 rounded-full m-auto" :src="require(`../../../assets/${picture}`)" alt="Member project avatar"/>
  </div>
</template>

<script>
export default {
  name: 'MemberAvatar',
  props: {
    picture: String
  }
}
</script>

<style>

</style>
