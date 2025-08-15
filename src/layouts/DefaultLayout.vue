<template>
  <div class="h-screen w-full bg-brand-orange flex flex-col p-6">
    <Header class="flex-shrink-0 z-10"></Header>

    <main class="flex-1 bg-white overflow-y-auto no-scrollbar z-5 px-6 flex flex-col">
      <div class="h-full flex-shrink-0 flex items-center justify-center relative">
        <slot name="header" />
        <span class="absolute bottom-0">scroll</span>
      </div>

      <div>
        <slot name="content" />
      </div>
    </main>

    <Footer class="flex-shrink-0 z-10"></Footer>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>
