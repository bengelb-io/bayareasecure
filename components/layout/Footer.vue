<script setup lang="ts">
withDefaults(defineProps<{
    maxWidth?: string
}>(), {
    maxWidth: 'max-w-7xl'
})
</script>

<template>

    <footer class="w-full py-12 mt-auto bg-black/20">
        <div :class="['mx-auto px-4 sm:px-6 lg:px-8', maxWidth]">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <!-- Logo Section -->
                <div class="flex items-center justify-center md:justify-start">
                    <slot name="logo" />
                </div>

                <!-- Links Section -->
                <div class="col-span-2">
                    <slot name="links" />
                </div>

                <!-- Social Links -->
                <div class="flex justify-center md:justify-end space-x-4">
                    <slot name="socials" />
                </div>
            </div>

            <!-- Copyright Section -->
            <div class="mt-8 pt-8 border-t border-accented/20">
                <slot name="copyright" />
            </div>
        </div>
    </footer>

</template>