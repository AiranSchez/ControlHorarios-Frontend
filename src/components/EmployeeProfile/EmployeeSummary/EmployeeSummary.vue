<template>
  <div>
    <div>Employee Summary</div>
    <div v-for="(value, key) in records" :key="key" class="flex">
      <div class="flex w-full justify-around">
        <div>Employee: {{ value.EmployeeID }}</div>
        <div>Description: {{ value.Description }}</div>
        <div>Start time: {{ value.StartTime }}</div>
        <div>End time: {{ value.EndTime }}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'EmployeeSummary',
  props: {
    records: Array
  }
}
</script>

<style>

</style>
