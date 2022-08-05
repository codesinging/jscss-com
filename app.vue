<template>
    <nuxt-layout>
        <nuxt-page/>
    </nuxt-layout>
</template>

<script setup>
import {useHead} from "nuxt/app";

const siteName = '前端网'

useHead({
    titleTemplate: title => title ? `${title} - ${siteName}` : siteName,
})
</script>
