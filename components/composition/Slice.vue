<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  ui?: {
    container: string
  }
  count: number
  orientation: 'horizontal' | 'vertical'
}>(), {
  ui: () => ({ container: '' }),
  orientation: 'horizontal',
})
defineOptions({
  inheritAttrs: false,
})

const containerClass = computed(() => {
  if (props.orientation === 'horizontal') {
    return `flex flex-row w-full h-full gap-4 ${props.ui?.container}`
  } else {
    return `grid flex flex-col w-full h-full gap-4 ${props.ui?.container}`
  }
})

</script>
<template>
  <div :class="containerClass">
    <div v-for="i in props.count" :key="i" class="flex items-center justify-center min-h-[120px] min-w-[120px]"
      v-bind="$attrs">
      <slot :name="i" />
    </div>
  </div>
</template>
