<template>
  <a target="_blank" class="max-w-[250px]">
    <div class="bg-white rounded-xl shadow-lg overflow-hidden h-full">
      <div class="relative h-48">
        <img
            :src="track.album.images[0]?.url"
            alt="Artist Image"
            class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
      </div>
      <div class="p-4 h-full">
        <h2 class="text-xl font-bold text-gray-900 mb-2">
          {{ track.name }}
        </h2>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import type {Track} from "~/types/spotify";

defineProps<{
  track : Track
}>()
</script>