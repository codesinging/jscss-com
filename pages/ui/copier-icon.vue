<template>
    <div class="container space-y-4 py-4">
        <div class="space-x-4 flex items-center flex-row">
            <pin-copier-icon content="content"/>
            <pin-input v-model="content">
                <template #suffix>
                    <pin-copier-icon :content="content"/>
                </template>
            </pin-input>
        </div>
    </div>
</template>

<script setup>
import PinCopierIcon from "../../components/ui/basic/PinCopierIcon";
import PinInput from "../../components/ui/form/PinInput";
import {ref} from "vue";

const content = ref('hello')
</script>

<style scoped>

</style>
