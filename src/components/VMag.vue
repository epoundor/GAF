<template>
    <div class="bg-white flex flex-col gap-4 justify-center p-4 w-[282px] h-2/3">
        <img class="w-full h-[290px] bg-gray-500" onerror="this.src='/assets/placeholder-image.webp';" :src="mag_img_url"
            alt="">
        <span class="font-semibold text-sm text-center">{{ mag.title.rendered }} </span>
        <div class="flex justify-center">
            <VButton :src="mag.acf.pdf_url" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue';
import { getFeaturedMedia } from '../api';
import { Post } from '../types';
import VButton from './VButton.vue';

const props = defineProps<{ mag: Post }>()
const mag_img_url = ref('')

onMounted(async () => {
    if (props.mag && props.mag.featured_media) {
        mag_img_url.value = await getFeaturedMedia(props.mag.featured_media)
    }
})
onUpdated(async () => {
    if (props.mag && props.mag.featured_media) {
        mag_img_url.value = await getFeaturedMedia(props.mag.featured_media)
    }
})
</script>