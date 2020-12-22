<template>
<div class="form-item">
  <label class="text-xl ">Summary</label>
    <div class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200">
      <div>Daily hours: {{ daily }}</div>
      <div>Monthly hours: {{ monthly }}</div>
    </div>
</div>
</template>

<script>
import { getSummary } from '@/domain/services/employeeServices'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

export default {
  name: 'EmployeeHours',
  props: {
    employeeID: String
  },
  mounted () {
    getSummary(this.employeeID)
      .then(resp => {
        resp.data.data.forEach(record => {
          this.records.push(record)
        })
        this.calculateDayHours()
      })
  },
  methods: {
    calculateDayHours () {
      this.records.forEach(record => {
        const today = dayjs().format('YYYY-MM-DD')
        const month = dayjs().format('YYYY-MM')
        if (dayjs(record.StartTime).format('YYYY-MM-DD') === today) {
          const StartTime = dayjs(record.StartTime)
          const EndTime = dayjs(record.EndTime)
          const difference = dayjs(EndTime.diff(StartTime))
          this.hours.push(difference)
        }
        if (dayjs(record.StartTime).format('YYYY-MM') === month) {
          const StartTime = dayjs(record.StartTime)
          const EndTime = dayjs(record.EndTime)
          const difference = dayjs(EndTime.diff(StartTime))
          this.monthHours.push(difference)
        }
      })
      this.daily = this.sumTime(this.hours)
      this.monthly = this.sumTime(this.monthHours)
    },
    sumTime (hours) {
      let totalTime = dayjs.duration(0)
      hours.forEach(time => {
        const duration = dayjs.duration({
          seconds: time.get('second'),
          minutes: time.get('minute'),
          hours: time.get('hour')
        })
        totalTime = duration.add(totalTime)
      })
      return dayjs(totalTime.asMilliseconds()).format('HH:mm:ss')
    }
  },
  data () {
    return {
      records: [],
      hours: [],
      daily: '',
      monthHours: [],
      monthly: ''
    }
  }
}
</script>
