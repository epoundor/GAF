<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import VFooter from './components/VFooter.vue';

</script>

<template>
  <NavBar />
  <main class=" flex flex-col gap-20">
    <RouterView />
  </main>
  <VFooter />
</template>

<style scoped></style>
