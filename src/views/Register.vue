<template>
  <div class="bg-grey-lighter min-h-screen flex justify-center bg-blue-300">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <RegisterForm/>
    </div>
  </div>
</template>

<script>
import RegisterForm from '../components/Forms/RegisterForm.vue'
export default {
  name: 'Register',
  components: {
    RegisterForm
  }
}
</script>

<style>

</style>
