<script setup lang="ts">
const managerRef = ref()
const elements = computed(() => managerRef.value?.elementRefs)
</script>
<template>
    <UtilityNavSite />
    <UtilityNavPage :elements="elements" :labels="['Header', 'Section', 'Footer']"
        class="fixed top-0 left-0 hidden sm:block" />
    <LayoutTransition ref="managerRef">
        <template #transition>
            <USeparator orientation="horizontal" class="w-full" icon="i-heroicons-arrow-down" />
        </template>

        <LayoutHero class="gap-4">
            <div class="flex flex gap-2 animate-fade-in">
                <div class="flex flex-col items-center gap-4">
                    <h1 class="text-2xl font-bold">Pros:</h1>

                    <UtilityPlaceholder />
                </div>
                <USeparator orientation="vertical" class="mt-6" />
                <div class="flex flex-col items-center gap-4">
                    <h1 class="text-2xl font-bold">Cons:</h1>
                    <UtilityPlaceholder />
                </div>
            </div>
        </LayoutHero>

        <LayoutHero full-height>
            <LayoutSection class="animate-fade-in">
                <UtilityOverlay pointer-events="background">
                    <template #background>
                        <CompositionSlice :count="4" orientation="horizontal">
                            <template #1>
                                <UtilityPlaceholder />
                            </template>
                            <template #2>
                                <UtilityPlaceholder />
                            </template>
                            <template #4>
                                <UtilityPlaceholder />
                            </template>
                            <template #3>
                                <CompositionQuarter
                                    class="hover:scale-105 hover:bg-accented/10 transition-all duration-300">
                                    <template #1>
                                        <UtilityPeek animation="animate-fade-in-right">
                                            <UtilityPlaceholder />
                                        </UtilityPeek>
                                    </template>
                                    <template #2>
                                        <UtilityPeek animation="animate-fade-in-left">
                                            <UtilityPlaceholder />
                                        </UtilityPeek>
                                    </template>
                                    <template #3>
                                        <UtilityPeek animation="animate-fade-in-right">
                                            <UtilityPlaceholder />
                                        </UtilityPeek>
                                    </template>
                                    <template #4>
                                        <UtilityPeek animation="animate-fade-in-left">
                                            <UtilityPlaceholder />
                                        </UtilityPeek>
                                    </template>
                                </CompositionQuarter>
                            </template>
                        </CompositionSlice>
                    </template>
                    <template #foreground>
                        <div class="flex flex-col items-center justify-center h-full">
                            <h1 class="text-2xl font-extrabold text-center ">
                                You're a good person
                            </h1>
                        </div>
                    </template>
                </UtilityOverlay>
            </LayoutSection>
        </LayoutHero>
    </LayoutTransition>
</template>