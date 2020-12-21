<template>
  <section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        Getting Started
      </h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <img src="../../../assets/createCompany.png" alt="">
          <div class="w-full font-bold text-xl text-gray-800 px-6">
            Create your account
          </div>
          <p class="text-gray-800 text-base px-6 mb-5">
            Register your company and add your employees easily from your profile. From there you will be able to see the information of your employees and their schedules.
          </p>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <img src="../../../assets/timeTracking.png" alt="">
            <div class="w-full font-bold text-xl text-gray-800 px-6">
              Time Tracking
            </div>
            <p class="text-gray-800 text-base px-6 mb-5">
              Your employees can access their profile and start tracking their time.
            </p>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <img src="../../../assets/calendar.png" alt="">
            <div class="w-full font-bold text-xl text-gray-800 px-6">
              Summary and Calendar
            </div>
            <p class="text-gray-800 text-base px-6 mb-5">
              Both you and your employees will have a summary with their daily and monthly hours as well as a calendar with company holidays.
            </p>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeDescription'
}
</script>

<style scoped>

</style>
