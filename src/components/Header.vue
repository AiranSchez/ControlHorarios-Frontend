<template>
  <div id="header" class="flex">
    <div id="nav" class="absolute bg-gray-100 bg-opacity-20 flex w-full  items-center justify-between flex-wrap p-2 m-auto top-0 animated">
      <div class="text-black">Logo</div>
      <div class="links flex text-lg font-bold text-white w-2/4 justify-between">
        <router-link to="/">Home</router-link>
        <router-link to="/about">Products</router-link>
        <router-link to="/about">FAQ</router-link>
        <router-link to="/login">Sign in</router-link>
        <router-link to="/register">Register</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
