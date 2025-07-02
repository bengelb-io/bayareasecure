<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, defineEmits, defineProps, computed, defineExpose } from 'vue'

interface VideoProps {
    videoId: string
    autoplay?: boolean
    controls?: boolean
    start?: number
}

const emit = defineEmits<{
  (e: 'play'): void
  (e: 'pause'): void
  (e: 'ready'): void
}>()

const props = defineProps<VideoProps>()

const player = ref<HTMLIFrameElement | null>(null)
const iframe = ref<HTMLIFrameElement | null>(null)
const mounts = ref(0)

const embedUrl = computed(() => {
    let url = `https://www.youtube.com/embed/${props.videoId}?enablejsapi=1`
    url += `&autoplay=${props.autoplay ? 1 : 0}`
    url += `&controls=${props.controls ? 1 : 0}`
    url += `&start=${props.start}`
    return url
})

type PlayerCommand = string
function postMessageToPlayer(command: PlayerCommand, args: unknown[] = []) {
    if (!iframe.value) {
        return;
    }
    iframe.value.contentWindow?.postMessage(
        JSON.stringify({
            event: 'command',
            func: command,
            args: args,
        }),
        '*'
    )
}

function play() {
    postMessageToPlayer('playVideo')
}

function pause() {
    postMessageToPlayer('pauseVideo')
}

function onReady() {
    emit('ready')
}

function handleMessage(event: MessageEvent) {
    if (!event.data || typeof event.data !== 'string') return
    let data: any
    try {
        data = JSON.parse(event.data)
    } catch {
        return
    }
    if (data.event === 'onStateChange') {
        if (data.info === 1) emit('play')
        if (data.info === 2) emit('pause')
    }
}

onMounted(() => {
    if (mounts.value === 0) {
        mounts.value++
    } else {
        window.removeEventListener('message', handleMessage)
        window.addEventListener('message', handleMessage)
    }
})

// onUnmounted(() => {
// })

// Expose play/pause methods for parent
defineExpose({ play, pause })
</script>

<template>
    <div class="relative w-full aspect-video">
        <iframe ref="iframe" :src="embedUrl" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen
            @load="onReady" class="absolute top-0 left-0 w-full h-full"></iframe>
    </div>
</template>