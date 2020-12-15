<template>
  <div>
    <div>Employee Summary</div>
    <div v-for="(value, index) in records" :key="index" class="flex">
      <div class="flex w-full justify-around">
        <div>Description: {{ value.Description }}</div>
        <div>Start time: {{ value.StartTime }}</div>
        <div>End time: {{ value.EndTime }}</div>
        <div>Total: {{ timeDifference(value.StartTime,value.EndTime) }}</div>
      </div>
    </div>
  </div>
</template>

<script>

import dayjs from 'dayjs'

export default {
  name: 'EmployeeSummary',
  props: {
    records: Array
  },
  methods: {
    timeDifference (date1, date2) {
      const dateStart = dayjs(date1)
      const dateEnd = dayjs(date2)
      return dateStart.diff(dateEnd, 'second')
    }
  }
}
</script>

<style>

</style>
