<template>
  <div>
    <div v-for="record in records" :key="record">
      <div class="flex ">
        <p>Check in: {{record.StartTime}} -</p>
        <p>Check out: {{record.EndTime}}</p>
      </div>
    </div>
    <div v-for="hour in hours" :key="hour">
      <div class="flex">
        <div>{{hour}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSummary } from '@/domain/services/employeeServices'
import dayjs from 'dayjs'

export default {
  name: 'EmployeeHours',
  mounted () {
    const employeeID = localStorage.getItem('EmployeeID')
    getSummary(employeeID)
      .then(resp => {
        resp.forEach(record => {
          this.records.push(record)
        })
        this.calculateDayHours()
      })
  },
  methods: {
    calculateDayHours () {
      this.records.forEach(record => {
        const today = dayjs().format('YYYY-MM-DD')
        if (dayjs(record.StartTime).format('YYYY-MM-DD') === today) {
          const StartTime = dayjs(record.StartTime)
          const EndTime = dayjs(record.EndTime)
          const difference = dayjs(EndTime.diff(StartTime))
          this.hours.push(difference)
        }
      })
    }
  },
  data () {
    return {
      records: [],
      hours: []
    }
  }
}
</script>

<style scoped>

</style>
