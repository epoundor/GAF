<template>
    <div class="pt-[60px] ">
        <SpotLightPost :mag="spotLightPost" />
        <AuthorInfos />
        <OldPosts :total-pages="+totalPages" :active-page="page" :data="oldPosts" @next="page++" @prev="page--" />
        <div class="bg-white py-20">
            <div class="container">
                <div class="flex mb-12 justify-between">
                    <h3 class="text-2xl "><strong>BLOG</strong></h3>
                    <router-link :to="{ name: 'blog' }" class="hidden lg:block px-4 py-2 border border-black">Voir tous les
                        articles</router-link>
                </div>
                <div class="grid gap-10 grid-rows-3 lg:grid-rows-none lg:grid-cols-3">
                    <VPost :post="post" v-for="(post) in blog" />
                </div>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
import AuthorInfos from '../components/AuthorInfos.vue';
import OldPosts from '../components/OldPosts.vue';
import SpotLightPost from '../components/SpotLightPost.vue';
import VPost from '../components/VPost.vue';
import { getBlog, getMag, getSpotLight } from '../api'
import { ref, onMounted, warn, watch } from 'vue';
import type { Ref } from 'vue';
import { Post } from '../types';


const oldPosts = ref([])
const blog = ref([])
const spotLightPost: Ref<Post> = ref(
    {
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
        }
    })
const totalPages = ref(0)
const page = ref(1)

onMounted(async () => {
    const res = (await getMag())
    oldPosts.value = res.data
    totalPages.value = res.totalPages
    spotLightPost.value = (await getSpotLight())[0]
    blog.value = (await getBlog(3)).data
})

watch(page, async () => {
    const res = (await getMag(page.value))
    oldPosts.value = res.data
    totalPages.value = res.totalPages
})


</script>