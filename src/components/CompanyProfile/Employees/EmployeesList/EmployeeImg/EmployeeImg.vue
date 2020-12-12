<template>
  <div class="flex-shrink-0 h-10 w-10">
    <img class="h-10 w-10 rounded-full" :src="'@/assets/' + picture" alt="">
  </div>
</template>

<script>
export default {
  name: 'EmployeeImg',
  props: {
    picture: String
  }
}
</script>

<style scoped>

</style>
