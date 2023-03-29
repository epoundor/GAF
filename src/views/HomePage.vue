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
            <div class="container rounded-lg de h-52 overflow-hidden">
                <div class="gradient h-full pt-10 pl-16">
                    <p class="font-bold text-white text-2xl">Gospel Afrique Francophone </p>
                    <p class="text-xl text-white mb-4">
                        La plateforme chrétienne qu’il vous faut</p>
                    <div class="py-4 px-5 bg-white inline-flex gap-4 justify-center items-center rounded font-semibold">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22 12.9873C22 7.46387 17.5234 2.9873 12 2.9873C6.47656 2.9873 2 7.46387 2 12.9873C2 18.5107 6.47656 22.9873 12 22.9873C12.0586 22.9873 12.1172 22.9873 12.1758 22.9834V15.2021H10.0273V12.6982H12.1758V10.8545C12.1758 8.71777 13.4805 7.55371 15.3867 7.55371C16.3008 7.55371 17.0859 7.62012 17.3125 7.65137V9.88574H16C14.9648 9.88574 14.7617 10.3779 14.7617 11.1006V12.6943H17.2422L16.918 15.1982H14.7617V22.6006C18.9414 21.4014 22 17.5537 22 12.9873Z"
                                fill="black" />
                        </svg>
                        Rejoindre maintenant
                    </div>
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
<style scoped>
.gradient {
    background: linear-gradient(90.42deg, #EBB944 10.69%, #FE6361 52.69%, rgba(255, 101, 101, 0) 99.67%);
    ;

}

.de {
    background-image: url('/assets/gradient.png');
    background-position: right;
    background-repeat: no-repeat;
}
</style>