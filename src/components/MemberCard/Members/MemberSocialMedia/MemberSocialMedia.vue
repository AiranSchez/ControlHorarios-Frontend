<template>
  <div class="flex justify-end">
    <div class="flex justify-evenly ">
        <a :href="twitter" target="_blank" class="pl-1 text-black hover:text-green-500"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" /></a>
        <a :href="github" target="_blank" class="pl-1 text-black hover:text-green-500"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }" /></a>
        <a :href="linkedin" target="_blank" class="pl-1 text-black hover:text-green-500"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" /></a>
    </div>
   </div>
</template>

<script>
export default {
  name: 'MemberSocialMedia',
  props: {
    twitter: String,
    github: String,
    linkedin: String
  }
}
</script>
