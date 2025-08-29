<template>
  <div class="h-screen w-full animated-gradient-subtle flex flex-col p-6">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
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
<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}
</style>
