<template>
    <div>
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Add Employee</h1>
            <FormInput label="Name" placeholder="Employee name" v-on:fieldValue="nameReceived"/>
            <FormInput label="Surname" placeholder=" Employee surname" v-on:fieldValue="lastnameReceived"/>
            <FormInput label="Email" placeholder="Employee email" v-on:fieldValue="emailReceived"/>
            <FormInput label="Password" placeholder="Employee password" v-on:fieldValue="passwordReceived"/>
            <FormInput label="Confirm password" placeholder="Repeat password" v-on:fieldValue="repeatedPasswordReceived"/>
            <FormButton @click.native="createEmployee" value="Add employee"/>
        </div>
    </div>
</template>

<script>
import FormInput from '../../../Forms/FormInput/FormInput'
import FormButton from '../../../Forms/FormButton/FormButton'
import { createEmployee } from '@/domain/services/companiesServices'
export default {
  name: 'CreateEmployee',
  components: {
    FormInput,
    FormButton
  },
  methods: {
    createEmployee () {
      createEmployee(this.data, localStorage.getItem('CompanyID')).then(resp => {
        if (resp.status === 201) {
          console.log('empleado creado')
        }
      })
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
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        rol: 'Employee'
      }
    }
  }
}
</script>

<style>
</style>
