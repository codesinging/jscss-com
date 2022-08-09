<template>
    <div class="container space-y-4 py-4">
        <div class="grid grid-cols-3 gap-4">
            <pin-card>
                Content
            </pin-card>
            <pin-card border>
                Content
            </pin-card>
            <pin-card border rounded>
                Content
            </pin-card>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <pin-card border rounded>
                Content
            </pin-card>
            <pin-card border rounded shadow>
                Content
            </pin-card>
            <pin-card border rounded shadow-when-hover>
                Content
            </pin-card>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <pin-card border rounded title="标题">
                Content
            </pin-card>
            <pin-card border rounded subtitle="副标题">
                Content
            </pin-card>
            <pin-card border rounded title="标题" subtitle="副标题">
                Content
            </pin-card>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <pin-card border rounded title="标题" :icon="Edit">
                Content
            </pin-card>
            <pin-card border rounded subtitle="副标题" :icon="Edit">
                Content
            </pin-card>
            <pin-card border rounded title="标题" subtitle="副标题" :icon="Edit" extra="这是额外内容">
                Content
            </pin-card>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <pin-card title="标题" :icon="Edit">
                Content
            </pin-card>
            <pin-card subtitle="副标题" :icon="Edit">
                Content
            </pin-card>
            <pin-card title="标题" subtitle="副标题" :icon="Edit" extra="这是额外内容">
                Content
            </pin-card>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <pin-card border rounded title="标题" :icon="Edit" footer="这里是尾部内容">
                Content
            </pin-card>
            <pin-card border rounded subtitle="副标题" :icon="Edit">
                Content
                <template #footer>
                    <div>尾部左侧内容</div>
                    <pin-button size="small" type="danger">删除</pin-button>
                </template>
            </pin-card>
            <pin-card border rounded title="标题" subtitle="副标题" :icon="Edit" extra="这是额外内容">
                <template #extra>
                    <pin-button size="small">刷新</pin-button>
                </template>
                Content
                <template #footer>
                    <div class="flex items-center justify-evenly w-full">
                        <pin-button size="small" type="primary">修改</pin-button>
                        <pin-button size="small" type="success">查看</pin-button>
                        <pin-button size="small" type="danger">删除</pin-button>
                    </div>
                </template>
            </pin-card>
        </div>
    </div>
</template>

<script setup>
import PinCard from "../../components/icons/PinCard";
import {Edit} from "@icon-park/vue-next";
import PinButton from "../../components/icons/PinButton";
</script>

<style scoped>

</style>
