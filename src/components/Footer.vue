<template>
  <div id="footer" class="w-screen self-end">
    <div class="pt-4 pb-4 flex bg-black justify-evenly">
      <div class="text-white">
        <h1>Help</h1>
      </div>
      <div class="text-white">texto de prueba |</div>
      <div class="text-white flex flex-col">
        <div>
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" /> <a href="" class="pl-1"> Twitter</a>
        </div>
        <div>
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }" /> <a href="" class="pl-1"> Github</a>
        </div>
        <div>
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" /> <a href="" class="pl-1">LinkedIn</a>
        </div>
        <div>
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/> <a href="" class="pl-1"> Facebook</a>
        </div>
      </div>
    </div>
    <div class="bg-black text-white text-center">©Copyright all rights reserved to Flipday team</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
