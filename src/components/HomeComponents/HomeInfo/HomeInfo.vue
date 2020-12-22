<template>
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <div class="flex flex-wrap justify-center items-center">
        <div class="w-5/6 sm:w-1/2 p-6">
          <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
            Check your total hours
          </h3>
          <p class="text-gray-600 mb-8 ">
            Our goal is to make it easier for you to work everyday
          </p>
        </div>
        <div class="w-full sm:w-1/2 p-6">
          <img src="../../../assets/schedule.png" alt="">
        </div>
      </div>
      <div class="flex flex-wrap flex-col-reverse sm:flex-row justify-center items-center">
        <div class="w-full sm:w-1/2 p-6 mt-6">
          <img src="../../../assets/world.png" alt="">
        </div>
        <div class="w-full sm:w-1/2 p-6 mt-6">
          <div class="align-middle">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
             International support
            </h3>
            <p class="text-gray-600 mb-8">
              Connect with your employees from anywhere in the world
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'HomeInfo'
}
</script>

<style scoped>

</style>
