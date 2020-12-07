<template>
    <div>
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Sign Up ;)</h1>
            <FormInput label="Nombre completo" placeholder="Nombre"/>
            <FormInput label="Email" placeholder="Email"/>
            <FormInput label="Contraseña" placeholder="Contraseña"/>
            <FormInput label=" Confirmar contraseña" placeholder="Contraseña"/>
            <FormButton value="Resgístrate"/>
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
            <div @click="redirect()" class="hover:no-underline underline pl-0 text-blue font-bold">Log in</div>
        </div>
    </div>
</template>

<script>
import FormInput from '../Forms/FormInput'
import FormButton from '../Forms/FormButton'
export default {
  name: 'RegisterForm',
  components: {
    FormInput,
    FormButton
  },
  methods: {
    redirect () {
      return this.$router.push('/login')
    }
  }

}
</script>

<style>

</style>
