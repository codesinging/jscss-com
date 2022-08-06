<template>
    <div class="container">
        {{ site.name }} {{ site.icp }}
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
