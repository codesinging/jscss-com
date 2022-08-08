<template>
    <button
        :type="nativeType"
        class="pin-button inline-flex items-center justify-center font-medium disabled:cursor-not-allowed outline-none appearance-none space-x-2 transition-all duration-75"
        :class="[typeClass, shapeClass, heightClass, widthClass, paddingClass, fontSizeClass]"
        :disabled="isDisabled"
        @click="click"
    >
        <component :is="icon" :size="iconSize" v-if="icon && !loading"/>
        <pin-loading-icon v-if="loading" :size="iconSize"/>
        <span v-if="slots.default" class="inline-flex items-center justify-center"><slot></slot></span>
    </button>
</template>

<script setup>
import {computed, useSlots} from "vue";
import PinLoadingIcon from "./PinLoadingIcon";

const props = defineProps({
    nativeType: {
        type: String,
        default: 'button',
    },
    type: {
        type: String,
        default: 'default'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    },
    shape: {
        type: String,
        default: 'default'
    },
    size: {
        type: String,
        default: 'default'
    },
    icon: {
        type: [String, Object],
        default: ''
    },
})

const typeClass = computed(() => {
    const classes = {
        default: 'border border-gray-300 text-gray-600 bg-gray-50 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-50 disabled:border-opacity-25 disabled:text-opacity-30 disabled:bg-white',
        primary: 'border-transparent text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-500 disabled:text-opacity-50 disabled:bg-blue-300',
        success: 'border-transparent text-white bg-green-500 hover:bg-green-600 focus:bg-green-600 active:bg-green-500 disabled:text-opacity-50 disabled:bg-green-300',
        danger: 'border-transparent text-white bg-red-500 hover:bg-red-600 focus:bg-red-600 active:bg-red-500 disabled:text-opacity-50 disabled:bg-red-300',
    }

    return classes[props.type] || classes.default
})

const shapeClass = computed(() => {
    const classes = {
        default: 'rounded',
        square: 'rounded-none',
        rounded: 'rounded-md',
        pill: 'rounded-full',
        circle: 'rounded-full overflow-hidden',
    }
    return classes[props.shape] || classes.default
})

const heightClass = computed(() => {
    const classes = {
        small: 'h-8',
        default: 'h-10',
        large: 'h-12',
    }
    return classes[props.size] || classes.default
})

const widthClass = computed(() => {
    const classes = {
        small: 'w-8',
        default: 'w-10',
        large: 'w-12',
    }
    return props.shape === 'circle'
        ? (classes[props.size] || classes.default)
        : null
})

const paddingClass = computed(() => {
    const classes = {
        small: 'px-2',
        default: 'px-4',
        large: 'px-12',
    }
    return props.shape === 'circle' ? '' : (classes[props.size] || classes.default)
})

const fontSizeClass = computed(() => {
    const classes = {
        small: 'text-xs',
        default: 'text-sm',
        large: 'text-base',
    }
    return classes[props.size] || classes.default
})

const iconSize = computed(() => {
    const sizes = {
        small: '.75rem',
        default: '1rem',
        large: '1.25rem',
    }
    return sizes[props.size] || sizes.default
})

const isDisabled = computed(() => props.disabled || props.loading)

const slots = useSlots()

const emits = defineEmits(['click'])

const click = () => emits('click')
</script>

<style scoped>
.pin-input-prepend .pin-button,
.pin-input-append .pin-button {
    border-left-width: 0;
    border-right-width: 0;
}

.pin-input-prepend .pin-button {
    border-radius: .25rem 0 0 .25rem;
}

.pin-input-append .pin-button {
    border-radius: 0 .25rem .25rem 0;
}
</style>
