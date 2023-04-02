

<template>
    <div class="pt-[60px] container flex flex-col-reverse lg:flex-row gap-[60px] ">
        <div class="flex w-full flex-col lg:w-2/5">
            <time class="font-bold text-functional-grey text-sm" v-if="post.date">{{ formatDate(new Date(post.date))
            }}</time>
            <h3 v-if="post.title" class="font-bold text-2xl lg:text-4xl mt-4">{{ post.title.rendered }}
            </h3>
            <div class=" w-full flex flex-col gap-4" v-else>
                <div class="w-full h-8 animate-pulse"></div>
                <div class="w-1/2 h-8 animate-pulse"></div>
            </div>

            <!-- Share -->
            <div class="mt-10 mb-9 flex flex-col gap-2">
                <div class="font-bold text-lg">PARTAGER</div>
                <ShareSocialMediaButton />
            </div>

            <VAuthor />
        </div>
        <div class="flex-1 ">
            <img class="aspect-video h-full object-cover w-full" :class="{ 'animate-pulse': !post_img_url }"
                :src="post_img_url" onerror="this.src='/assets/placeholder-image.webp';" alt="">
        </div>
    </div>
    <div class="bg-white py-20">
        <div class="container">
            <div class="container" v-html="post.content.rendered">
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, onMounted, type Ref, ref } from 'vue';
import { useRoute } from 'vue-router';
import VAuthor from '../components/VAuthor.vue';
import { Post } from '../types';
import { getArticle, getFeaturedMedia } from '../api'
import { formatDate } from '../utils/format-date';
import ShareSocialMediaButton from '../components/ShareSocialMediaButton.vue';
const route = useRoute()

const id = computed(() => route.params.slug)
const post: Ref<Post> = ref({
    acf:
    {
        details: '',
        pdf_url: ''
    },
    content:
    {
        rendered: ''
    },
    featured_media: 0,
    title: {
        rendered: ''
    },
    tags: []
})
const post_img_url = ref('')

onMounted(async () => {
    post.value = (await getArticle(String(id.value)))[0]
    document.title = `${post.value.title.rendered} - Gospel Afrique Francophone`

    if (post.value && post.value.featured_media) {
        post_img_url.value = await getFeaturedMedia(post.value.featured_media)
    }
})
</script>