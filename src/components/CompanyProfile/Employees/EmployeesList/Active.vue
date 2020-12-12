<template>
  <span v-if="isActive" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
  <span v-else class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Inactive</span>
</template>

<script>
export default {
  props: {
    isActive: Boolean
  }
}
</script>
