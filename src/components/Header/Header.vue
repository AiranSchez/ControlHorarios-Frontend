<template>
  <div id="header" class="flex">
    <div id="nav" class="bg-white w-full h-20 flex items-center justify-around flex-wrap p-2 m-auto top-0 border-b-2 border-gray-300">
      <div class="text-black h-16 w-16">
        <router-link to="/">
          <img src="../../assets/flipday.png" alt="Logo">
        </router-link>
      </div>
      <div class="links flex text-lg w-1/4 justify-evenly text-lg">
        <router-link class="hover:text-gray-500" to="/">Home</router-link>
          <router-link class="hover:text-gray-500" to="/login">Sign in</router-link>
          <router-link class="border border-green-400 rounded-full h-8 w-24 text-center hover:text-gray-400 hover:bg-green-400" to="/register">Sign up</router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
