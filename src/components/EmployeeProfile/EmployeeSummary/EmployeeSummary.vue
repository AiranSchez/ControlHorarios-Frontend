<template>
  <div>
    <div>Employee Summary</div>
    <div v-for="(value, index) in records" :key="index" class="flex">
      <div class="flex w-full justify-around">
        <div>Description: {{ value.Description }}</div>
        <div>Start time: {{ value.StartTime }}</div>
        <div>End time: {{ value.EndTime }}</div>
      </div>
    </div>
    <div v-for="(value, index) in total" :key="index" >
        <div >Total: {{ value }}</div>
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
  mounted () {
    this.records.forEach(record => {
      const StartTime = dayjs(record.StartTime)
      const EndTime = dayjs(record.EndTime)
      const difference = dayjs(EndTime.diff(StartTime))
      this.total.push(difference.format('HH:mm:ss'))
    })
  },
  data () {
    return {
      total: []
    }
  }
}
</script>
