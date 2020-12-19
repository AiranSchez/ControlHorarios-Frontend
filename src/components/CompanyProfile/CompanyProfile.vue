<template>
  <div class="w-full h-full">
    <main class="flex w-full h-full">
    <aside class="w-80 bg-gray shadow-md hidden sm:block">
      <header class="w-full p-8 flex justify-evenly items-center bg-gray-900">
        <img class="rounded-full bg-white w-12 h-12" src="https://cdn.shopify.com/shopifycloud/hatchful-web/assets/67cbe9b74baf7f893488c5fc426d31eb.png"  alt="employeeImage"/>
        <div class="text-white">{{ companyName }}</div>
    </header>
      <div class="flex flex-col justify-between h-full p-4 bg-gray-800">
        <div class="text-sm">
          <div class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300" @click="type='Calendar'">
            <font-awesome-icon :icon="{ prefix: 'fas', iconName:'calendar-alt'}"/>
            Calendar
          </div>
          <div class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300" @click="type='Employees'">
            <font-awesome-icon :icon="{ prefix: 'fas', iconName:'users'}"/>
            Employees
          </div>
          <div class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300" @click="type='CreateEmployee'">
            <font-awesome-icon :icon="{ prefix: 'fas', iconName:'user-plus'}"/>
            Create Employee
          </div>
        </div>
          <div class="p-3 text-white bg-red-500 rounded cursor-pointer text-center text-sm">
            <LogoutButton/>
          </div>
      </div>
      </aside>

    <section class="w-full p-4">
      <div class="p-4 text-md flex flex-col px-6 py-8 rounded shadow-xl h-screen" v-if= "type === 'Calendar'">
        <CustomCalendar class="pb-4" :key="holidayKey"/>
        <IconButton class="self-center w-1/6" name="plus-circle" color="blue" @click.native="showInfo(true)"/>
        <VueTailwindModal :showing="info" @close="showInfo(false)" :showClose="true" :backgroundClose="true" class="bg-grey-200">
          <Calendar @addedHoliday="keyChanged"/>
        </VueTailwindModal>
      </div>
      <div class="w-full h-full p-4 text-md px-6 py-8 rounded shadow-xl" v-if= "type === 'Employees'">
        <EmployeesList/>
      </div>
      <div class="w-full h-full h-64 p-4 text-md" v-if= "type === 'CreateEmployee'">
        <CreateEmployee/>
      </div>
    </section>
    </main>
  </div>
</template>

<script>
import EmployeesList from './Employees/EmployeesList/EmployeesList.vue'
import CreateEmployee from './Employees/CreateEmployee/CreateEmployee.vue'
import LogoutButton from '../Commons/LogoutButton/LogoutButton.vue'
import CustomCalendar from './CustomCalendar/CustomCalendar.vue'
import Calendar from './Calendar/Calendar'
import { getCompanyData } from '@/domain/services/companiesServices'
import VueTailwindModal from 'vue-tailwind-modal'
import IconButton from '../Commons/IconButton/IconButton'

export default {
  name: 'CompanyProfile',
  components: {
    EmployeesList,
    CreateEmployee,
    LogoutButton,
    Calendar,
    CustomCalendar,
    VueTailwindModal,
    IconButton
  },
  data () {
    return {
      type: 'Employees',
      companyName: '',
      holidayKey: false,
      info: false
    }
  },
  mounted () {
    getCompanyData(localStorage.getItem('CompanyID')).then(resp => {
      if (resp.status === 200) {
        this.companyName = resp.data.data.CompanyName
      }
    })
  },
  methods: {
    keyChanged () {
      this.holidayKey = !this.holidayKey
      this.info = false
    },
    showInfo (value) {
      this.info = value
    }
  }

}
</script>
