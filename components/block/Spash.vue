<script setup lang="ts">
import useHyperspace from '~/composables/sketches/useHyperspace';
const controls = reactive({
    width: 0,
    height: 0,
    canvasId: 'hyperspace',
    speed: 10,
})
const container = ref<HTMLDivElement | null>(null);

onMounted(() => {
    controls.width = container.value?.clientWidth ?? 0;
    controls.height = container.value?.clientHeight ?? 0;
})
</script>

<template>
    <div>
        <TLayoutHero>
            <TUtilityOverlay pointer-events="foreground">
                <template #foreground>
                    <div class="animate-fade-in flex flex-col h-full items-center justify-center sm:gap-4 gap-3">
                        <h1
                            class="sm:text-6xl text-5xl pb-1 justify-center bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text font-extrabold text-transparent">
                            BayAreaSecure
                        </h1>
                        <h2 class="text-xl text-center font-extrabold inline-flex sm:flex-row flex-col sm:gap-2 ">
                            <span>Beyond Quantum:</span>
                            <span>Secure Today, Safe Tomorrow</span>
                        </h2>
                        <UButton icon="i-lucide-rocket" type="button" color="neutral" variant="outline" :ui="{
                            base: 'cursor-pointer fade-in-up',
                            leadingIcon: 'text-primary cursor-hover',
                        }" @click="">
                            Join The Movement
                        </UButton>
                    </div>
                </template>
                <template #background>
                    <div ref="container" class="h-96">
                        <ProcessingCanvas :sketch="useHyperspace(controls)" :canvasId="controls.canvasId" />
                    </div>
                </template>
            </TUtilityOverlay>
        </TLayoutHero>
        <USeparator :ui="{ root: '-mt-4', avatar: 'z-10 outline-1 outline-primary' }" :avatar="{
            src: 'images/sfnetworks_logo.png',
            size: 'md',
            alt: 'avatar',
        }" />
    </div>
</template>