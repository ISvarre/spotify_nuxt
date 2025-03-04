<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { Track } from '~/types/spotify'

const route = useRoute()
const artistId = route.params.id as string
const topTracks = ref<Track[] | null>(null)

async function fetchTopTracks() {
    const tracks  = await $fetch(`/api/getTopTracks?id=` + artistId) || []
  console.log(tracks)
    topTracks.value = (tracks as any).tracks
}

onMounted(() => {
  fetchTopTracks()
})
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-4 py-4">
    <div v-if="topTracks" class="bg-white p-4 rounded-lg shadow-lg h-full">
      <div  class="grid grid-cols-3 gap-4 overflow-y-auto w-full px-2 pb-15">
        <TrackCard
            v-for="track in topTracks"
            :key="track.name"
            :track="track"
        />
      </div>
    </div>
  </div>
</template>