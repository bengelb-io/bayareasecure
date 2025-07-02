<script setup lang="ts">
import type { AVideo, BlockNav, BlockSpash } from '#components';
import { useInView } from '#imports';

const splashRef = ref<InstanceType<typeof BlockSpash> | null>(null);
const navRef = ref<InstanceType<typeof BlockNav> | null>(null);
const inView = useInView(splashRef)

watchEffect(() => {
    if (navRef.value) {
        const { setBackdrop } = navRef.value
        if (inView.value) {
            setBackdrop(false)
        } else {
            setBackdrop(true)
        }
    }

})
</script>

<template>
    <BlockNav ref="navRef" />

    <BlockSpash ref="splashRef" class="" />
    <TLayoutTransition>
        <BlockInfo />
        <BlockLearning />
        <template #transition>
            <USeparator :ui="{ avatar: 'z-10 outline-1 outline-primary' }" :avatar="{
            src: 'images/sfnetworks_logo.png',
            size: 'md',
            alt: 'avatar',
        }" />
        </template>
    </TLayoutTransition>
</template>