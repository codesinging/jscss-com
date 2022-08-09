<template>
    <pin-button @click="copy(content)" :type="type" :disabled="disabled" :shape="shape" :size="size" :icon="icon">{{ showText }}</pin-button>
</template>

<script setup>
import PinButton from "./PinButton";
import {Copy, Check} from '@icon-park/vue-next';
import {useClipboard} from "@vueuse/core";
import {computed} from "vue";

const props = defineProps({
    type: {
        type: String,
        default: 'default'
    },
    disabled: Boolean,
    shape: {
        type: String,
        default: 'default'
    },
    size: {
        type: String,
        default: 'default'
    },
    content: [String, Number, Boolean],
    text: String,
    copiedText: {
        type: String,
        default: '已复制',
    },
})

const {copy, copied} = useClipboard()

const icon = computed(() => props.text ? null : (copied.value ? Check : Copy))

const showText = computed(() => props.text ? (copied.value ? props.copiedText : props.text) : undefined)
</script>

<style scoped>

</style>
