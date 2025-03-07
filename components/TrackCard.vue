<template>
  <div class="flex flex-col items-center p-1 bg-[#f0f0f0] rounded-md">
    <img :src="track.album.images[0].url" alt="Album cover" height="210" width="210" />
    <div>{{ track.name }}</div>
  </div>
</template>

<script setup lang="ts">
import type { Track } from '~/types/spotify';

defineProps<{ track: Track }>();
</script>
