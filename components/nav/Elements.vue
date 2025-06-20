<script setup lang="ts">
defineProps<{
    labels: string[]
    elements:  globalThis.Ref<(HTMLElement | globalThis.ComponentPublicInstance | null)[], (HTMLElement | globalThis.ComponentPublicInstance | null)[]>
}>()

</script>
<template>
    <div class="flex flex-col items-center gap-4 rounded-lg w-fit box-shadow-lg p-4 outline-2 outline-primary bg-neutral-900 m-10">
      <UButtonGroup orientation="vertical">
            <UButton
            v-for="(element, idx) in elements"
            :key="idx"
            :to="`#${idx}`"
            size="md"
            variant="ghost"
            :label="idx < labels.length ? labels[idx] : idx"
            :ui="{
                base: 'justify-center border-1 border-primary-900',
            }"
            @click="element?.scrollIntoView({ behavior: 'smooth' })"
            />
      </UButtonGroup>
    </div>
</template>