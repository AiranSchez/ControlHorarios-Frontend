<template>
  <div>
    <div class="flex flex-col">
      <div class="flex justify-around">
        <div class="max-w-lg">Description</div>
        <div class="max-w-lg">Start time</div>
        <div class="max-w-lg">End time</div>
        <div class="max-w-lg">Total</div>
      </div>
      <div v-for="(formattedRecord, index) in formattedRecords" :key="index" >
        <EmployeeRecord :description="formattedRecord.record.Description" :startTime="formattedRecord.record.StartTime" :endTime="formattedRecord.record.EndTime" :total="formattedRecord.total"/>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import EmployeeRecord from '@/components/EmployeeProfile/EmployeeRecord/EmployeeRecord'

export default {
  name: 'EmployeeSummary',
  components: {
    EmployeeRecord
  },
  props: {
    records: Array,
    clicked: Boolean
  },
  mounted () {
    console.log(this.records.length)
    this.records.forEach(record => {
      const StartTime = dayjs(record.StartTime)
      const EndTime = dayjs(record.EndTime)
      const difference = dayjs(EndTime.diff(StartTime))
      this.total.push(difference.format('HH:mm:ss'))
    })
    for (let i = 0; i < this.records.length; i++) {
      const formattedRecord = {
        record: this.records[i],
        total: this.total[i]
      }
      this.formattedRecords.push(formattedRecord)
    }
  },
  methods: {
    isClicked () {
      if (this.clicked) {
        this.$forceUpdate()
      }
    }
  },
  data () {
    return {
      total: [],
      formattedRecords: []
    }
  }
}
</script>
