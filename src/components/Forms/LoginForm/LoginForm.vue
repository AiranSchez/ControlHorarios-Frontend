<template>
  <div class="w-2/5">
    <div class="border-teal p-10 border-t-12 bg-white mb-6 rounded-lg shadow-xl">
        <h1 class="mb-8 text-3xl text-center">Sign In ;)</h1>
        <FormInputEmail label="Usuario o email" placeholder="Nombre de usuario" id="forminput-email" v-on:fieldValue="emailReceived" />
        <FormInputPassword label="Contraseña" placeholder="Contraseña" id="forminput-password" v-on:fieldValue="passwordReceived"/>
        <FormButton value="Log In" @click.native="login"/>
    </div>
    <div class="flex justify-center flex-row items-center">
      <div class="text-grey-dark text-sm">No tienes cuenta?</div>
      <div @click="redirect()" class="hover:no-underline underline pl-0 text-blue font-bold">Regístrate</div>
    </div>
  </div>
</template>

<script>
import FormInputEmail from '../FormInputEmail/FormInputEmail'
import FormInputPassword from '../FormInputPassword/FormInputPassword'
import FormButton from '../FormButton/FormButton'
import { loginUser } from '@/domain/services/userServices'
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
    passwordReceived (field) {
      this.data.password = field
    },
    emailReceived (field) {
      this.data.email = field
    },
    login () {
      loginUser(this.data).then(resp => {
        if (resp.status === 200) {
          if (resp.data.Rol === 'company') {
            this.$router.push(`/company/profile/${resp.data.SecondaryID}`)
          } else {
            localStorage.setItem('employeeID', resp.data.SecondaryID)
            this.$router.push(`/employee/profile/${resp.data.SecondaryID}`)
          }
        }
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

<style>

</style>
