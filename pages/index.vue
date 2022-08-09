<template>
    <div class="container">
        index
    </div>
</template>

<script setup>
import {useHead} from "nuxt/app";
import {useSite} from "../composables/useSite";

const site = useSite()

useHead({
    title: '首页',
})
</script>

<style scoped>

</style>
