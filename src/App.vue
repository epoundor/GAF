<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { getSocialLink } from './api';
import NavBar from './components/NavBar.vue';
import VFooter from './components/VFooter.vue';
const socialLinks = reactive({
  facebook_link: false,
  instagram_link: false,
  join_us_link: false,
  linkedin_link: false,
})
onMounted(async () => {
  const response = await getSocialLink()
  socialLinks.facebook_link = response.facebook_link
  socialLinks.instagram_link = response.instagram_link
  socialLinks.join_us_link = response.join_us_link
  socialLinks.linkedin_link = response.linkedin_link
})
</script>

<template>
  <NavBar />
  <main class="flex-1 flex flex-col gap-20">
    <Suspense class="flex-1">
      <RouterView />
    </Suspense>
  </main>
  <VFooter :data="socialLinks" />
</template>

<style scoped></style>
