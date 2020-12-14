<template>
  <div class="flex justify-end">
    <div class="flex justify-evenly w-1/5">
        <a href="https://twitter.com/" target="_blank" class="pl-1 text-black hover:text-green-500"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" /></a>
        <a href="https://github.com/" target="_blank" class="pl-1 text-black hover:text-green-500"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }" /></a>
        <a href="https://www.linkedin.com/" target="_blank" class="pl-1 text-black hover:text-green-500"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" /></a>
        <a href="https://www.facebook.com/" target="_blank" class="pl-1 text-black hover:text-green-500"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/></a>
    </div>
   </div>
</template>

<script>
export default {
  name: 'MemberSocialMedia'
}
</script>
