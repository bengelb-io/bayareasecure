export default function useInView(element: Ref<HTMLElement | null>, threshold: number = 0.5) {
    const inView = ref(false)
    onMounted(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry.isIntersecting)
                inView.value = entry.isIntersecting
            })
        }, { threshold, rootMargin: '0px', root: null })
        if (element.value) {
            observer.observe(element.value)
        }
        return () => observer.disconnect()
    })

    return inView
}