

<template>
    <div class="grid grid-cols-3 text-left gap-y-[60px] gap-x-10 py-10">
        <VPost :post="post" v-for="post in blog" />
    </div>
    <VPagination @click-page="(i) => page = i" @next="page++" @prev="page--" :count-page='totalPages' :active-page="page" />
</template>
<script setup lang="ts">
import { onMounted, watch, ref } from 'vue';
import { getBlog } from '../api';
import VPagination from './VPagination.vue';
import VPost from './VPost.vue';

const blog = ref([])
const totalPages = ref(0)
const page = ref(1)
onMounted(async () => {
    const res = (await getBlog())
    blog.value = res.data
    totalPages.value = +res.totalPages
})
watch(page, async () => {
    const res = (await getBlog(9, page.value))
    blog.value = res.data
    totalPages.value = +res.totalPages
})
</script>
