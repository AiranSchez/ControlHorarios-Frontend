<template>
  <div class="mb-4">
    <label :for="id" class="font-bold text-grey-darker block mb-2">{{ label }}</label>
    <input :id="id" type="email" @change="objChanged" class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" :placeholder="placeholder" v-model="field">
    <div v-if="checkEmail(this.field)">Valid email</div>
    <div v-else>Invalid email</div>
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
      field: ''
    }
  },
  methods: {
    objChanged () {
      if (this.checkEmail(this.field)) {
        this.$emit('fieldValue', this.field)
      } else {
        console.log('Incorrect email')
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
