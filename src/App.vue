<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import VFooter from './components/VFooter.vue';

</script>

<template>
  <NavBar />
  <main class="flex-1 flex flex-col gap-20">
    <Suspense class="flex-1">
      <RouterView />
    </Suspense>
  </main>
  <VFooter />
</template>

<style scoped></style>
