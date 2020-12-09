<template>
  <div>
      <blockquote>
            <p class="text-lg font-semibold">
              {{value}}
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
