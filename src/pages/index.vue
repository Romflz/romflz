<template>
  <DefaultLayout>
    <template v-slot:header>
      <div class="header">
        <h1 class="text-2xl font-bold">Hi</h1>
      </div>
    </template>
    <template v-slot:content></template>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>
