<script setup lang="ts">
import useInView from '~/composables/useInView'
const { threshold } = withDefaults(defineProps<{
    threshold?: number
    animation: string
}>(), { threshold: 1 })

const slots = useSlots()
const element = ref<HTMLElement | null>(null)
function setElementRef(el: HTMLElement | ComponentPublicInstance | null) {
    if (el) element.value = (el as ComponentPublicInstance).$el ?? el
}
const inView = useInView(element, threshold)
</script>

<template>
    <template v-if="slots.default">
        <template v-for="(child, _) in slots.default()">
            <component :ref="setElementRef" :is="child"
                :class="[inView ? animation : '', inView ? 'visible' : 'invisible']" />
        </template>
    </template>
</template>