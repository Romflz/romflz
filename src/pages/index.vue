<template>
  <DefaultLayout>
    <template v-slot:header>
      <div class="header">
        <h1 class="text-2xl font-bold">Hi</h1>
      </div>
    </template>
    <template v-slot:content>
      <div class="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam provident deserunt voluptates unde eius. Illum sapiente dicta illo natus veritatis, maxime cumque, a
          deleniti id distinctio dolorem perspiciatis atque. Quos.
        </p>
      </div>
    </template>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>
