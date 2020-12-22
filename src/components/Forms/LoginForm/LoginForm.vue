<template>
  <div class="w-2/5">
    <div class=" flex flex-col p-10 bg-white mb-6 rounded-lg shadow-2xl">
        <img class="self-center h-20 w-20" src="../../../assets/flipday.png" @click="redirectHome()" alt="Logo">
        <h1 class="mb-8 text-3xl text-center">Sign In ;)</h1>
        <FormInputEmail label="Email" placeholder="example@example.ej" id="forminput-email" v-on:fieldValue="emailReceived" />
        <FormInputPassword label="Password" placeholder="Introduce your Password" id="forminput-password" v-on:fieldValue="passwordReceived"/>
        <FormButton value="Log In" @isClicked="login"/>
    </div>
    <div class="flex justify-center flex-row items-center">
      <div class="text-grey-dark text-sm">Join flipday today!  </div>
      <div @click="redirect()" class="hover:no-underline underline cursor-pointer pl-0 text-blue-800 font-bold"> Sign up</div>
    </div>
  </div>
</template>

<script>
import FormInputEmail from '../FormInputEmail/FormInputEmail'
import FormInputPassword from '../FormInputPassword/FormInputPassword'
import FormButton from '../FormButton/FormButton'
import { loginUser } from '@/domain/services/userServices'
import Vue from 'vue'

export default {
  name: 'LoginForm',
  components: {
    FormInputEmail,
    FormInputPassword,
    FormButton
  },
  methods: {
    redirect () {
      return this.$router.push('/register')
    },
    redirectHome () {
      return this.$router.push('/')
    },
    passwordReceived (field) {
      this.data.password = field
    },
    emailReceived (field) {
      this.data.email = field
    },
    login () {
      localStorage.clear()
      loginUser(this.data).then(resp => {
        if (resp.status === 200) {
          localStorage.setItem('UserID', resp.data.UserID)
          Vue.$toast.open('Signed in!')
          if (resp.data.Rol === 'company') {
            this.$router.push(`/company/profile/${resp.data.SecondaryID}`)
            localStorage.setItem('CompanyID', resp.data.SecondaryID)
            localStorage.setItem('UserID', resp.data.UserID)
          } else {
            localStorage.setItem('EmployeeID', resp.data.SecondaryID)
            localStorage.setItem('UserID', resp.data.UserID)
            this.$router.push(`/employee/profile/${resp.data.SecondaryID}`)
          }
        }
      }).catch(() => {
        Vue.$toast.open({
          message: 'Something went wrong!',
          type: 'error'
        })
      })
    }
  },
  data () {
    return {
      data: {
        email: '',
        password: ''
      }
    }
  }
}
</script>
