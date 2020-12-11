<template>
  <div class="mb-4">
    <label :for="id" class="font-bold text-grey-darker block mb-2">{{ label }}</label>
    <input :id="id"  type="text" @change="onInputChange" :class="[ field !== '' ? validStyles : defaultStyles ]" class="block appearance-none w-full bg-white hover:border-grey px-2 py-2 rounded shadow" :placeholder="placeholder" v-model="field">
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
      validStyles: 'border-2 border-green-300',
      invalidStyles: 'border-2 border-red-300',
      defaultStyles: 'border-2 border-grey-300'
    }
  },
  methods: {
    onInputChange () {
      this.$emit('fieldValue', this.field)
    }
  }
}
</script>

<style>

</style>
