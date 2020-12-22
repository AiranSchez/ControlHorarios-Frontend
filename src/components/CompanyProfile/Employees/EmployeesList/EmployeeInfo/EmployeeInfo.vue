<template>
  <div class="ml-4">
    <tr>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 w-40">
        <EmployeeImg picture="default-perfil.png"/>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 w-60">
        <div class="text-sm leading-5 font-medium text-black-900">{{ firstName }} {{ lastName }}</div>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 w-80">
          <div class="text-sm leading-5 text-gray-500">{{ email }}</div>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 w-60">
          <IsEmployeeActive :isActive="isUserActive"/>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
          <IconButton v-if="isUserActive" name="user-minus" color="red" @click.native="disableEmployee(userID)"/>
          <IconButton v-else name="user-plus" color="green" @click.native="enableEmployee(userID)"/>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 w-60">
        <IconButton name="info-circle" color="blue" @click.native="showInfo(true)"/>
        <VueTailwindModal :showing= "info" @close="showInfo(false)" :showClose="true" :backgroundClose="true" class="bg-grey-200">
          <EmployeeSettingsData :EmployeeID="employeeID" />
        </VueTailwindModal>
      </td>
  </tr>
  </div>
</template>

<script>
import EmployeeImg from '../EmployeeImg/EmployeeImg'
import IconButton from '../../../../Commons/IconButton/IconButton'
import IsEmployeeActive from './IsEmployeeActive'
import VueTailwindModal from 'vue-tailwind-modal'
import { updateEmployeeStatus } from '@/domain/services/companiesServices'
import EmployeeSettingsData from '@/components/EmployeeProfile/EmployeeSettings/EmployeeSettingsData/EmployeeSettingsData'

export default {
  name: 'EmployeeInfo',
  components: {
    EmployeeSettingsData,
    EmployeeImg,
    IconButton,
    IsEmployeeActive,
    VueTailwindModal
  },
  props: {
    userID: Number,
    firstName: String,
    lastName: String,
    email: String,
    isEnabled: Boolean,
    employeeID: Number
  },
  data: function () {
    return {
      isUserActive: this.isEnabled,
      info: false
    }
  },
  methods: {
    disableEmployee (UserID) {
      updateEmployeeStatus(localStorage.getItem('CompanyID'), UserID, false).then(resp => {
        if (resp.status === 200) {
          this.isUserActive = false
        }
      })
    },
    enableEmployee (UserID) {
      updateEmployeeStatus(localStorage.getItem('CompanyID'), UserID, true).then(resp => {
        if (resp.status === 200) {
          this.isUserActive = true
        }
      })
    },
    showInfo (value) {
      this.info = value
    }
  }
}
</script>
