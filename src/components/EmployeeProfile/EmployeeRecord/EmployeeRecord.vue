<template>
  <div>
    <div class="flex justify-around">
      <div class="max-w-lg">{{ description }}</div>
      <div class="max-w-lg">{{ startTime }}</div>
      <div class="max-w-lg">{{ endTime }}</div>
      <div class="max-w-lg">{{ total }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployeeRecord',
  props: {
    description: String,
    startTime: String,
    endTime: String,
    total: String
  }
}
</script>

<style scoped>

</style>
