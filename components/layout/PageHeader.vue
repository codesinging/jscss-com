<template>
    <div class="bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
        <div class="container h-14 flex items-center justify-between px-4 md:px-0">
            <div class="space-x-12 h-full flex items-center">
                <div class="space-x-2 flex items-center">
                    <nuxt-link to="/" @click="toggleDrawer">
                        <jscss-logo size="24" class="animate-pulse"/>
                    </nuxt-link>
                    <nuxt-link to="/" @click="toggleDrawer" class="text-lg">
                        {{ site.name }}
                    </nuxt-link>
                </div>
                <div class="space-x-4 h-full hidden lg:flex">
                    <nuxt-link v-for="(menu,index) in menus" :key="index" :to="menu.url" class="nav-item">{{ menu.name }}</nuxt-link>
                </div>
            </div>
            <div class="space-x-2 hidden lg:flex items-center">
                <color-mode-switcher size="20"/>
            </div>
            <div class="flex lg:hidden items-center">
                <div @click="toggleDrawer" class="h-10 w-8 flex items-center justify-center">
                    <close v-if="drawerVisible" size="18"/>
                    <hamburger-button v-else size="20"/>
                </div>
            </div>
            <div v-if="drawerVisible" class="fixed block lg:hidden top-14 inset-x-0 bottom-0 px-4 py-4 bg-white dark:bg-gray-700 transition-all overflow-y-auto z-20">
                <div class="divide-y border-b">
                    <nuxt-link v-for="(menu,index) in menus" :key="index" :to="menu.url" @click="toggleDrawer" class="flex items-center justify-between px-2 h-12">
                        <span>{{ menu.name }}</span>
                        <span class="text-gray-400"><arrow-right/></span>
                    </nuxt-link>
                </div>
                <div class="mt-4">
                    <div class="flex items-center justify-between space-x-2 bg-gray-100 dark:bg-gray-800 h-12 px-4">
                        <span>外观</span>
                        <color-mode-switcher size="20"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import JscssLogo from "../images/JscssLogo";
import {HamburgerButton, Close, ArrowRight} from "@icon-park/vue-next";
import {ref} from "vue";
import useSite from "../../composables/useSite";
import ColorModeSwitcher from "../ui/basic/ColorModeSwitcher";

const site = useSite()

const menus = [
    {name: '社区', url: '/club'},
    {name: '项目', url: '/projects'},
    {name: '导航', url: '/nav'},
    {name: '工具', url: '/tools'},
    {name: '书籍', url: '/books'},
]

const drawerVisible = ref(false)

const toggleDrawer = () => drawerVisible.value = !drawerVisible.value

</script>

<style scoped>
.nav-item {
    @apply h-full flex items-center block px-6 hover:bg-gray-200 dark:hover:bg-gray-900;
}

.router-link-active.nav-item {
    @apply bg-gray-200 dark:bg-gray-900;
}
</style>
