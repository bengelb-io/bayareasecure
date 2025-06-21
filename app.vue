<template>
  <div>
    <NuxtPage />
    <UtilityOverlay pointer-events="background">
      <template #foreground>
        <div class="flex flex-col justify-end h-full ">
          <div class="bg-black/20  h-1/2" />
        </div>
      </template>
      <template #background>
        <USeparator icon="i-heroicons-chevron-down" :ui="{ container: 'rounded-full ring-2 p-1 ring-primary-500 bg-dark z-10' }" />
      </template>
    </UtilityOverlay>
    <LayoutFooter>
      <template #logo>
        <UButton variant="ghost" class="p-0 text-xl font-bold" icon="i-heroicons-home">
          My Company
        </UButton>
      </template>
      <template #links>
        <nav class="grid grid-cols-2 gap-8">
          <UButton variant="ghost" class="justify-start">
            Sample Link
          </UButton>
        </nav>
      </template>
      <template #socials>
        <div class="flex space-x-4">
          <UButton v-for="social in ['twitter', 'github', 'linkedin']" :key="social" :icon="'i-simple-icons-' + social"
            :ui="{ base: 'w-fit' }" variant="ghost" class="t" />
        </div>
      </template>
      <template #copyright>
        <p class="text-center text-accented/80 text-sm">
          © {{ new Date().getFullYear() }} My Company. All rights reserved.
        </p>
      </template>
    </LayoutFooter>
  </div>
</template>
