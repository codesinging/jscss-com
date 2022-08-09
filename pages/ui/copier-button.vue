<template>
    <div class="container py-4 space-y-4">
        <div class="space-x-2 flex items-center flex-row">
            <pin-copier-button content="内容"></pin-copier-button>
            <pin-copier-button content="内容" disabled></pin-copier-button>
            <pin-copier-button content="内容" type="primary"></pin-copier-button>
            <pin-copier-button content="内容" type="success"></pin-copier-button>
            <pin-copier-button content="内容" type="danger"></pin-copier-button>
            <pin-copier-button content="content" text="复制内容" copied-text="复制完成"></pin-copier-button>
            <pin-copier-button content="内容" size="small"></pin-copier-button>
            <pin-copier-button content="内容" size="large"></pin-copier-button>
        </div>
        <div class="space-x-2 flex items-center flex-row">
            <pin-copier-button content="内容"></pin-copier-button>
            <pin-copier-button content="内容" shape="square"></pin-copier-button>
            <pin-copier-button content="内容" shape="rounded"></pin-copier-button>
            <pin-copier-button content="内容" shape="pill"></pin-copier-button>
            <pin-copier-button content="内容" shape="circle"></pin-copier-button>
        </div>
        <div class="space-x-2 flex items-center flex-row">
            <pin-input v-model="content1">
                <template #append>
                    <pin-copier-button :content="content1"/>
                </template>
            </pin-input>
            <pin-input v-model="content2">
                <template #append>
                    <pin-copier-button :content="content2" text="复制"/>
                </template>
            </pin-input>
        </div>
    </div>
</template>

<script setup>
import PinInput from "../../components/form/PinInput";
import PinCopierButton from "../../components/common/PinCopierButton";
import {ref} from "vue";
import {useClipboard} from "@vueuse/core";

const content1 = ref('hello')
const content2 = ref('world')

const {text} = useClipboard()
</script>

<style scoped>

</style>
