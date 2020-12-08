<template>
  <div class="mb-4">
    <label class="font-bold text-grey-darker block mb-2">{{ label }}</label>
    <input type="text" @change="objChanged" class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" :placeholder="placeholder" v-model="field">
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    label: String,
    placeholder: String
  },
  data () {
    return {
      field: ''
    }
  },
  methods: {
    objChanged () {
      this.$emit('fieldValue', this.field)
    }
  }
}
</script>

<style>

</style>
