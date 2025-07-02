<script setup lang="ts">

const props = withDefaults(defineProps<{
  ui?: {
    container: string
  }
  orientation: 'horizontal' | 'vertical'
}>(), {
  ui: () => ({ container: '' }),
  orientation: 'horizontal',
})

defineOptions({
  inheritAttrs: false,
})

const slots = useSlots()
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
    <template v-if="slots.default">
      <template v-for="(child, idx) in slots.default()" :key="idx">
        <div class="flex items-center justify-center min-h-[120px] min-w-[120px]" v-bind="$attrs">
          <component :is="child" />
        </div>
      </template>
    </template>
  </div>
</template>
