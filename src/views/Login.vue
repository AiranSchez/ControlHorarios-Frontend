<template>
      <div class="bg-white-300">
        <div class="bg-grey-lighter h-screen flex justify-center">
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
