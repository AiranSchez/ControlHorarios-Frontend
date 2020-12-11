<template>
  <div class="mb-4">
    <label :for="id" class="font-bold text-grey-darker block mb-2">{{ label }}</label>
    <input :id="id" type="password" @change="checkPassword" class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" :placeholder="placeholder" v-model="field">
    <div v-if="checkPattern(this.field)">Valid password</div>
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
      field: ''
    }
  },
  methods: {
    checkPassword () {
      if (this.checkPattern(this.field)) {
        this.$emit('fieldValue', this.field)
      } else {
        console.log('Incorrect password')
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
