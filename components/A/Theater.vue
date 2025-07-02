<script setup lang="ts">
import YouTubePlayer from 'youtube-player';
import PlayerState from 'youtube-player/dist/constants/PlayerStates';
import type { YouTubePlayer as YouTubePlayerInstance } from 'youtube-player/dist/types';


interface TheaterProps {
    videoIds: string[]
    autoplay?: boolean
    controls?: boolean
}

const playerId = 'player'

const props = defineProps<TheaterProps>()
const currentVideoId = ref(props.videoIds[0])
const title = ref('')
const player = ref<YouTubePlayerInstance | null>(null)


const getThumbnailUrl = (videoId: string, quality = "hqdefault") =>
    `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;

onMounted(() => {
    player.value = YouTubePlayer(playerId)
    player.value.on('stateChange', (event: { data: PlayerState, target: any }) => {
        if (event.target?.videoTitle) {
            title.value = event.target.videoTitle
        }
    })
})

defineExpose({
    play: () => {
        player.value?.playVideo()
    },
})

watchEffect(async () => {
    if (player.value) {
        await player.value.loadVideoById(currentVideoId.value)
    }
})
</script>


<template>
    <div class="w-full sm:p-8 p-2 flex flex-col gap-4 bg-slate-800 ">
        <div class="flex gap-4 lg:max-h-96 lg:flex-row flex-col ">
            <div :id="playerId" class="w-full aspect-square sm:aspect-video max-w-2xl mx-auto self-center" />
            <div
                class="flex  lg:flex-col gap-4 lg:w-64  p-2 lg:overflow-y-scroll lg:overflow-x-hidden overflow-x-scroll">
                <div v-for="videoId in props.videoIds" :key="videoId"
                    :class="[currentVideoId === videoId ? 'outline-2 outline-primary' : '', 'min-w-32 rounded-lg object-cover']">
                    <button @click="currentVideoId = videoId" class="w-full h-full">
                        <img :src="getThumbnailUrl(videoId, 'maxresdefault')" :alt="videoId">
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>