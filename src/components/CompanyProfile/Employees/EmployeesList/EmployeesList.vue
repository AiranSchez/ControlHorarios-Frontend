<template>
<div class="flex">
  <table class="text-left bg-white w-full">
        <tbody v-for="employee in employeesList" v-bind:key="employee">
            <EmployeeInfo :userID="employee.UserID" :employeeID="employee.EmployeeID" :firstName="employee.FirstName" :lastName="employee.LastName" :email="employee.User.Email" :isEnabled="employee.User.Status"/>
        </tbody>
    </table>
</div>
</template>

<script>
import { getEmployees } from '@/domain/services/companiesServices'
import EmployeeInfo from '@/components/CompanyProfile/Employees/EmployeesList/EmployeeInfo/EmployeeInfo'

export default {
  name: 'EmployeesList',
  components: {
    EmployeeInfo
  },
  data () {
    return {
      employeesList: []
    }
  },
  beforeCreate: function () {
    const companyID = localStorage.getItem('CompanyID')
    getEmployees(companyID).then(resp => {
      if (resp.status === 200) {
        this.employeesList = resp.data.data
      }
    })
  }
}
</script>
