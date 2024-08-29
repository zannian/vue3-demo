<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomePage from './views/HomePage.vue'
</script>

<template>
  <div class="main-container">
    <RouterView />
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: #91a8d0;
}
</style>
