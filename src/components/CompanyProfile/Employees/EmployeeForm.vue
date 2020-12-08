<template>
  <div>
      <h1 class="mb-8 text-3xl text-center">Sign Up ;)</h1>
            <FormInput label="Name" placeholder="Your name" v-on:fieldValue="nameReceived"/>
            <FormInput label="Email" placeholder="Email" v-on:fieldValue="emailReceived"/>
            <FormInput label="Password" placeholder="Your password" v-on:fieldValue="passwordReceived"/>
            <FormInput label="Confirm password" placeholder="Your password" v-on:fieldValue="repeatedPasswordReceived"/>
            <FormInput label="Company name" placeholder="Your company name" v-on:fieldValue="companyNameReceived"/>
            <FormInput label="Location" placeholder="Your company location" v-on:fieldValue="locationReceived"/>
            <FormButton @click.native="register" value="Sign up"/>
  </div>
</template>

<script>
import FormInput from '../Forms/FormInput'
export default {

}
</script>

<style>

</style>