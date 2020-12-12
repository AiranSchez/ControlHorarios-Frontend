<template>
  <div class="inline-flex rounded-md bg-white shadow-xl hover:bg-red-600 " >
    <a href="#" class="text-gray-700 font-bold py-2 px-6 hover:text-white">
      <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'trash' }"/> <a href="" class="pl-1"> Delete {{ userID }} </a>
    </a>
  </div>

</template>

<script>
export default {
  name: 'EmployeeDeleteButton'
}
</script>

<style>

</style>
