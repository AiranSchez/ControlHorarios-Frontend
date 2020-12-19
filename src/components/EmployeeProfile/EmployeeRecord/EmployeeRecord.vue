<template>
  <div class="table-row text-center ">
      <div class="table-cell max-w-min border-b border-gray-200 whitespace-no-wrap w-40 px-6 py-4">{{ formattedDescription }}</div>
      <div class="table-cell border-b border-gray-200 whitespace-no-wrap w-40 px-6 py-4">{{ formattedDate }}</div>
      <div class="table-cell border-b border-gray-200 whitespace-no-wrap w-40 px-6 py-4">{{ formattedStartTime }}</div>
      <div class="table-cell border-b border-gray-200 whitespace-no-wrap w-40 px-6 py-4">{{ formattedEndTime }}</div>
      <div class="table-cell border-b border-gray-200 whitespace-no-wrap w-40 px-6 py-4">{{ total }}</div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'EmployeeRecord',
  props: {
    description: {
      type: String,
      required: true
    },
    startTime: String,
    endTime: String,
    total: String
  },
  data () {
    return {
      formattedDate: dayjs(this.startTime).format('YYYY/MM/DD'),
      formattedStartTime: dayjs(this.startTime).format('HH:mm:ss'),
      formattedEndTime: dayjs(this.endTime).format(' HH:mm:ss '),
      formattedDescription: this.checkDescription(this.description)
    }
  },
  methods: {
    checkDescription (description) {
      if (description === '') {
        return 'No description provided'
      } else {
        return description
      }
    }
  }
}
</script>

<style scoped>

</style>
