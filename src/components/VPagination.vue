<template>
    <div class="flex justify-center gap-4" v-if="countPage > 1">
        <button :disabled="!(1 < activePage && activePage <= countPage)" @click="emit('prev')"
            class="disabled:opacity-30 inline-flex justify-center cursor-pointer items-center p-3 border-2 border-functional-grey  rounded-full font-semibold text-lg aspect-square w-12 h-12">
            <mdicon name="chevron-left" />
        </button>
        <!-- <template v-if="countPage < 6"> -->
        <button v-for="i in countPage" @click="emit('clickPage', i)"
            class="inline-flex justify-center cursor-pointer items-center p-3 border-2 border-black  rounded-full font-semibold text-lg aspect-square w-12 h-12"
            :class="{ 'bg-black text-white ': i === activePage }">{{ i }}</button>

        <!-- </template> -->
        <!-- <template v-else>
            <button v-for="i in 5"
                class="inline-flex justify-center cursor-pointer items-center p-3 border-2 border-black  rounded-full font-semibold text-lg aspect-square w-12 h-12"
                :class="{ 'bg-black text-white ': i === activePage }">{{ i }}</button>
            <button @click="emit('next')"
                class=" inline-flex justify-center cursor-pointer items-center p-3 border-2 border-functional-grey
                                                  disabled:opacity-30  rounded-full font-semibold text-lg aspect-square w-12 h-12">
                <mdicon name="dots-horizontal" />
            </button>

        </template> -->

        <button :disabled="!(activePage < countPage)" @click="emit('next')"
            class=" inline-flex justify-center cursor-pointer items-center p-3 border-2 border-functional-grey
                                                                  disabled:opacity-30  rounded-full font-semibold text-lg aspect-square w-12 h-12">
            <mdicon name="chevron-right" />
        </button>
    </div>
</template>
<script setup lang='ts'>
defineProps<{ countPage: number, activePage: number }>()
const emit = defineEmits(['prev', 'next', 'clickPage'])
</script>
<style scoped></style>