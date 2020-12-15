<template>
    <div>
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Add Employee</h1>
            <FormInput label="Name" placeholder="Employee name" v-on:fieldValue="nameReceived"/>
            <FormInput label="Surname" placeholder=" Employee surname" v-on:fieldValue="lastnameReceived"/>
            <FormInputEmail label="Email" placeholder="Email" id="forminput-email" v-on:fieldValue="emailReceived" />
            <FormInputPassword label="Password" placeholder="Your password" id="forminput-password" v-on:fieldValue="passwordReceived"/>
            <FormInputPassword label="Confirm password" placeholder="Your password" id="forminput-repeatpassword" v-on:fieldValue="repeatedPasswordReceived"/>
            <div class="text-center text-red-500 font-bold">{{ Error }}</div>
            <FormButton @isClicked="createEmployee" value="Add employee"/>
        </div>
    </div>
</template>

<script>
import FormInput from '../../../Forms/FormInput/FormInput'
import FormButton from '../../../Forms/FormButton/FormButton'
import FormInputEmail from '@/components/Forms/FormInputEmail/FormInputEmail'
import FormInputPassword from '@/components/Forms/FormInputPassword/FormInputPassword'
import { createEmployee } from '@/domain/services/companiesServices'
import Vue from 'vue'
export default {
  name: 'CreateEmployee',
  components: {
    FormInput,
    FormButton,
    FormInputEmail,
    FormInputPassword
  },
  methods: {
    createEmployee () {
      if (this.checkIfAllFieldsAreValid()) {
        createEmployee(this.data, localStorage.getItem('CompanyID')).then(resp => {
          if (resp.status === 201) {
            Vue.$toast.open('Successfully created employee!')
          }
        }).catch(() => {
          Vue.$toast.open({
            message: 'Something went wrong!',
            type: 'error'
          })
        })
      } else if (this.Error === '') {
        this.Error += 'Missing fields to fill'
      }
    },
    nameReceived (field) {
      this.data.username = field
      this.data.firstname = field
    },
    lastnameReceived (field) {
      this.data.lastname = field
    },
    emailReceived (field) {
      this.data.email = field
    },
    passwordReceived (field) {
      this.data.password = field
    },
    repeatedPasswordReceived (field) {
      if (this.data.password === field) {
        this.readyToSend = true
        this.Error = ''
      } else {
        this.readyToSend = false
        this.Error = 'Not equal passwords'
      }
    },
    checkIfAllFieldsAreValid () {
      return !!(this.readyToSend && this.data.firstname && this.data.lastname && this.data.username && this.data.email && this.data.password !== '')
    }
  },
  data () {
    return {
      data: {
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        rol: 'Employee'
      },
      readyToSend: false,
      Error: ''
    }
  }
}
</script>

<style>
</style>
