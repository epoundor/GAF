<template>
    <div class="pt-[60px] ">
        <SpotLightPost />
        <AuthorInfos />
        <OldPosts />
        <div class="bg-white py-20">
            <div class="container">
                <div class="flex mb-12 justify-between">
                    <h3 class="text-2xl "><strong>BLOG</strong></h3>
                    <router-link :to="{ name: 'blog' }" class="px-4 py-2 border border-black">Voir tous les
                        articles</router-link>
                </div>
                <div class="grid grid-cols-3">
                    <VPost :id="i" v-for="i in 3" />
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


</script>