<template>
    <div class="bg-white text-center py-10">
        <h3 class="font-bold text-2xl uppercase">{{type}}</h3>
        <div class="container">
            <PostList :type="type"/>
        </div>
    </div>
</template>
<script setup lang="ts">
import PostList from '../components/PostList.vue';
defineProps<{ type: string }>()

</script>