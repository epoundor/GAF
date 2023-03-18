

<template>
    <div class="grid grid-cols-3 text-left gap-y-[60px] gap-x-10 py-10">
        <VPost :id="i" v-for="i in 9" />
    </div>
    <VPagination :count-page='2' :active-page="1" />
</template>
<script setup lang="ts">
import VPagination from './VPagination.vue';
import VPost from './VPost.vue';
</script>
