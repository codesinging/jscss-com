<template>
    <svg :width="size" :height="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path d="M12 6 H6 V42 H28 V24 H20 V6 H42 V42 H36" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
    </svg>
</template>

<script setup>
defineProps({
    size: {
        type: [Number, String],
        default: '1rem'
    },
    strokeWidth: {
        type: Number,
        default: 4
    },
})
</script>

<style scoped>

</style>
