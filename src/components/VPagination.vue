<template>
    <div class="flex justify-center gap-4">
        <span v-for="i in countPage"
            class="inline-flex justify-center cursor-pointer items-center p-3 border-2 border-black  rounded-full font-semibold text-lg aspect-square w-12 h-12"
            :class="{ 'bg-black text-white ': i === activePage }">{{ i }}</span>

        <span
            class="inline-flex justify-center cursor-pointer items-center p-3 border-2 border-functional-grey  rounded-full font-semibold text-lg aspect-square w-12 h-12">
            <mdicon name="chevron-right" />
        </span>
    </div>
</template>
<script setup lang='ts'>
defineProps<{ countPage: number, activePage: number }>()
</script>