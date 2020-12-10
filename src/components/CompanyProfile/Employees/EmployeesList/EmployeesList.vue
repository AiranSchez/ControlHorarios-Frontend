<template>
<div class="flex justify-center">
    <table class="w-full">
        <tbody v-for="employee in employeesList" v-bind:key="employee" class="bg-white">
            <tr>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                            <img class="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                alt="">
                        </div>

                        <div class="ml-4">
                            <div class="text-sm leading-5 font-medium text-gray-900">{{ employee.FirstName }}</div>
                            <div class="text-sm leading-5 font-medium text-gray-900">{{ employee.LastName }}</div>
                            <div class="text-sm leading-5 text-gray-500"></div>
                        </div>
                    </div>
                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div class="text-sm leading-5 text-gray-900">Section</div>
                    <div class="text-sm leading-5 text-gray-500">SectionValue</div>
                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                </td>

                <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                    Owner</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import { getEmployees } from '@/domain/services/companiesServices'
export default {
  name: 'EmployeesList',
  data () {
    return {
      employeesList: []
    }
  },
  beforeCreate: function () {
    getEmployees(1).then(resp => {
      if (resp.status === 200) {
        this.employeesList = resp.data.data
        console.log(this.employeesList)
      }
    })
  }
}
</script>

<style>
</style>
