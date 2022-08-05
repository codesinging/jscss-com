<template>
    <div v-if="visible" @click="click" class="cursor-pointer inline-flex items-center">
        <component :is="icon" :size="size"/>
    </div>
</template>

<script setup>
import {NewComputer, Moon, SunOne} from "@icon-park/vue-next";
import {useColorMode} from "@vueuse/core";
import {computed, nextTick, ref, watch} from "vue";

defineProps({
    size: {
        type: [String, Number],
        default: 16,
    }
})

const visible = ref(false)

const mode = useColorMode({emitAuto: true})

const modes = ['auto', 'light', 'dark']
const index = computed(() => modes.findIndex(item => item === mode.value))
const icons = [NewComputer, SunOne, Moon]
const icon = computed(() => icons[index.value])

nextTick(() => visible.value = true)

const click = () => {
    mode.value = modes[index.value + 1] ?? modes[0]
}

</script>

<style scoped>

</style>
