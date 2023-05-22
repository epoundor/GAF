

<template>
    <div class="flex flex-col lg:grid lg:grid-cols-3 text-left gap-y-[60px] gap-x-10 py-10">
        <VPost :post="post" v-for="post in blog" />
    </div>
    <VPagination @click-page="(i) => page = i" @next="page++" @prev="page--" :count-page='totalPages' :active-page="page" />
</template>
<script setup lang="ts">
import { onMounted, watch, ref } from 'vue';
import { getActuality, getInterview } from '../api';
import VPagination from './VPagination.vue';
import VPost from './VPost.vue';

const props=defineProps<{ type: string }>()

const blog = ref([])
const totalPages = ref(0)
const page = ref(1)
onMounted(async () => {
    const res = (await getposts(props.type))
    blog.value = res.data
    totalPages.value = +res.totalPages
})
watch(page, async () => {
    const res = (await getposts(props.type,9, page.value))
    blog.value = res.data
    totalPages.value = +res.totalPages
})

const getposts = async (type:string,per_page?: number, page?: number) => {
    if (type == 'interviews') {
        return await getInterview(per_page, page)
    }
    return await getActuality(per_page, page)
}
</script>
