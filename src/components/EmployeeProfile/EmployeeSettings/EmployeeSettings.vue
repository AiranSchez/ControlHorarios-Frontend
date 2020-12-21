<template>
  <div class="w-full relative mt-4 shadow-2xl rounded my-24">
    <div class="top h-64 w-full bg-blue-600 relative bg-gradient-to-r rounded-t from-green-400 to-blue-500" >
      <div class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-black">
        <img :src="require(`@/assets/default-perfil.png`)" class="h-24 w-24 object-cover rounded-full bg-white">
        <h4 class="text-sm font-semibold">{{ username }}</h4>
        <h4 class="text-sm font-semibold">Joined Since {{ joinedDate }}</h4>
      </div>
    </div>
    <div class="flex bg-white px-4">
      <div class="px-3 py-6 justify-center rounded flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">
        <a href="#" class="text-sm text-white p-2 text-center rounded font-semibold bg-green-700 hover:bg-green-800" @click="type = 'Data'">Basic Information</a>
        <a href="#" class="text-sm text-white p-2  text-center rounded font-semibold bg-green-700 hover:bg-green-800" @click="type = 'ChangePassword'">Change Password</a>
      </div>
      <div class=" w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start" v-if= "type === 'Data'">
        <EmployeeSettingsData :EmployeeID="EmployeeID" @EmployeeName="EmployeeNameReceived"/>
      </div>
      <div class="w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start" v-if= "type === 'ChangePassword'">
      <EmployeeSettingsChangePassword/>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeSettingsData from '@/components/EmployeeProfile/EmployeeSettings/EmployeeSettingsData/EmployeeSettingsData'
import EmployeeSettingsChangePassword from '@/components/EmployeeProfile/EmployeeSettings/EmployeeSettingsChangePassword/EmployeeSettingsChangePassword'
export default {
  name: 'EmployeeSettings',
  components: {
    EmployeeSettingsData,
    EmployeeSettingsChangePassword
  },
  data () {
    return {
      type: 'Data',
      username: '',
      joinedDate: '',
      EmployeeID: localStorage.getItem('EmployeeID')
    }
  },
  methods: {
    EmployeeNameReceived (Username, JoinedDate) {
      this.username = Username
      this.joinedDate = JoinedDate
    }
  }
}
</script>

<style scoped>

</style>
