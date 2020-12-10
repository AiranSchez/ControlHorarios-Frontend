<template>
    <div>
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Sign Up ;)</h1>
            <FormInput label="Name" placeholder="Your name" id="forminput-name" v-on:fieldValue="nameReceived"/>
            <FormInputEmail label="Email" placeholder="Email" id="forminput-email" v-on:fieldValue="emailReceived" />
            <FormInputPassword label="Password" placeholder="Your password" id="forminput-password" v-on:fieldValue="passwordReceived"/>
            <FormInputPassword label="Confirm password" placeholder="Your password" id="forminput-repeatpassword" v-on:fieldValue="repeatedPasswordReceived"/>
            <FormInput label="Company name" placeholder="Your company name" id="forminput-companyname" v-on:fieldValue="companyNameReceived"/>
            <FormInput label="Location" placeholder="Your company location" id="forminput-location" v-on:fieldValue="locationReceived"/>
            <FormButton @click.native="register" value="Sign up"/>
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
            <div @click="redirectToLogin()" class="hover:no-underline underline pl-0 text-blue font-bold">Log in</div>
        </div>
    </div>
</template>

<script>
import FormInput from '../FormInput/FormInput'
import FormButton from '../FormButton/FormButton'
import { registerCompany } from '@/domain/services/companiesServices'
import FormInputPassword from '@/components/Forms/FormInputPassword/FormInputPassword'
import FormInputEmail from '@/components/Forms/FormInputEmail/FormInputEmail'

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
      registerCompany(this.data).then(resp => {
        if (resp.status === 201) {
          this.$router.push(`/company/profile/${resp.data.CompanyID}`)
          localStorage.setItem('CompanyID', resp.data.CompanyID)
        }
      })
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
        console.log('todo ok')
      } else {
        console.log('error')
      }
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
      }
    }
  }
}
</script>

<style>

</style>
