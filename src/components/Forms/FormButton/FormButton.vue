<template>
    <div class="flex justify-center">
        <div @click="isClicked()" class="justify-center inline-flex w-3/6 rounded-md bg-green-700 shadow-xl hover:bg-green-800 ">
            <a href="#" class="font-bold py-2 px-6 text-white rounded-md">{{ value}}</a>
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
