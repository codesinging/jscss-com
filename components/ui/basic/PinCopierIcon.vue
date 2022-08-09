<template>
    <component @click="copy(content)" :is="icon" class="cursor-pointer"/>
</template>

<script setup>
import {useClipboard} from "@vueuse/core";
import {Copy, Check} from "@icon-park/vue-next";
import {computed} from "vue";

defineProps({
    content: {
        type: [String, Number, Boolean],
        default: '',
    },
})

const {copy, copied} = useClipboard()

const icon = computed(() => copied.value ? Check : Copy)
</script>

<style scoped>

</style>
