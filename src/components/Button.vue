<template>
  <button class="bg-blue-500 text-white px-4 py-2 rounded" @click="action">
    <slot>Button</slot>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  click: []
}>()

const action = () => {
  emit('click')
}
</script>
