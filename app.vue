<script setup lang="ts">
const config = useRuntimeConfig();
const route = useRoute();
</script>

<template>
  <div>
    <NuxtPage />
    <TLayoutFooter>
      <template #logo>
        <UButton variant="ghost" class="p-0 text-xl font-bold" :avatar="{
          src: 'images/sfnetworks_logo.png', size: 'md', ui: {
            root: 'outline-2 outline-primary',
          }
        }" :ui="{
          base: 'flex gap-3 cursor-pointer',
        }" :label="config.public.companyName" :to="route.path === '/' ? '#' : '/'" />
      </template>
      <template #socials>
        <div class="flex space-x-4">
          <UButton v-for="social in ['github', 'linkedin']" :key="social" :icon="'i-simple-icons-' + social"
            :ui="{ base: 'w-fit' }" variant="ghost" :to="config.public[social] as string" />
        </div>
      </template>
      <template #copyright>
        <p class="text-center text-accented/80 text-sm">
          © {{ new Date().getFullYear() }} {{ config.public.companyName }}. All rights reserved.
        </p>
      </template>
    </TLayoutFooter>
  </div>
</template>
