<template>
    <div class="container space-y-2 py-4">
        <div class="grid grid-cols-4 gap-4">
            <pin-input v-model="msg" autofocus clearable/>
            <pin-input v-model="msg" max-length="10" show-word-limit clearable/>
            <pin-input v-model="msg" disabled/>
            <pin-input v-model="msg" loading/>
        </div>
        <div class="grid grid-cols-4 gap-4">
            <pin-input v-model="msg" prepend="账号" clearable/>
            <pin-input v-model="msg" append=".com" clearable/>
            <pin-input v-model="msg" append=".com" clearable/>
            <pin-input v-model="msg" prepend="https://" append=".com" clearable/>
        </div>
        <div class="grid grid-cols-4 gap-4">
            <pin-input v-model="msg">
                <template #prefix>https://</template>
                <template #suffix>.com</template>
            </pin-input>
            <pin-input v-model="msg">
                <template #prefix>
                    <refresh/>
                </template>
                <template #suffix>
                    <refresh/>
                </template>
            </pin-input>
            <pin-input v-model="msg">
                <template #append>
                    <span class="px-4"><refresh/></span>
                </template>
            </pin-input>
            <pin-input v-model="msg">
                <template #prepend>
                    <span class="px-4"><refresh/></span>
                </template>
                <template #append>
                    <span class="px-4"><refresh/></span>
                </template>
            </pin-input>
        </div>
        <div class="grid grid-cols-4 gap-4">
            <pin-input v-model="msg">
                <template #prepend>
                    <pin-button>选择图标</pin-button>
                </template>
            </pin-input>
            <pin-input v-model="msg">
                <template #append>
                    <pin-button>选择图标</pin-button>
                </template>
            </pin-input>
            <pin-input v-model="msg">
                <template #prepend>
                    <pin-button>选择图标</pin-button>
                </template>
                <template #append>
                    <pin-button>预览</pin-button>
                </template>
            </pin-input>
            <pin-input v-model="msg">
                <template #append>
                    <pin-button loading>选择图标</pin-button>
                </template>
            </pin-input>
        </div>
        <div class="space-x-4">
            <pin-button>提交</pin-button>
        </div>
    </div>
</template>

<script setup>
import {Refresh} from "@icon-park/vue-next";
import PinButton from "../../components/common/PinButton";
import PinInput from "../../components/form/PinInput";
import {ref} from "vue";

const msg = ref('')
</script>

<style scoped>

</style>
