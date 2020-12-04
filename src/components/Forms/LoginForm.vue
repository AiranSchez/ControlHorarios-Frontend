<template>
  <div class="w-2/5">
    <div class="border-teal p-10 border-t-12 bg-white mb-6 rounded-lg shadow-xl">
        <FormInput label="Usuario o email" placeholder="Nombre de usuario"/>
        <FormInput label="Contraseña" placeholder="Contraseña"/>
        <div class="flex justify-center">
          <div class="flex justify-center">
            <div class="inline-flex rounded-md bg-white shadow-xl hover:bg-gray-600 ">
              <a href="#" class="text-gray-700 font-bold py-2 px-6 hover:text-white">Login</a>
            </div>
          </div>
        </div>
    </div>
    <div class="flex justify-center flex-row items-center">
      <div class="text-grey-dark text-sm">No tienes cuenta?</div>
      <div @click="redirect()" class="hover:no-underline underline pl-0 text-blue font-bold">Regístrate</div>
    </div>
  </div>
</template>

<script>
import FormInput from '../Forms/FormInput'
export default {
  name: 'LoginForm',
  components: {
    FormInput
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
