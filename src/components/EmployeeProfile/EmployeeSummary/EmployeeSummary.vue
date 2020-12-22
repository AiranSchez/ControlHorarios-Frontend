<template>
  <div>
    <div class="table w-full">
      <div class="table-row-group text-center font-bold ">
        <div class="table-row">
          <div class="table-cell">Description</div>
          <div class="table-cell">Date</div>
          <div class="table-cell">Start time</div>
          <div class="table-cell">End time</div>
          <div class="table-cell">Total</div>
        </div>
      </div>
      <div v-for="(formattedRecord, index) in formattedRecords" :key="index" class="table-row-group text-center">
        <EmployeeRecord
            :description="formattedRecord.record.Description"
            :startTime="formattedRecord.record.StartTime"
            :endTime="formattedRecord.record.EndTime"
            :total="formattedRecord.total"/>
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
    records: Array
  },
  mounted () {
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
    this.formattedRecords = this.formattedRecords.reverse()
  },
  data () {
    return {
      total: [],
      formattedRecords: []
    }
  }
}
</script>
