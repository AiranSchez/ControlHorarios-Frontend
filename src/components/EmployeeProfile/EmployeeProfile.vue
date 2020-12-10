<template>
  <div class="w-full items-center justify-center">
    <div class="w-full px-2 mt-20">
        <div class="bg-white shadow-xl rounded-lg overflow-hidden md:flex">
            <div class="w-full">
                <div class="p-4 md:p-5 bg-gray-100">
                    <div class="flex justify-between items-center">
                        <div>
                            <p class="font-bold text-xl">Tailwind Docs</p>
                            <div class="flex items-center">
                                <div class="flex justify-between items-center">
                                    <div class="flex flex-row-reverse justify-end">
                                        <div class="bg-cover bg-center w-10 h-10 rounded-full border-4 border-white" style="background-image: url(https://images.unsplash.com/photo-1458071103673-6a6e4c4a3413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)"></div>
                                        <div class="bg-cover bg-center w-10 h-10 rounded-full border-4 border-white -mr-3" style="background-image: url(https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80)"></div>
                                        <div class="bg-cover bg-center w-10 h-10 rounded-full border-4 border-white -mr-3" style="background-image: url(https://images.unsplash.com/photo-1470406852800-b97e5d92e2aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)"></div>
                                        <div class="bg-cover bg-center w-10 h-10 rounded-full border-4 border-white -mr-3" style="background-image: url(https://images.unsplash.com/photo-1473700216830-7e08d47f858e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)"></div>
                                    </div>
                                        <button class="ml-10 mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-indigo-700 hover:bg-indigo-600 font-bold text-white rounded-lg shadow-md">Start timer</button>
                                </div>
                            </div>
                        </div>
                        <Timer/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Timer from './Timer/Timer'
export default {
  components: {
    Timer
  }
}
</script>

<style>

</style>
