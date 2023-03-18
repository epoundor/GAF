<template>
    <div class="bg-white">
        <div class="w-10/12  mx-auto py-6 flex justify-between items-center">
            <Logo />
            <div class="flex items-center">
                <nav>
                    <ul class="flex text-base font-medium leading-5 gap-16 px-16">
                        <router-link :to="{ name: 'home' }">Accueil</router-link>
                        <router-link :to="{ name: 'blog' }">Blog</router-link>
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
        </div>
    </div>
</template>
<script setup lang="ts">
import Logo from './VLogo.vue';

</script>
<style>
.router-link-active {
    color: #E34429;
}
</style>