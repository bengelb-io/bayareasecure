<script setup lang="ts">
import type { ATheater } from '#components';
import { useInView } from '#imports';
const theaterRef = ref<InstanceType<typeof ATheater> | null>(null);
const inView = useInView(theaterRef)

watchEffect(() => {
  if (theaterRef.value) {
    if (inView.value) {
      const { play } = theaterRef.value
      console.log(play)
      play()
    }
  }
})
</script>

<template>
  <TLayoutHero>
    <TLayoutSection>
      <div class="flex flex-col gap-8  items-center justify-center w-full ">
        <div class="flex flex-col gap-8 flex-wrap items-center justify-center w-full">
          <h1
            class="text-4xl font-extrabold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text font-italic text-transparent mb-2 w-fit">
            Learning Center
          </h1>
          <ATheater class="" ref="theaterRef" :videoIds="['JhHMJCUmq28', 'QDdOoYdb748', 'K9VE7jganBI', 'jRwqitKGnHU']" />
        </div>
        <div class="flex flex-col gap-8 flex-wrap items-center justify-center w-full"></div>
      </div>
    </TLayoutSection>
  </TLayoutHero>
</template>