<!--
===================================
Main Vue File(Root Component)
===================================
-->

<template>
  <div class="wrapper-app">
    <ArtistCard v-for="(artist, index) in artistList" :key="index" v-bind="artist" />
  </div>
</template>

<script setup lang="ts">
import ArtistCard from '@/components/ArtistCard/ArtistCard.vue'
import { type ArtistInfo } from '@/model/artist'

const artistList: ArtistInfo[] = [
  {
    name: 'Shahla Riahi',
    occupation: ['Actress', 'Film Director'],
    imgPath: '/src/assets/imgs/artists/ShahlaRiahi.png',
    dateOfBirth: 1926,
    deathDate: 2019
  },
  {
    name: 'Simin Ghanem',
    occupation: ['Singer'],
    imgPath: '/src/assets/imgs/artists/SiminGhanem.png',
    dateOfBirth: 1944
  }
]
</script>

<style lang="less">
.wrapper-app {
  display: flex;
  gap: 1em;
}
</style>
