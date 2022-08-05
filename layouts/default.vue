<template>
    <div class="min-h-screen bg-white text-gray-600 dark:bg-gray-700 dark:text-gray-300">
        <nuxt-loading-indicator :height="1"/>
        <page-header/>
        <slot></slot>
        <page-footer class="fixed bottom-0 inset-x-0"/>
    </div>
</template>

<script setup>
import PageFooter from "../components/common/PageFooter";
import PageHeader from "../components/common/PageHeader";
</script>

<style scoped>

</style>
