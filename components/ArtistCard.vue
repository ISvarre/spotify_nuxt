<template>
  <a :href="artist.external_urls.spotify" target="_blank">
    <div class="bg-white rounded-xl shadow-lg overflow-hidden">
      <div class="relative h-48">
        <img
            :src="artist.images[0]?.url"
            alt="Artist Image"
            class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
      </div>
      <div class="p-4 h-full">
        <h2 class="text-xl font-bold text-gray-900 mb-2">
          {{ artist.name }}
        </h2>
        <p class="text-sm text-gray-600">
          {{ artist.followers?.total?.toLocaleString() }} followers
        </p>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import type {Artist} from "~/types/spotify";

defineProps<{
  artist : Artist
}>()
</script>