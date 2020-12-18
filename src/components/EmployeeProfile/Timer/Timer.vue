<template>
  <div class="flex w-1/3 flex-col">
    <div class="flex justify-between">
      <div>Chek in at: {{ checkInAt }} </div>
      <div>Current time: {{ currentTime }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    checkInAt: Object,
    currentTime: String
  }
}
</script>
