<template>
  <div>
    <header class="w-full bg-gray-900 p-4 flex justify-center">
      <h1 class="justify-self-center text-4xl text-white">{{ companyName }}</h1>
    </header>
    <main class="flex w-full h-full">
    <aside class="w-80 bg-gray shadow-md hidden sm:block">
      <div class="flex flex-col justify-between h-full p-4 bg-gray-800">
        <div>
          <div class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300" @click="type='Calendar'">
            <font-awesome-icon :icon="{ prefix: 'fas', iconName:'calendar-alt'}"/>
            Calendar
          </div>
          <div class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300" @click="type='Employees'">
            <font-awesome-icon :icon="{ prefix: 'fas', iconName:'users'}"/>
            Employees
          </div>
          </div>
          <div class="p-3 text-white bg-red-500 rounded cursor-pointer text-center justify-self-end text-sm">
            <LogoutButton/>
          </div>
      </div>
      </aside>
      <section class="w-full h-full p-4">
        <div class="w-full h-full border-4 p-4 text-md" v-if= "type === 'Calendar'">
          <CustomCalendar/>
          <Calendar/>
        </div>
        <div class="w-full h-full h-64 border-4 p-4 text-md" v-if= "type === 'Employees'">
          <EmployeesList/>
        </div>
        <div class="w-full h-full h-64 border-4 p-4 text-md" v-if= "type === 'CreateEmployee'">
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

export default {
  name: 'CompanyProfile',
  components: {
    EmployeesList,
    CreateEmployee,
    LogoutButton,
    Calendar,
    CustomCalendar
  },
  data () {
    return {
      type: 'Employees',
      companyName: ''
    }
  },
  mounted () {
    getCompanyData(localStorage.getItem('CompanyID')).then(resp => {
      if (resp.status === 200) {
        this.companyName = resp.data.data.CompanyName
      }
    })
  }

}
</script>
