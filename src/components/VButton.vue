<template>
    <a download target="_blank" :href="src"
        class="rounded py-1 px-4 bg-primary items-center flex gap-3 text-white font-bold text-sm leading-8">
        <mdicon name="arrow-collapse-down" />
        Télécharger
    </a>
</template>
<script setup lang="ts">
defineProps<{ src: string }>()
</script>