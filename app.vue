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
  <div>
    <form @submit.prevent="fetchArtists">
      <input
          v-model="artistName"
          type="text"
          @keyup.enter="fetchArtists"
          placeholder="Artist"
          class="px-2 p-1 border-2 border-solid border-black rounded-xl"
      />
    </form>
    <div v-if="artistListData" class="bg-white p-4 rounded-lg shadow-lg h-full">
      <div  class="grid grid-cols-4 gap-4 overflow-y-auto w-full px-2 pb-15">
        <ArtistCard
            v-for="artist in artistListData"
            :key="artist.name"
            :artist="artist"
        />
      </div>
    </div>
  </div>
</template>