<template>
    <nuxt-layout>
        <nuxt-page/>
    </nuxt-layout>
</template>

<script setup>
import {useHead} from "nuxt/app";
import {useFetchSite, useSite} from "./composables/useSite";

const site = useSite()

site.value = await useFetchSite()

useHead({
    titleTemplate: title => title ? `${title} - ${site.value.name}` : site.value.name,
})
</script>
