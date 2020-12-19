<template>
  <div :class="'flex justify-center rounded-md bg-white shadow-xl hover:bg-' + color + '-600'" >
    <a href="#" class="flex text-gray-700 font-bold py-2 px-6 hover:text-white">
      <font-awesome-icon :icon="{ prefix: 'fas', iconName: name }"/>
    </a>
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
