<template>
  <DefaultLayout>
    <div class="text-center">
      <h1 class="text-3xl font-bold mb-6">Home</h1>

      <div class="flex flex-col items-center space-y-4">
        <p class="text-lg text-gray-600">Counter: {{ counter.count }}</p>
        <Button @click="counter.increment">Increment Counter</Button>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Button from '@/components/Button.vue'

const counter = useCounterStore()
</script>
