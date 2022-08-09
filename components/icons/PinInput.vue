<template>
    <div class="pin-input" @mouseenter="hovering=true" @mouseleave="hovering=false">
        <div v-if="hasPrepend" class="pin-input-prepend" :class="statusClasses">
            <slot name="prepend">
                <span class="inline-block px-4">{{ prepend }}</span>
            </slot>
        </div>

        <div class="pin-input-body" :class="containerClasses">
            <div v-if="hasPrefix" class="pin-input-tag ml-2">
                <slot name="prefix">{{ prefix }}</slot>
            </div>

            <input
                :type="type"
                :placeholder="placeholder"
                :readonly="readonly"
                :disabled="isDisabled"
                :form="form"
                :autocomplete="autocomplete?'on':'off'"
                :autofocus="autofocus"
                :tabindex="tabindex"
                :maxlength="maxLength"
                :minlength="minLength"
                @input="onInput"
                @focus="onFocus"
                @blur="onBlur"
                @change="onChange"
                ref="input"
                class="pin-input-input"
                :class="inputClasses"
                v-model="modelValue"
            >

            <div v-if="hasSuffix" class="pin-input-tag mr-2">
                <slot name="suffix">{{ suffix }}</slot>
            </div>

            <div v-if="isWordLimit" class="pin-input-tag mr-2">{{ wordLength }}/{{ wordLimit }}</div>

            <div v-if="isClearable" @click="onClear" class="pin-input-tag hover:text-gray-600 mr-2 cursor-pointer">
                <close/>
            </div>

            <div v-if="loading" class="pin-input-tag mr-2">
                <pin-loading-icon/>
            </div>
        </div>

        <div v-if="hasAppend" class="pin-input-append" :class="statusClasses">
            <slot name="append">
                <span class="inline-block px-4">{{ append }}</span>
            </slot>
        </div>
    </div>
</template>

<script setup>
import {computed, ref, useSlots, watch} from "vue";
import {CloseOne as Close} from "@icon-park/vue-next";
import PinLoadingIcon from "./PinLoadingIcon";

const props = defineProps({
    modelValue: [String, Number],
    type: {
        type: String,
        default: 'text',
    },
    size: {
        type: String,
        default: 'default',
    },
    align: {
        type: String,
        default: 'left',
    },
    prepend: String,
    append: String,
    prefix: String,
    suffix: String,
    disabled: Boolean,
    clearable: Boolean,
    showWordLimit: Boolean,
    loading: Boolean,
    form: String,
    name: String,
    placeholder: String,
    readonly: Boolean,
    autocomplete: Boolean,
    autofocus: Boolean,
    tabindex: String,
    maxLength: [String, Number],
    minLength: [String, Number],
})

const slots = useSlots()

const input = ref()

const hovering = ref(false)

const focused = ref(false)

const status = ref('inputting')

const isDisabled = computed(() => props.disabled || props.loading)

const isClearable = computed(() => props.clearable && props.modelValue !== '' && !isDisabled.value && !props.readonly && (focused.value || hovering.value))

const hasPrepend = computed(() => (props.prepend ?? '').length > 0 || slots.prepend !== undefined)

const hasAppend = computed(() => (props.append ?? '').length > 0 || slots.append !== undefined)

const hasPrefix = computed(() => (props.prefix ?? '').length > 0 || slots.prefix !== undefined)

const hasSuffix = computed(() => (props.suffix ?? '').length > 0 || slots.suffix !== undefined)

const isWordLimit = computed(() => props.showWordLimit && props.maxLength)

const wordLimit = computed(() => props.maxLength)

const wordLength = computed(() => props.modelValue.length)

const statusClasses = computed(() => {
    return {
        inputting: 'border-gray-300',
        error: 'border-red-400',
        success: 'border-green-400'
    }[status.value]
})

const containerClasses = computed(() => {
    let classes = [statusClasses.value]

    hasPrepend.value || classes.push('rounded-l')
    hasAppend.value || classes.push('rounded-r')

    isDisabled.value && classes.push('pin-input-disabled')

    return classes
})

const inputClasses = computed(() => {
    return {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    }[props.align]
})

const emits = defineEmits(['update:modelValue', 'input', 'change', 'focus', 'blur', 'clear'])

const onInput = event => {
    emits('input', event.target.value)
}

const onFocus = event => {
    focused.value = true
    emits('focus', event)
}

const onBlur = event => {
    focused.value = false
    emits('blur', event)
}

const onChange = event => {
    emits('change', event.target.value)
}

const onClear = event => {
    emits('update:modelValue', '')
    emits('change', '')
    emits('clear', event)
    focus()
}

const focus = () => input.value.focus()

const blur = () => input.value.blur()

const select = () => input.value.select()

defineExpose({
    focus,
    blur,
    select,
})

watch(() => props.modelValue, value => {
    emits('update:modelValue', value)
})
</script>

<style scoped>
.pin-input {
    @apply flex items-center text-gray-500 text-sm h-10 rounded overflow-hidden;
    @apply dark:text-gray-300;
}

.pin-input-prepend,
.pin-input-append {
    @apply flex-none flex items-center justify-center h-full border-y bg-gray-100 text-gray-500 overflow-hidden;
    @apply dark:border-gray-400 dark:bg-gray-500 dark:text-gray-200;
}

.pin-input-prepend {
    @apply border-l rounded-l;
}

.pin-input-append {
    @apply border-r rounded-r ;
}

.pin-input-body {
    @apply flex-auto flex items-center h-full border focus-within:border-blue-400 overflow-hidden;
    @apply dark:border-gray-400 dark:focus-within:border-blue-300;
}

.pin-input-input {
    @apply flex-auto bg-transparent border-none rounded w-full h-full focus:outline-none disabled:cursor-not-allowed px-2;
}

.pin-input-tag {
    @apply flex-none flex items-center text-gray-400;
}

.pin-input-disabled {
    @apply bg-gray-50 text-gray-400 cursor-not-allowed;
    @apply dark:bg-gray-600 dark:text-opacity-50;
}
</style>
