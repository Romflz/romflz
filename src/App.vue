<template>
  <div class="h-screen w-full animated-gradient-subtle flex flex-col p-6">
    <router-view />
  </div>
</template>
<script setup lang="ts">
import { useHead } from '@unhead/vue'
useHead({
  title: 'Romflz.com',
  meta: [
    { name: 'description', content: 'Welcome to my website' },
    { property: 'og:title', content: 'Home - My Website' },
    { property: 'og:description', content: 'Welcome to my website' },
  ],
})
</script>
