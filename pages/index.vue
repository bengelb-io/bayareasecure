<script setup lang="ts">
const managerRef = ref()
const elements = computed(() => managerRef.value?.elementRefs)
const breakpoint = useBreakpoint()
watch(breakpoint, console.log)
</script>
<template>
    <UtilityNavSite />
    <UtilityNavPage :elements="elements" :labels="['Header', 'Section #1', 'Section #2', 'Footer']"
        class="fixed top-0 left-0 hidden sm:block" />
    <LayoutTransition ref="managerRef">
        <template #transition>
            <USeparator orientation="horizontal" icon="i-heroicons-arrow-down" />
        </template>

        <LayoutHero class="gap-4">
            <LayoutSection>
                <div class="flex flex justify-center items-center gap-2 animate-fade-in">
                    <div class="flex flex-col items-center gap-4">
                        <h1 class="text-2xl font-bold">Pros:</h1>
                        <UtilityPlaceholder />
                    </div>
                    <USeparator orientation="vertical" color="secondary" class="h-64 mt-12" type="dashed" />
                    <div class="flex flex-col items-center gap-4">
                        <h1 class="text-2xl font-bold">Cons:</h1>
                        <UtilityPlaceholder />
                    </div>
                </div>
            </LayoutSection>
        </LayoutHero>
        <LayoutHero full-height>
            <LayoutSection>
                <UtilityOverlay pointer-events="background">
                    <template #background>
                        <!-- <CompositionSlice :count="4" orientation="vertical">
                            <template #1>
                                <UtilityPlaceholder />
                            </template>
            <template #2>
                                <UtilityPlaceholder />
                            </template>
            <template #4>
                                <UtilityPlaceholder />
                            </template>
            <template #3> -->
                        <CompositionQuarter :ui="{
                            container: 'py-4'
                        }" class="hover:scale-105 hover:bg-accented/10 transition-all duration-300 h-84 ">
                            <template #1>
                                <UtilityPlaceholder />
                            </template>
                            <template #2>
                                <UtilityPlaceholder />
                            </template>
                            <template #3>
                                <UtilityPlaceholder />
                            </template>
                            <template #4>
                                <UtilityPlaceholder />
                            </template>
                        </CompositionQuarter>
                        <!-- </template>
                        </CompositionSlice> -->
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
        <LayoutHero full-height>
            <LayoutSection>
                <UtilityOverlay pointer-events="background">
                    <template #background>
                        <!-- <CompositionSlice :count="4" orientation="vertical">
                            <template #1>
                                <UtilityPlaceholder />
                            </template>
            <template #2>
                                <UtilityPlaceholder />
                            </template>
            <template #4>
                                <UtilityPlaceholder />
                            </template>
            <template #3> -->
                        <CompositionSlice :count="4" orientation="horizontal" :ui="{
                            container: 'py-4 justify-center'
                        }" class="hover:scale-105 hover:bg-accented/10 transition-all duration-300 h-84 ">
                            <template #1>
                                <UtilityPlaceholder />
                            </template>
                            <template #2>
                                <UtilityPlaceholder />
                            </template>
                            <template #3>
                                <UtilityPlaceholder />
                            </template>
                            <template #4>
                                <UtilityPlaceholder />
                            </template>
                        </CompositionSlice>
                        <!-- </template>
                        </CompositionSlice> -->
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
        <LayoutHero>
            <LayoutSection>
                <CompositionSlice :count="3" :orientation="breakpoint === 'xs' ? 'vertical' : 'horizontal'" :ui="{
                    container: 'justify-center'
                }">
                    <template #1>
                        <UtilityPlaceholder />
                    </template>
                    <template #2>
                        <UtilityPlaceholder />
                    </template>
                    <template #3>
                        <UtilityPlaceholder />
                    </template>
                </CompositionSlice>
            </LayoutSection>
        </LayoutHero>
    </LayoutTransition>
</template>