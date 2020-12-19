<template>
  <div class="h-screen flex justify-center bg-gradient-to-r from-green-400 to-blue-500">
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
