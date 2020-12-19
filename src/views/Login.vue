<template>
      <div class="bg-white-300">
        <div class="h-screen flex justify-center bg-gradient-to-r from-green-400 to-blue-500">
          <div class="container h-full flex justify-center items-center">
              <LoginForm/>
        </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/Forms/LoginForm/LoginForm'
export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>
