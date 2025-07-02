<script lang="ts" setup>
import type p5 from "p5";
import { ref } from 'vue';

const { sketch } = defineProps<{
    canvasId: string;
    sketch: (p: p5) => void;
}>();

const container = ref<HTMLDivElement | null>(null);

onMounted(async () => {
    const p5 = await import("p5");
    const renderer = new p5.default(sketch);
    return () => renderer.remove();
});
</script>

<template>
    <div :id="canvasId" ref="container">
        <slot />
    </div>
</template>