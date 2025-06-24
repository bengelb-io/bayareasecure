import { useWindowSize } from '@vueuse/core'
import { ref, watch } from 'vue'
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'


export default function useBreakpoint() {
    const { width } = useWindowSize()
    const currentBreakpoint = ref<Breakpoint>('xs')


    // Tailwind's default breakpoints
    const breakpoints = {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280
    } as const

    const updateBreakpoint = (newWidth: number) => {
        let newBreakpoint: Breakpoint = 'xs'

        if (newWidth >= breakpoints.xl) {
            newBreakpoint = 'xl'
        } else if (newWidth >= breakpoints.lg) {
            newBreakpoint = 'lg'
        } else if (newWidth >= breakpoints.md) {
            newBreakpoint = 'md'
        } else if (newWidth >= breakpoints.sm) {
            newBreakpoint = 'sm'
        }

        if (newBreakpoint !== currentBreakpoint.value) {
            currentBreakpoint.value = newBreakpoint
        }
    }
    watch(width, updateBreakpoint)
    onMounted(() => {
        updateBreakpoint(width.value)
    })
    return currentBreakpoint
}

