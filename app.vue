<template>
    <nuxt-layout>
        <nuxt-page/>
    </nuxt-layout>
</template>

<script setup>
import {useFetch, useHead, useRuntimeConfig} from "nuxt/app";
import {ref} from "vue";
import useGet from "./composables/useGet";

const siteName = '前端网'

const settings = ref({})

const config = useRuntimeConfig()

console.log(config.public.baseUrl)

// const {data} = await useFetch(config.public.baseUrl + 'settings/settings', {params: {group: 'site'}})

const {data} = await useGet('settings/settings', {group: 'site'})

settings.value = data.value.data

console.log(data.value)

useHead({
    titleTemplate: title => title ? `${title} - ${settings.value.site_name}` : settings.value.site_name,
})
</script>
