<template>
    <div class="bg-white">
        <div class="w-10/12  mx-auto py-6 flex justify-between items-center">
            <router-link :to="{ name: 'home' }" @click="toggleCollapsed">
                <Logo />
            </router-link>
            <div class="hidden items-center lg:flex">
                <nav>
                    <ul class="flex text-base font-medium leading-5 gap-16 px-16">
                        <router-link :to="{ name: 'home' }">Accueil</router-link>
                        <router-link :to="{ name: 'actu' }">Actualités</router-link>
                        <router-link :to="{ name: 'interview' }">Interviews</router-link>
                    </ul>
                </nav>
                <div class="flex flex-col  border-l-2 pl-6 gap-2">
                    <div class="flex gap-2">
                        <mdicon name="phone" />
                        <a href="tel:+229 96839804">+229 96839804</a>
                    </div>
                    <div class="flex gap-2">
                        <mdicon name="email-outline" />
                        <a href="mailto:contact@gospelaf.com">contact@gospelaf.com</a>
                    </div>
                </div>
            </div>
            <div class="lg:hidden">
                <template v-if="!isMenuColapsed">
                    <mdicon name="menu" @click="toggleCollapsed" />

                </template>
                <template v-else>
                    <mdicon name="close" @click="toggleCollapsed" />
                    <div class="fixed bg-white top-20 inset-x-0 -bottom-10 z-10 p-10">
                        <nav>
                            <ul class="flex flex-col text-2xl leading-tight gap-6">
                                <router-link :to="{ name: 'home' }" @click="toggleCollapsed">Accueil</router-link>
                                <router-link :to="{ name: 'interview' }" @click="toggleCollapsed">Interviews</router-link>
                                <router-link :to="{ name: 'actu' }" @click="toggleCollapsed">Actualités</router-link>
                                <div class="flex flex-col gap-2">
                                    <div class="flex gap-2">
                                        <mdicon name="phone" />
                                        <a href="tel:+229 96839804">+229 96839804</a>
                                    </div>
                                    <div class="flex gap-2">
                                        <mdicon name="email-outline" />
                                        <a href="mailto:contact@gospelaf.com">contact@gospelaf.com</a>
                                    </div>
                                </div>
                            </ul>
                        </nav>

                    </div>
                </template>

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import Logo from './VLogo.vue';
const isMenuColapsed = ref(false)
const toggleCollapsed = () => {
    isMenuColapsed.value = !isMenuColapsed.value
}
</script>
<style>
.router-link-active {
    @apply text-primary;
}
</style>