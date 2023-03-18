<template>
    <div class="flex flex-col aspect-[3/2] gap-x-28">
        <div class="h-2/3 mb-2">
            <router-link :to="{ name: 'article', params: { id } }">
                <img src="/assets/spolight.png" class="object-cover h-full w-full" alt="">

            </router-link>
        </div>
        <time class="font-bold text-functional-grey text-sm">18 Août 2022</time>
        <span class="pr-4">Nous pouvons traversé le pire en pensant que c’est la fin mais Jésus est là</span>
    </div>
</template>
<script setup lang="ts">
defineProps<{ id: string | number }>()
</script>