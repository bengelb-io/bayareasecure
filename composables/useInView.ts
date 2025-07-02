import { ref, onMounted, onBeforeUnmount } from 'vue'
import type { Ref } from 'vue'

function getElement(target: any): HTMLElement | null {
  if (!target) return null
  // Vue 3: component refs have $el, HTML elements do not
  if (target instanceof HTMLElement) return target
  if ('$el' in target && target.$el instanceof HTMLElement) return target.$el
  return null
}

export default function useInView(
  element: Ref<any>,
  options: IntersectionObserverInit = { threshold: 0.5, rootMargin: '0px', root: null }
) {
  const inView = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const el = getElement(element.value)
    if (!el) return
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        inView.value = entry.isIntersecting
      })
    }, options)
    observer.observe(el)
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })

  return inView
}