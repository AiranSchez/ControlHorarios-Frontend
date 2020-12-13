<template>
  <div class="md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
    <div class="px-4 pt-4">
      <div class="flex flex-col space-y-8">
        <div>
          <h3 class="text-2xl font-semibold">Basic Information</h3>
          <hr>
        </div>

        <div class="form-item">
          <label class="text-xl ">Username</label>
          <div class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200">
            {{ info.User.Username }}
          </div>
          <label class="text-xl ">Name</label>
          <div class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200">
            {{ info.FirstName }}
          </div>
          <label class="text-xl ">Last Name</label>
          <div class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200">
            {{ info.LastName }}
          </div>
          <label class="text-xl ">Joined Date</label>
          <div class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200">
            {{ info.User.JoinedDate }}
          </div>
          <label class="text-xl ">Email</label>
          <div class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200">
            {{ info.User.Email }}
          </div>
          <label class="text-xl ">Company</label>
          <div class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200">
            {{ info.Company.CompanyName }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getEmployeeData } from '@/domain/services/employeeServices'

export default {
  name: 'EmployeeSettingsData',
  data () {
    return {
      info: {}
    }
  },
  mounted () {
    console.log(localStorage.getItem('EmployeeID'))
    getEmployeeData(localStorage.getItem('EmployeeID')).then(resp => {
      if (resp.status === 200) {
        this.info = resp.data.data
        console.log(resp)
      }
    })
  }
}
</script>

<style scoped>

</style>
