<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core'
import { ref, watch } from 'vue'

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const breakpoint = useBreakpoint()

const props = withDefaults(defineProps<{
    xs: () => void
    sm: () => void
    md: () => void
    lg: () => void
    xl: () => void
}>(), {
    xs: () => { },
    sm: () => { },
    md: () => { },
    lg: () => { },
    xl: () => { }
})

watch(breakpoint, (newBreakpoint) => {
    props[newBreakpoint as keyof typeof props]()
})
</script>
<template>
    <slot />
</template>