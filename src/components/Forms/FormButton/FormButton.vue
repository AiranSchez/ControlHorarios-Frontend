<template>
    <div class="flex justify-center">
        <div @click="isClicked()" class="inline-flex rounded-md bg-white shadow-xl hover:bg-gray-600 ">
            <a href="#" class="text-gray-700 font-bold py-2 px-6 hover:text-white">{{ value}}</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FormButton',
  props: {
    value: String
  },
  methods: {
    isClicked () {
      this.$emit('isClicked')
    }
  }
}
</script>

<style>

</style>
