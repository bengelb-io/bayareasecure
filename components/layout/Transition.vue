<script setup lang="ts">

const slots = useSlots()
const childRefs: Ref<(HTMLElement | ComponentPublicInstance | null)[]> = ref([])

function setChildRef(el: HTMLElement | ComponentPublicInstance | null, idx: number) {
    if (el) childRefs.value[idx] = (el as ComponentPublicInstance).$el ?? el
}
defineExpose({
    elementRefs: childRefs
})
</script>

<template>
    <template v-if="slots.default">
        <template v-for="(child, idx) in slots.default()">
            <component :is="child" :ref="(el: any) => setChildRef(el, idx)" />
            <template v-if="idx < slots.default().length - 1 && slots.transition">
                <component :is="slots.transition()[0]" class="my-6" />
            </template>
        </template>
    </template>
</template>
