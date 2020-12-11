<template>
  <div class="ml-4">
    <div class="text-sm leading-5 font-medium text-gray-900">{{ firstName }}</div>
    <div class="text-sm leading-5 font-medium text-gray-900">{{ lastName }}</div>
  </div>
</template>

<script>
export default {
  name: 'EmployeeInfo',
  props: {
    firstName: String,
    lastName: String
  }
}
</script>

<style scoped>

</style>
