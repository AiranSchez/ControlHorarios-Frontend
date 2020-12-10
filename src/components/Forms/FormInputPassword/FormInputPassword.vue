<template>
  <div class="mb-4">
    <label :for="id" class="font-bold text-grey-darker block mb-2">{{ label }}</label>
    <input :id="id" type="password" @change="objChanged()" class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" :placeholder="placeholder" v-model="field">
    <div v-if="this.isValidPassword">Valid password</div>
    <div v-else>Invalid password</div>
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    label: String,
    placeholder: String,
    id: String
  },
  data () {
    return {
      field: '',
      isValidPassword: false
    }
  },
  methods: {
    objChanged () {
      const regExp = /^[a-zA-Z0-9]{8,16}$/
      if (regExp.test(this.field)) {
        this.isValidPassword = true
        console.log(this.isValidPassword)
        this.$emit('fieldValue', this.field)
      } else {
        this.isValidPassword = false
        console.log(this.isValidPassword)
        console.log('Incorrect password')
      }
    }
  }
}
</script>

<style>

</style>
