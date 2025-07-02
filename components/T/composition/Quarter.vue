<script setup lang="ts">
const props = withDefaults(defineProps<{
    ui?: {
        container: string
    }
}>(), {
    ui: () => ({ container: '' }),
})
defineOptions({
    inheritAttrs: false,
})
</script>
<template>
    <div :class="`grid grid-rows-2 grid-cols-2 w-full h-full gap-4 ${props.ui?.container}`">
        <div class="flex items-center justify-center min-h-[120px] min-w-[120px]" v-bind="$attrs">
            <slot name="1" />
        </div>
        <div class="flex items-center justify-center min-h-[120px] min-w-[120px]" v-bind="$attrs">
            <slot name="2" />
        </div>
        <div class="flex items-center justify-center min-h-[120px] min-w-[120px]" v-bind="$attrs">
            <slot name="3" />
        </div>
        <div class="flex items-center justify-center min-h-[120px] min-w-[120px]" v-bind="$attrs">
            <slot name="4" />
        </div>
    </div>
</template>
