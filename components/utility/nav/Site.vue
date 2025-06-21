<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

type Alias = {
    label: string
    description?: string
    icon?: string
}


defineProps<{
    defaultIcon?: string
}>()

const router = useRouter()
const routes = router.getRoutes()
const items: NavigationMenuItem[] = [{}]
// for (const route of routes) {
//     const alias = aliases[route.name as string] ?? { label: route.name, icon: defaultIcon }
//     items.push({
//         label: alias.label,
//         icon: alias.icon,
//         description: alias.description,
//         to: route.path,
//     })
// }

</script>
<template>
    <nav>
        <UButtonGroup orientation="horizontal" :items="items">
        </UButtonGroup>
    </nav>
</template>