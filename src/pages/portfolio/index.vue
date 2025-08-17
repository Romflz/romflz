<template>
  <DefaultLayout :has-content="true">
    <template v-slot:header>
      <div class="header">
        <h1 class="text-2xl font-bold">/Portfolio</h1>
      </div>
    </template>
    <template v-slot:content>
      <div class="content"></div>
    </template>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>
