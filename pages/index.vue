<template>
    <div class="container space-y-2">
        <div>
            <pin-loading-icon/>
        </div>
        <div class="space-x-2">
            <pin-button>普通按钮</pin-button>
            <pin-button type="primary">主要按钮</pin-button>
            <pin-button type="success">危险按钮</pin-button>
            <pin-button type="danger">危险按钮</pin-button>
        </div>
        <div class="space-x-2">
            <pin-button disabled>普通按钮</pin-button>
            <pin-button disabled type="primary">主要按钮</pin-button>
            <pin-button disabled type="success">危险按钮</pin-button>
            <pin-button disabled type="danger">危险按钮</pin-button>
        </div>
        <div class="space-x-2">
            <pin-button loading>普通按钮</pin-button>
            <pin-button loading type="primary">主要按钮</pin-button>
            <pin-button loading type="success">危险按钮</pin-button>
            <pin-button loading type="danger">危险按钮</pin-button>
        </div>
        <div class="space-x-2">
            <pin-button :icon="Refresh">普通按钮</pin-button>
            <pin-button type="primary" :icon="Refresh">主要按钮</pin-button>
            <pin-button type="success" :icon="Refresh">危险按钮</pin-button>
            <pin-button type="danger" :icon="Refresh">危险按钮</pin-button>
        </div>
        <div class="space-x-2">
            <pin-button shape="circle" :icon="Refresh"></pin-button>
            <pin-button shape="circle" type="primary" size="small" :icon="Refresh"></pin-button>
            <pin-button shape="circle" type="success" :icon="Refresh"></pin-button>
            <pin-button shape="circle" type="danger" size="large" :icon="Refresh"></pin-button>
        </div>
        <div class="space-x-2">
            <pin-button type="primary" size="large">主要按钮</pin-button>
            <pin-button type="primary">主要按钮</pin-button>
            <pin-button type="primary" size="small">主要按钮</pin-button>
        </div>
    </div>
</template>

<script setup>
import {useHead} from "nuxt/app";
import {useSite} from "../composables/useSite";
import PinLoadingIcon from "../components/icons/PinLoadingIcon";
import PinButton from "../components/icons/PinButton";
import {Refresh} from "@icon-park/vue-next";

const site = useSite()

useHead({
    title: '首页',
})
</script>

<style scoped>

</style>
