<script setup lang="ts">
import { useBreakpoint } from '#imports';

defineProps<{
  title: string
  content: string
}>()

const breakpoint = useBreakpoint()
watchEffect(() => {
  console.log(breakpoint.value)
})
</script>
<template>
  <div class="hover:scale-105 transition-all duration-300 md:w-auto w-full">
    <UCard :ui="{
      root: `
        relative 
        before:content-[''] 
        before:absolute 
        before:inset-0 
        before:bg-[url('assets/css/designs/x-lattice.svg')] 
        before:opacity-20 
        before:brightness-150 
        before:rounded-xl 
        before:filter 
        before:transition-filter 
        before:duration-500
        hover:before:drop-shadow-[0_0_20px_cyan] 

        after:content-[''] 
        after:absolute 
        after:inset-0 
        after:bg-gradient-to-r 
        after:from-slate-900 
        after:to-transparent 
        after:opacity-80 
        after:transition-all 
        after:duration-300 
        after:rounded-xl
      `}">
      <div class="relative z-1">
        <h3
          class="text-xl font-semibold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-2 w-fit">
          {{ title }}
        </h3>
        <p v-if="breakpoint !== 'sm' && breakpoint !== 'xs'" class=" text-neutral-400">
          {{ content }}
        </p>
        <p v-else>
          <UCollapsible class="flex flex-col gap-2">
            <UButton label="Read More" color="neutral" variant="outline" :ui="{
            }" trailing-icon="i-lucide-chevron-down" block />
            <template #content>
              <p class=" text-neutral-400">
                {{ content }}
              </p>
            </template>
          </UCollapsible>
        </p>
      </div>
    </UCard>
  </div>
</template>
