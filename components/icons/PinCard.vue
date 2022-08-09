<template>
    <div class="pin-card" :class="containerClasses">
        <div v-if="hasHeader" class="pin-card-header">
            <slot name="header">
                <div class="pin-card-header-main">
                    <slot v-if="hasIcon" name="icon">
                        <component v-if="icon" :is="icon" size="20" class="pin-card-icon"/>
                    </slot>
                    <slot v-if="hasTitle" name="title">
                        <span class="pin-card-title">{{ title }}</span>
                    </slot>
                    <slot v-if="hasSubtitle" name="subtitle">
                        <span class="pin-card-subtitle">{{ subtitle }}</span>
                    </slot>
                </div>
                <div v-if="hasExtra" class="pin-card-header-extra">
                    <slot name="extra">
                        <div class="pin-card-header-extra">{{ extra }}</div>
                    </slot>
                </div>
            </slot>
        </div>
        <div class="pin-card-content" :class="contentClasses">
            <slot></slot>
        </div>
        <div v-if="hasFooter" class="pin-card-footer">
            <slot name="footer">{{ footer }}</slot>
        </div>
    </div>
</template>

<script setup>
import {computed, useSlots} from "vue";

const props = defineProps({
    title: String,
    subtitle: String,
    icon: [String, Object],
    extra: String,
    border: Boolean,
    rounded: Boolean,
    shadow: Boolean,
    shadowWhenHover: Boolean,
    contentPadding: {
        type: Boolean,
        default: true
    },
    footer: String,
})

const slots = useSlots()

const hasTitle = computed(() => props.title || slots.title !== undefined)
const hasSubtitle = computed(() => props.subtitle || slots.subtitle !== undefined)
const hasIcon = computed(() => props.icon || slots.icon !== undefined)
const hasExtra = computed(() => props.extra || slots.extra !== undefined)

const hasHeader = computed(() => hasTitle.value || hasSubtitle.value || hasIcon.value || hasExtra.value)

const hasFooter = computed(() => props.footer || slots.footer)

const containerClasses = {
    border: props.border,
    rounded: props.rounded,
    'shadow-lg': props.shadow,
    'hover:shadow-lg': props.shadowWhenHover,
}

const contentClasses = {
    'p-4': props.contentPadding,
}
</script>

<style scoped>
.pin-card {
    @apply overflow-hidden;
    @apply bg-white;
    @apply dark:bg-gray-800 dark:border-gray-500;
}

.pin-card-header {
    @apply flex items-center justify-between border-b h-14 px-4;
    @apply dark:border-gray-500;
}

.pin-card-header-main {
    @apply flex items-center space-x-2;
}

.pin-card-icon {

}

.pin-card-title {
    @apply text-base;
}

.pin-card-subtitle {
    @apply text-sm text-gray-500;
    @apply dark:text-gray-300;
}

.pin-card-header-extra {
    @apply text-sm text-gray-500;
    @apply dark:text-gray-300;
}

.pin-card-footer {
    @apply flex items-center justify-between border-t h-12 px-4 text-sm text-gray-500;
    @apply dark:border-gray-500 dark:text-gray-300;
}
</style>
