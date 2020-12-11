<template>
  <div class="mb-4">
    <label :for="id" class="font-bold text-grey-darker block mb-2">{{ label }}</label>
    <input :id="id" type="email" @change="onInputChange" :class="[ isValidEmail && field !== '' ? validStyles : invalidStyles ]" class="block appearance-none w-full hover:border-grey px-2 py-2 rounded shadow" :placeholder="placeholder" v-model="field">
    <div v-if="!checkEmail(this.field)">Invalid email</div>
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
      isValidEmail: '',
      validStyles: 'border-2 border-green-300',
      invalidStyles: 'border-2 border-red-300'
    }
  },
  methods: {
    onInputChange () {
      if (this.checkEmail(this.field)) {
        this.$emit('fieldValue', this.field)
        this.isValidEmail = true
      } else {
        this.isValidEmail = false
      }
    },
    checkEmail (email) {
      const regExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
      return regExp.test(email)
    }
  }
}
</script>

<style>

</style>
