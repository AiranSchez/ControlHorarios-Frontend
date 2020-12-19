<template>
  <div :class="'flex justify-center rounded-md bg-white shadow-xl hover:text-white py-2 px-6 cursor-pointer hover:bg-' + color + '-600'" >
    <font-awesome-icon :icon="{ prefix: 'fas', iconName: name }"/>
  </div>

</template>

<script>
export default {
  props: {
    name: String,
    color: String
  },
  name: 'IconDeleteButton'
}
</script>
