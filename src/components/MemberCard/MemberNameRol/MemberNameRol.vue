<template>
<div>
  <figcaption class="font-medium">
    <div class="text-cyan-600">
      {{name}}
    </div>
    <div class="text-gray-500">
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
