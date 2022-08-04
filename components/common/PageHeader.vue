<template>
    <div class="bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
        <div class="container h-12 flex items-center justify-between">
            <div class="space-x-2 flex items-center">
                <nuxt-link to="/">
                    <jscss-logo size="24" class="animate-pulse"/>
                </nuxt-link>
                <nuxt-link to="/" class="text-lg">
                    JsCss.com 前端网
                </nuxt-link>
            </div>
            <div class="space-x-2">
                <color-mode-switcher/>
            </div>
        </div>
    </div>
</template>

<script setup>

import JscssLogo from "../images/JscssLogo.vue";
import ColorModeSwitcher from "./ColorModeSwitcher.vue";
</script>

<style scoped>

</style>
