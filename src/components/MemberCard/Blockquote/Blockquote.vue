<template>
  <div>
      <blockquote>
            <p class="font-medium text-gray-500">
              "{{value}}"
            </p>
        </blockquote>
  </div>
</template>

<script>
export default {
  name: 'Blockquote',
  props: {
    value: String
  }
}
</script>

<style>

</style>
