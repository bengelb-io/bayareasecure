<script setup>
defineProps({
    fullHeight: { type: Boolean, default: false },
    fullWidth: { type: Boolean, default: true }
})
defineOptions({
    inheritAttrs: false
})
</script>

<template>
    <div :class="[
        fullWidth ? 'w-screen' : 'w-full',
        fullHeight ? 'h-screen' : 'h-auto',
        'max-w-full',
        'py-8 sm:py-16'
    ]">
        <div class="flex flex-col items-center justify-center h-full overflow-hidden" v-bind="$attrs">
            <slot />
        </div>
    </div>
</template>