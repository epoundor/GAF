
<template>
    <div class="flex flex-col py-12 justify-between container" v-if="data.length">
        <div class="flex justify-between">
            <h3 class="text-2xl "><strong>ANCIENS NUMEROS</strong></h3>
            <div class="gap-4 hidden lg:flex">
                <button @click="emit('prev')" :disabled="(1 >= activePage || activePage > totalPages)"
                    class="cursor-pointer border rounded-full flex justify-center items-center w-10 aspect-square"
                    :class="{ 'opacity-30 cursor-not-allowed': (1 >= activePage || activePage > totalPages) }">

                    <mdicon name="arrow-left" />
                </button>
                <button @click="emit('next')" :disabled="activePage >= totalPages"
                    class="border cursor-pointer rounded-full flex justify-center items-center w-10 aspect-square"
                    :class="{ 'opacity-30 cursor-not-allowed': activePage >= totalPages }">
                    <mdicon name="arrow-right" />
                </button>
            </div>
        </div>

        <div class="w-full flex flex-col lg:flex-row gap-6  overflow-hidden mt-11" v-memo="[data]">
            <template v-for="mag in data">
                <VMag :mag="mag" />
            </template>
        </div>


    </div>
</template>
<script setup lang="ts">
import VMag from './VMag.vue';
import type { Post } from '../types'

defineProps<{ data: Post[], totalPages: number, activePage: number }>()

const emit = defineEmits(['next', 'prev'])


</script>
