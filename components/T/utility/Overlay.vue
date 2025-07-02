<script setup lang="ts">
const { pointerEvents = 'foreground' } = defineProps<{
  pointerEvents?: 'foreground' | 'background'
}>()
</script>

<template>
  <div class="relative w-full h-full">
    <div :class="[pointerEvents === 'background' ? 'pointer-events-auto' : 'pointer-events-none']">
      <slot name="background" />
    </div>
    <div
      :class="['absolute', 'inset-0', pointerEvents === 'foreground' ? 'pointer-events-auto' : 'pointer-events-none']">
      <slot name="foreground" />
    </div>
  </div>
</template>
