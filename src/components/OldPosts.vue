
import VButton from './VButton.vue';

<template>
    <div class="flex flex-col py-12 justify-between container">
        <div class="flex justify-between">
            <h3 class="text-2xl "><strong>ANCIENS NUMEROS</strong></h3>
            <div class="flex gap-4">
                <span class="border rounded-full flex justify-center items-center w-10 aspect-square">
                    <mdicon name="arrow-left" />
                </span>
                <span class="border rounded-full flex justify-center items-center w-10 aspect-square">
                    <mdicon name="arrow-right" />
                </span>
            </div>
        </div>

        <div class="w-full overflow-hidden mt-11">
            <div class="flex gap-6 slides">
                <template v-for="i in 4">
                    <div class="bg-white flex flex-col gap-4 justify-center p-4 w-[265px] h-2/3">
                        <img class="w-full h-full" src="/assets/spolight.png" alt="">
                        <span class="font-semibold text-sm text-center">Nous pouvons traversé le pire en pensant que c’est
                            la fin mais
                            Jésus est là</span>
                        <div class="flex justify-center">
                            <VButton />
                        </div>
                    </div>
                </template>
            </div>

        </div>


    </div>
</template>
<script setup lang="ts">
import VButton from './VButton.vue';

</script>
<style scoped>
.slides {

    width: calc(265px * 4)
}
</style>