<template>
  <div class="pl-10">
      <img class="w-32 h-32 rounded-full m-auto" :src="require(`../../../assets/${picture}`)" alt="Member project avatar"/>
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
