<template>
    <span @click="click" class="cursor-pointer">
        <component :is="icon"></component>
    </span>
</template>

<script setup>
import {NewComputer, Moon, SunOne} from "@icon-park/vue-next";
import {useColorMode} from "@vueuse/core";
import {computed, ref} from "vue";

const mode = useColorMode()

const modes = ['auto', 'light', 'dark']
const index = ref(0)
const icons = [NewComputer, SunOne, Moon]
const icon = computed(() => icons[index.value])

const click = () => {
    index.value = (index.value >= modes.length - 1) ? 0 : (index.value + 1)
    mode.value = modes[index.value]
}
</script>

<style scoped>

</style>
