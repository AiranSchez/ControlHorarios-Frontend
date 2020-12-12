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
                  <EmployeeDeleteButton @click.native="deleteEmployee(employee.UserID)"/>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import { getEmployees, deleteEmployee } from '@/domain/services/companiesServices'
import EmployeeInfo from '@/components/CompanyProfile/Employees/EmployeesList/EmployeeInfo/EmployeeInfo'
import EmployeeImg from '@/components/CompanyProfile/Employees/EmployeesList/EmployeeImg/EmployeeImg'
import EmployeeDeleteButton from '@/components/CompanyProfile/Employees/EmployeesList/EmployeeDeleteButton/EmployeeDeleteButton'
import Active from './Active'
export default {
  name: 'EmployeesList',
  components: { EmployeeDeleteButton, EmployeeImg, EmployeeInfo, Active },
  data () {
    return {
      employeesList: []
    }
  },
  beforeCreate: function () {
    getEmployees(localStorage.getItem('CompanyID')).then(resp => {
      if (resp.status === 200) {
        this.employeesList = resp.data.data
        console.log(this.employeesList)
      }
    })
  },
  methods: {
    deleteEmployee (UserID) {
      console.log(UserID)
      deleteEmployee(localStorage.getItem('CompanyID'), { UserID }).then(resp => {
        if (resp.status === 200) {
          console.log(resp)
        }
      })
    }
  }
}
</script>
