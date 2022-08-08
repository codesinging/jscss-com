<template>
    <div class="bg-white min-h-screen text-gray-600 dark:bg-gray-700 dark:text-gray-300">
        <nuxt-loading-indicator :height="1"/>
        <page-header/>
        <slot></slot>
        <page-footer/>
    </div>
</template>

<script setup>
import PageFooter from "../components/common/PageFooter";
import PageHeader from "../components/common/PageHeader";
</script>

<style scoped>

</style>
