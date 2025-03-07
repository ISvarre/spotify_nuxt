<template>
  <div class="track-card">
    <img :src="track.album.images[0].url" alt="Album cover" />
    <div>{{ track.name }}</div>
    <div>{{ track.artists.map(artist => artist.name).join(', ') }}</div>
  </div>
</template>

<script setup lang="ts">
import type { Track } from '~/types/spotify';

defineProps<{ track: Track }>();
</script>

<style scoped>
.track-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>