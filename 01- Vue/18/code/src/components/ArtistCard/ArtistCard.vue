<!--
====================================
Building Block of the App
====================================
-->

<template>
  <div class="wrapper-artistCard">
    <img class="img" :src="constructFullPath" :alt="props.name" />
    <div class="info">
      <h2 class="name">{{ props.name }}</h2>
      <ul class="occupation">
        <li v-for="(occupation, index) in props.occupation" :key="index">
          {{ occupation }}
        </li>
      </ul>
      <p>
        {{ props?.deathDate ? `Died at ${props.deathDate}` : `${getAge} years old` }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { type ArtistInfo } from '@/model/artist'

const props = defineProps<ArtistInfo>()

const BASE_URL = 'http://127.0.0.1:5173/'
const constructFullPath = computed(() => {
  return `${BASE_URL + props.imgPath}`
})

const getAge = computed(() => {
  const date = new Date()
  return (props?.deathDate ?? date.getFullYear()) - props.dateOfBirth
})
</script>

<style lang="less">
.wrapper-artistCard {
  width: 200px;
  border-radius: 0.5em;
  background: white;
  .img {
    width: 100%;
    height: 200px;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    object-fit: cover;
  }
  .info {
    padding: 1em;
    height: 150px;
    overflow: hidden;
    &:hover {
      overflow-y: auto;
    }
    p {
      font-weight: 300;
      font-size: smaller;
      margin-top: 0.5em;
    }
    .name {
      color: var(--c-500);
      font-weight: 900;
      font-size: large;
      margin-bottom: 0.5em;
    }
    ul {
      &.occupation {
        li {
          font-weight: 500;
          font-size: medium;
          list-style: none;
        }
      }
    }
  }
}
</style>
