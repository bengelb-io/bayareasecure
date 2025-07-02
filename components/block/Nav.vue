<script setup lang="ts">
const config = useRuntimeConfig();
const route = useRoute();

const backdrop = ref(false)
defineExpose({
    setBackdrop: (value: boolean) => {
        backdrop.value = value
    }
})
</script>



<template>
    <div class="fixed w-full z-10">
        <div :class="[ backdrop ? 'bg-black/40 backdrop-blur-sm z-50' : '', 'transition-all duration-800']">
            <nav class="flex justify-between items-center p-4">
                <div>
                    <UButton :label="config.public.companyName" variant="ghost" :to="route.path === '/' ? '#' : '/'"
                        :avatar="{
                            src: 'images/sfnetworks_logo.png', size: 'md', ui: {
                                root: 'outline-2 outline-primary',
                            }
                        }" :ui="{
                            base: 'flex gap-2 cursor-pointer',
                        }" />
                </div>
            </nav>
        </div>
    </div>
</template>