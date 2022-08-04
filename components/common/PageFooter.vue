<template>
    <div class="bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
        <div class="container space-y-2 py-4">
            <div class="h-16 flex items-center justify-center">
                <nuxt-link to="/">
                    <jscss-logo size="48" class="animate-pulse"></jscss-logo>
                </nuxt-link>
            </div>
            <div class="text-sm text-center">
                <a href="https://beian.miit.gov.cn/" class="text-gray-400 text-xs" target="_blank">豫ICP备15010011号-1</a>
            </div>
        </div>
    </div>
</template>

<script setup>

import JscssLogo from "../images/JscssLogo";
</script>

<style scoped>

</style>
