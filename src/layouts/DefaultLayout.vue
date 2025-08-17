<template>
  <div class="h-screen w-full animated-gradient-subtle flex flex-col p-6">
    <Header class="flex-shrink-0 z-10"></Header>

    <main ref="mainContainer" class="flex-1 bg-white overflow-y-auto no-scrollbar z-5 px-6 flex flex-col">
      <div ref="scrollTrigger" class="h-full flex-shrink-0 flex items-center justify-center relative">
        <slot name="header" />
        <span
          v-if="props.hasContent"
          :class="{ 'opacity-0': hasScrolled }"
          class="absolute bottom-0 text-gray-500 transition-opacity duration-300 ease-in-out animate-bounce"
        >
          scroll
        </span>
      </div>

      <div ref="contentContainer">
        <slot name="content" />
      </div>
    </main>

    <Footer class="flex-shrink-0 z-10"></Footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, useTemplateRef, nextTick } from 'vue'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const props = defineProps<{
  hasContent?: boolean
}>()

const mainContainer = useTemplateRef<HTMLElement | null>('mainContainer')
const scrollTrigger = useTemplateRef<HTMLElement | null>('scrollTrigger')
const contentContainer = useTemplateRef<HTMLElement | null>('contentContainer')

const hasScrolled = ref(false)

let observer: IntersectionObserver | null = null

onMounted(async () => {
  // Wait for slots to be rendered
  await nextTick()

  if (!mainContainer.value || !scrollTrigger.value || !contentContainer.value) {
    return
  }

  const options: IntersectionObserverInit = {
    root: mainContainer.value,
    threshold: 0.99,
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      hasScrolled.value = !entry.isIntersecting
    })
  }, options)

  observer.observe(scrollTrigger.value)
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
})
</script>
