<!--
====================================
Building Block of the App
====================================
-->

<template>
  <p>I'm {{ name }} and I'm a {{ job }}.</p>
</template>

<script setup>
import { ref } from 'vue'
const name = ref('Reza Mazaheri')
const job = ref('frontend developer')
</script>
