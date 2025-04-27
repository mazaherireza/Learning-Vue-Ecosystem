<!--
===================================
Main Vue File (Root Component)
===================================
-->

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <!-- Router Outlet -->
  <RouterView></RouterView>
</template>

<script setup lang="ts"></script>

<style scoped>
nav {
  display: flex;
  gap: 2rem;
}
</style>
