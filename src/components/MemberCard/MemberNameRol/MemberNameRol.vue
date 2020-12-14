<template>
<div>
  <figcaption>
    <div class="text-xl text-green-500 font-semibold">
      {{name}}
    </div>
    <div class="text-gray-800 font-medium">
        {{rol}}
    </div>
  </figcaption>
</div>
</template>

<script>
export default {
  name: 'MemberNameRol',
  props: {
    name: String,
    rol: String
  }
}
</script>

<style>

</style>
