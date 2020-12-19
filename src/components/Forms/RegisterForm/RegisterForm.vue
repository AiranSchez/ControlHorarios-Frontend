<template>
    <div class="w-2/5">
        <div class=" flex flex-col p-10 bg-white mb-6 rounded-lg shadow-2xl">
            <img class="self-center h-14 w-14" src="../../../assets/flipday.png" alt="Logo">
            <h1 class="mb-8 text-3xl text-center">Sign Up ;)</h1>
            <FormInput label="Name" placeholder="Your name" id="forminput-name" v-on:fieldValue="nameReceived"/>
            <FormInputEmail label="Email" placeholder="Email" id="forminput-email" v-on:fieldValue="emailReceived" />
            <FormInputPassword label="Password" placeholder="Your password" id="forminput-password" v-on:fieldValue="passwordReceived"/>
            <FormInputPassword label="Confirm password" placeholder="Your password" id="forminput-repeatpassword" v-on:fieldValue="repeatedPasswordReceived"/>
            <FormInput label="Company name" placeholder="Your company name" id="forminput-companyname" v-on:fieldValue="companyNameReceived"/>
            <FormInput label="Location" placeholder="Your company location" id="forminput-location" v-on:fieldValue="locationReceived"/>
            <div class="text-center text-red-500 font-bold">{{ Error }}</div>
            <FormButton @isClicked="register" value="Sign up"/>
            <div class="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the
                <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                    Terms of Service
                </a> and
                <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                    Privacy Policy
                </a>
            </div>
        </div>
        <div class="flex justify-center flex-row items-center">
            <div class="text-grey-dark text-sm">Already have an account?</div>
            <div @click="redirectToLogin()" class="hover:no-underline underline pl-0 text-blue-800 font-bold"> Sing in</div>
        </div>
    </div>
</template>

<script>
import FormInput from '../FormInput/FormInput'
import FormButton from '../FormButton/FormButton'
import { registerCompany } from '@/domain/services/companiesServices'
import FormInputPassword from '@/components/Forms/FormInputPassword/FormInputPassword'
import FormInputEmail from '@/components/Forms/FormInputEmail/FormInputEmail'
import Vue from 'vue'

export default {
  name: 'RegisterForm',
  components: {
    FormInput,
    FormButton,
    FormInputPassword,
    FormInputEmail
  },
  methods: {
    redirectToLogin () {
      this.$router.push('/login')
    },
    register () {
      localStorage.clear()
      if (this.checkIfAllFieldsAreValid()) {
        registerCompany(this.data).then(resp => {
          if (resp.status === 201) {
            Vue.$toast.open('Successfully registered company!')
            this.Error = ''
            localStorage.setItem('CompanyID', resp.data.CompanyID)
            this.$router.push(`/company/profile/${resp.data.CompanyID}`)
          }
        }).catch(() => {
          Vue.$toast.open({
            message: 'Failed to register a company',
            type: 'error'
          })
        })
      } else if (this.Error === '') {
        this.Error += 'Missing fields to fill'
      }
    },
    nameReceived (field) {
      this.data.username = field
    },
    emailReceived (field) {
      this.data.email = field
    },
    passwordReceived (field) {
      this.data.password = field
    },
    companyNameReceived (field) {
      this.data.companyName = field
    },
    locationReceived (field) {
      this.data.location = field
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
      return !!(this.readyToSend && this.data.username && this.data.email && this.data.password && this.data.location && this.data.companyName !== '')
    }
  },
  data () {
    return {
      data: {
        username: '',
        email: '',
        password: '',
        location: '',
        companyName: '',
        rol: 'Company'
      },
      readyToSend: false,
      Error: ''
    }
  }
}
</script>

<style>

</style>
