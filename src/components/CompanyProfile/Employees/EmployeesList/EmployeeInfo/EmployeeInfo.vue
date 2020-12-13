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
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 w-40">
          <div class="text-sm leading-5 text-gray-500">SectionValue</div>
      </td>

      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 w-40">
          <IsEmployeeActive :isActive="isUserActive"/>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
          <IconButton v-if="isUserActive" name="user-minus" color="red" @click.native="disableEmployee(userID)"/>
          <IconButton v-else name="user-plus" color="green" @click.native="enableEmployee(userID)"/>
      </td>
  </tr>
  </div>
</template>

<script>
import EmployeeImg from '../EmployeeImg/EmployeeImg'
import IconButton from '../../../../Commons/IconButton/IconButton'
import IsEmployeeActive from './IsEmployeeActive'
import { updateEmployeeStatus } from '@/domain/services/companiesServices'
export default {
  name: 'EmployeeInfo',
  components: {
    EmployeeImg,
    IconButton,
    IsEmployeeActive
  },
  props: {
    userID: Number,
    firstName: String,
    lastName: String,
    email: String,
    isEnabled: Boolean
  },
  data: function () {
    return {
      isUserActive: this.isEnabled
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
    }
  }
}
</script>
