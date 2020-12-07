<template>
  <div class="w-2/5">
    <div class="border-teal p-10 border-t-12 bg-white mb-6 rounded-lg shadow-xl">
        <h1 class="mb-8 text-3xl text-center">Sign In ;)</h1>
        <FormInput label="Usuario o email" placeholder="Nombre de usuario"/>
        <FormInput label="Contraseña" placeholder="Contraseña"/>
        <FormButton value="Log In"/>
    </div>
    <div class="flex justify-center flex-row items-center">
      <div class="text-grey-dark text-sm">No tienes cuenta?</div>
      <div @click="redirect()" class="hover:no-underline underline pl-0 text-blue font-bold">Regístrate</div>
    </div>
  </div>
</template>

<script>
import FormInput from '../Forms/FormInput'
import FormButton from '../Forms/FormButton'
export default {
  name: 'LoginForm',
  components: {
    FormInput,
    FormButton
  },
  methods: {
    redirect () {
      return this.$router.push('/register')
    }
  }
}
</script>

<style>

</style>
