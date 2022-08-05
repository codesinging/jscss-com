<template>
    <svg class="animate-spin" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :fill="color">
        <path d="M512 981.312a469.312 469.312 0 1 0-445.824-322.24A42.688 42.688 0 1 0 147.2 632.32 384 384 0 1 1 512 896a42.688 42.688 0 1 0 0 85.312z"/>
    </svg>
</template>

<script setup>
defineProps({
    size: {
        type: [Number, String],
        default: 16
    },
    color: {
        type: String,
        default: 'currentColor'
    },
})
</script>

<style scoped>

</style>
