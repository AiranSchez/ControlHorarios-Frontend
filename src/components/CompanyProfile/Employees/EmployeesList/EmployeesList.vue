<template>
<div class="flex justify-center">
    <table class="w-full  text-left bg-white">
        <tbody v-for="employee in employeesList" v-bind:key="employee" class="bg-white">
            <tr>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <EmployeeImg picture="default-perfil.png"/>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <EmployeeInfo :firstName="employee.FirstName" :lastName="employee.LastName"  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div class="text-sm leading-5 text-gray-500">{{employee.User.Email}}</div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div class="text-sm leading-5 text-gray-500">SectionValue</div>
                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <Active :isActive="employee.User.Status"/>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                    <component :is="ff">
                      <IconButton name="user-minus" color="red" @click.native="disableEmployee(employee.UserID)"/>
                    </component>
                    <component :is="ff">
                      <IconButton name="user-plus" color="green" @click.native="enableEmployee(employee.UserID)"/>
                    </component>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import { getEmployees, updateEmployeeStatus } from '@/domain/services/companiesServices'
import EmployeeInfo from '@/components/CompanyProfile/Employees/EmployeesList/EmployeeInfo/EmployeeInfo'
import EmployeeImg from '@/components/CompanyProfile/Employees/EmployeesList/EmployeeImg/EmployeeImg'
import IconButton from '@/components/Commons/IconButton/IconButton'
import Active from './Active'
export default {
  name: 'EmployeesList',
  components: {
    EmployeeImg,
    EmployeeInfo,
    Active,
    IconButton
  },
  data () {
    return {
      employeesList: []
    }
  },
  beforeCreate: function () {
    const companyID = localStorage.getItem('CompanyID')
    console.log(companyID)
    getEmployees(companyID).then(resp => {
      if (resp.status === 200) {
        this.employeesList = resp.data.data
      }
    })
  },
  methods: {
    disableEmployee (UserID) {
      updateEmployeeStatus(localStorage.getItem('CompanyID'), UserID, false).then(resp => {
        if (resp.status === 200) {
          this.$forceUpdate()
        }
      })
    },
    enableEmployee (UserID) {
      updateEmployeeStatus(localStorage.getItem('CompanyID'), UserID, true).then(resp => {
        if (resp.status === 200) {
          this.$forceUpdate()
        }
      })
    }
  }
}
</script>
