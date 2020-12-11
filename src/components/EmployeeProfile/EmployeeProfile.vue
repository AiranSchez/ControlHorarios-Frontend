<template>
  <div class="w-full items-center justify-center">
    <div class="w-full px-2 mt-20">
      <div class="bg-white shadow-xl rounded-lg overflow-hidden md:flex">
        <div class="w-full">
          <div class="p-4 md:p-5 bg-gray-100 flex justify-around items-center ">
            <div class="flex items-center w-1/4">
              <div v-if="!isCheckedIn">
                <button v-on:click="chekIn" class="py-2 px-5 bg-indigo-700 hover:bg-indigo-300 font-bold text-white rounded-lg shadow-md">Check in</button>
              </div>
              <div v-else>
                <button v-on:click="checkOut" class="ml-5 py-2 px-5 bg-red-700 hover:bg-red-300 font-bold text-white rounded-lg shadow-md">Check out</button>
              </div>
            </div>
            <div class="flex">
              <label for="description">Description:</label>
              <input type="text" placeholder="Description" id="description" class="ml-5" v-model="data.description"/>
            </div>
            <Timer :check-in-at="checkInAt" :current-time="currentTime"/>
          </div>
          {{ time }}
          <EmployeeSummary :records="records"></EmployeeSummary>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Timer from './Timer/Timer'
import dayjs from 'dayjs'
import { checkIn, checkOut, getSummary } from '@/domain/services/employeeServices'
import EmployeeSummary from '@/components/EmployeeProfile/EmployeeSummary/EmployeeSummary'

export default {
  components: {
    Timer,
    EmployeeSummary
  },
  data () {
    return {
      checkInAt: '',
      currentTime: '',
      time: '',
      records: [],
      data: {
        description: ''
      },
      isCheckedIn: false
    }
  },
  mounted () {
    this.time = dayjs()
    const employeeID = localStorage.getItem('employeeID')
    getSummary(employeeID).then(resp => { resp.forEach(record => { this.records.push(record) }) })
  },
  methods: {
    chekIn () {
      const employeeID = localStorage.getItem('employeeID')
      checkIn(employeeID, this.data).then(resp => { localStorage.setItem('recordID', resp.recordID) })
      this.checkInAt = new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      setInterval(() => { this.currentTime = new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit', second: '2-digit' }) }, 1000)
      this.isCheckedIn = true
    },
    checkOut () {
      const employeeID = localStorage.getItem('employeeID')
      const recordID = localStorage.getItem('recordID')
      checkOut(employeeID, recordID).then(resp => { console.log(resp) })
      this.isCheckedIn = false
    }
  }
}
</script>

<style>

</style>
