<template>
    <span class="py-1.5 px-2 rounded text-primary font-semibold text-sm bg-white box-shadow ">{{ label }}</span>
</template>
<script setup lang="ts">
defineProps<{ label: string }>()
</script>
<style scoped>
.box-shadow {
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2)
}
</style>