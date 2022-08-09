<template>
    <div class="container py-4 space-y-4">
        <div class="space-x-2">
            <pin-button>普通</pin-button>
            <pin-button type="primary">主要</pin-button>
            <pin-button type="success">成功</pin-button>
            <pin-button type="danger">危险</pin-button>
        </div>
        <div class="space-x-2">
            <pin-button size="small">普通</pin-button>
            <pin-button size="small" type="primary">主要</pin-button>
            <pin-button size="small" type="success">成功</pin-button>
            <pin-button size="small" type="danger">危险</pin-button>
        </div>
        <div class="space-x-2">
            <pin-button>普通按钮</pin-button>
            <pin-button type="primary">主要按钮</pin-button>
            <pin-button type="success">成功按钮</pin-button>
            <pin-button type="danger">危险按钮</pin-button>
        </div>
        <div class="space-x-2">
            <pin-button>普通按钮</pin-button>
            <pin-button shape="square" type="primary">主要按钮</pin-button>
            <pin-button shape="rounded" type="success">成功按钮</pin-button>
            <pin-button shape="pill" type="danger">危险按钮</pin-button>
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
        <div class="grid grid-cols-4 gap-4">
            <div>
                <pin-button class="w-full" type="primary">主要按钮</pin-button>
            </div>
            <div>
                <pin-button type="primary">主要按钮</pin-button>
            </div>
            <div>
                <pin-button type="primary">主要按钮</pin-button>
            </div>
            <div>
                <pin-button type="primary">主要按钮</pin-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {Refresh} from "@icon-park/vue-next";
import PinButton from "../../components/icons/PinButton";
</script>

<style scoped>

</style>
