<template>
    <div class="flex flex-col lg:flex-row gap-[60px]  container mb-[60px]">
        <!-- <img class="w-[500px] aspect-[5/7]"
            src="https://www.croirepublications.com/i/article/1716/IAAA/un-gospel-francophone.jpg" alt=""> -->
        <img class="w-[500px] aspect-[5/7] object-cover" :class="{ 'animate-pulse': !mag_img_url }"
            onerror="this.src='/assets/placeholder-image.webp';" :src="mag_img_url" alt="">
        <div class="flex flex-col items-start flex-1">

            <template v-for="tag in tags">
                <VTag :label="tag" />
            </template>
            <h2 class="font-bold mt-4 text-3xl" v-if="mag && mag.title">{{ mag.title.rendered }}
            </h2>
            <div class=" w-full flex flex-col gap-4" v-else>
                <div class="w-full h-8 animate-pulse"></div>
                <div class="w-1/2 h-8 animate-pulse"></div>
            </div>
            <span class="mt-2 mb-6 text-functional-grey" v-if="mag && mag.acf.details">{{ mag.acf.details }}</span>
            <VButton v-if="mag && mag.acf" :src="mag.acf.pdf_url" label="Télécharger"
                class="py-1 gap-5 text-lg leading-[48px] mb-3" />
            <span>256 Téléchargements</span>
            <div class="mt-6 flex flex-col gap-2 w-full">
                <strong class="text-lg">À Propos</strong>
                <p v-if="mag" v-html="mag.content.rendered"></p>
                <span class=" w-full flex flex-col gap-4" v-else>
                    <span class="w-full h-8 animate-pulse"></span>
                    <span class="w-full h-8 animate-pulse"></span>
                    <span class="w-full h-8 animate-pulse"></span>
                    <span class="w-1/2 h-8 animate-pulse"></span>
                </span>
            </div>
            <div class="mt-10 flex flex-col gap-2">
                <div class="font-bold text-lg">PARTAGER</div>
                <ShareSocialMediaButton :link="mag.slug" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import VTag from './VTag.vue';
import VButton from './VButton.vue';
import { Ref, onMounted, onUpdated, ref } from 'vue';
import { getFeaturedMedia, getTags } from '../api'
import type { Post } from '../types'
import ShareSocialMediaButton from './ShareSocialMediaButton.vue';

const props = defineProps<{ mag: Post }>()

const mag_img_url = ref('')
const tags: Ref<string[] | ''> = ref([])

onUpdated(async () => {
    if (props.mag && props.mag.featured_media) {
        mag_img_url.value = await getFeaturedMedia(props.mag.featured_media)
    }
})

onMounted(() => {
    setTimeout(async () => {
        tags.value = await getTags(props.mag.tags)
    }, 1000);
})
</script>
<style scoped>
img {
    filter: drop-shadow(0px 10.1443px 23.67px rgba(0, 0, 0, 0.2))
}
</style>