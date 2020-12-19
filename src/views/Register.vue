<template>
  <div class="bg-grey-lighter h-screen flex justify-center">
    <div class="container h-full flex justify-center items-center">
      <RegisterForm/>
    </div>
  </div>
</template>

<script>
import RegisterForm from '../components/Forms/RegisterForm/RegisterForm.vue'
export default {
  name: 'Register',
  components: {
    RegisterForm
  }
}
</script>

<style>

</style>
