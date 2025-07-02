<script setup lang="ts">
const { elements } = defineProps<{
    labels: string[]
    elements: Ref<HTMLElement[]>
}>()
const scrollIntoView = (element: HTMLElement) => {
    element.scrollIntoView({ behavior: 'smooth' })
}
</script>
<template>
    <ClientOnly>
        <div
            class="animate-fade-in flex flex-col items-center gap-4 rounded-lg w-fit p-4 bg-accented/20 shadow-xl m-10 transition-all duration-300 z-99">
            <UButtonGroup orientation="vertical">
                <UButton v-for="(element, idx) in elements as unknown as HTMLElement[]" :key="idx"
                    :label="idx < labels.length ? labels[idx] : idx.toString()" size="md" variant="ghost" :ui="{
                        base: 'justify-center border-1 border-primary-900',
                    }" @click="() => scrollIntoView(element)" />
            </UButtonGroup>
        </div>
    </ClientOnly>

</template>