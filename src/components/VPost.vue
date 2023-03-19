<template>
    <div class="flex flex-col aspect-[3/2] gap-x-28">
        <div class="h-2/3 mb-2">
            <router-link :to="{ name: 'article', params: { slug: post.slug } }">
                <img :src="mag_img_url" onerror="this.src='/assets/placeholder-image.webp';"
                    class="object-cover h-full w-full " :class="{ 'animate-pulse': !mag_img_url }" alt="">

            </router-link>
        </div>
        <time class="font-bold text-functional-grey text-sm uppercase" v-if="post.date">{{ formatDate(new Date(post.date))
        }}</time>
        <span class="pr-4">{{ post.title.rendered }}</span>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getFeaturedMedia } from '../api';
import { Post } from '../types';
import { formatDate } from '../utils/format-date'
const props = defineProps<{ post: Post }>()

const mag_img_url = ref('')

onMounted(async () => {
    if (props.post && props.post.featured_media) {
        mag_img_url.value = await getFeaturedMedia(props.post.featured_media)
    }
})
</script>