<script setup lang="ts">
import {ref} from 'vue'
import type {Artist} from "~/types/spotify";

const artistListData = ref<Artist[] | null>(null)
const artistName = ref<string>('')

async function fetchArtists() {
  const artists = await $fetch('/api/getArtistByName?name=' + artistName.value)

  artistListData.value = (artists as any).artists.items

}
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-4 py-4">
    <div class="flex flex-col gap-2 bg-white p-4 rounded-lg shadow-lg">
      <form @submit.prevent="fetchArtists">
        <input
            v-model="artistName"
            type="text"
            placeholder="Artist"
            class="px-2 p-1 border-2 border-solid border-black rounded-xl"
        />
      </form>
    </div>
    <div v-if="artistListData" class="bg-white p-4 rounded-lg shadow-lg h-full">
      <div  class="grid grid-cols-3 gap-4 overflow-y-auto w-full px-2 pb-15">
        <ArtistCard
            v-for="artist in artistListData"
            :key="artist.name"
            :artist="artist"
        />
      </div>
    </div>
  </div>
</template>