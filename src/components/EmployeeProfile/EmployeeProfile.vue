<template>

  <div>
    <main class="flex w-full min-h-screen">
      <aside class="w-80 bg-gray shadow-md hidden sm:block">
        <header class="w-full p-8 flex justify-between items-center bg-gray-900">
          <img class="rounded-full bg-white w-12 h-12" src="https://cdn3.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumb900.jpg"  alt="employeeImage"/>
          <div class="text-white">{{ employeeName }}</div>
        </header>
        <div class="flex flex-col justify-between h-full p-4 bg-gray-800">
          <div class="text-sm">
            <div class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300" @click="type = 'Time tracking'">
              <font-awesome-icon :icon="{ prefix: 'fas', iconName:'clock'}"/>
              Time tracking
            </div>
            <div class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300" @click="type = 'Calendar'">
              <font-awesome-icon :icon="{ prefix: 'fas', iconName:'calendar-alt'}"/>
              Calendar
            </div>
            <div class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300" @click="type = 'Settings'">
              <font-awesome-icon :icon="{ prefix: 'fas', iconName:'cog'}"/>
              Settings
            </div>
          </div>
          <div class="flex p-3 text-white bg-red-500 rounded cursor-pointer text-center text-sm">
            <LogoutButton/>
          </div>
        </div>
      </aside>
      <section class="w-full h-full pt-4 px-4 pb-4">
        <div class="w-full h-full h-64 text-md" v-if= "type === 'Time tracking'">
        <EmployeeHours class="p-2" :employeeID="employeeID" :key="rerender"/>
          <div class="w-full items-center justify-center">
            <div class="w-full px-2">
              <div class="bg-white shadow-xl rounded-lg md:flex">
                <div class="w-full">
                  <div class="p-4 md:p-5 bg-gray-100 flex justify-around items-center ">
                    <div class="flex items-center w-1/4">
                      <div v-if="!isCheckedIn">
                        <button v-on:click="checkIn" class="py-2 px-5 bg-indigo-700 hover:bg-indigo-300 font-bold text-white rounded-lg shadow-md">Check in</button>
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
                  <EmployeeSummary :records="records" :key="rerender"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=" w-full h-full h-64 px-40 text-md px-6 py-8 rounded shadow-xl" v-if= "type === 'Calendar'">
          <CustomCalendar/>
        </div>
        <div class="w-full h-full h-64 px-6 py-8 rounded shadow-xl text-md overflow-scroll" v-if= "type === 'Settings'">
          <EmployeeSettings/>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Timer from './Timer/Timer'
import dayjs from 'dayjs'
import { checkIn, checkOut, getEmployeeData, getSummary } from '@/domain/services/employeeServices'
import LogoutButton from '../Commons/LogoutButton/LogoutButton.vue'
import EmployeeSettings from '@/components/EmployeeProfile/EmployeeSettings/EmployeeSettings'
import EmployeeSummary from '@/components/EmployeeProfile/EmployeeSummary/EmployeeSummary'
import CustomCalendar from '@/components/CompanyProfile/CustomCalendar/CustomCalendar'
import Vue from 'vue'
import EmployeeHours from './EmployeeHours/EmployeeHours'

export default {
  components: {
    EmployeeSummary,
    Timer,
    LogoutButton,
    EmployeeSettings,
    CustomCalendar,
    EmployeeHours
  },
  data () {
    return {
      employeeID: localStorage.getItem('EmployeeID'),
      employeeName: '',
      checkInAt: '',
      currentTime: '',
      time: '',
      records: [],
      data: {
        description: ''
      },
      isCheckedIn: false,
      type: 'Time tracking',
      currentSeconds: '',
      currentMinutes: '',
      currentHours: '',
      intervalID: 0,
      rerender: false
    }
  },
  mounted () {
    this.getEmployeeRecords()
    getEmployeeData(localStorage.getItem('EmployeeID')).then(resp => {
      if (resp.status === 200) {
        localStorage.setItem('CompanyID', resp.data.data.CompanyID)
        this.employeeName = resp.data.data.FirstName
      }
    })
  },
  methods: {
    getEmployeeRecords () {
      const employeeID = localStorage.getItem('EmployeeID')
      this.records = []
      getSummary(employeeID)
        .then(resp => {
          if (resp.status === 200) {
            resp.data.data.forEach(record => {
              this.records.push(record)
            })
            this.rerender = !this.rerender
          }
        })
    },
    checkIn () {
      const employeeID = localStorage.getItem('EmployeeID')
      checkIn(employeeID, this.data).then(resp => { localStorage.setItem('RecordID', resp.recordID) })
      this.checkInAt = dayjs()
      this.startTimer(this.checkInAt)
      this.isCheckedIn = true
      Vue.$toast.open({
        message: 'Checked in!',
        type: 'info'
      })
    },
    startTimer (initialHour) {
      this.intervalID = setInterval(() => {
        this.currentSeconds = initialHour.diff(dayjs(), 'second') * (-1)
        this.currentHours = Math.floor(this.currentSeconds / (60 * 60))
        this.currentSeconds = this.currentSeconds - (this.currentHours * 60 * 60)
        this.currentMinutes = Math.floor(this.currentSeconds / 60)
        this.currentSeconds = this.currentSeconds - (this.currentMinutes * 60)
        this.currentTime = `${this.currentHours}:${this.currentMinutes}:${this.currentSeconds} `
      }, 1000)
    },
    checkOut () {
      const employeeID = localStorage.getItem('EmployeeID')
      const recordID = localStorage.getItem('RecordID')
      checkOut(employeeID, recordID).then(resp => {
        clearInterval(this.intervalID)
        this.getEmployeeRecords()
      })
      this.isCheckedIn = false
      Vue.$toast.open({
        message: 'Checked out!',
        type: 'info'
      })
    }
  }
}
</script>
