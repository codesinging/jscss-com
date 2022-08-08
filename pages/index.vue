<template>
    <div class="container">
        index
    </div>
</template>

<script setup>
import {useHead} from "nuxt/app";
import {useSite} from "../composables/useSite";
import PinButton from "../components/icons/PinButton";
import {Refresh} from "@icon-park/vue-next";
import PinInput from "../components/icons/PinInput";
import {ref} from "vue";

const site = useSite()

const msg = ref('')
const inputMsg = ref('')
const changeMsg = ref('')

const onInput = value => inputMsg.value = value
const onChange = value => changeMsg.value = value

useHead({
    title: '首页',
})
</script>

<style scoped>

</style>
