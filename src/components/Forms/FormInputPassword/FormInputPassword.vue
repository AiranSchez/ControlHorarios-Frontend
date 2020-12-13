<template>
  <div class="mb-4">
    <label :for="id" class="font-bold text-grey-darker block mb-2">{{ label }}</label>
    <input :id="id" type="password" @change="checkPassword" :class="[ field !== '' ? [isValidPassword ? validStyles : invalidStyles] : defaultStyles ]" class="block appearance-none w-full bg-white hover:border-grey px-2 py-2 rounded shadow" :placeholder="placeholder" v-model="field">
    <div v-if="!checkPattern(this.field)">Invalid password</div>
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
      isValidPassword: '',
      validStyles: 'border-2 border-green-300',
      invalidStyles: 'border-2 border-red-300',
      defaultStyles: 'border-2 border-grey-300'
    }
  },
  methods: {
    checkPassword () {
      if (this.checkPattern(this.field)) {
        this.$emit('fieldValue', this.field)
        this.isValidPassword = true
      } else {
        this.isValidPassword = false
      }
    },
    checkPattern (pass) {
      const regExp = /^[a-zA-Z0-9]{8,16}$/
      return regExp.test(pass)
    }
  }
}
</script>

<style>

</style>
