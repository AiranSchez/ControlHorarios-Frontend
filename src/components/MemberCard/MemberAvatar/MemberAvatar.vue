<template>
  <div>
      <img class="w-32 h-32 rounded-full mx-auto" :src="require(`../../../assets/${picture}`)" alt="Member project avatar"/>
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
