<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  count: number
  orientation: 'horizontal' | 'vertical'
}>(), {
  count: 4,
  orientation: 'horizontal',
})
defineOptions({
  inheritAttrs: false,
})

const containerClass = computed(() => {
  const direction = props.orientation === 'horizontal' ? 'cols' : 'rows'
  const horizon = props.orientation === 'horizontal' ? 'rows' : 'cols'
  return `grid grid-${direction}-${props.count} grid-${horizon}-1 w-full h-full gap-4`
})

</script>
<template>
  <div :class="containerClass">
    <div
      v-for="i in props.count"
      :key="i"
      class="flex items-center justify-center min-h-[120px] min-w-[120px]"
      v-bind="$attrs"
    >
      <slot :name="i" />
    </div>
  </div>
</template>
